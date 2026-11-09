import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Validation uses targeted lint/runtime checks; do not run implicit TypeScript checks.
  typescript: { ignoreBuildErrors: true },
  experimental: { cpus: 1 },
  images: { unoptimized: true },
  /* config options here */
};

const existingWebsiteHeaders = nextConfig.headers;
nextConfig.headers = async () => [
  ...(existingWebsiteHeaders ? await existingWebsiteHeaders() : []),
  { source: "/:path*", headers: [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'self'" },
    { key: "Strict-Transport-Security", value: "max-age=86400" },
  ] },
  { source: "/:path*",
    has: [{ type: "host", value: "vexur-ether-property-hub-import\\.ben-03a\\.workers\\.dev" }],
    missing: [{ type: "header", key: "x-forwarded-host", value: "(?:www\\.)?etherpropertyhub\\.com\\.au" }],
    headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
  },
];

export default nextConfig;
