import type { APIRoute, GetStaticPaths } from 'astro';
import { site } from '../data/site';

// Fichier de preuve IndexNow, servi à /<clé>.txt.
//
// Les moteurs qui gèrent IndexNow (Bing, Yandex, Seznam, Naver) n'acceptent une
// soumission d'URL que si ce fichier existe à la racine du domaine ET contient
// exactement la clé qui donne son nom au fichier. Le moindre écart entre les
// deux — un caractère, un espace, un retour à la ligne de trop — et la
// soumission est refusée avec un 403, sans message ailleurs que dans le code
// de retour HTTP.
//
// D'où cette route plutôt qu'un fichier posé dans public/ : le nom et le
// contenu sortent de la même variable, ils ne peuvent plus diverger.
//
// La route est dynamique mais ne génère qu'un seul chemin, celui de la clé
// courante : elle n'intercepte aucune autre URL.

export const getStaticPaths: GetStaticPaths = () => [
  { params: { cleIndexNow: site.analytics.indexNowKey } },
];

export const GET: APIRoute = () =>
  new Response(site.analytics.indexNowKey, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
