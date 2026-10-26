import fs from 'node:fs';
const p = '.github/workflows/deploiement.yml';
let t = fs.readFileSync(p, 'utf8');
const avant = t;

function rem(a, b) {
  if (!t.includes(a)) { console.error('NON TROUVÉ :\n' + a.slice(0, 200) + '\n'); process.exitCode = 1; return; }
  t = t.replace(a, b);
}

// --- En-tête -------------------------------------------------------------
t = t.slice(t.indexOf('on:\n'));
t =
`# Construit le site de Meaux et le publie sur GitHub Pages à chaque
# \`git push\` sur main.
#
# Troisième hébergement envisagé le 26 octobre 2026 : o2switch, puis Cloudflare
# Pages, puis GitHub Pages. C'est celui-ci qui est en place. Le site de Lyon
# reste chez o2switch : les deux dépôts n'ont plus la même chaîne de
# publication, et ce fichier ne doit PAS être recopié de l'un à l'autre.
#
# Aucun secret à renseigner. La publication passe par le jeton que GitHub
# fournit lui-même à l'exécution (\`id-token\`), pas par une clé d'API à stocker.
# C'est le seul avantage net de GitHub Pages sur les deux autres hébergements.
#
# Ce que GitHub Pages ne sait PAS faire, et qui est donc perdu :
#   · les en-têtes HTTP personnalisés. X-Content-Type-Options, X-Frame-Options
#     et Permissions-Policy n'ont pas d'équivalent en balise meta et ne sont
#     plus envoyés. Seule la politique de référent a été récupérée, par un
#     <meta name="referrer"> dans BaseLayout.
#   · la politique de contenu (CSP), pour la même raison.
#   · le contrôle du cache. GitHub Pages impose le sien.
#
# Ce qu'il sait faire :
#   · la redirection www → apex, automatiquement, dès lors que les deux noms
#     sont configurés en DNS et que le domaine personnalisé du dépôt est l'apex.
#   · le HTTPS, par certificat Let's Encrypt renouvelé tout seul.
#   · la page 404, en servant /404.html.
#
# PIÈGE : sans le fichier public/.nojekyll, GitHub Pages fait passer le site par
# Jekyll, qui supprime tout dossier commençant par un souligné. Il effacerait
# donc /_astro/, c'est-à-dire la TOTALITÉ du CSS et du JavaScript. Le site
# s'afficherait en texte brut. Le contrôle plus bas refuse de publier sans lui.

` + t;

rem('name: Déploiement Cloudflare Pages', 'name: Déploiement GitHub Pages');

// --- Permissions et concurrence ------------------------------------------
rem(
`# Deux pushes rapprochés ne doivent pas téléverser en même temps : le second
# annule le premier plutôt que d'entrelacer deux envois sur le même dossier.
concurrency:
  group: deploiement-meaux
  cancel-in-progress: true`,
`# Droits requis par la publication GitHub Pages. Volontairement limités à ça :
# \`contents: read\` suffit pour lire le dépôt, le workflow n'écrit rien dedans.
permissions:
  contents: read
  pages: write
  id-token: write

# Deux pushes rapprochés ne doivent pas publier en même temps. On n'annule PAS
# le déploiement en cours : contrairement à un envoi FTP, une publication Pages
# interrompue laisse le site dans son état précédent, et il vaut mieux attendre
# la fin de la première que de la couper au milieu.
concurrency:
  group: pages
  cancel-in-progress: false`);

// --- Contrôle _headers → .nojekyll ---------------------------------------
rem(
`          # Sur Cloudflare Pages, les en-têtes viennent de _headers. Sans ce
          # fichier le site s'affiche parfaitement — il perd juste en silence
          # tous ses en-têtes de sécurité et sa politique de contenu. C'est
          # exactement le genre de panne qu'on ne voit pas, d'où ce contrôle.
          if [ ! -f dist/_headers ]; then
            echo "::error::dist/_headers absent : le site perdrait ses en-têtes de sécurité."
            exit 1
          fi`,
`          # Sans .nojekyll, GitHub Pages passe le site par Jekyll, qui supprime
          # tout dossier commençant par un souligné — donc /_astro/, c'est-à-dire
          # tout le CSS et tout le JavaScript. Le site s'afficherait en texte
          # brut. C'est la panne la plus spectaculaire de cette plateforme, et
          # elle tient à un fichier vide.
          if [ ! -f dist/.nojekyll ]; then
            echo "::error::dist/.nojekyll absent : Jekyll supprimerait /_astro/, le site perdrait tout son CSS."
            exit 1
          fi
          # Le CNAME porte le domaine personnalisé. Sans lui, GitHub Pages
          # retombe sur l'adresse en github.io et le domaine ne répond plus.
          if [ ! -f dist/CNAME ]; then
            echo "::error::dist/CNAME absent : le domaine personnalisé serait perdu."
            exit 1
          fi
          attendu=$(grep -o '<loc>https://[^/]*' dist/sitemap-0.xml | head -1 | sed 's|<loc>https://||')
          if [ "$(cat dist/CNAME)" != "$attendu" ]; then
            echo "::error::dist/CNAME vaut '$(cat dist/CNAME)' alors que le sitemap annonce '$attendu'."
            exit 1
          fi
          # Contrôle de fond : /_astro/ doit contenir quelque chose.
          if [ -z "$(ls -A dist/_astro 2>/dev/null)" ]; then
            echo "::error::dist/_astro vide : le site n'aurait ni CSS ni JavaScript."
            exit 1
          fi`);

rem(
`          echo "$pages pages, _headers et clé IndexNow présents."`,
`          echo "$pages pages, .nojekyll, CNAME et clé IndexNow présents."`);

// --- Publication ---------------------------------------------------------
rem(
`      - name: Publier sur Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: \${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: \${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=serrurier-meaux --branch=main`,
`      - name: Préparer GitHub Pages
        uses: actions/configure-pages@v5

      # include-hidden-files : sans cette option, .nojekyll n'est PAS embarqué
      # dans l'archive, et on retombe exactement sur la panne qu'il évite.
      - name: Empaqueter le site
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist
          include-hidden-files: true

      - name: Publier sur GitHub Pages
        id: pages
        uses: actions/deploy-pages@v4`);

// --- Environnement requis par deploy-pages -------------------------------
rem(
`jobs:
  publier:
    runs-on: ubuntu-latest
    steps:`,
`jobs:
  publier:
    runs-on: ubuntu-latest
    # Exigé par actions/deploy-pages : c'est cet environnement qui porte l'URL
    # publiée, visible dans l'onglet Actions une fois le déploiement terminé.
    environment:
      name: github-pages
      url: \${{ steps.pages.outputs.page_url }}
    steps:`);

if (t === avant) { console.error('aucun changement'); process.exitCode = 1; }
fs.writeFileSync(p, t);
console.log('workflow réécrit pour GitHub Pages');
