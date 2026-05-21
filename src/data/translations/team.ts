import type { Locale } from "@/lib/i18n";

export const teamUi = {
  en: {
    title: "SCoRe A⁺ Hydrogen and Carbon organizational structure",
    clusterManagers: "Cluster Managers",
    focusCarbon: "Focus Carbon",
    focusHydrogen: "Focus Hydrogen",
    mentors: "Mentors",
    chairs: "Chairs",
  },
  de: {
    title: "Organisationsstruktur von SCoRe A⁺ Hydrogen and Carbon",
    clusterManagers: "Cluster-Manager",
    focusCarbon: "Schwerpunkt Kohlenstoff",
    focusHydrogen: "Schwerpunkt Wasserstoff",
    mentors: "Mentoren",
    chairs: "Lehrstühle",
  },
} as const;

export function getTeamUi(locale: Locale) {
  return teamUi[locale];
}
