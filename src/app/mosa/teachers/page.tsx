"use client";

import { MosaAudiencePage } from "@/components/mosa-audience-page";
import { useLanguage } from "@/components/language-provider";
import { getMosaTeachersTranslations } from "@/data/translations/mosa-teachers";

export default function MosaTeachersPage() {
  const { locale } = useLanguage();
  const t = getMosaTeachersTranslations(locale);

  return <MosaAudiencePage t={t} heroImage="/MOSA%206.jpeg" />;
}
