"use client";

import { useTranslations } from 'next-intl';
import Seo from '@/components/Seo';
import LangSwitcher from '@/components/LangSwitcher';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <Seo title={t('seoTitle')} description={t('seoDescription')} />
      <div className="px-6 md:px-12 py-16 space-y-24 bg-gray-100 text-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold text-center">{t('heroTitle')}</h1>
        <p className="text-lg text-center text-gray-600">{t('heroSubtitle')}</p>
        <LangSwitcher />
      </div>
    </>
  );
}
