"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LangSwitcher() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const otherLocales = ['fr', 'en', 'nl'].filter((l) => l !== locale);

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {otherLocales.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}${pathname.replace(`/${locale}`, '')}`}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium"
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

