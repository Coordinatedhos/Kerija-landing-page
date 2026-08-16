"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades and lifts its children into place the first time they scroll into view.
 *
 * The hidden starting state lives behind the `js` class that layout.tsx sets
 * before first paint, so with JavaScript off or still loading the content is
 * simply visible rather than stuck at opacity 0. Reduced motion is handled the
 * same way, in globals.css, which is why there is no check for it here.
 */
export default function Reveal({
  children,
  className = "",
  /** Milliseconds to stagger this one behind its neighbours. */
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setShown(true);
        observer.disconnect();
      },
      // Hold off until a little of it is actually on screen.
      { rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
