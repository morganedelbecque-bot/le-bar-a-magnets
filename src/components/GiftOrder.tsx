import giftImage from "../assets/file_0000000009fc71f59cf3bedad241fac6.png";

export default function GiftOrder() {
  return (
    <section className="bg-[#fbf7f1] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#c89b6d] mb-4">
            Sans animation
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#2b2523] mb-6 leading-tight">
            Commande cadeau <br />
            <span className="italic text-[#c89b6d]">invité.</span>
          </h2>

          
            <p className="text-[#6b625c] leading-relaxed mb-8">
  Offrez à vos invités un souvenir personnalisé et intemporel.
  <br /><br />

  Le Bar à Magnets réalise vos magnets sur mesure, livrés prêts à être disposés le jour de votre événement, sans présence d’animation sur place.
  <br /><br />

  Une solution idéale pour les mariages intimistes, les petits espaces ou les événements au planning déjà bien rempli.
</p>
          

          <a
  href="mailto:lebaramagnets@outlook.com?subject=Commande%20magnets%20cadeaux%20invit%C3%A9s&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20des%20informations%20pour%20une%20commande%20de%20magnets%20personnalis%C3%A9s.%0A%0ANom%20%3A%0ADate%20%3A%0AQuantit%C3%A9%20%3A%0A%0AMerci%20%21"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-full bg-[#c89b6d] px-8 py-4 text-white shadow-md hover:opacity-90 transition"
>
  Commander par email
</a>
        </div>

        <img
          src={giftImage}
          alt="Commande cadeau invités magnets personnalisés pour mariage Toulouse"
          loading="lazy"
          width="900"
          height="900"
          className="w-full rounded-3xl shadow-xl object-cover"
        />

      </div>
    </section>
  );
}
