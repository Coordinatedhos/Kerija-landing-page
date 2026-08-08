import { marquee } from "@/content/site";

function Phrases({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {marquee.phrases.map((phrase, index) => (
        <li
          key={`${phrase}-${index}`}
          className="flex shrink-0 items-center text-[10px] tracking-[0.12em] text-foreground/85 uppercase sm:text-[11px]"
        >
          <span className="px-3">{phrase}</span>
          <span aria-hidden="true" className="text-rust">
            •
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-blush py-2.5">
      {/* Two identical copies so the -50% translate loops without a seam. */}
      <div className="marquee-track flex w-max">
        <Phrases />
        <Phrases ariaHidden />
      </div>
    </div>
  );
}
