"use client";

import { useEffect, useRef } from "react";
import { booking } from "@/content/site";
import { loadCalendly } from "@/lib/calendly";

/**
 * The scheduling calendar. Loaded only once it is close to the viewport, so a
 * visitor who never scrolls this far never downloads Calendly or takes its
 * cookies. Initialised by hand rather than through Calendly's auto-scan, which
 * only runs once and would miss this element if the popup loaded the script
 * first.
 */
export default function CalendlyEmbed({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        loadCalendly()
          .then(() => {
            // The effect can outlive the load; bail if it did.
            if (!ref.current) return;
            window.Calendly?.initInlineWidget({
              url: booking.calendlyUrl,
              parentElement: ref.current,
            });
          })
          .catch(() => {
            // Blocked or offline. The booking buttons still link out.
          });
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={className} />;
}
