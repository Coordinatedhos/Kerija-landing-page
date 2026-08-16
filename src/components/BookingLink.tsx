"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { booking } from "@/content/site";
import { loadCalendly } from "@/lib/calendly";

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
