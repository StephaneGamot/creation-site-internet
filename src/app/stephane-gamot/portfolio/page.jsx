import Image from "next/image";
import MeContacterButton from "@/components/Buttons/ContactButton";

const projects = [
  {
    title: "E-commerce bien-être",
    category: "E-commerce",
    image: "/images/PortfolioPhotos/port6.webp",
    description: "Une boutique en ligne douce, responsive et optimisée, pour vendre produits et rituels bien-être.",
    alt: "Aperçu d'une boutique bien-être en ligne, au design fluide et naturel."
  },
  {
    title: "Restaurant japonais - Sushi Bar",
    category: "Restauration",
    image: "/images/PortfolioPhotos/Port8.webp",
    description: "Un site raffiné aux couleurs japonaises pour présenter les menus, la réservation en ligne et l’univers du sushi.",
    alt: "Présentation élégante d’un restaurant japonais avec ambiance zen."
  },
  {
    title: "Concessionnaire automobile",
    category: "Automobile",
    image: "/images/PortfolioPhotos/Port18.webp",
    description: "Un site structuré pour la présentation de véhicules neufs/occasions, financements et prise de RDV atelier.",
    alt: "Site professionnel dédié à un concessionnaire de voitures."
  },
  {
    title: "Blog de recettes familiales",
    category: "Blog",
    image: "/images/PortfolioPhotos/port5.webp",
    description: "Un site chaleureux et simple d’utilisation pour partager des recettes accessibles et SEO friendly.",
    alt: "Aperçu d’un blog culinaire avec ambiance familiale et gourmande."
  },
  {
    title: "Site de restaurant bistronomique",
    category: "Restauration",
    image: "/images/PortfolioPhotos/port4.webp",
    description: "Un design immersif et gourmand, avec menu interactif, réservation et ambiance visuelle raffinée.",
    alt: "Site vitrine d’un restaurant bistronomique moderne."
  },
  {
    title: "Massage à Courcelles",
    category: "Bien-être",
    image: "/images/PortfolioPhotos/Port2.webp",
    description: "Création d’un site local et mobile-friendly pour une praticienne en massage à Courcelles.",
    alt: "Page d’accueil d’un cabinet de massage à Courcelles, ambiance douce."
  },
  {
    title: "Site de finance personnelle",
    category: "Finance",
    image: "/images/PortfolioPhotos/port3.webp",
    description: "Un site sobre et structuré pour accompagner les utilisateurs dans la gestion de leurs finances.",
    alt: "Interface d’un site financier clair et intuitif."
  },
  {
    title: "Site de massage bien-être",
    category: "Bien-être",
    image: "/images/PortfolioPhotos/Port1.webp",
    description: "Un site apaisant, élégant et fluide pour promouvoir des soins de massage personnalisés.",
    alt: "Design zen et épuré pour un site de massages bien-être."
  },
  {
    title: "Site d'une fédération de karaté",
    category: "Sport",
    image: "/images/PortfolioPhotos/port7.webp",
    description: "Un site dynamique et fédérateur pour présenter les cours, événements et inscriptions en ligne.",
    alt: "Page dédiée à une fédération de karaté avec planning et infos."
  },
  {
    title: "Agence immobilière locale",
    category: "Immobilier",
    image: "/images/PortfolioPhotos/Port11.webp",
    description: "Site vitrine élégant avec galerie dynamique, géolocalisation et contact rapide pour l’agence.",
    alt: "Site élégant pour une agence immobilière de proximité."
  },
  {
    title: "Agence multimédia créative",
    category: "Création",
    image: "/images/PortfolioPhotos/Port12.webp",
    description: "Un site moderne et coloré pour présenter les services vidéo, photo et création de contenu.",
    alt: "Aperçu d’un site dynamique pour une agence créative."
  },
  {
    title: "Plateforme pour gamers",
    category: "Communauté",
    image: "/images/PortfolioPhotos/Port13.webp",
    description: "Un univers dark & vibrant, pour une communauté de joueurs avec forum, profils et actus.",
    alt: "Interface sombre et immersive pour communauté gaming."
  },
  {
    title: "Vente de canapés en ligne",
    category: "E-commerce",
    image: "/images/PortfolioPhotos/Port14.webp",
    description: "E-commerce design et minimaliste avec navigation fluide, filtres et fiches produits détaillées.",
    alt: "Boutique en ligne pour la vente de canapés design."
  },
  {
    title: "Site portfolio de photographe",
    category: "Portfolio",
    image: "/images/PortfolioPhotos/Port15.webp",
    description: "Un portfolio épuré en pleine page, avec galeries triées et chargement rapide pour la performance.",
    alt: "Présentation visuelle du travail d’un photographe professionnel."
  },
  {
    title: "Application sportive",
    category: "Application",
    image: "/images/PortfolioPhotos/Port16.webp",
    description: "Une interface fluide et interactive pour suivre les performances et programmes d'entraînement.",
    alt: "Interface mobile pour suivi sportif personnalisé."
  },
  {
    title: "Application gestion de personnel",
    category: "Application",
    image: "/images/PortfolioPhotos/Port17.webp",
    description: "Une webapp intuitive avec gestion des absences, planning, contrats et dashboard RH.",
    alt: "Application RH pour la gestion de personnel simplifiée."
  },
  {
    title: "Start-up IA & data science",
    category: "Tech",
    image: "/images/PortfolioPhotos/Port9.webp",
    description: "Un site tech, moderne et clair pour une start-up spécialisée en intelligence artificielle appliquée aux données.",
    alt: "Site vitrine pour une start-up spécialisée en IA."
  },
  {
    title: "Camping en montagne",
    category: "Tourisme",
    image: "/images/PortfolioPhotos/Port10.webp",
    description: "Site nature et immersif pour un camping niché en altitude, avec réservation et infos pratiques.",
    alt: "Site de réservation pour un camping de montagne."
  },
  {
    title: "Astrologie intuitive",
    category: "Spiritualité",
    image: "/images/PortfolioPhotos/Port19.webp",
    description: "Un site mystique, élégant et responsive dédié aux thèmes astraux et consultations astrologiques.",
    alt: "Interface ésotérique pour consultations astrologiques."
  },
  {
    title: "Art martial - 5 principes en Kanjis",
    category: "Culture",
    image: "/images/PortfolioPhotos/Port20.webp",
    description: "Un site épuré pour transmettre la sagesse des arts martiaux japonais à travers leurs 5 grands principes illustrés en kanjis.",
    alt: "Illustration graphique autour de l’art martial et des kanjis."
  },
  {
    title: "Tirage de tarot en ligne",
    category: "Spiritualité",
    image: "/images/PortfolioPhotos/Port21.webp",
    description: "Un univers ésotérique fluide et interactif pour proposer des tirages personnalisés de cartes de tarot.",
    alt: "Plateforme intuitive pour tirages de tarot en ligne."
  }
];

export default function Portfolio() {
  return (
    <div className="px-6 md:px-12 py-16 space-y-24 bg-white text-gray-900 font-body">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-title font-semibold mb-6">Portfolio de réalisations</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Découvrez quelques-uns des projets que j’ai conçus sur-mesure : entre design raffiné, performance et visibilité.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
  key={index}
  aria-label={`Projet : ${project.title}`}
  className="group rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-4 bg-white"
>
  <Image
    src={project.image}
    alt={project.alt}
    width={800}
    height={470}
    className="rounded-xl object-cover mb-4 transition-transform duration-300 md:group-hover:scale-[1.01]"
    aria-describedby={`desc-${index}`}
  />
  <span className="inline-block mb-2 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
    {project.category}
  </span>
  <h2 className="text-xl text-center font-title font-semibold text-gray-800 mb-2">
    {project.title}
  </h2>
  <p id={`desc-${index}`} className="text-sm text-gray-600 leading-relaxed text-center">
    {project.description}
  </p>
</div>

        ))}
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-title font-semibold mb-4">
          Un projet à concrétiser ?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Créons ensemble une solution web qui vous ressemble.
        </p>
        <MeContacterButton />
      </section>
    </div>
  );
}
