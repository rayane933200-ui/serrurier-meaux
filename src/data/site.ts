// Source unique des informations de l'entreprise.
// Les champs marqués À COMPLÉTER attendent des informations réelles de l'utilisateur :
// ne rien y inventer (voir CLAUDE.md).

export const site = {
  name: 'Serrurier',
  tagline: 'Sécurité · Rapidité · Confiance',

  // Coordonnées (déjà en place sur le site)
  phoneDisplay: '06 52 91 50 53',
  phoneHref: 'tel:+33652915053',
  /** Format international, attendu par les donnees structurees schema.org */
  phoneE164: '+33652915053',
  email: 'Contact.avoscles@gmail.com',

  // Couverture et disponibilité
  //
  // Rayane a confirmé le 26 octobre 2026 couvrir Meaux avec la même promesse
  // qu'à Lyon : 24h/24, 7j/7, objectif 30 minutes. Le risque a été signalé —
  // Meaux est à une quarantaine de kilomètres du siège des Pavillons-sous-Bois,
  // et seule une équipe déjà sur place tient ce délai. Il l'a maintenu en
  // connaissance de cause. Ne pas durcir cette promesse davantage.
  city: 'Meaux',
  area: 'Meaux et le Pays de Meaux',
  hours: '24h/24, 7j/7',
  responseTime: '30 minutes',
  /**
   * Plancher d'une intervention complète, déplacement et première heure compris.
   *
   * Historique : 119 € à l'origine, porté à 89 € le 5 octobre 2026, puis à 69 €
   * le 19 octobre 2026, à chaque fois sur décision de Rayane.
   *
   * Deux points de vigilance, tous deux signalés et assumés :
   *
   * 1. Le forfait est INFÉRIEUR à la somme des deux lignes de la grille
   *    (50 € de déplacement + 69 € de première heure = 119 €). C'est un prix de
   *    package, et /tarifs/ le dit en toutes lettres pour qu'un visiteur qui fait
   *    l'addition n'y voie pas une contradiction.
   *
   * 2. Le forfait vaut désormais EXACTEMENT le taux horaire. Écrire dans une même
   *    phrase « main-d'œuvre à 69 € de l'heure » et « ouverture dès 69 € » laisse
   *    croire que l'intervention entière coûte 69 € quelle que soit sa durée. Sur
   *    une grille opposable, l'ambiguïté profite au client. Ces formulations ont
   *    donc été séparées partout : le forfait couvre le déplacement et la première
   *    heure, le taux horaire ne s'applique qu'au-delà. Ne pas les réunir à nouveau.
   */
  startingPrice: '69 €',

  // TARIFS PUBLIÉS — ATTENTION : ces montants sont juridiquement opposables.
  // Un client peut exiger le prix affiché ici, et la DGCCRF contrôle le secteur
  // du dépannage à domicile. Toute modification se répercute automatiquement sur
  // /tarifs/, les pages de prestation et les mentions du site.
  //
  // L'entreprise est en franchise en base de TVA (art. 293 B du CGI) : elle ne
  // facture aucune TVA. Les montants ci-dessous sont donc les prix réellement
  // payés par le client, sans taxe à ajouter. Ne jamais les présenter comme
  // « TTC » ni mentionner un taux de TVA.
  //
  // Référence : relevé de 268 tarifs publiés par 13 serruriers lyonnais et une
  // vingtaine d'autres en France (septembre 2026). Valeurs retenues à la médiane
  // du marché lyonnais, puis reprises telles quelles sur Meaux sur décision
  // explicite de Rayane le 26 octobre 2026 : même grille, mêmes montants,
  // déplacement compris. Toute divergence future entre les deux sites doit être
  // décidée par lui, pas déduite de la distance.
  pricing: {
    hourlyRate: '69 €',
    callOut: '50 €',
    timeAccounting:
      'Le forfait annoncé couvre la première heure de main-d’œuvre sur place. Le décompte démarre au début de l’intervention, le temps de trajet n’étant pas facturé. Au-delà, toute heure entamée est due au taux horaire.',
    quote: 'Gratuit, détaillé, remis et signé avant toute intervention, y compris en urgence',
    surchargeEvening: '+50 % de 20 h à 22 h et le samedi en journée',
    surchargeNight: '+100 % de 22 h à 7 h, le dimanche et les jours fériés',
    /** Règle d'assiette : sans elle, une pièce chère double une facture de nuit. */
    surchargeBase:
      'Les majorations portent sur la main-d’œuvre et le déplacement uniquement, jamais sur les fournitures.',
  },

  // Mesure publicitaire — balise Google (gtag.js) du compte Google Ads,
  // fournie par Rayane le 24 septembre 2026. Elle sert au suivi des conversions
  // des campagnes payantes.
  //
  // Le compte Google Ads est celui de l'entreprise, pas celui d'une ville : les
  // identifiants ci-dessous sont donc les mêmes que sur le site de Lyon, et
  // c'est voulu. En revanche les conversions des deux sites se mélangeront dans
  // les mêmes colonnes. Pour les distinguer, c'est au niveau des campagnes que
  // ça se règle (une campagne par ville), pas ici.
  //
  // C'est un traceur publicitaire au sens de l'article 82 de la loi Informatique
  // et Libertés : il exige le consentement préalable du visiteur. Le chargement
  // passe donc par GoogleTag.astro, qui initialise le mode consentement de
  // Google à « denied », et par CookieBanner.astro, qui recueille le choix.
  // Retirer l'identifiant ci-dessous suffit à désactiver l'ensemble.
  analytics: {
    /**
     * Jeton de validation Google Search Console, méthode « balise HTML ».
     * Public par nature : il est lu dans le code source de la page.
     *
     * VIDE pour l'instant : un jeton vaut pour UNE propriété. Celui du site de
     * Lyon ne valide pas serrurier-meaux.fr, le recopier ne ferait rien. Il faut
     * créer la propriété dans Search Console, choisir « balise HTML » et coller
     * ici la valeur `content` donnée par Google. Tant que ce champ est vide, la
     * balise n'est pas émise — le site fonctionne, il ne remonte simplement
     * aucune donnée de recherche.
     */
    googleSiteVerification: '', // À COMPLÉTER : jeton de la propriété serrurier-meaux.fr
    /**
     * Jeton de validation Bing Webmaster Tools, méthode « balise meta ».
     *
     * Laissé vide volontairement : la balise n'est émise que s'il porte une
     * valeur, pour ne pas servir un attribut `content` creux sur 47 pages.
     *
     * Dans la plupart des cas il restera vide, et c'est normal : Bing sait
     * importer une propriété depuis Google Search Console, et cette voie valide
     * le site sans aucune balise à poser. Ce champ ne sert qu'à la validation
     * manuelle, si l'import venait à échouer.
     *
     * Bing alimente aussi Copilot et ChatGPT, d'où l'intérêt de ne pas s'en
     * tenir à Google.
     */
    bingSiteVerification: '',
    /**
     * Clé IndexNow, propre au domaine serrurier-meaux.fr, générée le
     * 26 octobre 2026.
     *
     * Elle DOIT être différente de celle du site de Lyon : le fichier de preuve
     * est servi par le domaine qui soumet, et une clé partagée ferait rejeter
     * les soumissions de l'un des deux en 403, sans qu'aucune page ne paraisse
     * cassée.
     *
     * IndexNow sert à PRÉVENIR les moteurs qu'une page a changé, au lieu
     * d'attendre leur prochain passage. Le protocole est supporté par Bing,
     * Yandex, Seznam et Naver — PAS par Google, qui a testé puis renoncé. Ce
     * n'est donc pas un remplaçant de Search Console, c'est un complément qui
     * couvre l'autre moitié du marché, Copilot et ChatGPT compris.
     *
     * Cette clé est PUBLIQUE par conception : elle est servie en clair à
     * /<clé>.txt, et c'est précisément ce fichier qui prouve aux moteurs que
     * celui qui soumet des URL contrôle bien le domaine. Elle n'ouvre aucun
     * accès : au pire, un tiers signale que nos pages ont changé.
     *
     * Le fichier est généré à partir de cette valeur par
     * src/pages/[cleIndexNow].txt.ts. Ne jamais écrire le .txt à la main dans
     * public/ : si le nom du fichier et son contenu divergent d'un caractère,
     * les moteurs répondent 403 et les soumissions sont rejetées en silence.
     */
    indexNowKey: 'fcbc5d1d92c988dcfcc31118a4ccf765',
    googleAdsId: 'AW-17731891576',
    /**
     * Action de conversion « appels depuis le site web », fournie par Rayane le
     * 24 septembre 2026. Elle active le remplacement du numéro : un visiteur
     * venu d'une annonce voit un numéro de transfert Google, qui sonne sur le
     * même portable. Seuls les appels de plus de 30 secondes sont comptés.
     */
    callConversionLabel: 'AW-17731891576/bwl4CKz2zugbEPjinIdC',
    /**
     * Action de conversion « clic sur le numéro », fournie par Rayane le
     * 24 septembre 2026. Elle se déclenche au clic sur n'importe quel lien
     * tel: du site, sans attendre que l'appel aboutisse.
     *
     * Elle fait donc doublon avec callConversionLabel ci-dessus : un appel qui
     * dure plus de trente secondes déclenche les deux. Dans Google Ads, une
     * seule des deux doit être en « principale », l'autre en « secondaire »,
     * faute de quoi la colonne Conversions compte deux fois le même appel.
     */
    callClickLabel: 'AW-17731891576/VABTCKXq4IMdEPjinIdC',
    /** Clé de stockage du choix du visiteur (localStorage). */
    consentKey: 'consentement-mesure',
  },

  // Informations légales — source : avis de situation au répertoire SIRENE
  // du 09/11/2025 fourni par l'utilisateur.
  legal: {
    legalName: 'Rayane IDRIS',
    tradeName: 'Rexpress',
    legalForm: 'Entrepreneur individuel (EI)',
    siren: '945 246 874',
    siret: '945 246 874 00016',
    ape: '43.32B — Travaux de menuiserie métallique et serrurerie',
    createdOn: '1er juillet 2025',
    address: '23B allée du Général Joubert',
    postalCode: '93320',
    addressCity: 'Les Pavillons-sous-Bois',
    publisher: 'Rayane IDRIS',

    // Hébergeur — REPRIS DU SITE DE LYON, À CONFIRMER AVANT MISE EN LIGNE.
    //
    // Les coordonnées ci-dessous sont celles d'o2switch, relevées sur leurs
    // conditions générales de vente. Elles sont justes pour le site de Lyon.
    // Pour celui de Meaux, elles ne le seront que si serrurier-meaux.fr est
    // effectivement servi par o2switch — ce qui est probable (domaine
    // additionnel sur le compte existant) mais pas établi.
    //
    // Les mentions légales sont opposables : nommer un hébergeur qui n'héberge
    // pas le site est une information fausse publiée sur une page qui engage.
    // Si l'hébergement est ailleurs, remplacer ce bloc par les coordonnées
    // relevées sur les CGV du prestataire réel, pas de mémoire.
    //
    // La politique de confidentialité dépend aussi de ce choix : elle affirme
    // que les journaux serveur ne quittent pas l'Union européenne, ce qui est
    // vrai d'o2switch (Clermont-Ferrand) et faux d'un hébergeur hors UE.
    host: {
      name: 'o2switch, SAS au capital de 100 000 €',
      address: 'Chemin des Pardiaux, 63000 Clermont-Ferrand, France',
      url: 'https://www.o2switch.fr',
      siret: '510 909 807 00032',
      phone: '04 44 44 60 40',
    },

    // Champs encore inconnus : laissés vides volontairement. La page mentions
    // légales masque toute ligne vide au lieu d'afficher un texte de remplissage.
    // Ne pas inventer de valeur — ces mentions sont juridiquement opposables.
    // Franchise en base : aucune TVA facturée. Cette mention est obligatoire sur
    // les devis et les factures, et elle remplace le numéro de TVA.
    vatNumber: 'TVA non applicable, article 293 B du CGI',
    insurer: '', // assureur — À COMPLÉTER, voir `credentials.decennale`
    insurancePolicy: '', // numéro de contrat — À COMPLÉTER
    insuranceCoverage: '', // couverture géographique du contrat — À COMPLÉTER
    mediator: '', // médiateur de la consommation (art. L. 612-1 du Code de la consommation)
  },

  // Éléments de crédibilité.
  credentials: {
    /**
     * Assurance décennale : souscrite. Confirmé par Rayane le 5 octobre 2026.
     *
     * Le site peut donc l'annoncer. Mais l'annonce reste volontairement sobre tant
     * que `legal.insurer`, `legal.insurancePolicy` et `legal.insuranceCoverage` sont
     * vides : « assuré » sans assureur nommé est un argument invérifiable, c'est-à-dire
     * exactement ce que font les concurrents que nos pages invitent à écarter.
     *
     * Ces trois informations existent déjà : la loi impose de les faire figurer sur
     * chaque devis et chaque facture — nature de l'assurance, coordonnées de l'assureur
     * et couverture géographique du contrat. Il suffit de les recopier ici depuis
     * l'attestation, et la page mentions légales les affichera automatiquement.
     */
    decennale: true,
    /**
     * Qualification. Rayane a confirmé le 5 octobre 2026 être diplômé d'État.
     *
     * `diplomaExact` attend l'intitulé précis (CAP serrurier-métallier, BP métallier,
     * Bac pro ouvrages du bâtiment : métallerie…) et l'année d'obtention. Nommer le
     * diplôme vaut bien mieux que la formule générique : « diplômé d'État » est employé
     * à tort et à travers dans le dépannage, l'intitulé exact ne l'est pas.
     */
    diploma: "Diplômé d'État en serrurerie-métallerie",
    diplomaExact: '', // À COMPLÉTER : intitulé officiel + année
    yearsOfExperience: null as number | null, // années de métier du serrurier
    certifications: [] as string[], // ex : A2P, Qualibat, agrément assurance
    lockBrands: [] as string[], // marques réellement posées — voir src/data/brands.ts
  },
} as const;

export type Site = typeof site;
