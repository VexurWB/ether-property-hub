import type { Metadata } from "next";
import { siteConfig } from "./site-data";
import { siteImages } from "./site-images";

const ogImage = {
  url: siteImages.hero,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — buyer's agency Australia`,
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}${path}`,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteImages.hero],
    },
  };
}
