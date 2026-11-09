import type { GoogleReview } from "@/lib/reviews-data";

type ReviewCardProps = {
  review: GoogleReview;
  variant?: "light" | "dark";
  showGoogleLink?: boolean;
  compact?: boolean;
  className?: string;
};

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export function ReviewCard({
  review,
  variant = "light",
  showGoogleLink = true,
  compact = false,
  className = "",
}: ReviewCardProps) {
  const isDark = variant === "dark";

  return (
    <figure
      className={`flex h-full flex-col ${
        isDark
          ? "premium-card-dark relative overflow-hidden p-8 md:p-10"
          : "premium-card p-8 md:p-9"
      } ${className}`.trim()}
    >
      {isDark ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-primary/20 blur-3xl"
        />
      ) : null}

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-gold" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              ★
            </span>
          ))}
        </div>
        {showGoogleLink ? (
          <a
            href={review.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
              isDark
                ? "text-white/45 hover:text-gold-soft"
                : "text-ink-muted hover:text-gold"
            }`}
            aria-label={`View ${review.author}'s review on Google`}
          >
            <GoogleMark className="h-3.5 w-3.5" />
            <span>Google</span>
          </a>
        ) : null}
      </div>

      <blockquote
        className={`relative mt-6 flex-1 font-display font-normal italic leading-[1.55] ${
          compact ? "line-clamp-5 text-[1.15rem] md:text-[1.2rem]" : "text-[1.2rem] md:text-[1.3rem]"
        } ${isDark ? "text-white/92" : "text-ink"}`}
      >
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <figcaption
        className={`relative mt-7 flex items-center gap-3.5 border-t pt-6 ${
          isDark ? "border-white/10" : "border-line"
        }`}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary font-display text-base font-semibold text-white">
          {review.author.charAt(0).toUpperCase()}
        </span>
        <span className="min-w-0">
          <span className={`block text-sm font-semibold ${isDark ? "text-white" : "text-ink"}`}>
            {review.author}
          </span>
          <span className={`text-[12.5px] ${isDark ? "text-white/55" : "text-ink-muted"}`}>
            {review.detail} · {review.date}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
