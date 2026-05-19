import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.jpg'
import { Gallery } from '@/components/Gallery'
import { ContactForm } from '@/components/ContactForm'

export function AnimationMariageToulousePage() {
  useEffect(() => {
    document.title = 'Animation mariage Toulouse | Le Bar à Magnets'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Animation mariage haut de gamme à Toulouse"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium">
            Animation mariage Toulouse
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb] leading-tight tracking-[-0.02em]">
            Animation mariage
            <span className="block text-[#e4c487] mt-3">Le Bar à Magnets — Toulouse</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Nous proposons une animation mariage élégante et sur-mesure, alliant style, rapidité et souvenirs instantanés pour
            sublimer votre réception à Toulouse.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-[#d9a441] px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#0f0c09] shadow transition-all duration-500 hover:bg-[#e0b95a] sm:w-auto"
            >
              Demander un devis
            </a>
            <a
              href="#pourquoi"
              className="inline-flex justify-center rounded-full border border-cream/40 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#f6eadb] transition-colors duration-300 hover:bg-white/15 sm:w-auto"
            >
              Pourquoi nous choisir
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Présentation</h2>
            <p className="text-foreground/80 leading-relaxed">
              Le Bar à Magnets propose une animation mariage à Toulouse alliant esthétique raffinée et technologie instantanée.
              Nos stands sont conçus pour s'intégrer à votre décoration et offrir à vos invités une expérience mémorable.
            </p>

            <h3 className="mt-8 font-semibold text-xl">Animation magnets mariage</h3>
            <p className="text-foreground/80 leading-relaxed">
              Nous réalisons des photos sur place et imprimons des magnets personnalisés en quelques secondes. Chaque magnet
              est soigné, avec des finitions haut de gamme et des options de personnalisation pour coller à votre thème.
            </p>

            <h3 className="mt-8 font-semibold text-xl">Pourquoi choisir Le Bar à Magnets</h3>
            <ul className="mt-3 space-y-2 text-foreground/80">
              <li>Service clé en main et équipe professionnelle</li>
              <li>Matériel et rubriques design premium</li>
              <li>Personnalisation complète des magnets</li>
              <li>Livraison et installation sur Toulouse</li>
            </ul>

            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm uppercase tracking-[0.12em] text-[#0f0c09] shadow transition-all duration-300">
                Demande de devis
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl">FAQ</h3>
            <div className="mt-4 space-y-4">
              <details className="bg-white/90 p-4 rounded-[12px] border border-border/30">
                <summary className="cursor-pointer font-medium">Quels délais pour réserver ?</summary>
                <p className="mt-2 text-foreground/75">Nous conseillons de réserver au minimum 2 mois à l'avance pour les mariages.</p>
              </details>

              <details className="bg-white/90 p-4 rounded-[12px] border border-border/30">
                <summary className="cursor-pointer font-medium">Peut-on personnaliser les magnets ?</summary>
                <p className="mt-2 text-foreground/75">Oui, nous proposons plusieurs templates et finitions selon votre charte.</p>
              </details>

              <details className="bg-white/90 p-4 rounded-[12px] border border-border/30">
                <summary className="cursor-pointer font-medium">Zone d'intervention</summary>
                <p className="mt-2 text-foreground/75">Nous intervenons principalement sur Toulouse et sa métropole, contactez-nous pour les autres lieux.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  )
}
