import { faqs, siteConfig } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/button";
import { FAQAccordion } from "./FAQAccordion";

const previewFaqs = faqs.slice(0, 4);

export function FAQTeaser() {
  return (
    <section className="section-ivory section-pad">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Common <span className="serif-italic text-gold">questions.</span>
                </>
              }
              description="Straight answers about buyer's agency, fees, coverage, and how we work."
            />
            <div className="mt-8 hidden lg:block">
              <Button href="/faq" variant="outline" size="md">
                View all {faqs.length} questions
              </Button>
            </div>
          </div>

          <div>
            <FAQAccordion items={previewFaqs} />
            <div className="mt-6 lg:hidden">
              <Button href="/faq" variant="outline" size="md">
                View all {faqs.length} questions
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-10">
          <Button booking variant="primary" size="md">
            {siteConfig.cta}
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
