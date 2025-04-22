"use client"

import { motion } from 'framer-motion'
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
      {/* Bénéfices */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-title font-semibold mb-8">Votre site internet mérite mieux qu'un simple template</h2>
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {[ 
            {
              title: 'Design sur-mesure',
              desc: 'Chaque site web est pensé pour refléter votre univers visuel et vos valeurs.'
            },
            {
              title: 'Optimisé pour le référencement',
              desc: 'Un code propre, des contenus bien structurés et une base SEO solide.'
            },
            {
              title: 'Facile à gérer',
              desc: 'Vous êtes autonome après la livraison, avec une interface claire et accessible.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#f9f9f9] p-6 rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

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