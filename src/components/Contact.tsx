import { siteConfig } from "@/lib/site-data";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/SectionHeading";
import { Reveal } from "./Reveal";
import { VexurContactEmbed } from "./vexur/VexurContactEmbed";

const benefits = [
  "Free discovery call — no obligation",
  "Personal follow-up from Amir",
  "Buyer's agent — we work for you, not the vendor",
  "Australia-wide property search",
] as const;

export function Contact({ hideTitle = false }: { hideTitle?: boolean }) {
  return (
    <section id="contact" className="section-ivory section-pad">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-16">
          <Reveal>
            {!hideTitle && (
              <>
                <Eyebrow>Get in touch</Eyebrow>
                <h2 className="premium-h2 mt-5 text-ink">{siteConfig.discoveryCta} today</h2>
                <p className="premium-lead mt-5">{siteConfig.contactIntro}</p>
              </>
            )}

            <ul className={`space-y-3 ${hideTitle ? "" : "mt-8"}`}>
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] leading-snug text-ink-soft">
                  <span className="mt-0.5 text-gold" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="bg-bg-pure px-5 py-4 transition-colors hover:bg-surface-soft"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Email</span>
                <span className="mt-1 block text-[14px] text-ink">{siteConfig.email}</span>
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="bg-bg-pure px-5 py-4 transition-colors hover:bg-surface-soft">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Phone</span>
                <span className="mt-1 block text-[14px] text-ink">{siteConfig.phone}</span>
              </a>
              <div className="bg-bg-pure px-5 py-4 sm:col-span-2">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Office</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{siteConfig.address}</span>
                <span className="mt-1 block text-[13px] text-ink-muted">{siteConfig.licence}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <VexurContactEmbed />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
