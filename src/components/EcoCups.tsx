import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CalendarHeart, Check, Clock3, FileCheck2, Flower2, Image, Palette, PartyPopper, PencilLine, Recycle, ShieldCheck, Signature, Sparkles, SwatchBook, Truck, WandSparkles } from 'lucide-react'
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

const benefits = [
  { title: 'Souvenir utile pour les invités', description: 'Un cadeau élégant que vos proches pourront réellement utiliser et conserver.', icon: Recycle },
  { title: 'Personnalisation sur mesure', description: 'Chaque création est pensée pour refléter avec justesse l’univers de votre événement.', icon: WandSparkles },
  { title: 'Plusieurs styles et couleurs', description: 'Une sélection de teintes et de finitions pour une harmonie parfaite avec votre décor.', icon: SwatchBook },
  { title: 'Idéal pour mariages et événements', description: 'Une attention raffinée adaptée à toutes vos célébrations, privées ou professionnelles.', icon: PartyPopper },
  { title: 'Livraison partout en France', description: 'Vos éco-cups personnalisés sont préparés avec soin et livrés à l’adresse de votre choix.', icon: Truck },
]
const customizationOptions = [
  { title: 'Prénoms & date', description: 'Vos prénoms et la date de votre événement composés avec élégance.', icon: CalendarHeart },
  { title: 'Initiales', description: 'Un monogramme délicat imaginé spécialement pour votre célébration.', icon: Signature },
  { title: 'Photo', description: 'Votre plus beau souvenir intégré dans une composition harmonieuse.', icon: Image },
  { title: 'Thème floral', description: 'Des motifs floraux raffinés accordés à l’univers de votre réception.', icon: Flower2 },
  { title: 'Couleurs de l’événement', description: 'Une palette sur mesure fidèle à votre décoration et à votre papeterie.', icon: Palette },
  { title: 'Création unique', description: 'Un design exclusif pensé dans les moindres détails pour votre événement.', icon: Sparkles },
]
export function EcoCups() {
  const [active, setActive] = useState<number | null>(null)
  const [customizationVisible, setCustomizationVisible] = useState(false)
  const [benefitsVisible, setBenefitsVisible] = useState(false)
  const [pricingVisible, setPricingVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const customizationSection = useRef<HTMLElement>(null)
  const benefitsSection = useRef<HTMLElement>(null)
  const pricingSection = useRef<HTMLElement>(null)
  const ctaSection = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = customizationSection.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCustomizationVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = benefitsSection.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBenefitsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = ctaSection.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCtaVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = pricingSection.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPricingVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])
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

    <section ref={customizationSection} className="relative isolate overflow-hidden bg-gradient-to-br from-[#fffdf8] via-[#fbf5ea] to-[#f7eee2] px-6 py-16 md:px-10 md:py-20">
      <div className="pointer-events-none absolute -left-32 top-12 -z-10 h-80 w-80 rounded-full bg-[#e9d3bf]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-6 -z-10 h-96 w-96 rounded-full bg-[#d9b56d]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className={`mx-auto mb-10 max-w-3xl text-center transition-all duration-700 md:mb-12 ${customizationVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">Création sur mesure</p>
          <h2 className="font-display text-3xl leading-tight text-[#2b2523] md:text-5xl">Un gobelet personnalisé à l’image de votre événement</h2>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-base leading-relaxed text-[#5f514d] md:text-lg">Prénoms, date, initiales, photo, thème floral ou couleurs de votre événement : chaque éco-cup personnalisé est imaginé pour prolonger votre décoration et devenir un véritable cadeau invité de mariage.</p>
          <p className="mt-4 text-base leading-relaxed text-[#5f514d]">Cette attention durable convient aux mariages, anniversaires, baptêmes, baby showers et événements d’entreprise.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customizationOptions.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className={`group flex min-h-[230px] flex-col rounded-[24px] border border-white/90 bg-white/75 p-7 shadow-[0_12px_34px_rgba(87,62,46,0.07)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:scale-[1.015] hover:border-[#dfc69a]/70 hover:bg-white/95 hover:shadow-[0_22px_48px_rgba(88,57,47,0.13)] md:min-h-[250px] md:p-9 ${customizationVisible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'}`} style={{ transitionDelay: `${100 + index * 75}ms` }}>
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#ead8cc] bg-gradient-to-br from-[#fffaf3] to-[#f2e1d5] text-[#b98767] shadow-[0_8px_20px_rgba(137,94,67,0.08)] transition-transform duration-500 group-hover:scale-110">
                <Icon aria-hidden="true" size={25} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[1.65rem] leading-tight text-[#2d1d1a]">{title}</h3>
              <div className="my-4 h-px w-10 bg-gradient-to-r from-[#c89b6d]/70 to-transparent" />
              <p className="text-[15px] leading-7 text-[#6b5a54]">{description}</p>
            </article>
          ))}
        </div>

        <div className={`mx-auto mt-12 flex max-w-4xl flex-col items-center text-center transition-all delay-500 duration-700 ${customizationVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <div className="w-full rounded-[24px] border border-[#e4cdbb] bg-white/70 px-7 py-6 font-serif text-lg leading-relaxed text-[#4f403b] shadow-[0_14px_36px_rgba(87,62,46,0.08)] backdrop-blur-sm md:px-10 md:py-7 md:text-xl">
            <Sparkles aria-hidden="true" className="mr-2 inline-block text-[#c89b6d]" size={21} strokeWidth={1.6} />
            Chaque création est entièrement imaginée selon votre thème, vos couleurs et votre décoration.
          </div>
          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-[#ddc8b8] bg-[#fffaf4]/90 px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#66514a] shadow-[0_8px_22px_rgba(87,62,46,0.07)] sm:text-sm">
            <Check aria-hidden="true" size={16} strokeWidth={2} className="text-[#b58a5c]" />
            Maquette personnalisée envoyée avant impression
          </div>
        </div>
      </div>
    </section>

    <section id="galerie-ecocups" className="bg-background px-4 py-24 sm:px-6 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><Header eyebrow="Galerie" title="Nos éco-cups personnalisés en images" /><div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">{images.map((image, index) => <button key={image.filename} type="button" onClick={() => setActive(index)} className={`group relative aspect-[4/5] overflow-hidden rounded-[22px] text-left shadow-soft animate-fade-in ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`} aria-label={`Agrandir : ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" decoding="async" width="800" height="1000" className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105" /><span className="absolute inset-0 bg-gradient-to-t from-[#2b2523]/65 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 right-3 text-xs uppercase tracking-[0.16em] text-white">{image.label}</span></button>)}</div></div></section>

    {active !== null && <div role="dialog" aria-modal="true" aria-label="Galerie éco-cups en plein écran" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171210]/95 p-4" onClick={() => setActive(null)}><button type="button" onClick={() => setActive(null)} className="absolute right-5 top-5 z-10 h-12 w-12 rounded-full border border-white/30 text-2xl text-white" aria-label="Fermer">×</button><button type="button" onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length) }} className="absolute left-3 z-10 h-12 w-12 rounded-full bg-white/15 text-3xl text-white md:left-8" aria-label="Image précédente">‹</button><figure onClick={(e) => e.stopPropagation()}><img src={images[active].src} alt={images[active].alt} className="max-h-[82vh] max-w-full rounded-[24px] object-contain" /><figcaption className="pt-4 text-center text-sm text-white/80">{images[active].label} · {active + 1}/{images.length}</figcaption></figure><button type="button" onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length) }} className="absolute right-3 z-10 h-12 w-12 rounded-full bg-white/15 text-3xl text-white md:right-8" aria-label="Image suivante">›</button></div>}

    <section ref={benefitsSection} className="relative isolate overflow-hidden bg-gradient-to-br from-[#fbf7f1] via-[#fdf9f5] to-[#f5e9e3] px-6 py-20 md:px-10 md:py-28">
      <div className="pointer-events-none absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full border border-[#d9b56d]/10 bg-[#efdcd5]/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-80 w-80 rounded-full border border-[#d9b56d]/10 bg-[#ead7c5]/20 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-700 ${benefitsVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">Les avantages</p>
          <h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">Pourquoi choisir nos éco-cups ?</h2>
          <div className="gold-divider mx-auto my-6" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#6b5a54] md:text-lg">Des créations durables et soignées, imaginées pour s’accorder naturellement à votre réception et laisser une attention mémorable à chacun de vos invités.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className={`group rounded-[30px] border border-white/90 bg-white/75 p-7 text-center shadow-[0_12px_35px_rgba(91,65,55,0.07)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:border-[#dfc79c]/70 hover:bg-white/95 hover:shadow-[0_22px_50px_rgba(91,65,55,0.13)] md:min-h-[330px] md:p-8 ${benefitsVisible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'}`} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ead8cc] bg-gradient-to-br from-[#f9ece7] to-[#f2dfd8] text-[#b98767] shadow-sm transition-transform duration-500 group-hover:scale-105">
                <Icon aria-hidden="true" size={27} strokeWidth={1.45} />
              </div>
              <h3 className="font-serif text-2xl leading-tight text-[#2d1d1a]">{title}</h3>
              <div className="mx-auto my-4 h-px w-10 bg-gradient-to-r from-transparent via-[#c89b6d] to-transparent" />
              <p className="text-sm leading-6 text-[#6b5a54]">{description}</p>
            </article>
          ))}
        </div>

        <div className={`mx-auto mt-10 max-w-3xl rounded-[26px] border border-[#e5d2c4] bg-white/65 px-7 py-6 text-center font-serif text-lg leading-relaxed text-[#4f403b] shadow-soft backdrop-blur-sm transition-all delay-500 duration-700 md:text-xl ${benefitsVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
          <Recycle aria-hidden="true" className="mr-2 inline-block text-[#b58a5c]" size={21} strokeWidth={1.5} />
          Un choix responsable et réutilisable pour un souvenir que vos invités garderont longtemps.
        </div>
      </div>
    </section>
    <section ref={pricingSection} className="bg-[#fcf1ec] px-6 py-20 text-center md:py-28">
      <div className={`relative isolate mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-[#e7d6ca] bg-gradient-to-br from-white/90 via-[#fffaf6]/90 to-[#f8ebe5]/80 p-8 shadow-[0_20px_60px_rgba(91,65,55,0.10)] transition-all duration-700 md:p-14 ${pricingVisible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'}`}>
        <Flower2 aria-hidden="true" className="pointer-events-none absolute -left-6 -top-7 -z-10 h-28 w-28 rotate-12 text-[#c89b6d]/[0.08]" strokeWidth={0.8} />
        <Flower2 aria-hidden="true" className="pointer-events-none absolute -bottom-8 -right-5 -z-10 h-32 w-32 -rotate-12 text-[#c48d8d]/[0.08]" strokeWidth={0.8} />
        <div className="pointer-events-none absolute left-10 top-8 h-px w-20 bg-gradient-to-r from-[#c89b6d]/50 to-transparent" />
        <div className="pointer-events-none absolute bottom-8 right-10 h-px w-20 bg-gradient-to-l from-[#c89b6d]/50 to-transparent" />

        <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">Tarifs personnalisés</p>
        <h2 className="mx-auto max-w-4xl font-display text-3xl leading-tight text-[#2b2523] md:text-5xl">Des tarifs adaptés à votre projet</h2>
        <div className="mx-auto my-7 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c89b6d]" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[#c89b6d]" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c89b6d]" />
        </div>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#5f514d] md:text-lg">Chaque commande est entièrement personnalisée selon la quantité souhaitée, votre design et vos besoins.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { quantity: '25 éco-cups', price: 'À partir de 99 €' },
            { quantity: '50 éco-cups', price: 'À partir de 149 €' },
            { quantity: '100 éco-cups', price: 'À partir de 219 €', featured: true },
            { quantity: '150 éco-cups', price: 'À partir de 289 €' },
            { quantity: '200 éco-cups et +', price: 'Sur devis' },
          ].map(({ quantity, price, featured }, index) => (
            <article key={quantity} className={`relative flex min-h-[180px] flex-col items-center justify-center rounded-[24px] border px-4 py-7 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_16px_35px_rgba(91,65,55,0.12)] ${featured ? 'border-[#d3ad72] bg-gradient-to-b from-[#fffaf1] to-[#f8e8dc] shadow-[0_14px_35px_rgba(185,138,93,0.16)]' : 'border-[#eaded6] bg-white/75 shadow-[0_9px_25px_rgba(91,65,55,0.06)]'} ${pricingVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: `${120 + index * 70}ms` }}>
              {featured && <span className="absolute -top-3 rounded-full bg-[#c89b6d] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white shadow-sm">Le plus choisi</span>}
              <h3 className="font-serif text-xl leading-tight text-[#2d1d1a]">{quantity}</h3>
              <div className="my-4 h-px w-9 bg-[#c89b6d]/55" />
              <p className="text-sm font-medium leading-6 text-[#9a6f4f]">{price}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-y border-[#eaded6] py-8 md:grid-cols-3 md:gap-0">
          {[
            { label: 'Personnalisation incluse', icon: PencilLine },
            { label: 'Maquette offerte avant impression', icon: FileCheck2 },
            { label: 'Livraison partout en France', icon: Truck },
          ].map(({ label, icon: Icon }, index) => (
            <div key={label} className={`flex items-center justify-center gap-3 px-5 text-sm text-[#5f514d] ${index > 0 ? 'md:border-l md:border-[#dfcfc4]' : ''}`}>
              <Icon aria-hidden="true" size={19} strokeWidth={1.5} className="shrink-0 text-[#b58a5c]" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#76645d]">Frais de port : à partir de 5,90 € partout en France.</p>
        <a href="#contact" className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#c89b6d] px-9 py-4 text-sm uppercase tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(185,138,93,0.28)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#b98a5d] hover:shadow-[0_18px_36px_rgba(185,138,93,0.34)] md:px-12 md:py-5">
          Demander un devis personnalisé
          <ArrowRight aria-hidden="true" size={18} strokeWidth={1.7} className="transition-transform duration-500 group-hover:translate-x-1" />
        </a>

        <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center justify-center gap-4 text-sm text-[#675750] sm:flex-row sm:gap-0">
          {[
            { label: 'Réponse sous 24 h', icon: Clock3 },
            { label: 'Devis gratuit', icon: FileCheck2 },
            { label: 'Sans engagement', icon: ShieldCheck },
          ].map(({ label, icon: Icon }, index) => (
            <div key={label} className={`flex items-center gap-2 px-5 ${index > 0 ? 'sm:border-l sm:border-[#dfcfc4]' : ''}`}>
              <Icon aria-hidden="true" size={17} strokeWidth={1.5} className="text-[#b58a5c]" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section ref={ctaSection} className="bg-[#fcf1ec] px-6 py-20 text-center md:py-28">
      <div className={`relative isolate mx-auto max-w-5xl overflow-hidden rounded-[38px] border border-[#e5d2c5] bg-gradient-to-br from-white/95 via-[#fffaf6]/90 to-[#f6e6e1]/85 px-7 py-12 shadow-[0_24px_70px_rgba(91,65,55,0.13)] transition-all duration-700 md:px-14 md:py-16 ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'}`}>
        <Flower2 aria-hidden="true" className="pointer-events-none absolute -left-7 -top-8 -z-10 h-32 w-32 rotate-12 text-[#c89b6d]/[0.08]" strokeWidth={0.75} />
        <Flower2 aria-hidden="true" className="pointer-events-none absolute -bottom-9 -right-6 -z-10 h-36 w-36 -rotate-12 text-[#c48d8d]/[0.08]" strokeWidth={0.75} />
        <span className="pointer-events-none absolute right-[12%] top-10 h-1 w-1 rounded-full bg-[#c89b6d]/40 shadow-[18px_22px_0_rgba(200,155,109,0.2),-15px_32px_0_rgba(200,155,109,0.16)]" />
        <span className="pointer-events-none absolute bottom-12 left-[10%] h-px w-20 bg-gradient-to-r from-transparent via-[#c89b6d]/45 to-transparent" />

        <div className="mx-auto mb-7 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#c89b6d]" />
          <Sparkles size={17} strokeWidth={1.35} className="text-[#c89b6d]" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#c89b6d]" />
        </div>
        <h2 className="mx-auto max-w-4xl font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">Vous souhaitez offrir à vos invités un souvenir pratique, joli et personnalisé ?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#61524d] md:text-lg">Nous créons des éco-cups <span className="font-medium text-[#b98767]">uniques</span> qui reflètent votre événement et laissent un souvenir durable à vos invités.</p>

        <a href="#contact" className="group mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-[#c89b6d] px-10 py-4.5 text-sm uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(185,138,93,0.28)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#b98a5d] hover:shadow-[0_18px_36px_rgba(185,138,93,0.34)] md:px-12 md:py-5">
          Demander un devis
          <ArrowRight aria-hidden="true" size={18} strokeWidth={1.7} className="transition-transform duration-500 group-hover:translate-x-1" />
        </a>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-4 text-sm text-[#675750] sm:flex-row sm:gap-0">
          {[
            { label: 'Réponse sous 24 h', icon: Clock3 },
            { label: 'Devis gratuit', icon: FileCheck2 },
            { label: 'Sans engagement', icon: ShieldCheck },
          ].map(({ label, icon: Icon }, index) => (
            <div key={label} className={`flex items-center gap-2 px-5 ${index > 0 ? 'sm:border-l sm:border-[#dfcfc4]' : ''}`}>
              <Icon aria-hidden="true" size={17} strokeWidth={1.5} className="text-[#b58a5c]" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
}

function Header({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mx-auto mb-14 max-w-3xl text-center"><p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">{eyebrow}</p><h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">{title}</h2><div className="gold-divider mx-auto my-6" /></div>
}
