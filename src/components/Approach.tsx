import type { ReactNode } from "react";
import { differentiators } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";

const principleIcons: ReactNode[] = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
];

export function Approach() {
  return (
    <section id="approach" className="section-ivory section-pad">
      <Container>
        <SectionHeading
          eyebrow="Why Ether Property Hub"
          title="Negotiation, network, and offer advice."
          description="The same principles that guide every client purchase — whether you're buying your first home or your next investment."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 70}>
              <article className="group flex h-full gap-5 bg-bg-pure p-7 transition-colors duration-500 hover:bg-surface-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-line bg-brand-primary-soft text-brand-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    {principleIcons[index]}
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.75] text-ink-soft">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
