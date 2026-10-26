import type { Article } from './types';

const article: Article = {
  slug: 'cle-tourne-dans-le-vide',
  title: 'La clé tourne dans le vide : ce qui vient de casser',
  metaTitle: 'Clé qui tourne dans le vide : que faire ?',
  metaDescription:
    'La clé tourne sans rien entraîner : ce qui a cédé, pourquoi la porte peut rester ouvrable, et les deux gestes à éviter avant l’arrivée d’un serrurier.',
  excerpt:
    'La clé entre, elle tourne, elle tourne encore — et rien ne bouge. Cette panne précise a presque toujours la même origine, et elle se distingue d’une serrure bloquée. Voici comment la reconnaître et ce qu’il ne faut surtout pas tenter.',
  publishedOn: '2026-10-21',
  targetServices: ['depannage-serrurerie', 'changement-de-serrure'],
  sections: [
    {
      heading: 'Ce que « tourner dans le vide » veut dire mécaniquement',
      body: [
        'Un cylindre ne verrouille rien par lui-même. Il reconnaît votre clé, puis entraîne une petite pièce pivotante située à son extrémité — la came, aussi appelée panneton d’entraînement. C’est elle, et elle seule, qui actionne le mécanisme de la serrure.',
        'Quand la clé tourne sans résistance et sans que rien ne bouge, c’est que ce lien est rompu. Le cylindre fait son travail — il vous a reconnu — mais le message ne passe plus. Trois ruptures possibles : la came s’est cassée, la vis qui solidarise le cylindre au mécanisme a cédé, ou la pièce qui relie les deux s’est désolidarisée à l’intérieur du boîtier.',
        'Dans tous les cas, la pièce défaillante est petite et se remplace. Ce n’est presque jamais la serrure entière qui est en cause.',
      ],
    },
    {
      heading: 'La distinguer d’une serrure bloquée',
      body: [
        'Les deux pannes se ressemblent de l’extérieur, et pourtant elles n’appellent pas la même intervention. La différence se sent dans la main.',
      ],
      bullets: [
        '<strong>Clé qui tourne dans le vide</strong> : aucune résistance. La clé fait un tour complet, parfois plusieurs, comme si elle tournait dans du beurre. Aucun bruit de pêne.',
        '<strong>Serrure bloquée ou grippée</strong> : la clé résiste, force, s’arrête net. Vous sentez un point dur. C’est l’inverse du symptôme précédent.',
        '<strong>Clé qui ne rentre plus</strong> : l’obstacle est dans l’entrée de clé — corps étranger, fragment, goupille déplacée.',
      ],
    },
    {
      heading: 'Bonne nouvelle : la porte est parfois encore ouvrable',
      body: [
        'Avant toute chose, vérifiez l’état de verrouillage, parce qu’il change complètement l’urgence.',
        'Si la panne survient alors que la porte était <strong>déverrouillée</strong>, les pênes dormants sont rentrés : seul le pêne demi-tour retient le vantail, et la poignée suffit à ouvrir. Vous pouvez entrer et sortir, mais vous ne pouvez plus fermer à clé — le logement n’est plus sécurisé, et c’est ce point qui rend l’intervention nécessaire dans la journée.',
        'Si elle survient <strong>porte verrouillée</strong>, les pênes sont sortis et rien ne les fera rentrer depuis l’extérieur. La porte est close et le restera : c’est une urgence au sens plein.',
      ],
    },
    {
      heading: 'Les deux gestes qui aggravent la situation',
      body: [
        'La tentation est de recommencer, plus fort. C’est exactement ce qu’il ne faut pas faire.',
      ],
      bullets: [
        '<strong>Forcer en tournant.</strong> Chaque tour supplémentaire use ce qui reste de la liaison, et peut transformer une came fêlée en came brisée en deux morceaux, dont l’un se loge dans le mécanisme. On passe alors du remplacement d’un cylindre à l’ouverture du boîtier.',
        '<strong>Injecter du lubrifiant.</strong> Le réflexe est compréhensible, le raisonnement est faux : rien n’est grippé ici, puisque rien ne résiste. Le produit n’atteindra pas la pièce cassée, et il encrassera les goupilles du cylindre — une pièce qui fonctionnait encore parfaitement.',
      ],
    },
    {
      heading: 'Ce que nous ferons, et ce que ça coûte',
      body: [
        'L’intervention commence par le diagnostic porte ouverte quand c’est possible : actionner le mécanisme sans la clé permet de savoir en quelques secondes si le défaut vient du cylindre ou du boîtier.',
        'Dans la majorité des cas, le remplacement du cylindre suffit, et l’article <a href="/blog/cylindre-ou-serrure-complete/">cylindre ou serrure complète</a> explique comment trancher entre les deux. Si la rupture est à l’intérieur du boîtier, c’est la serrure qui se remplace — notre page <a href="/services/changement-de-serrure/">changement de serrure</a> détaille les deux cas.',
        'Une ouverture de porte démarre à 69 €, déplacement et première heure compris. Le tarif vous est annoncé puis confirmé par téléphone avant tout déplacement, et le remplacement éventuel du cylindre fait l’objet d’un devis avant travaux : le détail figure sur notre page <a href="/tarifs/">tarifs</a>.',
      ],
    },
    {
      heading: 'Ce qu’il faut nous dire au téléphone',
      body: [
        'Quatre précisions suffisent à préparer l’intervention et à fiabiliser le tarif annoncé.',
      ],
      bullets: [
        'La porte est-elle <strong>verrouillée ou simplement tirée</strong> au moment de la panne.',
        'La clé tourne-t-elle <strong>dans le vide</strong> ou <strong>résiste-t-elle</strong>.',
        'Le nombre de <strong>points de verrouillage</strong> visibles sur le chant de la porte.',
        'La <strong>marque gravée</strong> sur le cylindre ou sur la têtière, si elle est lisible.',
      ],
    },
  ],
  takeaway:
    'Une clé qui tourne sans résistance signe une liaison rompue entre le cylindre et le mécanisme — une petite pièce, pas la serrure entière. Arrêtez de tourner, ne mettez aucun lubrifiant, et vérifiez d’abord si la porte était verrouillée : c’est cette réponse qui fait la différence entre une urgence et une réparation du jour.',
};

export default article;
