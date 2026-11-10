// Mesure la part de texte que les pages de zone ont en commun.
//
// Pourquoi : vingt pages bâties sur un même gabarit sont exactement ce que les
// moteurs appellent des pages satellites quand seul le nom de la ville change.
// Plutôt que d'en juger à l'œil, on compte. Le texte de <main> est découpé en
// suites de cinq mots ; une suite présente sur une seule page est « propre »,
// les autres sont partagées.
//
// Lecture seule : uniquement des GET sur des pages publiques.
//
//   node .github/scripts/ressemblance-zones.mjs https://serrurier-meaux.fr
//
// Relevé du 10 novembre 2026 : 18 % de texte propre en moyenne, 70 % en commun
// avec la page la plus proche. Voir CLAUDE.md, « Les zones ».
const base = (process.argv[2] || 'https://serrurier-meaux.fr').replace(/[/]$/, '');
const xml = await (await fetch(base + '/sitemap-0.xml')).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => /\/zones\/[^/]+\/$/.test(u));

const texte = (html) => {
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/) || [, html])[1];
  return main
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .toLowerCase()
    .replace(/[^a-zà-ÿœ0-9]+/g, ' ')
    .trim()
    .split(' ');
};
const tuiles = (mots, n = 5) => {
  const s = new Set();
  for (let i = 0; i + n <= mots.length; i++) s.add(mots.slice(i, i + n).join(' '));
  return s;
};

const pages = [];
for (const u of urls) {
  const mots = texte(await (await fetch(u)).text());
  pages.push({ slug: u.split('/').slice(-2)[0], mots, t: tuiles(mots) });
}

// Fréquence de chaque tuile sur l'ensemble des pages.
const freq = new Map();
for (const p of pages) for (const x of p.t) freq.set(x, (freq.get(x) || 0) + 1);

const lignes = pages.map((p) => {
  let propres = 0;
  for (const x of p.t) if (freq.get(x) === 1) propres++;
  let pire = 0, avec = '';
  for (const q of pages) {
    if (q === p) continue;
    let inter = 0;
    for (const x of p.t) if (q.t.has(x)) inter++;
    const j = inter / (p.t.size + q.t.size - inter);
    if (j > pire) { pire = j; avec = q.slug; }
  }
  return { slug: p.slug, mots: p.mots.length, propre: Math.round((100 * propres) / p.t.size), pire: Math.round(100 * pire), avec };
});
lignes.sort((a, b) => a.propre - b.propre);
console.log(base, '—', pages.length, 'pages de zone');
console.log('slug | mots | % texte propre | % commun avec la plus proche');
for (const l of lignes) console.log(`${l.slug} | ${l.mots} | ${l.propre} | ${l.pire} (${l.avec})`);
const moy = (k) => Math.round(lignes.reduce((s, l) => s + l[k], 0) / lignes.length);
console.log(`MOYENNE | ${moy('mots')} | ${moy('propre')} | ${moy('pire')}`);
