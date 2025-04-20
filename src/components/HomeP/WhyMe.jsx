"use client"

import { motion } from 'framer-motion'

export default function WhyMe() {
    const whyMe = [
        {
          title: 'Design raffiné et responsive',
          description: 'Des interfaces modernes, harmonieuses et pensées pour s’adapter à tous les écrans, sans compromis sur l’esthétique.'
        },
        {
          title: 'Optimisation SEO dès la conception',
          description: 'Un code propre, des balises structurées et une stratégie de contenu intégrée pour plaire à Google dès le départ.'
        },
        {
          title: 'Expérience utilisateur fluide',
          description: 'Des parcours clairs, une navigation intuitive et un confort de lecture optimal pour convertir vos visiteurs.'
        },
      ];
  return (
    <section className="max-w-6xl py-10 mx-auto my-8">
<h2 className="text-3xl font-title font-semibold mb-8 text-center">Pourquoi me faire confiance ?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {whyMe.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="block border border-gray-200 hover:border-[#3451a1] bg-white hover:bg-[#3451a1]/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
             <h3 className="text-xl text-center text-[#0d0d0d] font-title font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 text-left">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
  )
}
