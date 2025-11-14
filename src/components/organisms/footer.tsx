import Image from "next/image";
import Logo from "@/public/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10" itemScope itemType="https://schema.org/Restaurant">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={Logo}
              alt="Logo Busan Castellane - Restaurant Coréen Marseille"
              width={100}
              height={100}
              className="rounded-full"
              itemProp="logo"
            />
            <meta itemProp="name" content="Busan Castellane" />
            <meta itemProp="servesCuisine" content="Coréenne" />
            <meta itemProp="priceRange" content="€€" />
          </div>

          {/* Navigation CTA */}
          <nav className="flex flex-col space-y-4 text-center md:text-left" aria-label="Navigation principale">
            <h4 className="font-serif text-lg text-white uppercase tracking-[0.2em] mb-2">
              Navigation
            </h4>
            <a
              href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors duration-300"
              itemProp="acceptsReservations"
              aria-label="Réserver une table au restaurant Busan Castellane"
            >
              Réserver
            </a>
            <a
              href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/dine-in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors duration-300"
              itemProp="hasMenu"
              aria-label="Consulter le menu du restaurant"
            >
              Voir le menu
            </a>
            <a
              href="https://share.google/kyeojNYCZyxLdng7T"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors duration-300"
              aria-label="Obtenir l'itinéraire vers le restaurant"
            >
              S&apos;y rendre
            </a>
          </nav>

          {/* Contact & Horaires */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h4 className="font-serif text-lg text-white uppercase tracking-[0.2em] mb-2">
              Contact
            </h4>
            <a
              href="tel:+33491785722"
              className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-300"
              itemProp="telephone"
              aria-label="Appeler le restaurant au 04 91 78 57 22"
            >
              04 91 78 57 22
            </a>
            <div className="text-white/60 text-xs uppercase tracking-wider space-y-1" itemProp="openingHours">
              <p>
                <time>Midi: 12:00 – 14:30</time>
              </p>
              <p>
                <time>Soir: 19:00 – 22:30</time>
              </p>
              <p className="pt-1">Lundi – Samedi</p>
              <meta itemProp="openingHours" content="Mo-Sa 12:00-14:30" />
              <meta itemProp="openingHours" content="Mo-Sa 19:00-22:30" />
            </div>
          </div>

          {/* Adresse */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h4 className="font-serif text-lg text-white uppercase tracking-[0.2em] mb-2">
              Adresse
            </h4>
            <address
              className="not-italic text-white/70 text-sm leading-relaxed tracking-wide"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">6 Rue du Rouet</span>
              <br />
              <span itemProp="postalCode">13006</span> <span itemProp="addressLocality">Marseille</span>
              <br />
              <span itemProp="addressCountry">France</span>
            </address>
            <div className="pt-2 border-t border-white/10">
              <p className="text-white/60 text-xs tracking-wide leading-relaxed">
                Parking à tarif réduit
                <br />
                <span className="text-white/50">
                  1h30 à 3,70€ au lieu de 5,50€
                  <br />
                  Demandez en caisse
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs tracking-wider">
            Fait avec le cœur par{" "}
            <a
              href="https://www.suzzyapp.com/fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 underline underline-offset-2"
            >
              Suzzy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};