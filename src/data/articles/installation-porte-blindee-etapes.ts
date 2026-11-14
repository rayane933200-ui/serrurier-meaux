import type { Article } from './types';
// Même cliché et même légende que sur la page de zone et la page
// d'installation : une photo ne se décrit pas de deux façons. Aucun lieu n'est
// nommé, la commune du chantier n'étant pas établie (voir CLAUDE.md).
import illustration from '../../assets/photos/interventions/porte-blindee-posee.jpg';

const article: Article = {
  slug: 'installation-porte-blindee-etapes',
  image: {
    src: illustration,
    alt: 'Porte blindée posée, vue depuis le palier',
    credit: 'Porte blindée posée, vue depuis le palier. Photo prise lors d’une de nos interventions.',
  },
  title: 'Installation d’une porte blindée : le déroulement, du relevé à la remise des clés',
  metaTitle: 'Installation d’une porte blindée : les étapes de la pose',
  metaDescription:
    'Relevé sur place, choix du grade, fabrication, jour de la pose, réglages et documents remis : comment se déroule l’installation d’une porte blindée.',
  excerpt:
    'Une porte blindée ne se pose pas comme on change une serrure. Elle se mesure, se commande, puis s’ancre dans le mur. Voici chaque étape dans l’ordre, ce qui se décide à chacune, et les vérifications que vous pouvez faire vous-même avant de signer la fin de chantier.',
  publishedOn: '2026-11-14',
  targetServices: ['blindage-de-porte'],
  sections: [
    {
      heading: 'Ce qu’on installe : un bloc-porte, pas seulement une porte',
      body: [
        'Le mot « porte blindée » désigne en réalité un <strong>bloc-porte</strong> : le vantail, son bâti métallique, les paumelles, la serrure et le cylindre, conçus et éprouvés ensemble. Le CNPP, qui délivre la certification A2P, parle d’« ensembles complets et indissociables ». C’est ce qui distingue cet ouvrage d’un blindage, où l’on renforce une porte que l’on conserve.',
        'La conséquence est pratique : installer une porte blindée, c’est aussi installer un bâti. La résistance de l’ensemble dépend autant de la façon dont ce bâti est ancré dans le mur que de l’épaisseur du vantail. Une excellente porte mal fixée cède par ses fixations, et aucun certificat ne rattrape cela.',
        'Si vous hésitez encore entre remplacer la porte et renforcer l’existante, commencez par notre article <a href="/blog/porte-blindee-ou-blindage-de-porte/">porte blindée ou blindage de la porte existante : comment choisir</a>. La suite suppose que le choix du bloc-porte est fait.',
      ],
    },
    {
      heading: 'Le relevé sur place : ce qui se mesure, et pourquoi pas au téléphone',
      body: [
        'Un bloc-porte est fabriqué aux cotes de l’ouverture qui va le recevoir. Le relevé n’est donc pas une formalité commerciale : c’est le plan de fabrication. Une erreur d’un centimètre se paie le jour de la pose, quand la porte est déjà livrée.',
      ],
      bullets: [
        '<strong>Les dimensions du passage</strong>, prises en plusieurs points en largeur comme en hauteur : une ouverture ancienne est rarement un rectangle parfait.',
        '<strong>L’aplomb et l’équerrage</strong> des tableaux et du linteau, qui décident du calage nécessaire.',
        '<strong>La nature du mur</strong> — béton, brique, pierre, cloison — parce que les fixations ne sont pas les mêmes et ne tiennent pas de la même façon.',
        '<strong>L’ancien bâti</strong> : bois ou métal, scellé ou vissé, sain ou fatigué. C’est lui qui dit si on le dépose ou si on pose par-dessus.',
        '<strong>Le sens d’ouverture</strong>, le seuil et le niveau du sol fini, à l’intérieur comme sur le palier.',
        '<strong>Les accès</strong> : largeur de l’escalier, dimensions de l’ascenseur, étage. Un vantail blindé peut approcher la centaine de kilos et ne se plie pas.',
        '<strong>Les contraintes de l’immeuble</strong> : teinte et aspect imposés côté palier, exigence de résistance au feu.',
      ],
    },
    {
      heading: 'Ce qui se décide avant la commande',
      body: [
        'Le relevé fait, trois décisions restent à prendre, et elles figurent toutes sur le devis.',
        '<strong>Le grade.</strong> La certification A2P classe les blocs-portes en BP1, BP2 et BP3, pour cinq, dix et quinze minutes de résistance à des essais d’effraction en laboratoire, menés avec un outillage de plus en plus lourd. Ce sont des temps de laboratoire : le CNPP précise qu’ils ne tiennent pas compte des conditions réelles d’un cambriolage, le bruit en particulier. Avant de choisir, relisez la clause vol de votre contrat : certains assureurs exigent un niveau précis, et c’est elle qui fixe le bon investissement — voir notre page <a href="/assurance-habitation/">assurance habitation</a> et nos repères sur la <a href="/marques-de-serrures/">certification A2P</a>.',
        '<strong>La face visible.</strong> Teinte, panneau lisse ou mouluré, poignée, judas : en immeuble, c’est souvent le règlement de copropriété qui tranche, pas le catalogue. Les autorisations à demander sont détaillées dans notre article <a href="/blog/porte-blindee-copropriete-location-autorisations/">porte blindée en copropriété ou en location</a> — à régler avant de commander, pas après.',
        '<strong>Les clés.</strong> Leur nombre, et la carte de propriété quand le cylindre en comporte une : sans elle, aucune copie n’est délivrée. Comptez dès maintenant les personnes qui auront besoin d’une clé, une reproduction ultérieure prend du temps.',
        'Une fois le devis signé, la porte est mise en fabrication. Le délai dépend du fabricant et du modèle ; il se compte en semaines et il est écrit sur le devis. Une porte blindée posée le lendemain d’un appel n’a pas été mesurée pour votre ouverture.',
      ],
    },
    {
      heading: 'Le jour de la pose, dans l’ordre',
      body: [
        'Une pose courante tient le plus souvent dans la journée. Elle est bruyante par moments — perçage dans la maçonnerie — et elle laisse le logement ouvert le temps du remplacement : prévenez vos voisins de palier et le gardien, et prévoyez d’être présent.',
      ],
      bullets: [
        '<strong>1. Protection</strong> du sol de l’entrée et du palier.',
        '<strong>2. Dépose</strong> de l’ancien vantail, puis de l’ancien bâti s’il ne doit pas être conservé.',
        '<strong>3. Présentation du nouveau bâti</strong> dans l’ouverture, calage, contrôle de l’aplomb et du niveau.',
        '<strong>4. Fixation dans le mur</strong>, selon les points et le matériel prévus par le fabricant.',
        '<strong>5. Accrochage du vantail</strong> et réglage des paumelles.',
        '<strong>6. Serrure et cylindre</strong> : montage, réglage des gâches, essais de verrouillage porte ouverte puis porte fermée.',
        '<strong>7. Finitions</strong> : joints, seuil, habillages qui raccordent le bâti au mur.',
        '<strong>8. Nettoyage</strong> et évacuation de l’ancienne porte.',
      ],
    },
    {
      heading: 'Deux façons d’ancrer le bâti',
      body: [
        'C’est le point technique qui change le plus un chantier, et il se décide au relevé.',
        '<strong>La dépose complète.</strong> L’ancien dormant est retiré et le nouveau bâti se fixe directement dans la maçonnerie. On repart d’un support connu, et le passage conserve toute sa largeur. En contrepartie, il y a davantage de poussière et des raccords à reprendre autour de l’ouverture.',
        '<strong>La pose sur le bâti existant.</strong> Quand l’ancien bâti est métallique, scellé dans le mur et en bon état, le nouveau peut venir le recouvrir. Le chantier est plus court et plus propre, mais le passage perd quelques centimètres, et tout repose sur l’état réel de ce qui est conservé : un bâti qui a du jeu ou qui a été forcé ne se recouvre pas, il se remplace.',
        'Demandez laquelle des deux est prévue, et pourquoi. Un devis qui ne le précise pas laisse la question se régler le jour même, devant une ouverture béante.',
      ],
    },
    {
      heading: 'Les vérifications à faire avant de signer la fin de chantier',
      body: [
        'Vous n’avez pas besoin d’être du métier pour juger une pose. Ces contrôles prennent cinq minutes, et un professionnel sérieux les fait devant vous.',
      ],
      bullets: [
        '<strong>La porte se ferme sans effort.</strong> Poussée du bout des doigts, elle vient en butée et le pêne s’engage. S’il faut l’épaule, le réglage n’est pas terminé.',
        '<strong>Le jeu est régulier</strong> sur tout le pourtour, sans frottement ni jour visible.',
        '<strong>La clé tourne de la même façon</strong> porte ouverte et porte fermée. Si elle force porte fermée, les pênes frottent dans leurs gâches.',
        '<strong>Aucune vis n’est accessible depuis le palier</strong> sur la poignée ou le protecteur de cylindre — c’est le sujet de notre article sur la <a href="/blog/poignee-blindee-protecteur-de-cylindre/">poignée blindée</a>.',
        '<strong>Le cylindre ne dépasse pas</strong> de sa protection.',
        '<strong>Le bâti ne bouge pas</strong> quand on claque la porte, et les habillages sont en place.',
      ],
    },
    {
      heading: 'Ce qui doit vous être remis',
      body: [
        'Une porte blindée s’accompagne de papiers, et ils comptent autant que la quincaillerie : ce sont eux que votre assureur demandera après un sinistre, et ceux qu’un acquéreur voudra voir le jour où vous vendrez.',
      ],
      bullets: [
        '<strong>La facture détaillée</strong>, qui sépare la fourniture de la pose et nomme le modèle posé.',
        '<strong>La référence et le grade A2P</strong> du bloc-porte, lisibles aussi sur la porte elle-même.',
        '<strong>Les clés</strong>, au nombre convenu, et la carte de propriété quand le modèle en comporte une.',
        '<strong>La notice du fabricant</strong> et ses conditions d’entretien.',
        '<strong>Le document de classement au feu</strong> si votre immeuble l’exige : c’est celui que le syndic réclame.',
        '<strong>L’attestation d’assurance décennale</strong> de l’entreprise, remise sur simple demande.',
      ],
    },
    {
      heading: 'À Meaux et en Île-de-France : étage, accès, immeuble',
      body: [
        'La pose d’une porte blindée est un chantier planifié, pas une urgence. Nous l’assurons sur rendez-vous à Meaux et dans toute l’Île-de-France ; les conditions sont décrites sur la page <a href="/installation-serrure-porte-paris/">installation de serrure et de porte à Paris et en Île-de-France</a>. Le prix d’une porte n’y est pas affiché, et ce n’est pas un oubli : il dépend du modèle, du grade et de l’état du mur, et un chiffre donné sans avoir vu l’ouverture serait soit faux, soit un prix d’appel.',
        'Deux configurations reviennent à Meaux. Dans les grands ensembles comme Beauval, les étages sont élevés et les halls sous digicode : le numéro de bâtiment, la cage d’escalier, l’étage et les dimensions de l’ascenseur se donnent dès le premier appel, parce que c’est par là que la porte montera. Dans le centre ancien, autour de la cathédrale, les accès par cour et les ouvertures qui ne sont plus d’équerre demandent un relevé plus long — et parfois de vérifier en mairie ce qui est permis côté rue.',
        'Chaque secteur a sa page, par exemple <a href="/zones/serrurier-meaux-beauval/">serrurier à Beauval</a> ou <a href="/zones/serrurier-meaux-centre/">serrurier à Meaux Centre</a>. Pour un renforcement sans remplacement de la porte, voyez le <a href="/services/blindage-de-porte/">blindage de porte</a>.',
      ],
    },
  ],
  takeaway:
    'Une porte blindée se juge en trois moments : le relevé, qui doit se faire sur place ; le devis, qui doit nommer le modèle, le grade et la façon d’ancrer le bâti ; et la fin de pose, où la porte doit se fermer du bout des doigts. Si l’un des trois manque, posez la question avant de signer.',
  sources: [
    {
      label: 'Blocs-portes — certification A2P',
      publisher: 'CNPP',
      url: 'https://www.cnpp.com/tester-certifier/certification-a2p/certifier-blocs-portes',
    },
    {
      label:
        'Plomberie, serrurerie, chauffage… choisir le bon professionnel pour un dépannage à domicile',
      publisher: 'DGCCRF',
      url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/plomberie-serrurerie-chauffage-choisir-le-bon-professionnel-pour-un-depannage-domicile',
    },
  ],
};

export default article;
