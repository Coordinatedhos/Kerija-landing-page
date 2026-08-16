import Ticker from "@/components/Ticker";
import { marquee } from "@/content/site";

export default function Marquee() {
  return (
    <Ticker
      items={marquee.phrases}
      itemClassName="text-[10px] tracking-[0.12em] text-foreground/85 uppercase sm:text-[11px]"
      className="bg-blush py-2.5"
    />
  );
}
