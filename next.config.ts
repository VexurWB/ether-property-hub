import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  /* config options here */
};

const existingWebsiteHeaders = nextConfig.headers;
nextConfig.headers = async () => [
  ...(existingWebsiteHeaders ? await existingWebsiteHeaders() : []),
  { source: "/:path*", headers: [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  ] },
  { source: "/:path*",
    has: [{ type: "host", value: "vexur-ether-property-hub-import\\.ben-03a\\.workers\\.dev" }],
    missing: [{ type: "header", key: "x-forwarded-host", value: "(?:www\\.)?etherpropertyhub\\.com\\.au" }],
    headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
  },
];

export default nextConfig;
