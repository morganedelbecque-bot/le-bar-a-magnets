import { useEffect } from 'react'
import heroImg from '@/assets/hero-stand.webp'
import { Gallery } from '@/components/Gallery'
import { ContactForm } from '@/components/ContactForm'

const metaDescription =
  'Animation mariage Toulouse : animation originale pour invités avec magnets photo personnalisés, idéale pour vin d’honneur, soirée et événementiel mariage.'

const faqs = [
  {
    q: 'Quelle animation mariage proposez-vous à Toulouse ?',
    a: 'Le Bar à Magnets propose une animation mariage Toulouse originale : les invités participent pendant la réception, leurs photos sont transformées en magnets personnalisés, puis remises sur place comme souvenirs immédiats.',
  },
  {
    q: 'Pourquoi choisir une animation originale mariage Toulouse avec des magnets photo ?',
    a: 'Les magnets photo créent un moment convivial sans couper le rythme du mariage. L’animation attire naturellement les invités, laisse un souvenir utile et s’adapte à l’ambiance de votre vin d’honneur ou de votre soirée.',
  },
  {
    q: 'L’animation convient-elle à tous les invités du mariage ?',
    a: 'Oui, c’est une animation invités mariage Toulouse facile à comprendre, accessible à toutes les générations et pensée pour créer des échanges entre les proches pendant la réception.',
  },
  {
    q: 'Peut-on personnaliser les magnets avec le thème du mariage ?',
    a: 'Oui, les magnets peuvent reprendre vos prénoms, la date, vos couleurs, un motif de papeterie, une illustration ou un habillage graphique cohérent avec la décoration de votre mariage à Toulouse.',
  },
  {
    q: 'Intervenez-vous pour une animation événementielle mariage Toulouse ?',
    a: 'Oui, l’animation peut être adaptée aux mariages, brunchs de lendemain, soirées privées et formats événementiels liés au mariage, à Toulouse et dans la région toulousaine.',
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

export default function AnimationMariageToulouse() {
  useEffect(() => {
    document.title = 'Animation mariage Toulouse | Animation originale invités'
    window.scrollTo(0, 0)

    const existingMetaDescription = document.querySelector('meta[name="description"]')
    existingMetaDescription?.setAttribute('content', metaDescription)

    const existingSchema = document.getElementById('faq-animation-mariage-toulouse-structured-data')
    existingSchema?.remove()

    const schema = document.createElement('script')
    schema.id = 'faq-animation-mariage-toulouse-structured-data'
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify(faqStructuredData)
    document.head.appendChild(schema)

    return () => {
      document.getElementById('faq-animation-mariage-toulouse-structured-data')?.remove()
    }
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Animation mariage Toulouse avec magnets photo personnalisés"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/36" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-32 text-center">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#f6eadb] opacity-95 mb-6 font-medium">
            Animation mariage Toulouse
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f6eadb] leading-tight tracking-[-0.02em]">
            Animation mariage Toulouse
            <span className="block text-[#e4c487] mt-3">originale pour vos invités</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            Une animation originale mariage Toulouse, élégante et fluide, qui transforme les photos de vos invités en magnets personnalisés pendant votre réception.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-[#d9a441] px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#0f0c09] shadow transition-all duration-500 hover:bg-[#e0b95a] sm:w-auto"
            >
              Demander un devis
            </a>
            <a
              href="#pourquoi"
              className="inline-flex justify-center rounded-full border border-cream/40 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#f6eadb] transition-colors duration-300 hover:bg-white/15 sm:w-auto"
            >
              Pourquoi nous choisir
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Une animation originale pour mariage à Toulouse</h2>
            <p className="text-foreground/80 leading-relaxed">
              Le Bar à Magnets propose une animation mariage Toulouse qui allie esthétique, simplicité et souvenir immédiat. Le stand s’intègre à votre décoration, accompagne naturellement le vin d’honneur ou la soirée, et offre aux invités une expérience participative sans contrainte.
            </p>

            <h3 className="mt-8 font-semibold text-xl">Animation invités mariage Toulouse</h3>
            <p className="text-foreground/80 leading-relaxed">
              Vos proches participent pendant les temps forts de la réception. Les photos sont sélectionnées, personnalisées puis transformées en magnets photo, avec un rendu soigné que chacun peut emporter directement après l’animation.
            </p>

            <h3 className="mt-8 font-semibold text-xl">Animation événementielle mariage Toulouse</h3>
            <p className="text-foreground/80 leading-relaxed">
              Pour un mariage intime, une grande réception, un brunch de lendemain ou une soirée événementielle autour du mariage, l’animation s’adapte au planning, au lieu et à la circulation des invités. Elle crée un souvenir concret sans prendre le dessus sur votre journée.
            </p>

            <h3 id="pourquoi" className="mt-8 font-semibold text-xl">Pourquoi choisir Le Bar à Magnets</h3>
            <ul className="mt-3 space-y-2 text-foreground/80">
              <li>Animation originale mariage Toulouse, clé en main et facile à vivre</li>
              <li>Magnets photo personnalisés selon votre thème et vos couleurs</li>
              <li>Expérience fluide pour les invités, toutes générations confondues</li>
              <li>Installation à Toulouse et dans la région toulousaine</li>
            </ul>

            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm uppercase tracking-[0.12em] text-[#0f0c09] shadow transition-all duration-300">
                Demande de devis
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">FAQ animation mariage Toulouse</h2>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="bg-white/90 p-4 rounded-[12px] border border-border/30">
                  <summary className="cursor-pointer font-medium">{faq.q}</summary>
                  <p className="mt-2 text-foreground/75">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  )
}
