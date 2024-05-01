import Hero from "@/components/hero";
import Contact from "@/components/contact";
import CardsGallery from "@/components/CardsGallery";
import TechnologyIUse from "@/components/technologyIUse";
import LastProjects from "@/components/lastProjects";

export default function Home() {
	return (
		<main>
			<Hero />
			<CardsGallery />
			<LastProjects />
			<TechnologyIUse />
			<Contact />
		</main>
	);
}
