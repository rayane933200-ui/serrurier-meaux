import type { Article } from './types';

const article: Article = {
  slug: 'ajouter-un-verrou-supplementaire',
  title: 'Ajouter un verrou : la demi-mesure qui a du sens',
  metaTitle: 'Ajouter un verrou de sécurité : est-ce utile ?',
  metaDescription:
    'Poser un second verrou sans blinder toute la porte : dans quels cas c’est efficace, où il doit être placé, et quand c’est une dépense inutile.',
  excerpt:
    'Entre ne rien faire et blinder la porte, il existe un entre-deux que peu de serruriers proposent spontanément : ajouter un point de verrouillage. Bien placé, il double le temps de résistance. Mal placé, il ne sert à rien.',
  publishedOn: '2026-10-21',
  targetServices: ['blindage-de-porte', 'changement-de-serrure'],
  sections: [
    {
      heading: 'Pourquoi un second point change les choses',
      body: [
        'Une porte à un seul point de verrouillage cède toujours au même endroit : à hauteur de serrure, là où le pêne entre dans la gâche. Un pied-de-biche glissé entre le vantail et le dormant concentre toute sa force sur ces quelques centimètres, et c’est le bois ou la gâche qui lâche en premier.',
        'Ajouter un verrou en haut ou en bas oblige à recommencer l’opération ailleurs, sur une porte déjà contrainte au premier point. Le temps nécessaire ne s’additionne pas simplement : il augmente plus vite, parce que la porte résiste désormais à la torsion en plus de la traction.',
        'Or le temps est précisément ce qui compte. Une effraction d’opportunité se décide devant la porte et renonce vite ; c’est sur ce calcul-là que joue tout l’équipement de sécurité.',
      ],
    },
    {
      heading: 'Où le poser, et pourquoi ça décide de tout',
      body: [
        'Un verrou supplémentaire mal placé ne fait rien d’autre que décorer la porte. Deux règles commandent son efficacité.',
      ],
      bullets: [
        '<strong>Loin de la serrure existante.</strong> Un verrou posé à vingt centimètres du point principal reste dans la même zone de contrainte : la porte cède sur les deux à la fois. Le gain vient de l’écartement — haut de porte ou bas de porte.',
        '<strong>Ancré dans du solide.</strong> Le pêne doit entrer dans une gâche fixée dans le dormant, pas dans le chambranle décoratif. C’est le point que les poses rapides négligent, et il annule tout le reste : une gâche vissée dans du bois tendre s’arrache avant que le verrou n’ait servi.',
      ],
    },
    {
      heading: 'Les cas où c’est le bon choix',
      body: [
        'Le verrou supplémentaire n’est pas un blindage au rabais : il a son domaine propre, et il y est souvent plus pertinent qu’une solution lourde.',
        'Il convient aux portes en bon état structurel, qu’on ne veut pas remplacer : un vantail épais et un dormant sain tiennent très bien, il leur manque seulement des points d’accroche. Il convient aux locataires, parce qu’il s’enlève et se répare sans modifier la porte en profondeur — sous réserve de prévenir le bailleur, comme l’explique notre article <a href="/blog/serrure-hlm-locataire-bailleur/">serrure en HLM</a>.',
        'Il convient enfin aux budgets contraints : c’est la marche intermédiaire entre ne rien faire et le <a href="/services/blindage-de-porte/">blindage de porte</a>, qui reprend l’ensemble vantail, serrure et encadrement.',
      ],
    },
    {
      heading: 'Les cas où c’est une dépense inutile',
      body: [
        'Autant le dire clairement : il y a des portes sur lesquelles nous déconseillons l’opération.',
      ],
      bullets: [
        '<strong>Le vantail est mince ou creux.</strong> Une porte alvéolaire cède en son milieu, et le nombre de verrous n’y change rien.',
        '<strong>Le dormant est fatigué.</strong> Si l’huisserie bouge ou si le bois est fendu, aucun ancrage ne tiendra. Il faut traiter le bâti avant.',
        '<strong>Vous avez déjà un multipoints.</strong> Trois points correctement ancrés rendent un quatrième verrou marginal — mieux vaut vérifier les gâches existantes, comme l’explique notre article <a href="/blog/serrure-multipoints-combien-de-points/">serrure multipoints</a>.',
        '<strong>Le cylindre est le maillon faible.</strong> Ajouter un verrou pendant que le barillet dépasse et se casse en quelques secondes revient à fermer une fenêtre en laissant la porte ouverte : voir notre article sur la <a href="/blog/poignee-blindee-protecteur-de-cylindre/">poignée blindée</a>.',
      ],
    },
    {
      heading: 'Verrou à bouton ou à clé',
      body: [
        'Deux options, et le choix n’est pas qu’une question de confort.',
        'Le verrou <strong>à clé des deux côtés</strong> empêche l’ouverture depuis l’intérieur par quelqu’un qui aurait passé la main — par une imposte, un panneau percé, un judas démonté. C’est le plus sûr.',
        'Le verrou <strong>à bouton intérieur</strong> s’actionne sans clé, ce qui compte pour sortir vite. Beaucoup de contrats d’assurance ou de règlements d’immeuble ont leur mot à dire sur cette question, et il vaut mieux la trancher avant la pose qu’après : notre page <a href="/assurance-habitation/">serrurier et assurance habitation</a> reprend les points à vérifier.',
      ],
    },
    {
      heading: 'Ce que nous regardons avant de proposer',
      body: [
        'L’examen se fait porte ouverte et prend quelques minutes : épaisseur et matière du vantail, état du dormant et du chambranle, jeu du vantail dans son cadre, position de la serrure existante, et ce que les gâches actuelles ont dans le ventre.',
        'C’est de là que sort la recommandation, et elle n’est pas toujours celle qu’on attend : il arrive que la bonne réponse soit de reprendre l’ancrage existant plutôt que d’ajouter une pièce. Le devis est gratuit et établi avant travaux — le fonctionnement est détaillé sur notre page <a href="/tarifs/">tarifs</a>.',
      ],
    },
  ],
  takeaway:
    'Un verrou n’apporte quelque chose que s’il est loin de la serrure existante et ancré dans le dormant, pas dans le chambranle. Avant de l’envisager, vérifiez deux choses : que votre porte et son bâti tiennent, et que votre cylindre n’est pas déjà le point faible — sinon vous payez un renfort qui ne protège rien.',
};

export default article;
