import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#concept", label: "Concept" },
    { href: "#etapes", label: "Étapes" },
    { href: "#galerie", label: "Galerie" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#livre-or-audio-video", label: "Audio & Vidéo" },
    { href: "/#eco-cups", label: "Éco-cups" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Devis" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-cream/95 border-b border-cream/30 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between h-20">
        <a href="/" className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-medium tracking-[0.06em] text-cream">
            Le Bar à Magnets
          </span>
          <span className="text-[10px] uppercase tracking-[0.32em] text-gold mt-1">
            Souvenirs instantanés
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm tracking-wide ${scrolled ? "text-foreground" : "text-cream/90"} hover:text-cream relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full`}
            >
              {n.label}
            </a>
          ))}

          <a
            href="#contact"
            className="px-8 py-2.5 rounded-full bg-[#2d1f1c] text-[#f6eadb] text-sm font-medium tracking-wide shadow-sm transition-colors duration-200 hover:bg-[#3b2925]"
          >
            Demander un devis
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden p-2 text-cream"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-px bg-cream transition-all ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-px bg-cream transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px bg-cream transition-all ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-cream/40 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base py-2 border-b border-border/50"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
