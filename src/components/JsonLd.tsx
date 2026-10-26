import { siteConfig, services, team, faqs, socialLinks } from "@/lib/site-data";
import { googleReviews, googleReviewsSummary } from "@/lib/reviews-data";
import { siteImages } from "@/lib/site-images";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteImages.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Mooramba Ave",
      addressLocality: "North Gosford",
      addressRegion: "NSW",
      postalCode: "2250",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.contact,
      jobTitle: siteConfig.contactRole,
      image: `${siteConfig.url}${siteImages.amir}`,
    },
    sameAs: socialLinks.map((social) => social.href),
    knowsAbout: services.map((s) => s.title),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: team[0].name,
    jobTitle: team[0].role,
    image: `${siteConfig.url}${siteImages.amir}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    description: team[0].bio,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}

/**
 * The rating and review markup, for /reviews only: Google expects review
 * markup on the page that shows the reviews, not on every page.
 */
export function ReviewsJsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteImages.logo}`,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Mooramba Ave",
      addressLocality: "North Gosford",
      addressRegion: "NSW",
      postalCode: "2250",
      addressCountry: "AU",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleReviewsSummary.rating,
      reviewCount: googleReviewsSummary.count,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const reviews = googleReviews.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.author,
    },
    reviewBody: t.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    datePublished: t.date,
    url: t.googleUrl,
    itemReviewed: {
      "@type": "RealEstateAgent",
      name: siteConfig.name,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      {reviews.map((review) => (
        <script
          key={review.url}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
        />
      ))}
    </>
  );
}
