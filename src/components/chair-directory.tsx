"use client";

import { useMemo, useState } from "react";
import type { ChairGroup } from "@/data/h2c-chairs";

type ChairDirectoryProps = {
  groups: ChairGroup[];
  contactPersonLabel: string;
  emailLabel: string;
};

export function ChairDirectory({ groups, contactPersonLabel, emailLabel }: ChairDirectoryProps) {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    () => new Set(groups[0] ? [groups[0].chairKey] : []),
  );

  const selectedGroups = useMemo(
    () => groups.filter((group) => selectedKeys.has(group.chairKey)),
    [groups, selectedKeys],
  );

  const toggleChair = (chairKey: string) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(chairKey)) {
        if (next.size > 1) next.delete(chairKey);
      } else {
        next.add(chairKey);
      }
      return next;
    });
  };

  if (groups.length === 0) return null;

  return (
    <div className="mx-auto mt-5 grid max-w-6xl gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="overflow-hidden rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-[var(--color-surface-soft)]">
        <ul className="divide-y divide-[rgba(56,56,55,0.1)]">
          {groups.map((group) => {
            const isActive = selectedKeys.has(group.chairKey);
            return (
              <li key={group.chairKey}>
                <button
                  type="button"
                  onClick={() => toggleChair(group.chairKey)}
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

      <article className="overflow-hidden rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-[var(--color-surface-soft)] lg:sticky lg:top-24 lg:self-start">
        <div className="p-4 sm:p-5">
          {selectedGroups.map((group, groupIndex) => (
            <div
              key={group.chairKey}
              className={groupIndex > 0 ? "mt-6 border-t border-[rgba(56,56,55,0.12)] pt-6" : ""}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-teal)]">
                {group.chair}
              </h3>
              {group.contacts.map((contact) => (
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
          ))}
        </div>
      </article>
    </div>
  );
}
