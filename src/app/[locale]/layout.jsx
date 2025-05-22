import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import Analytics from "@/components/Analytics";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./../globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-title",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props) {
  const { children } = props;
  const { locale } = await props.params; // ✅ await obligatoire ici

  const safeLocale = hasLocale(routing.locales, locale) ? locale : "fr";

  setRequestLocale(safeLocale);

  const messages = (await import(`@/messages/${safeLocale}.json`)).default;

  return (
    <html lang={safeLocale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="#556B2F" media="(prefers-color-scheme: dark)" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="google-site-verification" content="google1b18195b39af5559" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
       
      </head>
      <body className={`${cormorant.variable} ${openSans.variable} bg-light text-dark font-body`}>

        <NextIntlClientProvider locale={safeLocale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
          <Analytics />
       
      </body>
    </html>
  );
}
