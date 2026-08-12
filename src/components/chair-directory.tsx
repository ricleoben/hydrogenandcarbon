"use client";

import { useMemo, useState } from "react";
import type { ChairGroup } from "@/data/h2c-chairs";

type ChairDirectoryProps = {
  groups: ChairGroup[];
  contactPersonLabel: string;
  emailLabel: string;
};

export function ChairDirectory({ groups, contactPersonLabel, emailLabel }: ChairDirectoryProps) {
  const [selectedKey, setSelectedKey] = useState(() => groups[0]?.chairKey ?? "");

  const selectedGroup = useMemo(
    () => groups.find((group) => group.chairKey === selectedKey) ?? groups[0],
    [groups, selectedKey],
  );

  if (groups.length === 0 || !selectedGroup) return null;

  return (
    <div className="mx-auto mt-5 grid max-w-6xl gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="overflow-hidden rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-[var(--color-surface-soft)]">
        <ul className="divide-y divide-[rgba(56,56,55,0.1)]">
          {groups.map((group) => {
            const isActive = selectedKey === group.chairKey;
            return (
              <li key={group.chairKey}>
                <button
                  type="button"
                  onClick={() => setSelectedKey(group.chairKey)}
                  aria-pressed={isActive}
                  className={`w-full px-4 py-3.5 text-left text-sm leading-snug transition-colors sm:px-5 sm:text-[0.95rem] ${
                    isActive
                      ? "bg-[var(--color-mint)]/45 font-semibold text-[var(--color-teal)]"
                      : "text-[var(--color-charcoal)] hover:bg-white/60"
                  }`}
                >
                  {group.chair}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <article
        className="overflow-hidden rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-[var(--color-surface-soft)] lg:sticky lg:top-24 lg:self-start"
        aria-live="polite"
      >
        <div className="p-4 sm:p-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-teal)]">
            {selectedGroup.chair}
          </h3>
          {selectedGroup.contacts.map((contact) => (
            <div
              key={contact.email}
              className="mt-4 border-t border-[rgba(56,56,55,0.12)] pt-4 first:mt-3 first:border-0 first:pt-0"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {contactPersonLabel}
              </p>
              <p className="mt-1 text-base font-semibold tracking-tight text-[var(--color-charcoal)]">
                {contact.name}
              </p>
              <p className="mt-2 text-sm text-[var(--color-charcoal)]">
                {emailLabel}{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all font-medium text-[var(--color-teal)] underline-offset-2 hover:underline"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
