'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Portrait from "./../../../public/images/stephane.webp"
import Skills from '@/components/Skills'
import ContactButton from '@/components/Buttons/ContactButton'
import Citation from '@/components/Citations/Citation'

export default function QuiSuisJe() {
  const timeline = [
    {
      year: '2008',
      text: 'Premiers projets de développement web avec Joomla et WordPress.'
    },
    {
      year: '2014',
      text: 'Découverte des bases solides du web avec HTML et CSS, posant les fondations d’un code structuré et clair.'
    },
    {
      year: '2018',
      text: 'Approfondissement en JavaScript moderne et premiers projets orientés SEO pour améliorer la visibilité des sites.'
    },
    {
      year: '2019',
      text: 'Adoption de React et intégration des principes d’accessibilité pour des interfaces plus inclusives.'
    },
    {
      year: '2020',
      text: 'Exploration de Next.js pour allier performance, SEO et architecture robuste côté serveur.'
    },
    {
      year: '2021',
      text: 'Utilisation de Bootstrap puis Tailwind CSS pour créer des interfaces élégantes, cohérentes et réactives.'
    },
    {
      year: '2022',
      text: 'Intégration de Git pour le versioning et mise en place de tests front-end avec Jasmine.'
    },
    {
      year: '2023',
      text: 'Montée en compétences back-end avec Java, Spring Boot, MySQL et déploiement via des pipelines CI/CD.'
    },
    {
      year: '2024',
      text: 'Accompagnement stratégique en SEO, accessibilité avancée et conception de sites web sur-mesure.'
    }
  ];
  
    
      const skills = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Java', 'MySQL', 'WordPress', 'SEO', 'Accessibilité', 'Angular', 'Git', 'Framer Motion'
      ];
    
      return (
        <div className="px-6 md:px-12 py-16 space-y-24 bg-white text-gray-900 font-body">
    
          {/* Portrait + Intro */}
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

           <Citation id={3} />
          {/* Timeline */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-title font-semibold mb-8 text-center">Mon parcours</h2>
            <div className="space-y-6 border-l-2 border-primary pl-6">
              {timeline.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-3 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
                  <p className="text-sm text-gray-700">
                    <strong>{step.year}</strong> — {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
    
        <Skills />
    
          {/* Philosophie */}
          <section className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-title font-semibold">Ce qui m’anime</h2>
            <p className="text-gray-700 text-lg">
              Offrir à chaque client une solution sur-mesure, une vitrine digitale à son image et des bases solides pour sa visibilité.
            </p>
            <p className="text-sm text-gray-600">
              Rigueur, clarté, écoute, transmission : ce sont les piliers de ma manière de travailler.<br/> Mon ambition est que votre site devienne un véritable levier, pas juste un outil.
            </p>
          </section>
    
          {/* CTA final */}
          <section className="text-center">
            <h2 className="text-3xl font-title font-semibold mb-4">Et si on construisait votre projet ensemble ?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Prenons quelques minutes pour en discuter sereinement.
            </p>
            <ContactButton />
          </section>
    
        </div>
      )
    }
    