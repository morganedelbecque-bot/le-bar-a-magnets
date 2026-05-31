import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

export default function AnimationBaptemeToulouse() {
  useEffect(() => {
    document.title = 'Animation baptême Toulouse | Le Bar à Magnets'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Animation baptême à Toulouse" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] mb-6 font-medium">Animation baptême à Toulouse</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb]">Baptême & moments précieux</h1>
          <div className="gold-divider mx-auto my-8" />
          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Offrez un souvenir unique lors du baptême avec nos magnets photo personnalisés, conçus pour les familles et les cérémonies intimistes.
          </p>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Présentation</h2>
            <p className="text-foreground/80 leading-relaxed">Nous adaptons notre offre pour créer des magnets élégants, pensés pour l'ambiance de votre baptême à Toulouse ou en Occitanie.</p>

            <h3 className="mt-8 font-semibold text-xl">Pourquoi choisir Le Bar à Magnets</h3>
            <ul className="mt-3 space-y-2 text-foreground/80">
              <li>Design raffiné & présentation soignée</li>
              <li>Impression instantanée et qualité premium</li>
              <li>Options de personnalisation pour les faire-part</li>
            </ul>

            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm uppercase tracking-[0.12em] text-[#0f0c09] shadow transition-all duration-300">Demande de devis</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl">FAQ</h3>
            <div className="mt-4 space-y-4">
              <details className="bg-white/90 p-4 rounded-[12px] border border-border/30"><summary className="font-medium cursor-pointer">Quels formats proposez-vous ?</summary><p className="mt-2 text-foreground/75">Nous proposons plusieurs formats de magnets et finitions selon votre thème.</p></details>
              <details className="bg-white/90 p-4 rounded-[12px] border border-border/30"><summary className="font-medium cursor-pointer">Intervenez-vous à domicile ?</summary><p className="mt-2 text-foreground/75">Oui, nous intervenons à Toulouse et dans la métropole.</p></details>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  )
}
