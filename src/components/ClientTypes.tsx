import Image from "next/image";
import { aboutContent, clientTypes } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";

export function ClientTypes() {
  return (
    <section className="section-cream section-pad">
      <Container>
        <SectionHeading
          eyebrow="Who our clients are"
          title="Family buyers, interstate purchasers, and investors."
          description={aboutContent.clientTypesIntro}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {clientTypes.map((client, index) => (
            <Reveal key={client.title} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-line bg-bg-pure">
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-soft">
                  <Image
                    src={siteImages.clients[client.image]}
                    alt={client.title}
                    fill
                    className="img-warm object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{client.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-soft">{client.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
