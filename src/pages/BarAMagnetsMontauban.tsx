import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

const faqs = [
  {
    q: 'Proposez-vous un bar à magnets pour un mariage à Montauban ?',
    a: 'Oui, Le Bar à Magnets étudie les demandes à Montauban et en Tarn-et-Garonne pour les mariages, fêtes privées et réceptions qui souhaitent une animation photo élégante avec souvenirs personnalisés.',
  },
  {
    q: 'Comment fonctionne l’animation mariage à Montauban ?',
    a: 'Les invités participent naturellement pendant la réception : leurs photos sont transformées en magnets personnalisés, puis remises sur place comme souvenir immédiat de votre mariage.',
  },
  {
    q: 'Peut-on personnaliser les magnets photo pour un événement à Montauban ?',
    a: 'Oui, les magnets photo Montauban peuvent reprendre vos prénoms, la date, un logo, une couleur dominante ou un univers graphique cohérent avec votre décoration.',
  },
  {
    q: 'Le bar à magnets convient-il aux événements professionnels en Tarn-et-Garonne ?',
    a: 'Oui, c’est une animation événementielle Montauban adaptée aux soirées d’entreprise, inaugurations, séminaires, salons et événements de marque en Tarn-et-Garonne.',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function BarAMagnetsMontauban() {
  useEffect(() => {
    document.title = 'Bar à magnets Montauban | Animation mariage & événementielle'
    window.scrollTo(0, 0)

    const existingSchema = document.getElementById('faq-montauban-structured-data')
    existingSchema?.remove()

    const schema = document.createElement('script')
    schema.id = 'faq-montauban-structured-data'
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify(faqStructuredData)
    document.head.appendChild(schema)

    return () => {
      document.getElementById('faq-montauban-structured-data')?.remove()
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Bar à magnets Montauban pour animation mariage et événementielle"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium">
            Bar à magnets Montauban
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb] leading-tight tracking-[-0.02em]">
            Bar à magnets à Montauban
            <span className="block text-[#e4c487] mt-3">pour mariage et événementiel</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Une animation mariage à Montauban pensée pour créer des magnets photo personnalisés en direct, avec un souvenir élégant pour vos invités en Tarn-et-Garonne.
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
              Un bar à magnets pour votre mariage à Montauban
            </h2>

            <div className="gold-divider my-6" />

            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Le bar à magnets apporte une animation simple, élégante et conviviale aux réceptions montalbanaises. Pendant votre mariage, vos invités participent sans contrainte et repartent avec un magnet personnalisé fabriqué autour de leur photo.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[#5f514d]">
              Pour une animation mariage Montauban, l’expérience fonctionne aussi bien pendant un vin d’honneur, une soirée dansante ou une réception familiale dans un domaine du Tarn-et-Garonne.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Animation mariage Montauban',
              'Magnets photo Montauban',
              'Souvenir invité personnalisé',
              'Installation soignée',
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
              Une animation événementielle à Montauban
            </h2>
          </div>

          <div className="md:col-span-2 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Réceptions en Tarn-et-Garonne</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Le stand s’intègre aux domaines, salles de réception, maisons de famille et lieux événementiels autour de Montauban avec une présence discrète.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Entreprises et événements locaux</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Pour une animation événementielle Montauban, les magnets peuvent intégrer votre logo, un message de marque ou une création graphique propre à votre événement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Des magnets photo personnalisés à Montauban
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Les magnets photo Montauban sont conçus comme de vrais souvenirs invités : format aimanté, visuel personnalisé, rendu harmonieux et finition adaptée au style de votre mariage ou événement professionnel.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Une prestation pensée pour votre lieu de réception
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              À Montauban comme dans le Tarn-et-Garonne, le bar à magnets est organisé pour respecter le rythme de votre journée : installation, accueil des invités, personnalisation et remise des souvenirs pendant l’événement.
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
              FAQ bar à magnets Montauban
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
