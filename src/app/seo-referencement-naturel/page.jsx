
import ContactButton from '@/components/Buttons/ContactButton'
import Testimonials from '@/components/Testimonials/Testimonials'
import SeoHero from '@/components/Heros/SeoHero'
import BeneficeSeo from '@/components/Benefices/BeneficeSeo'

export const metadata = {
  title: "Référencement naturel (SEO) – Gagnez en visibilité",
  description: "Stratégies SEO sur-mesure pour améliorer le positionnement Google de votre site. Audit, contenu, technique, backlinks et suivi personnalisé.",
  alternates: {
    canonical: "https://www.creation-site-internet.dev/seo-referencement-naturel",
  },
  openGraph: {
    title: "Référencement naturel – Visibilité & stratégie SEO",
    description: "Optimisez votre site pour Google avec une stratégie sur-mesure, alignée à votre activité et vos objectifs.",
    url: "https://www.creation-site-internet.dev/seo-referencement-naturel",
    type: "article",
    siteName: "Création Site Internet",
    locale: "fr_BE",
    images: [
      {
        url: "/images/og-seo.webp",
        width: 1200,
        height: 627,
        alt: "Graphique de trafic SEO et positionnement Google",
      },
    ],
  },
}


export default function Page() {
  return (
    <div className="px-6 md:px-12  space-y-24 bg-gray-100 text-gray-900 font-body">

     <SeoHero />
     
    <BeneficeSeo />

        <section className="text-center pb-0">
              <h2 className="text-3xl font-title font-semibold mb-4">Besoin de booster votre visibilité ?</h2>
              <p className="text-lg text-gray-700 mb-6">
              Discutons ensemble d’une stratégie sur-mesure pour faire remonter votre site dans les résultats.
              </p>
             <ContactButton />
            </section>

            <Testimonials ids={[22, 23, 25]} />
    </div>
  )
}