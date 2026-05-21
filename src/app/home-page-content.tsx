"use client";

import { ContentImage } from "@/components/content-image";
import { SectionIntro } from "@/components/sections";
import { useLanguage } from "@/components/language-provider";
import { getHomeTranslations } from "@/data/translations/home";

type IconName =
  | "person"
  | "group"
  | "target"
  | "coin"
  | "house"
  | "file"
  | "hands"
  | "leaf"
  | "book"
  | "sprout"
  | "thermometer"
  | "cycle"
  | "handshake"
  | "calendar"
  | "hex";

function MetricIcon({ name }: { name: IconName }) {
  const common = "h-6 w-6 stroke-current";
  switch (name) {
    case "person":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <circle cx="12" cy="8" r="3" />
          <path d="M6 19c0-3 2.7-5 6-5s6 2 6 5" />
        </svg>
      );
    case "group":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <circle cx="12" cy="8" r="2.5" />
          <circle cx="7" cy="10" r="2" />
          <circle cx="17" cy="10" r="2" />
          <path d="M5 18c0-2 2-3.5 4.5-3.5S14 16 14 18M10 18c0-2 2-3.5 4.5-3.5S19 16 19 18" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "coin":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <ellipse cx="12" cy="7" rx="6" ry="2.5" />
          <path d="M6 7v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V7" />
        </svg>
      );
    case "house":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M4 10.5 12 4l8 6.5V20H4z" />
          <path d="M9.5 20v-5h5v5" />
        </svg>
      );
    case "file":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M7 3.5h7l4 4V20.5H7z" />
          <path d="M14 3.5v4h4M10 12h6M10 15h6" />
        </svg>
      );
    case "hands":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M3.5 13.5 8 11l4 3 4-3 4.5 2.5M5 17h14M8 11V7.5a1.5 1.5 0 1 1 3 0V10m2 0V6.5a1.5 1.5 0 0 1 3 0V11" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M19 5c-8 0-12 4-12 10 4 0 10-2 12-10Z" />
          <path d="M7 17c2-2 5-5 9-7" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H12v15H6.5A2.5 2.5 0 0 0 4 21V6.5ZM20 6.5A2.5 2.5 0 0 0 17.5 4H12v15h5.5A2.5 2.5 0 0 1 20 21V6.5Z" />
        </svg>
      );
    case "sprout":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M12 20v-8" />
          <path d="M12 13c-3 0-5-2-5-5 3 0 5 2 5 5Zm0-1c0-3 2-5 5-5 0 3-2 5-5 5Z" />
        </svg>
      );
    case "thermometer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M12 4v9.5a3.5 3.5 0 1 0 2 3.1V4a2 2 0 1 0-4 0v12.6" />
        </svg>
      );
    case "cycle":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M5 12a7 7 0 0 1 12-4.95L19 9" />
          <path d="M19 12a7 7 0 0 1-12 4.95L5 15" />
          <path d="M19 5v4h-4M5 19v-4h4" />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="M4 9h5l3 3 2-2 3 3h3M9 15l2 2m2-2 2 2m-8.5-.5L4 13m16 3.5L18 13" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <rect x="4" y="5.5" width="16" height="14" rx="2" />
          <path d="M8 3.5v4M16 3.5v4M4 9.5h16" />
        </svg>
      );
    case "hex":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} strokeWidth="1.6">
          <path d="m12 3 7 4v10l-7 4-7-4V7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

function MetricIconBadge({ name }: { name: IconName }) {
  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
      <MetricIcon name={name} />
    </span>
  );
}

export function HomePageContent() {
  const { locale } = useLanguage();
  const t = getHomeTranslations(locale);

  return (
    <>
      <section
        className="relative min-h-[520px] overflow-hidden px-4 pt-10 pb-6 sm:min-h-[620px] sm:px-8 sm:pt-14 sm:pb-10 lg:min-h-[820px] lg:px-16 lg:pt-16 lg:pb-12"
        data-no-watermark
      >
        <div className="absolute inset-0" data-no-watermark>
          <ContentImage
            src="/Forschungszentrum-Wasserstoff-und-Kohlenstoff.gif"
            alt=""
            aria-hidden
            fill
            className="object-cover object-[78%_center]"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(7,46,51,0.90)_0%,rgba(7,46,51,0.62)_45%,rgba(7,46,51,0.18)_80%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(185,218,208,0.12),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(0,114,125,0.58),_transparent_42%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl flex-col justify-end sm:min-h-[540px] lg:min-h-[740px]">
          <div className="w-full pb-4 text-white">
            <span className="mb-4 inline-block rounded-full bg-[rgba(0,114,125,0.65)] px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white/90 sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
              {t.hero.pill}
            </span>
            <h1 className="w-full text-[clamp(1.65rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              {t.hero.h1Line1}
              <br /> {t.hero.h1Line2}
            </h1>
            <p className="mt-3 w-full text-base leading-7 text-white/72 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:mt-5 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              <strong className="font-semibold text-white/90">{t.hero.paragraphStrong1}</strong>{" "}
              {t.hero.paragraphMiddle}{" "}
              <strong className="font-semibold text-white/90">{t.hero.paragraphStrong2}</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pt-10 pb-6 sm:px-10 sm:pt-14 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
            titleTone="teal"
          />
        </div>
      </section>

      <section className="px-4 pt-4 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
            {t.strategy.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl md:text-4xl lg:text-5xl">
            {t.strategy.title}
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {t.strategy.introCards.map((text) => (
              <div
                key={text}
                className="rounded-[1.25rem] bg-[var(--color-surface-soft)] px-6 py-5"
              >
                <p className="text-[1.02rem] leading-8 text-[var(--color-muted)]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-[rgba(56,56,55,0.1)] bg-white editorial-shadow">
            <ContentImage
              src="/scorea overview.jpeg"
              alt={t.strategy.overviewImageAlt}
              width={1600}
              height={900}
              className="h-auto w-full"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.strategy.pillars.map((pillar) => (
              <article
                key={pillar.eyebrow}
                className="flex flex-col rounded-[1.5rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface)] p-6 editorial-shadow sm:p-7"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-charcoal)]">
                  {pillar.title}
                </h3>
                <ul className="mt-3 flex-1 space-y-2.5 text-sm leading-6 text-[var(--color-muted)]">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-teal)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pt-8 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
            {t.researchFocus.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl md:text-4xl lg:text-5xl">
            {t.researchFocus.title}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-8 text-[var(--color-muted)]">
            {t.researchFocus.description}
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
            <div className="relative min-h-[260px] overflow-hidden rounded-[1.75rem] editorial-shadow sm:min-h-[300px] lg:min-h-0 lg:h-full">
              <ContentImage
                src="/blick ins forschunzentrum.jpeg"
                alt={t.researchFocus.researchCentreImageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <article className="h-full rounded-[1.75rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] p-6 text-white editorial-shadow sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
                {t.researchFocus.coreTechnology.eyebrow}
              </p>
              <h3 className="mt-2.5 text-2xl font-semibold tracking-tight sm:text-[1.65rem] sm:leading-snug">
                {t.researchFocus.coreTechnology.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-7 text-white/80">
                {t.researchFocus.coreTechnology.description}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-white/85">
                {t.researchFocus.coreTechnology.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="h-full rounded-[1.75rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface)] p-6 editorial-shadow sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                {t.researchFocus.hydrogenStorage.eyebrow}
              </p>
              <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                {t.researchFocus.hydrogenStorage.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-7 text-[var(--color-muted)]">
                {t.researchFocus.hydrogenStorage.description}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[var(--color-muted)]">
                {t.researchFocus.hydrogenStorage.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="h-full rounded-[1.75rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-6 editorial-shadow sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                {t.researchFocus.carbonApplications.eyebrow}
              </p>
              <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                {t.researchFocus.carbonApplications.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-7 text-[var(--color-muted)]">
                {t.researchFocus.carbonApplications.description}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[var(--color-muted)]">
                {t.researchFocus.carbonApplications.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article
              className={`relative overflow-hidden rounded-[1.75rem] editorial-shadow lg:col-span-2 ${
                locale === "de" ? "min-h-[300px]" : "min-h-[260px]"
              }`}
            >
              <ContentImage
                src="/MOSA1.jpeg"
                alt={t.researchFocus.mosaImageAlt}
                fill
                className="object-cover object-[center_40%]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,46,51,0.92)_0%,rgba(7,46,51,0.72)_45%,rgba(7,46,51,0.2)_75%,transparent_100%)]" />
              <div
                className={`relative flex h-full flex-col justify-center p-7 text-white sm:p-9 ${
                  locale === "de" ? "max-w-3xl" : "max-w-xl"
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
                  {t.researchFocus.educationOutreach.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                  {t.researchFocus.educationOutreach.title}
                </h3>
                <ul
                  className={
                    locale === "de"
                      ? "mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 text-sm leading-6 text-white/82 sm:grid-cols-2"
                      : "mt-3 grid grid-cols-1 gap-y-2 text-sm leading-6 text-white/82 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-1.5 lg:grid-cols-4"
                  }
                >
                  {t.researchFocus.educationOutreach.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] px-4 pt-12 pb-10 text-white sm:px-10 sm:pt-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                {t.keyMetrics.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {t.keyMetrics.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/72 sm:text-right">
              {t.keyMetrics.subtitle}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4">
            {t.keyMetrics.metrics.map((metric) => (
              <article
                key={metric.label}
                className="flex flex-col rounded-[1.25rem] border border-white/15 bg-white/10 p-3 backdrop-blur-[2px] sm:p-4"
              >
                <MetricIconBadge name={metric.icon} />
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  {metric.label}
                </p>
                <p className="mt-1.5 text-[1.6rem] font-semibold leading-tight tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/72">{metric.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {t.keyMetrics.highlights.map((item) => (
              <article
                key={item.title}
                className="flex items-start gap-4 rounded-[1.25rem] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-[2px]"
              >
                <MetricIconBadge name={item.icon} />
                <div>
                  <p className="text-sm font-semibold tracking-tight text-white">{item.title}</p>
                  <p className="mt-1.5 text-xs leading-5 text-white/72">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-4 pt-10 pb-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
            {t.methanePyrolysis.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl md:text-4xl lg:text-5xl">
            {t.methanePyrolysis.title}
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-5 rounded-[1.75rem] border border-[rgba(56,56,55,0.08)] bg-white p-7 sm:p-8">
              {t.methanePyrolysis.prose.map((paragraph) => (
                <p key={paragraph} className="text-[1.02rem] leading-8 text-[var(--color-muted)]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
              {t.methanePyrolysis.callouts.map((callout) => (
                <div
                  key={callout.value}
                  className="flex items-start gap-4 rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-white px-4 py-3"
                >
                  <span className="mt-0.5 shrink-0 text-[1.6rem] font-bold leading-none tracking-tight text-[var(--color-teal)]">
                    {callout.value}
                  </span>
                  <p className="text-sm leading-6 text-[var(--color-muted)]">{callout.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-5 sm:gap-6">
              {t.methanePyrolysis.steps.map((step, i) => (
                <div key={step.step} className="flex gap-4 sm:gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-teal)] text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    {i < t.methanePyrolysis.steps.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-[var(--color-teal)]/20" />
                    )}
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
                      {step.step}
                    </p>
                    <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(56,56,55,0.1)] bg-white" data-no-watermark>
              <ContentImage
                src="/pyrolysis-system-diagram.png"
                alt={t.methanePyrolysis.diagramAlt}
                width={1400}
                height={900}
                className="h-full max-h-[560px] w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                data-no-watermark
              />
              <p className="bg-[var(--color-teal)] px-4 py-2 text-[10px] leading-5 text-white/80">
                {t.methanePyrolysis.sourceLabel}{" "}
                <a
                  href={t.methanePyrolysis.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-2 hover:text-white/70"
                >
                  {t.methanePyrolysis.sourceLinkText}
                </a>
                ; {t.methanePyrolysis.sourceAdapted}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
            {t.whyMethanePyrolysis.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl md:text-4xl lg:text-5xl">
            {t.whyMethanePyrolysis.title}
          </h2>
          <div className="mt-10 grid gap-6">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_1fr] lg:items-stretch">
              <article className="rounded-[1.5rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] p-6 text-white editorial-shadow sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight sm:text-[1.95rem]">
                  {t.whyMethanePyrolysis.methanePyrolysisBox.title}
                </h3>
                <p className="mt-4 text-[0.92rem] leading-7 text-white/80">
                  {t.whyMethanePyrolysis.methanePyrolysisBox.paragraphs[0]}
                </p>
                <ul className="mt-4 space-y-1.5 text-base leading-7 text-white/90">
                  {t.whyMethanePyrolysis.methanePyrolysisBox.listItems.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.92rem] leading-7 text-white/80">
                  {t.whyMethanePyrolysis.methanePyrolysisBox.paragraphs[1]}
                </p>
                <p className="mt-4 text-[0.92rem] leading-7 text-white/80">
                  {t.whyMethanePyrolysis.methanePyrolysisBox.paragraphs[2]}
                </p>
              </article>
              <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-[rgba(56,56,55,0.1)] bg-white sm:min-h-[280px] lg:min-h-[320px]">
                <ContentImage
                  src="/methane-pyrolysis-diagram.png"
                  alt={t.whyMethanePyrolysis.methanePyrolysisBox.diagramAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
              <article className="rounded-[1.5rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] p-6 text-white editorial-shadow sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight sm:text-[1.95rem]">
                  {t.whyMethanePyrolysis.pureCarbonBox.title}
                </h3>
                <p className="mt-4 text-[0.92rem] leading-7 text-white/80">
                  {t.whyMethanePyrolysis.pureCarbonBox.paragraphs[0]}
                </p>
                <p className="mt-5 text-[0.92rem] leading-7 text-white/80">
                  {t.whyMethanePyrolysis.pureCarbonBox.paragraphs[1]}
                </p>
              </article>
              <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] border border-[rgba(56,56,55,0.1)] bg-white sm:min-h-[280px] lg:min-h-[320px]">
                <ContentImage
                  src="/pure-carbon-pyrolysis-diagram.png"
                  alt={t.whyMethanePyrolysis.pureCarbonBox.diagramAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-8 pb-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
            {t.carbonApplicationsSection.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl md:text-4xl lg:text-5xl">
            {t.carbonApplicationsSection.title}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-8 text-[var(--color-muted)]">
            {t.carbonApplicationsSection.description}
          </p>
          <div className="mt-10 grid gap-6">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <article className="rounded-[1.5rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] p-6 text-white editorial-shadow sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight sm:text-[1.65rem]">
                  {t.carbonApplicationsSection.agriculture.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-6 text-white/80">
                  {t.carbonApplicationsSection.agriculture.paragraphs[0]}
                </p>
                <p className="mt-3 text-[0.9rem] leading-6 text-white/80">
                  {t.carbonApplicationsSection.agriculture.advantagesLabel}
                </p>
                <ul className="mt-1.5 space-y-1 text-[0.9rem] leading-6 text-white/80">
                  {t.carbonApplicationsSection.agriculture.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.9rem] leading-6 text-white/80">
                  {t.carbonApplicationsSection.agriculture.closingParagraph}
                </p>
              </article>
              <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] editorial-shadow sm:min-h-[280px] lg:h-auto">
                <ContentImage
                  src="/carbon_in_agriculture.png"
                  alt={t.carbonApplicationsSection.agriculture.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] editorial-shadow sm:min-h-[280px] lg:order-first lg:h-auto">
                <ContentImage
                  src="/carbon_in_building_materials.png"
                  alt={t.carbonApplicationsSection.buildingMaterials.imageAlt}
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <article className="rounded-[1.5rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] p-6 text-white editorial-shadow sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight sm:text-[1.65rem]">
                  {t.carbonApplicationsSection.buildingMaterials.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-6 text-white/80">
                  {t.carbonApplicationsSection.buildingMaterials.paragraphs[0]}
                </p>
                <p className="mt-3 text-[0.9rem] leading-6 text-white/80">
                  {t.carbonApplicationsSection.buildingMaterials.advantagesLabel}
                </p>
                <ul className="mt-1.5 space-y-1 text-[0.9rem] leading-6 text-white/80">
                  {t.carbonApplicationsSection.buildingMaterials.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.9rem] leading-6 text-white/80">
                  {t.carbonApplicationsSection.buildingMaterials.closingParagraph}
                </p>
              </article>
            </div>

            <article className="rounded-[1.5rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] p-6 text-white editorial-shadow sm:p-7">
              <h3 className="text-[1.65rem] font-semibold tracking-tight">
                {t.carbonApplicationsSection.specialApplications.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-6 text-white/80">
                {t.carbonApplicationsSection.specialApplications.intro}
              </p>
              <ul className="mt-3 columns-1 gap-x-8 text-[0.9rem] leading-6 text-white/80 md:columns-2">
                {t.carbonApplicationsSection.specialApplications.items.map((item) => (
                  <li key={item} className="mb-2 flex break-inside-avoid items-start gap-2.5">
                    <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
