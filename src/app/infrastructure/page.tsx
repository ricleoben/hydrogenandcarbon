import { SectionIntro } from "@/components/sections";
import { getInfrastructureUi } from "@/data/translations/infrastructure";
import { getLocale } from "@/lib/server-i18n";

export default async function HydrogenAndCarbonInfrastructurePage() {
  const locale = await getLocale();
  const t = getInfrastructureUi(locale);

  return (
    <>
      <section className="bg-white px-4 pt-20 pb-6 sm:px-10 sm:pt-24 sm:pb-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.eyebrow} title={t.title} />
        </div>
      </section>

      <section className="px-4 pb-16 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] bg-[var(--color-surface)] editorial-shadow">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/qL2eY3UkwH4"
            title={t.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
