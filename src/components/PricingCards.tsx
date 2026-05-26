const formulas = [
  {
    title: "Formule Essentielle",
    price: "À partir de 390€",
    details: [
      "Jusqu’à 100 magnets",
      "3h de présence",
      "Fabrication en direct",
      "Installation & matériel inclus",
    ],
  },
  {
    title: "Formule Signature",
    price: "À partir de 590€",
    badge: "La plus choisie",
    featured: true,
    details: [
      "Jusqu’à 150 magnets",
      "4h de présence",
      "Fabrication en direct",
      "Personnalisation incluse",
      "Installation & matériel inclus",
    ],
  },
  {
    title: "Formule Prestige",
    price: "Sur devis premium",
    details: [
      "Magnets en illimité",
      "5h à 6h de présence",
      "Fabrication en direct",
      "Personnalisation incluse",
      "Sachets individuels inclus",
      "Expérience premium",
    ],
  },
];

const complementaryOptions = [
  "Livre d’or audio : +149€",
  "Livre d’or audio premium : +199€",
  "Livre d’or audio & vidéo : +249€",
  "Livre d’or audio & vidéo premium : +299€",
];

export function PricingCards() {
  return (
    <section id="tarifs" className="relative overflow-hidden bg-[#fbf7f1] py-24 px-6 md:py-32">
      <div className="absolute left-8 top-10 h-24 w-24 rounded-full border border-[#d9b56d]/20" />
      <div className="absolute right-6 bottom-12 h-32 w-32 rounded-full border border-[#c48d8d]/20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.45em] text-[#c89b6d]">
            Nos formules événement
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#2b2523] md:text-6xl">
            Une présence élégante pour chaque moment.
          </h2>

          <div className="gold-divider mx-auto my-6" />

          <p className="text-base leading-relaxed text-[#6b625c] md:text-lg">
            Trois expériences pensées pour s’adapter à votre réception, de
            l’essentiel raffiné à la prestation la plus complète.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {formulas.map((formula) => (
            <article
              key={formula.title}
              className={`relative flex min-h-[520px] flex-col rounded-[28px] border bg-white/75 p-8 shadow-soft backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 md:p-10 ${
                formula.featured
                  ? "border-[#d9b56d]/70"
                  : "border-[#eaded6]"
              }`}
            >
              {formula.badge && (
                <div className="absolute right-6 top-6 rounded-full border border-[#d9b56d]/50 bg-[#fff8ef] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#9b6d2f]">
                  {formula.badge}
                </div>
              )}

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4dfda] text-[#c48d8d]">
                ✦
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[#2d1d1a] md:text-4xl">
                {formula.title}
              </h3>

              <p className="mt-4 font-serif text-2xl italic text-[#c89b6d]">
                {formula.price}
              </p>

              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#d9b56d]/45 to-transparent" />

              <ul className="space-y-4 text-sm leading-7 text-[#5f514d]">
                {formula.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 text-[#d9b56d]">✦</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[24px] border border-[#eaded6] bg-[#fff8ef]/80 p-5">
                <h4 className="font-serif text-xl text-[#2d1d1a]">
                  Options complémentaires
                </h4>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5f514d]">
                  {complementaryOptions.map((option) => (
                    <li key={option} className="flex gap-3">
                      <span className="mt-0.5 text-[#d9b56d]">✦</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#9b6d2f]">
                  Options cumulables avec toutes les formules.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#c89b6d] px-7 py-4 text-center text-sm uppercase tracking-[0.22em] text-white shadow-gold transition duration-500 hover:-translate-y-0.5 hover:bg-[#b98a5d]"
              >
                Demander un devis
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
