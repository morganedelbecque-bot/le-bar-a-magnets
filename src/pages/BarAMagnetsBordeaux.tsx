import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

const faqs = [
  {
    q: 'Proposez-vous un bar à magnets pour un mariage à Bordeaux ?',
    a: 'Oui, Le Bar à Magnets accompagne les mariages à Bordeaux avec une animation photo élégante, pensée pour créer des magnets personnalisés en direct pendant la réception.',
  },
  {
    q: 'L’animation convient-elle aux événements professionnels à Bordeaux ?',
    a: 'Oui, le bar à magnets s’adapte aux soirées d’entreprise, lancements de marque, séminaires et événements privés avec des visuels personnalisés aux couleurs de votre événement.',
  },
  {
    q: 'Les magnets photo sont-ils personnalisables ?',
    a: 'Oui, les magnets photo peuvent intégrer un prénom, une date, un logo, une charte graphique ou un design conçu pour votre mariage ou votre événement à Bordeaux.',
  },
  {
    q: 'Intervenez-vous aussi autour de Bordeaux et en Gironde ?',
    a: 'Oui, nous étudions les demandes à Bordeaux, en Gironde et dans les environs selon la date, le lieu et les conditions logistiques.',
  },
]

export default function BarAMagnetsBordeaux() {
  useEffect(() => {
    document.title = 'Bar à magnets Bordeaux | Animation mariage & événementielle'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Bar à magnets Bordeaux pour animation mariage et événementielle"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium">
            Bar à magnets Bordeaux
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb] leading-tight tracking-[-0.02em]">
            Bar à magnets à Bordeaux
            <span className="block text-[#e4c487] mt-3">pour mariage et événementiel</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Une animation mariage à Bordeaux élégante et conviviale, avec magnets photo personnalisés créés en direct pour offrir à vos invités un souvenir premium.
          </p>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
              Animation photo
            </p>

            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Un bar à magnets pour votre mariage à Bordeaux
            </h2>

            <div className="gold-divider my-6" />

            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Le bar à magnets transforme les photos de vos invités en souvenirs aimantés, fabriqués sur place pendant votre réception. Pour une animation mariage Bordeaux, c’est une expérience fluide, chaleureuse et facile à intégrer dans un vin d’honneur, une soirée ou un brunch.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[#5f514d]">
              Chaque magnet photo est pensé comme un cadeau invité durable : une image prise pendant l’événement, un format soigné, une finition personnalisée et un souvenir que vos proches gardent après la fête.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Animation mariage Bordeaux',
              'Magnets photo Bordeaux',
              'Personnalisation graphique',
              'Souvenir invité premium',
            ].map((item) => (
              <div key={item} className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4dfda] text-[#c48d8d]">
                  +
                </div>
                <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 px-6 md:px-10 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">
              Événementiel
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Une animation événementielle à Bordeaux
            </h2>
          </div>

          <div className="md:col-span-2 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Mariages et fêtes privées</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Le stand attire naturellement les invités, crée des échanges et donne à chacun un souvenir personnalisé de votre journée.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Entreprises et marques</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Pour une animation événementielle Bordeaux, les magnets peuvent reprendre votre identité visuelle, un logo ou le thème de votre soirée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Des magnets photo personnalisés à Bordeaux
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Les magnets photo Bordeaux sont réalisés avec une attention portée au rendu, aux couleurs et à l’harmonie avec votre décoration. L’objectif est de proposer un souvenir utile, esthétique et immédiatement disponible.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Une prestation pensée pour votre lieu de réception
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Domaine, château, salle de réception, hôtel ou espace événementiel : le bar à magnets s’installe dans un format discret et élégant, avec une organisation adaptée au déroulé de votre événement à Bordeaux ou en Gironde.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f1] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">
              Questions fréquentes
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">
              FAQ bar à magnets Bordeaux
            </h2>
          </div>

          <div className="divide-y divide-[#eaded6] border-y border-[#eaded6]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-[28px] px-6 py-5 transition-colors duration-300 hover:bg-[#f8efe9]">
                  <span className="font-serif text-xl font-light leading-snug text-[#2d1d1a] md:text-2xl">
                    {faq.q}
                  </span>
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d9b56d] text-xl leading-none text-[#d9b56d] transition-transform duration-500 group-open:rotate-45 group-open:bg-[#d9b56d]/10">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 pr-14 font-serif text-base leading-8 text-[#5f514d]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  )
}
