import type { Metadata } from "next";
import { siteConfig } from "./site-data";

export const SHARE_IMAGE = {
  url: `${siteConfig.url}/social-preview.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${siteConfig.name} logo`,
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
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [SHARE_IMAGE],
    },
  };
}
