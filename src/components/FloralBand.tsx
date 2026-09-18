import Image from "next/image";
import type { Photo } from "@/content/site";

/**
 * The sliver of floral backdrop the mockup leaves between stacked cards, as if
 * they were laid on top of the photo.
 */
export default function FloralBand({ photo }: { photo: Photo }) {
  return (
    <div className="relative h-7 w-full sm:h-9" aria-hidden="true">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
