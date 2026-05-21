import type { Locale } from "@/lib/i18n";

export const infrastructureUi = {
  en: {
    eyebrow: "SCoRe A⁺ Hydrogen and Carbon",
    title: "Infrastructure",
    videoTitle: "Infrastructure overview video",
  },
  de: {
    eyebrow: "SCoRe A⁺ Hydrogen and Carbon",
    title: "Infrastruktur",
    videoTitle: "Infrastruktur-Übersichtsvideo",
  },
} as const;

export function getInfrastructureUi(locale: Locale) {
  return infrastructureUi[locale];
}
