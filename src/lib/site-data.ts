export const siteConfig = {
  name: "Ether Property Hub",
  tagline: "Invest. Grow. Thrive.",
  description:
    "Australia's 5-star rated buyer's agency. Unmatched price outcomes and access to off-market properties. Led by Amir Thapa Magaranti — saving you time, money and stress across Australia.",
  url: "https://www.etherpropertyhub.com.au",
  email: "amir@etherpropertyhub.com.au",
  phone: "0452 633 252",
  phoneRaw: "0452633252",
  address: "60 Mooramba Ave, North Gosford, NSW 2250",
  licence: "NSW: 400086989",
  contact: "Amir Thapa Magaranti",
  contactRole: "Director & Buyer's Agent",
  facebook: "https://www.facebook.com/profile.php?id=61564510874915",
  instagram: "https://www.instagram.com/amir.buyersagent",
  tiktok: "https://www.tiktok.com/@amiretherpropertyhub",
  socialHandle: "@amiretherpropertyhub",
  cta: "Book a free consultation",
  discoveryCta: "Book a free discovery call",
  rating: "5-Star Rated Buyer's Agency",
  offMarketStat: "65%",
  heroHeadline: "Book a free consultation.",
  heroHeadlineAccent: "Australia's 5-star buyer's agency.",
  heroSubheadline: "Unmatched price outcomes & access to off-market properties",
  heroDescription:
    "As one of the most experienced and well-connected buyer's agents in Australia, we're driven to save you time, money and stress by taking away the hassles that come from buying property.",
  contactIntro:
    "Arrange a free discovery call to discuss your property goals — no obligation.",
} as const;

export const socialLinks = [
  { label: "Facebook", icon: "facebook", href: siteConfig.facebook },
  { label: "Instagram", icon: "instagram", href: siteConfig.instagram },
  { label: "TikTok", icon: "tiktok", href: siteConfig.tiktok },
] as const;

export const pageHeroLeads = {
  about: "Personal property partners helping you buy smarter, faster, and with confidence.",
  team: "Director and buyer's agent guiding every property journey at Ether Property Hub.",
  services: "From strategy and search to negotiation and settlement — we simplify every step.",
  projects: "Recent purchases secured across NSW, QLD, VIC, and WA.",
  process: "Three clear stages from your first call through to settlement.",
  reviews: "5.0 stars across 20 verified Google reviews.",
  faq: "Answers to common questions about buyer's agency and our process.",
  blog: "Market insights and buying strategy from Amir and the Ether Property Hub team.",
  contact: "Book a free discovery call with Amir — no obligation.",
} as const;

export const aboutContent = {
  intro:
    "At Ether Property Hub, we're more than just buyer's agents — we're your personal property partners, here to help you make smarter, faster, and more confident buying decisions.",
  body: [
    "Whether you're a first-home buyer, an investor building your portfolio, or relocating from interstate or overseas, we guide you through every step with clarity and care. We take the time to understand your goals, source the best on- and off-market opportunities, and negotiate fiercely on your behalf.",
    "With a strong foundation in data, local insight, and real-world experience, we're committed to finding not just any property — but the right one for you.",
  ],
  closing: "Your journey is personal. Your property should be too. Let's make it happen — together.",
  serviceIntro:
    "Buying a home should be one of life's best moments — not a stressful ordeal.",
  serviceBody:
    "We simplify every step from strategy and search to negotiation and settlement, so you find the right property with confidence.",
  clientTypesIntro:
    "From family home buyers to interstate & international home buyers to investors, we have the right experience & qualifications to suit all of your needs.",
} as const;

export const valuePillars = [
  {
    title: "Negotiation",
    description:
      "We protect your interests using instinctive negotiation skills to keep the price right and terms reasonable.",
    accent: "Protect",
  },
  {
    title: "Powerful network",
    description:
      "Over 65% of our purchases for clients are never advertised, so you get to the best properties before anyone else.",
    accent: "65%",
  },
  {
    title: "Save time",
    description:
      "Our tailored strategy sessions allow us to uncover your wants and needs, budget, and lifestyle so we can streamline your house hunt.",
    accent: "Fast",
  },
  {
    title: "Effective offer advice",
    description:
      "We follow your dreams, but overcome emotions to ensure you don't get carried away and be tempted to overpay for a property.",
    accent: "Smart",
  },
] as const;

export const clientTypes = [
  {
    title: "Family home buyers",
    description:
      "Buying that perfect family home can feel overwhelming and emotional. We're here to simplify the process and guide you every step of the way — ensuring you secure a home that fits your lifestyle, budget, and long-term needs.",
    image: "family" as const,
  },
  {
    title: "Interstate & international buyers",
    description:
      "Buying 'sight unseen' comes with risks, but with our trusted network and boots on the ground, we'll give you access to vetted properties, real-time insights, and smooth coordination from start to settlement — wherever you are in the world.",
    image: "interstate" as const,
  },
  {
    title: "Investors",
    description:
      "It's all about the numbers. With years of property investing experience, we help you identify high-performing suburbs, negotiate with confidence, and build a strategic portfolio designed to deliver long-term financial freedom.",
    image: "investors" as const,
  },
] as const;

export const team = [
  {
    name: "Amir Thapa Magaranti",
    role: "Director & Buyer's Agent",
    bio: "At the core of our business is Amir Thapa Magaranti, the Director and trusted guide behind every property journey. With several years of experience in real estate, buyer's advocacy, and property development, Amir combines practical market knowledge with a passion for helping people make confident property decisions — whether it's finding the perfect home, securing a strong investment, or planning a development project.",
    image: "amir" as const,
  },
] as const;

export const projects = [
  { location: "Kallangur", state: "QLD", type: "Investment purchase", image: "kallangur" as const },
  { location: "Dubbo", state: "NSW", type: "Investment purchase", image: "dubbo" as const },
  {
    location: "Fortitude Valley",
    state: "QLD",
    type: "Investment purchase",
    image: "fortitude-valley" as const,
  },
  { location: "Caboolture", state: "QLD", type: "Investment purchase", image: "caboolture" as const },
  { location: "Thornlie", state: "WA", type: "Investment property", image: "thornlie" as const },
  { location: "Greenfields", state: "WA", type: "Investment purchase", image: "greenfields" as const },
  { location: "Mildura", state: "VIC", type: "Investment purchase", image: "mildura" as const },
] as const;

export const services = [
  {
    title: "Investment strategy",
    description:
      "Tailored strategy sessions to understand your goals, budget, and lifestyle before the search begins.",
    detail:
      "Every engagement starts with a structured strategy session — not a sales pitch. We map your finance position, risk appetite, and timeline so every property we shortlist is aligned with what you're actually trying to achieve.",
    bullets: [
      "Clear objectives — growth, yield, or lifestyle — mapped to your timeframe.",
      "Finance pre-approval guidance and realistic budget setting before you search.",
      "Property type and location criteria aligned with your personal and portfolio goals.",
    ],
    bulletsExtended: [
      "Portfolio review for existing investors — what to hold, sell, or acquire next.",
      "Written brief agreed upfront so everyone is aligned before the search starts.",
    ],
    icon: "strategy",
  },
  {
    title: "Property research",
    description:
      "Suburb analysis, comparable sales, and rental demand to support each recommendation.",
    detail:
      "We don't rely on gut feel or hype suburbs. Each recommendation is backed by data — growth drivers, vacancy, rental yield, comparable sales, and infrastructure — so you can decide with evidence, not emotion.",
    bullets: [
      "Growth trends, infrastructure plans, and vacancy rates assessed suburb by suburb.",
      "Recent comparable sales and rental yields used to benchmark fair value.",
      "Shortlist reports so you understand why each area and property stacks up.",
    ],
    bulletsExtended: [
      "Risk factors flagged early — flood zones, oversupply, zoning, and body corporate issues.",
      "Suburb shortlists narrowed to a focused list before any inspections begin.",
    ],
    icon: "research",
  },
  {
    title: "Property sourcing",
    description:
      "Active search across Australia. Over 65% of our client purchases are never publicly advertised.",
    detail:
      "We search daily across every major market — on-market, pre-market, and off-market. Properties are screened against your brief before they reach you, so you're only reviewing options that genuinely fit.",
    bullets: [
      "Daily monitoring of listings, agent networks, and emerging opportunities nationwide.",
      "Properties screened against your brief before anything is presented to you.",
      "Inspection coordination and on-the-ground review where local insight matters.",
    ],
    bulletsExtended: [
      "Interstate and international buyers supported with video walkthroughs and local reports.",
      "Priority access through agent relationships built over years of active purchasing.",
    ],
    icon: "sourcing",
  },
  {
    title: "Off-market access",
    description:
      "Pre-market and off-market opportunities through our agent network — before they hit the open market.",
    detail:
      "Over 65% of our client purchases never hit the major portals. Through direct agent relationships, we surface motivated vendors and pre-market stock before competition drives prices up.",
    bullets: [
      "Direct relationships with selling agents across key markets Australia-wide.",
      "Early access to properties before advertising, open homes, or competition builds.",
      "Exclusive briefings on motivated vendors and pre-market stock.",
    ],
    bulletsExtended: [
      "Vendor motivation assessed so you know when there's genuine room to negotiate.",
      "Quiet sales coordinated discreetly — ideal for buyers who want to move fast.",
    ],
    icon: "offmarket",
  },
  {
    title: "Due diligence",
    description:
      "Checks on title, contracts, building reports, and investment fundamentals before you commit.",
    detail:
      "Before you exchange, we verify the fundamentals — contract terms, building condition, title issues, and investment metrics — so there are no surprises after you've committed.",
    bullets: [
      "Contract and special condition review to protect your interests at exchange.",
      "Building, pest, and strata report coordination where applicable.",
      "Investment metrics — rental return, cash flow, and growth potential — verified before purchase.",
    ],
    bulletsExtended: [
      "Title, easement, and zoning checks to flag issues before you sign.",
      "Independent building and pest inspections arranged and reviewed on your behalf.",
    ],
    icon: "diligence",
  },
  {
    title: "Negotiation & auctions",
    description:
      "Negotiation and offer advice to keep the price right and terms reasonable — so you don't overpay.",
    detail:
      "We negotiate exclusively for you — not the vendor. Whether it's a private treaty offer or a competitive auction, we set strategy, manage emotion, and fight for the best price and terms.",
    bullets: [
      "Offer strategy and pricing guidance based on market evidence, not emotion.",
      "Professional auction representation so you bid with confidence and discipline.",
      "Contract terms negotiated to favour you — settlement dates, inclusions, and conditions.",
    ],
    bulletsExtended: [
      "Cooling-off and finance clauses structured to protect you where possible.",
      "Post-exchange support through to settlement — liaising with solicitors and agents.",
    ],
    icon: "negotiation",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "A free consultation to understand your goals, timeline, finance position, and what you're looking for in your next purchase.",
  },
  {
    step: "02",
    title: "Search & analysis",
    description:
      "Nationwide sourcing, suburb shortlisting, and due diligence before any property is recommended.",
  },
  {
    step: "03",
    title: "Secure & settle",
    description:
      "Negotiation, auction bidding, contract review, and settlement support through to completion.",
  },
] as const;

export const differentiators = valuePillars;

export const testimonials = [
  {
    quote:
      "I'm so grateful for Amir from Ether Property Hub. From day one he made us feel supported and truly listened to what we were looking for. He was always just a call or text away, answering every question with patience and kindness. I can't recommend him enough.",
    author: "Bigyan Shrestha",
    detail: "Home buyer",
    date: "10 months ago",
    googleUrl: "https://maps.app.goo.gl/wtbLBZUwWvQBSf5Z7",
  },
  {
    quote:
      "Amir guided me expertly during the purchasing journey. He checked in constantly to make sure I was comfortable at every stage. Professional, responsive, and genuinely on my side throughout. Great service — thank you!",
    author: "Adhish Panta",
    detail: "Property buyer",
    date: "a year ago",
    googleUrl: "https://maps.app.goo.gl/1xJaAvdh1uzd3kYV9",
  },
] as const;

export const faqs = [
  {
    question: "What does a buyer's agent do?",
    answer:
      "A buyer's agent represents you — the purchaser — through property search, due diligence, negotiation, and settlement. Unlike a selling agent who works for the vendor, a buyer's agent works for you throughout the buying process.",
  },
  {
    question: "Do you work with first-home buyers and investors?",
    answer:
      "Yes. From family home buyers to interstate and international buyers to seasoned investors, we have the experience and qualifications to suit all needs.",
  },
  {
    question: "Which areas of Australia do you cover?",
    answer:
      "We operate Australia-wide — from Brisbane and the Central Coast to Perth, Melbourne, Dubbo, Mildura and beyond.",
  },
  {
    question: "What does off-market property mean?",
    answer:
      "Off-market properties are sold without public advertising on major portals. Over 65% of our client purchases are never advertised — surfaced through agent relationships before they hit the open market.",
  },
  {
    question: "How does your fee structure work?",
    answer:
      "We discuss pricing upfront in your free discovery call. There are no hidden commissions — you know what you're paying before we begin.",
  },
  {
    question: "What happens in the free consultation?",
    answer:
      "It's a no-obligation call to understand your property goals, current position, and timeline. We'll discuss a tailored solution that's right for you.",
  },
] as const;
