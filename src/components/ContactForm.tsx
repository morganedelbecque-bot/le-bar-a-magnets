import { useState } from "react";
import type { FormEvent } from "react";
import chalkboard from "@/assets/chalkboard.jpg";

const eventTypes = [
  "Mariage",
  "Anniversaire",
  "Baptême",
  "Événement privé",
  "Autre",
];

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/lebaramagnets@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden bg-cream"
    >
      <div className="absolute top-0 left-0 w-1/2 h-full hidden lg:block">
        <img
          src={chalkboard}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f8f1ec]/65 to-[#f8f1ec]" />
        <div className="absolute inset-0 bg-[#f8f1ec]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f1ec]/10 via-transparent to-[#f8f1ec]/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <div className="lg:pr-12 lg:py-12">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">
            Contact & Devis
          </p>

          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
            Parlez-nous de{" "}
            <em className="text-primary">votre événement</em>.
          </h2>

          <div className="gold-divider my-6 !mx-0" />

          <p className="text-foreground/70 text-lg leading-relaxed">
            Chaque événement est unique. Confiez-nous vos envies, votre date,
            votre lieu — nous reviendrons rapidement vers vous avec une
            proposition sur mesure.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-gold mt-0.5">✦</span>

              <div>
                <div className="font-medium">Email</div>

                <a
                  href="mailto:lebaramagnets@gmail.com"
                  className="text-foreground/70 hover:text-primary"
                >
                  lebaramagnets@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gold mt-0.5">✦</span>

              <div>
                <div className="font-medium">Devis sous 48h</div>

                <div className="text-foreground/70">
                  Réponse personnalisée et rapide.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/95 p-10 md:p-12 rounded-[32px] shadow-soft border border-border/20 backdrop-blur-sm">
          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="hidden"
              name="_subject"
              value="Nouvelle demande de devis – Le Bar à Magnets"
            />

            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Prénom" name="prenom" required />
              <Field label="Nom" name="nom" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Téléphone"
                name="telephone"
                type="tel"
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Date de l'événement"
                name="date"
                type="date"
                required
              />

              <Field
                label="Nombre d'invités"
                name="invites"
                type="number"
                min="1"
                required
              />
            </div>

            <Field
              label="Lieu de l'événement"
              name="lieu"
              required
            />

            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">
                Type d'événement
              </label>

              <select
                name="type"
                required
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-sm transition-colors"
              >
                <option value="">Choisir…</option>

                {eventTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows={4}
                placeholder="Parlez-nous de votre événement…"
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2.5 text-sm transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full mt-4 px-8 py-4 rounded-full gradient-gold text-foreground text-sm uppercase tracking-[0.25em] shadow-gold hover:shadow-soft transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Envoi en cours…"
                : "Envoyer ma demande"}
            </button>

            {status === "sent" && (
              <p className="text-center text-sm text-primary animate-fade-in">
                ✦ Merci ! Votre demande a bien été envoyée. Nous revenons vers
                vous très vite.
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-sm text-destructive animate-fade-in">
                Une erreur est survenue. Merci d'écrire directement à
                lebaramagnets@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        min={min}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2.5 text-sm transition-colors"
      />
    </div>
  );
}