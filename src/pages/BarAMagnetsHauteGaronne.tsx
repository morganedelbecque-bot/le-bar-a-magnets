import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { ContactForm } from '@/components/ContactForm'
import { Gallery } from '@/components/Gallery'

const metaDescription =
  'Bar à magnets Haute-Garonne : animation mariage et événementielle avec magnets photo personnalisés à Toulouse, Saint-Jory, Blagnac, Colomiers, Balma, Muret et Tournefeuille.'

const faqs = [
  {
    q: 'Proposez-vous un bar à magnets pour un mariage en Haute-Garonne ?',
    a: 'Oui, Le Bar à Magnets accompagne les demandes en Haute-Garonne pour les mariages, réceptions privées et fêtes familiales qui souhaitent offrir des magnets photo personnalisés aux invités pendant l’événement.',
  },
  {
    q: 'Dans quelles villes intervenez-vous autour de Toulouse ?',
    a: 'Nous étudions les événements à Toulouse, Saint-Jory, Blagnac, Colomiers, Balma, Muret, Tournefeuille et plus largement en Haute-Garonne selon la date, le lieu de réception et les conditions d’installation.',
  },
  {
    q: 'Comment fonctionne l’animation mariage Haute-Garonne ?',
    a: 'Les invités participent pendant le vin d’honneur, la soirée ou un temps dédié. Les photos sont transformées en magnets personnalisés, puis remises sur place comme souvenirs immédiats de votre mariage en Haute-Garonne.',
  },
  {
    q: 'Les magnets photo Haute-Garonne peuvent-ils reprendre notre thème ?',
    a: 'Oui, les magnets peuvent intégrer vos prénoms, la date, une couleur dominante, un logo, une illustration ou un habillage graphique cohérent avec votre papeterie et votre décoration.',
  },
  {
    q: 'Le bar à magnets convient-il à une animation événementielle en Haute-Garonne ?',
    a: 'Oui, c’est une animation événementielle Haute-Garonne adaptée aux soirées d’entreprise, inaugurations, salons, événements associatifs et opérations de marque qui veulent créer un souvenir personnalisé et facile à conserver.',
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

export default function BarAMagnetsHauteGaronne() {
  useEffect(() => {
    document.title = 'Bar à magnets Haute-Garonne | Animation mariage & événementielle'
    window.scrollTo(0, 0)

    const existingMetaDescription = document.querySelector('meta[name="description"]')
    existingMetaDescription?.setAttribute('content', metaDescription)

    const existingSchema = document.getElementById('faq-haute-garonne-structured-data')
    existingSchema?.remove()

    const schema = document.createElement('script')
    schema.id = 'faq-haute-garonne-structured-data'
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify(faqStructuredData)
    document.head.appendChild(schema)

    return () => {
      document.getElementById('faq-haute-garonne-structured-data')?.remove()
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Bar à magnets Haute-Garonne pour animation mariage et événementielle"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium">
            Bar à magnets Haute-Garonne
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb] leading-tight tracking-[-0.02em]">
            Bar à magnets en Haute-Garonne
            <span className="block text-[#e4c487] mt-3">pour mariage et événementiel</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Une animation mariage en Haute-Garonne pensée pour créer des magnets photo personnalisés en direct, de Toulouse à Saint-Jory, Blagnac, Colomiers, Balma, Muret et Tournefeuille.
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
              Un bar à magnets pour votre mariage en Haute-Garonne
            </h2>

            <div className="gold-divider my-6" />

            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Le bar à magnets s’intègre aux mariages de Haute-Garonne avec une présence soignée, un fonctionnement fluide et un souvenir que les invités emportent immédiatement. Il convient aussi bien à une réception toulousaine qu’à un domaine au nord de Toulouse, une salle à Muret ou une fête familiale près de Tournefeuille.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[#5f514d]">
              Pour une animation mariage Haute-Garonne, l’objectif est de créer un moment participatif sans interrompre le rythme de la journée : les photos sont collectées, personnalisées puis transformées en magnets élégants, accordés à votre univers graphique.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Animation mariage Haute-Garonne',
              'Magnets photo Haute-Garonne',
              'Souvenir invité personnalisé',
              'Présence locale autour de Toulouse',
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
              Une animation événementielle en Haute-Garonne
            </h2>
          </div>

          <div className="md:col-span-2 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Mariages et réceptions autour de Toulouse</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Le stand trouve sa place dans les domaines, hôtels, salles de réception et lieux privés à Toulouse, Saint-Jory, Blagnac, Colomiers, Balma, Muret ou Tournefeuille.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">Entreprises, commerces et événements de marque</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5f514d]">
                Pour une animation événementielle Haute-Garonne, les magnets peuvent reprendre votre logo, une campagne, un message ou une identité visuelle pensée pour vos invités, clients ou collaborateurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Des magnets photo personnalisés en Haute-Garonne
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Les magnets photo Haute-Garonne sont conçus comme des souvenirs utiles et esthétiques : photo de l’événement, format aimanté, personnalisation des couleurs, ajout de prénoms, date, logo ou détail graphique lié à votre réception.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[#2b2523]">
              Une prestation adaptée aux lieux haut-garonnais
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              En centre-ville, en périphérie toulousaine ou dans une commune de Haute-Garonne, le bar à magnets est organisé pour respecter votre planning, la circulation des invités et les contraintes du lieu, avec une installation élégante et compacte.
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
              FAQ bar à magnets Haute-Garonne
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
