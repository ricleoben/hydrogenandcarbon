type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "onDark";
  titleTone?: "default" | "teal";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "default",
  titleTone = "default",
}: SectionIntroProps) {
  const onDark = variant === "onDark";
  const titleColor =
    titleTone === "teal"
      ? "text-[var(--color-teal)]"
      : onDark
        ? "text-white"
        : "text-[var(--color-charcoal)]";

  return (
    <div className={align === "center" ? "mx-auto max-w-6xl text-center" : "max-w-none"}>
      {eyebrow ? (
        <p
          className={
            onDark
              ? "mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/70"
              : "mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]"
          }
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`max-w-none text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            onDark
              ? "mt-5 max-w-none text-base leading-7 text-white/78 sm:text-lg"
              : "mt-5 max-w-none text-base leading-7 text-[var(--color-muted)] sm:text-lg"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
