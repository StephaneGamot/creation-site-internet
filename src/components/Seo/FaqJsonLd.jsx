"use client"
import Script from "next/script"

export default function FaqJsonLd() {
  const jsonLd = {
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
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
