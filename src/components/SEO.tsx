import { useEffect } from "react";

const siteUrl = "https://lebaramagnets.fr";
const defaultImage = `${siteUrl}/favicon.svg`;

const routeMeta: Record<string, { title: string; description: string; keywords: string }> = {
  "/": {
    title: "Le Bar à Magnets | Animation mariage Toulouse & livre d’or audio vidéo",
    description:
      "Animation premium pour mariage et événements à Toulouse : bar à magnets, livre d’or audio, livre d’or vidéo, téléphone audio mariage et souvenirs invités en Occitanie.",
    keywords:
      "livre d’or audio mariage Toulouse, livre d’or vidéo mariage Toulouse, animation mariage Toulouse, animation événementielle Toulouse, animation invités mariage, téléphone audio mariage, téléphone vidéo mariage, bar à magnets Toulouse, animation premium mariage",
  },
  "/animation-mariage-toulouse": {
    title: "Animation mariage Toulouse | Bar à magnets premium",
    description:
      "Offrez une animation mariage à Toulouse élégante et conviviale avec magnets personnalisés, souvenirs invités et expérience premium pour votre réception.",
    keywords:
      "animation mariage Toulouse, animation premium mariage, animation invités mariage, bar à magnets Toulouse, souvenirs invités mariage Toulouse",
  },
  "/animation-bapteme-toulouse": {
    title: "Animation baptême Toulouse | Magnets personnalisés",
    description:
      "Animation baptême à Toulouse avec magnets personnalisés et souvenirs élégants pour vos invités, en Haute-Garonne et Occitanie.",
    keywords: "animation baptême Toulouse, magnets baptême Toulouse, animation événementielle Toulouse",
  },
  "/animation-anniversaire-toulouse": {
    title: "Animation anniversaire Toulouse | Bar à magnets",
    description:
      "Une animation anniversaire à Toulouse originale avec création de magnets en direct et souvenirs personnalisés pour tous vos invités.",
    keywords: "animation anniversaire Toulouse, bar à magnets Toulouse, animation invités anniversaire",
  },
  "/animation-baby-shower-toulouse": {
    title: "Animation baby shower Toulouse | Souvenirs invités",
    description:
      "Animation baby shower à Toulouse avec magnets personnalisés, décor élégant et souvenirs invités pour une fête douce et premium.",
    keywords: "animation baby shower Toulouse, magnets baby shower Toulouse, animation événementielle Toulouse",
  },
  "/animation-evenementielle-toulouse": {
    title: "Animation événementielle Toulouse | Bar à magnets & souvenirs",
    description:
      "Animation événementielle à Toulouse pour mariages, entreprises, baptêmes et anniversaires avec bar à magnets et souvenirs personnalisés.",
    keywords: "animation événementielle Toulouse, animation entreprise Toulouse, bar à magnets Toulouse",
  },
  "/bar-a-magnets-occitanie": {
    title: "Bar à magnets Occitanie | Animation premium Toulouse",
    description:
      "Le Bar à Magnets intervient à Toulouse, Saint-Jory et en Occitanie pour des animations premium et souvenirs invités personnalisés.",
    keywords: "bar à magnets Occitanie, bar à magnets Toulouse, animation mariage Occitanie",
  },
  "/bar-a-magnets-bordeaux": {
    title: "Bar à magnets Bordeaux | Animation mariage & événementielle",
    description:
      "Bar à magnets Bordeaux pour mariage et événementiel : magnets photo personnalisés, animation mariage Bordeaux et souvenirs invités premium en Gironde.",
    keywords:
      "bar à magnets Bordeaux, animation mariage Bordeaux, magnets photo Bordeaux, animation événementielle Bordeaux, bar à magnets Gironde",
  },
  "/bar-a-magnets-gironde": {
    title: "Bar à magnets Gironde | Animation mariage & événementielle",
    description:
      "Bar à magnets Gironde pour mariage et événementiel : magnets photo personnalisés, animation mariage Gironde et souvenirs invités premium.",
    keywords:
      "bar à magnets Gironde, animation mariage Gironde, magnets photo Gironde, animation événementielle Gironde",
  },
  "/livre-dor-audio-mariage-toulouse": {
    title: "Livre d’or audio mariage Toulouse | Téléphone audio & vidéo",
    description:
      "Livre d’or audio mariage Toulouse et livre d’or vidéo mariage avec téléphone vintage, messages illimités, mise en scène premium et installation en Occitanie.",
    keywords:
      "livre d’or audio mariage Toulouse, livre d’or vidéo mariage Toulouse, téléphone audio mariage, téléphone vidéo mariage, animation invités mariage, animation premium mariage Toulouse",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Le Bar à Magnets",
    url: siteUrl,
    image: defaultImage,
    email: "lebaramagnets@outlook.com",
    areaServed: ["Toulouse", "Saint-Jory", "Blagnac", "Colomiers", "Balma", "Montauban", "Albi", "Occitanie"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saint-Jory",
      addressRegion: "Occitanie",
      addressCountry: "FR",
    },
    description:
      "Animation événementielle premium à Toulouse et en Occitanie : bar à magnets, livre d’or audio mariage, livre d’or vidéo mariage et souvenirs invités.",
  },
  {
    "@context": "https://schema.org",
    "@type": "EventService",
    name: "Le Bar à Magnets - Animations mariage et livre d’or audio vidéo",
    provider: {
      "@type": "LocalBusiness",
      name: "Le Bar à Magnets",
      areaServed: "Occitanie",
    },
    serviceType: [
      "Animation mariage Toulouse",
      "Bar à magnets Toulouse",
      "Livre d’or audio mariage Toulouse",
      "Livre d’or vidéo mariage Toulouse",
      "Animation baptême Toulouse",
      "Animation anniversaire Toulouse",
      "Animation baby shower Toulouse",
    ],
    areaServed: ["Toulouse", "Saint-Jory", "Blagnac", "Colomiers", "Balma", "Montauban", "Albi", "Occitanie"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment fonctionne le livre d’or audio ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les invités décrochent le téléphone audio vintage et laissent un message vocal pour les mariés ou les invités d’honneur.",
        },
      },
      {
        "@type": "Question",
        name: "Comment fonctionne le livre d’or audio & vidéo ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les invités enregistrent des messages vidéo et audio depuis un téléphone vintage équipé d’un écran.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est votre zone de déplacement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le Bar à Magnets intervient à Toulouse, Saint-Jory et en Occitanie, avec frais au-delà de 10 km autour de Saint-Jory.",
        },
      },
    ],
  },
];

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertLink(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
}

export function SEO() {
  useEffect(() => {
    const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
    const meta = routeMeta[pathname] ?? routeMeta["/"];
    const canonical = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    const applyMeta = () => {
      document.documentElement.lang = "fr";
      document.title = meta.title;

      upsertMeta('meta[name="description"]', { name: "description", content: meta.description });
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: meta.keywords });
      upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow" });
      upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
      upsertMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
      upsertMeta('meta[property="og:description"]', { property: "og:description", content: meta.description });
      upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: defaultImage });
      upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
      upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
      upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: meta.description });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: defaultImage });
      upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonical });

      const existingSchema = document.getElementById("structured-data");
      existingSchema?.remove();

      const schema = document.createElement("script");
      schema.id = "structured-data";
      schema.type = "application/ld+json";
      schema.text = JSON.stringify(structuredData);
      document.head.appendChild(schema);
    };

    applyMeta();
    window.setTimeout(applyMeta, 0);
  }, []);

  return null;
}
