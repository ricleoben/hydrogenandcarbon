export const LOCALE_COOKIE_NAME = "h2c-locale";

export type Locale = "en" | "de";

export function pick<T>(locale: Locale, en: T, de: T): T {
  return locale === "de" ? de : en;
}
