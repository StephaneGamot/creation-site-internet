export default function Footer() {
  return (
    <footer className="bg-[#3451a1] font-body">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className=" text-sm text-gray-200 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-lg font-title font-semibold text-white">
                Création de site web & référencement naturel
              </h3>
            </div>
            <p className="max-w-sm !text-[#C0C5CD]">
              Création de sites internet élégants & stratégie SEO pour valoriser
              votre présence en ligne.
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Stéphane Gamot — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
