import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { TrustBar } from "@/components/TrustBar";
import { AboutTeaser } from "@/components/AboutTeaser";
import { ClientTypes } from "@/components/ClientTypes";
import { Services } from "@/components/Services";
import { ProjectsTeaser } from "@/components/ProjectsTeaser";
import { TeamTeaser } from "@/components/TeamTeaser";
import { ReviewsTeaser } from "@/components/ReviewsTeaser";
import { FAQTeaser } from "@/components/FAQTeaser";
import { ContactTeaser } from "@/components/ContactTeaser";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.rating}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <TrustBar />
      <AboutTeaser />
      <ClientTypes />
      <Services />
      <ProjectsTeaser />
      <TeamTeaser />
      <ReviewsTeaser />
      <FAQTeaser />
      <ContactTeaser />
    </PageShell>
  );
}
