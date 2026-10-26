# Mettre le site de Meaux en ligne sur Cloudflare Pages

Le site est statique : il se construit sur le poste, puis on envoie le résultat.
Il n'y a rien à exécuter côté serveur, ni PHP, ni base de données.

**L'hébergement est Cloudflare Pages**, sur décision de Rayane le 26 octobre
2026. Le site de Lyon reste chez o2switch : les deux dépôts n'ont plus la même
chaîne de publication, et aucun fichier de configuration d'hébergement ne doit
être recopié de l'un à l'autre.

Conséquence à garder en tête : les deux sites ne partagent plus aucun compte.
Le risque d'écraser Lyon en publiant Meaux a disparu avec le FTP.

## En deux commandes

```bash
rm -rf dist && npm run build
```

Puis publier le contenu de `dist/`. C'est tout.

Le `rm -rf dist` n'est pas une précaution de style : le dépôt est dans un
dossier OneDrive, et la synchronisation entre en concurrence avec l'écriture
des fichiers. Voir `CLAUDE.md`, section « Le dépôt est dans un dossier
OneDrive ».

## Ce que Cloudflare fait à la place d'Apache

Le `public/.htaccess` a été **supprimé**. Ce n'est pas seulement qu'il ne sert
plus — un fichier `.htaccess` n'est lu que par Apache — c'est qu'il serait
**servi** : lisible par n'importe qui à `/.htaccess`, avec sa politique de
contenu et ses commentaires.

Il est remplacé par `public/_headers`, que Cloudflare Pages consomme et retire.

| Ce que faisait `.htaccess` | Qui s'en charge maintenant |
|---|---|
| En-têtes de sécurité, CSP | `public/_headers` |
| Cache long sur `/_astro/` et les polices | `public/_headers` |
| HSTS | `public/_headers`, commenté — à activer après coup |
| HTTPS forcé | Réglage *Always Use HTTPS* du tableau de bord |
| Redirection `www` → sans `www` | **Bulk Redirect** du tableau de bord (étape 4) |
| Page 404 | Pages sert `/404.html` automatiquement |
| Compression gzip/brotli | Automatique |
| Types MIME, pas de listing de dossier | Automatique |

**Le piège** : `_headers` et `_redirects` travaillent sur des **chemins**, pas
sur des noms d'hôte. La redirection `www` ne peut donc pas s'écrire dans un
fichier du dépôt, et son absence ne casse rien d'apparent — les deux adresses
répondraient simplement en parallèle, ce qui donne deux URL pour chacune des
60 pages aux yeux d'un moteur de recherche. D'où l'étape 4, qui n'est pas
facultative.

## La mise en ligne, dans l'ordre

### 1. Créer le projet Pages

Tableau de bord Cloudflare → **Workers & Pages** → *Create* → **Pages**.

Le dépôt est **purement local** au 26 octobre 2026, sans dépôt distant : la voie
« Connect to Git » n'est pas disponible en l'état. Deux options :

- **Direct Upload** — choisir *Upload assets*, nommer le projet
  `serrurier-meaux`, et déposer le **contenu** de `dist/` (pas le dossier
  `dist` lui-même). C'est le plus simple pour démarrer.
- **En ligne de commande** :
  ```bash
  npx wrangler pages deploy dist --project-name=serrurier-meaux
  ```
  La première exécution ouvre une fenêtre de connexion Cloudflare.

Le nom du projet doit être `serrurier-meaux` : c'est celui qu'attend
`.github/workflows/deploiement.yml`.

**Vérifier** : le projet répond sur `https://serrurier-meaux.pages.dev`. À ce
stade le site est en ligne, mais sur l'adresse technique de Cloudflare.

### 2. Rattacher le domaine à Cloudflare

Pour qu'un domaine **apex** (sans `www`) pointe vers Pages, il doit être géré
par le DNS de Cloudflare. Ce n'est pas un choix : c'est ce qui permet à
Cloudflare de résoudre la racine du domaine, qu'un CNAME classique ne sait pas
faire.

Tableau de bord → **Add a site** → `serrurier-meaux.fr` → offre **Free**.

Cloudflare affiche alors **deux serveurs de noms** qui lui sont propres, du
type `prénom.ns.cloudflare.com`. **Ils sont attribués par compte et ne sont pas
devinables** — il faut les lire sur cette page.

### 3. Pointer le domaine chez Internet.bs

Internet.bs → la fiche de `serrurier-meaux.fr` → **Nameservers**.

Remplacer les serveurs actuels par les deux noms relevés à l'étape 2.

Pour mémoire, l'état de départ : le domaine a été créé le 26 octobre 2026 à
14 h 10 UTC et son statut au registre AFNIC était `inactive`, c'est-à-dire
**aucun serveur de noms** — d'où une réponse `NXDOMAIN`. C'est normal pour un
domaine acheté et pas encore pointé.

**Vérifier** que la délégation est prise en compte :

```bash
nslookup -type=ns serrurier-meaux.fr
```

Cloudflare envoie aussi un courriel quand la zone devient active.

### 4. Rattacher les deux noms au projet Pages

Projet Pages → onglet **Custom domains** → *Set up a custom domain*.

Ajouter **`serrurier-meaux.fr`**. Cloudflare crée l'enregistrement et émet le
certificat tout seul, en général en quelques minutes.

Puis la redirection de `www`, qui est la partie que personne ne pense à faire.
La méthode officielle de Cloudflare tient en deux gestes :

**a. Une liste de redirections** — tableau de bord → **Bulk Redirects** :

| Champ | Valeur |
|---|---|
| Source | `www.serrurier-meaux.fr` |
| Cible | `https://serrurier-meaux.fr` |
| Statut | `301` |
| Options | conserver la chaîne de requête, correspondance de sous-chemin, conserver le suffixe de chemin, inclure les sous-domaines |

Puis créer une règle de redirection en masse à partir de cette liste.

**b. Un enregistrement DNS pour `www`** — tableau de bord → **DNS** :

| Type | Nom | Valeur | Proxy |
|---|---|---|---|
| `A` | `www` | `192.0.2.1` | **Proxied** (nuage orange) |

Cette IP est volontairement une adresse de documentation qui ne mène nulle
part : seul compte le fait que l'enregistrement soit *proxifié*, ce qui fait
passer la requête par Cloudflare, où la règle de redirection s'applique avant
d'atteindre quoi que ce soit.

**Vérifier**, et ne pas s'en tenir au navigateur, qui cache les redirections :

```bash
curl -I https://www.serrurier-meaux.fr/
```

La réponse doit porter `HTTP/2 301` et `location: https://serrurier-meaux.fr/`.

### 5. Vérifier le site réel

Dans cet ordre :

- `https://serrurier-meaux.fr/` affiche le site, cadenas présent
- `http://serrurier-meaux.fr` bascule en HTTPS
- `https://www.serrurier-meaux.fr/` redirige en 301 vers sans `www`
- `https://serrurier-meaux.fr/une-page-qui-nexiste-pas/` affiche **notre** page
  404, pas celle de Cloudflare
- les en-têtes de sécurité sont bien là :
  ```bash
  curl -I https://serrurier-meaux.fr/ | grep -i "x-content-type\|referrer-policy\|permissions-policy"
  ```

Ce dernier contrôle est le plus important : si `_headers` n'a pas été pris en
compte, **le site s'affiche parfaitement** et perd juste tous ses en-têtes. Rien
ne le signale.

### 6. Activer le HSTS, seulement maintenant

Deux voies, **une seule à choisir** :

- décommenter la ligne `Strict-Transport-Security` dans `public/_headers`,
  reconstruire, republier ;
- ou le réglage *SSL/TLS → Edge Certificates → HSTS* du tableau de bord.

Activé avant que le certificat fonctionne, il engage le domaine pour un an
**sans marche arrière côté serveur** : c'est le navigateur du visiteur qui se
souvient. D'où l'ordre.

## Automatiser le déploiement

`.github/workflows/deploiement.yml` construit, contrôle, publie sur Cloudflare
Pages puis signale les pages modifiées à IndexNow.

**Il ne s'exécutera que si le dépôt est poussé sur GitHub** — il est purement
local aujourd'hui. Tant que c'est le cas, la publication se fait à la main
(étape 1).

Le jour où le dépôt est poussé, il lui faut deux secrets — **Settings → Secrets
and variables → Actions** :

| Secret | Où le trouver |
|---|---|
| `CLOUDFLARE_API_TOKEN` | My Profile → API Tokens → *Create Token*, permission **Cloudflare Pages : Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | lisible dans l'URL du tableau de bord, ou dans le panneau latéral du projet |

Le jeton doit porter la permission la plus étroite possible : *Cloudflare Pages
— Edit*, rien d'autre. Un jeton « tous droits » dans les secrets d'un dépôt
donne accès à l'ensemble du compte Cloudflare, DNS compris.

## Après la mise en ligne

- **Search Console** : créer la propriété `serrurier-meaux.fr`, choisir la
  validation par *balise HTML*, coller le jeton dans
  `site.analytics.googleSiteVerification`, reconstruire, republier, puis
  valider. Soumettre ensuite `https://serrurier-meaux.fr/sitemap-index.xml`.
- **Téléphone de l'hébergeur** : la LCEN impose de le porter dans les mentions
  légales. `site.legal.host.phone` est **vide** parce qu'il n'a pas pu être
  vérifié — deux annuaires donnent deux numéros, et la page de contact de
  Cloudflare refuse l'accès automatisé. À relever à la main sur cloudflare.com.
- **Google Ads** : le compte est le même que pour Lyon, le suivi de conversion
  fonctionne sans rien changer. Mais les deux sites alimenteront les mêmes
  colonnes : pour les distinguer, **une campagne par ville**, avec son ciblage
  géographique et ses URL finales.
- **Fiche Google Business Profile** : elle n'existe pour aucune des deux villes.
  Pour une activité de dépannage, c'est le levier qui manque le plus — davantage
  que le site lui-même.
