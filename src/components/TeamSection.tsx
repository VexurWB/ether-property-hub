import Image from "next/image";
import { team, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function TeamSection() {
  return (
    <section className="section-ivory section-pad">
      <Container>
        {team.map((member) => (
          <div key={member.name} className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -left-4 top-8 hidden w-full rounded-[6px] border border-gold/40 lg:block"
                />
                <div className="img-frame relative overflow-hidden rounded-[6px] bg-brand-secondary">
                  <Image
                    src={siteImages.amir}
                    alt={`${member.name} — ${member.role}`}
                    width={620}
                    height={775}
                    priority
                    className="w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <Eyebrow>Meet the team</Eyebrow>
              <h2 className="premium-h2 mt-5 text-ink">{member.name}</h2>
              <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">
                {member.role}
              </p>
              <p className="mt-6 text-[15px] leading-[1.85] text-ink-soft">{member.bio}</p>

              <div className="mt-8 grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2">
                <a href={`mailto:${siteConfig.email}`} className="bg-bg-pure px-5 py-4 transition-colors hover:bg-surface-soft">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Email</span>
                  <span className="mt-1 block text-[14px] text-ink">{siteConfig.email}</span>
                </a>
                <a href={`tel:${siteConfig.phoneRaw}`} className="bg-bg-pure px-5 py-4 transition-colors hover:bg-surface-soft">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Phone</span>
                  <span className="mt-1 block text-[14px] text-ink">{siteConfig.phone}</span>
                </a>
                <div className="bg-bg-pure px-5 py-4 sm:col-span-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Office</span>
                  <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{siteConfig.address}</span>
                </div>
              </div>

              <div className="mt-8">
                <Button booking variant="primary" size="md">
                  {siteConfig.cta}
                  <span aria-hidden="true">→</span>
                </Button>
              </div>
            </Reveal>
          </div>
        ))}
      </Container>
    </section>
  );
}
