/**
 * The origin the canonical and `hreflang` tags are built from.
 *
 * Vercel exports the deployment's own domain, which is right for previews and
 * good enough for production until the real domain is in place — at which
 * point set NEXT_PUBLIC_SITE_URL (e.g. "https://bloomstudio.lv") in the
 * project's environment variables and it wins.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
);
