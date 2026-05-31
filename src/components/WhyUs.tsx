import ambiance from "@/assets/hero-stand.webp";

const reasons = [
  {
    t: "Souvenir tangible",
    d: "Un objet précieux à conserver — bien plus qu'une photo perdue dans un téléphone.",
  },
  {
    t: "Animation originale",
    d: "Vos invités vivent une expérience qu'ils n'oublieront pas, et qu'on n'a vu nulle part ailleurs.",
  },
  {
    t: "Convivialité instantanée",
    d: "Le stand attire naturellement, crée des rencontres, des fous rires et de jolies photos.",
  },
  {
    t: "100% personnalisé",
    d: "Chaque magnet est unique : leur photo, leur instant, leur souvenir.",
  },
  {
    t: "Stand élégant",
    d: "Décor floral, nappe rose poudré, lumières chaudes — un vrai bijou visuel.",
  },
  {
    t: "Sans effort pour vous",
    d: "Nous arrivons, installons, animons, rangeons. Vous profitez de votre journée.",
  },
];

export function WhyUs() {
  return (
    <section
      id="pourquoi"
      className="relative py-32 md:py-44 overflow-hidden bg-[#f8f1ec]"
    >
      <div className="absolute inset-0">
        <img
          src={ambiance}
          alt="Animation premium mariage avec bar à magnets Toulouse"
          loading="lazy"
          width="1800"
          height="1200"
          className="w-full h-full object-cover opacity-[0.28]"
        />

        <div className="absolute inset-0 bg-[#f8f1ec]/65" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-24">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#d9b56d] opacity-90 mb-4 font-medium">
            Pourquoi nous choisir
          </p>

          <h2 className="font-serif font-medium text-4xl md:text-[3.75rem] text-[#2d1d1a] leading-[1.02] tracking-[-0.02em]">
            Une animation qui fait{" "}
            <em className="font-serif not-italic text-[#c48d8d] italic">l'unanimité</em>.
          </h2>

          <div className="mx-0 my-6 h-px w-24 bg-[#d9b56d]/40" />

          <p className="text-[#5f514d] text-lg leading-relaxed">
            Plus qu'une animation premium mariage : un véritable moment de
            partage qui marque les esprits et laisse une trace dans la maison
            de chacun, à Toulouse comme en Occitanie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white/20 border border-[#eaded6] rounded-[24px] overflow-hidden backdrop-blur-[2px]">
          {reasons.map((r) => (
            <div
              key={r.t}
              className="bg-white/20 p-10 border border-[#eaded6] rounded-[24px] transition-colors duration-500 group shadow-none"
            >
              <div className="w-10 h-10 rounded-full bg-[#d9b56d]/15 flex items-center justify-center mb-6 transition-colors duration-500">
                <div className="w-2 h-2 rounded-full bg-[#d9b56d]" />
              </div>

              <h3 className="font-serif text-2xl md:text-[1.75rem] mb-3 text-[#2d1d1a] leading-snug font-medium">
                {r.t}
              </h3>

              <p className="text-sm text-[#5f514d] leading-8">
                {r.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
