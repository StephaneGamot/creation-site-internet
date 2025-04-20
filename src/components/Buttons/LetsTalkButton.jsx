import Link from "next/link";

export default function LetsTalkButton () {
  return (
    <Link
      href="/contact"
      role="button"
      className="inline-block bg-[#43986b] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#43986b]"
      aria-label="Discutons ensemble lien qui permet de rentrer en conatct avec Stéphane Gamot"
    >
      discutons de votre projet
    </Link>
  );
}
