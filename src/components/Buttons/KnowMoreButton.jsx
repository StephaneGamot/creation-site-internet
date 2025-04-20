import Link from "next/link";

export default function KnowMoreButton() {
  return (
    <Link
      href="/web"
      role="button"
      className="inline-block bg-[#43986b] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#43986b]"
      aria-label="Lien permtant d'aller à la page parlant de création internet"
    >
      en savoir plus
    </Link>
  );
}
