import Image from "next/image";
import type { Photo as PhotoContent } from "@/content/site";

/**
 * A photo slot. Fills its (positioned) parent.
 *
 * Slots whose `src` is still empty in site.ts render a blush panel with a small
 * flower mark instead of a broken image, so the layout is already final and
 * dropping the real photo in is a one-line change.
 */
export default function Photo({
  photo,
  sizes,
  priority,
  className = "",
}: {
  photo: PhotoContent;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  // Opaque, or a slot that overlaps another block shows straight through it.
  if (!photo.src) {
    return (
      <div
        aria-hidden="true"
        className={`flex h-full w-full items-center justify-center bg-pink ${className}`}
      >
        <svg viewBox="0 0 24 24" className="h-10 w-10 text-rust/35">
          <g fill="currentColor">
            <circle cx="12" cy="6" r="3.1" />
            <circle cx="12" cy="18" r="3.1" />
            <circle cx="6" cy="12" r="3.1" />
            <circle cx="18" cy="12" r="3.1" />
          </g>
          <circle cx="12" cy="12" r="2.4" fill="var(--brand-pink)" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}
