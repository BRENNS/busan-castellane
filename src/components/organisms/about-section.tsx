"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import usImage from "@/public/assets/daniel-78jWkCp_jdM-unsplash.jpg";
import { SectionTitle } from "@/src/components/atoms/section-title";
import { AboutTextGrid } from "@/src/components/molecules/about-text-grid";

export const AboutSection = () => {
  const t = useTranslations();

  return (
    <section className="min-h-screen lg:h-screen text-white bg-black">
      <div className="mx-auto max-w-7xl w-full h-2/5 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 py-20 px-8 md:px-16 lg:px-18">
        {/* Titre principal - colonne gauche */}
        <div className="flex">
          <SectionTitle>{t('about-title')}</SectionTitle>
        </div>

        {/* Colonnes de texte - deux colonnes droite */}
        <AboutTextGrid />
      </div>

      <div className="lg:h-3/5 w-full">
        <Image
          src={usImage}
          alt={t('about-title')}
          className="object-cover h-full w-full"
          width={900}
          height={900}
        />
      </div>
    </section>
  );
};
