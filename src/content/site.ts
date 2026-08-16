/**
 * All site copy and image paths, transcribed from the design mockups.
 *
 * Photos live in /public/images/ and are referenced only from here, so swapping
 * one is a single-line change with no component edits. A photo with an empty
 * `src` renders as a blush placeholder panel rather than a broken image.
 */

export type Photo = {
  src: string;
  alt: string;
  /** object-position, where the mockup crops to something other than centre. */
  position?: string;
};

export const brand = {
  name: "BLOOM STUDIO",
  tagline: "Handmade Creative Workshops",
};

export const booking = {
  /**
   * TODO: paste the Calendly scheduling link here, e.g.
   * "https://calendly.com/bloomstudio/workshop".
   * While this is empty the booking buttons simply scroll to the contact
   * section, the calendar shows a booking prompt instead of the Calendly
   * embed, and no Calendly script or cookie is loaded.
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
  body: [
    "Creative workshops for every age and occasion, personalized to fit your event and guests.",
    "Create your own handmade pieces — from bracelets, earrings, candles, and keychains to custom city photo magnets and more.",
    "No artistic experience needed — just bring your creativity and enjoy making something unique.",
  ],
};

/** The thin floral strip that separates the stacked cards in the mockup. */
export const band = {
  src: "/images/flowers.jpg",
  alt: "",
};

export const howItWorks = {
  heading: "HOW IT WORKS",
  steps: [
    {
      title: "Tell Us About Your Event",
      body: "Every event is different, so we create each workshop especially for you.",
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
};

export const eventsWeDo = {
  heading: "EVENTS WE DO",
  body: [
    "Whatever you're celebrating, we'll create a hands-on workshop that fits your event, your guests and your vision.",
    "From little birthday celebrations to team events and unforgettable bridal showers, Bloom Studio brings people together through creativity.",
  ],
  photo: {
    src: "/images/events-picnic.jpg",
    alt: "Guests painting pots and sharing food on picnic blankets under trees in a park",
    // Portrait photo in a circle — bias up to keep the group, not the foreground.
    position: "center 32%",
  } satisfies Photo,
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
};

export const personalised = {
  heading: "EVERY EVENT IS DIFFERENT.",
  subheading: "So why should the workshop be the same?",
  body: "We personalise each experience based on your event, number of guests, age group, location and preferences.",
  // The mockup cuts one photo of the children's workshop into two tiles: the
  // children above, the table of supplies below. Both are cut from the same
  // original, so each tile has its own file rather than one file cropped by
  // object-fit, which can only ever trim a single axis.
  photos: {
    brushes: {
      src: "/images/brushes-circle.jpg",
      alt: "A circle of hands holding up bamboo hairbrushes hand-painted with flowers, names and lace bows",
    } satisfies Photo,
    children: {
      src: "/images/kids-children.jpg",
      alt: "Children decorating wooden keyrings with paint pens at an outdoor table",
    } satisfies Photo,
    supplies: {
      src: "/images/kids-supplies.jpg",
      alt: "Cases of acrylic paint pens and a box of beads, ribbons and findings on the workshop table",
    } satisfies Photo,
  },
  consider: {
    heading: "WHAT WE CONSIDER",
    items: [
      {
        // No emoji on this one, as the mockup has it.
        label: "Number of guests",
        body: "Small gathering or large group — we adapt the workshop to your group.",
      },
      {
        icon: "🎨",
        label: "Type of event",
        body: "Children, adults, corporate, private or something completely unique.",
      },
      {
        icon: "✨",
        label: "Your preferences",
        body: "Choose an activity, theme, colours or let us suggest something for you.",
      },
      {
        icon: "📍",
        label: "Location & setup",
        body: "We can discuss the space, setup and practical details for your event.",
      },
    ],
  },
};

/** The invitation band: photo, headline, booking button. */
export const plan = {
  // Split so the second half can be set in script, as the reference does.
  lead: "Plan your",
  accent: "experience now",
  body: "Tell us the date and the occasion — we'll bring the materials, the guidance and the inspiration.",
  cta: "BOOK YOUR ACTIVITY",
  photo: {
    src: "/images/fans-pencils.jpg",
    alt: "Hand-painted folding fans on a table with tins of colouring pencils, watercolour palettes and brushes",
    position: "center 38%",
  } satisfies Photo,
  inset: {
    src: "/images/workshop-keychain-bunny.jpg",
    alt: "A wooden keyring hand-painted with a bunny",
  } satisfies Photo,
  background: {
    src: "/images/flowers.jpg",
    alt: "",
  } satisfies Photo,
};

export const footer = {
  menuHeading: "Menu",
  note: "Bring your people together through creativity.",
  cta: "BOOK YOUR ACTIVITY",
};

export const schedule = {
  /** Screen-reader heading only; the mockup shows the calendar on its own. */
  heading: "Book a date",
  prompt: "Pick a date that suits you.",
  cta: "BOOK YOUR ACTIVITY",
  background: {
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
