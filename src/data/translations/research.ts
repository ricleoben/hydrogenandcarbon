import type { Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import type { ResearchTrack } from "@/data/h2c-research";

const trackLabels: Record<ResearchTrack, { en: string; de: string }> = {
  "Methane Pyrolysis and Processing of Carbon": {
    en: "Methane Pyrolysis and Processing of Carbon",
    de: "Methanpyrolyse und Kohlenstoffverarbeitung",
  },
  "Carbon and its applications": {
    en: "Carbon and its applications",
    de: "Kohlenstoff und seine Anwendungen",
  },
  "Hydrogen Storage and applications": {
    en: "Hydrogen Storage and applications",
    de: "Wasserstoffspeicherung und Anwendungen",
  },
  "Other routes to hydrogen & general considerations": {
    en: "Other routes to hydrogen & general considerations",
    de: "Andere Wasserstoffwege & allgemeine Überlegungen",
  },
};

export function getResearchTrackLabel(locale: Locale, track: ResearchTrack) {
  return pick(locale, trackLabels[track].en, trackLabels[track].de);
}

export const researchUi = {
  en: {
    title: "SCoRe A⁺ Hydrogen and Carbon Research",
    detailEyebrow: "SCoRe A⁺ Research Detail",
  },
  de: {
    title: "SCoRe A⁺ Wasserstoff- und Kohlenstoffforschung",
    detailEyebrow: "SCoRe A⁺ Forschungsdetail",
  },
} as const;

export function getResearchUi(locale: Locale) {
  return researchUi[locale];
}
