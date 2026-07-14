import type { Locale } from "@/lib/i18n";
import { getMosaAssociationsTranslations } from "@/data/translations/mosa-associations";
import { getMosaMunicipalitiesTranslations } from "@/data/translations/mosa-municipalities";
import { getMosaTeachersTranslations } from "@/data/translations/mosa-teachers";

export type MosaAudienceTranslations = {
  meta: {
    backToMosa: string;
  };
  hero: {
    pill: string;
    title: string;
    description: string;
  };
  intro: {
    title: string;
    paragraphs: readonly string[];
  };
  steps: {
    eyebrow: string;
    title: string;
    items: readonly {
      step: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      text: string;
    }[];
  };
  eligibility: {
    eyebrow: string;
    title: string;
    forTitle: string;
    forItems: readonly string[];
    noteTitle: string;
    noteItems: readonly string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly {
      question: string;
      answer: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
    emailSubject: string;
    responseNote: string;
  };
};

export function getMosaAudienceTranslations(audience: "teachers" | "municipalities" | "associations", locale: Locale) {
  switch (audience) {
    case "teachers":
      return getMosaTeachersTranslations(locale);
    case "municipalities":
      return getMosaMunicipalitiesTranslations(locale);
    case "associations":
      return getMosaAssociationsTranslations(locale);
  }
}
