import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL du site : sert de base aux URL canoniques, au sitemap, aux données
// structurées et à l'image de partage. Elle doit correspondre à l'adresse
// réellement servie.
//
// Domaine propre au site de Meaux, acheté par Rayane en octobre 2026. Il est
// distinct de serrurier-lyon-7j7.fr : les deux sites sont deux dépôts séparés
// qui partagent le même squelette, jamais la même adresse ni le même sitemap.
// Il est écrit ici en clair plutôt que laissé à une variable d'environnement :
// le site se construit désormais sur le poste avant d'être envoyé en FTP, et
// une variable oubliée — ou perdue entre un terminal Git Bash et PowerShell,
// qui ne la déclarent pas de la même façon — enverrait un sitemap sur
// localhost. Un `npm run build` nu doit suffire.
//
// Forme canonique SANS www, cohérente avec la redirection de public/.htaccess.
const DOMAINE = 'https://serrurier-meaux.fr';

// Les variables restent prioritaires, pour une préversion ou un autre domaine :
//   SITE_URL           → à renseigner soi-même au besoin
//   URL               → renseignée automatiquement par Netlify
//   DEPLOY_PRIME_URL   → déploiement de branche ou de préversion sur Netlify
const SITE_URL =
  process.env.SITE_URL ?? process.env.URL ?? process.env.DEPLOY_PRIME_URL ?? DOMAINE;

// Garde-fou. Sans adresse réelle, le site part avec des URL canoniques, un
// sitemap et une image de partage pointant sur localhost : il devient
// inindexable sans que rien ne le signale.
//
// La vérification portait seulement sur Netlify, qui renseigne `URL` tout seul.
// Elle couvre désormais toute construction de production, parce qu'un build
// lancé à la main pour un hébergement mutualisé n'a, lui, aucune variable
// fournie par la plateforme — c'est précisément le cas le plus exposé.
const estProduction =
  process.env.NETLIFY || process.env.CI || process.argv.includes('build');

if (estProduction && SITE_URL.startsWith('http://localhost')) {
  throw new Error(
    'Construction de production sans adresse de site : les URL canoniques, le ' +
      'sitemap et l’image de partage pointeraient sur localhost.\n' +
      'Renseignez SITE_URL, par exemple :\n' +
      '  SITE_URL=https://mondomaine.fr npm run build',
  );
}

export default defineConfig({
  site: SITE_URL,

  // Les pages sont générées en `dossier/index.html`, donc l'URL canonique porte
  // un slash final. On l'impose ici pour que le serveur de dev se comporte comme
  // la production : les liens internes s'écrivent avec le slash et évitent ainsi
  // une redirection 301 à chaque clic.
  trailingSlash: 'always',

  integrations: [sitemap()],
});
