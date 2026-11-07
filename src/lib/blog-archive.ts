import { reviewedPosts } from "./reviewed-posts";
import { cleanEditorialDescription } from "./editorial-accessibility";
import type { BlogPostMetadata } from "./vexur-blog";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);

/** These existing article paths remain discoverable if the feed is temporarily unavailable. */
export function buildBlogArchiveHtml(posts: BlogPostMetadata[]): string {
  const entries = posts.length ? posts : [
    ...Object.entries(reviewedPosts).map(([slug, post]) => ({ slug, title: post.title, meta_description: post.description })),
    { slug: "h", title: "A Dashain message for families considering property", meta_description: "Ways to support each other and questions to discuss with a broker and qualified advisers." },
    { slug: "november-2026-property-market-update-australia", title: "November 2026 property market update", meta_description: "Property market commentary and buying considerations from Ether Property Hub." },
  ];
  const cards = entries.filter(post => /^[a-z0-9][a-z0-9-]*$/i.test(post.slug)).map(post => {
    const reviewed = reviewedPosts[post.slug];
    const title = reviewed?.title ?? post.title;
    const description = reviewed?.description ?? cleanEditorialDescription(post.meta_description);
    return `<a class="blog-card block rounded-lg border border-line p-6" href="/blog/${post.slug}"><h2 class="blog-card-title font-display text-2xl">${escapeHtml(title)}</h2><p class="blog-card-excerpt mt-3 leading-7">${escapeHtml(description)}</p><span class="mt-4 inline-block underline">Read article</span></a>`;
  });
  return `<div class="grid gap-6 md:grid-cols-2" aria-label="Property articles">${cards.join("")}</div>`;
}
