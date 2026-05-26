export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3a2623] to-[#422b27] text-[#f3e7dc] py-16 px-6 relative z-60">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-serif font-light text-2xl mb-2 text-[#f3e7dc]">
              Le Bar à Magnets
            </div>

            <p className="text-[#d8c3b5] text-sm leading-relaxed">
              Animation événementielle haut de gamme à Toulouse : bar à
              magnets, livre d’or audio mariage et livre d’or vidéo mariage.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.45em] text-[#d9b56d] mb-4 font-medium">
              Navigation
            </div>

            <ul className="space-y-2 text-sm text-[#d8c3b5]">
              <li>
                <a href="#concept" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Concept">
                  Concept
                </a>
              </li>

              <li>
                <a href="#etapes" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Étapes">
                  Étapes
                </a>
              </li>

              <li>
                <a href="#galerie" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Galerie">
                  Galerie
                </a>
              </li>

              <li>
                <a href="/animation-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation mariage Toulouse">
                  Animation mariage Toulouse
                </a>
              </li>

              <li>
                <a href="/animation-bapteme-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation baptême Toulouse">Animation baptême Toulouse</a>
              </li>

              <li>
                <a href="/animation-anniversaire-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation anniversaire Toulouse">Animation anniversaire Toulouse</a>
              </li>

              <li>
                <a href="/animation-baby-shower-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation baby shower Toulouse">Animation baby shower Toulouse</a>
              </li>

              <li>
                <a href="/animation-evenementielle-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation événementielle Toulouse">Animation événementielle Toulouse</a>
              </li>

              <li>
                <a href="/bar-a-magnets-occitanie" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Bar à magnets Occitanie">Bar à magnets Occitanie</a>
              </li>

              <li>
                <a href="/livre-dor-audio-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Livre d’or audio mariage Toulouse">Livre d’or audio mariage Toulouse</a>
              </li>

              <li>
                <a href="/livre-dor-video-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Livre d’or vidéo mariage Toulouse">Livre d’or vidéo mariage Toulouse</a>
              </li>

              <li>
                <a href="/telephone-audio-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Téléphone audio mariage Toulouse">Téléphone audio mariage Toulouse</a>
              </li>

              <li>
                <a href="/telephone-video-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Téléphone vidéo mariage Toulouse">Téléphone vidéo mariage Toulouse</a>
              </li>

              <li>
                <a href="#contact" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Devis">
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
              className="text-sm text-[#d8c3b5] hover:text-[#f3e7dc] block transition-colors duration-200 py-2 relative z-70 pointer-events-auto"
              aria-label="Email Le Bar à Magnets"
            >
              lebaramagnets@outlook.com
            </a>

            <p className="text-sm text-[#d8c3b5]/90 mt-3">
              Mariages · Baptêmes · Baby showers · Anniversaires · Événements privés · Soirées d’entreprise
            </p>

            <div className="mt-6 text-xs leading-6 text-[#d8c3b5]/75">
              <p>
                Zones desservies : Toulouse, Saint-Jory, Blagnac, Colomiers,
                Balma, Montauban, Albi, Occitanie.
              </p>
              <p className="mt-2">
                Événements : mariage, anniversaire, baptême, baby shower,
                entreprise.
              </p>
            </div>
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
