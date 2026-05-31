import { useEffect } from 'react'
import livreAudioHero from '@/assets/livre-audio-hero.webp'
import livreAudioSetup from '@/assets/livre-audio-setup.jpg'
import livreVideoGuests from '@/assets/livre-video-guests.jpg'
import livreVideoPremium from '@/assets/livre-video-premium.webp'
import { ContactForm } from '@/components/ContactForm'

type SeoGuestBookLandingProps = {
  eyebrow: string
  title: string
  highlight: string
  description: string
  sectionTitle: string
  sectionText: string
  points: string[]
  faqTitle: string
  faqs: {
    q: string
    a: string
  }[]
  documentTitle: string
  heroAlt: string
}

const gallery = [
  {
    src: livreAudioSetup,
    alt: "Telephone audio vintage pour mariage a Toulouse",
    label: "Telephone audio",
  },
  {
    src: livreVideoGuests,
    alt: "Invites laissant un message video pendant un mariage a Toulouse",
    label: "Messages video",
  },
  {
    src: livreVideoPremium,
    alt: "Livre d'or video premium pour mariage a Toulouse",
    label: "Mise en scene",
  },
]

export default function SeoGuestBookLanding({
  eyebrow,
  title,
  highlight,
  description,
  sectionTitle,
  sectionText,
  points,
  faqTitle,
  faqs,
  documentTitle,
  heroAlt,
}: SeoGuestBookLandingProps) {
  useEffect(() => {
    document.title = documentTitle
    window.scrollTo(0, 0)
  }, [documentTitle])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={livreAudioHero}
          alt={heroAlt}
          width="1800"
          height="1200"
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/42" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center sm:py-32">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.45em] text-[#f6eadb]">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#f6eadb] sm:text-5xl md:text-6xl">
            {title}
            <span className="mt-3 block text-[#e4c487]">{highlight}</span>
          </h1>
          <div className="gold-divider mx-auto my-8" />
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#f6eadb] md:text-base">
            {description}
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex justify-center rounded-full bg-[#d9a441] px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#0f0c09] shadow transition-all duration-500 hover:bg-[#e0b95a]"
          >
            Demander un devis
          </a>
        </div>
      </section>

      <section className="bg-[#fcf1ec] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
              Animation souvenir
            </p>
            <h2 className="font-display text-3xl leading-tight text-[#2b2523] md:text-5xl">
              {sectionTitle}
            </h2>
            <div className="gold-divider my-6" />
            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              {sectionText}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((item) => (
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

      <section className="bg-background px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">
              Galerie
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">
              Audio et video en images
            </h2>
            <div className="gold-divider mx-auto my-6" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.label} className="group relative min-h-[300px] overflow-hidden rounded-[28px] shadow-soft">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="800"
                  height="600"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2523]/58 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.18em] text-[#fff8ef]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f1] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">
              Questions frequentes
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">
              {faqTitle}
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

      <ContactForm />
    </>
  )
}
