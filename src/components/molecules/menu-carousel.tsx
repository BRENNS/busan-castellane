"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Image from "next/image";

// Import images
import rawkkim from "@/public/assets/rawkkim-1_SenAyTAXg-unsplash.jpg";
import goodeats from "@/public/assets/goodeats-yqr-LY4xyLYX5Vs-unsplash.jpg";
import clintBustrillos from "@/public/assets/clint-bustrillos-UE6KHjZDAUY-unsplash.jpg";
import daniel from "@/public/assets/daniel-78jWkCp_jdM-unsplash.jpg";
import aidanTottori from "@/public/assets/aidan-tottori-YHSeJVrqW58-unsplash.jpg";

const menuImages = [
  { src: rawkkim, alt: "Plat coréen 1" },
  { src: goodeats, alt: "Plat coréen 2" },
  { src: clintBustrillos, alt: "Plat coréen 3" },
  { src: daniel, alt: "Plat coréen 4" },
  { src: aidanTottori, alt: "Plat coréen 5" },
];

export interface MenuCarouselRef {
  scrollLeft: () => void;
  scrollRight: () => void;
}

export const MenuCarousel = forwardRef<MenuCarouselRef>((props, ref) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.offsetWidth * 0.8;

    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(
            container.scrollWidth - container.offsetWidth,
            scrollPosition + scrollAmount,
          );

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });

    setScrollPosition(newPosition);
  };

  // Expose scroll functions to parent
  useImperativeHandle(ref, () => ({
    scrollLeft: () => scroll("left"),
    scrollRight: () => scroll("right"),
  }));

  return (
    <div className="w-full">
      {/* Slider container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth pb-4"
        onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
      >
        {menuImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-96 h-xl relative group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="450px"
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

MenuCarousel.displayName = "MenuCarousel";
