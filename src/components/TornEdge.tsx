// Deckled paper edge used on the About and Contact cards.
//
// Two things make it read as torn rather than merely wavy: the outline layers
// several sine waves of unrelated frequencies so it never visibly repeats, and
// a turbulence displacement filter frays the result into paper fibres.
// The points come from a fixed formula rather than Math.random so the server
// and client render identical markup.
const WIDTH = 1200;
const HEIGHT = 70;
const STEPS = 150;

function edgePoints() {
  return Array.from({ length: STEPS + 1 }, (_, i) => {
    const x = WIDTH - (i * WIDTH) / STEPS;
    const y =
      36 +
      Math.sin(i * 0.31) * 14 +
      Math.sin(i * 0.87) * 9 +
      Math.sin(i * 2.3) * 5 +
      Math.sin(i * 5.1) * 2.4;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" L");
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
      <defs>
        {/* Identical in every instance, so a shared id is harmless. */}
        <filter
          id="torn-fibres"
          x="-2%"
          y="-60%"
          width="104%"
          height="220%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035 0.8"
            numOctaves="4"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="9"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <path
        d={`M0,-4 H${WIDTH} L${edgePoints()} Z`}
        fill="currentColor"
        filter="url(#torn-fibres)"
      />
    </svg>
  );
}
