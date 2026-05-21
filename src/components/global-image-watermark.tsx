"use client";

import { useEffect } from "react";

const APPLIED_ATTR = "data-mul-watermark-applied";

function shouldSkipImage(img: HTMLImageElement) {
  return Boolean(img.closest("header, footer, div.absolute.inset-0, [data-no-watermark]"));
}

function findHost(img: HTMLImageElement): HTMLElement | null {
  let candidate: HTMLElement | null = img.parentElement;
  const imgRect = img.getBoundingClientRect();

  for (let i = 0; i < 8 && candidate; i += 1) {
    const style = window.getComputedStyle(candidate);
    const hasClipping =
      style.overflow === "hidden" ||
      style.overflowX === "hidden" ||
      style.overflowY === "hidden";
    const rect = candidate.getBoundingClientRect();
    const hasSize = rect.width > 0 && rect.height > 0;
    const closeToImage =
      hasSize &&
      rect.width <= imgRect.width * 2.2 &&
      rect.height <= imgRect.height * 2.2;

    if (hasClipping && closeToImage) {
      return candidate;
    }
    candidate = candidate.parentElement;
  }

  return img.parentElement;
}

function addBadgeForImage(img: HTMLImageElement) {
  if (img.getAttribute(APPLIED_ATTR) === "true" || shouldSkipImage(img)) {
    return;
  }

  const host = findHost(img);
  if (!host || host.querySelector(":scope > .mul-watermark-badge")) {
    return;
  }

  const hostStyle = window.getComputedStyle(host);
  if (hostStyle.position === "static") {
    host.style.position = "relative";
  }

  const badge = document.createElement("span");
  badge.className = "mul-watermark-badge";
  badge.setAttribute("aria-hidden", "true");
  badge.textContent = img.dataset.watermarkLabel ?? "@MUL";
  host.appendChild(badge);
  img.setAttribute(APPLIED_ATTR, "true");
}

function addBadgesInRoot(root: ParentNode) {
  root.querySelectorAll("img").forEach((node) => {
    if (node instanceof HTMLImageElement) {
      addBadgeForImage(node);
    }
  });
}

function removeBadgesInSkipZones(root: ParentNode) {
  root.querySelectorAll(".mul-watermark-badge").forEach((node) => {
    if (!(node instanceof HTMLElement)) {
      return;
    }
    if (node.closest("header, footer, div.absolute.inset-0, [data-no-watermark]")) {
      node.remove();
    }
  });
}

export function GlobalImageWatermark() {
  useEffect(() => {
    addBadgesInRoot(document);
    removeBadgesInSkipZones(document);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }
          if (node.tagName === "IMG" && node instanceof HTMLImageElement) {
            addBadgeForImage(node);
            return;
          }
          addBadgesInRoot(node);
          removeBadgesInSkipZones(node);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
