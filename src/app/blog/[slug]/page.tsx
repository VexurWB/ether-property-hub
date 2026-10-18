import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { CTABand } from "@/components/CTABand";
import { Container } from "@/components/ui/Container";
import { VexurBlogEmbed } from "@/components/vexur/VexurBlogEmbed";
import { blogPostExists, getBlogPostMetadata } from "@/lib/vexur-blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostMetadata(slug);
  const path = `/blog/${post?.slug ?? slug}`;

  if (!post) {
    return pageMetadata({
      title: "Blog",
      description: "Property market insights and buying strategy from Ether Property Hub.",
      path,
    });
  }

  const base = pageMetadata({
    title: post.meta_title || post.title,
    description: post.meta_description,
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
  // Unknown slugs used to render an empty post with a 200, which Google reports as a soft 404.
  if ((await blogPostExists(slug)) === false) notFound();

  return (
    <PageShell>
      <section className="section-cream section-pad">
        <Container className="pt-[76px]">
          <VexurBlogEmbed placement="post" postSlug={slug} />
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
