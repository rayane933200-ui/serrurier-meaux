import type { Article } from './types';

const article: Article = {
  slug: 'serrure-grippee-que-faire',
  title: 'Serrure grippée : pourquoi le dégrippant aggrave presque toujours',
  metaTitle: 'Serrure grippée : le bon geste, et le mauvais',
  metaDescription:
    'Serrure dure ou bloquée : d’où vient le grippage, pourquoi le dégrippant en aérosol empire les choses, et le seul lubrifiant adapté à un cylindre.',
  excerpt:
    'La clé force, accroche, finit par passer — jusqu’au jour où elle ne passe plus. Le réflexe est d’attraper une bombe de dégrippant. C’est le geste qui transforme une serrure fatiguée en serrure morte, et voici pourquoi.',
  publishedOn: '2026-10-21',
  targetServices: ['depannage-serrurerie', 'changement-de-serrure'],
  sections: [
    {
      heading: 'Ce qui se passe à l’intérieur',
      body: [
        'Un cylindre européen contient une rangée de goupilles — de petites tiges métalliques montées sur ressort, qui se positionnent à la hauteur exacte dessinée par votre clé. Quand toutes s’alignent, le barillet peut tourner. Les tolérances se comptent en dixièmes de millimètre.',
        'Un grippage, c’est ce jeu qui se réduit. Trois causes principales : la poussière et les fibres accumulées qui empâtent les logements, l’oxydation sur une porte exposée à l’humidité, et l’usure de la clé elle-même — une clé usée ne présente plus tout à fait le bon profil, et force là où elle glissait.',
        'Un quatrième cas, plus insidieux, est le résidu de lubrifiant. Ce qui nous amène au geste à ne pas faire.',
      ],
    },
    {
      heading: 'Pourquoi le dégrippant en aérosol est une fausse bonne idée',
      body: [
        'Les dégrippants classiques sont conçus pour décoincer des pièces grasses et massives — un écrou rouillé, une charnière de portail. Ils contiennent des huiles, et c’est exactement ce dont un cylindre n’a pas besoin.',
        'L’huile fonctionne les premiers jours : la clé tourne mieux, on croit le problème réglé. Puis elle capte la poussière, les fibres de poche, les microparticules métalliques de l’usure. Au bout de quelques semaines, ce mélange forme une pâte qui bloque les goupilles bien plus sûrement que la saleté d’origine.',
        'Le résultat est connu de tous les serruriers : une serrure dégrippée à l’huile revient en panne, et cette fois le nettoyage ne suffit plus. La pièce se remplace.',
      ],
    },
    {
      heading: 'Le seul lubrifiant adapté',
      body: [
        'Un cylindre se lubrifie à sec. Les produits adaptés déposent un film sans corps gras — les lubrifiants au graphite, longtemps la référence, et les produits à base de téflon ou de silicone en spray fin, aujourd’hui plus courants.',
        'La méthode compte autant que le produit : une impulsion brève dans l’entrée de clé, pas une inondation. Puis on introduit la clé et on l’actionne une dizaine de fois sans forcer, pour répartir. L’excédent qui ressort s’essuie.',
        'Et surtout : c’est un entretien, pas une réparation. Si la serrure force depuis des mois, le produit ne rattrapera pas une usure mécanique.',
      ],
    },
    {
      heading: 'Vérifiez d’abord que c’est bien la serrure',
      body: [
        'Avant d’incriminer le cylindre, deux contrôles valent la peine, parce qu’ils renvoient vers des causes tout à fait différentes.',
      ],
      bullets: [
        '<strong>Testez porte ouverte.</strong> Si la clé tourne parfaitement porte ouverte et force porte fermée, la serrure va bien : c’est l’alignement de la porte qui a bougé. C’est le sujet de notre article <a href="/blog/porte-qui-ferme-mal-reglage/">porte qui ferme mal</a>.',
        '<strong>Essayez un autre exemplaire de la clé.</strong> Si le double neuf passe là où votre clé quotidienne accroche, c’est la clé qui est usée, pas la serrure. Une clé se refait pour une somme sans commune mesure avec un cylindre.',
      ],
    },
    {
      heading: 'Les trois gestes à ne pas faire',
      body: [
        'Chacun transforme une intervention simple en remplacement.',
      ],
      bullets: [
        '<strong>Forcer avec une pince ou un levier sur la clé.</strong> C’est ainsi qu’on casse une clé dans le cylindre, et l’extraction devient une intervention à part entière — voir notre article <a href="/blog/cle-cassee-dans-la-serrure/">clé cassée dans la serrure</a>.',
        '<strong>Injecter de l’huile, du dégrippant ou de la graisse.</strong> Pour les raisons ci-dessus.',
        '<strong>Introduire un objet pour « nettoyer ».</strong> Un fil de fer ou un tournevis déplace les goupilles et peut les marquer définitivement.',
      ],
    },
    {
      heading: 'Quand appeler, et ce qu’on fait',
      body: [
        'Une serrure qui force encore, mais qui fonctionne, relève de l’entretien : vous avez le temps, et un passage en journée coûte moins cher qu’une urgence de nuit. Une serrure qui ne tourne plus du tout, porte fermée, est une urgence au sens plein.',
        'Sur place, le diagnostic distingue ce qui se nettoie de ce qui se remplace. Un cylindre encrassé mais sain se démonte et se nettoie ; un cylindre dont les goupilles sont marquées ou dont le barillet a du jeu se remplace, et l’article <a href="/blog/cylindre-ou-serrure-complete/">cylindre ou serrure complète</a> explique pourquoi le mécanisme entier est rarement en cause.',
        'Nos interventions démarrent à 69 €, déplacement et première heure compris, avec un tarif annoncé par téléphone avant tout déplacement : le détail figure sur notre page <a href="/tarifs/">tarifs</a>, et notre <a href="/services/depannage-serrurerie/">dépannage de serrurerie</a> décrit le reste.',
      ],
    },
  ],
  takeaway:
    'Une serrure se lubrifie à sec, jamais à l’huile : le dégrippant soulage une semaine puis colle la poussière et achève le cylindre. Avant tout, testez porte ouverte et avec un autre exemplaire de la clé — vous saurez en trente secondes si le problème vient de la serrure, de la porte ou de la clé.',
};

export default article;
