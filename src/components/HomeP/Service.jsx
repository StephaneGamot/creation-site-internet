"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Service() {
    const services = [
        {
          title: 'Création de site internet',
          link: '/web',
          description: 'Sites vitrines, blogs ou boutiques, conçus avec soin pour refléter votre image et vos objectifs.'
        },
        {
          title: 'SEO & Référencement naturel',
          link: '/seo-referencement-naturel',
          description: 'Optimisation complète de votre site pour améliorer votre positionnement sur Google.'
        },
        {
          title: 'Portfolio de réalisations',
          link: '/stephane-gamot/portfolio',
          description: 'Découvrez mes projets récents, entre esthétique soignée et performance digitale.'
        },
      ]
  return (
    <section className="max-w-6xl mx-auto">
<h2 className="text-3xl font-title font-semibold mb-8 text-center">Les services que je vous propose</h2>
        <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <Link
    key={index}
    href={service.link} >
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="block border border-gray-200 hover:border-[#3451a1] bg-white hover:bg-[#3451a1]/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl text-center text-[#0d0d0d] font-title font-semibold mb-2">
      {service.title}
    </h3>
    <p className="text-sm text-gray-600 text-left font-medium">
      {service.description}
    </p>
            </motion.div></Link>
          ))}
        </div>
      </section>
  )
}
