"use client";

import { useLanguage } from "@/components/language-provider";
import { getMosaThematicAreasTranslations } from "@/data/translations/mosa-thematic-areas";

const ORBIT_RADIUS = 43.5;

function getOrbitPosition(index: number, total: number) {
  const angle = (index / total) * 360 - 90;
  const radians = (angle * Math.PI) / 180;

  return {
    left: `${50 + ORBIT_RADIUS * Math.cos(radians)}%`,
    top: `${50 + ORBIT_RADIUS * Math.sin(radians)}%`,
  };
}

export function MosaThematicAreasDiagram() {
  const { locale } = useLanguage();
  const t = getMosaThematicAreasTranslations(locale);

  return (
    <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl">{t.title}</h2>

      <div className="mx-auto mt-8 max-w-4xl rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(185,218,208,0.22)_0%,rgba(78,177,208,0.08)_50%,rgba(149,75,151,0.06)_100%)] px-3 py-10 sm:px-8 sm:py-12">
        <div className="relative mx-auto aspect-square w-full max-w-[30rem] sm:max-w-[38rem] lg:max-w-[42rem]">
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <circle
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="rgba(0,114,125,0.12)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>

          <div className="absolute top-1/2 left-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[3px] border-white/60 bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] px-4 text-center text-white shadow-[0_14px_32px_-12px_rgba(10,79,88,0.45)] sm:h-40 sm:w-40">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-xs">MOSA</span>
            <span className="mt-1.5 text-sm font-semibold leading-tight sm:text-base">{t.centerLabel}</span>
          </div>

          {t.areas.map((area, index) => {
            const position = getOrbitPosition(index, t.areas.length);

            return (
              <div
                key={area.id}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={position}
              >
                <ThematicAreaCircle area={area} locale={locale} />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

type ThematicArea = {
  id: string;
  title: string;
  accent: string;
  textColor: string;
};

function ThematicAreaCircle({ area, locale }: { area: ThematicArea; locale: string }) {
  return (
    <div
      className="flex h-[7.75rem] w-[7.75rem] shrink-0 items-center justify-center rounded-full border-[2.5px] border-white/75 px-3.5 text-center sm:h-36 sm:w-36 sm:px-4 lg:h-40 lg:w-40"
      style={{
        backgroundColor: area.accent,
        color: area.textColor,
        boxShadow: `0 10px 22px -12px color-mix(in srgb, ${area.accent} 55%, transparent)`,
      }}
      title={area.title.replace(/\n/g, " ")}
      lang={locale}
    >
      <span className="text-xs leading-snug font-semibold whitespace-pre-line hyphens-auto sm:text-sm">
        {area.title}
      </span>
    </div>
  );
}
