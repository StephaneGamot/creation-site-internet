import Image from "next/image";
import CvEn from "../../../../public/img/cv/CV-Gamot-Stephane-en.jpg";
import DownloadPdfButton from "@/components/DownloadPdfButton";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Le CV de Stéphane Gamot",
	description: "Le CV de Stéphane Gamot en tant que Full-Stack développeur, ses formations, ses diplomes, ses hobbies, ses langues, les langages informatique parlés ...",
	alternates: {
		canonical: "https://www.creation-site-internet.dev/stephane-gamot/cv",
	},
	openGraph: {
		title: "Le CV de Stéphane Gamot",
		description:
			"Le CV de Stéphane Gamot en tant que Full-Stack développeur, ses formations, ses diplomes ..., ses hobbies, ses langues, les langages informatique parlés ...",
		url: "https://www.creation-site-internet.dev/stephane-gamot/cv",
		siteName: "CV du créateur de sites internet | SEO",
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
		<div className="flex flex-col justify-center max-w-[536px] mx-auto  my-8">
			<h1>Mon CV</h1>
			<Image src={CvEn} alt="mon cv" />
			<DownloadPdfButton />
		</div>
	);
}
