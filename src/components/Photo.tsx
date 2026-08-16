import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Photo as PhotoContent } from "@/content/site";

/**
 * Checked at build time — this is a server component on a statically rendered
 * page — so a slot whose photo has not been dropped into public/images/ yet
 * falls back to the placeholder rather than shipping a broken image.
 */
function isMissing(src: string) {
  if (!src) return true;
  if (!src.startsWith("/")) return false; // remote URL: nothing to check
  return !fs.existsSync(path.join(process.cwd(), "public", src));
}

/**
 * A photo slot. Fills its (positioned) parent.
 *
 * Empty slots render a blush panel with a small flower mark, so the layout is
 * already final and adding the photo is a one-line change in site.ts.
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
  if (isMissing(photo.src)) {
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
      style={photo.position ? { objectPosition: photo.position } : undefined}
      className={`object-cover ${className}`}
    />
  );
}
