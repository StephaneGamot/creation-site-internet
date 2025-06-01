'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition, useEffect, useRef } from 'react';
import { routing } from '@/i18n/routing';

const { locales } = routing;

const flags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  nl: '🇳🇱',
};

export default function LangSwitcher({ direction = 'down' }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef();

  const currentLocale = pathname.split('/')[1];

  const handleLocaleChange = (newLocale) => {
    const newPath = pathname.replace(/^\/(fr|en|nl)/, `/${newLocale}`);
    setOpen(false);
    startTransition(() => router.push(newPath));
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🔁 Ferme le menu avec Échap
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    if (open) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // 👉 MOBILE : trois boutons simples
  if (isMobile) {
    return (
      <nav aria-label="Choix de la langue" className="flex gap-2 justify-center items-center mt-4 sm:hidden">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`px-3 py-1 text-sm rounded-full border ${
              loc === currentLocale
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700'
            } hover:bg-gray-100 dark:hover:bg-neutral-700 transition`}
            aria-current={loc === currentLocale ? 'true' : undefined}
          >
            {flags[loc]} <span className="sr-only">Changer la langue vers </span>{loc.toUpperCase()}
          </button>
        ))}
      </nav>
    );
  }

  // 👉 DESKTOP : menu déroulant accessible
  return (
    <div className="relative" role="navigation" aria-label="Sélecteur de langue">
      <button
        ref={buttonRef}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="language-menu"
        onClick={() => setOpen((prev) => !prev)}
        className="w-24 h-9 flex items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-sm text-sm font-medium text-gray-800 dark:text-white"
      >
        {flags[currentLocale]} {currentLocale.toUpperCase()}
      </button>

      {open && (
        <div
          id="language-menu"
          role="menu"
          className={`absolute z-50 w-24 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-lg ${
            direction === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
          }`}
        >
          {locales
            .filter((loc) => loc !== currentLocale)
            .map((loc) => (
              <button
                key={loc}
                role="menuitem"
                onClick={() => handleLocaleChange(loc)}
                className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 text-center"
              >
                {flags[loc]} <span className="sr-only">Changer la langue vers </span>{loc.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
