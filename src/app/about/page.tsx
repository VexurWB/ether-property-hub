import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { AboutStory } from "@/components/AboutStory";
import { Approach } from "@/components/Approach";
import { Markets } from "@/components/Markets";
import { ClientTypes } from "@/components/ClientTypes";
import { CTABand } from "@/components/CTABand";
import { pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Ether Property Hub is Australia's 5-star rated buyer's agency — personal property partners for first-home buyers, interstate buyers, and investors nationwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About us"
        title={
          <>
            More than buyer&apos;s agents — your{" "}
            <span className="serif-italic text-gold-soft">personal property partners.</span>
          </>
        }
        description={pageHeroLeads.about}
      />
      <AboutStory />
      <ClientTypes />
      <Approach />
      <Markets />
      <CTABand />
    </PageShell>
  );
}
