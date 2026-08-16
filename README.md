# Bloom Studio

One-page site for Bloom Studio — handmade creative workshops.

Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript. Deployed on Vercel
from `main`; every push to `main` redeploys.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where to change things

**Every piece of text and every image path lives in
[`src/content/site.ts`](src/content/site.ts).** Editing that one file covers
almost anything you'll want to change — you should not need to touch the
components for copy, photos, links, or contact details.

## Page order

| Section | Component | Anchor |
| --- | --- | --- |
| Ticker, masthead, nav | `Marquee`, `Masthead`, `NavBar` | — |
| Where creativity blooms? | `Hero` | `#home` |
| About Bloom Studio | `About` | `#about` |
| Personalised to fit your event | `Workshops` | `#workshops` |
| How it works | `HowItWorks` | `#how-it-works` |
| Events we do | `EventsWeDo` | `#events` |
| Every event is different / What we consider | `Personalised` | — |
| What we consider (enquiry list) | `Enquiry` | — |
| Booking calendar | `Schedule` | `#book` |
| Book your event | `Contact` | `#contact` |

## Still to fill in

### Photos

Five slots have no photo yet. Each renders as a plain blush panel with a small
flower mark rather than a broken image, so the layout is already final — drop a
file into `public/images/` and point the matching `src` at it.

| Slot | `site.ts` key | Subject in the mockup |
| --- | --- | --- |
| Events we do, circle | `eventsWeDo.photo` | Guests painting around a picnic blanket in a park |
| Every event is different | `personalised.photos.brushes` | Hands holding up painted wooden hairbrushes |
| Collage, upper | `personalised.photos.children` | Two children decorating wooden pieces outdoors |
| Collage, lower | `personalised.photos.supplies` | Boxes of markers, ribbons and craft supplies |
| Enquiry section | `enquiry.photo` | Painted fans with colouring pencils and paints |

Photos already in place:

| Slot | Current file | Notes |
| --- | --- | --- |
| Hero photo | `hero-pots.jpg` | Original |
| Hero / About backdrop, bands | `flowers.jpg` | Cropped from the mockup screenshot — a higher-resolution original would sharpen the thin bands and the calendar backdrop |
| Workshop tile 1 | `workshop-fan.jpg` | Original |
| Workshop tile 2 | `workshop-glasses.jpg` | **277×378, recovered from the mockup screenshot — replace with the original when available** |
| Workshop tile 3 | `workshop-keychain-child.jpg` | Original |
| Workshop tile 4 | `workshop-keychain-owl.jpg` | Original |

`workshop-keychain-bunny.jpg` is in `public/images/` but not currently shown —
the design has four tiles and the glasses photo took that slot.

### Calendly booking link

One link switches on three things at once: the `BOOK YOUR ACTIVITY` and
`RESERVE NOW` popups, and the calendar section, which swaps its booking prompt
for the real inline Calendly widget.

```ts
export const booking = {
  calendlyUrl: "https://calendly.com/your-name/your-event", // ← paste here
  fallbackHref: "#contact",
};
```

That is the only change required — no component edits, no packages to install,
no API key.

While `calendlyUrl` is `""` the buttons scroll to the contact section, the
calendar shows a prompt with a booking button, and no Calendly script or cookie
is loaded at all.

Calendly is fetched on the first click, or when the calendar section nears the
viewport — never at page load — so visitors who never book never download it.
Note that once it does load, Calendly sets third-party cookies — worth a cookie
notice if that matters for your audience.

### Social profile links

Both are `"#"` in the `nav.socials` array:

```ts
socials: [
  { label: "Instagram", href: "#" }, // ← real profile URL
  { label: "Facebook", href: "#" },  // ← real profile URL
],
```

### Website URL

The contact section shows a globe icon with nothing beside it, matching the
mockup. Set `contact.website` to fill it in.

### The repeated heading

The mockup uses **WHAT WE CONSIDER** twice — once for the four things that shape
a workshop, and again for the details to send when enquiring. Both are
transcribed as drawn. The second one is `enquiry.heading` if you'd rather it
read something like "WHAT WE NEED FROM YOU".

## Layout notes

A few details that aren't obvious from reading the components:

- **Scrolling text.** [`Ticker.tsx`](src/components/Ticker.tsx) is used wherever
  a line is longer than the space it has — the top bar, and the list of event
  types under "Events we do", which is far too long to fit at any width. It
  renders the list twice and animates to -50%, so the loop has no seam. Speed is
  the `seconds` prop. Under `prefers-reduced-motion` it stops and the strip
  becomes scrollable by hand, so nothing is unreachable.
- **The hero photo** deliberately overhangs the About section's top-right
  corner. That relies on the hero sitting at `z-20` with a negative bottom
  margin on the photo, and no `overflow-hidden` on the section.
- **The circle in "Events we do"** is sized off the dark card's height
  (`absolute` + `h-full` + `aspect-square`) rather than off the column width,
  which is what keeps the two flush top and bottom at every width.
- **The torn paper edges** in About and Contact are generated in
  [`TornEdge.tsx`](src/components/TornEdge.tsx) from layered sine waves, frayed
  by an SVG turbulence filter. No image assets involved.
- **The thin floral strips** between sections are `FloralBand`, standing in for
  the mockup's habit of laying cards over the background photo.
- **Fonts**: Playfair Display for headings and body serif, Jost for the small
  uppercase sans, and Great Vibes for the step numerals in "How it works" only.
