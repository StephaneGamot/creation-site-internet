"use client"

import Script from "next/script";

export default function FullJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Pourquoi créer un site internet sur-mesure ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un site sur-mesure est conçu selon vos besoins, votre activité et vos objectifs, ce qui le rend bien plus performant qu’un template générique."
          }
        },
        {
          "@type": "Question",
          "name": "Le site est-il optimisé pour le SEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. L’optimisation pour le référencement est intégrée dès la conception : structure, balises, vitesse de chargement, accessibilité, etc."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je gérer moi-même mon site une fois livré ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolument. Vous recevez une interface claire, avec ou sans back-office selon vos besoins, et je vous accompagne dans la prise en main."
          }
        },
        {
          "@type": "Question",
          "name": "Combien coûte la création d’un site internet ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le prix dépend de vos besoins (vitrine, e-commerce, blog, etc.). Chaque projet est unique. Un devis personnalisé est proposé après échange."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le délai pour créer un site web ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comptez généralement entre 2 à 5 semaines, selon la complexité et la réactivité pour les contenus. Je m’adapte toujours à vos impératifs."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je avoir une formation pour gérer mon site ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Une formation à distance ou en vidéo est prévue après livraison pour assurer votre autonomie."
          }
        },
        {
          "@type": "Question",
          "name": "Pourquoi investir dans le référencement naturel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le SEO permet d’attirer des visiteurs qualifiés sans payer de publicité. Il améliore la visibilité et la crédibilité de votre site dans la durée."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps faut-il pour voir les résultats SEO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le SEO est un investissement à moyen terme. En général, les premiers résultats apparaissent sous 1 à 3 mois, selon la concurrence."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Création Site Internet",
      "url": "https://www.creation-site-internet.dev",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.creation-site-internet.dev/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Stéphane Gamot",
      "url": "https://www.creation-site-internet.dev/stephane-gamot",
      "jobTitle": "Développeur web & consultant SEO",
      "sameAs": [
        "https://www.linkedin.com/in/stephane-gamot",
        "https://github.com/stephanegamot"
      ]
    }
  ];

  return (
    <Script
      id="full-schema-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
