import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { CTABand } from "@/components/CTABand";
import { ReviewsJsonLd } from "@/components/JsonLd";
import { googleReviewsSummary } from "@/lib/reviews-data";
import { pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Client Reviews",
  description:
    `Read all ${googleReviewsSummary.count} Google reviews from clients of Amir Thapa Magaranti and Ether Property Hub — Australia's 5-star rated buyer's agency.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <PageShell>
      <ReviewsJsonLd />
      <PageHero
        eyebrow="Client reviews"
        title={
          <>
            What our clients{" "}
            <span className="serif-italic text-gold-soft">say.</span>
          </>
        }
        description={pageHeroLeads.reviews}
      />
      <Testimonials />
      <CTABand
        eyebrow="Get in touch"
        title="Book a free consultation"
        description="Arrange a free discovery call to discuss your property goals."
      />
    </PageShell>
  );
}
