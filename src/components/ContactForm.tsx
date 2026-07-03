import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Check, Clock3, Handshake, LockKeyhole, Sparkles } from "lucide-react";
import chalkboard from "@/assets/chalkboard.jpg";

const eventTypes = [
  "Mariage",
  "Baptême",
  "Baby shower",
  "Anniversaire",
  "Événement privé",
  "Événement professionnel",
  "Soirée d’entreprise",
  "Autre",
];

const prestationOptions = [
  "Bar à magnets",
  "Livre d’or audio",
  "Livre d’or audio premium",
  "Livre d’or audio & vidéo",
  "Livre d’or audio & vidéo premium",
  "Éco-cups personnalisés",
  "Bar à magnets + livre d’or audio",
  "Bar à magnets + livre d’or audio & vidéo",
  "Bar à magnets + éco-cups personnalisés",
  "Je ne sais pas encore",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    // ensure native HTML validation runs (mobile friendly)
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("idle");
      console.warn("ContactForm: validation failed");
      return;
    }

    const data = new FormData(form);

    const access_key = String(data.get("access_key") || "");
    const subject = String(data.get("subject") || "Nouvelle demande de devis - Le Bar à Magnets");
    const prenom = String(data.get("prenom") || "");
    const nom = String(data.get("nom") || "");
    const telephone = String(data.get("telephone") || "");
    const email = String(data.get("email") || "");
    const from_name = [prenom, nom].filter(Boolean).join(" ") || "Demande de devis";
    const date = String(data.get("date") || "");
    const invites = String(data.get("invites") || "");
    const lieu = String(data.get("lieu") || "");
    const prestation = String(data.get("prestation") || "");
    const typeEv = String(data.get("type") || "");
    const messageText = String(data.get("message") || "");

    const plainMessage = [
      "Nouvelle demande de devis",
      "",
      `Prénom : ${prenom}`,
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Email : ${email}`,
      `Date : ${date}`,
      `Nombre d'invités : ${invites}`,
      `Lieu : ${lieu}`,
      `Prestation souhaitée : ${prestation}`,
      `Type d'événement : ${typeEv}`,
      "",
      "Message client :",
      messageText || "-",
    ].join("\n");

    const cleanData = {
      access_key,
      subject,
      from_name,
      email,
      prenom,
      nom,
      telephone,
      date,
      invites,
      lieu,
      prestation,
      type: typeEv,
      message: plainMessage,
    };

    try {
      console.log("ContactForm: sending cleanData", { cleanData });

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanData),
      });

      let json: { success?: boolean; [key: string]: unknown } | null = null;
      try {
        json = await res.json();
      } catch (e) {
        console.warn("ContactForm: response is not valid JSON", e);
      }

      console.log("ContactForm: web3forms response", { status: res.status, ok: res.ok, json });

      if (res.ok && json && json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        console.error("ContactForm: Web3Forms returned error", { status: res.status, json });
      }
    } catch (err) {
      setStatus("error");
      console.error("ContactForm: network error sending to Web3Forms", err);
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden bg-cream">
      <div className="absolute top-0 left-0 w-1/2 h-full hidden lg:block">
        <img
          src={chalkboard}
          alt="Demande de devis animation mariage Toulouse et livre d’or audio vidéo"
          className="w-full h-full object-cover"
          loading="lazy"
          width="900"
          height="1200"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f8f1ec]/65 to-[#f8f1ec]" />
        <div className="absolute inset-0 bg-[#f8f1ec]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f1ec]/10 via-transparent to-[#f8f1ec]/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <div className="lg:pr-12 lg:py-12">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Contact & Devis</p>

          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
            Parlez-nous de <em className="text-primary">votre événement</em>.
          </h2>

          <div className="gold-divider my-6 !mx-0" />

          <p className="text-foreground/70 text-lg leading-relaxed">
            Chaque événement est unique. Confiez-nous vos envies pour une
            animation de mariage à Toulouse, un téléphone audio mariage, un
            téléphone vidéo mariage ou un bar à magnets en Occitanie — nous
            reviendrons rapidement vers vous avec une proposition sur mesure.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Nos engagements">
            {[
              { label: "Devis gratuit", icon: Sparkles },
              { label: "Réponse personnalisée sous 24 à 48 h", icon: Clock3 },
              { label: "Sans engagement", icon: Handshake },
              { label: "Vos informations restent confidentielles", icon: LockKeyhole },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex min-h-14 items-center gap-3 rounded-2xl border border-[#decdbf]/70 bg-white/55 px-4 py-3 text-sm text-[#5d4c44] shadow-[0_7px_22px_rgba(77,55,44,0.05)] backdrop-blur-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4e7d8] text-[#b48754]">
                  <Icon aria-hidden="true" size={16} strokeWidth={1.6} />
                </span>
                <span className="leading-5">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-gold mt-0.5">✦</span>

              <div>
                <div className="font-medium">Email</div>

                <a href="mailto:lebaramagnets@outlook.com" className="text-foreground/70 hover:text-primary">lebaramagnets@outlook.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gold mt-0.5">✦</span>

              <div>
                <div className="font-medium">Devis sous 48h</div>

                <div className="text-foreground/70">Réponse personnalisée et rapide.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/95 p-10 md:p-12 rounded-[32px] shadow-soft border border-border/20 backdrop-blur-sm">
          <p className="mb-8 border-b border-[#eadfd5] pb-6 font-serif text-lg leading-relaxed text-[#5d4c44]">
            Remplissez ce formulaire en moins de 2 minutes. Nous reviendrons rapidement vers vous avec une proposition personnalisée.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST" onSubmit={onSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="340740a0-3b6b-4e5a-8894-945f17ee94e6" />
            <input type="hidden" name="subject" value="Nouvelle demande de devis - Le Bar à Magnets" />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Prénom" name="prenom" required />
              <Field label="Nom" name="nom" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Téléphone" name="telephone" type="tel" required />

              <Field label="Email" name="email" type="email" required />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Date de l'événement" name="date" type="date" required />

              <Field label="Nombre d'invités" name="invites" type="number" min="1" required />
            </div>

            <Field label="Lieu de l'événement" name="lieu" required />

            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">Prestation souhaitée</label>

              <select name="prestation" required className="w-full rounded-2xl border border-[#dfd2c7] bg-[#fdf9f3] px-4 py-3.5 text-sm shadow-[0_4px_14px_rgba(73,53,43,0.04)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4b98c] focus:-translate-y-0.5 focus:border-[#c89b5c] focus:ring-2 focus:ring-[#c89b5c]/15">
                <option value="">Choisir…</option>
                {prestationOptions.map((prestation) => (
                  <option key={prestation}>{prestation}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">Type d'événement</label>

              <select name="type" required className="w-full rounded-2xl border border-[#dfd2c7] bg-[#fdf9f3] px-4 py-3.5 text-sm shadow-[0_4px_14px_rgba(73,53,43,0.04)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4b98c] focus:-translate-y-0.5 focus:border-[#c89b5c] focus:ring-2 focus:ring-[#c89b5c]/15">
                <option value="">Choisir…</option>
                {eventTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">Message</label>

              <textarea name="message" rows={4} placeholder="Parlez-nous de votre événement…" className="w-full resize-none rounded-2xl border border-[#dfd2c7] bg-[#fdf9f3] px-4 py-3.5 text-sm shadow-[0_4px_14px_rgba(73,53,43,0.04)] outline-none transition-all duration-300 placeholder:text-foreground/35 hover:-translate-y-0.5 hover:border-[#d4b98c] focus:-translate-y-0.5 focus:border-[#c89b5c] focus:ring-2 focus:ring-[#c89b5c]/15" />
            </div>

            <button type="submit" disabled={status === "sending"} className="group relative z-30 mt-4 flex min-h-16 w-full touch-auto items-center justify-center gap-3 rounded-full px-8 py-5 gradient-gold text-sm uppercase tracking-[0.22em] text-foreground shadow-[0_12px_28px_rgba(190,145,80,0.24)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(190,145,80,0.32)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 pointer-events-auto">
              <span>{status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}</span>
              {status !== "sending" && <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-1.5" />}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-foreground/60" aria-label="Garanties de la demande de devis">
              {["Devis gratuit", "Sans engagement", "Réponse rapide"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check aria-hidden="true" size={14} strokeWidth={2} className="text-[#b48754]" />
                  {item}
                </span>
              ))}
            </div>

            {status === "sent" && (
              <p className="text-center text-sm text-primary animate-fade-in">✦ Merci ! Votre demande a bien été envoyée. Nous revenons vers vous très vite.</p>
            )}

            {status === "error" && (
              <p className="text-center text-sm text-destructive animate-fade-in">Une erreur est survenue. Merci d'écrire directement à lebaramagnets@outlook.com.</p>
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
      <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">{label}</label>

      <input type={type} name={name} required={required} min={min} className="w-full rounded-2xl border border-[#dfd2c7] bg-[#fdf9f3] px-4 py-3.5 text-sm shadow-[0_4px_14px_rgba(73,53,43,0.04)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4b98c] focus:-translate-y-0.5 focus:border-[#c89b5c] focus:ring-2 focus:ring-[#c89b5c]/15" />
    </div>
  );
}
