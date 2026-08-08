"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { booking } from "@/content/site";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

/**
 * Fetched on the first click rather than on page load, so visitors who never
 * book never pay for the script and never get Calendly's cookies. Module-level
 * so several buttons share one download.
 */
let loader: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  if (loader) return loader;

  loader = new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      // Allow a later click to retry instead of failing forever.
      loader = null;
      reject(new Error("Calendly widget failed to load"));
    };
    document.body.appendChild(script);
  });

  return loader;
}

export default function BookingLink({
  className,
  children,
  onSelect,
}: {
  className?: string;
  children: ReactNode;
  /** Runs on activation too — used to close the mobile menu. */
  onSelect?: () => void;
}) {
  const opening = useRef(false);
  const url = booking.calendlyUrl;

  // Until a Calendly link is configured, behave like the anchor it replaced.
  if (!url) {
    return (
      <a href={booking.fallbackHref} className={className} onClick={onSelect}>
        {children}
      </a>
    );
  }

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // Let modified clicks (new tab, save) fall through to the href.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    onSelect?.();
    if (opening.current) return;
    opening.current = true;

    try {
      await loadCalendly();
      window.Calendly?.initPopupWidget({ url });
    } catch {
      // Blocked or offline — fall back to the full scheduling page.
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      opening.current = false;
    }
  }

  return (
    // The href keeps this a real link: it works before hydration, and
    // right-click and middle-click still open the scheduling page.
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
