const steps = [
  {
    n: "01",
    t: "Ils scannent le QR code",
    d: "Un cadre élégant posé sur le stand invite vos convives à scanner avec leur téléphone.",
  },
  {
    n: "02",
    t: "Ils envoient leur photo",
    d: "Via WhatsApp, en quelques secondes — selfie, couple, famille, fou rire entre amis.",
  },
  {
    n: "03",
    t: "Le magnet est fabriqué",
    d: "Nous l'imprimons, le découpons et le pressons sous leurs yeux. La magie opère.",
  },
  {
    n: "04",
    t: "Ils repartent avec",
    d: "Un magnet rond 58 mm à coller sur leur frigo. Un souvenir précieux, pour toujours.",
  },
];

export function Steps() {
  return (
    <section id="etapes" className="py-28 md:py-40 bg-[#f5e3dd] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#c8aa83] opacity-90 mb-4">
            Le déroulé
          </p>

          <h2 className="font-serif text-4xl md:text-[3.5rem] text-[#4b372e] leading-[1.02] font-medium tracking-[-0.02em]">
            Comment ça marche
          </h2>

          <div className="mx-auto my-6 h-px w-24 bg-[#e7c98f]/60" />

          <p className="text-[#675949] text-base md:text-lg leading-relaxed">
            Quatre étapes simples pour créer un souvenir tangible et émouvant.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-[32px] bg-[#f7efeb] p-6 md:p-8 border border-[rgba(212,190,170,0.25)] shadow-[0_18px_45px_-30px_rgba(0,0,0,0.14)]"
            >
              <div className="font-serif text-5xl md:text-6xl text-[#e7c98f] mb-4">
                {s.n}
              </div>

              <div className="w-14 h-px bg-[#e7c98f]/35 mb-5" />

              <h3 className="font-serif text-2xl md:text-[1.7rem] mb-3 leading-snug text-[#5d4c44] font-medium">
                {s.t}
              </h3>

              <p className="text-sm text-[#7b6b64] leading-relaxed">
                {s.d}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#e7c98f]/35" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}