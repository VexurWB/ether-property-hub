import { faqs } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { FAQAccordion } from "./FAQAccordion";

export function FAQ() {
  return (
    <section id="faq" className="section-cream section-pad">
      <Container>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
