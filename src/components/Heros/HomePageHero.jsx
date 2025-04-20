"use client"

import { motion } from 'framer-motion'
import KnowMoreButton from '../Buttons/KnowMoreButton'

export default function HomePageHero() {
  return (
    <section className="text-center pt-12 max-w-4xl mx-auto mb-12">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-title font-semibold mb-8"
    >
      Création de site internet élégant, fluide, pensé pour le référencement naturel.
    </motion.h1>
    <p className="text-lg md:text-xl text-gray-700 mb-10">
      Je conçois des sites web qui incarnent votre identité, captivent votre audience et optimisent votre visibilité sur Google.
    </p>
  <KnowMoreButton />
  </section>
  )
}
