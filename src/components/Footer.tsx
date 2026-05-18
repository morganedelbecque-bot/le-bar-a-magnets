export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3a2623] to-[#422b27] text-[#f3e7dc] py-16 px-6">
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
                <a href="#concept" className="hover:text-[#f3e7dc] transition-colors duration-200">
                  Concept
                </a>
              </li>

              <li>
                <a href="#etapes" className="hover:text-[#f3e7dc] transition-colors duration-200">
                  Étapes
                </a>
              </li>

              <li>
                <a href="#galerie" className="hover:text-[#f3e7dc] transition-colors duration-200">
                  Galerie
                </a>
              </li>

              <li>
                <a href="/animation-mariage-toulouse" className="hover:text-[#f3e7dc] transition-colors duration-200">
                  Animation mariage Toulouse
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#f3e7dc] transition-colors duration-200">
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
              href="mailto:lebaramagnets@gmail.com"
              className="text-sm text-[#d8c3b5] hover:text-[#f3e7dc] block transition-colors duration-200"
            >
              lebaramagnets@gmail.com
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