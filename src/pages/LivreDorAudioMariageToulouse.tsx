import { useEffect } from 'react'
import livreAudioAmbiance from '@/assets/livre-audio-ambiance.jpg'
import livreAudioDetail from '@/assets/livre-audio-detail.jpg'
import livreAudioElegant from '@/assets/livre-audio-elegant.jpg'
import livreAudioHero from '@/assets/livre-audio-hero.jpg'
import livreAudioSetup from '@/assets/livre-audio-setup.jpg'
import livreVideoGuests from '@/assets/livre-video-guests.jpg'
import { ContactForm } from '@/components/ContactForm'

const gallery = [
  {
    src: livreAudioSetup,
    alt: "Téléphone audio mariage vintage installé pour livre d’or audio à Toulouse",
    label: "Téléphone audio vintage",
    span: "md:col-span-2",
  },
  {
    src: livreAudioDetail,
    alt: "Détail décoratif d’un téléphone audio mariage élégant",
    label: "Détails décoratifs",
    span: "",
  },
  {
    src: livreAudioAmbiance,
    alt: "Ambiance mariage autour d’un livre d’or audio en Occitanie",
    label: "Ambiance mariage",
    span: "",
  },
  {
    src: livreAudioElegant,
    alt: "Mise en scène premium livre d’or audio mariage Toulouse",
    label: "Mise en scène premium",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: livreAudioHero,
    alt: "Livre d’or audio mariage Toulouse avec téléphone vintage",
    label: "Livre d’or audio",
    span: "",
  },
  {
    src: livreVideoGuests,
    alt: "Invités utilisant un livre d’or vidéo mariage Toulouse",
    label: "Messages audio & vidéo",
    span: "md:col-span-2",
  },
]

const faqs = [
  {
    q: "Comment fonctionne le livre d’or audio mariage ?",
    a: "Vos invités décrochent le téléphone audio vintage et enregistrent un message vocal spontané. Après le mariage, les fichiers audio vous sont transmis pour conserver les voix, les rires et les émotions de vos proches.",
  },
  {
    q: "Proposez-vous aussi un livre d’or vidéo mariage à Toulouse ?",
    a: "Oui, la version audio & vidéo permet aux invités de laisser des messages filmés et sonores depuis un téléphone vintage équipé d’un écran. C’est une animation immersive, idéale pour revivre les moments forts de la réception.",
  },
  {
    q: "Intervenez-vous hors Toulouse ?",
    a: "Oui, nous intervenons à Toulouse, Saint-Jory, Blagnac, Colomiers, Balma, Montauban, Albi et plus largement en Occitanie selon les conditions de livraison et d’installation.",
  },
  {
    q: "La décoration est-elle incluse avec le livre d’or audio ?",
    a: "Les formules premium incluent une mise en scène élégante avec tulle, éclairage chaleureux, fleurs décoratives et bougies LED pour harmoniser le stand avec votre décoration de mariage.",
  },
]

export default function LivreDorAudioMariageToulouse() {
  useEffect(() => {
    document.title = "Livre d’or audio mariage Toulouse | Le Bar à Magnets"
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={livreAudioHero}
          alt="Livre d’or audio mariage Toulouse avec téléphone vintage premium"
          width="1800"
          height="1200"
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/38" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center sm:py-32">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.45em] text-[#f6eadb]">
            Livre d’or audio mariage Toulouse
          </p>

          <h1 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-[#f6eadb] sm:text-5xl md:text-6xl">
            Livre d’or audio & vidéo
            <span className="mt-3 block text-[#e4c487]">pour mariage à Toulouse</span>
          </h1>

          <div className="gold-divider mx-auto my-8" />

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#f6eadb] md:text-base">
            Offrez à vos invités une animation premium de mariage avec téléphone audio vintage, livre d’or vidéo et souvenirs remplis d’émotion à conserver après votre réception.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-[#d9a441] px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#0f0c09] shadow transition-all duration-500 hover:bg-[#e0b95a] sm:w-auto"
            >
              Demander un devis
            </a>
            <a
              href="#galerie-livre-audio"
              className="inline-flex justify-center rounded-full border border-cream/40 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#f6eadb] transition-colors duration-300 hover:bg-white/15 sm:w-auto"
            >
              Voir la galerie
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf1ec] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
              Animation souvenir
            </p>

            <h2 className="font-display text-3xl leading-tight text-[#2b2523] md:text-5xl">
              Un téléphone audio mariage pour capter les voix de vos invités
            </h2>

            <div className="gold-divider my-6" />

            <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">
              Le livre d’or audio mariage Toulouse transforme les messages de vos proches en souvenirs vivants. Installé dans un décor élégant, le téléphone audio mariage invite chacun à laisser un mot, une anecdote ou un fou rire, sans contrainte et en toute simplicité.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[#5f514d]">
              Pour une expérience encore plus immersive, la version livre d’or vidéo mariage Toulouse permet de conserver les regards, les sourires et les émotions en plus des voix. C’est une animation invités mariage discrète, chic et profondément personnelle.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Téléphone audio vintage",
              "Messages audio illimités",
              "Option téléphone vidéo mariage",
              "Installation à Toulouse et Occitanie",
            ].map((item) => (
              <div key={item} className="rounded-[28px] border border-[#eaded6] bg-white/78 p-6 shadow-soft">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4dfda] text-[#c48d8d]">
                  ✦
                </div>
                <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie-livre-audio" className="bg-background px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">
              Galerie
            </p>

            <h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">
              Livre d’or audio et vidéo en images
            </h2>

            <div className="gold-divider mx-auto my-6" />
          </div>

          <div className="grid grid-cols-2 auto-rows-[190px] gap-3 md:grid-cols-4 md:auto-rows-[240px] md:gap-4">
            {gallery.map((item) => (
              <div
                key={item.label}
                className={`group relative overflow-hidden rounded-[28px] shadow-soft ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="800"
                  height="600"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2523]/58 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
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
              Questions fréquentes
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">
              FAQ livre d’or audio mariage Toulouse
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

      <section className="bg-[#fcf1ec] px-6 py-20 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-[#eaded6] bg-white/78 p-8 shadow-soft backdrop-blur-sm md:p-12">
          <h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">
            Prêts à offrir un souvenir vivant à vos invités ?
          </h2>
          <div className="gold-divider mx-auto my-6" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#6b625c] md:text-lg">
            Parlons de votre mariage à Toulouse, de votre lieu de réception et de la formule livre d’or audio ou vidéo la plus adaptée.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#c89b6d] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white shadow-gold transition duration-500 hover:-translate-y-0.5 hover:bg-[#b98a5d] sm:w-auto"
          >
            Demander un devis
          </a>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
