export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3a2623] to-[#422b27] text-[#f3e7dc] py-16 px-6 relative z-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-serif font-light text-2xl mb-2 text-[#f3e7dc]">
              Le Bar à Magnets
            </div>

            <p className="text-[#d8c3b5] text-sm leading-relaxed">
              Animation événementielle haut de gamme — des souvenirs
              instantanés pour vos plus beaux moments.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.45em] text-[#d9b56d] mb-4 font-medium">
              Navigation
            </div>

            <ul className="space-y-2 text-sm text-[#d8c3b5]">
              <li>
                <a href="#concept" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-50 pointer-events-auto">
                  Concept
                </a>
              </li>

              <li>
                <a href="#etapes" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-50 pointer-events-auto">
                  Étapes
                </a>
              </li>

              <li>
                <a href="#galerie" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-50 pointer-events-auto">
                  Galerie
                </a>
              </li>

              <li>
                <a href="/animation-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-50 pointer-events-auto">
                  Animation mariage Toulouse
                </a>
              </li>

              <li>
                <a href="#contact" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-50 pointer-events-auto">
                  Devis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.45em] text-[#d9b56d] mb-4 font-medium">
              Contact
            </div>

            <a
              href="mailto:lebaramagnets@outlook.com"
              className="text-sm text-[#d8c3b5] hover:text-[#f3e7dc] block transition-colors duration-200 py-2 relative z-50 pointer-events-auto"
            >
              lebaramagnets@outlook.com
            </a>

            <p className="text-sm text-[#d8c3b5]/90 mt-3">
              Mariages · Baptêmes · Baby showers · Anniversaires · Événements privés · Soirées d’entreprise
            </p>
          </div>
        </div>

        <div className="border-t border-[#5a403b] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#d8c3b5]/90">
          <div>
            © {new Date().getFullYear()} Le Bar à Magnets — Tous droits
            réservés.
          </div>

          <div className="font-serif italic text-[#f3e7dc]">
            Souvenirs instantanés ✦
          </div>
        </div>
      </div>
    </footer>
  );
}