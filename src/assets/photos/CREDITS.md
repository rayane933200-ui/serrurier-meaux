# Crédits et licences des photographies

Toutes les images de ce dossier proviennent d'Unsplash et sont couvertes par la
[licence Unsplash](https://unsplash.com/license) : usage commercial autorisé,
gratuit, sans obligation d'attribution. Le crédit est affiché malgré tout sous
chaque image — c'est une courtoisie d'usage et cela montre au visiteur d'où
vient la photo.

**Vérifié avant téléchargement :** aucune de ces images ne provient de
`plus.unsplash.com` (Unsplash+ / Getty), qui est payant et dont la licence ne
permet pas cet usage.

| Fichier | Sujet | Auteur | Source |
|---|---|---|---|
| `poignee-or-porte-noire.jpg` | Poignée et serrure dorées sur porte noire | Ramses Cabello | [unsplash.com/photos/eGga0HepjjE](https://unsplash.com/photos/eGga0HepjjE) |
| `cle-dans-serrure.jpg` | Clé en laiton engagée dans un cylindre | Dima Solomin | [unsplash.com/photos/LkoDqb5E3zg](https://unsplash.com/photos/LkoDqb5E3zg) |
| `poignee-laiton-bois-sombre.jpg` | Poignée laiton sur porte en bois sombre | Sneaky Head | [unsplash.com/photos/hfiainyla0c](https://unsplash.com/photos/hfiainyla0c) |

## Règle éditoriale

**Photos d'objets et de détails uniquement** : serrures, cylindres, clés, portes,
poignées. **Jamais de mise en scène de technicien ou d'intervention.**

La raison est commerciale autant qu'éthique. Une photo de « serrurier souriant en
intervention » issue d'une banque d'images laisse croire au visiteur qu'il s'agit
d'un chantier de l'entreprise : c'est un mensonge implicite, et il se repère. Dans
un métier où la défiance est le point de départ du client, se faire prendre à
utiliser une photo de stock coûte plus cher que de ne pas avoir de photo du tout.

Le jour où de vraies photos d'intervention existeront, elles remplaceront
celles-ci : c'est le différenciant qu'aucun des quatre concurrents analysés en
septembre 2026 ne possède.

## Photographies de zone — aucune pour l'instant

Le site de Lyon illustre chacune de ses pages de zone par une photo du lieu.
Rien d'équivalent n'existe ici : **aucune photo de Meaux ni des communes du
Pays de Meaux n'a été prise ni sourcée.** Les photos de Lyon n'ont pas été
reprises, et ne doivent pas l'être — une photo ne sert que pour la zone qu'elle
montre réellement.

Le champ `Zone.image` reste donc vide partout dans `src/data/zones.ts`, et les
pages de zone s'affichent sans illustration. C'est volontaire : mieux vaut pas
d'image qu'une image d'ailleurs.

Pour en ajouter plus tard, deux voies, dans cet ordre de préférence :

1. **Des photos prises sur place.** C'est ce qui a le plus de valeur, et c'est
   le seul moyen d'être certain que la photo montre bien la zone.
2. **Wikimedia Commons**, où le patrimoine de Meaux est largement photographié
   (cathédrale Saint-Étienne, hôtel de ville, halle du marché). Attention : la
   plupart de ces licences **imposent d'afficher l'auteur**. Le champ
   `ZoneImage.credit` est là pour ça, et il ne doit pas être laissé vide.

Dans les deux cas, vérifier visuellement chaque recadrage avant de livrer : le
recadrage automatique par saillance de sharp manque souvent le monument sur les
cadrages verticaux.

## Photographies d'intervention — `interventions/`

Clichés pris par Rayane sur ses propres chantiers, fournis le 28 septembre 2026.
C'est le différenciant que l'audit de septembre avait identifié : aucun des
quatre concurrents analysés ne publie de photo de son travail.

**Règle : la légende décrit l'ouvrage, jamais le lieu.** Les métadonnées de ces
fichiers ont été effacées par la messagerie qui les a transportées, et la
commune de chaque intervention n'est pas établie. Les photos sont réparties sur
les pages de zone dans l'ordre des pages, ce qui est un choix éditorial et non
une affirmation géographique. Ne jamais écrire « intervention à Beauval » sous
l'une d'elles sans que Rayane l'ait confirmé.

**Retouches appliquées :**

- Rotation de 90° sur six clichés. L'orientation EXIF ayant été effacée, sharp
  ne pouvait pas la déduire et les livrait couchés.
- Floutage du plan d'évacuation sur `double-porte-coupe-feu.jpg` : il portait le
  nom et l'adresse parisienne du client. Ce n'est pas notre information à publier.
- Recadrage en 1200 × 900 (4/3), qualité 82 mozjpeg. Le 4/3 coupe moins que le
  16/9 sur des cadrages verticaux de portes.

**Trois fichiers écartés définitivement** : les clichés de la carte nationale
d'identité de Rayane, qui se trouvaient dans le même dossier. Ils ne doivent
jamais entrer dans `src/`.

## Retouche appliquée aux photos d'objets

Recadrage en 1600 × 900 (16/9), compression JPEG qualité 82 avec mozjpeg.
`astro:assets` produit ensuite les variantes webp servies au visiteur.
