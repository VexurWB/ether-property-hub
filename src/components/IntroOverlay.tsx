"use client";

import { useEffect, useState } from "react";

export function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const played = sessionStorage.getItem("ether-intro-played");
    if (reduce || played) return;

    setShow(true);
    sessionStorage.setItem("ether-intro-played", "1");

    const timeout = window.setTimeout(() => setShow(false), 1900);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="flex flex-col items-center gap-5">
        <div className="fade text-center">
          <div className="font-display text-3xl font-semibold tracking-tight text-brand-primary">
            Ether
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.42em] text-gold">
            Property Hub
          </div>
        </div>
        <div className="intro-overlay__line" />
        <div className="fade delay-300 text-[10px] font-medium uppercase tracking-[0.32em] text-ink-muted">
          Invest · Grow · Thrive
        </div>
      </div>
    </div>
  );
}
