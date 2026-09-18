import type { NextConfig } from "next";
import { defaultLocale } from "./src/content";

const nextConfig: NextConfig = {
  /**
   * Every page lives under a language segment (/lv, /en), so the bare domain
   * sends visitors to the default language. Change `defaultLocale` in
   * src/content/index.ts to land them on a different one.
   */
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${defaultLocale}`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
