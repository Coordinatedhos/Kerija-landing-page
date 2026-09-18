import Ticker from "@/components/Ticker";
import type { Content } from "@/content";

export default function Marquee({ copy }: { copy: Content["marquee"] }) {
  return (
    <Ticker
      items={copy.phrases}
      itemClassName="text-[10px] tracking-[0.12em] text-foreground/85 uppercase sm:text-[11px]"
      className="bg-blush py-2.5"
    />
  );
}
