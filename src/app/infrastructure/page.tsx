import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections";
import { getInfrastructureUi } from "@/data/translations/infrastructure";
import { getRouteMeta } from "@/data/translations/meta";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "infrastructure");
  return buildPageMetadata({ locale, path: "/infrastructure", ...routeMeta });
}

export default async function HydrogenAndCarbonInfrastructurePage() {
  const locale = await getLocale();
  const t = getInfrastructureUi(locale);

  return (
    <>
      <section className="bg-white px-4 pt-20 pb-6 sm:px-10 sm:pt-24 sm:pb-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionIntro as="h1" eyebrow={t.eyebrow} title={t.title} />
        </div>
      </section>

      <section className="px-4 pb-16 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] bg-[var(--color-surface)] editorial-shadow">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube-nocookie.com/embed/qL2eY3UkwH4"
            title={t.videoTitle}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
