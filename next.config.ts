import type { NextConfig } from "next";

const blogOrigin =
  "https://vexur-blogs-1.pages.dev/_b/ad7cc32d-bfe2-45e3-b4d5-dae150a3c81c";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: `${blogOrigin}/blog/:path*`,
      },
    ];
  },
};

export default nextConfig;
