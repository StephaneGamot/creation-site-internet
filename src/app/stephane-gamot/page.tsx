import Image from "next/image";
import Me from "@/components/me";
import Skills from "@/components/skills";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Stephane Gamot - Full-Stack developpeur",
	description: "Cette page parle de Stéphane Gamot, ses origines et comment il en venu à être web développeur, les évenements qu'il a du traverser pour y arriver",
	alternates: {
		canonical: "https://www.creation-site-internet.dev/stephane-gamot",
	},
	openGraph: {
		title: "Stephane Gamot - Full-Stack developpeur",
		description:
			"Cette page parle de Stéphane Gamot, ses origines et comment il en venu à être web développeur",
		url: "https://www.creation-site-internet.dev/stephane-gamot",
		siteName: "Stéphane Gamot créateur de sites internet | SEO",
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

export default function Page() {
	return (
		<div>
			<h1>Qui suis je ?</h1>
			<Me />
			<Skills />
		</div>
	);
}
