import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export const metadata: Metadata = {
	metadataBase: new URL("https://www.creation-site-internet.dev"),
	title: "Massage relaxant Courcelles | Shiatsu & Réflexologie Plantaire",
	description: "Votre massage relaxant à Courcelles vous permettra de vous détendre pleinement. Venez également essayer une séance de Shiatsu - Reiki - Reflexologie plantaire",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "La voie du bien-être | Détente et Relaxation",
		description: "Profitez d’un massage unique à Courcelles. Shiatsu, Reiki, et relaxation profonde vous attendent.",
		url: "https://www.creation-site-internet.dev",
		siteName: "La voie du bien-être",
		locale: "fr_BE",
		type: "website",
		images: [
			{
				url: "https://lavoiedubienetre.be/img/OpenGraph/OG-image-massage-Courcelles.jpg",
				width: 1200,
				height: 627,
				alt: "La voie du bien-être à Courcelles",
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
		title: "La voie du bien-être | Shiatsu Reiki Massage à Courcelles",
		card: "summary_large_image",
		images: "https://lavoiedubienetre.be/img/OpenGraph/OG-image-massage-Courcelles.jpg",
		site: "@voiedubienetre",
		description: "Centre de massage à Courcelles | Shiatsu Reiki Reflexologie Plantaire | La voie du bien-être",
	},
	verification: {
		google: "google1b18195b39af5559",
		yandex: "",
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
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
