import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

const faqs = [
  {
    q: 'Proposez-vous un bar à magnets pour un mariage en Gironde ?',
    a: 'Oui, Le Bar à Magnets étudie les demandes en Gironde pour les mariages, réceptions privées et événements professionnels qui souhaitent proposer une animation photo élégante et personnalisée.',
  },
  {
    q: 'Comment se déroule l’animation mariage en Gironde ?',
    a: 'Les invités envoient ou réalisent leurs photos pendant l’événement, puis repartent avec un magnet personnalisé. L’animation s’intègre facilement au vin d’honneur, à la soirée ou à un espace photo dédié.',
  },
  {
    q: 'Les magnets photo peuvent-ils reprendre le thème de l’événement ?',
    a: 'Oui, les magnets photo Gironde peuvent être adaptés à votre décoration, à votre papeterie, à votre logo ou à l’identité visuelle de votre événement.',
  },
  {
    q: 'Le bar à magnets convient-il aux événements d’entreprise en Gironde ?',
    a: 'Oui, c’est une animation événementielle Gironde adaptée aux soirées d’entreprise, inaugurations, salons, séminaires et opérations de marque qui veulent offrir un souvenir concret aux participants.',
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

export default function BarAMagnetsGironde() {
  useEffect(() => {
    document.title = 'Bar à magnets Gironde | Animation mariage & événementielle'
    window.scrollTo(0, 0)

    const existingSchema = document.getElementById('faq-gironde-structured-data')
    existingSchema?.remove()

    const schema = document.createElement('script')
    schema.id = 'faq-gironde-structured-data'
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify(faqStructuredData)
    document.head.appendChild(schema)

    return () => {
      document.getElementById('faq-gironde-structured-data')?.remove()
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Bar à magnets Gironde pour animation mariage et événementielle"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium">
            Bar à magnets Gironde
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb] leading-tight tracking-[-0.02em]">
            Bar à magnets en Gironde
            <span className="block text-[#e4c487] mt-3">pour mariage et événementiel</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Une animation mariage en Gironde pensée pour créer des magnets photo personnalisés en direct, avec une expérience soignée et un souvenir durable pour vos invités.
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
              Un bar à magnets pour votre mariage en Gironde
            </h2>

            <div className="gold-divider my-6" />

            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Le bar à magnets accompagne les réceptions en Gironde avec une animation simple à vivre pour les invités et élégante dans sa mise en scène. Les photos deviennent des magnets personnalisés, remis pendant l’événement comme un cadeau invité immédiat.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[#5f514d]">
              Pour une animation mariage Gironde, l’intérêt est double : créer un moment convivial pendant la fête et laisser à chacun un souvenir tangible, personnalisé et cohérent avec l’ambiance de votre journée.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Animation mariage Gironde',
              'Magnets photo Gironde',
              'Souvenir invité sur mesure',
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
              Une animation événementielle en Gironde
            </h2>
          </div>

          <div className="md:col-span-2 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Domaines et lieux de réception</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Le format s’adapte aux domaines viticoles, châteaux, salles de réception et lieux privés avec une installation compacte et harmonieuse.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Entreprises et événements de marque</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Pour une animation événementielle Gironde, les magnets peuvent porter un logo, un message, un habillage graphique ou un souvenir lié à votre opération.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Des magnets photo personnalisés en Gironde
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Les magnets photo Gironde sont conçus pour s’intégrer à l’univers de votre événement : couleurs, prénoms, date, logo ou éléments graphiques. Le souvenir reste simple à offrir, mais suffisamment travaillé pour marquer les invités.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Une prestation adaptée aux événements girondins
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Mariage au domaine, fête familiale, soirée professionnelle ou événement public : le bar à magnets est pensé pour fonctionner avec votre planning, votre lieu et le rythme naturel de vos invités en Gironde.
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
              FAQ bar à magnets Gironde
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
