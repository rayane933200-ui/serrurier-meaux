// FAQ : questions reprises des sujets les plus traités par les serruriers
// les mieux référencés, répondues uniquement avec les faits réels du site
// (24h/24, moins de 30 min, grille tarifaire publiée, tarif annoncé avant déplacement)
// et des informations d'ordre général ou réglementaire publiques.

export interface FaqItem {
  question: string;
  answer: string;
  /** true = affichée sur la page d'accueil */
  featured?: boolean;
}

export const faq: FaqItem[] = [
  {
    question: 'Combien coûte l’ouverture d’une porte claquée ?',
    answer:
      "Une ouverture de porte démarre à 69 € déplacement compris. Le prix exact dépend du type de porte et de serrure, de la façon dont la porte est fermée et de l'horaire. Il vous est annoncé et confirmé par téléphone avant tout déplacement : vous savez ce que vous payez avant que nous prenions la route, et c'est ce montant qui figure sur la facture.",
    featured: true,
  },
  {
    question: 'En combien de temps intervenez-vous ?',
    answer:
      "Nous visons une intervention en moins de 30 minutes sur Meaux et les villes voisines. Le délai réel dépend de votre localisation exacte, de l'heure et des conditions de circulation : il vous est indiqué au téléphone, sans promesse que nous ne pourrions pas tenir.",
    featured: true,
  },
  {
    question: 'Intervenez-vous la nuit, le week-end et les jours fériés ?',
    answer:
      "Oui, nous sommes disponibles 24h/24 et 7j/7, nuit, week-end et jours fériés compris. Comme dans l'ensemble du métier, les interventions en horaires de nuit, le week-end et les jours fériés sont facturées à un tarif supérieur au tarif de journée. Ce tarif vous est communiqué au téléphone avant le déplacement.",
    featured: true,
  },
  {
    question: 'Une porte claquée peut-elle être ouverte sans dégât ?',
    answer:
      "Souvent, oui. Quand la porte est simplement claquée et équipée d'une serrure standard, une méthode non destructive permet généralement de l'ouvrir sans remplacer quoi que ce soit. C'est plus incertain sur une serrure haute sécurité, un cylindre anti-perçage ou une porte blindée, qui sont précisément conçus pour résister. Si l'ouverture non destructive n'est pas possible, nous vous le disons avant d'intervenir, avec le coût du remplacement.",
    featured: true,
  },
  {
    question: 'Quels justificatifs faut-il présenter pour une ouverture de porte ?',
    answer:
      "Un justificatif de domicile ou de possession du logement est demandé avant l'ouverture : pièce d'identité, quittance de loyer, bail, ou facture à votre nom et à cette adresse. C'est une protection pour vous : cette vérification garantit que personne d'autre ne peut faire ouvrir votre porte à votre place.",
    featured: true,
  },
  {
    question: 'Comment reconnaître un serrurier sérieux ?',
    answer:
      "Quatre repères fiables : un tarif annoncé avant le déplacement et non à l'arrivée, une entreprise identifiable avec un interlocuteur clair, un devis pour tout ce qui dépasse le dépannage simple, et une facture détaillée mentionnant les pièces remplacées. À l'inverse, un prix qui grimpe une fois le technicien sur place, une pression pour remplacer immédiatement toute la porte, ou un refus de facture sont des motifs d'arrêter l'intervention.",
    featured: true,
  },
  {
    question: 'Qui paie le changement de serrure : le locataire ou le propriétaire ?',
    answer:
      "En règle générale, le remplacement lié à l'usure normale de la serrure incombe au propriétaire, tandis que celui lié à une perte de clés ou à une dégradation causée par l'occupant incombe au locataire. Après un cambriolage, l'assurance habitation prévoit fréquemment une prise en charge. Dans tous les cas, demandez une facture détaillée : c'est le document que votre bailleur ou votre assureur vous demandera.",
  },
  {
    question: 'Faut-il changer la serrure après un cambriolage ?',
    answer:
      "Oui, c'est vivement recommandé, même quand la serrure fonctionne encore. Une serrure qui a été forcée a perdu une partie de sa résistance mécanique, et des clés volées peuvent avoir été copiées. Prenez des photos avant toute remise en état, conservez la serrure endommagée pour votre dossier, déposez plainte, puis conservez la facture détaillée de l'intervention.",
  },
  {
    question: 'Qu’est-ce qu’une serrure certifiée A2P ?',
    answer:
      "La certification A2P est délivrée par le CNPP et mesure la résistance d'une serrure à des essais d'effraction normalisés : une étoile correspond à cinq minutes de résistance, deux étoiles à dix minutes, trois étoiles à quinze minutes. Pour les blocs-portes complets, les niveaux équivalents sont BP1, BP2 et BP3. Certains contrats d'assurance habitation exigent un niveau minimum : vérifiez votre contrat avant de choisir votre équipement.",
  },
  {
    question: 'Comment se déroule une intervention ?',
    answer:
      "En quatre temps. Vous appelez et décrivez la situation. Nous établissons un diagnostic par téléphone à partir du type de porte, de serrure et de fermeture. Un tarif vous est annoncé avant le déplacement. Le serrurier intervient, puis vous remet une facture détaillée. Si l'intervention peut attendre le lendemain à tarif normal, nous vous le disons plutôt que de vous facturer une majoration d'urgence.",
  },
  {
    question: 'Ma clé est cassée dans la serrure, que faire en attendant ?',
    answer:
      "Laissez le fragment exactement où il est et appelez-nous en précisant le type de serrure si vous le connaissez : l'extraction se fait avec un outil dédié et prend quelques minutes. À savoir : une pince, un tournevis ou de la colle enfoncent généralement la clé plus profondément et abîment les goupilles, ce qui transforme une extraction simple en remplacement de cylindre.",
  },
  {
    question: 'Ma serrure devient dure, faut-il la remplacer ?',
    answer:
      "Souvent, un simple réglage suffit et vous gardez votre serrure. Une serrure qui durcit vient fréquemment d'une cause extérieure au mécanisme : porte qui a joué avec l'humidité, gâche désalignée de quelques millimètres, paumelles à régler. Côté entretien, préférez un lubrifiant sec au graphite ou au PTFE : les dégrippants gras captent la poussière et finissent par user le mécanisme.",
  },
];

export const featuredFaq = faq.filter((item) => item.featured);
