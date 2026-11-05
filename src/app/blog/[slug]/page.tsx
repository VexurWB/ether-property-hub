import { reviewedPosts } from "@/lib/reviewed-posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { CTABand } from "@/components/CTABand";
import { Container } from "@/components/ui/Container";
import { blogPostExists, getBlogPostMetadata, getBlogPostHtml } from "@/lib/vexur-blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (reviewedPosts[slug]) return pageMetadata({ title: reviewedPosts[slug].title, description: reviewedPosts[slug].description, path: `/blog/${slug}` });
  const post = await getBlogPostMetadata(slug);
  const path = `/blog/${post?.slug ?? slug}`;

  if (!post) {
    return pageMetadata({
      title: "Blog",
      description: "Property market insights and buying strategy from Ether Property Hub.",
      path,
    });
  }

  // The layout template already adds "| Ether Property Hub"; drop a copy typed
  // into the CMS SEO title so the brand is not doubled.
  const title = (post.meta_title || post.title).replace(/\s*\|\s*Ether Property Hub\s*$/i, "").trim() || post.title;
  const base = pageMetadata({
    title,
    description: post.meta_description || (slug === "h" ? "A Dashain message for families considering property, with ways to support each other and questions to discuss with a broker and qualified advisers." : post.meta_description),
    path,
  });

  return {
    ...base,
    alternates: { canonical: post.canonical_url || path },
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      modifiedTime: post.updated_at ?? undefined,
      ...(post.og_image ? { images: [{ url: post.og_image }] } : {}),
    },
    twitter: {
      ...base.twitter,
      ...(post.og_image ? { images: [post.og_image] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const reviewed = reviewedPosts[slug];
  if (reviewed) return <PageShell><section className="section-cream section-pad"><Container className="pt-[76px]"><article className="max-w-3xl"><h1 className="font-display text-4xl">{reviewed.title}</h1>{reviewed.paragraphs.map(paragraph => <p className="mt-6 leading-8" key={paragraph}>{paragraph}</p>)}<p className="mt-6"><a href="/contact" className="underline">Contact Ether Property Hub</a> for the review status.</p></article></Container></section></PageShell>;
  // Unknown slugs used to render an empty post with a 200, which Google reports as a soft 404.
  if ((await blogPostExists(slug)) === false) notFound();
  const initialHtml = await getBlogPostHtml(slug);

  return (
    <PageShell>
      <section className="section-cream section-pad">
        <Container className="pt-[76px]">
          <div className="vexur-blog-shell" dangerouslySetInnerHTML={{ __html: initialHtml }} />
        </Container>
      </section>
      <CTABand
        eyebrow="Get in touch"
        title="Book a free consultation"
        description="Arrange a free discovery call to discuss your property goals."
      />
    </PageShell>
  );
}
