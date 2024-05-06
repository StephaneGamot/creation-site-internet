import Image from "next/image";
import Me from "@/components/me";
import Skills from "@/components/skills";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "",
	description: "",
	alternates: {
		canonical: "https://www.creation-site-internet.dev/stephane-gamot",
	},
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
