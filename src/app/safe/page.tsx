"use client";

import { useState } from "react";
import { ContentImage } from "@/components/content-image";
import {
  HeroPageSection,
  HeroPill,
  HeroSliderBackground,
  HeroTextPanel,
  heroHomeDescriptionClassName,
  heroHomeTitleClassName,
} from "@/components/hero-text-panel";
import { useLanguage } from "@/components/language-provider";
import { getCommonUi } from "@/data/translations/common";
import { getSafeTranslations } from "@/data/translations/safe";

const safeHeroSliderImages = ["/SAFE1.jpeg", "/SAFE2.jpeg", "/SAFE3.jpeg", "/SAFE4.jpeg", "/SAFE5.jpeg"];
const safeOverviewImageByLocale = {
  de: "/safeoverview.jpeg",
  en: "/safeovervieweng.jpeg",
} as const;

export default function HydrogenAndCarbonSafePage() {
  const { locale } = useLanguage();
  const t = getSafeTranslations(locale);
  const ui = getCommonUi(locale);
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = t.slides[activeSlide];
  const overviewImageSrc = safeOverviewImageByLocale[locale];

  const showPrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? t.slides.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveSlide((prev) => (prev === t.slides.length - 1 ? 0 : prev + 1));
  };

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
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)] bg-black/5">
                <ContentImage
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-[420px] sm:object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                  {t.gallery.slideCounter(activeSlide + 1, t.slides.length)}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                  {currentSlide.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{currentSlide.text}</p>
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="rounded-full border border-[rgba(56,56,55,0.2)] px-4 py-2 text-sm font-semibold text-[var(--color-charcoal)] transition hover:bg-white"
                  >
                    {ui.previous}
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {ui.next}
                  </button>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.slides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 w-8 rounded-full transition ${
                        index === activeSlide ? "bg-[var(--color-teal)]" : "bg-[rgba(56,56,55,0.2)]"
                      }`}
                      aria-label={t.gallery.goToSlide(index + 1)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
