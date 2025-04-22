"use client"

import { motion } from 'framer-motion'

export default function BeneficeWeb() {
  return (
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
  )
}
