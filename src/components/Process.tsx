import { processSteps, siteConfig } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="section-cream section-pad">
      <Container>
        <SectionHeading
          eyebrow="The process"
          title="From brief to settlement."
          description="Three clear stages — define what fits, do the diligence, then decide with conviction. Calm, disciplined, and entirely on your side."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 90}>
              <div className="relative flex h-full flex-col">
                <span className="step-numeral">{step.step}</span>
                <div className="mt-4 h-px w-full bg-line" />
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-ink-soft">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/process" variant="outline" size="md">
            See how it works
          </Button>
          <Button booking variant="primary" size="md">
            {siteConfig.cta}
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
