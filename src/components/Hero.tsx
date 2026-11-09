import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";
import { siteImages } from "@/lib/site-images";

export function Hero() {
  return (
    <section className="section-deep relative isolate overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1240px] items-center px-5 pb-20 pt-32 md:px-8 md:pt-36">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_min(42vw,440px)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_460px]">
          <div className="flex flex-col">
            <div className="rise flex items-center gap-3">
              <span className="gold-rule" />
              <span className="eyebrow text-gold/90">{siteConfig.rating}</span>
            </div>

            <h1 className="rise delay-100 display-hero mt-6 max-w-xl text-balance text-white">
              {siteConfig.heroHeadline}{" "}
              <span className="serif-italic text-gold-soft">{siteConfig.heroHeadlineAccent}</span>
            </h1>

            <div className="rise delay-200 mt-7 max-w-xl space-y-4">
              <p className="text-lg leading-relaxed text-white/85">{siteConfig.heroSubheadline}.</p>
              <p className="text-[15px] leading-[1.8] text-white/62">{siteConfig.heroDescription}</p>
            </div>

            <div className="rise delay-300 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button booking variant="primary" size="lg" className="h-12 px-8 text-[11.5px]">
                {siteConfig.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                >
                  →
                </span>
              </Button>
              <Link href="/projects" className="btn-ghost-light h-12 px-8 text-[11.5px]">
                View client purchases
              </Link>
            </div>
          </div>

          <div className="fade delay-200 relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 top-8 hidden w-full rounded-[4px] border border-gold/40 lg:block"
              />
              <div className="img-frame relative overflow-hidden rounded-[4px] border-white/10 shadow-[0_28px_90px_-28px_rgba(0,0,0,0.85)]">
                <Image
                  src={siteImages.amir}
                  alt={`${siteConfig.contact} — ${siteConfig.contactRole}`}
                  width={819}
                  height={1024}
                  priority
                  className="img-warm kenburns aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-soft">
                    {siteConfig.contactRole}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    {siteConfig.contact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
