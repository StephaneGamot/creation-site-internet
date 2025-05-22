

import Image from "next/image";
import MeContacterButton from "@/components/Buttons/ContactButton";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projectsData";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";
  const siteUrl = "https://www.creation-site-internet.dev";

  return {
    title: {
      fr: "Portfolio – Réalisations sur-mesure & sites performants",
      en: "Portfolio – Custom Projects & High-Performance Websites",
      nl: "Portfolio – Maatwerkprojecten & performante websites",
    }[currentLocale],

    description: {
      fr: "Découvrez une sélection de sites conçus avec soin : design élégant, performance technique et visibilité SEO réunis.",
      en: "Explore a curated selection of tailor-made websites blending elegant design, technical performance, and SEO impact.",
      nl: "Ontdek een selectie op maat gemaakte websites: elegant design, technische prestaties en SEO-impact in één.",
    }[currentLocale],

    alternates: {
      canonical: `${siteUrl}/${currentLocale === "fr" ? "stephane-gamot/portfolio" : `${currentLocale}/stephane-gamot/portfolio`}`,
      languages: {
        fr: `${siteUrl}/fr/stephane-gamot/portfolio`,
        en: `${siteUrl}/en/stephane-gamot/portfolio`,
        nl: `${siteUrl}/nl/stephane-gamot/portfolio`,
        "x-default": `${siteUrl}/fr/stephane-gamot/portfolio`,
      },
    },

    openGraph: {
      title: {
        fr: "Portfolio – Sites web élégants, performants & durables",
        en: "Portfolio – Elegant, High-Performing & Sustainable Websites",
        nl: "Portfolio – Elegante, performante & duurzame websites",
      }[currentLocale],
      description: {
        fr: "Exemples concrets de projets réalisés pour des clients variés. Une approche centrée sur l’efficacité et l’image.",
        en: "Concrete examples of websites built for a variety of clients. A blend of efficiency and strong brand identity.",
        nl: "Concrete voorbeelden van websites voor diverse klanten. Een aanpak die efficiëntie en uitstraling combineert.",
      }[currentLocale],
      url: `${siteUrl}/${currentLocale === "fr" ? "stephane-gamot/portfolio" : `${currentLocale}/stephane-gamot/portfolio`}`,
      type: "article",
      siteName: "Création Site Internet",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${siteUrl}/images/og-portfolio.webp`,
          secureUrl: `${siteUrl}/images/og-portfolio.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Aperçu de sites réalisés – design fluide et sur-mesure",
            en: "Preview of custom-made websites – sleek and responsive",
            nl: "Voorbeeld van op maat gemaakte websites – strak en responsief",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@stephanegamot",
      title: {
        fr: "Portfolio – Stéphane Gamot",
        en: "Portfolio – Stéphane Gamot",
        nl: "Portfolio – Stéphane Gamot",
      }[currentLocale],
      description: {
        fr: "Sites web sur-mesure, pensés pour durer. Performants, élégants, et alignés avec chaque besoin client.",
        en: "Tailor-made websites built to last. Fast, elegant, and aligned with every client’s needs.",
        nl: "Maatwerk websites die blijven presteren. Snel, elegant en afgestemd op elke klantbehoefte.",
      }[currentLocale],
      images: [`${siteUrl}/images/og-portfolio.webp`],
    },
  };
}

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const tp = useTranslations("portfolioProjects");

  return (
    <div className="px-6 md:px-12 py-16 space-y-24 bg-white text-gray-900 font-body">

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-title font-semibold mb-6">{t("title")}</h1>
        <p className="text-lg md:text-xl text-gray-700">{t("text")}</p>
      </section>

      {/* Projects List */}
      <section className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {projects.map((project, index) => {
          const p = {
  title: tp(`${project.id}.title`),
  category: tp(`${project.id}.category`),
  description: tp(`${project.id}.description`),
  alt: tp(`${project.id}.alt`)
};

          return (
            <div
              key={project.id}
              aria-label={`Project: ${p.title}`}
              className="group rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-4 bg-white"
            >
              <Image
                src={project.image}
                alt={p.alt}
                width={800}
                height={470}
                loading="lazy"
                className="rounded-xl object-cover mb-4 transition-transform duration-300 md:group-hover:scale-[1.01]"
                aria-describedby={`desc-${index}`}
              />
              <span className="inline-block mb-2 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {p.category}
              </span>
              <h2 className="text-xl text-center font-title font-semibold text-gray-800 mb-2">
                {p.title}
              </h2>
              <p id={`desc-${index}`} className="text-sm text-gray-600 leading-relaxed text-center">
                {p.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-title font-semibold mb-4">{t("ctaTitle")}</h2>
        <p className="text-lg text-gray-700 mb-6">{t("ctaText")}</p>
        <MeContacterButton />
      </section>
    </div>
  );
}
