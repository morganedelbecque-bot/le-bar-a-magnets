import { useEffect, useState } from 'react'
import fallbackHero from '@/assets/livre-audio-hero.webp'
import fallbackTable from '@/assets/livre-audio-setup.jpg'
import fallbackGuests from '@/assets/livre-video-guests.jpg'
import fallbackDetail from '@/assets/magnets-closeup.jpg'
import fallbackWelcome from '@/assets/livre-audio-elegant.jpg'
import fallbackHand from '@/assets/magnet-hand.jpg'
import fallbackReception from '@/assets/ambiance.jpg'
import fallbackColors from '@/assets/gallery-2.svg'
import fallbackParty from '@/assets/guests.jpg'
import { ecocupGallery } from '@/data/ecocupGallery'

const assets = import.meta.glob('/src/assets/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const fallbacks = [fallbackHero, fallbackTable, fallbackGuests, fallbackDetail, fallbackWelcome, fallbackHand, fallbackReception, fallbackColors, fallbackParty]
const images = ecocupGallery.map((image, index) => ({ ...image, src: assets[`/src/assets/${image.filename}`] ?? fallbacks[index] }))

const benefits = ['Souvenir utile pour les invités', 'Personnalisation sur mesure', 'Plusieurs styles et couleurs', 'Idéal pour mariages et événements', 'Livraison possible partout en France']
const faqs = [
  { q: 'Peut-on personnaliser les éco-cups avec nos prénoms et la date ?', a: 'Oui. Vos prénoms, vos initiales et la date de votre événement peuvent être intégrés à une création conçue pour s’accorder avec votre univers.' },
  { q: 'Peut-on ajouter une photo sur les éco-cups ?', a: 'Oui, une photo peut être intégrée selon sa qualité et le rendu souhaité. Nous vous conseillons sur la mise en page la plus lisible et élégante.' },
  { q: 'Les éco-cups sont-ils réutilisables ?', a: 'Oui. Ces gobelets sont pensés pour être lavés et réutilisés, afin que vos invités conservent un souvenir pratique de votre événement.' },
  { q: 'Peut-on choisir les couleurs et le thème ?', a: 'Oui. Les couleurs, les motifs et le style graphique sont adaptés à votre décoration, qu’elle soit florale, minimaliste, romantique ou colorée.' },
  { q: 'Livrez-vous partout en France ?', a: 'Oui, la livraison est possible partout en France. Ses modalités sont précisées dans votre devis selon la quantité et la destination.' },
  { q: 'Peut-on commander des éco-cups sans réserver le Bar à Magnets ?', a: 'Oui. Les éco-cups personnalisés constituent une prestation indépendante et peuvent être commandés sans réserver une animation Bar à Magnets.' },
]

export function EcoCups() {
  const [active, setActive] = useState<number | null>(null)
  useEffect(() => {
    if (active === null) return
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowLeft') setActive((active - 1 + images.length) % images.length)
      if (event.key === 'ArrowRight') setActive((active + 1) % images.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', keydown)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', keydown) }
  }, [active])

  return <>
    <section id="eco-cups" className="relative flex min-h-[680px] scroll-mt-20 items-center overflow-hidden">
      <img src={images[0].src} alt={images[0].alt} width="1800" height="1200" className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center">
        <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-[#e4c487]">Souvenirs personnalisés</p>
        <h1 className="font-serif text-4xl leading-tight text-[#f6eadb] sm:text-5xl md:text-6xl">Éco-cups personnalisés<br className="hidden sm:block" /> pour mariages et événements</h1>
        <div className="gold-divider mx-auto my-8" />
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#f6eadb] md:text-lg">Des gobelets réutilisables, élégants et personnalisés pour offrir à vos invités un souvenir utile et unique.</p>
        <a href="#contact" className="mt-10 inline-flex rounded-full bg-[#d9a441] px-8 py-4 text-sm uppercase tracking-[0.18em] text-[#0f0c09] shadow transition hover:-translate-y-0.5 hover:bg-[#e0b95a]">Demander un devis</a>
      </div>
    </section>

    <section className="bg-[#fcf1ec] px-6 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div><p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">Création sur mesure</p><h2 className="font-display text-3xl leading-tight text-[#2b2523] md:text-5xl">Un gobelet personnalisé à l’image de votre événement</h2><div className="gold-divider my-6" /><p className="text-base leading-relaxed text-[#5f514d] md:text-lg">Prénoms, date, initiales, photo, thème floral ou couleurs de votre événement : chaque éco-cup personnalisé est imaginé pour prolonger votre décoration et devenir un véritable cadeau invité de mariage.</p><p className="mt-5 text-base leading-relaxed text-[#5f514d]">Cette attention durable convient aux mariages, anniversaires, baptêmes, baby showers et événements d’entreprise.</p></div><div className="grid grid-cols-2 gap-4">{['Prénoms & date', 'Initiales', 'Photo', 'Thème floral', 'Couleurs de l’événement', 'Création unique'].map((item) => <div key={item} className="rounded-[28px] border border-[#eaded6] bg-white/80 p-5 shadow-soft"><span className="mb-3 block text-[#c89b6d]">✦</span><h3 className="font-serif text-xl text-[#2d1d1a]">{item}</h3></div>)}</div></div></section>

    <section id="galerie-ecocups" className="bg-background px-4 py-24 sm:px-6 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><Header eyebrow="Galerie" title="Nos éco-cups personnalisés en images" /><div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">{images.map((image, index) => <button key={image.filename} type="button" onClick={() => setActive(index)} className={`group relative aspect-[4/5] overflow-hidden rounded-[22px] text-left shadow-soft ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`} aria-label={`Agrandir : ${image.alt}`}><img src={image.src} alt={image.alt} loading={index ? 'lazy' : 'eager'} width="800" height="1000" className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" /><span className="absolute inset-0 bg-gradient-to-t from-[#2b2523]/65 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 right-3 text-xs uppercase tracking-[0.16em] text-white">{image.label}</span></button>)}</div></div></section>

    {active !== null && <div role="dialog" aria-modal="true" aria-label="Galerie éco-cups en plein écran" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171210]/95 p-4" onClick={() => setActive(null)}><button type="button" onClick={() => setActive(null)} className="absolute right-5 top-5 z-10 h-12 w-12 rounded-full border border-white/30 text-2xl text-white" aria-label="Fermer">×</button><button type="button" onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length) }} className="absolute left-3 z-10 h-12 w-12 rounded-full bg-white/15 text-3xl text-white md:left-8" aria-label="Image précédente">‹</button><figure onClick={(e) => e.stopPropagation()}><img src={images[active].src} alt={images[active].alt} className="max-h-[82vh] max-w-full rounded-[24px] object-contain" /><figcaption className="pt-4 text-center text-sm text-white/80">{images[active].label} · {active + 1}/{images.length}</figcaption></figure><button type="button" onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length) }} className="absolute right-3 z-10 h-12 w-12 rounded-full bg-white/15 text-3xl text-white md:right-8" aria-label="Image suivante">›</button></div>}

    <section className="bg-[#fbf7f1] px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Header eyebrow="Les avantages" title="Pourquoi choisir nos éco-cups ?" /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{benefits.map((item) => <article key={item} className="rounded-[28px] border border-[#eaded6] bg-white/80 p-6 text-center shadow-soft"><span className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4dfda] text-[#c48d8d]">✦</span><h3 className="font-serif text-xl text-[#2d1d1a]">{item}</h3></article>)}</div></div></section>
    <section className="bg-[#fcf1ec] px-6 py-20 text-center md:py-28"><div className="mx-auto max-w-4xl rounded-[32px] border border-[#eaded6] bg-white/80 p-8 shadow-soft md:p-12"><p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">Tarifs personnalisés</p><h2 className="font-display text-3xl text-[#2b2523] md:text-5xl">Tarifs sur devis selon les quantités, le type de personnalisation et les options choisies.</h2><div className="gold-divider mx-auto my-6" /><p className="text-base text-[#5f514d] md:text-lg">Chaque projet est personnalisé afin de s’adapter à votre thème, vos couleurs et votre budget.</p></div></section>
    <section className="bg-[#fbf7f1] px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-5xl"><Header eyebrow="Questions fréquentes" title="FAQ éco-cups personnalisés" /><div className="divide-y divide-[#eaded6] border-y border-[#eaded6]">{faqs.map((faq) => <details key={faq.q} className="group"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-[28px] px-4 py-5 hover:bg-[#f8efe9] md:px-6"><span className="font-serif text-xl text-[#2d1d1a] md:text-2xl">{faq.q}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d9b56d] text-xl text-[#d9b56d] transition-transform group-open:rotate-45">+</span></summary><p className="px-4 pb-6 pr-12 leading-8 text-[#5f514d] md:px-6">{faq.a}</p></details>)}</div></div></section>
    <section className="bg-[#fcf1ec] px-6 py-20 text-center md:py-28"><div className="mx-auto max-w-4xl rounded-[32px] border border-[#eaded6] bg-white/80 p-8 shadow-soft md:p-12"><h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">Vous souhaitez offrir à vos invités un souvenir pratique, joli et personnalisé ?</h2><div className="gold-divider mx-auto my-6" /><a href="#contact" className="mt-6 inline-flex rounded-full bg-[#c89b6d] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white shadow-gold transition hover:-translate-y-0.5 hover:bg-[#b98a5d]">Demander un devis</a></div></section>
  </>
}

function Header({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mx-auto mb-14 max-w-3xl text-center"><p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">{eyebrow}</p><h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">{title}</h2><div className="gold-divider mx-auto my-6" /></div>
}
