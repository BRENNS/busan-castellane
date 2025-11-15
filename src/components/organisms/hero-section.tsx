import Image from "next/image";
import HeroImg from "@/public/assets/clint-bustrillos-UE6KHjZDAUY-unsplash.jpg";
import { cn } from "@/src/utils/cn";
import { HeroContent } from "@/src/components/molecules/hero-content";

export const HeroSection = () => {
  return (
    <section className="relative h-[100dvh]" aria-label="Bienvenue au Restaurant Busan Castellane">
      {/* Image Hero avec priority pour le LCP */}
      <Image
        src={HeroImg}
        alt="Restaurant coréen Busan Castellane à Marseille - Barbecue coréen authentique et spécialités traditionnelles"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={90}
      />

      {/* Overlay plus foncé pour meilleur contraste */}
      <div
        className={cn(
          "absolute h-full w-full bg-black/50",
          "flex flex-col items-center justify-center",
          "gap-6 px-4 sm:gap-8 md:gap-10",
        )}
      >
        <HeroContent />
      </div>
    </section>
  );
};
