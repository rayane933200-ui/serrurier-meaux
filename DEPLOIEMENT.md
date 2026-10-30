# Mettre le site de Meaux en ligne sur GitHub Pages

Le site est statique. L'hébergement est **GitHub Pages**, sur décision de Rayane
le 26 octobre 2026 — troisième hébergement envisagé le même jour, après
o2switch puis Cloudflare Pages.

Le site de Lyon reste chez o2switch. Les deux dépôts n'ont plus la même chaîne
de publication, et aucun fichier de configuration d'hébergement ne doit être
recopié de l'un à l'autre.

- **Dépôt** : `https://github.com/rayane933200-ui/serrurier-meaux` — **public**
- **Domaine** : `serrurier-meaux.fr`, acheté chez Internet.bs, forme canonique
  sans `www`

## Ce que GitHub Pages ne sait pas faire

C'est le point à connaître avant tout le reste, parce que rien ne le signale.

**GitHub Pages ne sert aucun en-tête HTTP personnalisé.** Il n'y a pas
d'équivalent de `.htaccess` ni de `_headers`.

`public/_headers` n'a existé que le temps du passage par Cloudflare Pages :
créé au commit `4e3acd5`, supprimé au commit suivant `24552d8`, celui qui
amène sur GitHub Pages.

C'était la bonne décision, et la mesure du 27 octobre 2026 le confirme : la
plateforme ignore ce fichier intégralement. Le garder aurait été pire que son
absence — il portait une ligne HSTS « à décommenter plus tard » qui n'aurait
jamais rien produit, et on aurait cru le site protégé. Son contenu reste
récupérable dans l'historique git si l'hébergement change à nouveau.

Sont donc perdus, et c'est irrécupérable sur cette plateforme :

| En-tête | État |
|---|---|
| `Referrer-Policy` | **récupéré** par `<meta name="referrer">` dans `BaseLayout.astro` |
| `X-Content-Type-Options` | perdu — aucun équivalent en balise meta |
| `X-Frame-Options` | perdu — un `<meta http-equiv>` est ignoré par les navigateurs |
| `Permissions-Policy` | perdu — aucun équivalent |
| `Content-Security-Policy` | perdu en pratique. Une CSP en balise meta existe, mais seulement en mode bloquant : le mode `Report-Only` n'est pas supporté en meta. L'activer en bloquant risquerait de casser en silence le suivi de conversion Google Ads, ce que le projet refuse explicitement. |
| `Cache-Control` | perdu — GitHub Pages impose `max-age=600` à tout, y compris aux fichiers hachés de `/_astro/` qu'on gardait un an |
| `Strict-Transport-Security` | **absent**, et GitHub ne l'envoie pas non plus de lui-même sur un domaine personnalisé |

Relevé réel sur `https://serrurier-meaux.fr/` le 27 octobre 2026 : aucun des
en-têtes ci-dessus n'est envoyé, à l'exception de `cache-control: max-age=600`.
Ce n'est pas une déduction, c'est la réponse du serveur.

Le site fonctionne parfaitement sans. Il est simplement moins protégé contre
le détournement en iframe et la confusion de type MIME. C'est le prix de ce
choix d'hébergement, assumé.

**En revanche**, GitHub Pages gère bien : le HTTPS par Let's Encrypt renouvelé
tout seul, la page 404 (il sert `/404.html`), et la redirection `www` → apex,
automatiquement.

## Le piège qui casse tout

**Sans le fichier `public/.nojekyll`, GitHub Pages fait passer le site par
Jekyll, qui supprime tout dossier dont le nom commence par un souligné.** Il
effacerait donc `/_astro/` — la totalité du CSS et du JavaScript. Le site
s'afficherait en texte brut, sans style, et la cause n'est indiquée nulle part.

Le fichier existe dans `public/`, donc Astro le copie dans `dist/`. Le workflow
refuse de publier s'il manque, et vérifie aussi que `/_astro/` n'est pas vide.

Même logique pour `public/CNAME`, qui porte le domaine personnalisé : sans lui,
GitHub Pages retombe sur l'adresse en `github.io`. Le workflow contrôle en plus
que son contenu correspond au domaine annoncé par le sitemap.

## La mise en ligne, dans l'ordre

### 1. Activer Pages sur le dépôt

Dépôt → **Settings** → **Pages**.

Dans **Build and deployment**, régler **Source** sur **GitHub Actions** — pas
« Deploy from a branch ». C'est ce réglage qui laisse le workflow publier.

### 2. Lancer une première publication

Le workflow part tout seul au prochain `git push` sur `main`. Pour le
déclencher sans rien modifier : onglet **Actions** → *Déploiement GitHub
Pages* → **Run workflow**.

**Vérifier** : le workflow passe au vert, et l'onglet Actions affiche l'URL
publiée — en `rayane933200-ui.github.io/serrurier-meaux` tant que le domaine
n'est pas configuré.

Aucun secret n'est à renseigner. La publication utilise le jeton que GitHub
fournit lui-même à l'exécution. C'est le seul avantage net de cette plateforme
sur les deux précédentes.

### 3. Les enregistrements DNS chez Internet.bs

Contrairement à o2switch et à Cloudflare, **les adresses de GitHub Pages sont
publiques et fixes** : elles peuvent être écrites ici une fois pour toutes.

Internet.bs → fiche de `serrurier-meaux.fr` → zone DNS. À créer :

| Type | Nom | Valeur |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `rayane933200-ui.github.io` |

Les quatre `A` ne sont pas un choix : ce sont quatre serveurs différents, et les
quatre sont attendus. `@` désigne le domaine nu, sans sous-domaine ; certaines
interfaces veulent un champ vide à la place.

Le `CNAME` pour `www` sert la redirection : **GitHub crée automatiquement la
redirection `www` → apex** dès lors que les deux noms sont configurés et que le
domaine personnalisé du dépôt est l'apex. C'est le bon sens pour nous, puisque
la forme canonique est sans `www`.

Les enregistrements `AAAA` (IPv6) existent aussi — `2606:50c0:8000::153` à
`:8003::153` — mais ils sont facultatifs, les `A` suffisent.

**Vérifier**, sans se fier au cache du navigateur :

```bash
nslookup serrurier-meaux.fr
```

Les quatre adresses en `185.199.x.153` doivent apparaître.

### 4. Déclarer le domaine sur le dépôt

Settings → **Pages** → **Custom domain** → saisir `serrurier-meaux.fr` → *Save*.

GitHub vérifie le DNS, puis coche **Enforce HTTPS** une fois le certificat
émis — compter de quelques minutes à une heure. Ne pas forcer, ne pas
désactiver.

Le fichier `public/CNAME` du dépôt porte déjà cette valeur, donc elle survivra
aux republications. Sans lui, chaque déploiement effacerait le réglage.

### 5. Vérifier le site réel

Dans cet ordre :

- `https://serrurier-meaux.fr/` affiche le site **avec ses styles**. S'il est en
  texte brut, c'est `.nojekyll` qui manque.
- `http://serrurier-meaux.fr` bascule en HTTPS
- `https://www.serrurier-meaux.fr/` redirige vers sans `www` :
  ```bash
  curl -I https://www.serrurier-meaux.fr/
  ```
  attendu : `301` et `location: https://serrurier-meaux.fr/`
- `https://serrurier-meaux.fr/une-page-qui-nexiste-pas/` affiche **notre** 404
- une page intérieure au hasard, par exemple
  `https://serrurier-meaux.fr/zones/serrurier-meaux-beauval/`

## Vérifié en production le 27 octobre 2026

Tout ce qui suit a été mesuré sur le site réel, pas sur une préversion :

| Contrôle | Résultat |
|---|---|
| Les 4 enregistrements `A` | répondent, adresses correctes |
| `CNAME` `www` | pointe vers `rayane933200-ui.github.io` |
| HTTPS | certificat valide |
| `http://` → `https://` | redirige, après activation d'*Enforce HTTPS* |
| `www` → apex | redirige, y compris depuis `http://www` |
| CSS et polices | servis, `/_astro/` intact — `.nojekyll` a fait son travail |
| Page 404 | c'est la nôtre, avec le statut 404 |
| `/_headers` | 404 — non exposé publiquement |
| Audit de contraste | **zéro échec** sur les 59 pages, 8 796 éléments |

**Piège de vérification** : le navigateur met en cache la réponse d'une URL
testée avant l'activation d'*Enforce HTTPS*, et continue de l'afficher en
clair. Tester la redirection sur une adresse jamais visitée, ou avec un
paramètre d'URL quelconque.

## Après la mise en ligne

- **Moteurs de recherche** : fait. Bing validé le 28 octobre 2026
  (`public/BingSiteAuth.xml` + balise `msvalidate.01`), Google le 30 octobre
  en propriété « Domaine », validée par un TXT chez Internet.bs. Le détail et
  la règle de non-suppression sont dans CLAUDE.md. Le site est passé
  d'invisible à indexé en trois jours : pages générales, les six pages de
  prestation et les pages de commune.
- **Mot de passe o2switch** : à changer. L'identifiant du compte figure dans
  l'historique public de ce dépôt (commits `63df0ad` à `6f55bb8`). Penser à
  reporter le nouveau mot de passe dans les secrets du dépôt de Lyon, sinon son
  déploiement automatique cassera.
- **Téléphone de l'hébergeur** : la LCEN impose de le porter dans les mentions
  légales. `site.legal.host.phone` est vide, faute de source officielle
  vérifiable. À relever à la main.
- **Google Ads** : même compte que Lyon, le suivi fonctionne sans rien changer.
  Mais les deux sites alimenteront les mêmes colonnes de conversions : les
  séparer demande **une campagne par ville**, avec son ciblage et ses URL.
- **Fiche Google Business Profile** : toujours inexistante pour les deux villes.
  Pour du dépannage local, c'est le levier qui manque le plus — davantage que
  le site.
