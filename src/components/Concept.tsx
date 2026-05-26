import magnetHand from "@/assets/magnet-hand.jpg";
import qrFrame from "@/assets/qr-frame.jpg";

export function Concept() {
  return (
    <section
      id="concept"
      className="py-28 md:py-40 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-soft">
            <img
              src={magnetHand}
              alt="Magnet photo personnalisé pour animation invités mariage à Toulouse"
              loading="lazy"
              width="900"
              height="1125"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-10 -right-6 md:-right-16 w-2/3 aspect-square rounded-[28px] overflow-hidden shadow-gold border-4 border-background hidden sm:block">
            <img
              src={qrFrame}
              alt="QR code élégant pour animation événementielle Toulouse et bar à magnets"
              loading="lazy"
              width="700"
              height="700"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">
            Notre concept
          </p>

          <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            Un bar à magnets Toulouse <em className="text-primary">unique</em>,
            créé en direct devant vos invités.
          </h2>

          <div className="gold-divider my-8" />

          <p className="text-foreground/75 leading-relaxed text-lg">
            Le Bar à Magnets transforme chaque photo en magnet rond souvenir,
            fabriqué sur place pendant votre événement. Une animation
            mariage Toulouse chaleureuse, élégante et originale qui rassemble
            naturellement vos invités autour d'une expérience inoubliable.
          </p>

          <p className="mt-6 text-foreground/70 leading-relaxed">
            Chaque invité repart avec un objet précieux, à coller sur son
            frigo — un fragment de votre journée, à garder pour toujours.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { n: "300+", l: "Magnets / soir" },
              { n: "5 min", l: "Par souvenir" },
              { n: "100%", l: "Personnalisé" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-[28px] bg-white/90 p-6 border border-border/20 text-center md:text-left transition-all duration-500 hover:-translate-y-1"
              >
                <div className="font-display text-3xl md:text-4xl text-primary">
                  {s.n}
                </div>

                <div className="text-xs uppercase tracking-[0.28em] text-foreground/70 font-serif mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
