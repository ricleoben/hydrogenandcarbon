import type { Locale } from "@/lib/i18n";

export const publicationUi = {
  en: {
    title: "SCoRe A⁺ Hydrogen and Carbon Publications",
    filters: {
      all: "All",
      hydrogenProduction: "Hydrogen Production",
      storageTransport: "Hydrogen Storage, Transport, and Application",
      carbon: "Carbon and its Applications",
    },
    categoryShort: {
      "Hydrogen Production": "Hydrogen Production",
      "Hydrogen Storage, Transport, and Application": "Storage, Transport & Application",
      "Carbon and its Applications": "Carbon Applications",
    },
  },
  de: {
    title: "SCoRe A⁺ Wasserstoff- und Kohlenstoffpublikationen",
    filters: {
      all: "Alle",
      hydrogenProduction: "Wasserstoffproduktion",
      storageTransport: "Wasserstoffspeicherung, -transport und -anwendung",
      carbon: "Kohlenstoff und seine Anwendungen",
    },
    categoryShort: {
      "Hydrogen Production": "Wasserstoffproduktion",
      "Hydrogen Storage, Transport, and Application": "Speicherung, Transport & Anwendung",
      "Carbon and its Applications": "Kohlenstoffanwendungen",
    },
  },
} as const;

export type PublicationCategory = keyof typeof publicationUi.en.categoryShort;

export function getPublicationUi(locale: Locale) {
  return publicationUi[locale];
}

export function getPublicationFilters(locale: Locale) {
  const ui = getPublicationUi(locale);
  return [
    ui.filters.all,
    ui.filters.hydrogenProduction,
    ui.filters.storageTransport,
    ui.filters.carbon,
  ] as const;
}

export function getPublicationFilterMap(locale: Locale) {
  const ui = getPublicationUi(locale);
  return {
    [ui.filters.all]: "All",
    [ui.filters.hydrogenProduction]: "Hydrogen Production",
    [ui.filters.storageTransport]: "Hydrogen Storage, Transport, and Application",
    [ui.filters.carbon]: "Carbon and its Applications",
  } as Record<string, PublicationCategory | "All">;
}
