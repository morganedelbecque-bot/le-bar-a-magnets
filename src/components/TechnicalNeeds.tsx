const needs = [
  {
    icon: "⚡",
    title: "Besoins techniques",
    text: "Espace 2x2m couvert + prise électrique standard 220V.",
  },
  {
    icon: "◇",
    title: "Déplacements",
    text: "Déplacements possibles dans toute l’Occitanie.",
  },
  {
    icon: "◷",
    title: "Réservation",
    text: "Réservation conseillée plusieurs mois à l’avance pour les mariages d’été.",
  },
  {
    icon: "✨",
    title: "Personnalisation",
    text: "Magnets entièrement personnalisables selon votre événement.",
  },
];

export function TechnicalNeeds() {
  return (
    <section className="bg-[#fbf7f1] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.45em] text-[#c89b6d]">
            Informations pratiques
          </p>

          <h2 className="font-serif text-3xl leading-tight text-[#2b2523] md:text-4xl">
            Besoins techniques pour vos animations en Occitanie
          </h2>
        </div>

        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-[#5f514d]">
          Nos prestations couvrent les baptêmes, anniversaires, baby showers et
          événements d’entreprise à Toulouse et en Occitanie, avec une installation soignée.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {needs.map((need) => (
            <article
              key={need.title}
              className="rounded-[26px] border border-[#eaded6] bg-white/70 p-6 shadow-soft"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d9b56d]/35 bg-[#fff8ef] text-xl text-[#c89b6d]">
                {need.icon}
              </div>

              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">
                {need.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#5f514d]">
                {need.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
