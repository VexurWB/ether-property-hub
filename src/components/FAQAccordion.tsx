"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

function FaqToggle({ open }: { open: boolean }) {
  return (
    <span
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open
          ? "border-gold/50 bg-gold/10 text-gold"
          : "border-line bg-surface-soft text-gold group-hover:border-gold/35 group-hover:bg-gold/5"
      }`}
      aria-hidden="true"
    >
      <span className="absolute h-px w-3.5 bg-current" />
      <span
        className={`absolute h-3.5 w-px bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
        }`}
      />
    </span>
  );
}

export function FAQAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: readonly FaqItem[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={faq.question}
            className={`group overflow-hidden rounded-[12px] border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen
                ? "border-gold/30 bg-bg-pure shadow-[0_18px_48px_-28px_rgb(11_28_51/0.22)]"
                : "border-line/90 bg-bg-pure/75 hover:border-line-strong hover:bg-bg-pure hover:shadow-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 px-5 py-5 text-left md:gap-5 md:px-7 md:py-6"
            >
              <span
                className={`mt-2.5 flex h-5 w-5 shrink-0 items-center justify-center transition-colors duration-500 ${
                  isOpen ? "text-gold" : "text-gold/45 group-hover:text-gold/70"
                }`}
                aria-hidden="true"
              >
                <span
                  className={`h-2 w-2 rotate-45 rounded-[1px] bg-current transition-transform duration-500 ${
                    isOpen ? "scale-110" : "scale-100"
                  }`}
                />
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className={`block font-display text-[1.05rem] font-semibold leading-snug transition-colors duration-500 md:text-[1.18rem] ${
                    isOpen ? "text-ink" : "text-ink group-hover:text-brand-secondary"
                  }`}
                >
                  {faq.question}
                </span>
              </span>

              <FaqToggle open={isOpen} />
            </button>

            <div
              className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="border-t border-line/70 px-5 pb-6 pt-5 md:px-7 md:pb-7 md:pt-6">
                  <span className="gold-rule mb-4 ml-9 block w-10 md:ml-10" aria-hidden="true" />
                  <p className="ml-9 max-w-[62ch] text-[15px] leading-[1.85] text-ink-soft md:ml-10 md:text-[15.5px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
