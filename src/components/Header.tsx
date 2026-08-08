"use client";

import { useState } from "react";
import { brand, nav } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-dark/90 text-cream backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#home" className="font-serif text-lg tracking-wide">
          {brand.name}
        </a>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] uppercase md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-cream transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-cream transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-cream/10 px-6 pb-6 text-xs tracking-[0.2em] uppercase md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
