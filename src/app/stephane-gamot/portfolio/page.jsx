"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MeContacterButton from "@/components/Buttons/ContactButton";

const projects = [
  {
    title: "Refonte d’un site pour thérapeute",
    image: "/images/PortfolioPhotos/Port1.webp",
    description:
      "Un site doux et élégant pour valoriser une praticienne bien-être, avec optimisation SEO locale.",
    link: "/project/therapeute",
  },
  {
    title: "Création d’un blog culinaire",
    image: "/images/PortfolioPhotos/Port2.webp",
    description:
      "Un univers gourmand, responsive et facile à gérer, avec un accent sur le référencement naturel.",
    link: "/project/blog-cuisine",
  },
  {
    title: "Site e-commerce minimaliste",
    image: "/images/PortfolioPhotos/Port3.webp",
    description:
      "Une boutique en ligne fluide, épurée et mobile-first, avec intégration Stripe.",
    link: "/project/ecommerce",
  }, {
    title: "Refonte d’un site pour thérapeute",
    image: "/images/PortfolioPhotos/Port4.webp",
    description:
      "Un site doux et élégant pour valoriser une praticienne bien-être, avec optimisation SEO locale.",
    link: "/project/therapeute",
  },
  {
    title: "Création d’un blog culinaire",
    image: "/images/PortfolioPhotos/Port5.webp",
    description:
      "Un univers gourmand, responsive et facile à gérer, avec un accent sur le référencement naturel.",
    link: "/project/blog-cuisine",
  },
  {
    title: "Site e-commerce minimaliste",
    image: "/images/PortfolioPhotos/Port6.webp",
    description:
      "Une boutique en ligne fluide, épurée et mobile-first, avec intégration Stripe.",
    link: "/project/ecommerce",
  },
];

export default function Portfolio() {
  return (
    <div className="px-6 md:px-12 py-16 space-y-24 bg-white text-gray-900 font-body">
      {/* Intro */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-title font-semibold mb-6"
        >
          Portfolio de réalisations
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700">
          Découvrez quelques-uns des projets que j’ai conçus sur-mesure : entre
          design raffiné, performance et visibilité.
        </p>
      </section>

      {/* Projets */}
      <section className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#f9f9f9] p-4 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <Link href={project.link}>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="rounded-xl object-cover mb-4"
              />
              <h3 className="text-xl font-title font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* CTA Final */}
      <section className="text-center">
        <h2 className="text-3xl font-title font-semibold mb-4">
          Un projet à concrétiser ?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Créons ensemble une solution web qui vous ressemble.
        </p>
        <MeContacterButton />
      </section>
    </div>
  );
}
