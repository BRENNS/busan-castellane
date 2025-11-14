/**
 * Schema.org Structured Data for Busan Castellane Restaurant
 * Generates JSON-LD markup for Google Rich Results
 */

// Schema.org type definitions
type OpeningHoursSpecification = {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

type PostalAddress = {
  '@type': 'PostalAddress';
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
};

type AggregateRating = {
  '@type': 'AggregateRating';
  ratingValue: string;
  reviewCount: string;
  bestRating: string;
  worstRating: string;
};

type WithContext<T> = T & {
  '@context': string;
};

type Restaurant = {
  '@type': 'Restaurant';
  '@id'?: string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  servesCuisine: string | string[];
  priceRange: string;
  address: PostalAddress;
  geo: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: OpeningHoursSpecification[];
  aggregateRating: AggregateRating;
  image: string[];
  logo: string;
  hasMenu: string;
  acceptsReservations: string;
  isAccessibleForFree?: boolean;
  paymentAccepted?: string;
  amenityFeature?: Array<{
    '@type': 'LocationFeatureSpecification';
    name: string;
    value: boolean;
  }>;
  hasOfferCatalog?: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'MenuItem';
        name: string;
        description: string;
      };
    }>;
  };
};

// Restaurant contact information
export const RESTAURANT_INFO = {
  name: 'Busan Castellane',
  description: 'Restaurant coréen authentique à Marseille, spécialisé dans le barbecue coréen et les spécialités traditionnelles. Plus de 60 plats authentiques préparés par le Chef Ren Shaolin avec 20 ans d\'expérience.',
  cuisineType: 'Coréenne',
  priceRange: '€€',
  telephone: '+33491785722',
  email: 'contact@busan-castellane.fr', // Update if available
  url: 'https://busan-castellane.fr', // Update with actual domain

  // Address
  streetAddress: '6 Rue du Rouet',
  postalCode: '13006',
  addressLocality: 'Marseille',
  addressRegion: 'Provence-Alpes-Côte d\'Azur',
  addressCountry: 'FR',

  // Geo coordinates
  latitude: 43.2859055005693,
  longitude: 5.3847331530390345,

  // Rating from Google
  ratingValue: '4.6',
  reviewCount: '650',

  // External links
  reservationUrl: 'https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/reservation',
  menuUrl: 'https://app.suzzyapp.com/shop/92472975-5399-497b-a63d-75f4c43d4de9/dine-in',

  // Social media (update with actual links if available)
  facebookUrl: '', // Add if available
  instagramUrl: '', // Add if available
};

/**
 * Opening hours specification for schema.org
 */
export const openingHours: OpeningHoursSpecification[] = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '12:00',
    closes: '14:30',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '19:00',
    closes: '22:30',
  },
];

/**
 * Postal address schema
 */
export const postalAddress: PostalAddress = {
  '@type': 'PostalAddress',
  streetAddress: RESTAURANT_INFO.streetAddress,
  postalCode: RESTAURANT_INFO.postalCode,
  addressLocality: RESTAURANT_INFO.addressLocality,
  addressRegion: RESTAURANT_INFO.addressRegion,
  addressCountry: RESTAURANT_INFO.addressCountry,
};

/**
 * Aggregate rating schema
 */
export const aggregateRating: AggregateRating = {
  '@type': 'AggregateRating',
  ratingValue: RESTAURANT_INFO.ratingValue,
  reviewCount: RESTAURANT_INFO.reviewCount,
  bestRating: '5',
  worstRating: '1',
};

/**
 * Main Restaurant Schema.org structured data
 */
export const restaurantSchema: WithContext<Restaurant> = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${RESTAURANT_INFO.url}#restaurant`,
  name: RESTAURANT_INFO.name,
  description: RESTAURANT_INFO.description,
  url: RESTAURANT_INFO.url,
  telephone: RESTAURANT_INFO.telephone,
  email: RESTAURANT_INFO.email,

  // Cuisine and price
  servesCuisine: ['Korean', 'Coréenne', 'Korean BBQ', 'Barbecue coréen'],
  priceRange: RESTAURANT_INFO.priceRange,

  // Location
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: RESTAURANT_INFO.latitude,
    longitude: RESTAURANT_INFO.longitude,
  },

  // Hours
  openingHoursSpecification: openingHours,

  // Rating
  aggregateRating: aggregateRating,

  // Images
  image: [
    `${RESTAURANT_INFO.url}/assets/hero-background.jpg`,
    `${RESTAURANT_INFO.url}/assets/about-image.jpg`,
  ],

  // Logo
  logo: `${RESTAURANT_INFO.url}/assets/logo/android-chrome-512x512.png`,

  // Menu
  hasMenu: RESTAURANT_INFO.menuUrl,

  // Accept reservations
  acceptsReservations: 'True',

  // Accessibility and services
  isAccessibleForFree: true,

  // Payment methods accepted
  paymentAccepted: 'Carte bancaire, Espèces, Titres restaurant, Pluxee',

  // Additional properties
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'WiFi gratuit',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Accessible en fauteuil roulant',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Bar disponible',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Parking payant à proximité',
      value: true,
    },
  ],

  // Menu highlights
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Menu Busan Castellane',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MenuItem',
          name: 'Barbecue Coréen',
          description: 'BBQ coréen authentique avec marinades maison',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MenuItem',
          name: 'Kimchi Maison',
          description: 'Kimchi traditionnel fait maison',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MenuItem',
          name: 'Spécialités Coréennes',
          description: 'Plus de 60 spécialités coréennes authentiques',
        },
      },
    ],
  },
};

/**
 * LocalBusiness schema (for local SEO)
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${RESTAURANT_INFO.url}#localbusiness`,
  name: RESTAURANT_INFO.name,
  image: `${RESTAURANT_INFO.url}/assets/logo/android-chrome-512x512.png`,
  telephone: RESTAURANT_INFO.telephone,
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: RESTAURANT_INFO.latitude,
    longitude: RESTAURANT_INFO.longitude,
  },
  url: RESTAURANT_INFO.url,
  openingHoursSpecification: openingHours,
  priceRange: RESTAURANT_INFO.priceRange,
  aggregateRating: aggregateRating,
};

/**
 * Organization schema
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${RESTAURANT_INFO.url}#organization`,
  name: RESTAURANT_INFO.name,
  url: RESTAURANT_INFO.url,
  logo: `${RESTAURANT_INFO.url}/assets/logo/android-chrome-512x512.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: RESTAURANT_INFO.telephone,
    contactType: 'Réservation',
    areaServed: 'FR',
    availableLanguage: ['fr', 'en', 'ko'],
  },
  sameAs: [
    RESTAURANT_INFO.facebookUrl,
    RESTAURANT_INFO.instagramUrl,
  ].filter(Boolean),
};

/**
 * Breadcrumb schema for navigation
 */
export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: RESTAURANT_INFO.url,
    },
  ],
};

/**
 * Get all schemas as JSON-LD script content
 */
export function getAllSchemas() {
  return [
    restaurantSchema,
    localBusinessSchema,
    organizationSchema,
    breadcrumbSchema,
  ];
}
