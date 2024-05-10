import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Vous envisagez de créer un site internet ?",
	description: "Excellent choix ! Que vous souhaitiez présenter votre entreprise, annoncer un événement important ou lancer une boutique en ligne, je suis là pour y donner vie",
	alternates: {
		canonical: "https://www.creation-site-internet.dev/web",
	},
	openGraph: {
		title: "Vous envisagez de créer un site internet ?",
		description:
			"Excellent choix ! Que vous souhaitiez présenter votre entreprise, annoncer un événement important ou lancer une boutique en ligne, je suis là pour y donner vie",
		url: "https://www.creation-site-internet.dev/web",
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


export default function Page() {
	return (
		<section className="flex-col my-7 max-w-[1280px] mx-auto p-4">
			<h1>Créer un site internet ?</h1>
			<p>
				<strong>Excellent choix !</strong> Que vous souhaitiez présenter votre entreprise, annoncer un événement important ou lancer une <strong>boutique en ligne</strong>, je suis là pour
				donner vie à vos projets avec une approche personnalisée et attentive.
			</p>
            <br />
			<ul>
				<li>
					<strong>&#10052; Un partenariat à chaque étape</strong> : Votre projet mérite une attention particulière. Que ce soit un <strong>site vitrine élégant</strong>, une{" "}
					<strong>landing page dynamique</strong> pour votre prochain événement, ou une
					<strong> plateforme e-commerce robuste</strong>, je vous accompagne pour <strong>développer une solution</strong> qui répond précisément à vos besoins tout en{" "}
					<strong>respectant les standards du web</strong>.
				</li>
				<li>
					<strong>&#10052; Design adaptable à tous les appareils</strong> : Il est crucial que votre site offre une expérience utilisateur impeccable sur tous les appareils. Je conçois donc
					des interfaces qui s&apos;adaptent harmonieusement aux smartphones, tablettes et ordinateurs de bureau, assurant ainsi une accessibilité et une facilité d’utilisation maximales.
				</li>
				<li>
					<strong>&#10052; Dynamisme et interactivité des pages</strong> : Un site web se doit d&apos;être vivant et interactif. Je m&apos;engage à créer des pages qui non seulement
					présentent votre contenu, mais qui invitent également les visiteurs à interagir avec ce que vous proposez.
				</li>
				<li>
					<strong>&#10052; Optimisation pour les moteurs de recherche</strong> : Un site web est un investissement important, et il est essentiel qu&apos;il soit visible. Je travaille à
					optimiser chaque page pour que votre contenu soit non seulement pertinent, mais aussi bien positionné dans les résultats des moteurs de recherche grâce à des pratiques éprouvées de
					SEO.
				</li>
			</ul>
			<p>
				Je serais ravi de discuter plus en détail de la manière dont nous pouvons travailler ensemble pour transformer votre vision en réalité numérique. Contactez-moi à votre convenance pour
				que nous puissions commencer à ébaucher votre projet.
			</p>
			<br />
			<p id="refonte">
				
				<strong>Refonte et modernisation de votre site existant</strong> : Si vous disposez déjà d&apos;un site web sous WordPress mais que vous souhaitez le moderniser pour améliorer ses
				performances et son interactivité, une refonte utilisant des technologies de pointe comme React ou Angular pourrait être la solution idéale. Cette transition vous permettra de
				bénéficier d&apos;une interface utilisateur plus rapide, plus fluide et plus réactive, adaptée aux exigences actuelles du web.</p><p> Je vous accompagnerai dans ce processus de
				transformation, en m&apos;assurant que la nouvelle version de votre site ne se contente pas seulement de répondre aux tendances actuelles, mais qu&apos;elle soit aussi optimisée pour
				le SEO et la convivialité sur tous les appareils. Que vous cherchiez à améliorer l&apos;expérience utilisateur, à intégrer des fonctionnalités plus complexes, ou simplement à
				rafraîchir l&apos;esthétique de votre site, je suis là pour garantir une transition en douceur et efficace.
			</p>
		</section>
	);
}
