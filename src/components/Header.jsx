'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from "./../../public/images/logo.webp"
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl';
import LangSwitcher from './LangSwitcher'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations("header")
  const locale = useLocale()

  const navigation = [
    { name: t('navigation.web'), href: `/${locale}/web` },
    { name: t('navigation.seo'), href: `/${locale}/seo-referencement-naturel` },
    { name: t('navigation.portfolio'), href: `/${locale}/stephane-gamot/portfolio` },
    { name: t('navigation.about'), href: `/${locale}/stephane-gamot` },
    { name: t('navigation.contact'), href: `/${locale}/contact` },
  ]

  return (
    <header className="bg-[#3451a1]">
      <nav aria-label="Global" className="flex items-center justify-between p-6 [@media(min-width:900px)]:px-8">
        <div className="flex [@media(min-width:900px)]:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5">
            <span className="sr-only">{t("logoTitle")}</span>
            <Image
              alt={t("logoAlt")}
              src={Logo}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex [@media(min-width:900px)]:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">{t("menuToggle")}</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden [@media(min-width:900px)]:flex [@media(min-width:900px)]:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden [@media(min-width:900px)]:flex [@media(min-width:900px)]:flex-1 [@media(min-width:900px)]:justify-end">
          <LangSwitcher />
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="[@media(min-width:900px)]:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#3451a1] px-6 py-6 [@media(min-width:900px)]:max-w-sm [@media(min-width:900px)]:ring-1 [@media(min-width:900px)]:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="-m-1.5 p-1.5">
              <span className="sr-only">{t("logoTitle")}</span>
              <Image
                alt={t("logoAlt")}
                src={Logo}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">{t("menuClose")}</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <LangSwitcher />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

