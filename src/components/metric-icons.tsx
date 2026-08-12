export type MetricIconName =
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

export function MetricIcon({ name }: { name: MetricIconName }) {
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

export function MetricIconBadge({ name }: { name: MetricIconName }) {
  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
      <MetricIcon name={name} />
    </span>
  );
}

/** Keeps "before → after" metric values from wrapping mid-arrow. */
export function MetricValue({ value }: { value: string }) {
  const arrowParts = value.split(/\s*→\s*/);
  if (arrowParts.length === 2) {
    return (
      <span className="inline-flex flex-wrap items-baseline gap-x-1">
        <span className="whitespace-nowrap">{arrowParts[0]}</span>
        <span className="whitespace-nowrap" aria-hidden="true">
          →
        </span>
        <span className="whitespace-nowrap">{arrowParts[1]}</span>
      </span>
    );
  }

  return <span className="whitespace-nowrap">{value}</span>;
}
