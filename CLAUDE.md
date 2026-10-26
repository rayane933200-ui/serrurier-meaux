# CLAUDE.md

Ce fichier fournit le contexte du projet à Claude Code pour travailler efficacement sur ce dépôt.

## Vue d'ensemble du projet

Site vitrine professionnel construit avec **Astro** pour une activité de serrurerie à **Meaux
(77100, Seine-et-Marne)**. Objectif : présenter l'activité, les services/offres et permettre la
prise de contact, avec un chargement rapide et un bon référencement (SEO).

- **Logo et charte graphique** : fournis par l'utilisateur et **déjà intégrés**. Logo dans `src/assets/` (`logo-full.png` = lockup complet, `logo-icon.png` = icône recadrée utilisée dans le header/footer). Palette dans `src/styles/tokens.css` : **thème clair** (fond `#faf9f7`), avec des **bandeaux sombres** en en-tête, hero et pied de page. L'**or** reste l'unique couleur d'accent. Voir « Thème clair » plus bas pour la règle des trois ors, qui n'est pas négociable. Ne pas régénérer de logo ni réinterpréter la palette.
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
`src/pages/robots.txt.ts`, `src/pages/[cleIndexNow].txt.ts`, `public/.htaccess`,
`public/fonts/`, `.github/scripts/indexnow.mjs`.

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
- **Domaine** : `serrurier-meaux.fr`, forme canonique sans `www`
- **Hébergement** : **à confirmer** — voir `DEPLOIEMENT.md`

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
(`.github/scripts/indexnow.mjs`, appelé par le workflow après l'envoi FTP).
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

### Search Console : la propriété reste à créer

`site.analytics.googleSiteVerification` est **vide**, volontairement. Un jeton vaut pour UNE
propriété : celui de Lyon ne valide pas `serrurier-meaux.fr`. Tant que le champ est vide, la
balise n'est pas émise — le site fonctionne, il ne remonte simplement aucune donnée de recherche.

## Structure du projet

```
/
├── public/              # fichiers statiques servis tels quels (favicon, .htaccess, polices)
├── src/
│   ├── assets/           # logo fourni par l'utilisateur (logo-full.png, logo-icon.png)
│   ├── components/        # composants Astro/UI réutilisables
│   ├── data/              # contenu structuré en TypeScript — source unique des faits
│   │   ├── site.ts          # coordonnées, disponibilité, infos légales, champs À COMPLÉTER
│   │   ├── services.ts      # les 5 prestations → /services/<slug>
│   │   ├── zones.ts         # 6 quartiers de Meaux + 14 communes → /zones/<slug>
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
- **14 communes du Pays de Meaux**, les plus peuplées après Meaux. Liste et populations relevées
  le 26 octobre 2026 sur l'API Découpage administratif de l'État (`geo.api.gouv.fr`), EPCI
  `200072130` « CA du Pays de Meaux ».

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

### Thème clair : la règle des trois ors

Deux contraintes matérielles commandent toute la structure, et les ignorer casse
le site en silence.

**1. Le logo est opaque, fond noir incrusté.** `logo-icon.png` et
`logo-full.png` n'ont pas de canal alpha : leurs quatre coins valent `#010206`
à 100 % d'opacité. Posés sur une page blanche, ils apparaîtraient comme un
rectangle noir. C'est pour cela — et non par goût — que l'en-tête, le hero, la
bannière d'appel et le pied de page restent des **bandeaux sombres**. Ils
utilisent les variables `--band-*`. **Ne jamais employer `--band-*` dans le
corps de page, ni `--color-text` dans un bandeau** : dans les deux cas le texte
disparaît sur un fond de même valeur.

**2. L'or n'est pas lisible en texte sur fond clair.** `#d4a937` sur `#faf9f7`
ne donne que **2,09:1**, là où WCAG AA exige 4,5:1 pour du texte et 3:1 pour une
icône. D'où trois ors, et un seul est correct dans chaque rôle :

| Rôle | Variable | Valeur | Contraste sur `--color-bg` |
|---|---|---|---|
| Remplissage (fond de bouton, pastille) | `--color-gold` | `#d4a937` | — (texte noir dessus : 8,98:1) |
| Icône, filet, trait graphique | `--color-gold-dark` | `#a9821f` | **3,38:1** — passe WCAG 1.4.11 |
| Texte, lien | `--color-gold-text` | `#846315` | **5,28:1** — passe WCAG AA |

Écrire `color: var(--color-gold)` dans le corps de page est donc une régression,
même si à l'œil « ça se voit ». Dans un bandeau sombre, c'est l'inverse : l'or
pur y vaut 8,98:1 et c'est lui qu'il faut.

De même, `--color-white` n'a sa place **que** dans un bandeau sombre. En corps de page, le texte
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
- [x] Zones — 6 quartiers de Meaux + 14 communes du Pays de Meaux
- [x] Tarifs — mêmes montants qu'à Lyon, décision de Rayane du 26/10/2026
- [x] Formulaire de contact — pas de backend : `QuoteForm.astro` ouvre la messagerie du visiteur via `mailto:` (site 100 % statique)
- [x] Informations légales de base — SIREN/SIRET/APE/adresse, depuis l'avis SIRENE

En attente — **ne rien inventer pour combler ces trous** :

- [ ] **Hébergeur** — `site.legal.host` nomme o2switch, repris du site de Lyon. À confirmer : si
      l'hébergement est ailleurs, les mentions légales sont fausses, et la politique de
      confidentialité aussi (elle affirme que les journaux ne quittent pas l'UE). Voir
      `DEPLOIEMENT.md`.
- [ ] **Jeton Search Console** — la propriété `serrurier-meaux.fr` reste à créer.
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
