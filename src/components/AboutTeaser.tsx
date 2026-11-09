import Image from "next/image";
import { aboutContent, siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function AboutTeaser() {
  return (
    <section className="section-cream section-pad">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow>About us</Eyebrow>
            <h2 className="premium-h2 mt-5 text-balance text-ink">
              Your personal property partners.
            </h2>
            <p className="premium-lead mt-5">{aboutContent.intro}</p>
            <p className="mt-4 text-[15px] leading-[1.85] text-ink-soft">{aboutContent.body[0]}</p>

            <blockquote className="pull-quote mt-8 max-w-xl">{aboutContent.closing}</blockquote>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/about" variant="outline" size="md">
                Read our full story
              </Button>
              <Button booking variant="primary" size="md">
                {siteConfig.cta}
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 bottom-8 hidden w-full rounded-[4px] border border-gold/40 lg:block"
              />
              <div className="img-frame relative overflow-hidden rounded-[4px]">
                <Image
                  src={siteImages.about}
                  alt="Ether Property Hub — about us"
                  width={640}
                  height={800}
                  className="img-warm aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-soft">
                    {siteConfig.rating}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold leading-snug text-white">
                    Gosford, NSW · Australia-wide
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
