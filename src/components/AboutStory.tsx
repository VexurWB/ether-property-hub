import Image from "next/image";
import { aboutContent, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function AboutStory() {
  return (
    <section className="section-ivory section-pad">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-ink-soft">
              <p>{aboutContent.intro}</p>
              {aboutContent.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="pull-quote mt-8 max-w-xl">{aboutContent.closing}</blockquote>
            <div className="mt-8">
              <Button booking variant="primary" size="md">
                {siteConfig.cta}
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-4 -bottom-4 top-8 hidden w-full rounded-[4px] border border-gold/40 lg:block"
              />
              <div className="img-frame relative overflow-hidden rounded-[4px]">
                <Image
                  src={siteImages.hero}
                  alt="Ether Property Hub — buyer's agency Australia"
                  width={640}
                  height={800}
                  className="img-warm aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-soft">
                    {siteConfig.rating}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-white">
                    North Gosford, NSW · Australia-wide
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
