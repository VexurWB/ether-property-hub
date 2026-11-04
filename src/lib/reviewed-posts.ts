export const reviewedPosts: Record<string, { title: string; description: string; paragraphs: string[] }> = {
  "first-home-buyer-s-guide-topic-in-location-year": {
    title: "First-home buyer guide: concession information under review",
    description: "The state duty comparison is temporarily withdrawn while current eligibility rules are checked.",
    paragraphs: ["Editorial update: 4 November 2026. The duty thresholds and eligibility comparison in the earlier guide have been withdrawn pending review against current state and territory revenue guidance. Do not use the former WA or ACT figures to budget for a purchase or determine eligibility.", "Before signing a contract, ask your conveyancer or qualified adviser to confirm the duty, grants and concessions that apply to your circumstances and contract date. Check the relevant revenue authority's current eligibility requirements and estimator."]
  },
  "case-study-how-we-helped-client-type-achieve-outcome-in-location": {
    title: "Client purchase case study: how to read the reported figures",
    description: "Clarifying the difference between buying below a budget and an estimated change in property value.",
    paragraphs: ["Editorial update: 4 November 2026. The previously reported $53,000 difference was against the client's budget. It is not a discount against an independently assessed market value.", "The previously reported $78,000 was an estimated gross increase in property value. It was not a verified increase in the buyer's equity or net investment profit. Debt, buying and selling costs, holding costs, tax and changes in the valuation basis were not accounted for in that figure.", "The original numerical outcome comparison is withheld pending the dated purchase and valuation records and the client's approval of the comparison basis. Individual outcomes do not establish the result another buyer will receive."]
  }
};

export function repairReviewedCards(html: string): string {
  return html.replace(/<a\b[^>]*class="[^"]*\bblog-card\b[^"]*"[^>]*>[\s\S]*?<\/a>/g, card => {
    const entry = Object.entries(reviewedPosts).find(([slug]) => card.includes('/blog/' + slug));
    if (!entry) return card;
    const [, post] = entry;
    return card.replace(/(<h[23]\b[^>]*>)[\s\S]*?(<\/h[23]>)/, '$1' + post.title + '$2')
      .replace(/(<p\b[^>]*class="[^"]*blog-card-excerpt[^"]*"[^>]*>)[\s\S]*?(<\/p>)/, '$1' + post.description + '$2');
  });
}
