# Logos

Trois fichiers, deux fournis par Rayane et un dérivé. Ne pas les confondre :
le mauvais fichier au mauvais endroit se voit, ou pire, ne se voit pas.

| Fichier | Origine | Fond | Où il sert |
|---|---|---|---|
| `logo-full.png` | fourni | **opaque**, noir `#020307` | données structurées JSON-LD et image de partage (`BaseLayout.astro`) |
| `logo-icon.png` | fourni | **opaque**, noir `#010206` | source du détourage — **n'est plus affiché nulle part** |
| `logo-icon-detoure.png` | dérivé le 19/10/2026 | **transparent** | en-tête et pied de page (`Logo.astro`) |

## Pourquoi un détourage

Les deux fichiers fournis n'ont aucun canal alpha : leurs quatre coins sont
noirs à 100 % d'opacité. Tant que le site était en thème sombre, cela passait
inaperçu. Au passage en thème clair, le champ noir du logo (`#010206`) s'est
mis à trancher sur le bandeau d'en-tête (`#17181c`), légèrement plus clair que
lui : un rectangle discret mais visible autour de l'icône.

## Comment il a été fait

**Aucune couleur n'a été modifiée.** Seul un canal alpha a été ajouté, calculé
à partir de l'histogramme de luminance de l'image d'origine :

- 82,6 % des pixels sont sous la luminance 8 — c'est le champ noir ;
- un creux quasiment vide s'étend de 19 à 93 ;
- le sujet (or et argent) commence au-dessus de 93.

L'alpha suit donc une rampe linéaire de 8 (transparent) à 60 (opaque). Résultat
mesuré : 82,5 % de pixels totalement transparents, 0,57 % en opacité partielle
— les bords anticrénelés — et 16,9 % pleinement opaques. Une rampe plutôt qu'un
seuil binaire, sinon les contours arrondis du bouclier montreraient un escalier.

Vérifié en composant le résultat sur le bandeau sombre **et** sur blanc : aucun
halo sombre dans les deux cas.

## Deux conséquences à connaître

**Le trou de serrure est devenu transparent.** Il était peint en noir dans
l'image d'origine. Il prend donc maintenant la couleur du fond sur lequel le
logo est posé. C'est correct dans les deux thèmes, mais à savoir si le logo
devait un jour être posé sur une couleur vive.

**L'en-tête n'est plus obligé d'être sombre.** C'était la raison matérielle du
bandeau : le logo ne pouvait pas vivre sur fond clair. Elle a disparu. Le
bandeau reste un choix de composition — plus une contrainte.

## Si le détourage doit être refait

Le script vit dans l'historique de la conversation du 19 octobre 2026, pas dans
le dépôt : il ne sert qu'une fois. La méthode tient en trois lignes — lire
`logo-icon.png` en brut, calculer `alpha = (luminance - 8) / 52` borné à [0, 1],
réécrire en RGBA sans toucher aux canaux de couleur.

Ne jamais régénérer ni réinterpréter le logo lui-même (voir `CLAUDE.md`).
