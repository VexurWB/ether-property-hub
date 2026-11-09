import { pageMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import { siteConfig, pageHeroLeads } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Ether Property Hub to book a free consultation with Amir Thapa Magaranti. Email, phone, and enquiry form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={siteConfig.discoveryCta}
        description={pageHeroLeads.contact}
      />
      <Contact hideTitle />
    </PageShell>
  );
}
