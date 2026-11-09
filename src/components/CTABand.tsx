import { siteConfig } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function CTABand({
  eyebrow = "Ready to start?",
  title = `Discuss your brief with ${siteConfig.contact}.`,
  description = "A complimentary strategy session — no obligation, no sales pressure.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-deep section-pad relative overflow-hidden">
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-gold/90">{eyebrow}</p>
              <h2 className="premium-h2 mt-4 text-balance text-white">{title}</h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-white/68">{description}</p>
            </div>
            <Button booking variant="primary" size="lg" className="shrink-0">
              {siteConfig.cta}
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
