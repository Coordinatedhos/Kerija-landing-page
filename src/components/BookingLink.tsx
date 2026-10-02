"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { ReactNode } from "react";
import { bookingPath } from "@/content/site";
import { defaultLocale } from "@/content";

/**
 * Every "reserve" button on the site. They all go to the booking form, which
 * asks for the six details an offer needs.
 *
 * The language comes from the route rather than from props, so the buttons
 * scattered through the page don't each have to be handed one.
 */
export default function BookingLink({
  className,
  children,
  onSelect,
}: {
  className?: string;
  children: ReactNode;
  /** Runs on activation too — used to close the mobile menu. */
  onSelect?: () => void;
}) {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang ?? defaultLocale;

  return (
    <Link
      href={`/${lang}/${bookingPath}`}
      className={className}
      onClick={onSelect}
    >
      {children}
    </Link>
  );
}
