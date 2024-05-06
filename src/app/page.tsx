import Hero from "@/components/hero";
import Contact from "@/components/contact";
import CardsGallery from "@/components/CardsGallery";
import TechnologyIUse from "@/components/technologyIUse";
import LastProjects from "@/components/lastProjects";
import type { Metadata } from "next";
import MetadataHomePage from "@/components/metadata/MetadataHomePage";

export const metadata: Metadata = {
	title: "Vous envisagez la création d’un site internet ?",
	description: "Découvrez nos services de création de sites internet, conçus pour dynamiser votre présence en ligne. Expertise en SEO pour améliorer votre visibilité sur Google et attirer un trafic qualifié.",
	alternates: {
		canonical: "https://www.creation-site-internet.dev/web",
	},
};

export default function Home() {
	return (
		<main>
			<h1>Création de site Internet</h1>
			<Hero />
			<CardsGallery />
			<LastProjects />
			<TechnologyIUse />
			<Contact />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHomePage) }} />
		</main>
	);
}