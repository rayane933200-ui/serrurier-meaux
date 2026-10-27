import type { ImageMetadata } from 'astro';

import w1 from '../assets/photos/interventions/judas-et-serrure-porte-bois.jpg';
import w2 from '../assets/photos/interventions/porte-blindee-posee.jpg';
import w3 from '../assets/photos/interventions/serrure-multipoints-en-applique.jpg';
import w4 from '../assets/photos/interventions/cremone-porte-de-service.jpg';
import w5 from '../assets/photos/interventions/gache-forcee-avant-remise-en-etat.jpg';
import w6 from '../assets/photos/interventions/poignee-et-cylindre-porte-palliere.jpg';
import w7 from '../assets/photos/interventions/cylindre-remplace-plaque-de-proprete.jpg';
import w8 from '../assets/photos/interventions/porte-palliere-vue-interieure.jpg';
import w9 from '../assets/photos/interventions/double-porte-coupe-feu.jpg';
import w10 from '../assets/photos/interventions/porte-de-palier-haut-escalier.jpg';
import w11 from '../assets/photos/interventions/cle-engagee-serrure-multipoints.jpg';
import w12 from '../assets/photos/interventions/chant-de-porte-et-gache.jpg';

// Zones d'intervention : une entrée = une page /zones/<slug>.
//
// Meaux n'a pas d'arrondissements : le découpage retenu est celui des quartiers
// réellement nommés localement, puis les villes voisines.
//
// Sources des faits cités dans les `intro` — rien n'est reconstitué de mémoire :
//   · Communes limitrophes de Meaux : Chambry, Chauconin-Neufmontiers,
//     Crégy-lès-Meaux, Fublaines, Mareuil-lès-Meaux, Nanteuil-lès-Meaux,
//     Poincy, Trilport, Villenoy. Les neuf partagent une frontière avec Meaux.
//   · Population et coordonnées : API Découpage administratif de l'État
//     (geo.api.gouv.fr), relevées le 26 octobre 2026.
//
// CRITÈRE DE LA LISTE, et il a changé le 27 octobre 2026 : ce sont les villes
// VOISINES, retenues sur la distance réelle au centre de Meaux, et non plus les
// communes de la communauté d'agglomération du Pays de Meaux.
//
// Rayane a demandé de retirer la référence au « Pays de Meaux » : c'est un
// périmètre administratif que personne n'emploie pour dire où il habite, et il
// mélangeait des communes limitrophes avec d'autres nettement plus loin.
// Saint-Soupplets (11,5 km) et Monthyon (7,7 km) sont sorties à ce titre ;
// Poincy (2,4 km) et Chambry (4,8 km), limitrophes et jusque-là absentes, sont
// entrées. Les quatorze retenues sont toutes à moins de 7,2 km, les neuf
// limitrophes à moins de 5,5 km.
//
// Les entrées sont ordonnées par distance croissante. Ajouter une commune
// suppose de vérifier la sienne : « ville voisine » est une affirmation, et à
// 15 km elle devient fausse.
//   · Noms des quartiers de Meaux : découpage IRIS de l'INSEE, complété par les
//     périmètres des conventions de rénovation urbaine (ANRU) de la ville.
//   · Centre historique, quartier épiscopal, halle du marché : documentation
//     patrimoniale publique de la ville et notice Monuments historiques de la
//     cathédrale Saint-Étienne.
//
// Règle pour toute zone ajoutée plus tard : une `intro` n'affirme que ce qui est
// établi. Un conseil pratique vrai partout (préciser l'étage, le code d'accès)
// vaut mieux qu'une description de bâti inventée pour faire couleur locale.

export interface Zone {
  slug: string;
  /** Nom court : listes, maillage interne */
  name: string;
  /** Titre H1 de la page dédiée */
  h1: string;
  metaTitle: string;
  postalCode: string;
  type: 'quartier' | 'commune';
  /**
   * Quartiers ou secteurs desservis, facultatif.
   *
   * Volontairement absent sur les villes voisines : ce sont des
   * villages de 1 000 à 7 000 habitants dont les secteurs n'ont pas de noms
   * d'usage établis. Inventer « Centre-bourg / Les Hauts / Le Village » pour
   * remplir la liste donnerait un contenu faux, et identique d'une page à
   * l'autre — exactement ce que les systèmes anti-contenu-inutile de Google
   * repèrent. La page s'affiche très bien sans cette section.
   */
  areas?: string[];
  /** Paragraphe d'introduction propre à la zone */
  intro: string;
  /**
   * Photographie réelle de la zone, facultative. Une zone sans photo s'affiche
   * correctement : mieux vaut pas d'image qu'une image d'ailleurs. Ne jamais
   * réutiliser la photo d'un quartier pour un autre, c'est le procédé qu'on
   * reproche aux sites concurrents.
   *
   * Aucune zone de Meaux n'en a pour l'instant : les photos de Lyon ne sont pas
   * transposables, et aucune photo de Meaux n'a été prise ni sourcée. Le champ
   * reste là pour le jour où il y en aura.
   */
  image?: ZoneImage;
  /**
   * Photographie d’une intervention réelle de l’entreprise, prise par Rayane.
   * Volontairement SANS mention de lieu : la commune où chaque cliché a été
   * pris n’est pas établie — les métadonnées ont été effacées en transit. Ces
   * photos illustrent le travail, elles n’attestent pas d’une intervention dans
   * le quartier de la page. Leur répartition ci-dessous suit l’ordre des pages :
   * c’est éditorial, pas géographique. Ne jamais leur ajouter de localisation
   * sans confirmation explicite de Rayane.
   */
  work?: ZoneWork;
}

export interface ZoneWork {
  src: ImageMetadata;
  /** Décrit l’ouvrage visible dans le cadre, jamais un lieu. */
  alt: string;
}

export interface ZoneImage {
  src: ImageMetadata;
  /** Décrit ce qui est réellement dans le cadre, pas le mot-clé visé. */
  alt: string;
  credit: string;
}

export const zones: Zone[] = [
  // ---------------------------------------------------------------- Meaux ---
  {
    slug: 'serrurier-meaux-centre',
    work: {
      src: w1,
      alt: 'Judas optique et serrure encastrée sur une porte palière en bois',
    },
    name: 'Meaux Centre',
    h1: 'Serrurier à Meaux Centre (77100)',
    metaTitle: 'Serrurier & serrurerie Meaux Centre — 24h/24',
    postalCode: '77100',
    type: 'quartier',
    areas: ['Hôtel de Ville', 'Cathédrale', 'Quartier épiscopal', 'République'],
    intro:
      "Le centre de Meaux tient dans l'emprise des anciens remparts gallo-romains : des rues étroites, des hôtels particuliers, et autour de la cathédrale Saint-Étienne un bâti ancien où les portes palières d'origine côtoient des cylindres remplacés au fil des années. Les accès par cour et les interphones sont fréquents : donnez le code et l'étage au téléphone, c'est ce qui fait la différence entre arriver et attendre devant la porte.",
  },
  {
    slug: 'serrurier-meaux-marche',
    work: {
      src: w2,
      alt: 'Porte blindée posée, vue depuis le palier',
    },
    name: 'Quartier du Marché',
    h1: 'Serrurier quartier du Marché à Meaux (77100)',
    metaTitle: 'Serrurier & serrurerie Marché, Meaux — 24h/24',
    postalCode: '77100',
    type: 'quartier',
    areas: ['Halle du marché', 'Rive gauche de la Marne', 'Quais'],
    intro:
      "Sur la rive gauche de la Marne, le quartier s'organise autour de la grande halle du marché, bâtie à la fin des années 1870. Commerces en rez-de-chaussée et logements au-dessus s'y superposent : deux fermetures très différentes, un rideau ou une porte de local d'un côté, une porte palière de l'autre. Précisez laquelle est concernée, le matériel à embarquer n'est pas le même.",
  },
  {
    slug: 'serrurier-meaux-beauval',
    work: {
      src: w3,
      alt: 'Serrure multipoints en applique sur une porte ancienne, tringles verticales apparentes',
    },
    name: 'Beauval',
    h1: 'Serrurier à Beauval, Meaux (77100)',
    metaTitle: 'Serrurier & serrurerie Beauval, Meaux — 24h/24',
    postalCode: '77100',
    type: 'quartier',
    areas: ['Beauval', 'La Verrière'],
    intro:
      "Beauval est né comme zone à urbaniser en priorité et reste le plus grand ensemble de logements collectifs de Meaux, en partie remodelé par la rénovation urbaine — quelques tours tripodes, bâties sur un plan en Y, en témoignent encore. Concrètement, cela veut dire des portes palières de série, des halls sous digicode et des étages élevés : le numéro de bâtiment, la cage d'escalier et l'étage nous font gagner plusieurs minutes à l'arrivée.",
  },
  {
    slug: 'serrurier-meaux-pierre-collinet',
    work: {
      src: w4,
      alt: 'Crémone verticale sur une porte de service repeinte',
    },
    name: 'Pierre-Collinet',
    h1: 'Serrurier à Pierre-Collinet, Meaux (77100)',
    metaTitle: 'Serrurier & serrurerie Pierre-Collinet, Meaux — 24h/24',
    postalCode: '77100',
    type: 'quartier',
    areas: ['Pierre-Collinet'],
    intro:
      "Les barres et les tours d'origine de la Pierre-Collinet ont entièrement disparu au profit de constructions plus basses et plus récentes. Le parc de portes y est donc jeune, souvent équipé de serrures multipoints : une porte claquée s'y ouvre généralement sans dégât, à condition de ne pas avoir été forcée avant notre arrivée. Si quelqu'un a déjà tenté quelque chose sur le cylindre, dites-le, cela change le diagnostic.",
  },
  {
    slug: 'serrurier-meaux-dunant-chenonceau',
    work: {
      src: w5,
      alt: 'Gâche et chant de porte après ouverture, avant remise en état',
    },
    name: 'Dunant-Chenonceau',
    h1: 'Serrurier à Dunant-Chenonceau, Meaux (77100)',
    metaTitle: 'Serrurier & serrurerie Dunant-Chenonceau, Meaux — 24h/24',
    postalCode: '77100',
    type: 'quartier',
    areas: ['Henri-Dunant', 'Chenonceau'],
    intro:
      "Le secteur a été profondément transformé par la rénovation urbaine : la barre dite Caravelle Chenonceau a été démolie en 2002 et un parc urbain créé sur son emprise. Il en résulte un habitat mêlé, collectif récent et résidences de taille moyenne. En copropriété, la porte palière appartient au copropriétaire mais le hall relève de la copropriété : c'est utile à savoir avant d'engager des frais, et nous le précisons sur le devis.",
  },
  {
    slug: 'serrurier-meaux-foch-roosevelt',
    work: {
      src: w6,
      alt: 'Poignée et cylindre sur une porte palière marquée par l’usage',
    },
    name: 'Foch-Roosevelt',
    h1: 'Serrurier à Foch-Roosevelt, Meaux (77100)',
    metaTitle: 'Serrurier & serrurerie Foch-Roosevelt, Meaux — 24h/24',
    postalCode: '77100',
    type: 'quartier',
    areas: ['Avenue Foch', 'Roosevelt', 'Allende'],
    intro:
      "Aménagé sur quatre-vingts hectares entre le centre historique et les quartiers de rénovation urbaine, l'écoquartier Foch-Roosevelt fait le lien entre deux époques de construction. Les programmes récents y arrivent avec des serrures multipoints et des cylindres sur organigramme : si votre clé ouvre aussi le hall ou le local à vélos, signalez-le, le remplacement se prépare autrement.",
  },

  // ------------------------------------------------- Villes voisines ---
  // Ordonnées par distance au centre de Meaux. Les neuf premières, jusqu'à
  // Chauconin-Neufmontiers, partagent une frontière avec la commune.
  {
    slug: 'serrurier-poincy',
    work: {
      src: w7,
      alt: 'Cylindre remplacé et plaque de propreté remise en place',
    },
    name: 'Poincy',
    h1: 'Serrurier à Poincy (77470)',
    metaTitle: 'Serrurier & serrurerie Poincy — 24h/24',
    postalCode: '77470',
    type: 'commune',
    intro:
      "Poincy est la commune la plus proche de Meaux, à peine à deux kilomètres et demi du centre, sur la rive droite de la Marne. Village de taille modeste, habitat individuel. La proximité joue en votre faveur sur le délai : donnez l'adresse avec un repère visible depuis la rue, le reste du temps se perd rarement sur la route mais sur les derniers mètres.",
  },
  {
    slug: 'serrurier-nanteuil-les-meaux',
    work: {
      src: w8,
      alt: 'Porte palière vue de l’intérieur, serrure et paumelles',
    },
    name: 'Nanteuil-lès-Meaux',
    h1: 'Serrurier à Nanteuil-lès-Meaux (77100)',
    metaTitle: 'Serrurier & serrurerie Nanteuil-lès-Meaux — 24h/24',
    postalCode: '77100',
    type: 'commune',
    intro:
      "Nanteuil-lès-Meaux jouxte Meaux au sud et partage son code postal. C'est la plus peuplée des communes voisines, très majoritairement pavillonnaire. Sur une maison, la sécurisation ne s'arrête pas à la porte d'entrée : porte de garage, porte de service et baies arrière comptent autant, et c'est souvent par là qu'on entre. Nous regardons l'ensemble avant de chiffrer.",
  },
  {
    slug: 'serrurier-cregy-les-meaux',
    work: {
      src: w9,
      alt: 'Double porte coupe-feu et sa serrure, vue depuis le couloir',
    },
    name: 'Crégy-lès-Meaux',
    h1: 'Serrurier à Crégy-lès-Meaux (77124)',
    metaTitle: 'Serrurier & serrurerie Crégy-lès-Meaux — 24h/24',
    postalCode: '77124',
    type: 'commune',
    intro:
      "Crégy-lès-Meaux touche Meaux au nord-ouest et mêle pavillons et petits collectifs. Dites-nous au téléphone s'il s'agit d'une maison ou d'un immeuble, et si un hall est à franchir : cela détermine à la fois le matériel embarqué et le temps réel pour arriver devant votre porte.",
  },
  {
    slug: 'serrurier-fublaines',
    work: {
      src: w10,
      alt: 'Porte de palier en haut d’une cage d’escalier',
    },
    name: 'Fublaines',
    h1: 'Serrurier à Fublaines (77470)',
    metaTitle: 'Serrurier & serrurerie Fublaines — 24h/24',
    postalCode: '77470',
    type: 'commune',
    intro:
      "Fublaines borde Meaux à l'est. Pour un remplacement de serrure, la marque et le modèle posés chez vous orientent le choix : nous posons Picard, Fichet, Bricard et Vachette. Si vous pouvez photographier la serrure et la tranche de la porte avant notre venue, le devis est plus précis dès le premier passage.",
  },
  {
    slug: 'serrurier-mareuil-les-meaux',
    work: {
      src: w11,
      alt: 'Clé engagée dans une serrure multipoints',
    },
    name: 'Mareuil-lès-Meaux',
    h1: 'Serrurier à Mareuil-lès-Meaux (77100)',
    metaTitle: 'Serrurier & serrurerie Mareuil-lès-Meaux — 24h/24',
    postalCode: '77100',
    type: 'commune',
    intro:
      "Mareuil-lès-Meaux borde Meaux au sud et partage son code postal. Habitat principalement individuel. Après un déménagement ou l'achat d'une maison, le changement de cylindre est la première chose à faire : vous ne savez pas combien de clés circulent, et c'est une opération courte qui ne touche pas à la porte.",
  },
  {
    slug: 'serrurier-villenoy',
    work: {
      src: w12,
      alt: 'Chant de porte et gâche après intervention',
    },
    name: 'Villenoy',
    h1: 'Serrurier à Villenoy (77124)',
    metaTitle: 'Serrurier & serrurerie Villenoy — 24h/24',
    postalCode: '77124',
    type: 'commune',
    intro:
      "Villenoy touche Meaux à l'ouest. Si votre clé tourne dans le vide ou si elle s'est cassée dans le canon, ne forcez pas et n'essayez pas de l'extraire avec une pince : un bout de clé enfoncé plus loin transforme une extraction de dix minutes en remplacement de cylindre. Laissez la serrure en l'état, nous arrivons.",
  },
  {
    slug: 'serrurier-trilport',
    name: 'Trilport',
    h1: 'Serrurier à Trilport (77470)',
    metaTitle: 'Serrurier & serrurerie Trilport — 24h/24',
    postalCode: '77470',
    type: 'commune',
    intro:
      "Trilport borde Meaux à l'est, sur la Marne. Un point qui revient souvent ici : la porte qui ferme mal se règle, elle ne se remplace pas forcément. Nous commençons toujours par regarder si un réglage des paumelles ou de la gâche suffit — c'est moins cher, et ça tient.",
  },
  {
    slug: 'serrurier-chambry',
    name: 'Chambry',
    h1: 'Serrurier à Chambry (77910)',
    metaTitle: 'Serrurier & serrurerie Chambry — 24h/24',
    postalCode: '77910',
    type: 'commune',
    intro:
      "Chambry borde Meaux au nord. Petit village, bâti surtout individuel. Pour une urgence, deux informations nous font gagner le plus de temps : l'adresse exacte avec un repère visible depuis la rue, et la nature du problème — porte claquée, clé perdue, serrure bloquée. Le tarif vous est annoncé au téléphone avant que nous partions.",
  },
  {
    slug: 'serrurier-penchard',
    name: 'Penchard',
    h1: 'Serrurier à Penchard (77124)',
    metaTitle: 'Serrurier & serrurerie Penchard — 24h/24',
    postalCode: '77124',
    type: 'commune',
    intro:
      "Penchard occupe les hauteurs au nord de Meaux. Commune pavillonnaire de petite taille. Si vous vous êtes enfermé dehors et qu'une fenêtre est restée ouverte, ne tentez pas d'escalade : l'ouverture par la porte reste la voie la plus sûre, et dans la grande majorité des cas elle se fait sans abîmer la serrure.",
  },
  {
    slug: 'serrurier-germigny-l-eveque',
    name: 'Germigny-l’Évêque',
    h1: 'Serrurier à Germigny-l’Évêque (77910)',
    metaTitle: 'Serrurier & serrurerie Germigny-l’Évêque — 24h/24',
    postalCode: '77910',
    type: 'commune',
    intro:
      "Germigny-l'Évêque borde la Marne au nord-est de Meaux. Dans les logements qui ne sont pas occupés toute l'année, les serrures se grippent faute d'usage : si la clé devient dure à tourner, un dégrippage et un entretien suffisent le plus souvent, à condition de ne pas avoir mis d'huile dedans — elle encrasse le mécanisme au lieu de le libérer.",
  },
  {
    slug: 'serrurier-chauconin-neufmontiers',
    name: 'Chauconin-Neufmontiers',
    h1: 'Serrurier à Chauconin-Neufmontiers (77124)',
    metaTitle: 'Serrurier & serrurerie Chauconin-Neufmontiers — 24h/24',
    postalCode: '77124',
    type: 'commune',
    intro:
      "Née de la réunion de deux villages, Chauconin-Neufmontiers borde Meaux à l'ouest et se compose de secteurs bâtis distincts, séparés par des espaces agricoles. Précisez lequel : à l'échelle de la commune, l'écart d'itinéraire entre les deux n'est pas négligeable, et nous préférons vous annoncer un délai juste.",
  },
  {
    slug: 'serrurier-varreddes',
    name: 'Varreddes',
    h1: 'Serrurier à Varreddes (77910)',
    metaTitle: 'Serrurier & serrurerie Varreddes — 24h/24',
    postalCode: '77910',
    type: 'commune',
    intro:
      "Varreddes se trouve au nord-est de Meaux, sur la Marne. Village de taille modeste, bâti ancien par endroits : sur une porte en bois massif d'origine, un blindage se pose, mais il demande d'abord d'examiner l'encadrement. Nous le regardons sur place, et le devis est remis avant tout travaux.",
  },
  {
    slug: 'serrurier-quincy-voisins',
    name: 'Quincy-Voisins',
    h1: 'Serrurier à Quincy-Voisins (77860)',
    metaTitle: 'Serrurier & serrurerie Quincy-Voisins — 24h/24',
    postalCode: '77860',
    type: 'commune',
    intro:
      "Quincy-Voisins est une commune résidentielle au sud-est de Meaux. L'habitat individuel y domine, avec des portes d'entrée qui donnent directement sur l'extérieur : l'exposition aux intempéries fatigue les serrures plus vite qu'en cage d'escalier. Une clé qui force depuis quelques semaines se traite mieux avant la panne qu'après.",
  },
  {
    slug: 'serrurier-isles-les-villenoy',
    name: 'Isles-lès-Villenoy',
    h1: 'Serrurier à Isles-lès-Villenoy (77450)',
    metaTitle: 'Serrurier & serrurerie Isles-lès-Villenoy — 24h/24',
    postalCode: '77450',
    type: 'commune',
    intro:
      "Isles-lès-Villenoy est une petite commune à l'ouest, au-delà de Villenoy. Nous y intervenons comme ailleurs, 24h/24 : le tarif est annoncé au téléphone, le devis remis et signé avant l'intervention, y compris en urgence. Aucun supplément n'apparaît sur la facture qui n'ait été annoncé avant.",
  }
];

export const quartiers = zones.filter((zone) => zone.type === 'quartier');
export const communes = zones.filter((zone) => zone.type === 'commune');
export const getZone = (slug: string) => zones.find((zone) => zone.slug === slug);
