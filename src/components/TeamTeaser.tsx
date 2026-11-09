import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { team, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";

export function TeamTeaser() {
  const member = team[0];

  return (
    <section className="section-ivory section-pad">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 top-8 hidden w-full rounded-[6px] border border-gold/40 lg:block"
              />
              <div className="img-frame relative overflow-hidden rounded-[6px] bg-brand-secondary">
                <Image
                  src={siteImages.amir}
                  alt={`${member.name} — ${member.role}`}
                  width={520}
                  height={650}
                  className="w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Meet our team</Eyebrow>
            <h2 className="premium-h2 mt-5 text-ink">{member.name}</h2>
            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-gold">
              {member.role}
            </p>
            <p className="mt-6 text-[15px] leading-[1.85] text-ink-soft">{member.bio}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/team" className="btn-outline h-11 px-6 text-[11px]">
                Meet the team
              </Link>
              <Button booking variant="primary" size="md" className="h-11 px-6 text-[11px]">
                {siteConfig.cta}
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
