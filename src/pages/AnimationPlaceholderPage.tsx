import { useEffect } from 'react'

interface AnimationPlaceholderPageProps {
  title: string
  subtitle: string
  description: string
  eventTypes: string[]
}

export function AnimationPlaceholderPage({
  title,
  subtitle,
  description,
  eventTypes,
}: AnimationPlaceholderPageProps) {
  useEffect(() => {
    document.title = `${title} | Le Bar à Magnets`
    window.scrollTo(0, 0)
  }, [title])

  return (
    <main className="bg-[#fcf1ec] text-slate-950 font-sans">
      <section className="relative overflow-hidden bg-[#38271f] text-[#f3e7dc] px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#d9b56d] mb-4 font-medium">
            {subtitle}
          </p>

          <h1 className="font-serif text-5xl md:text-6xl leading-tight">{title}</h1>

          <p className="mt-6 max-w-3xl text-sm md:text-base text-[#f6eadb] leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {eventTypes.map((type) => (
              <span
                key={type}
                className="rounded-full bg-[#5e443a] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#f3e7dc]"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl text-slate-950 mb-6">Page en construction</h2>
        <p className="text-slate-700 leading-relaxed">
          Cette page sera bientôt enrichie avec une présentation détaillée de nos animations pour {title.toLowerCase()} à Toulouse et en Occitanie.
          En attendant, contactez-nous pour créer une animation sur mesure pour votre événement: mariage, baptême, anniversaire, baby shower,
          soirée privée ou événement d’entreprise.
        </p>
      </section>
    </main>
  )
}
