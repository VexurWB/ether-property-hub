import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTABand } from "@/components/CTABand";
import { pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Buyer's agent services — strategy, research, sourcing, off-market access, due diligence, and negotiation across Australia.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Buyer's agent service"
        title="From search to settlement."
        description={pageHeroLeads.services}
      />
      <ServicesGrid />
      <CTABand />
    </PageShell>
  );
}
