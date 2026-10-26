import type { Article } from './types';

// Article de prix : les montants publiables sont ceux de src/data/site.ts (pricing).
// Toute autre valeur reste en [À CONFIRMER] tant que la grille détaillée
// n’a pas été communiquée (voir la page /tarifs/, arrêté du 24 janvier 2017).

const article: Article = {
  slug: 'prix-ouverture-de-porte',
  title: 'Combien coûte une ouverture de porte à Meaux, et pourquoi les prix varient',
  metaTitle: 'Prix d’une ouverture de porte à Meaux : dès 69 €',
  metaDescription:
    'Nos ouvertures de porte démarrent à 69 €. Ce qui fait varier le prix, et comment obtenir un tarif fiable dès l’appel.',
  excerpt:
    'Une ouverture de porte démarre à 69 €, déplacement compris. Le montant exact dépend de votre porte, de votre serrure et de l’heure. Voici ce qui fait varier un prix d’ouverture de porte, et comment obtenir un tarif fiable dès l’appel.',
  publishedOn: '2026-09-24',
  targetServices: ['ouverture-de-porte'],
  sections: [
    {
      heading: '« Combien ça coûte ? », la première question de tous les appels',
      body: [
        'La question arrive presque toujours dans les dix premières secondes de l’appel, avant même l’adresse. Elle est légitime : vous êtes devant une porte fermée, vous ignorez combien de temps cela va prendre, et vous voulez savoir à quoi vous vous engagez. La réponse publique tient en deux lignes. Une ouverture de porte démarre à 69 €, déplacement et première heure de main-d’œuvre compris. Au-delà de cette première heure, le temps est décompté à 69 € de l’heure. C’est le point de départ de la grille, et le montant réellement facturé part de là.',
        'Un prix d’ouverture de porte se compose toujours des mêmes éléments : le déplacement jusqu’à chez vous, le temps passé sur la serrure, la pièce éventuellement remplacée, et l’horaire auquel l’intervention a lieu. Deux appels qui commencent par la même phrase — « je suis enfermé dehors » — aboutissent donc à deux montants différents dès que ces quatre éléments diffèrent.',
        'Concrètement : le forfait de 69 € couvre le déplacement et la première heure de main-d’œuvre sur place — soit moins cher que ces deux lignes facturées séparément. Au-delà, le temps est décompté à 69 € de l’heure, toute heure entamée étant due. Le détail figure sur notre <a href="/tarifs/">page des tarifs</a>.',
      ],
    },
    {
      heading: 'Les quatre éléments qui font varier le prix',
      body: [
        'Voici, par ordre d’influence, ce qui fait bouger le montant d’une ouverture de porte.',
      ],
      bullets: [
        'La façon dont la porte est fermée. Une porte claquée retient le seul pêne à demi-tour, celui que la poignée actionne. Une porte verrouillée à la clé, à un ou deux tours, engage des pênes dormants : le travail est d’une autre nature et demande davantage de temps.',
        'Le type de serrure. Une serrure monopoint standard, une multipoints à trois ou cinq points, un cylindre anti-perçage ou une porte blindée appellent chacun une méthode différente et un temps différent.',
        'L’issue de l’ouverture. Quand la serrure est conservée intacte, vous payez la seule intervention. Quand le cylindre est remplacé, la pièce s’ajoute, et son prix dépend du modèle posé.',
        'L’horaire. Comme dans l’ensemble du métier, les interventions de nuit, le week-end et les jours fériés sont facturées à un tarif supérieur au tarif de journée.',
      ],
    },
    {
      heading: 'Pourquoi le prix ferme arrive après le diagnostic',
      body: [
        'Prenez deux situations courantes. Un studio en collectif, porte claquée, serrure monopoint d’origine : l’ouverture non destructive est souvent possible, la serrure reste en place et rien n’est à remplacer. Une porte palière verrouillée à double tour, équipée d’une multipoints et d’un cylindre haute sécurité : le même intitulé — ouverture de porte — recouvre un travail plus long, et parfois le remplacement du cylindre, que cet équipement est précisément conçu pour rendre difficile à contourner.',
        'C’est la raison pour laquelle le diagnostic se fait au téléphone, avant le départ. Un professionnel qui pose trois ou quatre questions sur votre porte avant d’annoncer un montant vous donne un chiffre qu’il tient. Notre fonctionnement est celui-là : le tarif est annoncé et confirmé par téléphone avant tout déplacement, rappelé sur place avant le premier geste, et c’est lui qui figure sur la facture. La méthode retenue selon le type de fermeture est détaillée sur notre page <a href="/services/ouverture-de-porte/">ouverture de porte à Meaux</a>.',
        'L’accès pèse d’une autre manière : un immeuble ancien du centre de Meaux avec cour intérieure et deux codes, un étage élevé sans ascenseur dans un grand ensemble, ou un stationnement serré dans les rues étroites du centre jouent surtout sur le délai d’arrivée. Donner ces éléments dès l’appel fait gagner de longues minutes, et le délai fait partie de ce que vous achetez.',
        'Quand l’ouverture sans dégât n’est pas réalisable sur votre serrure, nous vous le disons avant d’intervenir, avec le coût du remplacement du cylindre. Vous décidez alors en connaissance de cause, porte encore fermée.',
      ],
    },
    {
      heading: 'Obtenir un tarif fiable dès l’appel : ce qu’il faut préparer',
      body: [
        'Le montant annoncé au téléphone vaut ce que valent les informations que vous donnez. Cinq éléments suffisent à le rendre fiable.',
      ],
      bullets: [
        'L’adresse exacte, avec l’étage, le code d’accès et le nom inscrit sur l’interphone.',
        'La façon dont la porte est fermée : claquée derrière vous, ou verrouillée à la clé, et dans ce cas un tour ou deux.',
        'Le type de serrure : un seul point de verrouillage, ou plusieurs pênes répartis sur la hauteur de la porte.',
        'La nature de la porte : bois, PVC, métal, ou porte blindée posée après coup.',
        'Le justificatif de domicile disponible sur place : pièce d’identité, quittance, bail ou facture à votre nom.',
      ],
    },
    {
      heading: 'Décrire sa serrure sans être du métier',
      body: [
        'La troisième question est celle qui embarrasse le plus, et elle se règle par un souvenir de geste. Sur une serrure monopoint, un seul pêne sort, au niveau de la poignée, et un tour de clé suffit à verrouiller. Sur une multipoints, plusieurs pênes sortent en même temps, répartis en haut et en bas de la tranche de la porte, et la clé fait deux ou trois tours complets. Cette seule information change le matériel embarqué dans le véhicule et le temps annoncé.',
        'Deux détails complètent utilement le tableau. Le nom gravé sur la face du cylindre, visible autour du trou de serrure, oriente vers le type de matériel. Et une plaque d’acier sur la face intérieure de la porte signale un blindage posé après coup, qui se traite différemment d’une porte d’origine.',
        'Dernier point, souvent oublié : précisez l’heure à laquelle la situation est apparue et la solution d’attente dont vous disposez. Quand votre situation peut attendre le lendemain matin, nous vous le disons et le tarif de journée s’applique. Les questions posées pendant l’appel sont reprises dans notre <a href="/faq/">foire aux questions</a>.',
      ],
    },
    {
      heading: 'Reconnaître une annonce à prix d’appel trompeur',
      body: [
        'C’est le vrai sujet derrière une recherche de prix. Le mécanisme est constant : un montant très bas occupe la première ligne de l’annonce, du prospectus ou de l’encart publicitaire, et sert uniquement à déclencher l’appel. Sur place, la facture finale agrège un déplacement, une « ouverture spéciale », parfois un cylindre remplacé sans nécessité — et la personne, enfermée dehors depuis une heure, accepte pour en finir.',
        'Quelques gestes remettent l’équilibre de votre côté, et ils tiennent en une minute de conversation.',
      ],
      bullets: [
        'Demandez un montant total, tout compris, pour la situation que vous venez de décrire : déplacement, main-d’œuvre et pièce éventuelle réunis. Notez-le, avec l’heure de l’appel et le prénom de votre interlocuteur.',
        'Demandez le nom de l’entreprise et son numéro SIRET. Une entreprise identifiable donne les deux immédiatement.',
        'Quand votre appel passe par un standard, demandez quelle entreprise se déplace réellement et quel tarif elle pratique.',
        'Réclamez un devis écrit dès que l’intervention dépasse le dépannage simple, puis une facture détaillée, main-d’œuvre et pièces séparées.',
        'À l’arrivée, comparez le montant annoncé au téléphone et celui qui vous est présenté. Les deux coïncident chez un professionnel sérieux, et vous restez libre d’arrêter avant le premier geste.',
      ],
    },
    {
      heading: 'Ce que la réglementation vous garantit, et ce que vous gardez ensuite',
      body: [
        'Le dépannage en serrurerie fait partie des activités visées nommément par l’arrêté du 24 janvier 2017 relatif à l’information du consommateur dans le secteur du bâtiment. Le professionnel tient à votre disposition, avant l’intervention, son taux horaire de main-d’œuvre, ses frais de déplacement, son mode de décompte du temps passé et ses majorations de nuit, de week-end et de jours fériés. Ces informations sont faites pour être demandées, et un professionnel les donne.',
        'Ces rubriques sont reprises une à une sur notre <a href="/tarifs/">page des tarifs</a>, avec le taux horaire, les frais de déplacement, le mode de décompte du temps passé, les majorations de soirée et de nuit, et la gratuité du devis.',
        'Après l’intervention, le document à conserver est la facture détaillée : elle nomme la prestation, les pièces remplacées et la main-d’œuvre. C’est la pièce que votre assureur réclame après une effraction, celle que votre bailleur demande en cas de désaccord, et la seule trace écrite de ce que vous avez payé. Rangez-la avec le dépôt de plainte lorsqu’il y en a un.',
      ],
    },
  ],
  takeaway:
    'Avant de dire oui, obtenez trois choses au téléphone : un montant total pour la situation que vous avez décrite, le nom de l’entreprise qui se déplace, et la confirmation que ce montant sera celui de la facture.',
  sources: [
    {
      label:
        'Plomberie, serrurerie, chauffage… choisir le bon professionnel pour un dépannage à domicile',
      publisher: 'DGCCRF',
      url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/plomberie-serrurerie-chauffage-choisir-le-bon-professionnel-pour-un-depannage-domicile',
    },
  ],
};

export default article;
