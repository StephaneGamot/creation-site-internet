import BeneficeWeb from "@/components/Benefices/BeneficeWeb";
import WebPageHero from "@/components/Heros/WebPageHero";
import Testimonials from "@/components/Testimonials/Testimonials";
import WebCta from "@/components/cta/WebCta";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";
  const siteUrl = "https://www.creation-site-internet.dev";

  return {
    title: {
      fr: "Création de sites web sur-mesure – Stéphane Gamot",
      en: "Custom Website Creation – Stéphane Gamot",
      nl: "Maatwerk websites – Stéphane Gamot",
    }[currentLocale],

    description: {
      fr: "Conception de sites internet élégants, performants et adaptés à votre activité. Développement Next.js & design responsive avec SEO intégré.",
      en: "Designing elegant, high-performance websites tailored to your business. Next.js development & responsive design with built-in SEO.",
      nl: "Ontwerp van elegante, krachtige websites op maat van uw activiteit. Next.js-ontwikkeling & responsive design met geïntegreerde SEO.",
    }[currentLocale],

    alternates: {
      canonical: `${siteUrl}/${currentLocale === "fr" ? "web" : `${currentLocale}/web`}`,
      languages: {
        fr: `${siteUrl}/fr/web`,
        en: `${siteUrl}/en/web`,
        nl: `${siteUrl}/nl/web`,
        "x-default": `${siteUrl}/fr/web`,
      },
    },

    openGraph: {
      title: {
        fr: "Votre site internet sur-mesure, performant & élégant",
        en: "Your custom, high-performance & elegant website",
        nl: "Uw op maat gemaakte, krachtige en elegante website",
      }[currentLocale],
      description: {
        fr: "Je crée des sites personnalisés avec design moderne, fluidité et optimisation SEO dès la base.",
        en: "I create custom websites with modern design, fluid UX and built-in SEO optimization.",
        nl: "Ik maak op maat gemaakte websites met modern design, vloeiende ervaring en geïntegreerde SEO.",
      }[currentLocale],
      url: `${siteUrl}/${currentLocale === "fr" ? "web" : `${currentLocale}/web`}`,
      type: "article",
      siteName: "Création Site Internet",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${siteUrl}/images/og-web.webp`,
          secureUrl: `${siteUrl}/images/og-web.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Développement d'un site Next.js affiché sur laptop",
            en: "Next.js website development displayed on laptop",
            nl: "Next.js websiteontwikkeling weergegeven op laptop",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@stephanegamot",
      title: {
        fr: "Création de sites web sur-mesure – Stéphane Gamot",
        en: "Custom Website Creation – Stéphane Gamot",
        nl: "Maatwerk websites – Stéphane Gamot",
      }[currentLocale],
      description: {
        fr: "Des sites modernes, rapides, élégants et pensés pour Google dès leur création.",
        en: "Modern, fast, elegant websites crafted with SEO in mind from the ground up.",
        nl: "Moderne, snelle en elegante websites met ingebouwde SEO vanaf de basis.",
      }[currentLocale],
      images: [`${siteUrl}/images/og-web.webp`],
    },
  };
}


export default function Page() {
  return (
    <div className="px-6 md:px-12  space-y-24 bg-gray-100 text-gray-900 font-body">
      <WebPageHero />
      <BeneficeWeb />
      <WebCta />
      <Testimonials ids={[14, 17, 18, 19, 21, 20, 12]} />
    </div>
  );
}
