// Prestations du site : une entrée = une page /services/<slug>.
// Les 5 prestations reprennent exactement celles déjà annoncées sur le site.
// Ne pas ajouter de prestation non confirmée par l'utilisateur (porte de garage,
// vitrerie, copie de badge... ne sont PAS validées à ce stade).

export interface ServiceDetail {
  title: string;
  body: string;
}

export interface Service {
  slug: string;
  icon: 'key' | 'lock' | 'wrench' | 'shield' | 'van';
  /** Libellé court : cartes, navigation, maillage interne */
  title: string;
  /** Titre H1 de la page dédiée */
  h1: string;
  /** Titre passé au layout (complété par « | Serrurier à Meaux ») */
  metaTitle: string;
  metaDescription: string;
  /** Description courte utilisée sur les cartes */
  teaser: string;
  price: string;
  /** Paragraphe d'introduction de la page */
  intro: string;
  /** « Dans quels cas nous appeler » */
  situations: string[];
  details: ServiceDetail[];
}

export const services: Service[] = [
  {
    slug: 'ouverture-de-porte',
    icon: 'key',
    title: 'Ouverture de porte',
    h1: 'Ouverture de porte à Meaux',
    metaTitle: 'Ouverture de porte à Meaux',
    metaDescription:
      "Porte claquée, clé perdue ou cassée : ouverture de porte à Meaux en moins de 30 minutes, 24h/24 et 7j/7, dès 69 € déplacement compris.",
    teaser:
      'Porte claquée, clé perdue ou cassée : ouverture rapide et sans dégât si possible.',
    price: 'À partir de 69 € — déplacement et 1re heure compris',
    intro:
      "L'ouverture de porte est l'intervention la plus fréquente en serrurerie d'urgence. Selon le type de porte et de serrure, l'objectif est toujours le même : vous faire rentrer chez vous le plus vite possible et, dans la mesure du possible, sans abîmer la serrure ni la porte.",
    situations: [
      'Porte claquée avec les clés restées à l’intérieur',
      'Clés perdues ou volées',
      'Clé cassée dans la serrure ou clé qui tourne dans le vide',
      'Serrure bloquée ou verrou qui ne se débloque plus',
      'Porte fermée à double tour sans clé disponible',
    ],
    details: [
      {
        title: 'Porte claquée ou porte fermée à clé : ce n’est pas la même intervention',
        body: "Une porte simplement claquée, avec le pêne à demi-tour engagé, peut souvent être ouverte par une méthode non destructive : la serrure et la porte restent en place et vous n'avez rien à remplacer. Une porte verrouillée à double tour, une serrure multipoints ou une porte blindée demandent une approche différente, parfois destructive pour le cylindre, qui est alors remplacé dans la même intervention. C'est pour cette raison que le diagnostic se fait au téléphone avant le déplacement : décrire précisément la situation permet d'annoncer un tarif juste.",
      },
      {
        title: 'Ouverture sans dégât : dans quels cas c’est possible',
        body: "L'ouverture non destructive dépend du type de serrure, de son état et de la façon dont la porte est fermée. Elle est souvent possible sur une porte claquée équipée d'une serrure standard. Elle devient plus incertaine sur une serrure haute sécurité, un cylindre anti-perçage ou une porte blindée, précisément parce que ces équipements sont conçus pour résister. Quand l'ouverture non destructive n'est pas réalisable, nous vous le disons avant d'intervenir, avec le coût du remplacement du cylindre.",
      },
      {
        title: 'Ce qui vous sera demandé sur place',
        body: "Un justificatif de domicile ou de possession du logement est demandé avant l'ouverture (pièce d'identité, quittance, bail, facture à votre nom). C'est une pratique normale et une protection pour vous : cette vérification garantit que votre porte ne peut être ouverte qu'à votre demande.",
      },
      {
        title: 'Clé cassée dans la serrure',
        body: "Le bon réflexe est de laisser le fragment en place : l'extraction se fait avec un outil dédié, en quelques minutes. À l'inverse, une pince ou une colle enfoncent généralement le fragment plus profondément et endommagent les goupilles. Dans la majorité des cas, la serrure est conservée et il vous reste simplement un double de clé à refaire ; si le cylindre a souffert, il est remplacé. Le détail des gestes à éviter figure dans notre article <a href=\"/blog/cle-cassee-dans-la-serrure/\">clé cassée dans la serrure</a>.",
      },
    ],
  },
  {
    slug: 'changement-de-serrure',
    icon: 'lock',
    title: 'Changement de serrure',
    h1: 'Changement de serrure à Meaux',
    metaTitle: 'Changement de serrure à Meaux',
    metaDescription:
      'Changement de serrure à Meaux : serrure standard, multipoints ou cylindre, sur porte d’entrée ou palière. Intervention 24h/24, tarif annoncé avant travaux.',
    teaser: 'Remplacement de serrure standard ou renforcée, tous types de portes.',
    price: 'Cylindre dès 109 € — serrure 3 points dès 349 €',
    intro:
      "Remplacer une serrure peut répondre à une urgence (cambriolage, clés volées) comme à un besoin planifié (emménagement, serrure usée, montée en sécurité). Le choix du matériel compte autant que la pose : une serrure haut de gamme mal posée ne protège pas mieux qu'une serrure d'entrée de gamme.",
    situations: [
      'Emménagement dans un nouveau logement',
      'Clés perdues, volées ou restées entre les mains d’un tiers',
      'Serrure usée, dure à manœuvrer ou qui accroche',
      'Suite à une effraction ou une tentative d’effraction',
      'Souhait de passer sur une serrure plus résistante',
    ],
    details: [
      {
        title: 'Changer la serrure ou seulement le cylindre ?',
        body: "Dans beaucoup de cas, seul le cylindre (le barillet, la partie dans laquelle entre la clé) a besoin d'être remplacé : c'est plus rapide, moins coûteux et suffisant quand le mécanisme de la serrure est en bon état, par exemple après une perte de clés. Le remplacement complet de la serrure se justifie quand le mécanisme est usé, forcé, ou quand vous voulez changer de niveau de sécurité. Le diagnostic sur place détermine lequel des deux est réellement nécessaire.",
      },
      {
        title: 'Serrure simple, multipoints, à larder ou en applique',
        body: "Une serrure monopoint verrouille la porte en un seul point : c'est le standard des portes intérieures et de nombreuses portes palières anciennes. Une serrure multipoints verrouille en trois, cinq ou sept points répartis sur la hauteur du dormant, ce qui répartit l'effort en cas de tentative d'effraction. La serrure à larder est encastrée dans l'épaisseur de la porte, la serrure en applique se fixe sur sa face intérieure. Le remplacement doit respecter le type existant, ou impliquer une adaptation de la porte et de la gâche.",
      },
      {
        title: 'Locataire ou propriétaire : qui paie ?',
        body: "En règle générale, le remplacement lié à l'usure normale de la serrure incombe au propriétaire, tandis que celui lié à une perte de clés ou à une dégradation causée par l'occupant incombe au locataire. Après un cambriolage, le contrat d'assurance habitation prévoit fréquemment une prise en charge : conservez la facture et le dépôt de plainte. En cas de doute sur votre situation, demandez-nous une facture détaillée, c'est ce que votre assureur ou votre bailleur vous demandera.",
      },
      {
        title: 'Comprendre la certification A2P',
        body: "La certification A2P est délivrée par le CNPP et mesure la résistance d'une serrure à l'effraction : une étoile (A2P*) correspond à cinq minutes de résistance à des essais normalisés, deux étoiles à dix minutes, trois étoiles à quinze minutes. Pour les blocs-portes complets, on parle de BP1, BP2 et BP3 selon le même principe de durée. Ces niveaux servent de repère objectif, et certains contrats d'assurance exigent un niveau minimum : vérifiez votre contrat avant de choisir.",
      },
    ],
  },
  {
    slug: 'blindage-de-porte',
    icon: 'shield',
    title: 'Blindage de porte',
    h1: 'Blindage de porte à Meaux',
    metaTitle: 'Blindage de porte à Meaux',
    metaDescription:
      'Blindage de porte et renforcement de serrure à Meaux : sécurisez une porte existante contre les tentatives d’effraction. Étude et devis gratuits.',
    teaser: 'Renforcement de porte et de serrure pour améliorer votre sécurité.',
    price: 'Sur devis',
    intro:
      "Blinder une porte consiste à renforcer l'ensemble porte, serrure et encadrement pour qu'il résiste plus longtemps à une tentative d'effraction. C'est une intervention planifiée, qui commence toujours par un examen de la porte existante : toutes les portes ne peuvent pas être blindées dans les mêmes conditions.",
    situations: [
      'Après un cambriolage ou une tentative d’effraction',
      'Logement en rez-de-chaussée ou en étage accessible',
      'Porte palière ancienne ou porte en bois peu résistante',
      'Exigence de niveau de sécurité de votre assurance',
      'Local commercial ou professionnel à sécuriser',
    ],
    details: [
      {
        title: 'Blindage de porte ou porte blindée : la différence',
        body: "Le blindage renforce une porte que vous conservez : une tôle d'acier est appliquée sur le vantail, l'encadrement est renforcé par des cornières, et la serrure est remplacée par un modèle multipoints. La porte blindée, elle, est un bloc-porte complet — vantail et dormant conçus ensemble — qui remplace l'existant. Le blindage coûte moins cher et conserve l'aspect intérieur de la porte ; le bloc-porte offre un niveau de résistance supérieur et homogène. Le choix dépend de l'état de la porte, de la configuration du bâti et de votre budget.",
      },
      {
        title: 'Les trois points faibles à traiter ensemble',
        body: "Une porte ne cède pas au hasard : elle cède par la serrure, par le dormant ou par les paumelles. Renforcer uniquement la serrure d'une porte dont l'encadrement est en bois tendre ne change presque rien, car c'est le bâti qui lâchera. Un blindage cohérent traite donc les trois : serrure multipoints, encadrement renforcé, paumelles anti-dégondage. C'est le point à vérifier dans tout devis de blindage, quel que soit le prestataire.",
      },
      {
        title: 'Copropriété et porte palière : ce qu’il faut anticiper',
        body: "Dans un immeuble, modifier l'aspect extérieur d'une porte palière peut relever du règlement de copropriété, notamment quand la porte donne sur une cage d'escalier classée ou quand l'harmonie des paliers est imposée. Un blindage intérieur, qui ne change pas la face visible depuis le palier, pose généralement moins de difficultés. Renseignez-vous auprès de votre syndic avant les travaux : cela évite d'avoir à revenir en arrière.",
      },
      {
        title: 'Niveaux de résistance et assurance',
        body: "Pour les blocs-portes, les niveaux BP1, BP2 et BP3 correspondent respectivement à cinq, dix et quinze minutes de résistance à des essais d'effraction normalisés. Certains contrats d'assurance habitation conditionnent leur garantie vol à un niveau minimum d'équipement, en particulier pour les logements en rez-de-chaussée ou les objets de valeur. Lisez cette clause avant de choisir votre niveau : c'est elle qui détermine le bon investissement, plus que la seule sensation de sécurité.",
      },
    ],
  },
  {
    slug: 'depannage-serrurerie',
    icon: 'wrench',
    title: 'Dépannage serrurerie',
    h1: 'Dépannage et réparation de serrurerie à Meaux',
    metaTitle: 'Dépannage et réparation de serrurerie à Meaux',
    metaDescription:
      'Serrure grippée, verrou bloqué, poignée cassée, porte qui ferme mal : dépannage et réparation de serrurerie à Meaux, diagnostic et réparation sur place.',
    teaser: 'Serrure grippée, verrou bloqué, poignée cassée : diagnostic et réparation.',
    price: 'Main-d’œuvre 69 €/h — déplacement 50 €',
    intro:
      "Beaucoup de pannes de serrurerie se règlent par un réglage, un nettoyage du mécanisme ou le remplacement d'une seule pièce. Le dépannage commence donc toujours par un diagnostic : identifier la cause réelle, c'est souvent vous éviter le prix d'une serrure neuve pour une simple gâche désalignée.",
    situations: [
      'Serrure dure, grippée ou qui accroche à la fermeture',
      'Verrou bloqué, pêne qui ne sort plus',
      'Poignée, béquille ou rosace cassée',
      'Porte qui frotte, qui ne ferme plus ou qui s’est affaissée',
      'Clé qui tourne sans entraîner le mécanisme',
    ],
    details: [
      {
        title: 'Une serrure dure demande souvent un simple réglage',
        body: "Quand une serrure devient difficile à manœuvrer, la cause est souvent extérieure au mécanisme : une porte qui a joué avec l'humidité, une gâche désalignée de quelques millimètres, des paumelles à régler. Dans ces cas, un réglage de porte suffit et vous gardez votre serrure d'origine. Le remplacement se justifie quand le mécanisme lui-même est usé ou forcé. Un repère utile pour vous : un professionnel commence par tester l'alignement de la porte avant de proposer un changement complet.",
      },
      {
        title: 'Les bons réflexes en attendant notre arrivée',
        body: "Deux gestes simples préservent votre serrure. D'abord, choisir un lubrifiant sec au graphite ou au PTFE : les dégrippants gras et l'huile de cuisine captent la poussière et transforment le mécanisme en pâte abrasive. Ensuite, dès que la clé résiste, s'arrêter et appeler : forcer casse généralement la clé dans le cylindre et transforme une réparation simple en extraction — voir notre article <a href=\"/blog/cle-cassee-dans-la-serrure/\">clé cassée dans la serrure</a>.",
      },
      {
        title: 'Réparation ou remplacement : comment c’est décidé',
        body: "La réparation est privilégiée quand la pièce défaillante est disponible et que le reste du mécanisme est sain : ressort, béquille, gâche, cylindre seul. Le remplacement devient plus pertinent quand le coût cumulé des pièces approche celui d'une serrure neuve, quand le modèle n'est plus fabriqué, ou quand la serrure a été forcée — dans ce dernier cas, même si elle fonctionne encore, sa résistance n'est plus celle d'origine. Vous recevez le tarif correspondant avant que les travaux commencent.",
      },
    ],
  },
  {
    slug: 'serrurier-urgence',
    icon: 'van',
    title: 'Intervention d’urgence',
    h1: 'Serrurier d’urgence à Meaux, 24h/24 et 7j/7',
    metaTitle: 'Serrurier d’urgence 24h/24 à Meaux',
    metaDescription:
      'Serrurier d’urgence à Meaux, 24h/24 et 7j/7, nuit, week-end et jours fériés. Intervention en moins de 30 minutes sur Meaux et le Pays de Meaux.',
    teaser: 'Déplacement rapide sur Meaux et le Pays de Meaux, 24h/24 et 7j/7.',
    price: 'Sur devis',
    intro:
      "Une urgence de serrurerie survient à n'importe quelle heure : c'est précisément pour cela que nous restons joignables en permanence. Nous intervenons à Meaux et dans le Pays de Meaux 24h/24 et 7j/7, nuit, week-end et jours fériés compris, avec un objectif d'intervention en moins de 30 minutes et un tarif annoncé au téléphone avant tout déplacement.",
    situations: [
      'Blocage à l’extérieur du logement, de nuit ou en pleine journée',
      'Effraction ou tentative d’effraction à sécuriser immédiatement',
      'Serrure vandalisée, cylindre cassé ou arraché',
      'Local professionnel à rouvrir ou à sécuriser en urgence',
      'Personne vulnérable ou enfant enfermé à l’intérieur',
    ],
    details: [
      {
        title: 'Ce que nous vous demanderons au téléphone',
        body: "Quatre informations suffisent à préparer l'intervention et à annoncer un prix : votre adresse exacte avec l'étage et le code d'accès, le type de porte et de serrure si vous le connaissez, la façon dont la porte est fermée (claquée ou verrouillée à clé), et si vous avez un justificatif de domicile sur place. Plus ces éléments sont précis, plus le tarif annoncé sera fiable et moins il y aura de surprise à l'arrivée.",
      },
      {
        title: 'Vous payez le tarif qui correspond à votre situation',
        body: "Certaines situations gagnent à être planifiées et vous coûtent alors moins cher : une serrure qui commence à durcir, une porte qui frotte, un projet de blindage. D'autres demandent une sécurisation immédiate, comme une porte fracturée ou une serrure arrachée, ne serait-ce que pour votre assurance. Nous faisons le tri avec vous au téléphone : quand votre situation peut attendre le lendemain, nous vous le disons et vous bénéficiez du tarif de journée.",
      },
      {
        title: 'Après une effraction : l’ordre des choses',
        body: "Prenez des photos avant toute remise en état, limitez vos gestes au strict nécessaire, puis déposez plainte : l'assurance exigera le récépissé. La sécurisation immédiate de l'ouverture peut se faire avant le passage des forces de l'ordre si le logement n'est plus fermable, mais gardez la serrure forcée : elle constitue une pièce du dossier. Nous vous remettons une facture détaillée, mentionnant les pièces remplacées, qui est le document attendu par votre assureur.",
      },
      {
        title: 'Reconnaître un serrurier sérieux en pleine urgence',
        body: "C'est au moment où vous êtes pressé que la vigilance compte le plus. Quatre signaux fiables : un tarif annoncé avant le déplacement et non à l'arrivée, une entreprise identifiable avec un interlocuteur clair, un devis pour tout ce qui dépasse le dépannage simple, et une facture détaillée à la fin. À l'inverse, un prix qui grimpe une fois le technicien sur place, une pression pour remplacer immédiatement toute la porte, ou un refus de facture doivent vous faire arrêter l'intervention.",
      },
      {
        title: 'SOS serrurier, dépannage, urgence : derrière les mots',
        body: "On cherche indifféremment « SOS serrurier », « SOS serrurerie », « serrurier d'urgence » ou « dépannage serrurier » : ce sont les mêmes mots pour le même besoin, et aucun d'eux n'est un label. N'importe qui peut écrire « SOS » sur une page ou sur un véhicule, sans que cela n'engage à quoi que ce soit — ni sur le délai, ni sur le prix, ni sur la qualification. Ce qui engage réellement tient en trois éléments vérifiables avant l'intervention : un numéro SIRET que vous pouvez contrôler depuis votre téléphone, un tarif annoncé au téléphone avant le déplacement, et un devis écrit avant que le travail commence. Jugez là-dessus, pas sur le vocabulaire.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
