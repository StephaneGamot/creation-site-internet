"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function SeoHero() {
  const t = useTranslations('seoHero');

  return (
    <section className="text-center pt-12 max-w-4xl mx-auto mb-12">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-title font-semibold mb-6"
      >
        {t('title')}
      </motion.h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        {t('text')}
      </p>
      <Link
        href="/stephane-gamot"
        className="inline-block bg-[#43986b] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition"
      >
        {t('button')}
      </Link>
    </section>
  );
}
