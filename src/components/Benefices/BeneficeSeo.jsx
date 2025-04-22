"use client"

import { motion } from 'framer-motion'

export default function BeneficeSeo() {
  return (
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
  )
}
