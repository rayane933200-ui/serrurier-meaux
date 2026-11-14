import type { Article } from './types';
// Même cliché et même légende que sur la page de zone : une photo ne se décrit
// pas de deux façons. Aucun lieu n'est nommé (voir CLAUDE.md).
import illustration from '../../assets/photos/interventions/serrure-multipoints-en-applique.jpg';

const article: Article = {
  slug: 'porte-blindee-ou-blindage-de-porte',
  image: {
    src: illustration,
    alt: 'Serrure multipoints en applique sur une porte ancienne, tringles verticales apparentes',
    credit:
      'Serrure multipoints en applique sur une porte ancienne, tringles verticales apparentes. Photo prise lors d’une de nos interventions.',
  },
  title: 'Porte blindée ou blindage de la porte existante : comment choisir',
  metaTitle: 'Porte blindée ou blindage de porte : comment choisir',
  metaDescription:
    'Remplacer la porte par un bloc-porte blindé ou renforcer celle que vous avez : ce que chaque solution exige, ce qu’elle certifie, et comment trancher.',
  excerpt:
    'Les deux expressions se ressemblent et désignent deux chantiers différents. L’un remplace tout, l’autre renforce ce qui est en place. Le bon choix ne dépend pas du budget en premier, mais de l’état de votre porte actuelle et de ce qu’exige votre assurance.',
  publishedOn: '2026-11-14',
  targetServices: ['blindage-de-porte', 'changement-de-serrure'],
  sections: [
    {
      heading: 'Deux mots, deux ouvrages',
      body: [
        '<strong>Blinder une porte</strong>, c’est renforcer celle que vous gardez : une tôle d’acier est fixée sur le vantail, l’encadrement reçoit des cornières qui empêchent d’y glisser un pied-de-biche, les paumelles sont renforcées contre le dégondage et la serrure est remplacée par un modèle multipoints.',
        '<strong>Poser une porte blindée</strong>, c’est remplacer l’ensemble par un bloc-porte : un vantail et un bâti métalliques, des paumelles, une serrure et un cylindre conçus pour travailler ensemble, et éprouvés ensemble.',
        'La différence n’est pas de degré, elle est de nature. Dans le premier cas, le résultat vaut ce que valent la porte et le bâti d’origine. Dans le second, on repart de zéro. Tout le reste de cet article découle de là.',
      ],
    },
    {
      heading: 'Ce que le blindage exige de votre porte actuelle',
      body: [
        'Un blindage ne transforme pas n’importe quelle porte. Il ajoute de l’acier et du poids à un support, et ce support doit le mériter. Quatre points se vérifient avant de chiffrer.',
      ],
      bullets: [
        '<strong>Le vantail est plein.</strong> Frappez au centre de la porte avec la jointure du doigt : un son mat et court indique une âme pleine, un son creux une porte alvéolaire. Sur une porte creuse, la tôle tient sur du carton — on ne blinde pas, on remplace.',
        '<strong>Le bois est sain.</strong> Ni fendu autour de la serrure, ni gonflé en bas, ni vrillé. Une porte qui a déjà été forcée a souvent perdu sa tenue là où les fixations devront mordre.',
        '<strong>Le bâti tient dans le mur.</strong> Poussez fermement le dormant du plat de la main, porte ouverte : s’il bouge, les cornières n’auront rien de solide où se fixer.',
        '<strong>Les paumelles supporteront le poids.</strong> La tôle alourdit nettement le vantail. Des paumelles d’origine fatiguées se remplacent ou se doublent, faute de quoi la porte s’affaisse en quelques mois et la serrure se met à frotter — le sujet de notre article <a href="/blog/porte-qui-ferme-mal-reglage/">porte qui ferme mal</a>.',
      ],
    },
    {
      heading: 'Ce que seul un bloc-porte apporte',
      body: [
        '<strong>Une résistance homogène.</strong> Une porte cède par son point le plus faible : la serrure, le dormant ou les paumelles. Sur un bloc-porte, ces trois points ont été dimensionnés ensemble. Sur une porte blindée après coup, on renforce chacun du mieux que l’existant le permet.',
        '<strong>Une certification de l’ensemble.</strong> C’est le point le moins connu et le plus important. Les grades A2P BP1, BP2 et BP3 ne s’appliquent qu’à un bloc-porte complet : le CNPP certifie des « ensembles complets et indissociables ». Une porte existante que l’on blinde peut recevoir une serrure certifiée A2P — une, deux ou trois étoiles — mais l’ensemble, lui, n’est pas un bloc-porte certifié. Un devis qui promet un « blindage certifié BP » mélange deux choses.',
        '<strong>Un bâti neuf.</strong> Sur une porte ancienne, c’est souvent le dormant en bois qui lâche le premier, bien avant la serrure. Le bloc-porte le remplace par de l’acier ancré dans le mur.',
        '<strong>Des performances documentées.</strong> Résistance au feu, isolation acoustique : sur un bloc-porte, elles sont mesurées et écrites. Sur une porte blindée après coup, elles ne sont pas mesurées.',
      ],
    },
    {
      heading: 'Lisez votre contrat d’assurance avant de choisir',
      body: [
        'Beaucoup de contrats d’assurance habitation conditionnent la garantie vol à un niveau d’équipement, surtout en rez-de-chaussée ou au-delà d’un certain montant d’objets de valeur. Or la formulation change tout.',
        'Si la clause exige une <strong>serrure</strong> d’un certain niveau — « serrure certifiée A2P deux étoiles », « serrure trois points » —, un blindage équipé de la bonne serrure y répond. Si elle exige une <strong>porte blindée certifiée</strong> ou un grade BP, seul un bloc-porte y répond. Les étoiles concernent la serrure, les grades BP concernent la porte entière : confondre les deux, c’est risquer de financer des travaux qui ne satisfont pas le contrat.',
        'Dans le doute, demandez à votre assureur de confirmer par écrit que l’équipement prévu au devis répond à la clause. Nos repères sont réunis sur les pages <a href="/assurance-habitation/">assurance habitation</a> et <a href="/marques-de-serrures/">marques de serrures et certification A2P</a>.',
      ],
    },
    {
      heading: 'Copropriété, location : ce que chaque option implique',
      body: [
        'Un blindage posé côté intérieur ne change pas la face de la porte que voient vos voisins : c’est la solution qui soulève le moins de questions en immeuble. Un bloc-porte, lui, remplace le bâti et la face palière ; il demande en règle générale l’accord de la copropriété, et celui du propriétaire si vous êtes locataire.',
        'Ce n’est pas une raison de renoncer au bloc-porte, c’est une raison de s’y prendre plus tôt. Les démarches, les majorités et les pièces à fournir sont détaillées dans notre article <a href="/blog/porte-blindee-copropriete-location-autorisations/">porte blindée en copropriété ou en location : quelles autorisations demander</a>.',
      ],
    },
    {
      heading: 'Cinq situations, cinq réponses',
      body: [
        'Aucune règle ne remplace l’examen de la porte, mais ces cas couvrent l’essentiel de ce que l’on rencontre.',
      ],
      bullets: [
        '<strong>Porte palière ancienne, épaisse et saine, bâti solide.</strong> Le blindage est un bon candidat : il conserve une porte de qualité et son aspect.',
        '<strong>Porte creuse, légère, qui sonne le vide.</strong> Bloc-porte. Renforcer la serrure seule ne change rien, c’est le vantail qui cédera.',
        '<strong>Porte ou bâti déjà forcés.</strong> Bloc-porte le plus souvent : le bois a éclaté là où il faudrait se fixer. Après une effraction, voyez d’abord <a href="/blog/apres-un-cambriolage-demarches/">l’ordre des démarches</a>.',
        '<strong>Contrat d’assurance qui exige un grade BP.</strong> Bloc-porte, sans discussion possible.',
        '<strong>Règlement de copropriété strict sur l’aspect des paliers.</strong> Blindage intérieur, ou bloc-porte dont la face palière reprend l’aspect imposé — à faire valider avant commande.',
      ],
    },
    {
      heading: 'Les questions à poser sur un devis',
      body: [
        'Que vous penchiez pour l’une ou l’autre solution, un devis sérieux répond à ces questions sans que vous ayez à les poser. S’il n’y répond pas, posez-les.',
      ],
      bullets: [
        '<strong>Qu’est-ce qui est conservé, qu’est-ce qui est remplacé ?</strong> Vantail, bâti, paumelles, serrure, cylindre : chaque pièce doit être nommée.',
        '<strong>Quelle serrure, quel cylindre, quel niveau ?</strong> Marque, modèle, nombre de points, certification — et non « serrure haute sécurité ».',
        '<strong>Comment le bâti est-il renforcé ou fixé ?</strong> C’est le poste qu’un devis vague oublie, et celui par lequel une porte cède.',
        '<strong>Les paumelles sont-elles traitées ?</strong> Renfort, remplacement, protection contre le dégondage.',
        '<strong>La fourniture et la pose sont-elles séparées ?</strong> Deux lignes distinctes permettent de comparer deux propositions.',
        '<strong>Quels documents seront remis ?</strong> Facture détaillée, références des pièces, clés et carte de propriété.',
      ],
    },
    {
      heading: 'Avant la porte, vérifiez le reste',
      body: [
        'La sécurité d’une entrée est une chaîne, et l’on commence par le maillon le moins cher. Un cylindre qui dépasse de la porte se casse à la pince en quelques secondes, blindage ou non : c’est la première chose à corriger, et la moins coûteuse. Viennent ensuite la qualité du cylindre, puis la serrure et ses gâches, et seulement après la porte et son bâti.',
        'Cet ordre est détaillé dans nos articles <a href="/blog/securiser-son-logement-par-ou-commencer/">sécuriser son logement : par où commencer</a> et <a href="/blog/serrure-multipoints-combien-de-points/">serrure multipoints : combien de points</a>. Il arrive qu’un bon cylindre et une serrure multipoints bien posés suffisent, et nous vous le disons quand c’est le cas.',
        'À Meaux, les deux situations coexistent à quelques rues d’écart : des portes palières d’origine dans le bâti ancien du centre, des portes de série dans les grands ensembles. Aucune ne se juge sur l’adresse. C’est en sondant la porte et en éprouvant le bâti qu’on sait laquelle des deux solutions a un sens — d’où un devis gratuit, établi sur place. Le détail de la prestation est sur la page <a href="/services/blindage-de-porte/">blindage de porte à Meaux</a>, et le déroulement d’un remplacement complet dans notre article <a href="/blog/installation-porte-blindee-etapes/">installation d’une porte blindée : le déroulement</a>.',
      ],
    },
  ],
  takeaway:
    'Frappez au centre de votre porte et poussez sur son bâti : pleine et bien tenue, elle peut être blindée ; creuse, fendue ou branlante, elle se remplace. Puis relisez la clause vol de votre contrat — si elle exige un grade BP, seul un bloc-porte complet y répond.',
  sources: [
    {
      label: 'Blocs-portes — certification A2P',
      publisher: 'CNPP',
      url: 'https://www.cnpp.com/tester-certifier/certification-a2p/certifier-blocs-portes',
    },
    {
      label: 'Se protéger contre les cambriolages',
      publisher: 'Ministère de l’Intérieur',
      url: 'https://www.masecurite.interieur.gouv.fr/',
    },
  ],
};

export default article;
