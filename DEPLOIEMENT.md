# Mettre le site de Meaux en ligne

Le site est statique : il se construit sur le poste, puis on envoie le résultat
sur l'hébergement. Il n'y a rien à exécuter côté serveur, ni PHP, ni base de
données.

`serrurier-meaux.fr` est hébergé en **domaine additionnel** sur le compte
o2switch qui sert déjà `serrurier-lyon-7j7.fr` (décision de Rayane du
26 octobre 2026). L'offre o2switch couvre un nombre de sites illimité : ce
second site ne coûte rien de plus.

**La conséquence tient en une phrase : les mêmes identifiants FTP donnent accès
aux deux sites.** Ce qui les sépare, c'est le dossier de destination, et rien
d'autre. Tout ce document tourne autour de ça.

## En deux commandes

```bash
rm -rf dist && npm run build
```

Puis envoyer **le contenu** de `dist/` dans le dossier du site. C'est tout.

Le `rm -rf dist` n'est pas une précaution de style : le dépôt est dans un
dossier OneDrive, et la synchronisation entre en concurrence avec l'écriture
des fichiers. Voir `CLAUDE.md`, section « Le dépôt est dans un dossier
OneDrive ».

## Les valeurs du compte

Identiques à celles de Lyon — c'est le même compte. **Sauf la dernière ligne,
qui est la seule chose qui distingue les deux sites.**

| | |
|---|---|
| Domaine | `serrurier-meaux.fr` (acheté chez Internet.bs) |
| Hébergeur | o2switch |
| cPanel | `https://pantoufles.o2switch.net:2083` |
| FTP | `pantoufles.o2switch.net`, port 21, FTPS |
| Identifiant | `jutu8080` |
| **Dossier du site** | **`public_html/serrurier-meaux.fr/`** |

Pour mémoire, le dossier de Lyon est `public_html/` — la racine du compte.
Envoyer Meaux à cet endroit écraserait Lyon.

Le mot de passe n'est pas écrit ici, et ne doit jamais l'être : ce fichier est
versionné dans Git. Il est dans le courriel de bienvenue d'o2switch.

## La mise en ligne, dans l'ordre

**L'ordre n'est pas indicatif.** Changer les DNS avant d'avoir ajouté le
domaine chez o2switch pointe le domaine vers des serveurs qui ne le
connaissent pas : le site devient injoignable, et il faut attendre la
propagation pour corriger.

### 1. Ajouter le domaine dans cPanel

cPanel → **Domaines** → *Créer un domaine*.

- **Domaine** : `serrurier-meaux.fr`
- **Ne PAS cocher « Partager la racine du document »**. Cette case crée un
  *alias* au lieu d'un domaine additionnel : `serrurier-meaux.fr` afficherait
  alors le site de Lyon, et les deux adresses serviraient les mêmes pages. Si
  tu la coches par erreur, supprime l'entrée et recommence — ne tente pas de
  la rattraper.
- **Racine du document** : cPanel propose une valeur automatiquement. Corrige-la
  pour qu'elle soit exactement `public_html/serrurier-meaux.fr`. C'est la
  valeur inscrite dans le workflow (`DOSSIER_SITE`), les deux doivent
  correspondre au caractère près.

À cette étape, les serveurs d'o2switch deviennent autoritatifs pour le
domaine. C'est ce qui rend l'étape suivante possible.

### 2. Pointer le domaine chez Internet.bs

Internet.bs → la fiche de `serrurier-meaux.fr` → **Nameservers**.

Remplacer les serveurs actuels par :

```
ns1.o2switch.net
ns2.o2switch.net
```

C'est tout : **aucun enregistrement A, CNAME ou MX à saisir à la main.** En
déléguant les serveurs de noms, c'est o2switch qui gère la zone, et il y crée
lui-même ce qu'il faut pour `serrurier-meaux.fr` et `www.serrurier-meaux.fr`.

La propagation prend de quelques minutes à quelques heures. Pour vérifier sans
attendre le cache de ton navigateur :

```bash
nslookup serrurier-meaux.fr ns1.o2switch.net
```

### 3. Laisser le certificat HTTPS se poser

o2switch émet un certificat Let's Encrypt automatiquement (AutoSSL), en
général dans l'heure qui suit la résolution du domaine. Il couvre les domaines
additionnels, `www` compris.

Vérifier dans cPanel → **SSL/TLS Status** que `serrurier-meaux.fr` **et**
`www.serrurier-meaux.fr` ont tous les deux un certificat. S'il manque, la page
permet de relancer AutoSSL à la main.

Ne pas passer à la suite tant que le cadenas n'apparaît pas sur les deux.

### 4. Envoyer le site

```bash
rm -rf dist && npm run build
```

Puis envoyer **le contenu** de `dist/` dans `public_html/serrurier-meaux.fr/`
— pas le dossier `dist` lui-même, et surtout pas `src/` ni `node_modules/`,
qui n'ont rien à faire sur un serveur public.

Le plus rapide : compresser `dist` en `.zip`, l'envoyer via le gestionnaire de
fichiers de cPanel, puis clic droit → *Extraire*. Le site compte plusieurs
centaines de fichiers ; un par un en FTP, c'est long et une coupure laisse le
site à moitié publié.

**Vérifier que `.htaccess` est bien arrivé.** C'est un fichier caché : les
clients FTP et le gestionnaire de fichiers le masquent par défaut.

- Gestionnaire de fichiers → *Settings* → cocher *Show hidden files*
- FileZilla → *Serveur* → *Forcer l'affichage des fichiers cachés*

Sans lui, le site perd d'un coup le HTTPS forcé, la redirection `www`, tous
ses en-têtes de sécurité et sa page 404 — sans afficher la moindre erreur.

### 5. Vérifier les redirections

Dans cet ordre, chacune doit aboutir sur `https://serrurier-meaux.fr/` :

- `http://serrurier-meaux.fr` → HTTPS
- `http://www.serrurier-meaux.fr` → HTTPS puis sans `www`
- `https://www.serrurier-meaux.fr` → sans `www`

**La forme canonique est sans `www`.** C'est elle qui est déclarée dans
`astro.config.mjs`, donc dans le sitemap et dans toutes les balises
canoniques. Ne pas l'inverser sans changer les trois.

Et pendant qu'on y est : vérifier que `https://serrurier-lyon-7j7.fr/` affiche
toujours le site de Lyon. C'est le contrôle qui attrape une erreur de dossier.

### 6. Activer le HSTS, seulement maintenant

Décommenter la ligne `Strict-Transport-Security` dans `public/.htaccess`,
reconstruire, renvoyer.

Activée avant que le certificat fonctionne, elle engage le domaine pour un an
**sans marche arrière côté serveur** : c'est le navigateur du visiteur qui se
souvient. D'où l'ordre.

## Automatiser le déploiement

`.github/workflows/deploiement.yml` construit et envoie en FTP à chaque
`git push` sur `main`, puis signale les pages modifiées à IndexNow.

Il lui faut les secrets du dépôt : **Settings → Secrets and variables →
Actions**. Les secrets ne sont pas partagés entre dépôts, même pour un compte
identique — ceux de Lyon ne sont pas visibles ici.

| Secret | Valeur |
|---|---|
| `FTP_SERVEUR` | `pantoufles.o2switch.net` |
| `FTP_UTILISATEUR` | `jutu8080` |
| `FTP_MOTDEPASSE` | le mot de passe cPanel |

Le dossier de destination, lui, n'est **pas** un secret : il est écrit en clair
dans le workflow (`DOSSIER_SITE`), précisément pour qu'il soit relisible et
contrôlable. Une étape refuse de publier si cette valeur vaut `public_html/`,
parce que l'envoi est synchronisé — il supprime sur le serveur ce qui n'est pas
dans `dist/`, et effacerait donc le site de Lyon sans rien laisser à restaurer.

## Après la mise en ligne

- **Search Console** : créer la propriété `serrurier-meaux.fr` (c'en est une
  nouvelle, celle de Lyon ne la couvre pas), choisir la validation par *balise
  HTML*, coller le jeton dans `site.analytics.googleSiteVerification`,
  reconstruire, renvoyer, puis valider. Soumettre ensuite
  `https://serrurier-meaux.fr/sitemap-index.xml`.
- **Google Ads** : le compte est le même que pour Lyon, le suivi de conversion
  fonctionne donc sans rien changer. En revanche les deux sites alimenteront les
  mêmes colonnes de conversions : pour les distinguer, il faut **une campagne
  par ville**, avec son propre ciblage géographique et ses propres URL finales.
- **Fiche Google Business Profile** : elle n'existe pour aucune des deux villes.
  Pour une activité de dépannage, c'est le levier qui manque le plus — davantage
  que le site lui-même.
