# Bloom Studio

One-page site for Bloom Studio — handmade creative workshops, in Latvian and
English.

Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript. Deployed on Vercel
from `main`; every push to `main` redeploys.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Languages

| URL   | Language                      |
| ----- | ----------------------------- |
| `/`   | redirects to `/lv`            |
| `/lv` | Latvian — the default         |
| `/en` | English                       |

Both are built as static pages. The **LV / EN** switch sits at the right-hand
end of the dark nav bar, at every screen width, and each page carries
`hreflang` tags pointing at the other one.

To change which language the bare domain opens in, change `defaultLocale` in
[`src/content/index.ts`](src/content/index.ts) — the redirect, the `x-default`
tag and the switch all follow from it.

To add a third language, copy `src/content/lv.ts` to e.g. `src/content/et.ts`,
translate it, type it `Copy`, and add it to `locales` and `copy` in
`src/content/index.ts`. Nothing else needs touching: the route, the switch and
the tags are all generated from that list. A key you forget to translate is a
build error, not a half-English page.

## Where to change things

**Text lives in one file per language** —
[`src/content/lv.ts`](src/content/lv.ts) and
[`src/content/en.ts`](src/content/en.ts). Both files have the same shape, so a
line in one has a twin in the other. That includes the alt text for every
photo, since alt text is words too.

**Photos, and everything else that is the same in both languages** — the
brand name, the booking link, the phone number and email, the social links,
where each nav link jumps to — live in
[`src/content/site.ts`](src/content/site.ts).

[`src/content/index.ts`](src/content/index.ts) puts the two together and hands
the page one object per language. You shouldn't need to touch it or the
components to change copy, photos, links, or contact details.

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
| `brushes-circle-indoors.jpg` | Circle of hands holding painted hairbrushes | "Every event is different" |
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
| Workshop tile 2              | `wineglass-sunflowers.jpg`    | Original. Replaced `workshop-glasses.jpg`, which was a 277×378 crop out of the mockup screenshot                                  |
| Workshop tile 3              | `workshop-keychain-child.jpg` | Original                                                                                                                          |
| Workshop tile 4              | `workshop-keychain-owl.jpg`   | Original                                                                                                                          |
| "Plan your experience" inset | `workshop-keychain-bunny.jpg` | Original                                                                                                                          |

### Photos sitting in the folder, unplaced

Three originals are in `public/images/` with no slot — say where any of them
should go and it is a one-line change in `site.ts`:

| File                    | Photo                                                    |
| ----------------------- | -------------------------------------------------------- |
| `glass-hydrangea.jpg`   | A glass tumbler painted with blue hydrangeas              |
| `brushes-circle.jpg`    | The earlier circle of painted hairbrushes, shot outdoors  |
| `workshop-glasses.jpg`  | The 277×378 crop recovered from the mockup screenshot     |

### Calendly booking link

One link switches on every booking button on the page — `REZERVĒ SAVU
AKTIVITĀTI` / `BOOK YOUR ACTIVITY` and `REZERVĒ TAGAD` / `RESERVE NOW`, in both
languages — which then open the Calendly popup.

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

Both are `"#"` in the `socials` array in `site.ts`:

```ts
export const socials = [
  { label: "Instagram", href: "#" }, // ← real profile URL
  { label: "Facebook", href: "#" },  // ← real profile URL
];
```

### The site's own address

The `canonical` and `hreflang` tags need an absolute URL. Vercel supplies the
deployment's own domain, which is right for previews and fine for production
until the real domain is in place — at that point set `NEXT_PUBLIC_SITE_URL`
(e.g. `https://bloomstudio.lv`) in the Vercel project's environment variables.
See [`src/lib/siteUrl.ts`](src/lib/siteUrl.ts).

## Layout notes

A few details that aren't obvious from reading the components:

- **Scroll reveals.** [`Reveal.tsx`](src/components/Reveal.tsx) fades and lifts
  a block into place the first time it scrolls into view, with a `delay` prop
  for staggering neighbours (the four workshop tiles, the five steps, the hero
  photo behind its heading). The hidden starting state is plain CSS, applied
  from the very first paint — an earlier version waited for JavaScript to add a
  marker class, which meant content painted visible and then snapped away, so
  nothing above the fold ever looked animated. A `<noscript>` override in
  `layout.tsx` shows everything when JavaScript is off, and
  `prefers-reduced-motion` is handled the same way in `globals.css`, which is
  why `Reveal` has no check for it.
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
  [`TornEdge.tsx`](src/components/TornEdge.tsx) — no image assets involved. It
  is built to match the torn sheet in the mockup: the tear runs as a long, slow
  undulation, about 9% of the card's width from crest to trough (measured off
  the mockup's own sheet), and the edge is combed into tufts whose length is
  modulated by a slow envelope so the fibres clump rather than stand in even
  stubble. Three combs are stacked, each finer and fainter than the last, so
  the sheet thins out over a band instead of ending at a line; a turbulence
  displacement frays each into fibres, and the tips run whiter than the sheet.
  Between them the combs are about 1,500 points, most of that file's weight in
  the served HTML — coarsen the steps before adding a fourth.
- **The thin floral strips** between sections are `FloralBand`, standing in for
  the mockup's habit of laying cards over the background photo.
- **Fonts**: Playfair Display for headings and body serif, Outfit for the small
  uppercase sans, and Great Vibes for script accents — the step numerals in
  "How it works", the accent in the invitation band, and "Menu" in the footer.
  All three are loaded with the `latin-ext` subset, which is what carries the
  Latvian diacritics. The sans was Jost while the site was English only; Jost
  is unusable in Latvian, because Chrome builds its `Ā` from a base letter in
  one subset file and a macron in another and then loses the macron —
  `SĀKUMS` came out as `SAKUMS`, `REZERVĒ TAGAD` as `REZERVE ‾TAGAD`. Outfit
  is the same geometric sans in feel and sets Latvian correctly. Worth
  re-checking with a Latvian string if the sans is ever swapped again.
- **The invitation band and footer** take their structure from
  glamhausdesignco.com: photo beside a light card with a centred headline and a
  dark CTA, and a three-panel footer split by hairlines. The palette, type and
  hard-edged corners stay Bloom Studio's.
