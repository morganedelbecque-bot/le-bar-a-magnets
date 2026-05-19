import { useState } from "react";
import type { FormEvent } from "react";
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
    const date = String(data.get("date") || "");
    const invites = String(data.get("invites") || "");
    const lieu = String(data.get("lieu") || "");
    const typeEv = String(data.get("type") || "");
    const messageText = String(data.get("message") || "");

    const escapeHtml = (str: string) =>
      str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const htmlMessage = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; background:#f8f1ec; padding:24px; color:#222;">
        <div style="max-width:680px; margin:0 auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 8px 30px rgba(0,0,0,0.06);">
          <div style="background:linear-gradient(90deg,#f8f1ec 0%,#fff 100%); padding:24px 28px; border-bottom:1px solid #f1e9e2;">
            <h1 style="margin:0; font-size:20px; color:#b57a2a;">Nouvelle demande de devis</h1>
            <div style="color:#7a5b4a; margin-top:6px;">Le Bar à Magnets</div>
          </div>

          <div style="padding:20px 28px; color:#333;">
            <h2 style="margin:0 0 12px 0; font-size:16px; color:#b57a2a;">Informations client</h2>

            <table style="width:100%; border-collapse:collapse; font-size:14px; color:#333;">
              <tbody>
                <tr><td style="padding:8px 0; width:160px; color:#8b6b54;">Prénom</td><td style="padding:8px 0;">${escapeHtml(prenom)}</td></tr>
                <tr><td style="padding:8px 0; color:#8b6b54;">Nom</td><td style="padding:8px 0;">${escapeHtml(nom)}</td></tr>
                <tr><td style="padding:8px 0; color:#8b6b54;">Téléphone</td><td style="padding:8px 0;">${escapeHtml(telephone)}</td></tr>
                <tr><td style="padding:8px 0; color:#8b6b54;">Email</td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
                <tr><td style="padding:8px 0; color:#8b6b54;">Date</td><td style="padding:8px 0;">${escapeHtml(date)}</td></tr>
                <tr><td style="padding:8px 0; color:#8b6b54;">Nombre d'invités</td><td style="padding:8px 0;">${escapeHtml(invites)}</td></tr>
                <tr><td style="padding:8px 0; color:#8b6b54;">Lieu</td><td style="padding:8px 0;">${escapeHtml(lieu)}</td></tr>
                <tr><td style="padding:8px 0; color:#8b6b54;">Type d'événement</td><td style="padding:8px 0;">${escapeHtml(typeEv)}</td></tr>
              </tbody>
            </table>

            <div style="margin-top:18px;">
              <h3 style="margin:0 0 8px 0; font-size:14px; color:#b57a2a;">Message du client</h3>
              <div style="padding:12px; background:#fff6f2; border-radius:8px; color:#444; border:1px solid #f1e9e2;">${escapeHtml(messageText).replaceAll('\n','<br/>')}</div>
            </div>

            <div style="margin-top:18px; text-align:left;">
              <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block; padding:10px 16px; background:#b57a2a; color:#fff; text-decoration:none; border-radius:8px;">Répondre au client</a>
            </div>
          </div>
        </div>
      </div>
    `;

    const cleanData = {
      access_key,
      subject,
      prenom,
      nom,
      telephone,
      email,
      date,
      invites,
      lieu,
      type: typeEv,
      message: htmlMessage,
    };

    try {
      console.log("ContactForm: sending cleanData", { cleanData });

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanData),
      });

      let json: any = null;
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
        <img src={chalkboard} alt="" className="w-full h-full object-cover" loading="lazy" />

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
            Chaque événement est unique. Confiez-nous vos envies, votre date, votre lieu — nous reviendrons rapidement vers vous avec une proposition sur mesure.
          </p>

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
              <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">Type d'événement</label>

              <select name="type" required className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-sm transition-colors">
                <option value="">Choisir…</option>
                {eventTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-2">Message</label>

              <textarea name="message" rows={4} placeholder="Parlez-nous de votre événement…" className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2.5 text-sm transition-colors resize-none" />
            </div>

            <button type="submit" disabled={status === "sending"} className="w-full mt-4 px-8 py-4 rounded-full gradient-gold text-foreground text-sm uppercase tracking-[0.25em] shadow-gold hover:shadow-soft transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed relative z-30 pointer-events-auto touch-auto">
              {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>

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

      <input type={type} name={name} required={required} min={min} className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2.5 text-sm transition-colors" />
    </div>
  );
}
