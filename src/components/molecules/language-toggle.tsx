"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { locales, localesMap } from "@/src/utils/i18n/config";
import { setLocale } from "@/src/utils/i18n/locale";
import type { Locale } from "@/src/utils/i18n/types";

interface LanguageToggleProps {
  currentLocale: Locale;
}

// Flag images from flagcdn.com (SVG, high quality)
const flagImages: Record<Locale, string> = {
  fr: "https://flagcdn.com/fr.svg",
  en: "https://flagcdn.com/gb.svg",
  zh: "https://flagcdn.com/cn.svg",
  ko: "https://flagcdn.com/kr.svg",
};

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const [isPending, startTransition] = useTransition();
  const [locale, setCurrentLocale] = useState<Locale>(currentLocale);
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale) return;

    setCurrentLocale(newLocale);
    setIsOpen(false);

    startTransition(async () => {
      await setLocale(newLocale);
      window.location.reload();
    });
  };

  const currentLanguage = localesMap[locale];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 disabled:opacity-50"
        aria-label="Select language"
      >
        <Image
          src={flagImages[locale]}
          alt={currentLanguage.name}
          width={20}
          height={20}
          className="rounded-full object-cover"
        />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-50 min-w-[160px] bg-black border border-white/10 rounded-lg shadow-lg overflow-hidden">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors duration-200"
              >
                <Image
                  src={flagImages[loc]}
                  alt={localesMap[loc].name}
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                <span className="flex-1 text-left">{localesMap[loc].name}</span>
                {loc === locale && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
