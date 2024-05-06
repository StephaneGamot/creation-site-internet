import Image from "next/image";
import CvEn from "../../../../public/img/cv/CV-Gamot-Stephane-en.jpg";
import DownloadPdfButton from "@/components/DownloadPdfButton";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Le CV de Stéphane Gamot",
	description: "Le CV de Stéphane Gamot en tant que Full-Stack développeur, ses formations, ses diplomes ...",
	alternates: {
		canonical: "https://www.creation-site-internet.dev/stephane-gamot/cv",
	},
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
