// Signale aux moteurs IndexNow les pages qui ont réellement changé.
//
// POURQUOI UN DIFF PLUTÔT QUE TOUT RENVOYER
// Rien n'interdit de soumettre les 47 URL à chaque déploiement, et ça marcherait.
// Mais le protocole demande de ne signaler que ce qui a changé, et les moteurs
// finissent par déprioriser une source qui réannonce indéfiniment les mêmes
// pages inchangées. Un correctif de typo sur une page doit donc déclencher une
// soumission d'une URL, pas de quarante-sept.
//
// COMMENT LE DIFF EST CALCULÉ
// On empreinte chaque page produite (SHA-256 du HTML final) et on compare à
// l'empreinte du déploiement précédent, conservée dans le cache GitHub Actions.
// Le cache peut disparaître — il expire au bout de sept jours sans lecture, et
// GitHub l'évince quand le dépôt dépasse son quota. Dans ce cas on repart de
// zéro et tout est soumis : c'est le comportement voulu, mieux vaut un envoi
// complet de temps en temps qu'une page oubliée.
//
// Les URL viennent du sitemap, jamais d'un parcours de dist/ : ce qui n'est pas
// dans le sitemap n'a pas à être annoncé (la 404, notamment).

import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SITEMAP = 'dist/sitemap-0.xml';
const EMPREINTES = 'empreintes-indexnow.json';
const POINT_DE_COLLECTE = 'https://api.indexnow.org/IndexNow';

// Le code de retour seul est illisible six mois plus tard dans un journal.
const SENS = {
  200: 'URL acceptées.',
  202: 'URL acceptées, clé en cours de validation.',
  400: 'Format de la requête invalide.',
  403: "Clé refusée : le fichier /<clé>.txt est absent, ou son contenu ne correspond pas à son nom.",
  422: "URL n'appartenant pas au domaine, ou clé ne correspondant pas au protocole.",
  429: 'Trop de soumissions, considérées comme du spam.',
};

// La clé n'est pas passée en paramètre : on la lit dans le fichier de preuve
// réellement produit. La recopier ici ou dans le workflow rouvrirait la
// divergence que ce fichier est justement censé rendre impossible.
const fichierCle = (await readdir('dist')).find((f) => /^[0-9a-f]{8,128}.txt$/i.test(f));
if (!fichierCle) throw new Error('Aucun fichier de preuve IndexNow dans dist/.');

const cle = fichierCle.replace(/.txt$/i, '');
const contenu = (await readFile(path.join('dist', fichierCle), 'utf8')).trim();
if (contenu !== cle) {
  throw new Error(
    `Le fichier ${fichierCle} contient « ${contenu} » : les moteurs répondraient 403.`,
  );
}

const sitemap = await readFile(SITEMAP, 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) throw new Error('Aucune URL dans le sitemap.');

const hote = new URL(urls[0]).host;

// Chemin du fichier produit pour une URL donnée : / → dist/index.html,
// /tarifs/ → dist/tarifs/index.html.
const fichierDe = (url) => {
  const chemin = new URL(url).pathname.replace(/^\/|\/$/g, '');
  return path.join('dist', chemin, 'index.html');
};

const empreintes = {};
for (const url of urls) {
  const fichier = fichierDe(url);
  if (!existsSync(fichier)) {
    // Une URL du sitemap sans fichier correspondant est une anomalie de build,
    // pas un cas à ignorer en silence.
    throw new Error(`${url} est dans le sitemap mais ${fichier} n'existe pas.`);
  }
  empreintes[url] = createHash('sha256').update(await readFile(fichier)).digest('hex');
}

let precedentes = {};
if (existsSync(EMPREINTES)) {
  try {
    precedentes = JSON.parse(await readFile(EMPREINTES, 'utf8'));
  } catch {
    console.log('Empreintes précédentes illisibles, tout sera soumis.');
  }
}

const premierPassage = Object.keys(precedentes).length === 0;
const modifiees = urls.filter((url) => precedentes[url] !== empreintes[url]);

await writeFile(EMPREINTES, JSON.stringify(empreintes, null, 2));

if (modifiees.length === 0) {
  console.log('Aucune page modifiée, rien à soumettre.');
  process.exit(0);
}

console.log(
  premierPassage
    ? `Premier passage (ou cache expiré) : ${modifiees.length} URL à soumettre.`
    : `${modifiees.length} page(s) modifiée(s) sur ${urls.length} :`,
);
if (!premierPassage) modifiees.forEach((url) => console.log(`  ${url}`));

// Permet de verifier le calcul du diff sans rien annoncer aux moteurs :
//   INDEXNOW_SIMULATION=1 node .github/scripts/indexnow.mjs
if (process.env.INDEXNOW_SIMULATION) {
  console.log(`Simulation : aucune requete envoyee (hote ${hote}, cle ${cle}).`);
  process.exit(0);
}

const reponse = await fetch(POINT_DE_COLLECTE, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: hote,
    key: cle,
    keyLocation: `https://${hote}/${cle}.txt`,
    urlList: modifiees,
  }),
});

console.log(`Réponse ${reponse.status} — ${SENS[reponse.status] ?? 'code inattendu.'}`);

// Un refus doit être visible : une soumission qui échoue en silence pendant des
// semaines, c'est exactement ce qu'IndexNow est censé éviter.
if (!reponse.ok) {
  const corps = await reponse.text().catch(() => '');
  if (corps.trim()) console.log(corps.trim().slice(0, 500));
  process.exit(1);
}
