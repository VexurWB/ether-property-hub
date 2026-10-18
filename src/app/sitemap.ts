import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";
import { getBlogPostList } from "@/lib/vexur-blog";

export const revalidate = 3600;

const routes = [
  "",
  "/about",
  "/projects",
  "/team",
  "/services",
  "/process",
  "/reviews",
  "/faq",
  "/blog",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const posts = await getBlogPostList();

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at ?? post.published_at ?? lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
