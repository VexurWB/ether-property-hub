import { valuePillars } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";

export function TrustBar() {
  return (
    <section className="section-ivory section-pad">
      <Container>
        <SectionHeading
          eyebrow="Why Ether Property Hub"
          title="What we bring to every purchase."
          description="Negotiation, off-market access, and offer advice — backed by a network that gets you to the right properties sooner."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {valuePillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 70}>
              <article className="group h-full bg-bg-pure p-7 transition-colors duration-500 hover:bg-surface-soft">
                <div className="flex items-baseline gap-3">
                  <span className="editorial-numeral text-[2rem] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-line transition-all duration-500 group-hover:bg-gold/50" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-soft">{pillar.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
