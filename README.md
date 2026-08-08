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

## Still to fill in

These are the placeholders left in the site. Each is a one-line edit in
`src/content/site.ts`.

### Calendly booking link

`BOOK YOUR ACTIVITY` (hero) and `RESERVE NOW` (nav) are already wired to open a
Calendly popup. They just need the link:

```ts
export const booking = {
  calendlyUrl: "https://calendly.com/your-name/your-event", // ← paste here
  fallbackHref: "#contact",
};
```

That is the only change required — no component edits, no packages to install,
no API key. Save the file and the buttons switch from scrolling to the contact
section over to opening the booking modal.

While `calendlyUrl` is `""` the buttons scroll to the contact section and no
Calendly script or cookie is loaded at all.

The widget is fetched on the first click rather than at page load, so visitors
who never book never download it. Note that once someone does open the popup,
Calendly sets third-party cookies — worth a cookie notice if that matters for
your audience.

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

### Photos

Drop a file into `public/images/` and point the matching `src` at it.

| Slot | Current file | Notes |
| --- | --- | --- |
| Hero photo | `hero-pots.jpg` | Original |
| Hero / About backdrop, band | `flowers.jpg` | Cropped from the mockup screenshot — a higher-resolution original would sharpen the band |
| Workshop tile 1 | `workshop-fan.jpg` | Original |
| Workshop tile 2 | `workshop-glasses.jpg` | **277×378, recovered from the mockup screenshot — replace with the original when available** |
| Workshop tile 3 | `workshop-keychain-child.jpg` | Original |
| Workshop tile 4 | `workshop-keychain-owl.jpg` | Original |

`workshop-keychain-bunny.jpg` is in `public/images/` but not currently shown —
the design has four tiles and the glasses photo took that slot.

## Layout notes

A couple of details that aren't obvious from reading the components:

- The hero photo deliberately overhangs the About section's top-right corner.
  That relies on the hero sitting at `z-20` with a negative bottom margin on the
  photo, and no `overflow-hidden` on the section.
- The torn paper edges in About and Contact are generated in
  [`TornEdge.tsx`](src/components/TornEdge.tsx) from layered sine waves, frayed
  by an SVG turbulence filter. No image assets involved.
- `WORKSHOPS` in the nav points at the four-photo section and `EVENTS` at the
  text block below it. The mockup has both nav items but only one workshops
  area, so this split was a judgement call.
