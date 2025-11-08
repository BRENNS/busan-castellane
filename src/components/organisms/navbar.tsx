"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.jpg";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/utils/cn";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher la navbar après avoir dépassé la hauteur de la hero section (100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10",
        "transition-transform duration-500 ease-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="Logo Busan Castellane"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-serif text-xl md:text-2xl text-white tracking-wider hidden md:block">
            Busan Castellane
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          <Button
            asChild
            variant="ghost"
            className="text-white hover:text-white hover:bg-white/10 text-sm md:text-base uppercase tracking-wider transition-all duration-300"
          >
            <Link
              href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/dine-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Menu
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className={cn(
              "rounded-none text-sm md:text-base font-serif",
              "bg-white text-black hover:bg-white/90",
              "transition-all duration-300 uppercase tracking-wider"
            )}
          >
            <Link
              href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/reservation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};