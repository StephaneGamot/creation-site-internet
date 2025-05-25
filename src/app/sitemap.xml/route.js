export async function GET() {
  const baseUrl = 'https://www.creation-site-internet.dev';
  const locales = ['fr', 'en', 'nl'];
  const paths = [
    '', // Home
    'web',
    'seo-referencement-naturel',
    'stephane-gamot/portfolio',
    'stephane-gamot',
    'contact',
  ];

  const today = new Date().toISOString();
  const urls = [];

  for (const path of paths) {
    for (const locale of locales) {
      // ✨ Corrige les slashes redondants et évite le trailing slash
      const isHome = path === '';
      const loc = isHome
        ? `${baseUrl}/${locale}`
        : `${baseUrl}/${locale}/${path}`.replace(/\/+$/, '');

      const alternateLinks = locales
        .map(lang => {
          const href = path === ''
            ? `${baseUrl}/${lang}`
            : `${baseUrl}/${lang}/${path}`.replace(/\/+$/, '');
          return `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`;
        })
        .join('\n    ');

      urls.push(`
    <url>
      <loc>${loc}</loc>
      <lastmod>${today}</lastmod>
      ${alternateLinks}
    </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.join('\n')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
