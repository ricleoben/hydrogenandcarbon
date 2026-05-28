import Image from "next/image";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { footerContactLines } from "@/data/site-content";
import { getCommonUi, getFooterLinks, getNavItems } from "@/data/translations/common";
import { pick } from "@/lib/i18n";
import { getLocale } from "@/lib/server-i18n";

function normalizeAddressText(value: string) {
  return value
    .replaceAll("Franz-Josef-Strasse", "Franz Josef-Strasse")
    .replaceAll("Franz-Josef-Straße", "Franz Josef-Straße")
    .replaceAll("Peter Tunner Straße", "Peter Tunner-Straße");
}

function normalizeAddressHref(value: string) {
  return value
    .replaceAll("Franz-Josef-Strasse", "Franz+Josef-Strasse")
    .replaceAll("Franz-Josef-Stra%C3%9Fe", "Franz+Josef-Stra%C3%9Fe")
    .replaceAll("Peter+Tunner-Stra%C3%9Fe", "Peter+Tunner-Stra%C3%9Fe");
}

function FooterContactIcon({ kind }: { kind: "location" | "phone" | "mail" | "linkedin" }) {
  const common = "h-4 w-4 shrink-0 text-[var(--color-teal)]";
  if (kind === "location") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21c-3.5-3.2-6-6.3-6-10a6 6 0 1 1 12 0c0 3.7-2.5 6.8-6 10Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    );
  }
  if (kind === "phone") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.5 3.5h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "linkedin") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 10.2v5.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <path
          d="M12 16v-3.2c0-1.2.8-2 1.9-2s1.9.8 1.9 2V16"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

export async function SiteHeader() {
  const locale = await getLocale();
  const navItems = getNavItems(locale);
  const ui = getCommonUi(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-white/55 bg-[rgba(248,250,250,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--site-header-height)] max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-8 lg:px-16">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2.5 rounded-md transition-opacity hover:opacity-90 sm:max-w-none sm:flex-initial sm:gap-3 lg:gap-4"
          aria-label={ui.homepageAria}
        >
          <Image
            src="/footerlogo.png"
            alt="RIC Leoben"
            width={240}
            height={76}
            className="h-7 w-auto shrink-0 object-contain sm:h-10 lg:h-11"
            priority
          />
          <span className="h-6 w-px shrink-0 bg-[var(--color-charcoal)]/15 sm:h-8 lg:h-9" aria-hidden />
          <Image
            src="/Hydrogen and carbon logo.png"
            alt="SCoRe A⁺ Hydrogen and Carbon Centre"
            width={700}
            height={105}
            className="hidden h-8 w-auto object-contain object-left sm:block sm:h-10 lg:h-11"
            priority
          />
          <div className="min-w-0 sm:hidden">
            <p className="font-[family-name:var(--font-manrope)] text-[11px] font-bold leading-tight text-[var(--color-teal)]">
              SCoRe A⁺
            </p>
            <p className="text-[10px] font-medium leading-tight text-[var(--color-charcoal)]/80">
              {pick(locale, "Hydrogen & Carbon", "Wasserstoff & Kohlenstoff")}
            </p>
          </div>
        </Link>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-4 lg:gap-5 xl:gap-6">
          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navItems.map((item) => (
            <div key={item.href} className="group relative py-3">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[13px] font-medium text-[var(--color-charcoal)]/84 transition-colors hover:text-[var(--color-teal)] xl:text-sm"
              >
                {item.label}
                {item.children ? (
                  <span className="text-xs text-[var(--color-charcoal)]/45 transition-transform group-hover:translate-y-0.5">
                    +
                  </span>
                ) : null}
              </Link>
              <span className="absolute inset-x-0 -bottom-[1px] h-0.5 origin-left scale-x-0 bg-[var(--color-teal)] transition-transform duration-200 group-hover:scale-x-100" />
              {item.children ? (
                <div className="pointer-events-none absolute left-0 top-full w-72 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="rounded-[1.25rem] border border-white/70 bg-[rgba(255,255,255,0.94)] p-3 shadow-[0_20px_50px_rgba(25,28,29,0.12)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-[1rem] px-4 py-3 text-sm font-medium text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-teal)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          </nav>
          <LanguageToggle />
          <MobileNav
            items={navItems}
            menuLabel={ui.menu}
            openLabel={ui.openMenu}
            closeLabel={ui.closeMenu}
          />
        </div>
      </div>
    </header>
  );
}

export async function SiteFooter() {
  const locale = await getLocale();
  const navItems = getNavItems(locale);
  const footerLinks = getFooterLinks(locale);
  const ui = getCommonUi(locale);
  const contactIcons: Array<"location" | "phone" | "mail" | "linkedin"> = ["location", "phone", "mail", "linkedin"];

  return (
    <footer className="mt-16 border-t border-[rgba(56,56,55,0.08)] bg-[var(--color-surface)] text-[var(--color-charcoal)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-10 sm:py-14 lg:px-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 sm:gap-4">
              <Image
                src="/footerlogo.png"
                alt="RIC Leoben"
                width={240}
                height={76}
                className="h-10 w-auto object-contain sm:h-11"
              />
              <span className="h-8 w-px bg-[var(--color-charcoal)]/20 sm:h-9" aria-hidden />
              <Image
                src="/Hydrogen and carbon logo.png"
                alt="SCoRe A⁺ Hydrogen and Carbon Centre"
                width={700}
                height={105}
                className="h-9 w-auto object-contain sm:h-10"
              />
            </div>
            <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
              {footerContactLines.map((line, i) => (
                <li key={line.label} className="flex gap-2.5">
                  <span className="mt-0.5">
                    <FooterContactIcon kind={contactIcons[i] ?? "location"} />
                  </span>
                  {(() => {
                    const safeLabel =
                      i === 0 ? "Franz Josef-Strasse 18, 8700 Leoben" : normalizeAddressText(line.label);
                    const safeHref =
                      i === 0
                        ? "https://www.google.com/maps/search/?api=1&query=Franz+Josef-Strasse+18,+8700+Leoben"
                        : normalizeAddressHref(line.href);

                    return (
                      <Link
                        href={safeHref}
                        className="min-w-0 break-words underline-offset-2 transition-colors hover:text-[var(--color-teal)]"
                        {...(safeHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {safeLabel}
                      </Link>
                    );
                  })()}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-full items-start justify-center lg:min-h-0">
            <Image
              src="/mulstempel.png"
              alt={pick(locale, "Montanuniversität Leoben seal", "Siegel der Montanuniversität Leoben")}
              width={320}
              height={320}
              className="h-36 w-auto max-w-[min(100%,280px)] object-contain sm:h-52 lg:h-60 xl:h-64"
            />
          </div>
          <div className="min-w-0 w-full max-w-md justify-self-start self-start lg:justify-self-end">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal)]/80">{ui.menu}</p>
                <nav className="mt-3 flex flex-col gap-1.5" aria-label={ui.menu}>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-teal)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-charcoal)]/80">{ui.legal}</p>
                <nav className="mt-3 flex flex-col gap-1.5" aria-label={ui.legal}>
                  {footerLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-teal)]"
                      {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
