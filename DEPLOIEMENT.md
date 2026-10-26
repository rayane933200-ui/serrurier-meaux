# Mettre le site de Meaux en ligne

Le site est statique : il se construit sur le poste, puis on envoie le résultat
sur l'hébergement. Il n'y a rien à exécuter côté serveur, ni PHP, ni base de
données.

C'est le même fonctionnement que le site de Lyon — mais **un autre domaine, et
un hébergement à régler**. Rien de ce qui suit ne doit être recopié depuis le
dépôt de Lyon sans vérification : un identifiant FTP ou un sous-domaine erroné
publierait le site de Meaux par-dessus celui de Lyon.

## En deux commandes

```bash
rm -rf dist && npm run build
```

Puis envoyer **le contenu** de `dist/` dans le dossier du site sur
l'hébergement. C'est tout.

Le `rm -rf dist` n'est pas une précaution de style : le dépôt est dans un
dossier OneDrive, et la synchronisation entre en concurrence avec l'écriture
des fichiers. Voir `CLAUDE.md`, section « Le dépôt est dans un dossier
OneDrive ».

## Les valeurs du compte — À COMPLÉTER

Ces champs ne sont pas renseignés parce qu'ils ne sont pas connus. Les laisser
vides est volontaire : une valeur devinée ferait publier le site au mauvais
endroit.

| | |
|---|---|
| Domaine | `serrurier-meaux.fr` |
| Hébergeur | À COMPLÉTER |
| Serveur FTP | À COMPLÉTER |
| Identifiant | À COMPLÉTER |
| Dossier du site | À COMPLÉTER (`public_html/` chez o2switch) |

Le mot de passe n'est pas écrit ici, et ne doit jamais l'être : ce fichier est
versionné dans Git.

**Si le domaine est ajouté au compte o2switch existant** (celui qui sert déjà
Lyon), ce sera un *domaine additionnel* : même compte FTP, mais **un dossier
différent** de `public_html/`, que cPanel indique au moment de l'ajout. C'est
ce dossier-là qu'il faut reporter dans le tableau ci-dessus et dans
`server-dir:` du workflow.

**Si l'hébergement est ailleurs**, il faut corriger `site.legal.host` dans
`src/data/site.ts` : les mentions légales nomment aujourd'hui o2switch, repris
du site de Lyon. Publier le nom d'un hébergeur qui n'héberge pas le site rend
les mentions légales fausses.

## La première mise en ligne, dans l'ordre

1. **Vider le dossier du site** de l'`index.html` de démonstration installé par
   l'hébergeur. S'il reste, c'est lui qui s'affiche.

2. **Construire** : `rm -rf dist && npm run build`.

3. **Envoyer le contenu de `dist/`** — pas le dossier `dist` lui-même, et
   surtout pas `src/` ni `node_modules/`, qui n'ont rien à faire sur un
   serveur public.

   Le plus rapide : compresser `dist` en `.zip`, l'envoyer via le gestionnaire
   de fichiers de l'hébergeur, puis clic droit → *Extraire*. Le site compte
   plusieurs centaines de fichiers ; un par un en FTP, c'est long et une
   coupure laisse le site à moitié publié.

4. **Vérifier que `.htaccess` est bien arrivé.** C'est un fichier caché : les
   clients FTP et les gestionnaires de fichiers le masquent par défaut.
   - Gestionnaire de fichiers → *Settings* → cocher *Show hidden files*
   - FileZilla → *Serveur* → *Forcer l'affichage des fichiers cachés*

   Sans lui, le site perd d'un coup le HTTPS forcé, tous ses en-têtes de
   sécurité et sa page 404 — sans afficher la moindre erreur.

5. **Activer le certificat** : *Let's Encrypt SSL* → émettre pour
   `serrurier-meaux.fr` et `www.serrurier-meaux.fr`. Attendre le cadenas.

6. **Activer le HSTS** seulement après : décommenter la ligne
   `Strict-Transport-Security` dans `public/.htaccess`, reconstruire, renvoyer.
   Activée trop tôt, elle rend le site inaccessible le temps de l'émission du
   certificat.

## Ce qui est déjà réglé dans le dépôt

- **Domaine** inscrit dans `astro.config.mjs` : les URL canoniques, le sitemap,
  `robots.txt` et l'image de partage le suivent automatiquement.
- **`public/.htaccess`** : HTTPS forcé, redirection `www` → sans `www`, page 404
  du site, en-têtes de sécurité, politique de contenu en observation, cache long
  sur les fichiers hachés et revalidation du HTML. Il ne nomme aucun domaine, il
  travaille sur l'hôte réellement servi — rien à y changer.
- **Clé IndexNow** propre à ce domaine, et son fichier de preuve généré depuis
  elle. Elle est **différente de celle de Lyon**, et doit le rester.

## Après la bascule — À FAIRE, rien n'est fait

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

## Automatiser le déploiement

`.github/workflows/deploiement.yml` construit et envoie en FTP à chaque
`git push` sur `main`. Il est repris du dépôt de Lyon et **ne fonctionnera pas
tel quel** : il lui faut les secrets du dépôt de Meaux (`FTP_SERVEUR`,
`FTP_UTILISATEUR`, `FTP_MOTDEPASSE`) et le bon `server-dir:`.

Tant que ces secrets ne sont pas renseignés, le déploiement se fait à la main
comme décrit plus haut.
