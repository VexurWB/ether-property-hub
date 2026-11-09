import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { CTABand } from "@/components/CTABand";
import { pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Recent client property purchases secured by Ether Property Hub across NSW, QLD, VIC, and WA.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Client purchases"
        title="Recent client purchases."
        description={pageHeroLeads.projects}
      />
      <ProjectsGrid />
      <CTABand
        eyebrow="Get in touch"
        title="Book a free consultation"
        description="Arrange a free discovery call to discuss your next purchase."
      />
    </PageShell>
  );
}
