import type { Article } from './types';
// Même cliché et même légende que sur la page de zone : une photo ne se décrit
// pas de deux façons. Aucun lieu n'est nommé (voir CLAUDE.md).
import illustration from '../../assets/photos/interventions/porte-de-palier-haut-escalier.jpg';

// Chaque règle de cet article a été relue à sa source le 14 novembre 2026 :
// fiches F1107, F1874 et F17578 de Service-Public, article 8 de l'arrêté du
// 31 janvier 1986. Deux points à ne pas « arrondir » en le retouchant :
//
//   - le délai de deux mois au terme duquel le silence du bailleur vaut accord
//     ne concerne QUE les travaux d'adaptation au handicap et de rénovation
//     énergétique. Il ne s'applique pas à une porte ;
//   - l'article ne dit pas qu'une porte palière relève de « l'aspect extérieur
//     de l'immeuble » au sens de la loi de 1965 : cette expression vise les
//     façades. Sur un palier, ce sont les fixations dans le mur commun et le
//     règlement de copropriété qui jouent.
const article: Article = {
  slug: 'porte-blindee-copropriete-location-autorisations',
  image: {
    src: illustration,
    alt: 'Porte de palier en haut d’une cage d’escalier',
    credit:
      'Porte de palier en haut d’une cage d’escalier. Photo prise lors d’une de nos interventions.',
  },
  title: 'Porte blindée en copropriété ou en location : quelles autorisations demander',
  metaTitle: 'Porte blindée en copropriété : faut-il une autorisation ?',
  metaDescription:
    'Copropriétaire, locataire ou propriétaire d’une maison : qui doit donner son accord avant la pose d’une porte blindée, comment le demander, et le risque sans.',
  excerpt:
    'La porte vous appartient, mais le mur dans lequel elle est fixée et le palier sur lequel elle donne ne sont pas à vous seul. Avant de commander une porte blindée, trois accords peuvent être nécessaires. Voici lesquels, dans quel cas, et comment les obtenir sans perdre trois mois.',
  publishedOn: '2026-11-14',
  targetServices: ['blindage-de-porte'],
  sections: [
    {
      heading: 'Une porte palière a deux faces, et deux régimes',
      body: [
        'Dans la plupart des immeubles, la porte d’entrée d’un appartement est une partie privative : elle appartient au copropriétaire, qui l’entretient et la remplace à ses frais. C’est le règlement de copropriété qui le dit, et c’est lui qu’il faut ouvrir en premier.',
        'Mais cette porte donne sur un palier, qui est une partie commune, et son bâti est ancré dans un mur qui l’est le plus souvent aussi. Deux choses échappent donc à votre seule décision : ce que l’on voit depuis le palier, que beaucoup de règlements encadrent au nom de l’harmonie de l’immeuble, et ce que l’on fait au mur pour y fixer un nouveau bâti.',
        'C’est pour cela que changer un cylindre ne demande rien à personne, alors que remplacer la porte entière se prépare.',
      ],
    },
    {
      heading: 'En copropriété : quand l’assemblée générale doit voter',
      body: [
        'La règle est celle de la loi du 10 juillet 1965. Un copropriétaire fait librement des travaux à l’intérieur de son lot. En revanche, dès que ces travaux affectent les parties communes, une autorisation de l’assemblée générale est obligatoire, et elle doit être obtenue <strong>avant</strong> le début du chantier.',
        'Cette autorisation se vote à la majorité absolue, dite majorité de l’article 25 : la majorité des voix de tous les copropriétaires de l’immeuble, qu’ils soient présents, représentés ou absents. Ni le syndic ni le conseil syndical ne peuvent la donner à la place de l’assemblée.',
        'Une porte blindée est concernée à deux titres possibles. Son bâti se fixe dans le mur du palier, et sa face visible peut déroger à ce que le règlement impose : teinte, moulures, poignée. Si l’un des deux joue, il faut le vote. Dans le doute, posez la question au syndic par écrit avant de commander : une réponse écrite vaut mieux qu’une certitude.',
      ],
    },
    {
      heading: 'Comment présenter la demande',
      body: [
        'Deux voies existent. La plus simple consiste à demander au syndic, par lettre recommandée avec accusé de réception, d’inscrire votre demande à l’ordre du jour de la prochaine assemblée générale annuelle. Si vous ne pouvez pas attendre, vous pouvez demander la convocation d’une assemblée consacrée à cette seule question — mais vous en supportez alors tous les frais.',
        'Un dossier clair se vote vite. Joignez-y de quoi répondre aux questions avant qu’elles soient posées.',
      ],
      bullets: [
        '<strong>La fiche technique</strong> du modèle retenu, avec son grade.',
        '<strong>Un visuel de la face palière</strong> : teinte, panneau, poignée, à comparer aux portes voisines.',
        '<strong>Le mode de pose</strong> : bâti existant conservé ou déposé, type de fixation dans le mur.',
        '<strong>Le classement au feu</strong> du bloc-porte.',
        '<strong>L’attestation d’assurance</strong> de l’entreprise qui pose.',
      ],
    },
    {
      heading: 'Sans autorisation : ce que vous risquez',
      body: [
        'Des travaux qui touchent aux parties communes sans vote sont irréguliers. Le syndicat des copropriétaires peut exiger leur arrêt, puis la remise en état — y compris devant le juge, et à vos frais. Une porte blindée déposée sur décision de justice, c’est le prix de la porte, celui de la pose, celui de la dépose et celui d’une nouvelle porte conforme.',
        'Le problème ne se manifeste pas toujours tout de suite. Il suffit qu’un copropriétaire s’y oppose, et il ressort souvent au pire moment : lors d’une vente, quand l’acquéreur demande les autorisations.',
      ],
    },
    {
      heading: 'La résistance au feu : la question que le syndic posera',
      body: [
        'Une porte palière ne sert pas qu’à fermer un logement. Elle retarde le passage des flammes vers la cage d’escalier, qui est le chemin par lequel tout l’immeuble évacue.',
        'La réglementation de construction des immeubles d’habitation — l’arrêté du 31 janvier 1986, à son article 8 — impose aux portes palières des logements un degré pare-flammes : un quart d’heure dans les immeubles collectifs courants, une demi-heure dans les plus hauts, ceux dont le dernier logement se situe à plus de vingt-huit mètres du sol.',
        'Un bloc-porte de remplacement ne doit pas faire moins bien que la porte qu’il remplace. La réponse tient en un document : le procès-verbal de classement au feu du modèle. Demandez-le avant de signer le devis, et joignez-le à votre dossier — c’est souvent lui qui emporte le vote.',
      ],
    },
    {
      heading: 'Locataire : il faut l’accord écrit du propriétaire',
      body: [
        'La loi du 6 juillet 1989 distingue deux choses. Le locataire aménage librement son logement : peindre, poser une moquette. Il ne peut pas en revanche transformer les lieux ou leurs équipements sans l’<strong>accord écrit</strong> du propriétaire. Remplacer la porte d’entrée, qui appartient au bailleur, est une transformation.',
        'Sans cet accord, le propriétaire a le choix à votre départ : conserver la porte sans vous rembourser quoi que ce soit, ou exiger la remise en état à vos frais. Vous auriez donc payé une porte blindée pour la lui laisser, ou pour la faire démonter.',
        'Un piège à connaître : le silence du propriétaire ne vaut pas accord. La règle des deux mois sans réponse qui vaut acceptation existe, mais elle ne concerne que les travaux d’adaptation au handicap et de rénovation énergétique. Pour une porte, il vous faut une réponse écrite.',
        'En pratique, la demande se fait par lettre recommandée, devis à l’appui. Beaucoup de bailleurs acceptent — la porte restera dans leur bien — et certains participent au coût : cela se négocie avant, pas après. Si le logement est en copropriété, c’est ensuite au propriétaire, et non à vous, de demander le vote de l’assemblée générale. En logement social, la démarche passe par le bailleur ; voir notre article <a href="/blog/serrure-hlm-locataire-bailleur/">serrure en HLM : locataire ou bailleur</a>.',
      ],
    },
    {
      heading: 'Maison individuelle : pensez à la mairie',
      body: [
        'Pas de syndic, pas de vote. Mais une porte d’entrée visible depuis la rue fait partie de l’aspect extérieur de la maison, et le modifier peut relever d’une déclaration préalable de travaux, à déposer en mairie. C’est d’autant plus vrai en secteur protégé, aux abords d’un monument historique, où le projet est examiné de plus près.',
        'Un appel au service urbanisme, avec une photo de la porte actuelle et le visuel de la nouvelle, règle la question en quelques minutes. Si la maison est en lotissement, relisez aussi le cahier des charges : certains imposent une teinte ou un modèle.',
      ],
    },
    {
      heading: 'Ce qui ne demande aucune autorisation',
      body: [
        'Tout ne passe pas par un vote, et il serait dommage d’attendre une assemblée générale pour un travail qui n’en a pas besoin.',
      ],
      bullets: [
        '<strong>Changer le cylindre ou la serrure à l’identique.</strong> C’est de l’entretien courant, que vous soyez propriétaire ou locataire — à condition, pour le locataire, de rendre le logement avec une serrure en état et ses clés.',
        '<strong>Remplacer un cylindre qui dépasse</strong> par un modèle à la bonne longueur, ou par un cylindre de meilleure qualité.',
        '<strong>Ajouter un verrou</strong> côté intérieur — voir <a href="/blog/ajouter-un-verrou-supplementaire/">ajouter un verrou supplémentaire</a>.',
        '<strong>Un blindage posé côté intérieur</strong>, qui ne change pas la face palière, soulève généralement moins de difficultés qu’un remplacement complet. Vérifiez tout de même le règlement : c’est la différence détaillée dans notre article <a href="/blog/porte-blindee-ou-blindage-de-porte/">porte blindée ou blindage de la porte existante</a>.',
      ],
    },
    {
      heading: 'À Meaux : immeubles, copropriétés et centre ancien',
      body: [
        'Meaux réunit les trois cas. Dans les grands ensembles et les quartiers remodelés par la rénovation urbaine, copropriétés et logements loués par un bailleur se côtoient : la première question est de savoir qui est propriétaire de la porte, et la réponse décide de toute la suite. Dans le centre, la cathédrale Saint-Étienne est un monument historique et ses abords sont protégés : une porte qui donne sur la rue se vérifie en mairie avant d’être commandée.',
        'Nous signalons ces points avant de chiffrer plutôt qu’après la pose, et le devis détaillé nomme le modèle prévu : c’est la pièce que le syndic ou le bailleur demandera. Le déroulement du chantier lui-même est décrit dans notre article <a href="/blog/installation-porte-blindee-etapes/">installation d’une porte blindée : le déroulement</a>, la prestation sur la page <a href="/services/blindage-de-porte/">blindage de porte à Meaux</a>, et la pose planifiée en Île-de-France sur la page <a href="/installation-serrure-porte-paris/">installation de serrure et de porte</a>.',
      ],
    },
  ],
  takeaway:
    'Avant de commander, ouvrez le règlement de copropriété et écrivez au syndic : si le bâti touche au mur commun ou si la face palière change, il faut un vote de l’assemblée générale, obtenu avant la pose. Locataire, il vous faut l’accord écrit du propriétaire — son silence ne suffit pas.',
  sources: [
    {
      label: 'Copropriété : travaux et aménagements dans l’appartement du propriétaire occupant',
      publisher: 'Service-Public.gouv.fr',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1107',
    },
    {
      label: 'Utilisation du logement et travaux par le locataire',
      publisher: 'Service-Public.gouv.fr',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1874',
    },
    {
      label:
        'Arrêté du 31 janvier 1986 relatif à la protection contre l’incendie des bâtiments d’habitation',
      publisher: 'Légifrance',
      url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000474032/',
    },
    {
      label: 'Déclaration préalable (DP)',
      publisher: 'Service-Public.gouv.fr',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F17578',
    },
  ],
};

export default article;
