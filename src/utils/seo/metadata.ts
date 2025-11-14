/**
 * SEO Metadata Configuration for Busan Castellane
 * OpenGraph, Twitter Cards, and meta tags
 */

import { Metadata } from 'next';
import { RESTAURANT_INFO } from './structured-data';

/**
 * Base metadata configuration
 */
export const baseMetadata: Metadata = {
  title: {
    default: 'Busan Castellane - Restaurant Coréen à Marseille (13006) | BBQ & Spécialités',
    template: '%s | Busan Castellane',
  },
  description:
    'Restaurant coréen authentique à Marseille Castellane. Découvrez notre barbecue coréen, kimchi maison et +60 spécialités du Chef Ren Shaolin (20 ans d\'expérience). Réservation en ligne. ⭐ 4.6/5 (650 avis)',

  keywords: [
    'restaurant coréen Marseille',
    'BBQ coréen Marseille',
    'restaurant Castellane',
    'cuisine coréenne 13006',
    'barbecue coréen',
    'kimchi maison',
    'restaurant asiatique Marseille',
    'Busan Castellane',
    'spécialités coréennes',
    'restaurant Marseille 6ème',
    'korean restaurant Marseille',
    'réservation restaurant coréen',
  ],

  authors: [{ name: 'Busan Castellane' }],

  creator: 'Busan Castellane',
  publisher: 'Busan Castellane',

  // Verification tags (add your verification codes)
  verification: {
    google: '', // Add Google Search Console verification code
    // yandex: '',
    // bing: '',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons (already configured in layout)
  icons: {
    icon: [
      { url: '/assets/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/assets/logo/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/assets/logo/android-chrome-512x512.png' },
    ],
  },

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: RESTAURANT_INFO.url,
    siteName: RESTAURANT_INFO.name,
    title: 'Busan Castellane - Restaurant Coréen Authentique à Marseille',
    description:
      'Restaurant coréen à Marseille Castellane ⭐ 4.6/5 (650 avis). BBQ coréen, kimchi maison, +60 spécialités authentiques. Réservez en ligne !',
    images: [
      {
        url: `${RESTAURANT_INFO.url}/assets/hero-background.jpg`,
        width: 1200,
        height: 630,
        alt: 'Busan Castellane - Restaurant Coréen Marseille',
        type: 'image/jpeg',
      },
      {
        url: `${RESTAURANT_INFO.url}/assets/about-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Spécialités coréennes au restaurant Busan Castellane',
        type: 'image/jpeg',
      },
      {
        url: `${RESTAURANT_INFO.url}/assets/logo/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: 'Logo Busan Castellane',
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Busan Castellane - Restaurant Coréen à Marseille',
    description:
      '⭐ 4.6/5 (650 avis) Restaurant coréen authentique à Marseille. BBQ coréen, kimchi maison, +60 spécialités. Réservez maintenant !',
    images: [`${RESTAURANT_INFO.url}/assets/hero-background.jpg`],
    creator: '@BusanCastellane', // Update with actual Twitter handle if available
    site: '@BusanCastellane',
  },

  // Alternate languages (if multilingual site)
  alternates: {
    canonical: RESTAURANT_INFO.url,
    languages: {
      'fr-FR': RESTAURANT_INFO.url,
      // 'en-US': `${RESTAURANT_INFO.url}/en`, // Add if English version exists
      // 'ko-KR': `${RESTAURANT_INFO.url}/ko`, // Add if Korean version exists
    },
  },

  // Additional meta tags
  other: {
    'geo.region': 'FR-13',
    'geo.placename': 'Marseille',
    'geo.position': `${RESTAURANT_INFO.latitude};${RESTAURANT_INFO.longitude}`,
    'ICBM': `${RESTAURANT_INFO.latitude}, ${RESTAURANT_INFO.longitude}`,

    // Restaurant-specific
    'restaurant:contact:phone_number': RESTAURANT_INFO.telephone,
    'restaurant:contact:email': RESTAURANT_INFO.email,
    'restaurant:menu': RESTAURANT_INFO.menuUrl,
    'restaurant:reservation': RESTAURANT_INFO.reservationUrl,

    // Business hours
    'og:business:hours:monday': '12:00-14:30, 19:00-22:30',
    'og:business:hours:tuesday': '12:00-14:30, 19:00-22:30',
    'og:business:hours:wednesday': '12:00-14:30, 19:00-22:30',
    'og:business:hours:thursday': '12:00-14:30, 19:00-22:30',
    'og:business:hours:friday': '12:00-14:30, 19:00-22:30',
    'og:business:hours:saturday': '12:00-14:30, 19:00-22:30',
    'og:business:hours:sunday': 'closed',

    // Price range
    'restaurant:price_rating': '2', // 1-4 scale (2 = €€)
    'og:price:amount': '20-30',
    'og:price:currency': 'EUR',
  },


  // App links (if mobile app exists)
  // appLinks: {},

  // Format detection
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },

  // Category
  category: 'restaurant',
};

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata(
  title?: string,
  description?: string,
  path?: string
): Metadata {
  const fullUrl = path ? `${RESTAURANT_INFO.url}${path}` : RESTAURANT_INFO.url;

  return {
    ...baseMetadata,
    title: title || baseMetadata.title,
    description: description || baseMetadata.description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url: fullUrl,
      title: title || baseMetadata.openGraph?.title,
      description: description || (baseMetadata.openGraph?.description as string),
    },
  };
}

/**
 * JSON-LD script component generator
 */
export function generateJsonLd(schema: object) {
  return {
    __html: JSON.stringify(schema),
  };
}
