"use client";
import Script from "next/script";

export default function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Pourquoi créer un site internet sur-mesure ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un site sur-mesure est conçu selon vos besoins, votre activité et vos objectifs, ce qui le rend bien plus performant qu’un template générique.",
        },
      },
      {
        "@type": "Question",
        name: "Le site est-il optimisé pour le SEO ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. L’optimisation pour le référencement est intégrée dès la conception : structure, balises, vitesse de chargement, accessibilité, etc.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je gérer moi-même mon site une fois livré ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. Vous recevez une interface claire, avec ou sans back-office selon vos besoins, et je vous accompagne dans la prise en main.",
        },
      },
    ],
  };

  return (
    <Script
      type="application/ld+json"
      id="faq-schema"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
