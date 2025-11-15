"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/utils/cn";
import Link from "next/link";

export const HeroCTA = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:gap-10">
      {/* Action primaire */}
      <Button
        asChild
        size="lg"
        className={cn(
          "rounded-none text-lg font-semibold",
          "bg-white text-black hover:bg-white/90",
          "transition-all duration-300"
        )}
      >
        <Link
          href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/reservation"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('hero-cta-reserve')}
        </Link>
      </Button>

      {/* Action secondaire */}
      <Button
        asChild
        variant="outline"
        size="lg"
        className={cn(
          "rounded-none border-2 border-white text-lg",
          "bg-transparent text-white hover:bg-white hover:text-black",
          "transition-all duration-300"
        )}
      >
        <Link
          href="https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/dine-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('hero-cta-menu')}
        </Link>
      </Button>
    </div>
  );
};