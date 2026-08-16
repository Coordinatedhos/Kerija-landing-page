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

| Section                                     | Component                       | Anchor          |
| ------------------------------------------- | ------------------------------- | --------------- |
| Ticker, masthead, nav                       | `Marquee`, `Masthead`, `NavBar` | —               |
| Where creativity blooms?                    | `Hero`                          | `#home`         |
| About Bloom Studio                          | `About`                         | `#about`        |
| Personalised to fit your event              | `Workshops`                     | `#workshops`    |
| How it works                                | `HowItWorks`                    | `#how-it-works` |
| Events we do                                | `EventsWeDo`                    | `#events`       |
| Every event is different / What we consider | `Personalised`                  | —               |
| Plan your experience now                    | `PlanExperience`                | —               |
| Footer, with contact details                | `Footer`                        | `#contact`      |

## Still to fill in

### Photos

Every slot is filled. If a file is ever removed or renamed the slot falls back
to a blush placeholder panel rather than a broken image —
[`Photo.tsx`](src/components/Photo.tsx) checks at build time whether each file
is actually there.

| File                 | Photo                                            | Used by                     |
| -------------------- | ------------------------------------------------ | --------------------------- |
| `events-picnic.jpg`  | Guests painting on picnic blankets in the park   | Circle in "Events we do"    |
| `brushes-circle.jpg` | Circle of hands holding painted hairbrushes      | "Every event is different"  |
| `kids-children.jpg`  | The three children decorating keyrings           | Collage, upper tile         |
| `kids-supplies.jpg`  | Paint pens and the box of beads and ribbons      | Collage, lower tile         |
| `fans-pencils.jpg`   | Painted fans with pencil tins and paint palettes | "Plan your experience" band |

The two `kids-*` files are cut from one original photo, the way the mockup cuts
it: the children above, the table of supplies below. Both are cut over the same
horizontal span (760px of a 1280px original, starting 150px in), so shown at one
width they sit at one scale and the scene runs on unbroken across the join.
Keep that in step if you ever recrop either one.

Photos in place from earlier:

| Slot                         | Current file                  | Notes                                                                                                                             |
| ---------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Hero photo                   | `hero-pots.jpg`               | Original                                                                                                                          |
| Hero / About backdrop, bands | `flowers.jpg`                 | Cropped from the mockup screenshot — a higher-resolution original would sharpen the thin bands and the invitation band's backdrop |
| Workshop tile 1              | `workshop-fan.jpg`            | Original                                                                                                                          |
| Workshop tile 2              | `workshop-glasses.jpg`        | **277×378, recovered from the mockup screenshot — replace with the original when available**                                      |
| Workshop tile 3              | `workshop-keychain-child.jpg` | Original                                                                                                                          |
| Workshop tile 4              | `workshop-keychain-owl.jpg`   | Original                                                                                                                          |
| "Plan your experience" inset | `workshop-keychain-bunny.jpg` | Original                                                                                                                          |

### Calendly booking link

One link switches on every `BOOK YOUR ACTIVITY` and `RESERVE NOW` button on the
page, which then open the Calendly popup.

```ts
export const booking = {
  calendlyUrl: "https://calendly.com/your-name/your-event", // ← paste here
  fallbackHref: "#contact",
};
```

That is the only change required — no component edits, no packages to install,
no API key.

While `calendlyUrl` is `""` the buttons scroll to the footer instead, and no
Calendly script or cookie is loaded at all.

Calendly is fetched on the first click, never at page load, so visitors who
never book never download it. Note that once it does load, Calendly sets
third-party cookies — worth a cookie notice if that matters for your audience.

### Social profile links

Both are `"#"` in the `nav.socials` array:

```ts
socials: [
  { label: "Instagram", href: "#" }, // ← real profile URL
  { label: "Facebook", href: "#" },  // ← real profile URL
],
```

## Layout notes

A few details that aren't obvious from reading the components:

- **Scroll reveals.** [`Reveal.tsx`](src/components/Reveal.tsx) fades and lifts
  a block into place the first time it scrolls into view, with a `delay` prop
  for staggering neighbours (the four workshop tiles, the five steps, the hero
  photo behind its heading). The
  hidden starting state is scoped to a `js` class that `layout.tsx` sets before
  first paint, so with JavaScript off the content is simply visible rather than
  stranded at opacity 0. `prefers-reduced-motion` is handled the same way in
  `globals.css`, which is why `Reveal` has no check for it.
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
- **The torn paper edge** on the About card is generated in
  [`TornEdge.tsx`](src/components/TornEdge.tsx) from layered sine waves, frayed
  by an SVG turbulence filter. No image assets involved.
- **The thin floral strips** between sections are `FloralBand`, standing in for
  the mockup's habit of laying cards over the background photo.
- **Fonts**: Playfair Display for headings and body serif, Jost for the small
  uppercase sans, and Great Vibes for script accents — the step numerals in
  "How it works", "experience now" in the invitation band, and "Menu" in the
  footer.
- **The invitation band and footer** take their structure from
  glamhausdesignco.com: photo beside a light card with a centred headline and a
  dark CTA, and a three-panel footer split by hairlines. The palette, type and
  hard-edged corners stay Bloom Studio's.
