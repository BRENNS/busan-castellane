/**
 * i18n Configuration for Busan Castellane
 * Supported languages: French, English, Chinese, Korean
 */

export const locales = ['fr', 'en', 'zh', 'ko'] as const;
export const defaultLocale = 'fr' as const;

export const localesMap = {
  fr: { name: 'Français', flag: '🇫🇷' },
  en: { name: 'English', flag: '🇬🇧' },
  zh: { name: '中文', flag: '🇨🇳' },
  ko: { name: '한국어', flag: '🇰🇷' },
} as const;

export const timeZone = 'Europe/Paris';
