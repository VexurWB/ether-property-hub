import { testimonials } from "@/lib/site-data";
import { googleReviewsSummary, googleReviewsUrl } from "@/lib/reviews-data";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/button";
import { ReviewCard } from "./ReviewCard";
import { Reveal } from "./Reveal";

export function ReviewsTeaser() {
  return (
    <section className="section-deep section-pad relative overflow-hidden">
      <Container className="relative">
        <SectionHeading
          eyebrow="Client reviews"
          title="What our clients say."
          description={`${googleReviewsSummary.rating.toFixed(1)} stars across ${googleReviewsSummary.count} verified Google reviews from buyers who worked with Amir and Ether Property Hub.`}
          tone="light-text"
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((review, index) => (
            <Reveal key={review.author} delay={index * 90}>
              <ReviewCard review={review} variant="dark" compact />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Button href="/reviews" variant="ghost" size="md">
            Read all {googleReviewsSummary.count} reviews
          </Button>
          <Button href={googleReviewsUrl} variant="ghost" size="md">
            View on Google
            <span aria-hidden="true">↗</span>
          </Button>
          <Button booking variant="primary" size="md">
            Book a free consultation
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
