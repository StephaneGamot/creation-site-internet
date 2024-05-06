import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	userScalable: true,
	themeColor: "black",
	interactiveWidget: "resizes-visual",
};

const inter = Inter({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://www.creation-site-internet.dev"),
	title: "Création de Sites Internet sur mesure | Optimisation SEO",
	description:
		"Découvrez nos services de création de sites internet, conçus pour dynamiser votre présence en ligne. Expertise en SEO pour améliorer votre visibilité sur Google et attirer un trafic qualifié.",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "Création de Sites Internet sur mesure | Optimisation SEO",
		description:
			"Découvrez nos services de création de sites internet, conçus pour dynamiser votre présence en ligne. Expertise en SEO pour améliorer votre visibilité sur Google et attirer un trafic qualifié.",
		url: "https://www.creation-site-internet.dev",
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
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Création de Sites Internet sur mesure | Optimisation SEO",
		card: "summary_large_image",
		images: "https://www.creation-site-internet.dev/webDevAtWork.jpg",
		site: "@whitewo26072430",
		description:
			"Découvrez nos services de création de sites internet, conçus pour dynamiser votre présence en ligne. Expertise en SEO pour améliorer votre visibilité sur Google et attirer un trafic qualifié.",
	},
	verification: {
		google: "j8qoU_tCtrTwhMQJ0ort9qNHsdtEkToBWq_w340ggW0"
	},
	alternates: {
		canonical: "https://www.creation-site-internet.dev",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={garamond.className}>
				<Header />
				{children}
				<Footer />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
