"use client";

import Link from "next/link";
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
import { getMosaTranslations } from "@/data/translations/mosa";

const mosaHeroSliderImages = ["/MOSA1.jpeg", "/MOSA%202.jpeg", "/MOSA%206.jpeg", "/MOSA%208.jpeg", "/MOSA%209.jpeg"];
const mosaPosterByLocale = {
  de: "/MOSA_Plakat%20A0_HB.pptx.png",
  en: "/eng_mosa_plakat.png",
} as const;

export default function HydrogenAndCarbonMosaPage() {
  const { locale } = useLanguage();
  const t = getMosaTranslations(locale);
  const ui = getCommonUi(locale);
  const mosaPosterSrc = mosaPosterByLocale[locale];
  const [activeMosaSlide, setActiveMosaSlide] = useState(0);
  const currentMosaSlide = t.photos[activeMosaSlide];

  const showPreviousMosa = () => {
    setActiveMosaSlide((prev) => (prev === 0 ? t.photos.length - 1 : prev - 1));
  };

  const showNextMosa = () => {
    setActiveMosaSlide((prev) => (prev === t.photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <HeroPageSection background={<HeroSliderBackground images={mosaHeroSliderImages} />}>
        <HeroTextPanel className="max-w-3xl pb-4 text-white">
          <HeroPill>{t.hero.pill}</HeroPill>
          <h1 className={heroHomeTitleClassName()}>{t.hero.title}</h1>
          <p className={heroHomeDescriptionClassName()}>{t.hero.description}</p>
        </HeroTextPanel>
      </HeroPageSection>

      <section className="px-4 pt-10 pb-12 sm:px-10 sm:pt-14 sm:pb-16 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl md:text-4xl">
                  {t.intro.title}
                </h2>
                {t.intro.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`${index === 0 ? "mt-5" : "mt-4"} text-base leading-7 text-[var(--color-muted)]`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-6 lg:grid-cols-3">
            {t.audienceCtas.map((cta) => (
              <article
                key={cta.href}
                className="flex h-full flex-col rounded-[1.75rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] p-7 text-white editorial-shadow sm:p-8"
              >
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{cta.eyebrow}</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">{cta.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/80 sm:text-base sm:leading-7">{cta.description}</p>
                </div>
                <Link
                  href={cta.href}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--color-teal)] transition hover:bg-white/90"
                >
                  {cta.button}
                </Link>
              </article>
            ))}
          </div>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">{t.video.sectionLabel}</p>
            <div className="mt-5 overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)] bg-black/5">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/ZCGYK_ahkCI"
                title={t.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <div className="mt-4 grid items-start gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)] bg-white">
                <ContentImage
                  src="/MOSA%2016.jpeg"
                  alt={t.learningEnvironment.conceptImageAlt}
                  width={900}
                  height={760}
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-5">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                  {t.learningEnvironment.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{t.learningEnvironment.description}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                  {t.learningEnvironment.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {t.objectives.cards.map((card) => (
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
              {t.programQuality.sectionLabel}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[var(--color-muted)]">
              {t.programQuality.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {t.energiepfad.sectionLabel}
            </p>
            <div className="mt-4 overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)]" data-no-watermark>
              <ContentImage
                src={mosaPosterSrc}
                alt={t.energiepfad.posterAlt}
                width={1600}
                height={1200}
                className="h-auto w-full object-contain"
                sizes="100vw"
                data-no-watermark
              />
            </div>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{t.energiepfad.intro}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {t.energiepfad.stations.map((station) => (
                <article
                  key={station.title}
                  className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-4"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--color-charcoal)]">{station.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{station.text}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {t.gallery.sectionLabel}
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)] bg-black/5">
                <ContentImage
                  src={currentMosaSlide.src}
                  alt={currentMosaSlide.alt}
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-[420px] sm:object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                  {t.gallery.slideCounter(activeMosaSlide + 1, t.photos.length)}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                  {currentMosaSlide.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{currentMosaSlide.text}</p>
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={showPreviousMosa}
                    className="rounded-full border border-[rgba(56,56,55,0.2)] px-4 py-2 text-sm font-semibold text-[var(--color-charcoal)] transition hover:bg-white"
                  >
                    {ui.previous}
                  </button>
                  <button
                    type="button"
                    onClick={showNextMosa}
                    className="rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {ui.next}
                  </button>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.photos.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => setActiveMosaSlide(index)}
                      className={`h-2.5 w-8 rounded-full transition ${
                        index === activeMosaSlide ? "bg-[var(--color-teal)]" : "bg-[rgba(56,56,55,0.2)]"
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
