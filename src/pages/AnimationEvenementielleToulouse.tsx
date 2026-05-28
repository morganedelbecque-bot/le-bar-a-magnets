import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.jpg'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

export default function AnimationEvenementielleToulouse() {
  useEffect(() => {
    document.title = 'Animation événementielle Toulouse | Le Bar à Magnets'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Animation événementielle Toulouse" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] mb-6 font-medium">Animation événementielle à Toulouse</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb]">Événements privés & corporate</h1>
          <div className="gold-divider mx-auto my-8" />
          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">Des solutions sur-mesure pour soirées d'entreprise, lancements et événements privés dans la région toulousaine.</p>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Présentation</h2>
            <p className="text-foreground/80 leading-relaxed">Une animation élégante et professionnelle pour vos événements à Toulouse, pensée pour les exigences des formats corporate.</p>

            <div className="mt-8"><a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm uppercase tracking-[0.12em] text-[#0f0c09] shadow">Demande de devis</a></div>
          </div>

          <div>
            <h3 className="font-semibold text-xl">FAQ</h3>
            <div className="mt-4 space-y-4">
              <details className="bg-white/90 p-4 rounded-[12px] border border-border/30"><summary className="font-medium cursor-pointer">Intervention sur site ?</summary><p className="mt-2 text-foreground/75">Oui, nous intervenons à Toulouse et en Occitanie.</p></details>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  )
}
