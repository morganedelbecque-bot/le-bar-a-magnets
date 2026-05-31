import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

export default function AnimationAnniversaireToulouse() {
  useEffect(() => {
    document.title = 'Animation anniversaire Toulouse | Le Bar à Magnets'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Animation anniversaire à Toulouse" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] mb-6 font-medium">Animation anniversaire à Toulouse</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb]">Anniversaire & fêtes privées</h1>
          <div className="gold-divider mx-auto my-8" />
          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">Créez une expérience interactive et mémorable pour vos invités avec nos magnets photo instantanés et personnalisés.</p>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl mb-4">Présentation</h2>
            <p className="text-foreground/80 leading-relaxed">Une animation modulable selon le thème et le nombre d'invités, idéale pour les anniversaires privés comme pour les soirées corporate à Toulouse.</p>

            <h3 className="mt-8 font-semibold text-xl">Pourquoi nous choisir</h3>
            <ul className="mt-3 space-y-2 text-foreground/80"><li>Equipement haut de gamme</li><li>Equipe professionnelle</li><li>Livraison et installation</li></ul>

            <div className="mt-8"><a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm uppercase tracking-[0.12em] text-[#0f0c09] shadow">Demande de devis</a></div>
          </div>

          <div>
            <h3 className="font-semibold text-xl">FAQ</h3>
            <div className="mt-4 space-y-4">
              <details className="bg-white/90 p-4 rounded-[12px] border border-border/30"><summary className="font-medium cursor-pointer">Quel est le tarif ?</summary><p className="mt-2 text-foreground/75">Nos tarifs varient selon la durée et les options ; demandez un devis personnalisé.</p></details>
              <details className="bg-white/90 p-4 rounded-[12px] border border-border/30"><summary className="font-medium cursor-pointer">Combien de magnets par heure ?</summary><p className="mt-2 text-foreground/75">Nous imprimons en continu, adaptant le rythme à l'événement.</p></details>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  )
}
