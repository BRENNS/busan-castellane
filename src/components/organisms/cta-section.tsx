"use client";

import { useTranslations } from "next-intl";
import { OpeningHours } from "@/src/components/molecules/opening-hours";
import Image from "next/image";
import Link from "next/link";
import reservationImage from "@/public/assets/clint-bustrillos-UE6KHjZDAUY-unsplash.jpg";
import menuImage from "@/public/assets/goodeats-yqr-LY4xyLYX5Vs-unsplash.jpg";
import directionImage from "@/public/assets/glib-albovsky-Yo74uWt52bo-unsplash.jpg";
import { cn } from "@/src/utils/cn";
import { Button } from "@/src/components/ui/button";

export const CTASection = () => {
  const t = useTranslations();
  return (
    <section className="min-h-screen bg-black flex flex-col">
      {/* Header avec logo, horaires et adresse */}
      <div className="w-full py-16 md:py-20 lg:py-24 px-8 md:px-12 lg:px-16 flex items-center justify-center">
        <OpeningHours />
      </div>

      <div className="flex md:flex-row flex-col w-full items-center md:justify-around py-12 px-8">
        {/* Réserver */}
        <div className="w-56 h-56 relative border-white border overflow-hidden group cursor-pointer">
          <Image
            src={reservationImage}
            alt={t('cta-reserve-title')}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute flex items-center justify-center bg-black/30 group-hover:bg-black/50 h-full w-full transition-all duration-500 ease-out">
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "rounded-none border-2 border-white text-lg font-serif",
                "bg-black/50 text-white hover:bg-white hover:text-black",
                "transition-all duration-500 ease-out",
                "group-hover:scale-110 group-hover:tracking-wider",
              )}
            >
              <Link
                href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/reservation"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('cta-reserve-title')}
              </Link>
            </Button>
          </div>
        </div>

        {/* Voir le menu */}
        <div className="w-56 h-56 relative border-white border overflow-hidden group cursor-pointer">
          <Image
            src={menuImage}
            alt={t('cta-menu-title')}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute flex items-center justify-center bg-black/30 group-hover:bg-black/50 h-full w-full transition-all duration-500 ease-out">
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "rounded-none border-2 border-white text-lg font-serif",
                "bg-black/50 text-white hover:bg-white hover:text-black",
                "transition-all duration-500 ease-out",
                "group-hover:scale-110 group-hover:tracking-wider",
              )}
            >
              <Link
                href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/dine-in"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('cta-menu-title')}
              </Link>
            </Button>
          </div>
        </div>

        {/* S'y rendre */}
        <div className="w-56 h-56 relative border-white border overflow-hidden group cursor-pointer">
          <Image
            src={directionImage}
            alt={t('cta-directions-title')}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute flex items-center justify-center bg-black/30 group-hover:bg-black/50 h-full w-full transition-all duration-500 ease-out">
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "rounded-none border-2 border-white text-lg font-serif",
                "bg-black/50 text-white hover:bg-white hover:text-black",
                "transition-all duration-500 ease-out",
                "group-hover:scale-110 group-hover:tracking-wider",
              )}
            >
              <Link
                href="https://share.google/kyeojNYCZyxLdng7T"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('cta-directions-title')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
