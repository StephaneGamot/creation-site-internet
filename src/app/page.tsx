import Hero from "@/components/hero";
import Contact from "@/components/contact";
import CardsGallery from "@/components/CardsGallery";
import TechnologyIUse from "@/components/technologyIUse";
import LastProjects from "@/components/lastProjects";
import TarifContainer from "@/components/tarifs/tarifContainer";
import type { Metadata } from "next";
import MetadataHomePage from "@/components/metadata/MetadataHomePage";

export const metadata: Metadata = {
	title: "Vous envisagez la création d’un site internet avec un SEO optimal ?",
	description: "Découvrez nos services de création de site internet, conçus pour dynamiser votre présence en ligne. Expertise en SEO pour améliorer votre visibilité sur Google",
	alternates: {
		canonical: "https://www.creation-site-internet.dev/",
	},	openGraph: {
		title: "Vous envisagez la création d’un site internet avec un SEO optimal ?",
		description:
			"Découvrez nos services de création de sites internet, conçus pour dynamiser votre présence en ligne.",
		url: "https://www.creation-site-internet.dev/",
		siteName: "Création de sites internet | SEO",
		locale: "fr_BE",
		type: "website",
		images: [
			{
				url: "https://www.creation-site-internet.dev/webDevAtWork.jpg",
				width: 1200,
				height: 627,
				alt: "Le créateur de site internet",
			},
		],
	}
};

export default function Home() {
	return (
		<main>
			<h1>Création de site Internet avec un SEO optimal</h1>
			<Hero />
			<CardsGallery />
			<LastProjects />
			<TechnologyIUse />
			<Contact />
			<TarifContainer />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHomePage) }} />
		</main>
	);
}