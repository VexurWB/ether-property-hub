import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Container } from "@/components/ui/Container";
import { VexurBlogEmbed } from "@/components/vexur/VexurBlogEmbed";
import { pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Property market insights and buying strategy from Amir Thapa Magaranti and the Ether Property Hub team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Insights and <span className="serif-italic text-gold-soft">updates.</span>
          </>
        }
        description={pageHeroLeads.blog}
      />
      <section className="section-cream section-pad">
        <Container>
          <VexurBlogEmbed placement="archive" />
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
