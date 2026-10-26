import type { Article } from './types';

const article: Article = {
  slug: 'quelle-panne-de-serrure-avez-vous',
  title: 'Quelle panne de serrure avez-vous ? Le diagnostic en six symptômes',
  metaTitle: 'Panne de serrure : identifier la vôtre en 2 min',
  metaDescription:
    'Six symptômes, six causes différentes : identifiez votre panne de serrure avant d’appeler, pour savoir si c’est urgent et ce que ça va coûter.',
  excerpt:
    'Clé qui force, qui tourne dans le vide, porte qui ne verrouille plus : six symptômes courants, six causes sans rapport entre elles. Deux minutes d’observation vous diront laquelle vous concerne, si c’est urgent, et ce qu’on va remplacer.',
  publishedOn: '2026-10-21',
  targetServices: ['depannage-serrurerie', 'serrurier-urgence'],
  sections: [
    {
      heading: 'Pourquoi ce tri vaut la peine',
      body: [
        'Toutes les pannes de serrure se ressemblent vues du palier : ça ne marche plus. Vues de l’intérieur du mécanisme, elles n’ont presque rien en commun — et elles n’appellent ni la même urgence, ni la même pièce, ni le même budget.',
        'Savoir laquelle vous concerne vous sert à trois choses. Juger si ça peut attendre demain matin, ce qui change le tarif. Décrire précisément la situation au téléphone, ce qui permet qu’on vous annonce un prix qu’on tiendra. Et repérer vous-même les cas où vous n’avez besoin de personne.',
        'Avant tout, faites le test qui sert à presque tout : <strong>porte grande ouverte, actionnez la clé à fond dans les deux sens, puis la poignée</strong>. Vous observez le mécanisme seul, libéré du dormant et de la gâche. Retenez le résultat, il revient dans la moitié des cas ci-dessous.',
      ],
    },
    {
      heading: '1. La clé tourne, mais rien ne bouge',
      body: [
        'Aucune résistance, la clé fait un tour complet comme dans du vide, aucun bruit de pêne. La liaison entre le cylindre et le mécanisme a cédé — une petite pièce, pas la serrure entière.',
        'L’urgence dépend d’une seule chose : la porte était-elle verrouillée au moment de la panne ? Si oui, elle ne s’ouvrira pas et c’est une urgence. Si non, vous entrez et sortez, mais le logement n’est plus sécurisé. Le détail figure dans notre article <a href="/blog/cle-tourne-dans-le-vide/">la clé tourne dans le vide</a>.',
      ],
    },
    {
      heading: '2. La clé force, accroche, finit par passer',
      body: [
        'C’est l’inverse du précédent : vous sentez un point dur. Si le test porte ouverte est bon — les pênes sortent franchement —, le problème n’est pas la serrure.',
        'Si la clé force aussi porte ouverte, c’est un grippage. Essayez un autre exemplaire de la clé avant toute chose : une clé usée accroche là où un double neuf passe. Et surtout, n’attrapez pas la bombe de dégrippant, pour les raisons détaillées dans <a href="/blog/serrure-grippee-que-faire/">serrure grippée : le bon geste</a>.',
      ],
    },
    {
      heading: '3. Il faut pousser ou soulever pour verrouiller',
      body: [
        'La clé ne tourne qu’en pesant de l’épaule sur la porte, ou en soulevant la poignée. Le mécanisme va bien — c’est la géométrie qui a bougé : paumelles affaissées, bois qui a travaillé, gâche déplacée, dormant qui a tassé.',
        'Ce n’est pas une urgence, mais ce n’est pas anodin non plus : à force de devoir forcer, beaucoup cessent de verrouiller et se contentent de claquer. Les quatre causes et le test qui les distingue sont dans <a href="/blog/porte-qui-ferme-mal-reglage/">porte qui ferme mal</a>.',
      ],
    },
    {
      heading: '4. La clé est cassée dans la serrure',
      body: [
        'Un fragment est resté dans le cylindre. Ne tentez rien avec une pince à épiler ou une colle : la première pousse le morceau plus loin, la seconde solidarise le fragment aux goupilles et condamne le cylindre.',
        'Le reste de la clé, s’il vous en reste un bout, est à conserver : il aide à l’extraction et permet parfois de refaire un double. La marche à suivre est dans <a href="/blog/cle-cassee-dans-la-serrure/">clé cassée dans la serrure</a>.',
      ],
    },
    {
      heading: '5. Vous êtes dehors, les clés sont dedans',
      body: [
        'Ce n’est pas une panne : la serrure fonctionne parfaitement, c’est vous qui n’avez pas la clé. La distinction compte, parce qu’elle change complètement la technique et le prix.',
        'Avant d’appeler, trois minutes de vérifications évitent parfois l’intervention entière : un double chez un proche, la loge du gardien, le syndic ou votre bailleur. Et surtout, déterminez si la porte est <strong>claquée ou fermée à clé</strong> — c’est l’information qui décide de tout, et <a href="/blog/porte-claquee-que-faire/">porte claquée : que faire</a> explique comment la reconnaître.',
      ],
    },
    {
      heading: '6. Vous avez perdu vos clés',
      body: [
        'Deux questions distinctes se posent, et la seconde coûte plus cher à négliger : comment rentrer ce soir, et qui pourrait entrer demain.',
        'Tant que personne ne peut relier ce trousseau à votre adresse, il ne vaut rien. Dès qu’un porte-clés gravé, des papiers ou un téléphone permettaient de faire le lien, le cylindre doit changer. Le raisonnement complet est dans <a href="/blog/cle-perdue-changer-la-serrure/">clé perdue : évaluer le risque</a>.',
      ],
    },
    {
      heading: 'Ce que ces six cas ont en commun',
      body: [
        'Dans cinq sur six, la pièce en cause est le cylindre, pas la serrure. C’est une bonne nouvelle : c’est la pièce la moins chère, celle qui se remplace le plus vite, et celle dont dépend le moins le reste de la porte. Notre article <a href="/blog/cylindre-ou-serrure-complete/">cylindre ou serrure complète</a> explique comment trancher.',
        'Le second point commun est plus désagréable : dans une part importante des interventions où le remplacement s’impose, la serrure était encore récupérable avant qu’on y touche. Tournevis dans le cylindre, clé forcée, carte glissée, coup d’épaule — chacun de ces gestes transforme une réparation en remplacement.',
        'Enfin, ce que vous direz au téléphone commande le tarif qu’on peut vous annoncer. Préparez quatre éléments : l’état de la fermeture, le symptôme exact parmi les six ci-dessus, le nombre de points visibles sur le chant, et la marque gravée si elle est lisible. Nos interventions démarrent à 69 €, déplacement et première heure compris, et le détail figure sur notre page <a href="/tarifs/">tarifs</a>.',
      ],
    },
  ],
  takeaway:
    'Commencez toujours par le test porte ouverte : si les pênes sortent franchement, la serrure va bien et le problème est ailleurs. Puis identifiez votre symptôme parmi les six — cinq fois sur six, c’est le cylindre qui est en cause, et dans presque tous les cas, ne rien tenter vous coûtera moins cher que d’essayer.',
};

export default article;
