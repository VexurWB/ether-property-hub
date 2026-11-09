import { services, siteConfig } from "@/lib/site-data";
import { ServiceIcon } from "@/lib/service-icons";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section-deep section-pad relative overflow-hidden">
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow tone="gold">Buyer&apos;s agent service</Eyebrow>
            <h2 className="premium-h2 mt-4 text-balance text-white">From search to settlement.</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 60}>
              <article className="premium-card-dark group flex h-full flex-col overflow-hidden p-7">
                <span className="card-rail" />
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[6px] border border-white/12 bg-[linear-gradient(150deg,rgb(255_255_255/0.09)_0%,rgb(255_255_255/0.025)_100%)] text-gold-soft shadow-[inset_0_1px_0_rgb(255_255_255/0.16)] transition-colors duration-500 group-hover:border-gold/40">
                  <ServiceIcon icon={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.75] text-white/62">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button booking variant="primary" size="lg">
              {siteConfig.cta}
              <span aria-hidden="true">→</span>
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              View all services
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
