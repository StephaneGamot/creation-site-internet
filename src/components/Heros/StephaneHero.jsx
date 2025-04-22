"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Portrait from "./../../../public/images/stephane.webp"


export default function StephaneHero() {
  return (
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={Portrait}
                    alt="Stéphane Gamot, créateur de sites web"
                    className="rounded-2xl shadow-xl"
                  />
                </motion.div>
        
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl md:text-5xl font-title font-semibold">
                    Qui suis-je ?
                  </h1>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Je m'appelle Stéphane Gamot. 
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">Ingénieur logiciel & Développeur full-stack web passionné.</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                  Je conçois des sites internet élégants, performants et conçus pour durer.
                  </p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Mon approche : allier la technique à la sensibilité graphique, le référencement à l'expérience utilisateur. Chaque projet est une aventure humaine avant tout.
                  </p>
                 
                </motion.div>
              </section>
  )
}
