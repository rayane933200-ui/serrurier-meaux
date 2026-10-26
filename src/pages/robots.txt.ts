import type { APIRoute } from 'astro';

// robots.txt généré à partir de l'URL réelle du site (voir astro.config.mjs)
// plutôt que codé en dur : le lien du sitemap reste juste quand le domaine change.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
