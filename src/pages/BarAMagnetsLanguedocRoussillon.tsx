import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

const metaDescription =
  'Bar à magnets Languedoc-Roussillon : animation mariage et événementielle avec magnets photo personnalisés à Perpignan, Narbonne, Carcassonne, Béziers, Montpellier et Sète.'

const faqs = [
  {
    q: 'Proposez-vous un bar à magnets pour un mariage en Languedoc-Roussillon ?',
    a: 'Oui, Le Bar à Magnets se déplace en Languedoc-Roussillon pour les mariages qui souhaitent une animation photo élégante, participative et facile à intégrer au vin d’honneur, à la soirée ou à un espace photo dédié.',
  },
  {
    q: 'Dans quelles villes intervenez-vous en Languedoc-Roussillon ?',
    a: 'Nous étudions les demandes à Perpignan, Narbonne, Carcassonne, Béziers, Montpellier, Sète et dans les Pyrénées-Orientales, ainsi que dans les communes voisines selon la date et les conditions logistiques.',
  },
  {
    q: 'Les magnets photo Languedoc-Roussillon sont-ils personnalisables ?',
    a: 'Oui, chaque magnet peut reprendre vos prénoms, la date, un logo, une palette de couleurs, un motif de papeterie ou un habillage graphique pensé pour votre mariage, anniversaire, baptême, baby shower ou événement d’entreprise.',
  },
  {
    q: 'Le bar à magnets convient-il aux événements d’entreprise ?',
    a: 'Oui, c’est une animation événementielle Languedoc-Roussillon adaptée aux soirées d’entreprise, inaugurations, salons, séminaires, lancements de marque et événements clients qui veulent offrir un souvenir personnalisé.',
  },
  {
    q: 'L’animation peut-elle être adaptée à un événement familial ?',
    a: 'Oui, Le Bar à Magnets se déplace pour les anniversaires, baptêmes et baby showers, avec des magnets photo personnalisés qui gardent une trace concrète des moments partagés avec vos proches.',
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

export default function BarAMagnetsLanguedocRoussillon() {
  useEffect(() => {
    document.title = 'Bar à magnets Languedoc-Roussillon | Animation mariage & événementielle'
    window.scrollTo(0, 0)

    const existingMetaDescription = document.querySelector('meta[name="description"]')
    existingMetaDescription?.setAttribute('content', metaDescription)

    const existingSchema = document.getElementById('faq-languedoc-roussillon-structured-data')
    existingSchema?.remove()

    const schema = document.createElement('script')
    schema.id = 'faq-languedoc-roussillon-structured-data'
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify(faqStructuredData)
    document.head.appendChild(schema)

    return () => {
      document.getElementById('faq-languedoc-roussillon-structured-data')?.remove()
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Bar à magnets Languedoc-Roussillon pour animation mariage et événementielle"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium">
            Bar à magnets Languedoc-Roussillon
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb] leading-tight tracking-[-0.02em]">
            Bar à magnets en Languedoc-Roussillon
            <span className="block text-[#e4c487] mt-3">pour mariage et événementiel</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Une animation mariage en Languedoc-Roussillon avec magnets photo personnalisés, pensée pour les réceptions à Perpignan, Narbonne, Carcassonne, Béziers, Montpellier, Sète et dans les Pyrénées-Orientales.
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
              Un bar à magnets pour votre mariage en Languedoc-Roussillon
            </h2>

            <div className="gold-divider my-6" />

            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Entre domaines viticoles, mas de caractère, lieux en bord de mer et salles de réception urbaines, le bar à magnets s’adapte au rythme des mariages en Languedoc-Roussillon. Les invités participent naturellement et repartent avec un souvenir personnalisé créé pendant l’événement.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[#5f514d]">
              Pour une animation mariage Languedoc-Roussillon, le stand peut accompagner un vin d’honneur à Montpellier, une réception familiale à Narbonne, une soirée près de Perpignan ou un événement dans l’Aude, l’Hérault ou les Pyrénées-Orientales.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Animation mariage Languedoc-Roussillon',
              'Magnets photo Languedoc-Roussillon',
              'Souvenir invité personnalisé',
              'Déplacement dans toute la région',
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
              Une animation événementielle en Languedoc-Roussillon
            </h2>
          </div>

          <div className="md:col-span-2 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Mariages et fêtes familiales</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Le Bar à Magnets se déplace dans toute la région pour les mariages, anniversaires, baptêmes et baby showers, avec une installation élégante et une animation simple à vivre pour tous les invités.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Entreprises et événements de marque</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Pour une animation événementielle Languedoc-Roussillon, les magnets peuvent intégrer un logo, un message ou une identité visuelle pour vos événements d’entreprise, salons, inaugurations et soirées clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Des magnets photo personnalisés en Languedoc-Roussillon
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Les magnets photo Languedoc-Roussillon sont conçus comme des souvenirs invités soignés : photo prise pendant l’événement, format aimanté, couleurs personnalisées, date, prénoms, logo ou création graphique adaptée à votre réception.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Une prestation mobile de la Méditerranée aux terres catalanes
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              De Sète à Béziers, de Carcassonne à Perpignan, en passant par Montpellier, Narbonne et les Pyrénées-Orientales, l’animation est organisée selon votre lieu, votre planning et le type d’événement que vous préparez.
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
              FAQ bar à magnets Languedoc-Roussillon
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
