"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/data/site-content";

type MobileNavProps = {
  items: NavItem[];
  menuLabel: string;
  openLabel: string;
  closeLabel: string;
};

export function MobileNav({ items, menuLabel, openLabel, closeLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(56,56,55,0.12)] bg-white text-[var(--color-charcoal)] shadow-[0_1px_4px_rgba(25,28,29,0.06)]"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open ? (
        <button
          type="button"
          aria-label={closeLabel}
          className="fixed inset-0 top-[57px] z-40 bg-[rgba(25,28,29,0.35)] backdrop-blur-[2px] sm:top-[65px]"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <nav
        id="mobile-nav-panel"
        aria-label={menuLabel}
        className={`fixed inset-x-0 top-[57px] z-50 max-h-[calc(100dvh-57px)] overflow-y-auto border-b border-[rgba(56,56,55,0.1)] bg-[rgba(248,250,250,0.98)] px-5 py-4 shadow-[0_20px_50px_rgba(25,28,29,0.12)] backdrop-blur-xl transition-all duration-200 sm:top-[65px] sm:max-h-[calc(100dvh-65px)] ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-[1rem] px-4 py-3.5 text-base font-medium text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-teal)]"
              >
                {item.label}
              </Link>
              {item.children?.length ? (
                <ul className="mb-1 ml-3 border-l border-[rgba(56,56,55,0.1)] pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-[0.85rem] px-3 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-teal)]"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
