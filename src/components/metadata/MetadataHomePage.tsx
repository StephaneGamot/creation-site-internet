const MetadataHomePage = [
	{
		"@context": "http://schema.org",
		"@type": "WebPage",
		"@id": "https://www.creation-site-internet.dev/",
		url: "https://www.creation-site-internet.dev/",
		name: "Création de Sites Internet sur mesure | Optimisation SEO",
		description:
			"Découvrez nos services de création de sites internet, conçus pour dynamiser votre présence en ligne. Expertise en SEO pour améliorer votre visibilité sur Google et attirer un trafic qualifié.",
		inLanguage: "fr-FR",
		datePublished: "2018-01-01T00:00:00+01:00",
		dateModified: "2023-09-30T11:19:14+01:00",

		sameAs: ["https://www.facebook.com/profile.php?id=100087896780441", "https://twitter.com/whitewo26072430"],
		image: ["https://www.creation-site-internet.dev/webDevAtWork.jpg"],

		offers: [
			{
				"@type": "Offer",
				url: "https://www.creation-site-internet.dev/web",
				price: "Contactez-nous pour un devis personnalisé",
				priceCurrency: "EUR",
				availability: "http://schema.org/InStock",
				validFrom: "2024-02-14",
				category: "https://www.creation-site-internet.dev/web",
				itemOffered: {
					"@type": "Service",
					name: "Création de site web personnalisé",
				},
			},
			{
				"@type": "Offer",
				url: "https://www.creation-site-internet.dev/seo-referencement-naturel",
				price: "Contactez-nous pour un devis personnalisé",
				priceCurrency: "EUR",
				availability: "http://schema.org/InStock",
				validFrom: "2024-02-14",
				category: "https://www.creation-site-internet.dev/seo-referencement-naturel",
				itemOffered: {
					"@type": "Service",
					name: "Référencement SEO Google",
				},
			},
		],
	},
];

export default MetadataHomePage;
