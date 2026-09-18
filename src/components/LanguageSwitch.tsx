import Link from "next/link";
import type { Content } from "@/content";

/**
 * LV / EN, shown at the end of the nav bar.
 *
 * Each language is named in its own language, which is what someone who cannot
 * read the current one needs. The pages are separate routes, so these are plain
 * links — the same page in the other language, which is also what
 * `hreflang` promises in the head.
 */
export default function LanguageSwitch({
  label,
  languages,
  className = "",
}: {
  /** "Language", in the language being shown — for screen readers. */
  label: string;
  languages: Content["languages"];
  className?: string;
}) {
  return (
    <ul aria-label={label} className={`flex items-center gap-1 ${className}`}>
      {languages.map((language) => (
        <li key={language.code}>
          <Link
            href={language.href}
            hrefLang={language.code}
            lang={language.code}
            title={language.name}
            aria-current={language.current ? "true" : undefined}
            className={`block px-1.5 py-1 text-[12px] tracking-[0.1em] transition-opacity ${
              language.current
                ? "underline underline-offset-4"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {language.short}
          </Link>
        </li>
      ))}
    </ul>
  );
}
