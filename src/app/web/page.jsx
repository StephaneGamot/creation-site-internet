
import BeneficeWeb from '@/components/Benefices/BeneficeWeb'
import WebPageHero from '@/components/Heros/WebPageHero'
import ContactButton from '@/components/Buttons/ContactButton'
import Testimonials from '@/components/Testimonials/Testimonials'

export const metadata = {
  title: "Création de sites web sur-mesure – Stéphane Gamot",
  description: "Conception de sites internet élégants, performants et adaptés à votre activité. Développement Next.js & design responsive avec SEO intégré.",
  alternates: {
    canonical: "https://www.creation-site-internet.dev/web",
  },
  openGraph: {
    title: "Votre site internet sur-mesure, performant & élégant",
    description: "Je crée des sites personnalisés avec design moderne, fluidité et optimisation SEO dès la base.",
    url: "https://www.creation-site-internet.dev/web",
    type: "article",
    siteName: "Création Site Internet",
    locale: "fr_BE",
    images: [
      {
        url: "/images/og-web.webp",
        width: 1200,
        height: 627,
        alt: "Développement d'un site Next.js affiché sur laptop",
      },
    ],
  },
}


export default function Page() {
  return (
    <div className="px-6 md:px-12  space-y-24 bg-gray-100 text-gray-900 font-body">

  <WebPageHero />

      <BeneficeWeb />

      {/* CTA Final */}
      <section className="text-center">
        <h2 className="text-3xl font-title font-semibold mb-4">Prêt à avoir un site à votre image ?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Je vous accompagne à chaque étape : de l'idée à la mise en ligne.
        </p>
       <ContactButton />
      </section>
<Testimonials ids={[14, 17, 18, 19, 21, 20, 12]} />

    </div>
  )
}