import { useState } from "react";

const faqs = [
  {
    q: "Comment se déroule l'animation le jour J ?",
    a: "Nous arrivons environ 1h30 avant le début pour installer le stand : nappe rose poudré, fleurs, lumières chaudes, imprimante, presse à badges et tableau noir. Vos invités scannent le QR code, envoient leurs photos via WhatsApp, et nous fabriquons les magnets en direct devant eux pendant toute la soirée.",
  },
  {
    q: "Combien de temps dure la prestation ?",
    a: "L'animation dure généralement entre 4 et 6 heures, en continu pendant votre événement. Nous adaptons la durée à vos besoins — cocktail, dîner, soirée dansante. Comptez environ 5 minutes entre l'envoi de la photo et la remise du magnet.",
  },
  {
    q: "Quel est le format des magnets ?",
    a: "Nos magnets sont ronds, d'un diamètre de 58 mm, recouverts d'un film transparent brillant pour une finition premium. Le dos aimanté tient parfaitement sur un frigo ou toute surface métallique. Format pensé pour être à la fois précieux et pratique.",
  },
  {
    q: "Comment les invités envoient-ils leurs photos ?",
    a: "Très simplement, via WhatsApp. Un QR code élégant, posé dans un cadre doré sur le stand, redirige vers notre numéro dédié. Aucune application à télécharger, aucun compte à créer — un scan, une photo, c'est envoyé.",
  },
  {
    q: "Peut-on personnaliser le visuel des magnets ?",
    a: "Bien sûr. Nous pouvons ajouter votre prénom, vos initiales, votre date d'événement, un cadre graphique aux couleurs de votre mariage, ou un petit message. La personnalisation est offerte et préparée en amont avec vous.",
  },
  {
    q: "Combien de magnets pouvez-vous produire ?",
    a: "En moyenne 250 à 350 magnets sur une soirée, selon le rythme. Pour les très grands événements, nous pouvons doubler le matériel. Aucun invité ne repart sans son souvenir.",
  },
  {
    q: "Quelle est votre zone de déplacement ?",
    a: "Nous nous déplaçons uniquement en Occitanie. Au-delà de 10 km autour de Saint-Jory, des frais de déplacement de 0,60 € par kilomètre sont appliqués.",
  },
  {
    q: "Quel est le tarif de la prestation ?",
    a: "Chaque devis est personnalisé selon le nombre d'invités, la durée, le lieu et les options choisies. Remplissez le formulaire de contact, nous revenons vers vous sous 48h avec une proposition sur mesure.",
  },
];

const guestBookFaqs = [
  {
    q: "Comment fonctionne le livre d’or audio ?",
    a: "Les invités décrochent simplement le téléphone vintage et laissent un message vocal rempli d’émotions, de rires et de souvenirs pour les mariés ou les invités d’honneur.",
  },
  {
    q: "Comment fonctionne le livre d’or audio & vidéo ?",
    a: "Les invités peuvent enregistrer des messages vidéo et audio directement depuis le téléphone vintage équipé d’un écran. Une expérience originale et immersive pour conserver des souvenirs uniques.",
  },
  {
    q: "Les messages sont-ils illimités ?",
    a: "Oui, tous nos livres d’or audio et audio & vidéo permettent des enregistrements illimités pendant toute la durée de votre événement.",
  },
  {
    q: "Quand récupérons-nous les souvenirs ?",
    a: "Les fichiers audio et vidéo sont transmis après l’événement afin que vous puissiez conserver et revivre ces précieux souvenirs à tout moment.",
  },
  {
    q: "Installez-vous le matériel sur place ?",
    a: "Oui, l’installation et la désinstallation sont réalisées par nos soins afin de garantir une mise en scène élégante et un fonctionnement optimal.",
  },
  {
    q: "Intervenez-vous uniquement pour les mariages ?",
    a: "Non, nos livres d’or audio et vidéo sont également disponibles pour les anniversaires, baptêmes, baby showers, événements privés et professionnels.",
  },
  {
    q: "La décoration est-elle incluse ?",
    a: "Nos formules premium incluent une véritable mise en scène décorative avec rideaux tulle, éclairage LED et décoration élégante pour sublimer votre événement.",
  },
];

const faqGroups = [
  {
    title: "Le Bar à Magnets",
    items: faqs,
  },
  {
    title: "Livre d’or audio & vidéo",
    items: guestBookFaqs,
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  let itemIndex = 0;

  return (
    <section id="faq" className="py-28 md:py-40 bg-[#fbf1ea]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#d9b56d] mb-4 font-medium">
            Questions fréquentes
          </p>

          <h2 className="font-serif font-light text-4xl md:text-5xl text-[#2d1d1a] leading-[1.02] tracking-[-0.02em]">
            Tout ce que vous devez savoir
          </h2>

          <div className="mx-auto my-6 h-px w-24 bg-[#eaded6]" />

          <p className="text-[#5f514d] text-base md:text-lg leading-relaxed">
            Les réponses aux questions que se posent souvent nos futurs mariés.
          </p>
        </div>

        <div className="space-y-12">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-serif text-2xl font-light leading-tight text-[#2d1d1a] md:text-3xl">
                {group.title}
              </h3>

              <div className="divide-y divide-[#eaded6] border-t border-b border-[#eaded6]">
                {group.items.map((f) => {
                  const currentIndex = itemIndex++;
                  const isOpen = open === currentIndex;

                  return (
                    <div key={f.q}>
                      <button
                        onClick={() => setOpen(isOpen ? null : currentIndex)}
                        className="w-full flex items-start justify-between gap-6 py-5 px-6 rounded-[28px] text-left group transition-colors duration-300 hover:bg-[#f8efe9]"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif font-light text-xl md:text-2xl leading-snug text-[#2d1d1a] transition-colors">
                          {f.q}
                        </span>

                        <span
                          className={`shrink-0 mt-1 w-8 h-8 rounded-full border border-[#d9b56d] flex items-center justify-center text-[#d9b56d] transition-transform duration-500 ${
                            isOpen ? "rotate-45 bg-[#d9b56d]/10" : "bg-transparent"
                          }`}
                          aria-hidden
                        >
                          <span className="text-xl leading-none">+</span>
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 pb-6"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-[#5f514d] leading-8 pr-14 font-serif font-normal text-base">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-foreground/70 mb-5 font-serif italic text-lg">
            Une autre question ? Écrivez-nous, nous y répondrons avec plaisir.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-3.5 rounded-full gradient-gold text-foreground text-sm uppercase tracking-[0.2em] shadow-gold hover:-translate-y-0.5 transition-all duration-500"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
