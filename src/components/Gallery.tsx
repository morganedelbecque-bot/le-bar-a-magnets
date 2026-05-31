import hero from "@/assets/hero-stand.webp";
import magnets from "@/assets/magnets-closeup.jpg";
import making from "@/assets/making-magnets.jpg";
import guests from "@/assets/guests.jpg";
import chalkboard from "@/assets/chalkboard.jpg";
import ambiance from "@/assets/ambiance.jpg";
import qr from "@/assets/qr-frame.jpg";
import hand from "@/assets/magnet-hand.jpg";

const items = [
  { src: hero, alt: "Stand complet de bar à magnets pour mariage à Toulouse", span: "md:col-span-2 md:row-span-2" },
  { src: magnets, alt: "Magnets ronds personnalisés pour souvenirs invités mariage", span: "" },
  { src: making, alt: "Fabrication de magnets en direct pour une animation événementielle à Toulouse", span: "" },
  { src: chalkboard, alt: "Tableau noir avec magnets souvenirs pour mariage en Occitanie", span: "md:col-span-2" },
  { src: guests, alt: "Invités autour du stand pour une animation de mariage à Toulouse", span: "" },
  { src: hand, alt: "Magnet souvenir tenu en main pour un bar à magnets à Toulouse", span: "" },
  { src: qr, alt: "QR code dans cadre doré pour animation invités mariage", span: "" },
  { src: ambiance, alt: "Ambiance chaleureuse de mariage avec animation premium", span: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galerie" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">
            Galerie
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Galerie animation de mariage à Toulouse
          </h2>

          <div className="gold-divider mx-auto my-6" />

          <p className="text-foreground/70">
            Plongez dans l'ambiance d'un Bar à Magnets installé pour une animation événementielle à Toulouse, un mariage, un baptême ou une soirée exceptionnelle.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-4 grid-flow-dense">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer shadow-soft ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width="800"
                height="600"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-4 left-4 right-4 text-cream text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {it.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
