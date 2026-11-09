import { services } from "@/lib/site-data";
import { ServiceIcon } from "@/lib/service-icons";
import { Container } from "./ui/Container";
import { Reveal } from "./Reveal";

export function ServicesGrid() {
  return (
    <section className="section-ivory section-pad">
      <Container>
        <div className="flex flex-col gap-8">
          {services.map((service, index) => {
            const allBullets = [...service.bullets, ...service.bulletsExtended];
            return (
              <Reveal key={service.title} id={service.icon} delay={index * 50}>
                <article className="premium-card overflow-hidden p-7 md:p-9">
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
                    <div>
                      <div className="flex items-start gap-5">
                        <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[8px] border border-line bg-brand-primary-soft text-brand-primary">
                          <ServiceIcon icon={service.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                            Service {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-ink md:text-[1.65rem]">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-5 text-[15px] leading-[1.8] text-ink-soft">{service.description}</p>
                      <p className="mt-4 text-[15px] leading-[1.8] text-ink-soft">{service.detail}</p>
                    </div>

                    <div className="rounded-[8px] border border-line bg-surface-soft p-6 md:p-7">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                        What&apos;s included
                      </p>
                      <ul className="mt-4 space-y-3">
                        {allBullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-[14px] leading-[1.7] text-ink-soft"
                          >
                            <span
                              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
