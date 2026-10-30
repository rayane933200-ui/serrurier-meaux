# CLAUDE.md

Ce fichier fournit le contexte du projet à Claude Code pour travailler efficacement sur ce dépôt.

## Vue d'ensemble du projet

Site vitrine professionnel construit avec **Astro** pour une activité de serrurerie à **Meaux
(77100, Seine-et-Marne)**. Objectif : présenter l'activité, les services/offres et permettre la
prise de contact, avec un chargement rapide et un bon référencement (SEO).

- **Logo et charte graphique** : fournis par l'utilisateur et **déjà intégrés**. Logo dans `src/assets/` : `logo-full.png` (lockup complet, opaque, réservé aux données structurées et à l'image de partage), `logo-icon.png` (icône opaque, conservée comme source) et **`logo-icon-detoure.png`**, la version à canal alpha, seule employée à l'écran. Palette dans `src/styles/tokens.css` : **blanc épuré** (fond `#ffffff`) depuis le 27 octobre 2026, sans aucun bandeau sombre. L'**or** reste l'unique couleur d'accent. Voir « Blanc épuré » plus bas pour la règle des trois ors, qui n'est pas négociable. Ne pas régénérer de logo ni réinterpréter la palette.
- **Contenu** : ne jamais inventer de coordonnées, de tarifs, de chiffres, de témoignages clients, de certifications, de marques travaillées ou de références sans confirmation explicite. Les champs encore inconnus sont marqués `À COMPLÉTER` dans `src/data/site.ts` et s'affichent comme `[À COMPLÉTER]` — les laisser tels quels plutôt que les remplir au jugé.

### Ce dépôt est le jumeau de celui de Lyon

Il existe un second site, **`serrurier-lyon-7j7.fr`**, en production depuis fin septembre 2026,
dans un dépôt voisin (`../serrurier`). Celui-ci en est né le 26 octobre 2026 : **même entreprise,
même charte, même squelette, autre ville**.

Le choix de deux dépôts séparés plutôt qu'un dépôt paramétré est **délibéré**, tranché par Rayane
le 26 octobre 2026. La raison : ce qui est commun (composants, charte, chaîne de construction) est
fini et ne bouge presque plus, tandis que ce qui diffère — la totalité des textes, les zones, les
photos — devait être réécrit de toute façon. Factoriser aurait imposé un refactor de quarante
fichiers sur un site qui tourne en production.

**Conséquence pratique : une correction sur un fichier commun doit être faite deux fois.** Les
chemins de fichiers sont volontairement identiques entre les deux dépôts, pour qu'un fichier
corrigé ici se recopie tel quel là-bas — et réciproquement.

Les fichiers réellement communs : `src/components/`, `src/layouts/`, `src/styles/`,
`src/pages/robots.txt.ts`, `src/pages/[cleIndexNow].txt.ts`, `public/fonts/`,
`.github/scripts/indexnow.mjs`.

**Ne sont plus communs depuis le 26 octobre 2026** : tout ce qui touche à
l'hébergement. Lyon est chez o2switch avec un `public/.htaccess` et un envoi
FTP ; Meaux est sur GitHub Pages avec un `public/.nojekyll`, un `public/CNAME`
et une publication par GitHub Actions. Ne jamais recopier l'un sur l'autre.

**Ce qui ne doit JAMAIS être recopié d'un dépôt à l'autre** : le domaine d'`astro.config.mjs`, la
clé IndexNow, le jeton Search Console, les secrets FTP, et tout `src/data/` (zones, services,
articles, FAQ — leurs textes nomment la ville).

### Identité et zone : point important

L'entreprise est un **entrepreneur individuel dont le siège est à Les Pavillons-sous-Bois
(93320)**, en Seine-Saint-Denis. Meaux est à une quarantaine de kilomètres, dans le même bassin
francilien : contrairement au site de Lyon, **la ville ciblée est géographiquement cohérente avec
l'implantation réelle**.

L'adresse du siège figure néanmoins uniquement dans les mentions légales (obligation LCEN) et
volontairement **pas** dans les données structurées, l'activité étant une activité de déplacement
(*service area business*).

De même, l'enseigne SIRENE est **Rexpress**, mais le nom affiché sur le site est **Serrurier**
(choix de l'utilisateur) ; Rexpress n'apparaît que dans les mentions légales.

### La promesse de délai, et pourquoi elle est à surveiller

Le site annonce **30 minutes, 24h/24 et 7j/7**, comme celui de Lyon. Rayane l'a décidé le
26 octobre 2026, **après que le risque lui a été signalé** : Meaux est à ~40 km du siège, soit
une quarantaine de minutes de route sans trafic, et seule une équipe déjà sur place tient ce
délai.

Il a maintenu la promesse en connaissance de cause. Ne pas la durcir davantage, et ne pas la
réduire non plus sans le lui redemander. Si des retours clients montrent qu'elle ne tient pas,
c'est la promesse qu'il faut corriger, pas l'habillage.

## Stack technique

- **Framework** : Astro (dernière version stable)
- **Rendu** : statique par défaut (SSG). Ne passer en SSR/hybrid que si une fonctionnalité l'exige explicitement
- **Styling** : CSS natif / Astro scoped styles
- **Gestionnaire de paquets** : npm
- **Domaine** : `serrurier-meaux.fr`, forme canonique sans `www`, acheté chez Internet.bs
- **Hébergement** : **GitHub Pages** (décision de Rayane le 26/10/2026 ; Lyon reste chez
  o2switch). Dépôt `rayane933200-ui/serrurier-meaux`, **public**.

  Deux fichiers sans lesquels le site casse, et qui ne doivent jamais être supprimés :
  `public/.nojekyll` — sans lui, Jekyll efface `/_astro/`, c'est-à-dire tout le CSS et tout le
  JavaScript, et le site s'affiche en texte brut — et `public/CNAME`, qui porte le domaine
  personnalisé et que chaque déploiement réécrirait sinon.

  **GitHub Pages ne sert aucun en-tête HTTP personnalisé.** Ni `.htaccess`, ni `_headers` — ce
  dernier n'a vécu que le temps du passage par Cloudflare et a été retiré en arrivant ici.
  Mesuré en production le 27/10/2026 : aucun en-tête de sécurité n'est envoyé. Ne pas en
  réintroduire un : un fichier de configuration inerte fait croire à une protection inexistante.
  Les
  deux seraient ignorés, et servis en clair. `X-Content-Type-Options`, `X-Frame-Options`,
  `Permissions-Policy` et la CSP sont perdus, sans équivalent en balise meta. Seule la politique
  de référent a été récupérée, par un `<meta name="referrer">` dans `BaseLayout.astro`. C'est le
  prix du choix d'hébergement, pas un oubli — ne pas « réparer » en remettant un fichier
  d'en-têtes.

## Commandes courantes

```bash
npm install          # installer les dépendances
npm run dev           # serveur de développement local
npm run build          # build de production dans dist/
npm run preview         # prévisualiser le build de production
```

### Le dépôt est dans un dossier OneDrive : vider `dist/` avant chaque envoi

Le projet est synchronisé par OneDrive. Pendant un `npm run build`, la synchronisation entre en
concurrence avec l'écriture des fichiers : sur le dépôt de Lyon, le 29 septembre 2026, huit pages
de `dist/` se sont retrouvées en doublon sous la forme `index-PO-RIDRIS.html`, et — plus grave —
le `index.html` correspondant conservait la **version périmée** de la page pendant que le contenu
à jour partait dans la copie de conflit. Un envoi FTP en l'état aurait publié des pages
anciennes, plus huit URL en double.

Le réflexe, avant tout déploiement :

```bash
rm -rf dist && npm run build
find dist -name "*-$(hostname)*"   # doit ne rien renvoyer
```

Le vrai correctif est d'exclure `dist/` de la synchronisation OneDrive, ou de sortir le dépôt du
dossier synchronisé.

### IndexNow : prévenir les moteurs au lieu de les attendre

Le site soumet ses pages modifiées à IndexNow à chaque déploiement
(`.github/scripts/indexnow.mjs`, appelé par le workflow une fois la
publication GitHub Pages terminée).
Couvre **Bing, Yandex, Seznam et Naver — pas Google**, qui a testé le protocole
puis y a renoncé. C'est donc un complément à Search Console, jamais un
remplacement : ne pas laisser croire l'inverse.

La clé vit dans `site.analytics.indexNowKey` et **le fichier de preuve
`/<clé>.txt` est généré à partir d'elle** par `src/pages/[cleIndexNow].txt.ts`.
Ne jamais écrire ce `.txt` à la main dans `public/` : si le nom du fichier et
son contenu divergent d'un seul caractère, les moteurs répondent 403 et les
soumissions sont rejetées **sans qu'aucune page du site ne paraisse cassée**.

**La clé de ce dépôt est différente de celle de Lyon, et doit le rester.** Le fichier de preuve
est servi par le domaine qui soumet : une clé partagée entre deux domaines fait rejeter les
soumissions de l'un des deux, en silence.

Cette clé est publique par conception — elle est servie en clair, et c'est
précisément ce qui prouve aux moteurs qu'on contrôle le domaine. Elle n'ouvre
aucun accès : au pire, un tiers signale que nos pages ont changé.

Pour vérifier le calcul sans rien annoncer aux moteurs :
`INDEXNOW_SIMULATION=1 node .github/scripts/indexnow.mjs`.

### Validation auprès des moteurs : ne jamais supprimer ces fichiers

Un moteur revérifie périodiquement qu'on contrôle bien le domaine. Une propriété qui perd sa
validation **cesse de remonter ses données en silence** : aucune alerte, aucune page cassée,
juste des rapports qui se vident. C'est pour ça que ces fichiers n'ont l'air de rien.

**Bing — validé le 28 octobre 2026, par deux voies redondantes :**

- `public/BingSiteAuth.xml`, servi à la racine du site. Son contenu est imposé par Bing au
  caractère près : ne pas le reformater, ne pas y ajouter de retour à la ligne final — le
  fichier n'en a pas.
- `site.analytics.bingSiteVerification`, qui émet la balise `msvalidate.01` sur toutes les pages.

Les deux portent le même jeton et coexistent volontairement : si l'une disparaît, l'autre tient.
C'est le montage déjà retenu sur le site de Lyon pour Google. Le workflow refuse de publier si le
fichier manque de `dist/`.

Bing alimente aussi Copilot et ChatGPT : ce n'est pas un moteur secondaire pour qui vend du
dépannage, c'est l'autre moitié des réponses assistées.

**Google — validé le 30 octobre 2026, par enregistrement DNS.**

La propriété est de type **« Domaine »**, pas « Préfixe d'URL » : elle couvre d'un coup les
quatre formes d'adresse du site — avec et sans `www`, en `http` et en `https` — là où un
préfixe d'URL n'en suivrait qu'une, et laisserait croire à une chute de trafic chaque fois que
les visiteurs arrivent par une autre forme.

La preuve est un enregistrement TXT à l'apex du domaine, chez Internet.bs :

```
serrurier-meaux.fr  TXT  google-site-verification=_6-gb1nCryObBAjP_QU9nM4320kVZNw0vMNlLFre1eI
```

**Ne jamais le supprimer**, et ne jamais écraser les autres TXT du domaine en l'éditant : un
domaine porte plusieurs TXT côte à côte, et les interfaces de registrar proposent volontiers de
« remplacer » au lieu d'ajouter.

`site.analytics.googleSiteVerification` reste **vide, et c'est définitif** : une validation par
DNS ne passe pas par le site. Ce champ ne sert qu'à la méthode « balise HTML », qui n'a pas été
retenue. Ce n'est donc pas un oubli — et surtout, **ne pas y recopier le jeton ci-dessus** : un
jeton DNS et un jeton de balise sont deux valeurs différentes, et le premier ne vaut rien dans
le `<head>`.

## Structure du projet

```
/
├── public/              # fichiers statiques (favicon, .nojekyll, CNAME, polices)
├── src/
│   ├── assets/           # logo fourni par l'utilisateur (logo-full.png, logo-icon.png)
│   ├── components/        # composants Astro/UI réutilisables
│   ├── data/              # contenu structuré en TypeScript — source unique des faits
│   │   ├── site.ts          # coordonnées, disponibilité, infos légales, champs À COMPLÉTER
│   │   ├── services.ts      # les 5 prestations → /services/<slug>
│   │   ├── zones.ts         # 6 quartiers de Meaux + 14 villes voisines → /zones/<slug>
│   │   └── faq.ts           # questions/réponses, `featured` = affichées en accueil
│   ├── layouts/           # BaseLayout.astro (SEO + JSON-LD + barre d'appel mobile)
│   ├── pages/             # une page = une route ; [slug].astro = routes dynamiques
│   └── styles/            # global.css + tokens.css (charte)
└── astro.config.mjs
```

**Le contenu vit dans `src/data/`, pas dans les pages.** Ajouter une prestation ou une commune =
ajouter une entrée dans le fichier de données correspondant ; la page, le sitemap, le maillage
interne du footer et les données structurées suivent automatiquement. Ne pas recréer de tableaux
de contenu en dur dans une page.

Le site compte **60 pages** générées : 14 pages fixes (dont tarifs, assurance habitation,
après un cambriolage, marques de serrures, politique de confidentialité, blog et 404),
5 pages prestation, 20 pages locales, 20 articles de blog.

Le blog suit le même principe : `src/data/articles/<slug>.ts` par article, agrégés par
`src/data/articles.ts`. Les paragraphes sont rendus avec `set:html` pour que les liens de
maillage vers les prestations fonctionnent — ne pas revenir à `{paragraphe}`, cela échapperait
le HTML et supprimerait tout le maillage interne.

Les polices Montserrat et Roboto sont **auto-hébergées** dans `public/fonts/` : ne jamais
réintroduire d'appel à Google Fonts, cela transmettrait l'IP des visiteurs hors UE et rendrait
fausses les mentions légales.

### Les zones : établies, pas devinées

Meaux **n'a pas d'arrondissements**. Le découpage de `src/data/zones.ts` est donc :

- **6 quartiers de Meaux** — Centre, Marché, Beauval, Pierre-Collinet, Dunant-Chenonceau,
  Foch-Roosevelt. Noms issus du découpage IRIS de l'INSEE et des périmètres des conventions de
  rénovation urbaine (ANRU) de la ville.
- **14 villes voisines**, retenues sur la **distance réelle au centre de Meaux**, toutes à moins
  de 7,2 km. Neuf d'entre elles sont limitrophes — Chambry, Chauconin-Neufmontiers,
  Crégy-lès-Meaux, Fublaines, Mareuil-lès-Meaux, Nanteuil-lès-Meaux, Poincy, Trilport, Villenoy —
  et à moins de 5,5 km. Les entrées de `zones.ts` sont ordonnées par distance croissante.
  Populations et coordonnées relevées sur l'API Découpage administratif de l'État
  (`geo.api.gouv.fr`) ; limitrophes vérifiées à part.

  **Le critère a changé le 27 octobre 2026**, à la demande de Rayane : c'était auparavant
  l'appartenance à la communauté d'agglomération du Pays de Meaux. Ce périmètre administratif
  n'est employé par personne pour dire où il habite, et il mélangeait des communes limitrophes
  avec d'autres bien plus loin. Saint-Soupplets (11,5 km) et Monthyon (7,7 km) sont sorties à ce
  titre, Poincy (2,4 km) et Chambry (4,8 km) sont entrées.

  **Ne pas réintroduire « Pays de Meaux » dans les textes du site.** Ajouter une commune suppose
  de vérifier sa distance : « ville voisine » est une affirmation, et à 15 km elle est fausse.

Le type d'une zone est `'quartier' | 'commune'` — **pas `'arrondissement'`**, qui était la valeur
du site de Lyon. Les exports sont `quartiers` et `communes`.

Le champ `areas` (secteurs desservis) est **facultatif**, et volontairement absent sur les
communes : ce sont des villages de 1 000 à 7 000 habitants dont les secteurs n'ont pas de noms
d'usage établis. Inventer « Centre-bourg / Les Hauts / Le Village » donnerait un contenu faux, et
identique d'une page à l'autre — exactement ce que les systèmes anti-contenu-inutile de Google
repèrent. La section entière disparaît quand le champ est vide.

Règle pour toute zone ajoutée : une `intro` n'affirme que ce qui est établi. Un conseil pratique
vrai partout (préciser l'étage, le code d'accès) vaut mieux qu'une description de bâti inventée
pour faire couleur locale.

### Tarifs publiés — attention, ils sont opposables

La grille vit dans `site.pricing` et `services[].price` (src/data/). Elle a été établie en
septembre 2026 à partir d'un relevé de 268 tarifs publiés par 13 serruriers lyonnais et une
vingtaine d'autres en France, puis **reprise telle quelle sur Meaux sur décision explicite de
Rayane le 26 octobre 2026** : mêmes montants, déplacement compris.

**Un client peut exiger le prix affiché.** Ne jamais modifier ces montants sans son accord
explicite, et ne jamais faire diverger les deux sites sans qu'il l'ait décidé — en particulier,
ne pas « ajuster » le déplacement en raison de la distance.

Repères : main-d'œuvre 69 €/h, déplacement 50 €, ouverture de porte dès 69 € tout compris,
majorations +50 % soirée et samedi / +100 % nuit, dimanche et fériés, portant uniquement sur la
main-d'œuvre et le déplacement.

**L'entreprise est en franchise en base de TVA (art. 293 B du CGI)** : elle ne facture aucune
TVA. Les montants affichés sont les prix réellement payés. Ne jamais écrire « TTC » ni
mentionner un taux de TVA sur le site. Deux occurrences de « TTC » héritées du site de Lyon ont
été retirées ici le 26 octobre 2026 ; **elles sont toujours en ligne sur Lyon.**

### Marques de serrures

Rayane a confirmé le 28 septembre 2026 poser **Picard, Fichet, Bricard et Vachette**.
La liste vit dans `src/data/brands.ts` et alimente `/marques-de-serrures/`.
N'ajouter aucune marque sans une nouvelle confirmation de sa part : annoncer une
marque qu'on ne pose pas est une pratique commerciale trompeuse (art. L121-2 du
Code de la consommation). Aucun prix par marque n'est publié — le coût dépend du
modèle et se chiffre au devis.

### Photographies

`src/assets/photos/` contient des photos sous licence Unsplash (usage commercial
libre) et les photos d'intervention de Rayane. Détail des sources, auteurs et de la retouche
appliquée dans `src/assets/photos/CREDITS.md`.

**Règle : photos d'objets et de détails uniquement** — serrures, cylindres, clés,
portes, poignées. **Jamais de mise en scène de technicien ou d'intervention**, qui
laisserait croire au visiteur qu'il s'agit d'un chantier de l'entreprise. Dans un
métier où la défiance est le point de départ, une photo de stock reconnaissable
coûte plus cher que l'absence de photo.

**Aucune photo de zone.** Le site de Lyon illustre chaque page de zone par une photo du lieu ;
rien d'équivalent n'existe ici, et **les photos de Lyon ne se recyclent pas** — une photo ne sert
que pour la zone qu'elle montre réellement. Le champ `Zone.image` reste donc vide partout, et les
pages s'affichent correctement sans. Recycler une vue d'un quartier pour un autre est le procédé
relevé chez un concurrent parisien, qui présentait les mêmes rues du 8e arrondissement sur ses
pages du 5e, du 11e, du 13e, du 18e et du 20e — c'est repérable en trois secondes par un
habitant, et ciblé par les systèmes anti-contenu-inutile de Google.

**Photos d'intervention (`src/assets/photos/interventions/`, champ `Zone.work`) :
la légende décrit l'ouvrage, jamais le lieu.** Ce sont les chantiers réels de
Rayane, mais la commune de chacun n'est pas établie — les métadonnées ont été
effacées en transit. Leur répartition sur les pages suit l'ordre des pages :
c'est éditorial, pas géographique. Ne jamais y ajouter de localisation sans
confirmation explicite.

### Balise Google Ads et consentement

Le site charge la balise Google (gtag.js) du compte Google Ads pour le suivi des
conversions. L'identifiant vit dans `site.analytics` ; le supprimer désactive
l'ensemble.

**Le compte Google Ads est celui de l'entreprise, pas celui d'une ville** : les identifiants sont
donc les mêmes que sur le site de Lyon, et c'est voulu. En revanche les conversions des deux
sites se mélangeront dans les mêmes colonnes. Pour les distinguer, c'est au niveau des campagnes
que ça se règle — une campagne par ville, avec son ciblage géographique et ses URL finales — pas
dans le code.

C'est un traceur publicitaire au sens de l'article 82 de la loi Informatique et
Libertés : il exige le consentement **préalable** du visiteur. Le montage tient en
deux composants et ne doit pas être simplifié :

- `GoogleTag.astro` pose le mode consentement de Google sur `denied` avant de
  charger la bibliothèque. Tant que le visiteur n'a pas accepté, aucun cookie
  n'est écrit.
- `CookieBanner.astro` recueille le choix et envoie la mise à jour. Refuser et
  accepter sont deux boutons de taille et de style identiques, comme la CNIL
  l'exige, et le lien « Cookies » du pied de page rouvre le bandeau pour revenir
  sur sa décision.

Coller la balise brute fournie par Google, sans le mode consentement ni le
bandeau, rendrait le site non conforme et ferait mentir les mentions légales et
la politique de confidentialité, qui décrivent ce cookie nommément.

### Blanc épuré : la règle des trois ors

Le site est en **blanc franc** (`#ffffff`) depuis le 27 octobre 2026, à la
demande de Rayane. Il était auparavant en clair cassé avec des bandeaux sombres
en en-tête, hero et pied de page.

**Ce qui a rendu le blanc possible.** Les bandeaux sombres n'étaient pas un
choix esthétique : le logo fourni est opaque. `logo-icon.png` et
`logo-full.png` n'ont pas de canal alpha, leurs quatre coins valent `#010206`
à 100 %. Sur une page blanche ils formeraient un rectangle noir.

Mais **`logo-icon-detoure.png`** existe — même image, plus un canal alpha, coins
à alpha 0, vérifié le 27 octobre — et c'est lui que `Logo.astro` charge. Il
passe sur n'importe quel fond. La contrainte est donc levée. `logo-full.png`
reste opaque, sans conséquence : il ne sert qu'aux données structurées et à
l'image de partage, jamais posé sur une page.

**Les variables `--band-*` existent toujours**, mais elles sont désormais
**claires**. Elles n'ont pas été supprimées parce qu'une cinquantaine de
déclarations les utilisent dans six composants. Elles gardent un rôle : marquer
l'en-tête et le pied de page, par un filet et une nuance de gris plutôt que par
un aplat sombre. Il n'y a plus de « texte clair sur bandeau » : en-tête, hero,
pied de page et bannière d'appel suivent les mêmes règles que le corps de page.

**Une seule exception, et elle est volontaire** : `.availability-bar`, la fine
barre d'annonce au-dessus de l'en-tête, garde `background: var(--color-black)`
et son texte en `--color-white`. C'est le seul aplat sombre du site.

**L'illustration du hero a sa propre palette, `--illu-*`, qui reste sombre.**
`HeroIllustration.astro` dessine un ciel coupé jour / nuit : c'est un dessin
dans un cadre, pas une zone de page. Il utilisait `--band-*` au temps des
bandeaux sombres ; **ne pas les y remettre**, le ciel deviendrait blanc et le
dessin disparaîtrait.

**L'or n'est toujours pas lisible en texte sur fond clair.** `#d4a937` sur blanc
ne donne que **2,18:1**, là où WCAG AA exige 4,5:1 pour du texte et 3:1 pour une
icône. D'où trois ors, et un seul est correct dans chaque rôle :

| Rôle | Variable | Valeur | Contraste sur blanc |
|---|---|---|---|
| Remplissage (fond de bouton, pastille) | `--color-gold` | `#d4a937` | — (texte noir dessus : 9,17:1) |
| Icône, filet, trait graphique | `--color-gold-dark` | `#a9821f` | **3,45:1** — passe WCAG 1.4.11 |
| Texte, lien | `--color-gold-text` | `#846315` | **5,56:1** — passe WCAG AA |

Écrire `color: var(--color-gold)` est donc une régression, même si à l'œil
« ça se voit ». Cette règle compte **davantage** qu'avant : il n'existe plus un
seul endroit sombre où l'or pur serait lisible en texte.

De même, `--color-white` n'a sa place **que** sur un fond sombre — en pratique la seule barre
d'annonce, et le survol du bouton secondaire dont le fond devient `--color-text`. Partout
ailleurs, le texte
est en `--color-text` (ou `--color-text-muted` pour le secondaire).

**Les titres ne sont plus dorés.** Ils sont en `--color-text`. L'or n'a pas disparu pour autant,
il est devenu filet, pastille et fond de bouton.

**Vérifier avant de livrer.** Un changement de couleur se contrôle par le calcul,
pas à l'œil, et l'objectif est **zéro échec sur chaque page**. Deux pièges :

1. Un audit qui remonte les ancêtres à la recherche d'un fond *opaque* rate les dégradés : il
   traverse le bandeau du hero, trouve le fond clair de `<body>` et croit le hero cassé. La
   remontée doit s'arrêter au **premier fond peint**, dégradé compris, et tester la couleur du
   texte contre **chaque arrêt** du dégradé en retenant le pire. Le même défaut pris par l'autre
   bout rattache un bouton doré opaque au dégradé du hero et le déclare à 1:1.
2. **Injecter le HTML d'une autre page pour l'auditer ne charge pas ses styles scopés Astro**, ce
   qui donne de faux négatifs. Il faut un chargement réel : une visite, ou une **iframe de même
   origine** — l'iframe charge le document avec ses propres `<style>`.

Un audit conforme à ces deux règles est passé le 26 octobre 2026 sur les 60 pages, en 1280 px et
en 375 px : 8 803 éléments testés, zéro échec. Il avait révélé **35 défauts hérités du site de
Lyon** — du texte en `--color-white` posé sur fond clair (jusqu'à du blanc sur blanc, 1:1) et un
`--color-gold` employé comme texte (2,2:1), restes du thème sombre que la bascule du 19 octobre
n'avait pas repris : 9 sur `/marques-de-serrures/`, 8 sur `/assurance-habitation/`, 14 sur
`/assureurs-habitation/`, 4 sur `/apres-un-cambriolage/`. Corrigés ici.
**Elles sont toujours en ligne sur le site de Lyon.**

## Le dépôt est public, et son historique contient un identifiant

**État réel, à ne pas confondre avec une intention.** Le dépôt
`rayane933200-ui/serrurier-meaux` est **public**. Il devait être créé en privé ;
la case n'a pas été prise en compte, et le push a eu lieu avant vérification.
Rayane a ensuite choisi de le laisser public, le 26 octobre 2026.

Les fichiers actuels ne contiennent aucun identifiant. **L'historique, si.** Les
commits `63df0ad` à `6f55bb8` portent l'identifiant du compte o2switch qui
héberge le site de Lyon (`jutu8080`), le nom de son serveur et son adresse
d'accès cPanel. Ils y figuraient légitimement tant que l'hébergement était
o2switch ; ils ont disparu des fichiers avec `4e3acd5`, mais pas de l'historique,
et l'historique est lisible par tout le monde.

Ce n'est pas un mot de passe — c'est la moitié d'une paire d'identifiants, celle
qui permet de cibler. **La mitigation est le changement du mot de passe cPanel
d'o2switch**, pas la visibilité du dépôt : une fois le mot de passe tourné,
l'identifiant ne vaut plus rien. C'est porté dans les champs à compléter.

Deux choses à savoir pour la suite :

- Repasser le dépôt en privé **ne supprime pas** les objets déjà publiés. GitHub
  les conserve, accessibles par leur empreinte. Seule une suppression du dépôt,
  suivie d'une recréation à partir d'un historique nettoyé (`git filter-repo`,
  ou un écrasement en un seul commit), efface réellement la trace.
- La visibilité du dépôt n'a **aucun** rapport avec la mise en ligne du site.
  GitHub Pages publie aussi bien depuis un dépôt privé que public. Si la
  question se repose, ce n'est pas un argument valable dans un sens ou dans
  l'autre.

## Conventions de code

- Composants et fichiers `.astro` en **PascalCase** (ex: `Header.astro`, `ContactForm.astro`)
- Un composant = une responsabilité claire ; éviter les fichiers fourre-tout
- Utiliser les slots Astro plutôt que la duplication de markup entre pages
- Images optimisées via `astro:assets` (`<Image />`) plutôt que des balises `<img>` brutes
- Pas de dépendance ajoutée sans nécessité claire (garder le site léger)

## SEO et performance

- Une balise `<title>` et une `meta description` uniques par page
- Structurer le HTML sémantiquement (un seul `<h1>` par page, hiérarchie de titres cohérente)
- `sitemap.xml` et `robots.txt` sont générés depuis le domaine d'`astro.config.mjs`
- Les données structurées déclarent `addressRegion: 'Île-de-France'` et `areaServed` Meaux /
  Pays de Meaux / Seine-et-Marne. **Pas Auvergne-Rhône-Alpes**, qui était la valeur de Lyon et
  placerait l'entreprise à 400 km de ses pages.
- Vérifier les performances (Lighthouse) avant mise en production

## Ce que Claude Code ne doit PAS faire sans confirmation

- Inventer des textes de contenu final (coordonnées, tarifs, témoignages, mentions légales)
- Modifier ou remplacer le logo / les couleurs de la charte fournie
- Ajouter un framework CSS ou une librairie lourde non demandée
- Déployer ou pousser en production
- Faire diverger les tarifs de ceux du site de Lyon

## À compléter par l'utilisateur

Réglé :

- [x] Nom de l'activité — **Serrurier** (enseigne légale : Rexpress)
- [x] Nom de domaine — `serrurier-meaux.fr`, forme canonique sans `www`
- [x] Zones — 6 quartiers de Meaux + 14 villes voisines, retenues sur la distance réelle
- [x] Tarifs — mêmes montants qu'à Lyon, décision de Rayane du 26/10/2026
- [x] Formulaire de contact — pas de backend : `QuoteForm.astro` ouvre la messagerie du visiteur via `mailto:` (site 100 % statique)
- [x] Informations légales de base — SIREN/SIRET/APE/adresse, depuis l'avis SIRENE
- [x] Validation Bing Webmaster Tools — 28/10/2026, fichier + balise (voir plus haut)
- [x] Validation Google Search Console — 30/10/2026, propriété « Domaine » validée par DNS

En attente — **ne rien inventer pour combler ces trous** :

- [ ] **Téléphone de l'hébergeur** — `site.legal.host.phone` est vide. La LCEN impose de le
      porter dans les mentions légales. Il n'a pas pu être vérifié à une source officielle pour
      GitHub, Inc. À relever à la main plutôt qu'à recopier d'un annuaire : publier un numéro
      faux sur une page opposable est pire que de ne pas en publier.
- [ ] **Mot de passe o2switch à changer** — l'identifiant du compte figure dans l'historique
      public de ce dépôt. Penser à reporter le nouveau mot de passe dans les secrets du dépôt de
      Lyon, sinon son déploiement automatique cassera au prochain push.
- [ ] **Assurance décennale** — souscription confirmée par Rayane le 05/10/2026 et annoncée sur le
      site (`credentials.decennale`). Manquent **l'assureur, le n° de contrat et la couverture
      géographique** : la loi impose déjà de les porter sur chaque devis et chaque facture, il
      suffit de les recopier dans `site.legal`.
- [ ] Années de métier du serrurier (l'entreprise datant de 07/2025, c'est la seule ancienneté affichable)
- [ ] **Médiateur de la consommation** — obligation légale (art. L612-1 et L616-1 du Code de la consommation)
- [ ] Avis clients réels (l'utilisateur a indiqué en avoir hors ligne)
- [ ] **Intitulé exact du diplôme** — Rayane a confirmé le 05/10/2026 être diplômé d'État ; reste à
      renseigner `credentials.diplomaExact` avec l'intitulé officiel et l'année.
- [ ] Autres certifications / labels
- [ ] **Photos de Meaux** pour les pages de zone — aucune n'existe. Voir `CREDITS.md` pour les
      deux voies possibles et leurs contraintes de licence.
- [ ] Commune de chaque photo d'intervention, pour pouvoir la nommer en légende

Les champs manquants s'affichent `[À COMPLÉTER]` sur la page mentions légales : c'est
volontaire et visible, pour ne pas publier de fausse information.

## Marketing et acquisition

Le dépôt de Lyon héberge deux sous-agents dédiés dans `.claude/agents/` (`ads-manager`,
`seo-local`) et leur source de faits `.claude/marketing/contexte-entreprise.md`. **Ils n'ont pas
été recopiés ici** : leurs faits (zone d'intervention, concurrents analysés, relevés de prix) sont
ceux de Lyon et seraient faux pour Meaux.

Le point le plus important pour l'acquisition locale ne dépend pas du site : **la fiche Google
Business Profile n'existe pour aucune des deux villes.** Pour une activité de dépannage, c'est le
levier qui manque le plus — davantage que le site lui-même.
