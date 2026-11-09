import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { TeamSection } from "@/components/TeamSection";
import { team, pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Team",
  description:
    "Meet Amir Thapa Magaranti — Director & Buyer's Agent at Ether Property Hub.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Meet our team"
        title={team[0].name}
        description={pageHeroLeads.team}
        titleSize="display"
      />
      <TeamSection />
    </PageShell>
  );
}
