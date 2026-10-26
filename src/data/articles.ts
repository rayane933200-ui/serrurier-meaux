// Index des articles du blog. Un fichier par article dans src/data/articles/,
// agrégés ici puis triés du plus récent au plus ancien.
//
// Pour ajouter un article : créer le fichier, l'importer, l'ajouter au tableau.
// La page /blog/<slug>, la liste /blog/ et le sitemap suivent automatiquement.

import type { Article } from './articles/types';
import porteClaquee from './articles/porte-claquee-que-faire';
import prixOuverture from './articles/prix-ouverture-de-porte';
import serrurierSerieux from './articles/reconnaitre-serrurier-serieux';
import cleCassee from './articles/cle-cassee-dans-la-serrure';
import cylindreOuSerrure from './articles/cylindre-ou-serrure-complete';
import apresCambriolage from './articles/apres-un-cambriolage-demarches';
import clePerdue from './articles/cle-perdue-changer-la-serrure';
import poigneeBlindee from './articles/poignee-blindee-protecteur-de-cylindre';
import serrureHlm from './articles/serrure-hlm-locataire-bailleur';
import multipoints from './articles/serrure-multipoints-combien-de-points';
import cleVide from './articles/cle-tourne-dans-le-vide';
import porteFermeMal from './articles/porte-qui-ferme-mal-reglage';
import emmenagement from './articles/changer-serrure-emmenagement';
import montages from './articles/serrure-applique-encastree-carenee';
import boiteAuxLettres from './articles/serrure-boite-aux-lettres';
import grippee from './articles/serrure-grippee-que-faire';
import sansDegat from './articles/ouverture-sans-degat-ce-que-ca-veut-dire';
import verrou from './articles/ajouter-un-verrou-supplementaire';
import diagnostic from './articles/quelle-panne-de-serrure-avez-vous';
import securiser from './articles/securiser-son-logement-par-ou-commencer';

export type { Article, ArticleSection } from './articles/types';

export const articles: Article[] = [
  porteClaquee,
  prixOuverture,
  serrurierSerieux,
  cleCassee,
  cylindreOuSerrure,
  apresCambriolage,
  clePerdue,
  poigneeBlindee,
  serrureHlm,
  multipoints,
  cleVide,
  porteFermeMal,
  emmenagement,
  montages,
  boiteAuxLettres,
  grippee,
  sansDegat,
  verrou,
  diagnostic,
  securiser,
].sort((a, b) => b.publishedOn.localeCompare(a.publishedOn));

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);

/** Articles renvoyant vers une prestation donnée, pour le maillage retour. */
export const articlesForService = (serviceSlug: string) =>
  articles.filter((article) => article.targetServices.includes(serviceSlug));
