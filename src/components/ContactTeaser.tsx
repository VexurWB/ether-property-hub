import { siteConfig } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function ContactTeaser() {
  return (
    <section className="section-deep section-pad relative overflow-hidden">
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow tone="gold">Get in touch</Eyebrow>
            <h2 className="premium-h2 mt-5 max-w-[20ch] text-balance text-white">
              {siteConfig.discoveryCta} today
            </h2>
            <p className="premium-lead mt-5 text-white/72">{siteConfig.contactIntro}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[12px] border border-white/14 bg-white/[0.04] p-7 backdrop-blur-sm md:p-8">
              <p className="label-cap text-white/60">Contact details</p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 block border-b border-white/10 pb-4 transition-colors hover:text-gold-soft"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Email
                </span>
                <span className="mt-1 block text-[15px] text-white/85">{siteConfig.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="mt-4 block border-b border-white/10 pb-4 transition-colors hover:text-gold-soft"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Phone
                </span>
                <span className="mt-1 block text-[15px] text-white/85">{siteConfig.phone}</span>
              </a>

              <div className="mt-4 border-b border-white/10 pb-4">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                  Office
                </span>
                <span className="mt-1 block text-[14px] leading-relaxed text-white/70">
                  {siteConfig.address}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Send enquiry
                  <span aria-hidden="true">→</span>
                </Button>
                <Button href={`tel:${siteConfig.phoneRaw}`} variant="ghost" size="lg" className="w-full">
                  Call {siteConfig.phone}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
