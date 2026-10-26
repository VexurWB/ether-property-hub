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
  const posts = await getBlogPostList();

  // Only a post's own dates go in lastmod. The fixed pages have no real modified date,
  // and stamping them with the build or request time tells Google they all changed on every build.
  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...posts.map((post) => {
      const modified = post.updated_at ?? post.published_at;
      return {
        url: `${siteConfig.url}/blog/${post.slug}`,
        ...(modified ? { lastModified: new Date(modified) } : {}),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    }),
  ];
}
