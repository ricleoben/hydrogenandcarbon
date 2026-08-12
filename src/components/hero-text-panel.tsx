import type { ReactNode } from "react";
import { ContentImage } from "@/components/content-image";

type HeroTextPanelProps = {
  children: ReactNode;
  className?: string;
};

type HeroPageSectionProps = {
  children: ReactNode;
  background: ReactNode;
};

export function HeroPageSection({ children, background }: HeroPageSectionProps) {
  return (
    <section
      className="relative min-h-[520px] overflow-hidden px-4 pt-10 pb-6 sm:min-h-[620px] sm:px-8 sm:pt-14 sm:pb-10 lg:min-h-[820px] lg:px-16 lg:pt-16 lg:pb-12"
      data-no-watermark
    >
      <div className="absolute inset-0" data-no-watermark>
        {background}
      </div>
      <div className="relative mx-auto flex min-h-[460px] max-w-7xl flex-col justify-end sm:min-h-[540px] lg:min-h-[740px]">
        {children}
      </div>
    </section>
  );
}

type HeroSliderBackgroundProps = {
  images: string[];
};

export function HeroSliderBackground({ images }: HeroSliderBackgroundProps) {
  const loopImages = images.length > 0 ? [...images, images[0]] : images;

  return (
    <>
      <div className="hero-side-track flex h-full min-h-full bg-[#0a4f58]">
        {loopImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="hero-side-slide-item relative h-full min-h-full shrink-0 overflow-hidden"
          >
            <ContentImage
              src={image}
              alt=""
              aria-hidden
              fill
              className="object-cover object-center"
              data-no-watermark
            />
          </div>
        ))}
      </div>
      <div className={heroMobileScrimClassName()} />
      <div className={heroDesktopGradientClassName()} />
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,_rgba(185,218,208,0.12),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(0,114,125,0.58),_transparent_42%)] sm:block" />
    </>
  );
}

export function heroHomeTitleClassName() {
  return "w-full text-[clamp(1.65rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]";
}

export function heroHomeDescriptionClassName() {
  return "mt-3 w-full text-base leading-7 text-white/72 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:mt-5 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9";
}

export function HeroTextPanel({ children, className = "" }: HeroTextPanelProps) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-[rgba(7,46,51,0.78)] px-4 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-md sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:backdrop-blur-none ${className}`}
    >
      {children}
    </div>
  );
}

type HeroPillProps = {
  children: ReactNode;
};

export function HeroPill({ children }: HeroPillProps) {
  return (
    <span className="mb-3 inline-block max-w-full rounded-full bg-[rgba(0,114,125,0.72)] px-3 py-1.5 text-[10px] font-semibold leading-snug tracking-[0.14em] text-white/95 sm:mb-4 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
      {children}
    </span>
  );
}

export function heroTitleClassName() {
  return "w-full text-[clamp(1.45rem,6.5vw,4.2rem)] font-semibold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]";
}

export function heroMobileScrimClassName() {
  return "pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,46,51,0.15)_0%,rgba(7,46,51,0.55)_42%,rgba(7,46,51,0.92)_100%)] sm:hidden";
}

export function heroDesktopGradientClassName() {
  return "pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/3 bg-[linear-gradient(to_top,rgba(7,46,51,0.90)_0%,rgba(7,46,51,0.62)_45%,rgba(7,46,51,0.18)_80%,transparent_100%)] sm:block";
}
