"use client";

import { useCallback, useEffect, useState } from "react";
import {
  googleReviews,
  googleReviewsSummary,
  googleReviewsUrl,
  type GoogleReview,
} from "@/lib/reviews-data";
import { ReviewCard } from "./ReviewCard";
import { Container } from "./ui/Container";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slidesPerView;
}

export function ReviewsSlider({ reviews = googleReviews }: { reviews?: readonly GoogleReview[] }) {
  const slidesPerView = useSlidesPerView();
  const pageCount = Math.ceil(reviews.length / slidesPerView);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((current) => Math.min(current, Math.max(pageCount - 1, 0)));
  }, [pageCount]);

  const goTo = useCallback(
    (next: number) => {
      setPage((next + pageCount) % pageCount);
    },
    [pageCount],
  );

  const visible = reviews.slice(page * slidesPerView, page * slidesPerView + slidesPerView);

  return (
    <section className="section-cream section-pad">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-5 py-2.5 shadow-xs">
              <div className="flex items-center gap-0.5 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">
                {googleReviewsSummary.rating.toFixed(1)}
              </span>
              <span className="h-4 w-px bg-line" aria-hidden="true" />
              <span className="text-sm text-ink-soft">
                {googleReviewsSummary.count} Google reviews
              </span>
            </div>
            <p className="max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
              Every review below links directly to the original on Google — verified feedback from
              buyers, investors, and partners who worked with Amir.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <div key={page} className="rise grid gap-5 lg:grid-cols-2">
            {visible.map((review, index) => (
              <Reveal key={`${review.author}-${review.googleUrl}`} delay={index * 70}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-gold/50 hover:text-gold"
                aria-label="Previous reviews"
              >
                <span aria-hidden="true">←</span>
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === page ? "w-7 bg-gold" : "w-2 bg-line hover:bg-gold/40"
                    }`}
                    aria-label={`Go to review page ${i + 1}`}
                    aria-current={i === page ? "true" : undefined}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-gold/50 hover:text-gold"
                aria-label="Next reviews"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <p className="text-[13px] text-ink-muted">
              {page + 1} of {pageCount}
              <span className="mx-2 text-line">·</span>
              {reviews.length} reviews total
            </p>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href={googleReviewsUrl} variant="outline" size="lg">
              View all reviews on Google
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
