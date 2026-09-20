// Deckled paper edge used on the About card, built to match the torn sheet in
// the mockup.
//
// Three things make it read as torn rather than merely wavy:
//
//  - the silhouette is a long, slow undulation — a little over one wave across
//    the card — rather than a ripple, which is how a sheet actually tears;
//  - the edge is combed into tufts whose length is modulated by a slow
//    envelope, so the fibres clump the way rag paper does instead of standing
//    in even stubble;
//  - three combs are stacked, each finer and fainter than the last, so the
//    sheet thins out over a band instead of ending at a line — which is what
//    the photographed tear actually does — and a turbulence displacement frays
//    each one into fibres.
//
// The tips run whiter than the sheet, as torn fibres catch the light.
//
// The combs run to about 1,500 points between them, which is most of this
// file's weight in the served HTML. They compress well, and the section is
// the page's centrepiece, so the trade is worth it — but coarsen the steps
// before adding a fourth comb.
//
// Every value comes from a fixed formula rather than Math.random, so the
// server and the client render identical markup.
const WIDTH = 1200;
const HEIGHT = 175;

/** Deterministic pseudo-random in [0,1) — the same on both sides of the wire. */
function rand(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Where the tear runs: barely over one wave across the card, plus two smaller.
 * The swing is ~9% of the card's width, measured off the mockup's own sheet.
 */
function silhouette(t: number) {
  return (
    Math.sin(t * Math.PI * 2 * 1.3 + 0.7) * 34 +
    Math.sin(t * Math.PI * 2 * 2.7 + 2.1) * 14 +
    Math.sin(t * Math.PI * 2 * 5.9 + 4.3) * 7
  );
}

/** Fibres are long in places and worn short in others, never even. */
function envelope(t: number) {
  return (
    0.3 +
    0.32 * (0.5 + 0.5 * Math.sin(t * Math.PI * 2 * 2.3 + 0.4)) +
    0.38 * (0.5 + 0.5 * Math.sin(t * Math.PI * 2 * 7.7 + 2.9))
  );
}

/**
 * One comb of tufts along the tear: a notch, then a fibre, all the way across.
 * Roughly one tuft in fourteen is a deeper bite into the sheet.
 */
function comb(step: number, peak: number, salt: number) {
  const points: string[] = [];
  for (let x = WIDTH + step; x >= -step; x -= step) {
    const t = Math.min(1, Math.max(0, x / WIDTH));
    const base = 62 + silhouette(t);
    const i = Math.round(x / step);
    const bite = rand(i, salt + 3) < 0.07 ? 8 : 0;
    const fibre = Math.pow(rand(i, salt + 2), 1.7) * peak * envelope(t);
    points.push(`${x.toFixed(1)},${(base - rand(i, salt + 1) * 5 - bite).toFixed(1)}`);
    points.push(`${(x - step / 2).toFixed(1)},${(base + 1 + fibre).toFixed(1)}`);
  }
  return `M0,-4 H${WIDTH} L${points.join(" L")} Z`;
}

/** Solid sheet, then clumps, then the wisps that catch the light. */
const SHEET = comb(8, 30, 5);
const CLUMPS = comb(5, 42, 21);
const WISPS = comb(3.4, 56, 33);

/** Frays a comb into fibres. Coarse noise smears clumps, fine noise splits hairs. */
function Fray({
  id,
  frequency,
  scale,
  seed,
}: {
  id: string;
  frequency: string;
  scale: number;
  seed: number;
}) {
  return (
    <filter
      id={id}
      x="-4%"
      y="-60%"
      width="108%"
      height="240%"
      colorInterpolationFilters="sRGB"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency={frequency}
        numOctaves="5"
        seed={seed}
        result="noise"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale={scale}
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  );
}

export default function TornEdge({
  className = "",
  flip = false,
}: {
  className?: string;
  /** Point the jagged edge upward, for a torn top rather than a torn bottom. */
  flip?: boolean;
}) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${flip ? "rotate-180" : ""} ${className}`}
    >
      {/* Identical in every instance, so shared ids are harmless. */}
      <defs>
        <Fray id="torn-sheet" frequency="0.5 0.3" scale={13} seed={11} />
        <Fray id="torn-clumps" frequency="1.1 0.45" scale={8} seed={3} />
        <Fray id="torn-wisps" frequency="1.7 0.6" scale={9} seed={19} />
        {/* Rotating the whole element for a torn top carries this with it, so
            the white always sits at the tear. */}
        <linearGradient id="torn-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.45" stopColor="var(--brand-paper)" />
          <stop offset="0.7" stopColor="#fefcf7" />
          <stop offset="0.88" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path d={SHEET} fill="url(#torn-paper)" filter="url(#torn-sheet)" />
      <path
        d={CLUMPS}
        fill="url(#torn-paper)"
        filter="url(#torn-clumps)"
        opacity="0.97"
      />
      <path
        d={WISPS}
        fill="url(#torn-paper)"
        filter="url(#torn-wisps)"
        opacity="0.45"
      />
    </svg>
  );
}
