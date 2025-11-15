/**
 * Server actions for locale management via cookies
 */

'use server';

import { cookies } from 'next/headers';
import { defaultLocale, locales } from './config';
import type { Locale } from './types';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(COOKIE_NAME);

  if (localeCookie && locales.includes(localeCookie.value as Locale)) {
    return localeCookie.value as Locale;
  }

  return defaultLocale;
}

export async function setLocale(locale: Locale): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}
