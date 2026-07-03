import {
  Camera,
  Mail,
  MapPin,
  Music2,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

const services = [
  { label: "Bar à Magnets", href: "/#concept" },
  { label: "Éco-cups personnalisés", href: "/#eco-cups" },
  { label: "Livre d’or audio", href: "/#livre-or-audio-video" },
  { label: "Livre d’or audio & vidéo", href: "/#livre-or-audio-video" },
];

const navigation = [
  { label: "Concept", href: "/#concept" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "FAQ", href: "/#faq" },
  { label: "Demande de devis", href: "/#contact" },
];

const serviceAreas = [
  { label: "Animation mariage Toulouse", href: "/animation-mariage-toulouse" },
  { label: "Animation baptême Toulouse", href: "/animation-bapteme-toulouse" },
  { label: "Animation anniversaire Toulouse", href: "/animation-anniversaire-toulouse" },
  { label: "Animation baby shower Toulouse", href: "/animation-baby-shower-toulouse" },
  { label: "Animation événementielle Toulouse", href: "/animation-evenementielle-toulouse" },
  { label: "Bar à magnets Occitanie", href: "/bar-a-magnets-occitanie" },
  { label: "Bar à magnets Bordeaux", href: "/bar-a-magnets-bordeaux" },
  { label: "Bar à magnets Gironde", href: "/bar-a-magnets-gironde" },
  { label: "Bar à magnets Montauban", href: "/bar-a-magnets-montauban" },
  { label: "Bar à magnets Albi", href: "/bar-a-magnets-albi" },
  { label: "Bar à magnets Haute-Garonne", href: "/bar-a-magnets-haute-garonne" },
  { label: "Bar à magnets Languedoc-Roussillon", href: "/bar-a-magnets-languedoc-roussillon" },
  { label: "Livre d’or audio mariage Toulouse", href: "/livre-dor-audio-mariage-toulouse" },
  { label: "Livre d’or vidéo mariage Toulouse", href: "/livre-dor-video-mariage-toulouse" },
  { label: "Téléphone audio mariage Toulouse", href: "/telephone-audio-mariage-toulouse" },
  { label: "Téléphone vidéo mariage Toulouse", href: "/telephone-video-mariage-toulouse" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: Camera },
  { label: "TikTok", href: "https://www.tiktok.com/", icon: Music2 },
  { label: "Facebook", href: "https://www.facebook.com/", icon: Users },
];

const footerLinkClass =
  "group inline-flex items-center text-sm leading-6 text-[#68534c] transition-all duration-300 ease-out hover:translate-x-1 hover:text-[#9b7048]";

export function Footer() {
  return (
    <footer className="relative z-40 overflow-hidden border-t border-[#9f7d6c]/15 bg-gradient-to-br from-[#eadbd2] via-[#e5d2c8] to-[#ddc7bd] px-6 pb-7 pt-16 text-[#46352f] md:px-10 md:pt-20">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#b98d78]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.25fr] lg:gap-10 lg:pb-16">
          <div className="sm:pr-6">
            <a href="/" className="group inline-flex items-center gap-3" aria-label="Accueil Le Bar à Magnets">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a67a58]/25 bg-white/35 text-[#9b7048] shadow-[0_8px_24px_rgba(86,58,47,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#a67a58]/45 group-hover:bg-white/55">
                <Sparkles aria-hidden="true" size={20} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block font-display text-2xl leading-none tracking-[0.02em] text-[#3f2d28]">Le Bar à Magnets</span>
                <span className="mt-1.5 block text-[9px] uppercase tracking-[0.32em] text-[#9b7048]">Souvenirs instantanés</span>
              </span>
            </a>

            <p className="mt-6 max-w-xs font-serif text-lg leading-7 text-[#68534c]">
              Souvenirs instantanés pour vos plus beaux moments.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#927064]/20 bg-white/30 text-[#68534c] shadow-[0_6px_18px_rgba(86,58,47,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#aa815c]/45 hover:bg-[#f7eee8] hover:text-[#a1744c] hover:shadow-[0_10px_24px_rgba(86,58,47,0.10)]"
                >
                  <Icon aria-hidden="true" size={18} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Prestations">
            <ul className="space-y-3.5">
              {services.map(({ label, href }) => (
                <li key={label}><a href={href} className={footerLinkClass}>{label}</a></li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Navigation">
            <ul className="space-y-3.5">
              {navigation.map(({ label, href }) => (
                <li key={label}><a href={href} className={footerLinkClass}>{label}</a></li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <ul className="space-y-5 text-sm leading-6 text-[#68534c]">
              <li>
                <a href="mailto:lebaramagnets@outlook.com" className="group flex items-start gap-3 transition-colors duration-300 hover:text-[#9b7048]">
                  <Mail aria-hidden="true" size={17} strokeWidth={1.6} className="mt-1 shrink-0 text-[#9b7048] transition-transform duration-300 group-hover:scale-110" />
                  <span className="break-all">lebaramagnets@outlook.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" size={17} strokeWidth={1.6} className="mt-1 shrink-0 text-[#9b7048]" />
                <span>Toulouse &amp; Occitanie</span>
              </li>
              <li className="flex items-start gap-3">
                <Truck aria-hidden="true" size={17} strokeWidth={1.6} className="mt-1 shrink-0 text-[#9b7048]" />
                <span>France entière pour les éco-cups</span>
              </li>
            </ul>
          </FooterColumn>
        </div>

        <nav aria-label="Zones desservies" className="flex flex-col gap-5 border-y border-[#74584f]/15 py-6 md:flex-row md:items-center md:gap-8">
          <div className="flex shrink-0 items-center gap-2.5 font-serif text-base text-[#46332d]">
            <MapPin aria-hidden="true" size={16} strokeWidth={1.6} className="text-[#9b7048]" />
            <span>Zones desservies</span>
          </div>
          <ul className="grid flex-1 gap-x-7 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-xs tracking-wide text-[#68534c] transition-colors duration-300 hover:text-[#9b7048]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-5 pt-7 text-xs text-[#745f57] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Le Bar à Magnets</p>
          <nav aria-label="Informations légales" className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="#mentions-legales" className="transition-colors duration-300 hover:text-[#9b7048]">Mentions légales</a>
            <a href="#politique-confidentialite" className="transition-colors duration-300 hover:text-[#9b7048]">Politique de confidentialité</a>
            <a href="#cgv" className="transition-colors duration-300 hover:text-[#9b7048]">CGV</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-6 font-serif text-xl text-[#46332d]">{title}</h2>
      <div className="mb-6 h-px w-10 bg-gradient-to-r from-[#ad805a]/70 to-transparent" />
      {children}
    </div>
  );
}
