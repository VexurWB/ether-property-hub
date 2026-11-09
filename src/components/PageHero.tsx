import { Container } from "./ui/Container";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  align = "start",
  titleSize = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  titleSize?: "default" | "display";
}) {
  const titleClass = titleSize === "display" ? "premium-h2" : "page-hero-title";
  const titleWidth =
    titleSize === "display"
      ? align === "center"
        ? "mx-auto max-w-[22ch]"
        : "max-w-[22ch]"
      : align === "center"
        ? "mx-auto max-w-[20ch]"
        : "max-w-[24ch]";

  return (
    <section
      data-interior-hero
      className="section-deep relative isolate overflow-hidden pt-[128px] pb-12 md:pt-[144px] md:pb-14"
    >
      <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <Container className={`relative ${align === "center" ? "text-center" : ""}`}>
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          {eyebrow && (
            <>
              <span className="gold-rule" />
              <span className="eyebrow text-gold/90">{eyebrow}</span>
            </>
          )}
        </div>

        <h1
          className={`${titleClass} mt-4 text-balance text-white ${titleWidth}`}
        >
          {title}
        </h1>

        {description && (
          <p
            className={`page-hero-lead mt-5 line-clamp-2 text-white/72 ${align === "center" ? "mx-auto max-w-xl" : "max-w-xl"}`}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
