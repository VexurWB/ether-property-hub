import { vexurCalendarConfig } from "./vexur-calendar";

const blogRenderUrl = "https://pgsnbsjtpxfmzedjldyu.supabase.co/functions/v1/blog-render";

export type BlogPostMetadata = {
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  og_image: string | null;
  canonical_url: string;
  published_at: string | null;
  updated_at: string | null;
};

type BlogListingMetadata = {
  posts?: BlogPostMetadata[];
};

async function fetchBlogMetadata<T>(params: Record<string, string>): Promise<T | null> {
  const query = new URLSearchParams({ user_id: vexurCalendarConfig.agentId, metadata: "true", ...params });
  try {
    const response = await fetch(`${blogRenderUrl}?${query}`, { next: { revalidate: 300 } });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export function getBlogPostMetadata(slug: string) {
  return fetchBlogMetadata<BlogPostMetadata>({ post: slug });
}

export async function getBlogPostHtml(slug: string): Promise<string> {
  const query = new URLSearchParams({ user_id: vexurCalendarConfig.agentId, post: slug, embed: "true" });
  const response = await fetch(`${blogRenderUrl}?${query}`, { next: { revalidate: 300 } });
  if (!response.ok) throw new Error(`Article service returned ${response.status}`);
  return repairMarkdownHrefs((await response.text()).replace(/<script\b[\s\S]*?<\/script>/gi, ""));
}

/**
 * Links pasted into the CMS as markdown end up with the markdown inside the href
 * ("[mailto:x](mailto:x)" or "[https://...](https://...)"), which the browser
 * resolves as a relative /blog/[... path and 404s. Use the real URL instead.
 */
export function repairMarkdownHrefs(html: string): string {
  return html.replace(/href=(["'])\[([^\]"']*)\](?:\(([^)"']*)\))?\1/gi, (_match, quote: string, text: string, url?: string) => {
    return `href=${quote}${(url || text).trim()}${quote}`;
  });
}

/**
 * false only when Vexur says the post does not exist (404), so the route can answer a
 * real 404 instead of a 200 "soft 404" page. null when Vexur could not be reached:
 * keep rendering, a feed outage must not take posts down.
 */
export async function blogPostExists(slug: string): Promise<boolean | null> {
  const query = new URLSearchParams({ user_id: vexurCalendarConfig.agentId, metadata: "true", post: slug });
  try {
    const response = await fetch(`${blogRenderUrl}?${query}`, { next: { revalidate: 300 } });
    if (response.status === 404) return false;
    return response.ok ? true : null;
  } catch {
    return null;
  }
}

export async function getBlogPostList(): Promise<BlogPostMetadata[]> {
  const listing = await fetchBlogMetadata<BlogListingMetadata>({});
  return listing?.posts ?? [];
}
