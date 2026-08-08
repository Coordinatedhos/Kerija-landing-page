// Deckled paper edge used under the About and Contact cards.
// The points are generated from a fixed formula rather than Math.random so the
// server and client render identical markup.
const WIDTH = 1200;
const STEPS = 60;

function edgePoints() {
  return Array.from({ length: STEPS + 1 }, (_, i) => {
    const x = WIDTH - (i * WIDTH) / STEPS;
    const y = 20 + Math.sin(i * 1.7) * 9 + Math.sin(i * 0.53) * 6;
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
      viewBox={`0 0 ${WIDTH} 40`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d={`M0,0 H${WIDTH} L${edgePoints()} Z`} fill="currentColor" />
    </svg>
  );
}
