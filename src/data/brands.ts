// Marques de serrures posées et repères de certification.
//
// Rayane a confirmé le 28 septembre 2026 poser Picard, Fichet, Bricard et
// Vachette. Ne pas ajouter de marque à cette liste sans une nouvelle
// confirmation : annoncer une marque qu'on ne pose pas est une pratique
// commerciale trompeuse (art. L121-2 du Code de la consommation), et c'est
// exactement le reproche fait aux sites du secteur.
//
// Aucun tarif par marque n'est publié ici. Les prix affichés sur le site sont
// opposables ; le coût dépend du modèle retenu et se chiffre au devis.

export interface Brand {
  slug: string;
  name: string;
  /** Ce pour quoi la marque est réputée, en une phrase. */
  positioning: string;
  /** Gammes citées par le fabricant, utiles pour se repérer en magasin. */
  ranges: string[];
  /** À qui elle s'adresse concrètement. */
  useCase: string;
}

export const brands: Brand[] = [
  {
    slug: 'picard',
    name: 'Picard Serrures',
    positioning:
      'Fabricant français de serrures et de blocs-portes blindés, très présent sur le haut de gamme certifié A2P.',
    ranges: ['Présence', 'Vigie', 'Diamant'],
    useCase:
      'Un appartement en rez-de-chaussée, un pavillon isolé ou un logement déjà visité : c’est le niveau de protection qu’un assureur regarde sans discuter.',
  },
  {
    slug: 'fichet',
    name: 'Fichet',
    positioning:
      'Marque française historique de la haute sécurité, connue pour ses serrures à clé réversible et ses portes blindées.',
    ranges: ['Forge', '787 Z', 'Primlock'],
    useCase:
      'Les copropriétés anciennes où la porte palière donne directement sur la rue ou sur une cour accessible, et les logements dont le contenu justifie une porte certifiée.',
  },
  {
    slug: 'bricard',
    name: 'Bricard',
    positioning:
      'Fabricant français généraliste, du cylindre courant à la serrure multipoints certifiée.',
    ranges: ['Bloctout', 'Dual', 'Serial'],
    useCase:
      'Le bon compromis quand il s’agit de remonter d’un cran sans remplacer la porte : le cylindre et la serrure changent, le bâti reste.',
  },
  {
    slug: 'vachette',
    name: 'Vachette',
    positioning:
      'Marque française de grande diffusion, de la serrure d’entrée courante aux cylindres à protection renforcée.',
    ranges: ['Radial NT+', 'V5', 'V7'],
    useCase:
      'Les remplacements courants, les portes de cave et de garage, les logements mis en location où le coût de remplacement des clés compte.',
  },
];

/**
 * Les grades A2P. La certification est délivrée par le CNPP (Centre national de
 * prévention et de protection) et se mesure en temps de résistance à une
 * tentative d'effraction menée en laboratoire avec des outils définis.
 *
 * Distinction utile pour le client : les étoiles concernent la SERRURE, les
 * grades BP concernent le BLOC-PORTE complet. Un vendeur qui mélange les deux
 * ne connaît pas son sujet.
 */
export interface Grade {
  label: string;
  resistance: string;
  scope: string;
  comment: string;
}

export const lockGrades: Grade[] = [
  {
    label: 'A2P une étoile',
    resistance: '5 minutes',
    scope: 'Serrure',
    comment:
      'Le premier niveau certifié. Il décourage l’effraction opportuniste, celle qui se décide devant la porte et renonce vite.',
  },
  {
    label: 'A2P deux étoiles',
    resistance: '10 minutes',
    scope: 'Serrure',
    comment:
      'Le niveau le plus demandé en appartement. C’est souvent celui qu’un contrat d’assurance exige en contrepartie d’une franchise réduite.',
  },
  {
    label: 'A2P trois étoiles',
    resistance: '15 minutes',
    scope: 'Serrure',
    comment:
      'Réservé aux situations exposées. Au-delà, ce n’est plus la serrure qui cède la première mais la porte ou le bâti : les renforcer devient prioritaire.',
  },
];

export const doorGrades: Grade[] = [
  {
    label: 'A2P BP1',
    resistance: '5 minutes',
    scope: 'Bloc-porte complet',
    comment: 'Porte, bâti, serrure et paumelles testés ensemble, pas séparément.',
  },
  {
    label: 'A2P BP2',
    resistance: '10 minutes',
    scope: 'Bloc-porte complet',
    comment: 'Le niveau courant pour une porte palière d’appartement en ville.',
  },
  {
    label: 'A2P BP3',
    resistance: '15 minutes',
    scope: 'Bloc-porte complet',
    comment: 'Le plus haut grade du référentiel pour un bloc-porte de logement.',
  },
];
