import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { getContent, isLocale, locales } from "@/content";

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
  const { bookingForm } = getContent(lang);

  return {
    title: bookingForm.meta.title,
    description: bookingForm.meta.description,
    alternates: { canonical: `/${lang}/booking` },
  };
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const content = getContent(lang);
  const copy = content.bookingForm;

  return (
    <>
      <header>
        <Masthead brand={content.brand} copy={content.masthead} />
        <NavBar
          a11y={content.a11y}
          copy={content.nav}
          languages={content.languages}
        />
      </header>

      <main className="relative flex-1 isolate">
        <Image
          src={content.plan.background.src}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-cream/25" />

        <div className="mx-auto max-w-[760px] px-4 py-14 md:px-8 md:py-20">
          <h1 className="text-center font-serif text-3xl tracking-[0.04em] text-foreground sm:text-4xl">
            {copy.heading}
          </h1>
          <p className="mx-auto mt-4 mb-9 max-w-[34rem] text-center text-[15px] leading-relaxed text-foreground/75">
            {copy.intro}
          </p>

          <BookingForm copy={copy} email={content.contact.email} />

          <p className="mt-8 text-center">
            <Link
              href={`/${lang}`}
              className="text-[11px] tracking-[0.14em] text-foreground/70 uppercase transition-colors hover:text-rust"
            >
              {copy.back}
            </Link>
          </p>
        </div>
      </main>

      <Footer
        brand={content.brand}
        contact={content.contact}
        copy={content.footer}
        nav={content.nav}
      />
    </>
  );
}
