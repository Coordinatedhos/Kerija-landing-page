import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Jost, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Only the step numerals in "How it works" are set in script.
const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloom Studio | Handmade Creative Workshops",
  description:
    "Creative workshops for every occasion — birthdays, children's parties, bridal showers, city festivals, corporate events, and private celebrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} ${greatVibes.variable} h-full antialiased`}
    >
      {/* Runs before any other script and before first paint, so the scroll
          reveals start hidden only when there is JavaScript to un-hide them. */}
      <Script id="js-enabled" strategy="beforeInteractive">
        {`document.documentElement.classList.add("js")`}
      </Script>
      <body
        className="min-h-full flex flex-col bg-background text-foreground font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
