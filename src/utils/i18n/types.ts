/**
 * TypeScript types for i18n
 */

import { locales } from './config';

export type Locale = (typeof locales)[number];
