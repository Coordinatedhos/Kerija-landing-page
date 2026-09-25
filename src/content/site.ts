/**
 * Everything about the site that is the same in every language: the brand
 * name, the booking link, contact details, and where each photo lives.
 *
 * The words themselves are in the per-language files next to this one —
 * `lv.ts` (Latvian, the default) and `en.ts` (English). Alt text counts as
 * words, so it lives there too; a photo's path and crop only ever appear here,
 * which keeps swapping a photo a one-line change.
 *
 * Photos live in /public/images/. A photo whose file is missing renders as a
 * blush placeholder panel rather than a broken image.
 */

/** A photo slot, once its alt text has been filled in from a language file. */
export type Photo = {
  src: string;
  alt: string;
  /** object-position, where the mockup crops to something other than centre. */
  position?: string;
};

/** A photo slot as it is stored here: the file, and how it is cropped. */
export type PhotoSlot = Omit<Photo, "alt">;

export const brand = {
  /** A name, so it is not translated. */
  name: "BLOOM STUDIO",
};

export const booking = {
  /**
   * TODO: paste the Calendly scheduling link here, e.g.
   * "https://calendly.com/bloomstudio/workshop".
   * While this is empty the booking buttons simply scroll to the footer and
   * no Calendly script or cookie is loaded.
   */
  calendlyUrl: "",
  /** Where booking buttons point when Calendly isn't configured yet. */
  fallbackHref: "#contact",
};

/** Shown in the footer, now that the standalone contact card is gone. */
export const contact = {
  phone: "27521151",
  email: "kerijazute@gmail.com",
};

export const socials = [
  { label: "Instagram", href: "#" }, // TODO: real profile URL
  { label: "Facebook", href: "#" }, // TODO: real profile URL
];

/** The section each nav link jumps to. The labels are in the language files. */
export type NavKey =
  | "home"
  | "about"
  | "workshops"
  | "contacts"
  | "events"
  | "reserve";

export const navLinks: {
  key: NavKey;
  href: string;
  /** Opens the Calendly popup rather than jumping to a section. */
  booking?: boolean;
}[] = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "workshops", href: "#workshops" },
  { key: "contacts", href: "#contact" },
  { key: "events", href: "#events" },
  { key: "reserve", href: "#contact", booking: true },
];

/** Where the masthead's one link points. */
export const workshopsHref = "#workshops";

export const photos = {
  /** The floral backdrop behind the hero and About, and the thin bands. */
  flowers: { src: "/images/flowers.jpg" },
  heroPots: { src: "/images/hero-pots.jpg" },
  workshops: {
    fan: { src: "/images/workshop-fan.jpg" },
    glasses: { src: "/images/wineglass-sunflowers.jpg" },
    keychainChild: { src: "/images/workshop-keychain-child.jpg" },
    keychainOwl: { src: "/images/workshop-keychain-owl.jpg" },
  },
  events: {
    src: "/images/events-picnic.jpg",
    // Portrait photo in a circle — bias up to keep the group, not the foreground.
    position: "center 32%",
  },
  brushes: { src: "/images/brushes-circle-indoors.jpg" },
  // The mockup cuts one photo of the children's workshop into two tiles: the
  // children above, the table of supplies below. Both are cut from the same
  // original over the same horizontal span, so shown at one width they sit at
  // one scale and the scene runs on unbroken across the join.
  children: {
    src: "/images/kids-children.jpg",
    // Anchored to the join, so cropping on small screens takes off the top.
    position: "center bottom",
  },
  supplies: {
    src: "/images/kids-supplies.jpg",
    position: "center top",
  },
  fans: {
    src: "/images/fans-pencils.jpg",
    position: "center 38%",
  },
  bunny: { src: "/images/workshop-keychain-bunny.jpg" },
} satisfies Record<string, PhotoSlot | Record<string, PhotoSlot>>;
