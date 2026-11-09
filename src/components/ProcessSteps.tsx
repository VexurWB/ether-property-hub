import Image from "next/image";
import { processSteps } from "@/lib/site-data";
import { processStepImages } from "@/lib/process-images";
import { Container } from "./ui/Container";
import { Reveal } from "./Reveal";

export function ProcessSteps() {
  return (
    <section className="section-ivory section-pad">
      <Container>
        <div className="flex flex-col gap-14">
          {processSteps.map((step, index) => {
            const flip = index % 2 === 1;
            return (
              <Reveal key={step.step} delay={index * 60}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={flip ? "lg:order-2" : ""}>
                    <span className="step-numeral">{step.step}</span>
                    <div className="mt-4 h-px w-16 bg-gold/50" />
                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.8] text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <div className="img-frame relative overflow-hidden rounded-[8px]">
                      <Image
                        src={processStepImages[index]}
                        alt={step.title}
                        width={720}
                        height={480}
                        className="img-warm aspect-[3/2] w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
