export async function GET() {
  const baseUrl = 'https://www.creation-site-internet.dev';
  const locales = ['fr', 'en', 'nl'];
  const pages = [
    'web',
    'seo-referencement-naturel',
    'stephane-gamot/portfolio',
    'stephane-gamot',
    'contact'
  ];

  const today = new Date().toISOString();
  const urls = [];

  // Home pages
  for (const locale of locales) {
    const loc = `${baseUrl}/${locale}`;
    const alternateLinks = locales
      .map(lang => `<xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}/${lang}" />`)
      .join('\n    ');

    urls.push(`
    <url>
      <loc>${loc}</loc>
      <lastmod>${today}</lastmod>
      ${alternateLinks}
    </url>`);
  }

  // Other pages
  for (const path of pages) {
    for (const locale of locales) {
      const loc = `${baseUrl}/${locale}/${path}`;
      const alternateLinks = locales
        .map(lang => `<xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}/${lang}/${path}" />`)
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
