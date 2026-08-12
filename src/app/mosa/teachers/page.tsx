import type { Metadata } from "next";
import { MosaAudiencePage } from "@/components/mosa-audience-page";
import { getRouteMeta } from "@/data/translations/meta";
import { getMosaTeachersTranslations } from "@/data/translations/mosa-teachers";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "mosaTeachers");
  return buildPageMetadata({ locale, path: "/mosa/teachers", ...routeMeta });
}

export default async function MosaTeachersPage() {
  const locale = await getLocale();
  const t = getMosaTeachersTranslations(locale);

  return <MosaAudiencePage locale={locale} t={t} heroImage="/MOSA%206.jpeg" />;
}
