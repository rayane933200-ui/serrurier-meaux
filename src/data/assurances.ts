// Les principaux assureurs habitation français, et ce que notre facture doit
// contenir pour qu'un dossier passe chez n'importe lequel d'entre eux.
//
// POURQUOI CETTE PAGE, ET CE QU'ELLE NE DIT PAS
// Demandée par Rayane le 30 septembre 2026, pour montrer que l'entreprise est
// en règle et que ses factures sont recevables par les assureurs.
//
// Ce qu'on peut écrire : l'entreprise est immatriculée, son SIRET est
// vérifiable, et sa facture porte toutes les mentions qu'un assureur réclame.
// Ces faits sont contrôlables par n'importe qui.
//
// Ce qu'on ne doit PAS écrire : « nos factures sont acceptées par AXA, la MAIF,
// la Macif… ». Il n'existe aucun agrément, aucun partenariat, aucune convention
// avec ces compagnies. L'affirmer laisserait croire à une relation inexistante,
// et contredirait la page /assurance-habitation/ qui explique — à raison — que
// beaucoup de contrats imposent leur propre réseau et peuvent réduire la prise
// en charge si l'assuré appelle un autre artisan. Un client refusé reviendrait
// avec la page sous le bras.
//
// SUR LES CHIFFRES
// La composition de ce top 10 est stable : les mêmes dix groupes figurent dans
// les classements 2022 et 2025, seul l'ordre bouge. Les montants sont ceux
// publiés pour 2025 ; les parts de marché portent sur l'ensemble des assurances
// de biens et de responsabilité (IARD), pas sur la seule habitation — c'est
// précisé dans le texte de la page.

export interface Assureur {
  rang: number;
  groupe: string;
  /** Les enseignes que le client reconnaît sur son contrat. */
  marques: string[];
  /** Chiffre d'affaires habitation publié, ou null si non disponible. */
  chiffreAffaires?: string;
  /** Nombre de contrats habitation, quand il est publié. */
  contrats?: string;
}

export const assureurs: Assureur[] = [
  {
    rang: 1,
    groupe: 'Covéa',
    marques: ['MAAF', 'MMA', 'GMF'],
    chiffreAffaires: '2 398 M€',
    contrats: '7,85 millions',
  },
  {
    rang: 2,
    groupe: 'Crédit Agricole Assurances',
    marques: ['Pacifica'],
    chiffreAffaires: '1 750 M€',
    contrats: '5,06 millions',
  },
  {
    rang: 3,
    groupe: 'Groupama',
    marques: ['Groupama', 'Gan'],
    chiffreAffaires: '1 480 M€',
    contrats: '3,56 millions',
  },
  {
    rang: 4,
    groupe: 'AXA',
    marques: ['AXA', 'Direct Assurance'],
    chiffreAffaires: '1 274 M€',
    contrats: '3,95 millions',
  },
  {
    rang: 5,
    groupe: 'Macif — Aéma Groupe',
    marques: ['Macif', 'Abeille Assurances'],
    chiffreAffaires: '1 229 M€',
    contrats: '4,58 millions',
  },
  {
    rang: 6,
    groupe: 'MAIF',
    marques: ['MAIF'],
    chiffreAffaires: '1 221 M€',
    contrats: '3,54 millions',
  },
  {
    rang: 7,
    groupe: 'Assurances du Crédit Mutuel',
    marques: ['ACM', 'Crédit Mutuel', 'CIC'],
    chiffreAffaires: '966 M€',
  },
  {
    rang: 8,
    groupe: 'BPCE Assurances',
    marques: ['Banque Populaire', 'Caisse d’Épargne'],
    chiffreAffaires: '864 M€',
  },
  {
    rang: 9,
    groupe: 'Allianz',
    marques: ['Allianz'],
    chiffreAffaires: '814 M€',
  },
  {
    rang: 10,
    groupe: 'Matmut',
    marques: ['Matmut'],
    chiffreAffaires: '607 M€',
  },
];

/**
 * Les mentions qu'un assureur cherche sur une facture de dépannage.
 *
 * Ce ne sont pas des arguments commerciaux : chaque ligne correspond à une
 * obligation réglementaire, et c'est précisément pour cela qu'elles sont
 * opposables. La facture d'un professionnel non immatriculé n'en porte aucune.
 */
export interface MentionFacture {
  intitule: string;
  detail: string;
  fondement: string;
}

export const mentionsFacture: MentionFacture[] = [
  {
    intitule: 'Identité complète de l’entreprise',
    detail:
      'Nom, forme juridique, adresse du siège et numéro SIRET. C’est ce qui permet à l’expert de vérifier en une minute, sur l’annuaire des entreprises, que le professionnel existe bel et bien.',
    fondement: 'Article L. 441-9 du Code de commerce',
  },
  {
    intitule: 'Un devis remis et signé avant l’intervention',
    detail:
      'Y compris en urgence et de nuit. C’est la pièce qui prouve que le montant était connu et accepté avant que le travail ne commence — le premier document qu’un assureur réclame en cas de contestation.',
    fondement: 'Arrêté du 24 janvier 2017 relatif au dépannage à domicile',
  },
  {
    intitule: 'Le détail ligne par ligne',
    detail:
      'Déplacement, main-d’œuvre et chaque fourniture sont facturés séparément, avec leur quantité et leur prix unitaire. Un assureur refuse rarement une facture lisible ; il discute volontiers un montant forfaitaire sans décomposition.',
    fondement: 'Arrêté du 24 janvier 2017',
  },
  {
    intitule: 'La date et le lieu exact de l’intervention',
    detail:
      'Ils doivent concorder avec la déclaration de sinistre et, en cas d’effraction, avec le récépissé de dépôt de plainte. Une incohérence de date suffit à bloquer un dossier.',
    fondement: 'Article L. 441-9 du Code de commerce',
  },
  {
    intitule: 'La mention de TVA',
    detail:
      'L’entreprise relève de la franchise en base : la facture porte « TVA non applicable, article 293 B du CGI ». Ce n’est pas une omission et cela ne pose aucun problème à un assureur — le montant facturé est celui qui est remboursable, sans taxe à retrancher.',
    fondement: 'Article 293 B du Code général des impôts',
  },
];

/** Ce qui peut limiter un remboursement, indépendamment de la facture. */
export const limites = [
  {
    titre: 'Le réseau imposé par votre contrat',
    texte:
      'Beaucoup d’assureurs disposent d’une assistance qui mandate son propre prestataire. Faire appel à un autre artisan peut réduire la prise en charge, voire l’annuler. Quand la situation le permet, appelez votre assureur avant nous : c’est dans votre intérêt, même si ce n’est pas dans le nôtre.',
  },
  {
    titre: 'La franchise',
    texte:
      'Elle reste à votre charge quoi qu’il arrive. Sur une intervention de serrurerie courante, elle peut représenter une part importante du montant, parfois la totalité.',
  },
  {
    titre: 'Le délai de déclaration',
    texte:
      'Deux jours ouvrés en cas de vol, cinq pour les autres sinistres. Passé ce délai, l’assureur peut refuser, et aucune facture, si conforme soit-elle, n’y changera quoi que ce soit.',
  },
  {
    titre: 'L’étendue réelle de vos garanties',
    texte:
      'Une porte forcée relève de la garantie vol ; une clé perdue relève d’une garantie distincte, souvent optionnelle. Seul votre contrat fait foi.',
  },
];

export interface Source {
  libelle: string;
  url: string;
}

export const sources: Source[] = [
  {
    libelle: 'L’Argus de l’assurance — Classements 2025 de l’assurance auto et habitation',
    url: 'https://www.argusdelassurance.com/assurance-dommages/auto/assurance-auto-et-habitation-les-classements-2025.236463',
  },
  {
    libelle: 'Atlas Magazine — Top 20 des compagnies d’assurance habitation en France',
    url: 'https://www.atlas-mag.net/en/articles/top-20-homeowners-insurance-companies-france-0',
  },
  {
    libelle: 'France Assureurs — L’assurance habitation en 2025',
    url: 'https://www.franceassureurs.fr/nos-chiffres-cles/assurance-de-dommages-et-responsabilite/assurance-habitation-2025/',
  },
  {
    libelle: 'Annuaire des entreprises — service public de vérification des immatriculations',
    url: 'https://annuaire-entreprises.data.gouv.fr/',
  },
];

/** Repères du marché habitation, cités dans le texte. */
export const repereMarche = {
  contratsMRH: '46,3 millions',
  contratsAnnee: 'fin 2025',
  tauxResidencesPrincipales: '99,1 %',
  coutMoyenVol: '2 093 €',
  partCovea: '21,3 %',
  partAxa: '17,8 %',
};
