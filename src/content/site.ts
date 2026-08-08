/**
 * All site copy and image paths, transcribed from the design mockups.
 *
 * Photos live in /public/images/ and are referenced only from here, so swapping
 * one is a single-line change with no component edits.
 */

export const brand = {
  name: "BLOOM STUDIO",
  tagline: "Handmade Creative Workshops",
};

export const booking = {
  /**
   * TODO: paste the Calendly scheduling link here, e.g.
   * "https://calendly.com/bloomstudio/workshop".
   * While this is empty the booking buttons simply scroll to the contact
   * section, and no Calendly script or cookie is loaded.
   */
  calendlyUrl: "",
  /** Where booking buttons point when Calendly isn't configured yet. */
  fallbackHref: "#contact",
};

export const marquee = {
  // Alternates "CREATE" and "DESIGN" exactly as the mockup does.
  phrases: [
    "NOW BOOKING 2026",
    "LETS CREATE TOGETHER",
    "NOW BOOKING 2026",
    "LETS CREATE TOGETHER",
    "NOW BOOKING 2026",
    "LETS CREATE TOGETHER",
    "NOW BOOKING 2026",
    "LETS DESIGN TOGETHER",
    "NOW BOOKING 2026",
    "LETS DESIGN TOGETHER",
  ],
};

export const masthead = {
  left: {
    question: "Need a creative touch for your event?",
    link: { label: "VIEW  WORKSHOP SERVICES", href: "#workshops" },
  },
  right: {
    question: "Planning a team-building or celebration?",
    note: "BRING YOUR PEOPLE TOGETHER THROUGH CREATIVITY.",
  },
};

export type NavLink = {
  label: string;
  href: string;
  /** Opens the Calendly popup rather than jumping to a section. */
  booking?: boolean;
};

export const nav: {
  socials: { label: string; href: string }[];
  links: NavLink[];
} = {
  socials: [
    { label: "Instagram", href: "#" }, // TODO: real profile URL
    { label: "Facebook", href: "#" }, // TODO: real profile URL
  ],
  links: [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "WORKSHOPS", href: "#workshops" },
    { label: "CONTACTS", href: "#contact" },
    { label: "EVENTS", href: "#events" },
    { label: "RESERVE NOW", href: "#contact", booking: true },
  ],
};

export const hero = {
  heading: "WHERE CREATIVITY BLOOMS?",
  body: "Creative workshops for every occasion. From birthdays and children's parties to bridal showers, city festivals, corporate events, and private celebrations, we bring hands-on creativity to your event. Every workshop is thoughtfully tailored to your guests, offering a fun, memorable experience where everyone can create something with their own hands.",
  cta: { label: "BOOK YOUR ACTIVITY", href: "#contact" },
  background: {
    src: "/images/flowers.jpg",
    alt: "",
  },
  photo: {
    src: "/images/hero-pots.jpg",
    alt: "Hand-painted terracotta pots with florals, cherries, and a woodland door, surrounded by paints and brushes",
  },
};

export const about = {
  heading: "About Bloom Studio",
  body: [
    "At Bloom Studio, we believe creativity brings people together. We create hands-on workshops for birthdays, children's parties, bridal showers, corporate events, festivals, and private celebrations.",
    "Each workshop is thoughtfully tailored to your event, creating a unique and memorable experience for every guest. No artistic experience is needed—just curiosity and the joy of creating something with your own hands.",
    "We provide the materials, guidance, and inspiration so everyone can enjoy the creative process and take home a handmade piece filled with memories.",
  ],
  background: {
    src: "/images/flowers.jpg",
    alt: "",
  },
};

export const workshops = {
  heading: "PERSONALISED TO FIT YOUR EVENT",
  items: [
    {
      src: "/images/workshop-fan.jpg",
      alt: "A guest painting delicate flowers onto a folding fan",
    },
    {
      // Recovered from the mockup screenshot, so this one is only 277x378.
      // Swap in the original photo when it's available.
      src: "/images/workshop-glasses.jpg",
      alt: "Drinking glasses hand-painted with flowers, strawberries, and lemons, held against grass",
    },
    {
      src: "/images/workshop-keychain-child.jpg",
      alt: "A child holding a wooden keychain painted with a tulip and sun",
    },
    {
      src: "/images/workshop-keychain-owl.jpg",
      alt: "A jewelled owl keyring resting on an open hand",
    },
  ],
};

export const events = {
  body: [
    "Creative workshops for every age and occasion, personalized to fit your event and guests.",
    "Create your own handmade pieces — from bracelets, earrings, candles, and keychains to custom city photo magnets and more.",
    "No artistic experience needed — just bring your creativity and enjoy making something unique.",
  ],
  band: {
    src: "/images/flowers.jpg",
    alt: "",
  },
};

export const contact = {
  heading: "BOOK YOUR EVENT",
  phone: "27521151",
  email: "kerijazute@gmail.com",
  // The mockup shows a globe icon with no address filled in yet.
  website: "",
};
