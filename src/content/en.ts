import type { Copy } from "./lv";

/**
 * English, served at `/en`. Typed as `Copy`, which is the shape of `lv.ts`, so
 * a key that goes missing here — or one that is added to the Latvian file and
 * not to this one — fails the build rather than the page.
 */
export const en: Copy = {
  /** Shown in the language switcher, in its own language. */
  languageName: "English",

  meta: {
    title: "Bloom Studio | Handmade Creative Workshops",
    description:
      "Creative workshops for every occasion — birthdays, children's parties, bridal showers, city festivals, corporate events, and private celebrations.",
  },

  brand: {
    tagline: "Handmade Creative Workshops",
  },

  marquee: {
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
  },

  masthead: {
    leftQuestion: "Need a creative touch for your event?",
    // The double space is the mockup's, and the line is set `whitespace-pre`.
    leftLink: "VIEW  WORKSHOP SERVICES",
    rightQuestion: "Planning a team-building or celebration?",
    rightNote: "BRING YOUR PEOPLE TOGETHER THROUGH CREATIVITY.",
  },

  /** Read out by screen readers, never shown on the page. */
  a11y: {
    menu: "Menu",
    language: "Language",
  },

  nav: {
    home: "HOME",
    about: "ABOUT",
    workshops: "WORKSHOPS",
    contacts: "CONTACTS",
    events: "EVENTS",
    reserve: "RESERVE NOW",
  },

  hero: {
    heading: "WHERE CREATIVITY BLOOMS?",
    body: "Creative workshops for every occasion. From birthdays and children's parties to bridal showers, city festivals, corporate events, and private celebrations, we bring hands-on creativity to your event. Every workshop is thoughtfully tailored to your guests, offering a fun, memorable experience where everyone can create something with their own hands.",
    cta: "BOOK YOUR ACTIVITY",
    alts: {
      photo:
        "Hand-painted terracotta pots with florals, cherries, and a woodland door, surrounded by paints and brushes",
    },
  },

  about: {
    heading: "About Bloom Studio",
    body: [
      "At Bloom Studio, we believe creativity brings people together. We create hands-on workshops for birthdays, children's parties, bridal showers, corporate events, festivals, and private celebrations.",
      "Each workshop is thoughtfully tailored to your event, creating a unique and memorable experience for every guest. No artistic experience is needed—just curiosity and the joy of creating something with your own hands.",
      "We provide the materials, guidance, and inspiration so everyone can enjoy the creative process and take home a handmade piece filled with memories.",
    ],
  },

  workshops: {
    heading: "PERSONALISED TO FIT YOUR EVENT",
    body: [
      "Creative workshops for every age and occasion, personalized to fit your event and guests.",
      "Create your own handmade pieces — from bracelets, earrings, candles, and keychains to custom city photo magnets and more.",
      "No artistic experience needed — just bring inspiration and the wish to create.",
      "Lose yourself in the process, enjoy the time together and make something truly unique!",
    ],
    alts: {
      fan: "A guest painting delicate flowers onto a folding fan",
      glasses:
        "A glass tumbler hand-painted with blue hydrangeas, with a bamboo lid and a metal straw",
      keychainChild:
        "A child holding a wooden keychain painted with a tulip and sun",
      keychainOwl: "A jewelled owl keyring resting on an open hand",
    },
  },

  howItWorks: {
    heading: "HOW IT WORKS",
    steps: [
      {
        title: "Tell Us About Your Event",
        body: "Every event is unique, so we create each workshop especially for you.",
      },
      {
        title: "We Personalise Your Workshop",
        body: "Based on your event, age group, number of guests and preferences, we'll suggest the most suitable creative activity.",
      },
      {
        title: "Receive Your Personalised Offer",
        body: "Once we know the details of your event, we'll prepare an individual offer for you, including the workshop, materials, duration and price.",
      },
      {
        title: "Confirm Your Booking",
        body: "Love the idea? Simply confirm your offer and we'll take care of the preparation.",
      },
      {
        title: "Create & Enjoy",
        body: "We bring everything needed for the workshop. Your guests can relax, create, have fun and take home something they made themselves.",
      },
    ],
  },

  eventsWeDo: {
    heading: "EVENTS WE DO",
    body: [
      "Whatever you're celebrating, we'll create a hands-on workshop that fits your event, your guests and your vision.",
      "From little birthday celebrations to team events and unforgettable bridal showers, Bloom Studio brings people together through creativity.",
    ],
    /** Far too long for one line, so the strip scrolls through the whole list. */
    types: [
      "Birthday Parties",
      "Children's Parties",
      "Kids' Celebrations",
      "Bridal Showers",
      "Bachelorette Parties",
      "Corporate Events",
      "Team Building",
      "Festivals",
      "School Events",
      "Seasonal Events",
      "Baby Showers",
      "Creative Workshops",
      "Special Events & Activations",
      "Custom Events",
    ],
    alts: {
      photo:
        "Guests painting pots and sharing food on picnic blankets under trees in a park",
    },
  },

  personalised: {
    heading: "EVERY EVENT IS UNIQUE.",
    subheading: "So why should the workshop be the same?",
    body: "We personalise each experience based on your event, number of guests, age group, location and preferences.",
    alts: {
      brushes:
        "A circle of hands holding up bamboo hairbrushes hand-painted with flowers, names and lace bows",
      children:
        "Children decorating wooden keyrings with paint pens at an outdoor table",
      supplies:
        "Cases of acrylic paint pens and a box of beads, ribbons and findings on the workshop table",
    },
    consider: {
      heading: "WHAT WE CONSIDER",
      /** What to tell us when you write — the mockup's own list. */
      items: [
        "Name",
        "Email / phone",
        "Event type",
        "Date",
        "Location",
        "Number of guests",
      ],
    },
  },

  plan: {
    // Split so the second half can be set in script, as the reference does.
    lead: "Plan your",
    accent: "experience now",
    body: "Pick a date that suits you.",
    cta: "BOOK YOUR ACTIVITY",
    alts: {
      photo:
        "Hand-painted folding fans on a table with tins of colouring pencils, watercolour palettes and brushes",
      inset: "A wooden keyring hand-painted with a bunny",
    },
  },

  footer: {
    menuHeading: "Menu",
    note: "Bring your people together through creativity.",
    cta: "BOOK YOUR ACTIVITY",
  },
};
