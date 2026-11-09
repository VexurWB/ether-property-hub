import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about buyer's agency, fees, coverage, and working with Ether Property Hub.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Common <span className="serif-italic text-gold-soft">questions.</span>
          </>
        }
        description={pageHeroLeads.faq}
      />
      <FAQ />
      <CTABand
        eyebrow="Get in touch"
        title="Book a free consultation"
        description="Arrange a free discovery call to discuss your property goals."
      />
    </PageShell>
  );
}
