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
