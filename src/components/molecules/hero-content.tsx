import Image from "next/image";
import Logo from "@/public/assets/logo.jpg";
import { HeroCTA } from "./hero-cta";

export const HeroContent = () => {
  return (
    <>
      {/* Logo responsive */}
      <Image
        src={Logo}
        alt="Logo Busan Castellane"
        className="size-32 rounded-full sm:size-48 md:size-64"
        width={256}
        height={256}
      />

      {/* Titre principal pour SEO et accessibilité */}
      <h1 className="font-serif text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Busan Castellane
      </h1>

      {/* CTA avec hiérarchie claire */}
      <HeroCTA />
    </>
  );
};
