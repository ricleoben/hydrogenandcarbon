export const LOCALE_COOKIE_NAME = "h2c-locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "de";
}

export function pick<T>(locale: Locale, en: T, de: T): T {
  return locale === "de" ? de : en;
}

export function buildLocaleCookie(locale: Locale) {
  const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; secure" : "";
  return `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax${secure}`;
}
