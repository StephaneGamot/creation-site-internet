import { motion } from 'framer-motion'
import LetsTalkButton from '@/components/Buttons/LetsTalkButton'

export default function WebPageHero() {
  return (
    <section className="text-center pt-12 max-w-4xl mx-auto mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-title font-semibold mb-6"
        >
          Sites internet sur-mesure
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Je conçois des sites vitrines, blogs ou boutiques en ligne à votre image : rapides, élégants, performants, accessibles, sécurisés et conçus pour durer dans le temps.
        </p>
        <LetsTalkButton />
      </section>
  )
}
