/**
 * All site copy and image paths, transcribed from the design mockups.
 *
 * IMAGES: every `src` below currently points at a generated SVG placeholder in
 * /public/images/. To use a real photo, drop the file into /public/images/ and
 * change the one `src` string here — no component edits needed. The intended
 * filename is noted beside each.
 */

export const brand = {
  name: "BLOOM STUDIO",
  tagline: "Handmade Creative Workshops",
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

export const nav = {
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
    { label: "RESERVE NOW", href: "#contact" },
  ],
};

export const hero = {
  heading: "WHERE CREATIVITY BLOOMS?",
  body: "Creative workshops for every occasion. From birthdays and children's parties to bridal showers, city festivals, corporate events, and private celebrations, we bring hands-on creativity to your event. Every workshop is thoughtfully tailored to your guests, offering a fun, memorable experience where everyone can create something with their own hands.",
  cta: { label: "BOOK YOUR ACTIVITY", href: "#contact" },
  background: {
    src: "/images/placeholder-hero-bg.svg", // → hero-bg.jpg (blurred dried flowers on wood)
    alt: "",
  },
  photo: {
    src: "/images/placeholder-pots.svg", // → pots.jpg (hand-painted terracotta pots)
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
    src: "/images/placeholder-about-bg.svg", // → about-bg.jpg (wooden table backdrop)
    alt: "",
  },
};

export const workshops = {
  heading: "PERSONALISED TO FIT YOUR EVENT",
  items: [
    {
      src: "/images/placeholder-fan.svg", // → fan-painting.jpg
      alt: "A guest painting delicate flowers onto a folding fan",
    },
    {
      src: "/images/placeholder-glasses.svg", // → painted-glasses.jpg
      alt: "Drinking glasses hand-painted with flowers and fruit, standing on grass",
    },
    {
      src: "/images/placeholder-keychain-child.svg", // → keychain-child.jpg
      alt: "A child holding a wooden keychain painted with a tulip",
    },
    {
      src: "/images/placeholder-keychain-owl.svg", // → keychain-owl.jpg
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
    src: "/images/placeholder-flowers-band.svg", // → flowers-band.jpg (dried pink flowers on wood)
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
