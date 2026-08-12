import type { Metadata } from "next";
import { ContentImage } from "@/components/content-image";
import {
  HeroPageSection,
  HeroPill,
  HeroSliderBackground,
  HeroTextPanel,
  heroHomeDescriptionClassName,
  heroHomeTitleClassName,
} from "@/components/hero-text-panel";
import { MediaCarousel } from "@/components/media-carousel";
import { getCommonUi } from "@/data/translations/common";
import { getRouteMeta } from "@/data/translations/meta";
import { getSafeTranslations } from "@/data/translations/safe";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";

const safeHeroSliderImages = ["/SAFE1.jpeg", "/SAFE2.jpeg", "/SAFE3.jpeg", "/SAFE4.jpeg", "/SAFE5.jpeg"];
const safeOverviewImageByLocale = {
  de: "/safeoverview.jpeg",
  en: "/safeovervieweng.jpeg",
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "safe");
  return buildPageMetadata({ locale, path: "/safe", ...routeMeta });
}

export default async function HydrogenAndCarbonSafePage() {
  const locale = await getLocale();
  const t = getSafeTranslations(locale);
  const ui = getCommonUi(locale);
  const overviewImageSrc = safeOverviewImageByLocale[locale];

  const carouselSlides = t.slides.map((slide, index) => ({
    ...slide,
    counterLabel: t.gallery.slideCounter(index + 1, t.slides.length),
    goToLabel: t.gallery.goToSlide(index + 1),
  }));

  return (
    <>
      <HeroPageSection background={<HeroSliderBackground images={safeHeroSliderImages} />}>
        <HeroTextPanel className="max-w-3xl pb-4 text-white">
          <HeroPill>{t.hero.pill}</HeroPill>
          <h1 className={heroHomeTitleClassName()}>{t.hero.title}</h1>
          <p className={heroHomeDescriptionClassName()}>{t.hero.description}</p>
        </HeroTextPanel>
      </HeroPageSection>

      <section className="px-4 pt-10 pb-12 sm:px-10 sm:pt-14 sm:pb-16 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)]">
                <ContentImage
                  src={overviewImageSrc}
                  alt={t.whyMatters.overviewImageAlt}
                  width={900}
                  height={760}
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl md:text-4xl">
                  {t.whyMatters.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                  {t.whyMatters.paragraph1} {t.whyMatters.euMissionsPrefix}{" "}
                  <em>{t.whyMatters.healthySoils}</em> {t.whyMatters.and}{" "}
                  <em>{t.whyMatters.climateChangeAdaptation}</em>.
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{t.whyMatters.paragraph2}</p>
                <div className="mt-6 rounded-[1rem] border border-[rgba(0,114,125,0.14)] bg-[var(--color-surface-soft)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                    {t.whyMatters.calloutLabel}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{t.whyMatters.calloutText}</p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {t.coreObjectives.sectionLabel}
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {t.coreObjectives.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-4"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--color-charcoal)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{card.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {t.livingLab.sectionLabel}
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{t.livingLab.paragraph1}</p>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{t.livingLab.paragraph2}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {t.livingLab.cards.map((card) => (
                <div key={card.title} className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-white p-4">
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--color-charcoal)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{card.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {t.video.sectionLabel}
            </p>
            <div className="mt-4 overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)] bg-black/5">
              <video
                className="aspect-video w-full"
                controls
                playsInline
                preload="metadata"
                poster="/SAFE Workshop.png"
              >
                <source src="/safe-workshop.mp4" type="video/mp4" />
                {t.video.unsupported}
              </video>
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {t.gallery.sectionLabel}
            </p>
            <MediaCarousel slides={carouselSlides} previousLabel={ui.previous} nextLabel={ui.next} />
          </article>
        </div>
      </section>
    </>
  );
}
