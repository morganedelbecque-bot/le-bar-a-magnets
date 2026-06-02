import mariagesNetLogo from "@/assets/mariages-net-logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3a2623] to-[#422b27] text-[#f3e7dc] py-16 px-6 relative z-60">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="font-serif font-light text-2xl mb-2 text-[#f3e7dc]">
              Le Bar à Magnets
            </div>

            <p className="text-[#d8c3b5] text-sm leading-relaxed">
              Animation événementielle haut de gamme à Toulouse et en Occitanie : bar à
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
                  Animation de mariage à Toulouse
                </a>
              </li>

              <li>
                <a href="/animation-bapteme-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation baptême Toulouse">Animation baptême à Toulouse</a>
              </li>

              <li>
                <a href="/animation-anniversaire-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation anniversaire Toulouse">Animation anniversaire à Toulouse</a>
              </li>

              <li>
                <a href="/animation-baby-shower-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation baby shower Toulouse">Animation baby shower à Toulouse</a>
              </li>

              <li>
                <a href="/animation-evenementielle-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Animation événementielle Toulouse">Animation événementielle à Toulouse</a>
              </li>

              <li>
                <a href="/bar-a-magnets-occitanie" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Bar à magnets Occitanie">Bar à magnets en Occitanie</a>
              </li>

              <li>
                <a href="/livre-dor-audio-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Livre d’or audio mariage Toulouse">Livre d’or audio pour mariage à Toulouse</a>
              </li>

              <li>
                <a href="/livre-dor-video-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Livre d’or vidéo mariage Toulouse">Livre d’or vidéo pour mariage à Toulouse</a>
              </li>

              <li>
                <a href="/telephone-audio-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Téléphone audio mariage Toulouse">Téléphone audio pour mariage à Toulouse</a>
              </li>

              <li>
                <a href="/telephone-video-mariage-toulouse" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Téléphone vidéo mariage Toulouse">Téléphone vidéo pour mariage à Toulouse</a>
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
              Zones desservies
            </div>

            <ul className="space-y-2 text-sm text-[#d8c3b5]">
              <li>
                <a href="/bar-a-magnets-bordeaux" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Bar à magnets Bordeaux">Bar à magnets Bordeaux</a>
              </li>

              <li>
                <a href="/bar-a-magnets-gironde" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Bar à magnets Gironde">Bar à magnets Gironde</a>
              </li>

              <li>
                <a href="/bar-a-magnets-montauban" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Bar à magnets Montauban">Bar à magnets Montauban</a>
              </li>

              <li>
                <a href="/bar-a-magnets-albi" className="block py-2 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto" aria-label="Bar à magnets Albi">Bar à magnets Albi</a>
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

            <a
              href="https://www.mariages.net/animation-mariage/le-bar-a-magnets--e423173"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mx-auto md:mx-0 flex w-fit flex-col items-center md:items-start gap-2 rounded border border-[#d9b56d]/25 bg-[#f3e7dc]/5 px-4 py-3 text-center md:text-left text-sm text-[#d8c3b5] hover:border-[#d9b56d]/50 hover:bg-[#f3e7dc]/10 hover:text-[#f3e7dc] transition-colors duration-200 relative z-70 pointer-events-auto"
              aria-label="Retrouvez Le Bar à Magnets sur Mariages.net"
            >
              <span>Retrouvez Le Bar à Magnets sur Mariages.net</span>
              <img
                src={mariagesNetLogo}
                alt="Mariages.net"
                className="w-[100px] h-auto"
                loading="lazy"
              />
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
