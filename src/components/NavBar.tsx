"use client";

import { useState } from "react";
import { nav } from "@/content/site";
import { FacebookIcon, InstagramIcon } from "@/components/Icons";

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-ink text-white">
      <div className="flex items-center gap-4 px-3 py-3 md:px-4">
        <ul className="flex shrink-0 items-center gap-2">
          {nav.socials.map((social) => {
            const Icon =
              SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="block p-1 transition-opacity hover:opacity-70"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            );
          })}
        </ul>

        <nav className="hidden flex-1 justify-evenly lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-[0.06em] transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="ml-auto flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-px w-5 bg-white transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-white transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/15 px-5 pb-4 lg:hidden"
        >
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[13px] tracking-[0.06em] transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
