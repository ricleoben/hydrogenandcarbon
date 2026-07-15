import type { Locale } from "@/lib/i18n";

const mosaThematicAreasContent = {
  en: {
    title: "Thematic areas of MOSA",
    centerLabel: "Energy Path",
    areas: [
      {
        id: "energy",
        title: "Energy &\nResources",
        accent: "#00727d",
        textColor: "#ffffff",
      },
      {
        id: "hydrogen",
        title: "Hydrogen",
        accent: "#4eb1d0",
        textColor: "#1f4a56",
      },
      {
        id: "biodiversity",
        title: "Biodiversity",
        accent: "#d2db5c",
        textColor: "#3a4220",
      },
      {
        id: "carbon",
        title: "Carbon\nApplications",
        accent: "#c25959",
        textColor: "#ffffff",
      },
      {
        id: "circular",
        title: "Circular\nEconomy",
        accent: "#954b97",
        textColor: "#ffffff",
      },
      {
        id: "soil",
        title: "Soil\nHealth",
        accent: "#b9dad0",
        textColor: "#2f4a44",
      },
    ],
  },
  de: {
    title: "Themenbereiche von MOSA",
    centerLabel: "Energiepfad",
    areas: [
      {
        id: "energy",
        title: "Energie &\nRessourcen",
        accent: "#00727d",
        textColor: "#ffffff",
      },
      {
        id: "hydrogen",
        title: "Wasserstoff",
        accent: "#4eb1d0",
        textColor: "#1f4a56",
      },
      {
        id: "biodiversity",
        title: "Biodiversität",
        accent: "#d2db5c",
        textColor: "#3a4220",
      },
      {
        id: "carbon",
        title: "Kohlenstoff-\nanwendungen",
        accent: "#c25959",
        textColor: "#ffffff",
      },
      {
        id: "circular",
        title: "Kreislauf-\nwirtschaft",
        accent: "#954b97",
        textColor: "#ffffff",
      },
      {
        id: "soil",
        title: "Boden-\ngesundheit",
        accent: "#b9dad0",
        textColor: "#2f4a44",
      },
    ],
  },
} as const;

export function getMosaThematicAreasTranslations(locale: Locale) {
  return mosaThematicAreasContent[locale];
}
