import Ticker from "@/components/Ticker";
import type { Content } from "@/content";

export default function Marquee({ copy }: { copy: Content["marquee"] }) {
  return (
    <Ticker
      items={copy.phrases}
      itemClassName="text-[11px] tracking-[0.12em] text-foreground/85 uppercase"
      className="bg-blush py-2.5"
    />
  );
}
