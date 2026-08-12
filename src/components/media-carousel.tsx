"use client";

import { useState } from "react";
import { ContentImage } from "@/components/content-image";

export type MediaCarouselSlide = {
  src: string;
  alt: string;
  title: string;
  text: string;
  /** Pre-rendered on the server, e.g. "Photo 3 of 12". */
  counterLabel: string;
  /** Pre-rendered on the server, e.g. "Go to slide 3". */
  goToLabel: string;
};

type MediaCarouselProps = {
  slides: MediaCarouselSlide[];
  previousLabel: string;
  nextLabel: string;
};

export function MediaCarousel({ slides, previousLabel, nextLabel }: MediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex];

  if (!current) return null;

  const showPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      role="group"
      aria-roledescription="carousel"
    >
      <div className="relative overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)] bg-black/5">
        <ContentImage
          src={current.src}
          alt={current.alt}
          width={1200}
          height={800}
          className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-[420px] sm:object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
      <div className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-5">
        <div aria-live="polite" aria-atomic="true">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
            {current.counterLabel}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)]">{current.title}</h3>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{current.text}</p>
        </div>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={showPrevious}
            className="rounded-full border border-[rgba(56,56,55,0.2)] px-4 py-2 text-sm font-semibold text-[var(--color-charcoal)] transition hover:bg-white"
          >
            {previousLabel}
          </button>
          <button
            type="button"
            onClick={showNext}
            className="rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {nextLabel}
          </button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={slide.goToLabel}
              aria-current={index === activeIndex}
              className={`h-2.5 w-8 rounded-full transition ${
                index === activeIndex ? "bg-[var(--color-teal)]" : "bg-[rgba(56,56,55,0.2)]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
