import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.jpg'
import { Gallery } from '@/components/Gallery'
import { ContactForm } from '@/components/ContactForm'

const reasons = [
  {
    title: 'Animation mariage Toulouse sur-mesure',
    description:
      'Un service pensé pour les mariés qui souhaitent une expérience photo élégante, immersive et parfaitement orchestrée.',
  },
  {
    title: 'Bar à magnets Toulouse raffiné',
    description:
      'Des magnets photo personnalisés et un stand stylé qui ajoutent une touche précieuse à votre réception.',
  },
  {
    title: 'Ambiance invités exceptionnelle',
    description:
      'Une animation invités mariage qui capte les sourires, crée des souvenirs et dynamise chaque instant.',
  },
  {
    title: 'Souvenirs instantanés de luxe',
    description:
      'Des magnets photo personnalisés remis sur place, avec une finition soignée et un service haut de gamme.',
  },
]

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
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-90 mb-6 font-medium animate-fade-in">
            Animation mariage Toulouse
          </p>

          <h1 className="font-serif text-5xl md:text-[4.5rem] lg:text-[5.75rem] text-[#f6eadb] leading-[0.95] tracking-[-0.03em] text-balance animate-fade-up">
            Bar à magnets
            <span className="block text-[#e4c487] mt-3">pour votre mariage à Toulouse</span>
          </h1>

          <div className="gold-divider mx-auto my-8 animate-fade-up delay-200" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed text-balance animate-fade-up delay-200">
            Offrez à vos invités une animation invités mariage unique avec des magnets photo personnalisés,
            un bar à magnets Toulouse élégant et une expérience premium qui fait vibrer votre réception.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-up delay-400">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-[#d9a441] px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#0f0c09] shadow-[0_18px_35px_-25px_rgba(217,164,65,0.8)] transition-all duration-500 hover:bg-[#e0b95a] hover:-translate-y-0.5"
            >
              Réserver ma date
            </a>
            <a
              href="#pourquoi"
              className="inline-flex justify-center rounded-full border border-cream/40 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#f6eadb] transition-colors duration-300 hover:bg-white/15"
            >
              Pourquoi nous choisir
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">
              Mariage Toulouse
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">
              Une animation mariage Toulouse qui sublime vos invités et vos souvenirs.
            </h2>
          </div>

          <div className="grid gap-8 text-foreground/80 text-base leading-relaxed md:grid-cols-2">
            <p>
              Le Bar à Magnets apporte une animation mariage Toulouse premium, parfaitement adaptée à l&apos;atmosphère
              chic de votre réception. Notre bar à magnets Toulouse est pensé pour vos invités : rapide, élégant et
              porteur d&apos;émotion.
            </p>
            <p>
              Entre ambiance feutrée, magnets photo personnalisés et service attentionné, notre animation invités mariage
              capture les regards et retranscrit la magie de votre journée. Un souvenir tangible et raffiné, dès l&apos;instant où
              les photos sont remises.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-[32px] border border-border/40 bg-white/90 p-8 shadow-soft">
              <h3 className="font-semibold text-xl text-foreground mb-3">Animation mariage Toulouse</h3>
              <p className="text-foreground/75 leading-relaxed">
                Une animation sur mesure pour chaque mariage, avec des magnets personnalisés et un service clé en main.
              </p>
            </article>
            <article className="rounded-[32px] border border-border/40 bg-white/90 p-8 shadow-soft">
              <h3 className="font-semibold text-xl text-foreground mb-3">Bar à magnets Toulouse</h3>
              <p className="text-foreground/75 leading-relaxed">
                Des installations soignées, des magnets photo instantanés et une expérience mémorable surtout pour vos invités.
              </p>
            </article>
            <article className="rounded-[32px] border border-border/40 bg-white/90 p-8 shadow-soft">
              <h3 className="font-semibold text-xl text-foreground mb-3">Magnets photo personnalisés</h3>
              <p className="text-foreground/75 leading-relaxed">
                Des souvenirs élégants créés sur place, avec un design à votre image et une finition haut de gamme.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="pourquoi" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Pourquoi choisir Le Bar à Magnets</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance mb-6">
              Le choix évident pour un mariage signé Toulouse.
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed max-w-2xl">
              Nous conjuguons l&apos;élégance d&apos;une animation mariage Toulouse avec le raffinement d&apos;un service haut de gamme,
              pour des souvenirs qui durent bien après la fête.
            </p>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-[32px] border border-border/30 bg-[#fffaf3] p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-foreground/75 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f2ec] py-20 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Prêt à créer le souvenir parfait ?</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance mb-6">
            Offrez à vos invités une animation invités mariage inoubliable.
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-10 py-4 text-sm uppercase tracking-[0.22em] text-[#0f0c09] shadow-[0_18px_30px_-24px_rgba(217,164,65,0.8)] transition-all duration-500 hover:bg-[#e0b95a] hover:-translate-y-0.5"
          >
            Contactez-nous
          </a>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  )
}
