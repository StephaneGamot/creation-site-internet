'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ContactButton from '@/components/Buttons/ContactButton'
import Testimonials from '@/components/Testimonials/Testimonials'

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

      {/* Hero Section */}
      <section className="text-center pt-12 max-w-4xl mx-auto mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-title font-semibold mb-6"
        >
          Référencement naturel (SEO) pour être visible sur Google
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Un bon site ne sert à rien s’il n’est pas vu. J’optimise chaque page pour les moteurs de recherche et pour vos visiteurs.
        </p>
        <Link
          href="/stephane-gamot"
          className="inline-block bg-[#43986b] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition"
        >
          En parler ensemble
        </Link>
      </section>

      {/* Bénéfices */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-title font-semibold mb-8">Pourquoi investir dans le SEO ?</h2>
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {[ 
            {
              title: 'Être trouvé sur Google',
              desc: 'Je travaille sur les mots-clés, les balises, les titres et la structure pour augmenter votre visibilité.'
            },
            {
              title: 'Attirer des visiteurs qualifiés',
              desc: 'Votre site attire des personnes qui recherchent vraiment vos services. Moins de bruit, plus de clients.'
            },
            {
              title: 'Un investissement durable',
              desc: 'Le SEO continue à porter ses fruits dans le temps, bien après la mise en ligne.'
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