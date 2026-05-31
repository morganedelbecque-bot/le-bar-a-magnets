import heroImg from "@/assets/hero-stand.webp";
import heroImgMobile from "@/assets/hero-stand-mobile.webp";

const heroPetals = [
  { left: "2%", top: "-10%", width: 14, height: 20, rotation: 20, fallDuration: 18, swayDuration: 6.8, fallDelay: -8.4, swayDelay: -3.2, background: "rgba(236,158,170,0.85)" },
  { left: "6%", top: "-6%", width: 12, height: 18, rotation: 16, fallDuration: 17, swayDuration: 6.6, fallDelay: -7.2, swayDelay: -2.9, background: "rgba(245,190,198,0.75)" },
  { left: "10%", top: "0%", width: 18, height: 24, rotation: 12, fallDuration: 19, swayDuration: 7.3, fallDelay: -9.5, swayDelay: -3.8, background: "rgba(226,135,150,0.65)" },
  { left: "14%", top: "6%", width: 12, height: 20, rotation: -14, fallDuration: 21, swayDuration: 7.4, fallDelay: -10.2, swayDelay: -4.1, background: "rgba(236,158,170,0.85)" },
  { left: "18%", top: "12%", width: 16, height: 26, rotation: 6, fallDuration: 15, swayDuration: 6.6, fallDelay: -7.0, swayDelay: -2.0, background: "rgba(245,190,198,0.75)" },
  { left: "22%", top: "18%", width: 20, height: 28, rotation: 22, fallDuration: 18, swayDuration: 7.5, fallDelay: -8.7, swayDelay: -3.3, background: "rgba(226,135,150,0.65)" },
  { left: "26%", top: "26%", width: 12, height: 18, rotation: -20, fallDuration: 16, swayDuration: 6.9, fallDelay: -6.4, swayDelay: -2.2, background: "rgba(236,158,170,0.85)" },
  { left: "2%", top: "42%", width: 14, height: 24, rotation: 14, fallDuration: 20, swayDuration: 7.7, fallDelay: -9.8, swayDelay: -3.9, background: "rgba(245,190,198,0.75)" },
  { left: "8%", top: "52%", width: 16, height: 26, rotation: -12, fallDuration: 22, swayDuration: 8.0, fallDelay: -11.2, swayDelay: -4.6, background: "rgba(226,135,150,0.65)" },
  { left: "14%", top: "64%", width: 18, height: 30, rotation: 18, fallDuration: 24, swayDuration: 8.2, fallDelay: -12.1, swayDelay: -5.0, background: "rgba(236,158,170,0.85)" },
  { left: "20%", top: "74%", width: 22, height: 28, rotation: -16, fallDuration: 17, swayDuration: 7.1, fallDelay: -7.6, swayDelay: -2.4, background: "rgba(245,190,198,0.75)" },
  { left: "24%", top: "84%", width: 12, height: 18, rotation: 24, fallDuration: 15, swayDuration: 6.3, fallDelay: -5.1, swayDelay: -1.1, background: "rgba(226,135,150,0.65)" },
  { left: "26%", top: "92%", width: 20, height: 26, rotation: 10, fallDuration: 23, swayDuration: 8.1, fallDelay: -12.3, swayDelay: -4.7, background: "rgba(236,158,170,0.85)" },
  { left: "6%", top: "94%", width: 16, height: 22, rotation: -18, fallDuration: 19, swayDuration: 7.0, fallDelay: -9.9, swayDelay: -3.6, background: "rgba(245,190,198,0.75)" },
  { left: "10%", top: "100%", width: 18, height: 28, rotation: 20, fallDuration: 22, swayDuration: 8.3, fallDelay: -11.5, swayDelay: -4.0, background: "rgba(226,135,150,0.65)" },
  { left: "74%", top: "-12%", width: 12, height: 18, rotation: 20, fallDuration: 18, swayDuration: 7.5, fallDelay: -8.9, swayDelay: -3.1, background: "rgba(236,158,170,0.85)" },
  { left: "78%", top: "-8%", width: 14, height: 22, rotation: -10, fallDuration: 20, swayDuration: 7.4, fallDelay: -9.7, swayDelay: -3.3, background: "rgba(245,190,198,0.75)" },
  { left: "82%", top: "0%", width: 10, height: 16, rotation: 12, fallDuration: 16, swayDuration: 6.4, fallDelay: -5.7, swayDelay: -1.9, background: "rgba(226,135,150,0.65)" },
  { left: "86%", top: "6%", width: 18, height: 26, rotation: 18, fallDuration: 22, swayDuration: 8.2, fallDelay: -11.8, swayDelay: -4.2, background: "rgba(236,158,170,0.85)" },
  { left: "90%", top: "14%", width: 12, height: 20, rotation: -22, fallDuration: 15, swayDuration: 6.2, fallDelay: -6.0, swayDelay: -1.4, background: "rgba(245,190,198,0.75)" },
  { left: "94%", top: "24%", width: 14, height: 24, rotation: 22, fallDuration: 19, swayDuration: 7.6, fallDelay: -10.5, swayDelay: -4.0, background: "rgba(226,135,150,0.65)" },
  { left: "98%", top: "38%", width: 10, height: 16, rotation: 18, fallDuration: 13, swayDuration: 6.0, fallDelay: -4.1, swayDelay: -1.0, background: "rgba(236,158,170,0.85)" },
  { left: "74%", top: "52%", width: 12, height: 18, rotation: -16, fallDuration: 14, swayDuration: 6.3, fallDelay: -6.3, swayDelay: -1.6, background: "rgba(245,190,198,0.75)" },
  { left: "80%", top: "60%", width: 16, height: 22, rotation: 24, fallDuration: 18, swayDuration: 7.3, fallDelay: -8.4, swayDelay: -2.9, background: "rgba(226,135,150,0.65)" },
  { left: "86%", top: "72%", width: 18, height: 26, rotation: -12, fallDuration: 20, swayDuration: 7.9, fallDelay: -10.1, swayDelay: -4.2, background: "rgba(236,158,170,0.85)" },
  { left: "92%", top: "84%", width: 12, height: 18, rotation: 14, fallDuration: 16, swayDuration: 6.5, fallDelay: -5.5, swayDelay: -1.8, background: "rgba(245,190,198,0.75)" },
  { left: "98%", top: "92%", width: 20, height: 28, rotation: -20, fallDuration: 24, swayDuration: 8.0, fallDelay: -12.3, swayDelay: -4.1, background: "rgba(226,135,150,0.65)" },
  { left: "76%", top: "96%", width: 22, height: 26, rotation: 10, fallDuration: 22, swayDuration: 7.8, fallDelay: -11.4, swayDelay: -4.0, background: "rgba(236,158,170,0.85)" },
  { left: "26%", top: "100%", width: 18, height: 24, rotation: -14, fallDuration: 17, swayDuration: 6.6, fallDelay: -7.4, swayDelay: -2.5, background: "rgba(245,190,198,0.75)" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen grid place-items-center overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source media="(max-width: 767px)" srcSet={heroImgMobile} />
        <img
          src={heroImg}
          alt="Bar à magnets Toulouse pour animation mariage premium en Occitanie"
          width="1800"
          height="1200"
          fetchPriority="high"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        </picture>
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 pointer-events-none">
          {heroPetals.map((petal, index) => (
            <span
              key={index}
              className="hero-petal"
              style={{
                left: petal.left,
                top: petal.top,
                width: `${petal.width}px`,
                height: `${petal.height}px`,
                background: petal.background,
                animationDuration: `${petal.fallDuration}s, ${petal.swayDuration}s`,
                animationDelay: `${petal.fallDelay}s, ${petal.swayDelay}s`,
                ["--petal-rotation" as any]: `${petal.rotation}deg`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto py-24">
        <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium animate-fade-in">
          Animation événementielle haut de gamme
        </p>

        <h1 className="font-serif font-medium text-5xl sm:text-[4.75rem] md:text-[5.35rem] lg:text-[5.75rem] text-[#f6eadb] leading-[0.96] text-balance animate-fade-up tracking-[-0.03em]" style={{ textShadow: "0 18px 30px rgba(0, 0, 0, 0.16)" }}>
          Le Bar
          <span className="block text-[#e4c487] mt-2 tracking-[-0.02em]">
            à Magnets
          </span>
        </h1>

        <div className="gold-divider mx-auto my-8 animate-fade-up delay-200" />

        <p className="font-serif italic text-xl md:text-2xl text-[#f6eadb] max-w-2xl mx-auto text-balance animate-fade-up delay-200">
          Bar à magnets à Toulouse, livre d’or audio et vidéo pour vos plus beaux événements.
        </p>

        <p className="mt-6 text-[#f6eadb] max-w-xl mx-auto text-sm md:text-base animate-fade-up delay-300">
          Animation de mariage à Toulouse · Baptêmes · Baby showers · Anniversaires · Événements privés · Soirées d’entreprise
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center animate-fade-up delay-500">
          <a
            href="#contact"
            className="group inline-flex w-full justify-center px-8 py-4 rounded-full bg-[#d9a441] text-[#0f0c09] text-sm uppercase tracking-[0.2em] shadow-[0_18px_35px_-25px_rgba(217,164,65,0.8)] hover:bg-[#e0b95a] transition-all duration-500 hover:-translate-y-0.5 sm:w-auto"
          >
            Demander un devis gratuit
          </a>

          <a
            href="#concept"
            className="inline-flex w-full justify-center px-8 py-4 rounded-full border border-cream/40 bg-white/10 text-sm uppercase tracking-[0.2em] hover:bg-white/15 transition-colors sm:w-auto"
            style={{ color: '#ffffff' }}
          >
            Découvrir le concept
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-shimmer">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-cream/60" />
      </div>
    </section>
  );
}
