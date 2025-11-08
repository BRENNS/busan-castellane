"use client";

import { useRef } from "react";
import { SectionTitle } from "@/src/components/atoms/section-title";
import { ArrowButton } from "@/src/components/atoms/arrow-button";
import {
  MenuCarousel,
  type MenuCarouselRef,
} from "@/src/components/molecules/menu-carousel";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/utils/cn";

export const MenuSection = () => {
  const carouselRef = useRef<MenuCarouselRef>(null);

  const handlePrevious = () => {
    carouselRef.current?.scrollLeft();
  };

  const handleNext = () => {
    carouselRef.current?.scrollRight();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-14 bg-black text-white">
      <div className="mx-auto relative flex items-end justify-center w-full mb-16">
        <SectionTitle>
          L&apos;excellence de la gastronomie
          <br />
          <span className="mx-10 text-sm font-mono">AUTHENTIQUE</span> coréenne
          à portée de main
        </SectionTitle>

        <div className="flex gap-10 absolute right-10">
          <ArrowButton direction="left" onClick={handlePrevious} />
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full px-8">
        <MenuCarousel ref={carouselRef} />
      </div>

      <Button
        variant="outline"
        size="lg"
        className={cn(
          "rounded-none border-2 border-white text-lg",
          "bg-transparent text-white hover:bg-white hover:text-black",
          "transition-all duration-300",
        )}
      >
        Voir le menu
      </Button>
    </div>
  );
};
