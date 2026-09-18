/**
 * Puts a language file (./lv.ts, ./en.ts) together with the things that never
 * change between languages (./site.ts) and hands the page one object per
 * language, in the shape the components expect.
 *
 * To add a language: add `xx.ts` alongside the others, typed `Copy`, then add
 * it to `locales` and `copy` below. Everything else — the routes, the language
 * switch, the `hreflang` tags — follows from that list.
 */
import { en } from "./en";
import { lv, type Copy } from "./lv";
import {
  brand,
  contact,
  navLinks,
  photos,
  socials,
  workshopsHref,
  type Photo,
  type PhotoSlot,
} from "./site";

export type { Copy };

/** Latvian first: it is the default, and `/` redirects to it. */
export const locales = ["lv", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "lv";

const copy: Record<Locale, Copy> = { lv, en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A photo slot from site.ts, with its alt text from the language file. */
function photo(slot: PhotoSlot, alt: string): Photo {
  return { ...slot, alt };
}

/** Backdrops and the thin bands say nothing, so their alt text stays empty. */
function decorative(slot: PhotoSlot): Photo {
  return { ...slot, alt: "" };
}

export function getContent(locale: Locale) {
  const c = copy[locale];

  return {
    locale,
    meta: c.meta,

    /** Every language, for the switch in the nav bar and the `hreflang` tags. */
    languages: locales.map((code) => ({
      code,
      href: `/${code}`,
      /** "LV" / "EN" — the label on the switch itself. */
      short: code.toUpperCase(),
      /** The language's own name, which is what a switch should say. */
      name: copy[code].languageName,
      current: code === locale,
    })),

    brand: { name: brand.name, tagline: c.brand.tagline },

    a11y: c.a11y,

    marquee: c.marquee,

    masthead: {
      left: {
        question: c.masthead.leftQuestion,
        link: { label: c.masthead.leftLink, href: workshopsHref },
      },
      right: {
        question: c.masthead.rightQuestion,
        note: c.masthead.rightNote,
      },
    },

    nav: {
      socials,
      links: navLinks.map((link) => ({ ...link, label: c.nav[link.key] })),
    },

    hero: {
      heading: c.hero.heading,
      body: c.hero.body,
      cta: c.hero.cta,
      background: decorative(photos.flowers),
      photo: photo(photos.heroPots, c.hero.alts.photo),
    },

    about: {
      heading: c.about.heading,
      body: c.about.body,
      background: decorative(photos.flowers),
    },

    workshops: {
      heading: c.workshops.heading,
      body: c.workshops.body,
      // The four tiles, in the order the mockup hangs them.
      items: [
        photo(photos.workshops.fan, c.workshops.alts.fan),
        photo(photos.workshops.glasses, c.workshops.alts.glasses),
        photo(photos.workshops.keychainChild, c.workshops.alts.keychainChild),
        photo(photos.workshops.keychainOwl, c.workshops.alts.keychainOwl),
      ],
    },

    /** The thin floral strip that separates the stacked cards in the mockup. */
    band: decorative(photos.flowers),

    howItWorks: c.howItWorks,

    eventsWeDo: {
      heading: c.eventsWeDo.heading,
      body: c.eventsWeDo.body,
      types: c.eventsWeDo.types,
      photo: photo(photos.events, c.eventsWeDo.alts.photo),
    },

    personalised: {
      heading: c.personalised.heading,
      subheading: c.personalised.subheading,
      body: c.personalised.body,
      photos: {
        brushes: photo(photos.brushes, c.personalised.alts.brushes),
        children: photo(photos.children, c.personalised.alts.children),
        supplies: photo(photos.supplies, c.personalised.alts.supplies),
      },
      consider: c.personalised.consider,
    },

    /** The invitation band: photo, headline, booking button. */
    plan: {
      lead: c.plan.lead,
      accent: c.plan.accent,
      body: c.plan.body,
      cta: c.plan.cta,
      photo: photo(photos.fans, c.plan.alts.photo),
      inset: photo(photos.bunny, c.plan.alts.inset),
      background: decorative(photos.flowers),
    },

    footer: c.footer,

    contact,
  };
}

export type Content = ReturnType<typeof getContent>;
