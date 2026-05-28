import livreAudioAmbiance from "@/assets/livre-audio-ambiance.jpg";
import livreAudioDetail from "@/assets/livre-audio-detail.jpg";
import livreAudioElegant from "@/assets/livre-audio-elegant.jpg";
import livreAudioGuests from "@/assets/livre-audio-couple.jpg";
import livreAudioHero from "@/assets/livre-audio-hero.webp";
import livreAudioSetup from "@/assets/livre-audio-setup.jpg";
import livreVideoAmbiance from "@/assets/livre-video-ambiance.jpg";
import livreVideoDetail from "@/assets/livre-video-detail.jpg";
import livreVideoGuests from "@/assets/livre-video-guests.jpg";
import livreVideoPremium from "@/assets/livre-video-premium.webp";
import livreVideoSetup from "@/assets/livre-video-setup.jpg";

const guestBookPlans = [
  {
    title: "Livre d’or audio — Essentiel",
    price: "149€",
    included: [
      "Téléphone audio vintage",
      "Messages audio illimités",
      "Installation simple",
      "Récupération des audios",
    ],
  },
  {
    title: "Livre d’or audio — Premium",
    price: "199€",
    featured: true,
    included: [
      "Téléphone audio vintage",
      "Messages audio illimités",
      "Rideau de tulle blanc",
      "Rideaux LED chaleureux",
      "Fleurs décoratives",
      "Bougies LED",
      "Mise en scène élégante complète",
      "Installation & désinstallation",
      "Récupération des audios",
    ],
  },
  {
    title: "Livre d’or audio & vidéo — Essentiel",
    price: "249€",
    included: [
      "Téléphone audio & vidéo vintage",
      "Messages audio et vidéo illimités",
      "Installation simple",
      "Récupération des fichiers audio & vidéo",
    ],
  },
  {
    title: "Livre d’or audio & vidéo — Premium",
    price: "299€",
    featured: true,
    included: [
      "Téléphone audio & vidéo vintage",
      "Messages audio et vidéo illimités",
      "Rideau de tulle blanc",
      "Rideaux LED chaleureux",
      "Décoration premium complète",
      "Fleurs décoratives",
      "Bougies LED",
      "Mise en scène immersive",
      "Installation & désinstallation",
      "Récupération des vidéos et audios",
    ],
  },
];

const galleryItems = [
  {
    src: livreAudioSetup,
    alt: "Installation du livre d’or audio",
    label: "Téléphone audio seul",
    span: "md:col-span-2",
  },
  {
    src: livreAudioDetail,
    alt: "Détail du livre d’or audio",
    label: "Téléphone audio & vidéo",
    span: "",
  },
  {
    src: livreAudioGuests,
    alt: "Invités qui utilisent le livre d’or audio",
    label: "Invités qui utilisent le téléphone",
    span: "",
  },
  {
    src: livreAudioAmbiance,
    alt: "Ambiance autour du livre d’or audio",
    label: "Vue d’ensemble du stand",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: livreAudioElegant,
    alt: "Mise en scène premium du livre d’or audio",
    label: "Détails déco",
    span: "",
  },
  {
    src: livreVideoSetup,
    alt: "Installation du livre d’or audio et vidéo",
    label: "Ambiance mariage",
    span: "",
  },
  {
    src: livreVideoGuests,
    alt: "Invités qui utilisent le livre d’or audio et vidéo",
    label: "Baby shower / anniversaire",
    span: "md:col-span-2",
  },
  {
    src: livreVideoAmbiance,
    alt: "Ambiance du livre d’or vidéo",
    label: "Ambiance vidéo",
    span: "",
  },
  {
    src: livreVideoDetail,
    alt: "Détail du livre d’or vidéo",
    label: "Détail vidéo",
    span: "",
  },
  {
    src: livreVideoPremium,
    alt: "Mise en scène premium du livre d’or vidéo",
    label: "Stand vidéo premium",
    span: "md:col-span-2",
  },
];

export function AudioVideoGuestBook() {
  return (
    <section id="livre-or-audio-video" className="relative overflow-hidden bg-[#fcf1ec] py-24 md:py-32">
      <div className="absolute left-4 top-16 h-28 w-28 rounded-full border border-[#c48d8d]/20" />
      <div className="absolute right-8 top-1/3 h-36 w-36 rounded-full border border-[#d9b56d]/20" />

      <div className="relative mx-auto max-w-[1600px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
              Souvenirs vivants
            </p>

            <h2 className="font-display text-4xl leading-tight text-[#2b2523] md:text-6xl">
              Livre d’or audio & vidéo pour mariage à Toulouse
            </h2>

            <div className="gold-divider my-8" />

            <p className="font-serif text-2xl italic leading-snug text-primary md:text-3xl">
              Capturez les émotions, les rires et les souvenirs de vos invités grâce à une expérience unique et inoubliable.
            </p>

            <p className="mt-6 text-base leading-relaxed text-[#6b625c] md:text-lg">
              Offrez à vos invités une façon originale de laisser un souvenir précieux lors de votre événement. Grâce à notre livre d’or audio ou vidéo pour mariage à Toulouse et en Occitanie, vos proches pourront enregistrer des messages remplis d’émotions, de rires et d’amour à réécouter encore et encore après votre mariage, anniversaire, baptême ou événement privé.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#c89b6d] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white shadow-gold transition duration-500 hover:-translate-y-0.5 hover:bg-[#b98a5d] sm:w-auto"
            >
              Demander un devis
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[32px] shadow-soft">
              <img
                src={livreAudioHero}
                alt="Téléphone audio mariage et livre d’or vidéo mariage Toulouse"
                loading="lazy"
                width="900"
                height="1125"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 left-6 right-6 rounded-[28px] border border-[#eaded6] bg-white/92 p-6 shadow-gold backdrop-blur-sm sm:left-auto sm:right-8 sm:w-72">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[#9b6d2f]">
                Audio ou vidéo
              </p>
              <p className="mt-2 font-serif text-2xl leading-tight text-[#2d1d1a]">
                Une animation intime, élégante et pleine d’émotion.
              </p>
            </div>
          </div>
        </div>

        <div id="livre-or-formules" className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {guestBookPlans.map((plan) => (
            <article
              key={plan.title}
              className={`flex h-full flex-col rounded-[28px] border bg-white/78 p-5 text-sm shadow-soft backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 ${
                plan.featured ? "border-[#d9b56d]/70" : "border-[#eaded6]"
              }`}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f4dfda] text-sm text-[#c48d8d]">
                ✦
              </div>

              <h3 className="font-serif text-[18px] leading-tight text-[#2d1d1a] md:text-[20px]">
                {plan.title}
              </h3>

              <p className="mt-2 font-serif text-[42px] italic leading-none text-[#c89b6d]">
                {plan.price}
              </p>

              <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-[#d9b56d]/45 to-transparent" />

              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#9b6d2f]">
                Inclus
              </p>

              <ul className="mb-5 space-y-2 text-sm leading-relaxed text-[#5f514d]">
                {plan.included.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 text-[#d9b56d]">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#c89b6d] px-4 py-3 text-center text-[11px] uppercase tracking-[0.16em] text-white shadow-gold transition duration-500 hover:-translate-y-0.5 hover:bg-[#b98a5d]"
              >
                Demander un devis
              </a>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#6b625c]">
          La version premium inclut une véritable mise en scène décorative élégante pour sublimer votre événement.
        </p>

        <div className="mt-14 rounded-[28px] border border-[#eaded6] bg-[#fff8ef]/85 p-8 shadow-soft md:p-10">
          <div className="grid gap-6 md:grid-cols-[0.65fr_1.35fr] md:items-center">
            <h3 className="font-serif text-3xl leading-tight text-[#2d1d1a] md:text-4xl">
              Livraison & installation
            </h3>

            <div className="space-y-3 text-sm leading-relaxed text-[#5f514d] md:text-base">
              <p>Livraison & installation offertes dans un rayon de 10 km autour de Saint-Jory.</p>
              <p>Au-delà : supplément de 0,60€/km aller-retour.</p>
              <p>Ce supplément comprend la livraison, l’installation et la récupération du matériel.</p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">
              Galerie
            </p>

            <h3 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">
              Inspirations livre d’or
            </h3>

            <div className="gold-divider mx-auto my-6" />
          </div>

          <div className="grid grid-cols-2 auto-rows-[190px] gap-3 md:grid-cols-4 md:auto-rows-[240px] md:gap-4">
            {galleryItems.map((item) => (
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

        <div className="mt-24 rounded-[32px] border border-[#eaded6] bg-white/78 p-8 text-center shadow-soft backdrop-blur-sm md:p-12">
          <h3 className="font-display text-4xl leading-tight text-[#2b2523] md:text-5xl">
            Prêts à offrir des souvenirs inoubliables à vos invités ?
          </h3>

          <div className="gold-divider mx-auto my-6" />

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#6b625c] md:text-lg">
            Choisissez la formule qui correspond à votre événement et laissez vos proches créer des souvenirs remplis d’émotion.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#c89b6d] px-8 py-4 text-sm uppercase tracking-[0.22em] text-white shadow-gold transition duration-500 hover:-translate-y-0.5 hover:bg-[#b98a5d] sm:w-auto"
            >
              Demander un devis
            </a>

            <a
              href="#livre-or-formules"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#d9b56d]/60 bg-[#fff8ef] px-8 py-4 text-sm uppercase tracking-[0.22em] text-[#8a612a] transition duration-500 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
            >
              Voir les formules
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
