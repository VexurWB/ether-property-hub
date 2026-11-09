import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTABand } from "@/components/CTABand";
import { siteConfig, pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "How It Works",
  description:
    "How Ether Property Hub works — from free consultation through search, due diligence, and settlement.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How it works"
        title="From consultation to settlement."
        description={pageHeroLeads.process}
      />
      <ProcessSteps />
      <CTABand
        eyebrow="Get started"
        title="Book a free consultation"
        description={`Speak with ${siteConfig.contact} — no obligation.`}
      />
    </PageShell>
  );
}
