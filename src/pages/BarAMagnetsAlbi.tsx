import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

const metaDescription =
  'Bar à magnets Albi : animation mariage et événementielle dans le Tarn avec magnets photo personnalisés créés en direct pour vos invités.'

const faqs = [
  {
    q: 'Proposez-vous un bar à magnets pour un mariage à Albi ?',
    a: 'Oui, Le Bar à Magnets étudie les demandes à Albi et dans le Tarn pour les mariages, réceptions familiales et fêtes privées qui souhaitent une animation photo élégante avec magnets personnalisés remis sur place.',
  },
  {
    q: 'Comment s’intègre l’animation mariage à Albi pendant la réception ?',
    a: 'L’animation peut s’installer pendant le vin d’honneur, la soirée ou près d’un espace photo. Les invités participent naturellement, puis repartent avec un magnet photo personnalisé qui garde une trace concrète de votre mariage à Albi.',
  },
  {
    q: 'Les magnets photo peuvent-ils être personnalisés pour un événement dans le Tarn ?',
    a: 'Oui, les magnets photo Albi peuvent reprendre vos prénoms, la date, une palette de couleurs, un logo, un motif inspiré de votre papeterie ou un habillage graphique cohérent avec votre lieu de réception.',
  },
  {
    q: 'Le bar à magnets convient-il aux événements professionnels à Albi ?',
    a: 'Oui, c’est une animation événementielle Albi adaptée aux soirées d’entreprise, inaugurations, événements associatifs, salons et opérations de marque qui veulent offrir un souvenir personnalisé aux participants.',
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

export default function BarAMagnetsAlbi() {
  useEffect(() => {
    document.title = 'Bar à magnets Albi | Animation mariage & événementielle'
    window.scrollTo(0, 0)

    const existingMetaDescription = document.querySelector('meta[name="description"]')
    existingMetaDescription?.setAttribute('content', metaDescription)

    const existingSchema = document.getElementById('faq-albi-structured-data')
    existingSchema?.remove()

    const schema = document.createElement('script')
    schema.id = 'faq-albi-structured-data'
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify(faqStructuredData)
    document.head.appendChild(schema)

    return () => {
      document.getElementById('faq-albi-structured-data')?.remove()
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Bar à magnets Albi pour animation mariage et événementielle"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium">
            Bar à magnets Albi
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb] leading-tight tracking-[-0.02em]">
            Bar à magnets à Albi
            <span className="block text-[#e4c487] mt-3">pour mariage et événementiel</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Une animation mariage à Albi pensée pour créer des magnets photo personnalisés en direct, avec un souvenir élégant pour vos invités dans le Tarn.
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
              Un bar à magnets pour votre mariage à Albi
            </h2>

            <div className="gold-divider my-6" />

            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Le bar à magnets apporte une animation simple à comprendre, raffinée à regarder et facile à vivre pour les invités. À Albi, il trouve naturellement sa place dans un vin d’honneur, une réception dans un domaine tarnais ou une soirée de mariage organisée autour de la cité épiscopale.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[#5f514d]">
              Pour une animation mariage Albi, chaque photo devient un magnet personnalisé remis pendant l’événement. Vos proches repartent avec un souvenir aimanté, créé sur place et accordé à l’ambiance de votre journée.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Animation mariage Albi',
              'Magnets photo Albi',
              'Souvenir invité dans le Tarn',
              'Stand discret et élégant',
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
              Une animation événementielle à Albi
            </h2>
          </div>

          <div className="md:col-span-2 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Réceptions albigeoises et domaines tarnais</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Le stand s’adapte aux salles de réception, domaines, maisons familiales et lieux de caractère autour d’Albi, avec une installation compacte qui respecte votre décoration.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Entreprises, associations et marques</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Pour une animation événementielle Albi, les magnets peuvent intégrer un logo, une date, un message de marque ou un visuel conçu pour votre soirée professionnelle dans le Tarn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Des magnets photo personnalisés à Albi
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Les magnets photo Albi sont pensés comme des souvenirs invités soignés : format aimanté, photo de l’événement, personnalisation graphique et rendu harmonieux avec le style de votre mariage, gala ou réception privée.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Une prestation adaptée au rythme de votre événement tarnais
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              À Albi, Gaillac, Carmaux ou dans les villages du Tarn, le bar à magnets s’organise autour de votre planning : installation, accueil des invités, création des magnets et remise des souvenirs pendant les temps forts de la réception.
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
              FAQ bar à magnets Albi
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
