"use client";

import { useState } from "react";
import { ContentImage } from "@/components/content-image";
import { useLanguage } from "@/components/language-provider";
import { getCommonUi } from "@/data/translations/common";
import { getSafeTranslations } from "@/data/translations/safe";

const safeHeroSliderImages = ["/SAFE1.jpeg", "/SAFE2.jpeg", "/SAFE3.jpeg", "/SAFE4.jpeg", "/SAFE5.jpeg"];

export default function HydrogenAndCarbonSafePage() {
  const { locale } = useLanguage();
  const t = getSafeTranslations(locale);
  const ui = getCommonUi(locale);
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = t.slides[activeSlide];

  const showPrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? t.slides.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveSlide((prev) => (prev === t.slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="relative h-[420px] overflow-hidden sm:h-[540px] lg:h-[620px]" data-no-watermark>
        <div className="hero-side-track flex h-full">
          {safeHeroSliderImages.map((image, index) => (
            <div key={`${image}-${index}`} className="hero-side-slide-item relative h-full">
              <ContentImage
                src={image}
                alt=""
                aria-hidden
                fill
                className="object-cover"
                data-no-watermark
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(7,46,51,0.88)_0%,rgba(7,46,51,0.58)_45%,rgba(7,46,51,0.16)_80%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,114,125,0.38),_transparent_42%)]" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 text-white sm:px-10 sm:pb-12 lg:px-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col justify-end">
            <div className="w-full pb-2 text-white">
              <p className="mb-4 inline-block rounded-full bg-[rgba(0,114,125,0.65)] px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
                {t.hero.pill}
              </p>
              <h1 className="w-full text-[clamp(2rem,3.8vw,4.2rem)] font-semibold leading-[1.08] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                {t.hero.title}
              </h1>
              <p className="mt-4 w-full text-base leading-7 text-white/78 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:text-lg">
                {t.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-12 pb-16 sm:px-10 sm:pt-14 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)]">
                <ContentImage
                  src="/safeoverview.jpeg"
                  alt={t.whyMatters.overviewImageAlt}
                  width={900}
                  height={760}
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
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
                  className="h-[420px] w-full object-cover sm:h-[500px]"
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
