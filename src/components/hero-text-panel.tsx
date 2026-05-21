import type { ReactNode } from "react";

type HeroTextPanelProps = {
  children: ReactNode;
  className?: string;
};

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

export function heroDescriptionClassName() {
  return "mt-3 w-full text-[0.9375rem] leading-6 text-white/88 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:mt-4 sm:text-base sm:leading-7 md:text-lg";
}

export function heroMobileScrimClassName() {
  return "pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,46,51,0.15)_0%,rgba(7,46,51,0.55)_42%,rgba(7,46,51,0.92)_100%)] sm:hidden";
}

export function heroDesktopGradientClassName() {
  return "pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/3 bg-[linear-gradient(to_top,rgba(7,46,51,0.90)_0%,rgba(7,46,51,0.62)_45%,rgba(7,46,51,0.18)_80%,transparent_100%)] sm:block";
}
