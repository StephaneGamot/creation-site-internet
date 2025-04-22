'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from "./../../public/images/logo.webp"
import Link from 'next/link'


const navigation = [
    { name: 'Sites web sur-mesure', href: '/web' },
    { name: 'Réferencement naturel', href: '/seo-referencement-naturel' },
    { name: 'Portfolio', href: '/stephane-gamot/portfolio' },
    { name: 'Qui suis-je ?', href: '/stephane-gamot' },
    { name: 'Contact', href: '/contact' },
  ]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#3451a1]">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex sm:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Créateur de site internet & référencement naturel</span>
            <Image
              alt="Imac montrant le code en react pour creer un site web"
              src={Logo}
              className="h-8 w-auto"

            />
          </Link>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Ouverture du menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden sm:flex sm:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:justify-end">
         
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden ">
        <div className="fixed inset-0 z-10 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#3451a1] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <Link href="/public" className="-m-1.5 p-1.5">
            <span className="sr-only">Créateur de site internet & référencement naturel</span>
            <Image
              alt="Imac montrant le code en react pour creer un site web"
              src={Logo}
              className="h-8 w-auto"

            />
          </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
               
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
