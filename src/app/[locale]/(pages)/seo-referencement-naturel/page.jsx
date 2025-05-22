
import SeoCta from '@/components/cta/SeoCta'
import Testimonials from '@/components/Testimonials/Testimonials'
import SeoHero from '@/components/Heros/SeoHero'
import BeneficeSeo from '@/components/Benefices/BeneficeSeo'

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";
  const siteUrl = "https://www.creation-site-internet.dev";

  return {
    title: {
      fr: "Référencement naturel (SEO) – Gagnez en visibilité",
      en: "Search Engine Optimization (SEO) – Gain visibility",
      nl: "Zoekmachineoptimalisatie (SEO) – Vergroot uw zichtbaarheid",
    }[currentLocale],

    description: {
      fr: "Stratégies SEO sur-mesure pour améliorer le positionnement Google de votre site. Audit, contenu, technique, backlinks et suivi personnalisé.",
      en: "Custom SEO strategies to improve your site's Google ranking. Audit, content, technical optimization, backlinks, and personalized support.",
      nl: "Maatwerk SEO-strategieën om uw positie op Google te verbeteren. Audit, inhoud, techniek, backlinks en persoonlijke opvolging.",
    }[currentLocale],

    alternates: {
      canonical: `${siteUrl}/${currentLocale === "fr" ? "seo-referencement-naturel" : `${currentLocale}/seo-referencement-naturel`}`,
      languages: {
        fr: `${siteUrl}/fr/seo-referencement-naturel`,
        en: `${siteUrl}/en/seo-referencement-naturel`,
        nl: `${siteUrl}/nl/seo-referencement-naturel`,
        "x-default": `${siteUrl}/fr/seo-referencement-naturel`,
      },
    },

    openGraph: {
      title: {
        fr: "Référencement naturel – Visibilité & stratégie SEO",
        en: "SEO – Visibility & custom strategy",
        nl: "SEO – Zichtbaarheid & strategie op maat",
      }[currentLocale],
      description: {
        fr: "Optimisez votre site pour Google avec une stratégie sur-mesure, alignée à votre activité et vos objectifs.",
        en: "Optimize your site for Google with a custom strategy tailored to your business and goals.",
        nl: "Optimaliseer uw site voor Google met een strategie op maat van uw activiteit en doelstellingen.",
      }[currentLocale],
      url: `${siteUrl}/${currentLocale === "fr" ? "seo-referencement-naturel" : `${currentLocale}/seo-referencement-naturel`}`,
      type: "article",
      siteName: "Création Site Internet",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${siteUrl}/images/og-seo.webp`,
          secureUrl: `${siteUrl}/images/og-seo.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Graphique de trafic SEO et positionnement Google",
            en: "SEO traffic chart and Google ranking performance",
            nl: "SEO-verkeersgrafiek en Google-rangschikking",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@stephanegamot",
      title: {
        fr: "Référencement naturel (SEO) – Gagnez en visibilité",
        en: "SEO – Improve your visibility on Google",
        nl: "SEO – Vergroot uw zichtbaarheid op Google",
      }[currentLocale],
      description: {
        fr: "Des solutions SEO efficaces et humaines pour vous positionner durablement.",
        en: "Effective and human-centered SEO solutions to help you rank sustainably.",
        nl: "Efficiënte en mensgerichte SEO-oplossingen voor een duurzame zichtbaarheid.",
      }[currentLocale],
      images: [`${siteUrl}/images/og-seo.webp`],
    },
  };
}



export default function Page() {
  return (
    <div className="px-6 md:px-12  space-y-24 bg-gray-100 text-gray-900 font-body">

     <SeoHero />
     
    <BeneficeSeo />

    <SeoCta />

            <Testimonials ids={[22, 23, 25]} />
    </div>
  )
}