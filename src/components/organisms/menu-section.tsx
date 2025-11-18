"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/src/components/atoms/section-title";
import { ArrowButton } from "@/src/components/atoms/arrow-button";
import {
  MenuCarousel,
  type MenuCarouselRef,
} from "@/src/components/molecules/menu-carousel";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/utils/cn";
import Link from "next/link";

export const MenuSection = () => {
  const t = useTranslations();
  const carouselRef = useRef<MenuCarouselRef>(null);

  const handlePrevious = () => {
    carouselRef.current?.scrollLeft();
  };

  const handleNext = () => {
    carouselRef.current?.scrollRight();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-14 bg-black text-white">
      <div className="mx-auto relative flex items-end justify-center w-full mb-16 md:py-0 py-10 px-8 md:px-16 lg:px-18">
        <SectionTitle>
          {t('menu-title')}
          <br />
          {t('menu-subtitle')}
        </SectionTitle>

        <div className="flex gap-10 absolute right-10 lg:bottom-none bottom-0">
          <ArrowButton direction="left" onClick={handlePrevious} />
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full px-8">
        <MenuCarousel ref={carouselRef} />
      </div>

      <Button
        asChild
        variant="outline"
        size="lg"
        className={cn(
          "rounded-none border-2 border-white text-lg",
          "bg-transparent text-white hover:bg-white hover:text-black",
          "transition-all duration-300",
        )}
      >
        <Link
          href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/dine-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('menu-cta')}
        </Link>
      </Button>
    </div>
  );
};
