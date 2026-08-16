import type { ReactNode } from "react";

/**
 * A line of text that is longer than the space it has, scrolled sideways.
 *
 * The track holds two identical copies of the list, so animating it to -50%
 * lands exactly where it started and the loop has no seam. Only the first copy
 * is read out; the second is decorative.
 */
function Track({
  items,
  separator,
  separatorClassName,
  itemClassName,
  ariaHidden,
}: {
  items: string[];
  separator: ReactNode;
  separatorClassName: string;
  itemClassName: string;
  ariaHidden?: boolean;
}) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className={`shrink-0 ${itemClassName}`}>
          {item}
          <span aria-hidden="true" className={separatorClassName}>
            {separator}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Ticker({
  items,
  separator = "•",
  separatorClassName = "mx-3 text-rust",
  itemClassName = "",
  className = "",
  /** One full loop of the list, in seconds. Longer lists want longer. */
  seconds = 45,
}: {
  items: string[];
  separator?: ReactNode;
  separatorClassName?: string;
  itemClassName?: string;
  className?: string;
  seconds?: number;
}) {
  return (
    <div className={`marquee-viewport overflow-hidden ${className}`}>
      <div
        className="marquee-track flex w-max"
        style={{ "--marquee-duration": `${seconds}s` } as React.CSSProperties}
      >
        <Track
          items={items}
          separator={separator}
          separatorClassName={separatorClassName}
          itemClassName={itemClassName}
        />
        <Track
          items={items}
          separator={separator}
          separatorClassName={separatorClassName}
          itemClassName={itemClassName}
          ariaHidden
        />
      </div>
    </div>
  );
}
