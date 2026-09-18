import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Playfair_Display, Outfit, Great_Vibes } from "next/font/google";
import "../globals.css";
import { getContent, isLocale, locales, defaultLocale } from "@/content";
import { siteUrl } from "@/lib/siteUrl";

// latin-ext carries the Latvian diacritics (ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, ž).
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
});

// Outfit stands in for Jost, which the mockup used: Chrome takes Jost's
// macron from its latin subset rather than the whole letter from latin-ext,
// so Latvian came out as "SAKUMS" and "REZERVE TAGAD" with the macron adrift.
// Outfit is the same geometric sans in feel and sets Latvian correctly.
const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

// The step numerals in "How it works", the accent in the invitation band, and
// the footer's "Menu" heading are set in script.
const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

/** One statically rendered page per language; anything else is a 404. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const { meta, languages } = getContent(lang);

  return {
    metadataBase: siteUrl,
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      // Tells search engines these are the same page in another language, and
      // which one to serve when it has no better guess.
      languages: {
        ...Object.fromEntries(
          languages.map((language) => [language.code, language.href]),
        ),
        "x-default": `/${defaultLocale}`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${playfair.variable} ${outfit.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground font-sans"
        suppressHydrationWarning
      >
        {/* Scroll reveals start hidden; with no JavaScript to un-hide them,
            show everything instead. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
