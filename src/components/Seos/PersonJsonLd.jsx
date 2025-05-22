"use client"
import Script from "next/script"

export default function PersonJsonLd() {
  const jsonLd = {
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

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
