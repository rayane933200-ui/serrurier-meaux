// Forme d'un article de blog. Même principe que services.ts et zones.ts :
// le contenu vit dans les données, la page et le maillage suivent.
//
// Un fichier par article dans ce dossier, agrégés par src/data/articles.ts.

export interface ArticleSection {
  /** Titre de section, rendu en <h2> */
  heading: string;
  /** Un élément = un paragraphe */
  body: string[];
  /** Liste à puces facultative, affichée après les paragraphes */
  bullets?: string[];
}

/**
 * Illustration d'en-tête. Facultative : tous les articles n'en ont pas, et une
 * image est ajoutée seulement quand elle apporte quelque chose.
 *
 * RÈGLE : photos d'objets et de détails uniquement (serrure, clé, cylindre,
 * porte). Jamais de mise en scène de technicien, qui laisserait croire qu'il
 * s'agit d'un chantier de l'entreprise — ce serait un mensonge implicite dans
 * un métier où la confiance est le premier critère de choix.
 */
export interface ArticleImage {
  /** Image importée depuis src/assets/photos/, optimisée par astro:assets */
  src: ImageMetadata;
  /** Description du contenu de l'image, jamais un bourrage de mots-clés */
  alt: string;
  /** Auteur et source, pour la page de crédits */
  credit: string;
}

/**
 * Source citée en bas d'article.
 *
 * Le guide de démarrage SEO de Google demande d'indiquer ses sources pour
 * montrer son expertise. Dans un métier où la défiance est le point de départ,
 * c'est aussi ce qui sépare un article qui affirme d'un article qui démontre.
 *
 * RÈGLE : n'inscrire ici qu'une URL **vérifiée**, consultée et pointant encore
 * sur le bon contenu. Une source morte est pire que pas de source — elle donne
 * l'apparence du sérieux sans la substance, et un lecteur qui clique dans le
 * vide retient l'inverse de ce qu'on cherchait à établir.
 */
export interface ArticleSource {
  /** Intitulé réel de la page citée, pas une paraphrase */
  label: string;
  /** Organisme ou publication, affiché à côté du lien */
  publisher: string;
  url: string;
}

export interface Article {
  slug: string;
  image?: ArticleImage;
  /** Titre H1 de l'article */
  title: string;
  /** Titre passé au layout — autoportant, 60 caractères maximum */
  metaTitle: string;
  /** 160 caractères maximum */
  metaDescription: string;
  /** Résumé affiché sur /blog/ et en chapô de l'article */
  excerpt: string;
  /** Date de publication au format ISO (AAAA-MM-JJ) */
  publishedOn: string;
  /**
   * Date de dernière mise à jour, au format ISO. Facultative.
   *
   * À ne renseigner que lorsque le contenu a réellement été repris — une
   * section ajoutée, un chiffre corrigé, une règle qui a changé. La remplir
   * pour une retouche de forme gonflerait un signal de fraîcheur sans rien
   * apporter au lecteur, et Google traite ce procédé pour ce qu'il est.
   */
  updatedOn?: string;
  /** Slug de la prestation vers laquelle l'article doit renvoyer en contenu */
  targetServices: string[];
  sections: ArticleSection[];
  /** Phrase de conclusion actionnable, affichée avant l'appel à l'action */
  takeaway: string;
  /** Sources officielles consultées. Facultatif : tous les sujets n'en appellent pas. */
  sources?: ArticleSource[];
}
