import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";

const markets = [
  { city: "Sydney", state: "NSW" },
  { city: "Melbourne", state: "VIC" },
  { city: "Brisbane", state: "QLD" },
  { city: "Perth", state: "WA" },
  { city: "Adelaide", state: "SA" },
  { city: "Central Coast", state: "NSW" },
  { city: "Gold Coast", state: "QLD" },
  { city: "Canberra", state: "ACT" },
];

export function Markets() {
  return (
    <section className="section-deep section-pad relative overflow-hidden">
      <Container className="relative">
        <SectionHeading
          eyebrow="Nationwide coverage"
          title={
            <>
              We follow the <span className="serif-italic text-gold-soft">opportunity</span>, not a postcode.
            </>
          }
          description="Research-led search across every major Australian market — chosen on merit, not geography."
          tone="light-text"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market, index) => (
            <Reveal key={market.city} delay={(index % 4) * 60}>
              <div className="coverage-card group h-full p-6">
                <span className="editorial-numeral editorial-numeral-light text-[1.6rem] text-gold-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{market.city}</h3>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                  {market.state}
                </p>
                <div className="mt-4 h-px w-10 bg-white/15 transition-all duration-500 group-hover:w-16 group-hover:bg-gold/50" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
