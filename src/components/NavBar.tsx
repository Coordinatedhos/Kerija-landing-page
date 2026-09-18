"use client";

import { useState } from "react";
import BookingLink from "@/components/BookingLink";
import LanguageSwitch from "@/components/LanguageSwitch";
import { FacebookIcon, InstagramIcon } from "@/components/Icons";
import type { Content } from "@/content";

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

const DESKTOP_LINK =
  "text-[13px] tracking-[0.06em] transition-opacity hover:opacity-70";
const MOBILE_LINK =
  "block py-3 text-[13px] tracking-[0.06em] transition-opacity hover:opacity-70";

export default function NavBar({
  a11y,
  copy,
  languages,
}: {
  a11y: Content["a11y"];
  copy: Content["nav"];
  languages: Content["languages"];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-ink text-white">
      <div className="flex items-center gap-4 px-3 py-3 md:px-4">
        <ul className="flex shrink-0 items-center gap-2">
          {copy.socials.map((social) => {
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
          {copy.links.map((link) =>
            link.booking ? (
              <BookingLink key={link.key} className={DESKTOP_LINK}>
                {link.label}
              </BookingLink>
            ) : (
              <a key={link.key} href={link.href} className={DESKTOP_LINK}>
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* Kept out of the menu so it is reachable at every width without
            opening anything. */}
        <LanguageSwitch
          label={a11y.language}
          languages={languages}
          className="ml-auto shrink-0 border-l border-white/20 pl-3"
        />

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={a11y.menu}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
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
          {copy.links.map((link) =>
            link.booking ? (
              <BookingLink
                key={link.key}
                className={MOBILE_LINK}
                onSelect={() => setOpen(false)}
              >
                {link.label}
              </BookingLink>
            ) : (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className={MOBILE_LINK}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      )}
    </div>
  );
}
