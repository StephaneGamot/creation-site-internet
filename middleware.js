import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en', 'nl'],
  defaultLocale: 'fr'
});

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|api).*)']
};
