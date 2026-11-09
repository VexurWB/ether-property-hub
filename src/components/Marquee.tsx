import { siteConfig } from "@/lib/site-data";

const beltItems = [
  "5★ rated buyer's agency",
  `${siteConfig.offMarketStat} off-market`,
  "Australia-wide",
] as const;

function Track() {
  return (
    <>
      {beltItems.map((item) => (
        <span key={item} className="inline-flex items-center gap-8 px-8 md:gap-10 md:px-12">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/75 md:text-[12px]">
            {item}
          </span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-gold/80" aria-hidden="true" />
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <section className="section-dark overflow-hidden border-y border-white/10 py-6 md:py-7" aria-label="Highlights">
      <div className="marquee-mask">
        <div className="marquee-track">
          <div className="flex shrink-0 items-center">
            <Track />
            <Track />
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true">
            <Track />
            <Track />
          </div>
        </div>
      </div>
    </section>
  );
}
