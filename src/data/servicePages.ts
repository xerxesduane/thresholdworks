import {
  Boxes,
  Code2,
  Bot,
  Search,
  ScanSearch,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface ServiceBullet {
  title: string;
  body: string;
}

export interface ServicePageData {
  slug: string;
  navLabel: string;
  icon: LucideIcon;
  /** <title> tag */
  metaTitle: string;
  /** meta description + og/twitter description */
  metaDescription: string;
  /** og:title / twitter:title */
  ogTitle: string;
  /** Service schema name for JSON-LD */
  jsonLdName: string;
  /** Indicative starting price, e.g. "from AED 4,500". */
  price?: string;
  eyebrow: string;
  h1Lead: string;
  h1Accent: string;
  lede: string;
  bulletsHeading: string;
  bullets: ServiceBullet[];
  forWhoHeading: string;
  forWho: string[];
  /** Matches a CASE_STUDIES client name to show as proof, if any. */
  caseStudyClient?: string;
  /** Service-specific FAQs (rendered on the page + FAQPage JSON-LD). */
  faqs: { q: string; a: string }[];
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "odoo-erp-dubai",
    navLabel: "Odoo / ERP",
    icon: Boxes,
    metaTitle: "Odoo ERP Implementation in Dubai | Threshold Works",
    metaDescription:
      "Odoo ERP setup, configuration, and support for small businesses in Dubai. One system for inventory, sales, invoicing, and CRM, run by a hands-on Odoo administrator. Book a free systems audit.",
    ogTitle: "Odoo ERP Implementation in Dubai",
    jsonLdName: "Odoo ERP Implementation & Administration",
    price: "from AED 12,000",
    eyebrow: "Odoo & ERP · Dubai",
    h1Lead: "Run your whole business on one system,",
    h1Accent: "not five that don't talk.",
    lede: "Odoo ERP implementation in Dubai, set up and run properly. We wire inventory, sales, purchasing, invoicing, and CRM into a single source of truth, then stay on to support it. No bloated rollout you can't use, no consultant who disappears after go-live.",
    bulletsHeading: "What an Odoo build with us looks like",
    bullets: [
      {
        title: "Scoped to how you actually work",
        body: "We configure Odoo around your real workflow, not a generic template. Only the modules you need, switched on in the right order.",
      },
      {
        title: "One source of truth",
        body: "Inventory, sales, purchasing, accounting, and customer data finally live in one place, so nothing falls through the cracks and you stop re-keying the same numbers.",
      },
      {
        title: "Migrated without the chaos",
        body: "We move your existing data in cleanly and test it before launch. Your team keeps working while we build in the background.",
      },
      {
        title: "Run and supported, not abandoned",
        body: "As your Odoo systems administrator, we handle updates, fixes, and new modules as you grow. One number to call, for years.",
      },
    ],
    forWhoHeading: "Who this is for",
    forWho: [
      "Small businesses outgrowing spreadsheets and disconnected apps",
      "Trading, retail, and service companies in the UAE",
      "Teams that need inventory, invoicing, and CRM in one place",
      "Owners who want Odoo run for them, not dumped on them",
    ],
    caseStudyClient: "Blocktec Philippines",
    faqs: [
      {
        q: "How long does an Odoo implementation take?",
        a: "A focused rollout of the core modules usually takes a few weeks. We phase it so your team keeps working while we build, and you see value before everything is switched on.",
      },
      {
        q: "Do I need Odoo Enterprise, or is Community enough?",
        a: "It depends on the modules you actually need. We'll tell you honestly which edition fits, so you're not paying for licenses you won't use.",
      },
      {
        q: "Can you connect Odoo to tools I already use?",
        a: "Yes. We integrate Odoo with your website, payment, and accounting tools so data flows automatically instead of being re-keyed by hand.",
      },
      {
        q: "I already started with Odoo and it's a mess. Can you help?",
        a: "Very common. We audit what's there, fix the configuration, and clean up the data rather than forcing you to start from scratch.",
      },
    ],
  },
  {
    slug: "web-development-dubai",
    navLabel: "Web Development",
    icon: Code2,
    metaTitle: "Web Development in Dubai | Threshold Works",
    metaDescription:
      "Custom websites, web apps, and high-converting landing pages for Dubai small businesses. Fast, mobile-first, SEO-ready, with fixed quotes and no lock-in. Book a free systems audit.",
    ogTitle: "Web Development in Dubai",
    jsonLdName: "Web Development & Web Applications",
    price: "from AED 4,500",
    eyebrow: "Web Development · Dubai",
    h1Lead: "A website that brings in customers,",
    h1Accent: "not one that just sits there.",
    lede: "Web development in Dubai for small businesses that need their site to do real work. Fast, mobile-first websites, custom web apps, and landing pages that load quickly, rank well, and turn visitors into booked enquiries, built honestly, by one trusted partner.",
    bulletsHeading: "What we build",
    bullets: [
      {
        title: "Websites that convert",
        body: "Clear, fast, mobile-first sites designed around one job: turning the right visitor into a lead. Built on solid foundations you own outright.",
      },
      {
        title: "Custom web apps",
        body: "Booking platforms, client portals, member areas, and internal tools, built around the way you run instead of forcing you into someone else's software.",
      },
      {
        title: "Landing pages & funnels",
        body: "Conversion-optimised pages wired to analytics, lead capture, and your CRM, so you can see exactly what your ad spend is doing.",
      },
      {
        title: "Built to be found",
        body: "Server-rendered, fast, and structured for search from day one. The site you're reading is built the same way.",
      },
    ],
    forWhoHeading: "Who this is for",
    forWho: [
      "Businesses whose current site brings in nothing",
      "Owners launching a new product, service, or location",
      "Teams that need a web app or portal, not just a brochure site",
      "Anyone tired of agencies who lock them out of their own site",
    ],
    faqs: [
      {
        q: "How much does a website cost?",
        a: "Every project gets a fixed quote up front after a short scope call, no hourly surprises. Most small-business sites start from a defined package.",
      },
      {
        q: "Will I own the site and the code?",
        a: "Yes, always. Everything is set up in your name and you keep full access to the site, hosting, and accounts, start to finish.",
      },
      {
        q: "Can you work with my existing website?",
        a: "Often, yes. We keep what's worth keeping and rebuild what isn't, rather than forcing a full restart.",
      },
      {
        q: "Is the site mobile-first and built to be found?",
        a: "Yes. Fast, mobile-first, and structured for search from day one, the site you're reading is built the same way.",
      },
    ],
  },
  {
    slug: "ai-automation-dubai",
    navLabel: "AI Automation",
    icon: Bot,
    metaTitle: "AI Automation in Dubai | Threshold Works",
    metaDescription:
      "AI automation in Dubai for small businesses: chatbots, AI workflows, and custom assistants that qualify leads, answer questions, and remove repetitive work. Book a free systems audit.",
    ogTitle: "AI Automation in Dubai",
    jsonLdName: "AI Automation & Custom AI Workflows",
    price: "from AED 6,000",
    eyebrow: "AI & Automation · Dubai",
    h1Lead: "Let AI do the repetitive work,",
    h1Accent: "so you can do the real work.",
    lede: "AI automation in Dubai, built around your business instead of bolted on for show. We design AI workflows, chatbots, and custom assistants that quietly run in the background, answering questions, qualifying leads, and giving you back the hours you've been losing.",
    bulletsHeading: "Where AI actually pays off",
    bullets: [
      {
        title: "Lead qualification on autopilot",
        body: "An assistant that answers common questions, captures details, and routes hot leads to you, day and night, so nothing sits unanswered.",
      },
      {
        title: "Workflows that remove busywork",
        body: "Automate the copy-paste between your tools: enquiries to CRM, invoices to accounting, follow-ups that send themselves.",
      },
      {
        title: "Custom assistants for your team",
        body: "Internal AI tools trained on how your business works, so your staff get answers in seconds instead of digging through documents.",
      },
      {
        title: "Honest about what AI can't do",
        body: "We'll tell you where AI helps and where it's hype. You get the advantage without paying for buzzwords.",
      },
    ],
    forWhoHeading: "Who this is for",
    forWho: [
      "Owners drowning in repetitive admin and enquiries",
      "Teams losing leads because nobody replies fast enough",
      "Businesses curious about AI but unsure where it's worth it",
      "Anyone who wants automation that's actually maintained",
    ],
    faqs: [
      {
        q: "Is AI automation actually worth it for a small business?",
        a: "When it removes repetitive work or catches leads you'd otherwise miss, yes. We'll tell you where it pays off and where it's just hype.",
      },
      {
        q: "Will AI replace my team?",
        a: "No. It handles the repetitive parts so your team spends time on the work that genuinely needs a human.",
      },
      {
        q: "Is my data safe with AI tools?",
        a: "We design around tools and configurations that keep your data private and in your control, and we explain exactly what gets sent where.",
      },
      {
        q: "How do we start with automation?",
        a: "We map your current workflows in the free audit, then automate the highest-impact, lowest-risk steps first.",
      },
    ],
  },
  {
    slug: "seo-dubai",
    navLabel: "SEO",
    icon: Search,
    metaTitle: "SEO Services in Dubai | Threshold Works",
    metaDescription:
      "SEO in Dubai that targets keywords that convert, not vanity rankings. Technical SEO, local search, and content for small businesses, with transparent reporting. Book a free systems audit.",
    ogTitle: "SEO Services in Dubai",
    jsonLdName: "Search Engine Optimisation (SEO)",
    price: "from AED 2,000/month",
    eyebrow: "SEO · Dubai",
    h1Lead: "Get found by people ready to buy,",
    h1Accent: "not just ready to browse.",
    lede: "SEO in Dubai focused on the keywords that actually bring in customers. We fix the technical foundations, sharpen your local search presence, and build content that ranks, then show you, in plain numbers, what it's doing for the business.",
    bulletsHeading: "How we approach SEO",
    bullets: [
      {
        title: "Technical foundations first",
        body: "Fast load times, crawlable pages, clean structured data, and mobile-first builds. The boring fixes that quietly decide whether you rank at all.",
      },
      {
        title: "Local search that wins Dubai",
        body: "Google Business Profile, local landing pages, and the on-page signals that put you in front of nearby customers searching right now.",
      },
      {
        title: "Keywords that convert",
        body: "We target search terms with real buying intent, the ones your competitors waste, instead of chasing traffic that never becomes a customer.",
      },
      {
        title: "Reporting in plain English",
        body: "You see rankings, traffic, and leads in numbers that mean something, with no jargon and no smoke and mirrors.",
      },
    ],
    forWhoHeading: "Who this is for",
    forWho: [
      "Local Dubai businesses invisible in search results",
      "Owners paying for ads but with no organic foundation",
      "Sites that look fine but never get found",
      "Anyone burned by SEO agencies that promised page one",
    ],
    caseStudyClient: "Wellington Cash for Cars",
    faqs: [
      {
        q: "How long until SEO shows results?",
        a: "Technical fixes can help within weeks; competitive rankings typically build over a few months. We focus on keywords that convert, not vanity traffic.",
      },
      {
        q: "Do you guarantee page-one rankings?",
        a: "No one credible can guarantee rankings. We guarantee the right work, transparent reporting, and a focus on terms that actually bring customers.",
      },
      {
        q: "What's included in your SEO work?",
        a: "Technical foundations, local search (Google Business Profile), on-page optimization, and content, all reported in plain numbers you can act on.",
      },
      {
        q: "Can you run Google Ads alongside SEO?",
        a: "Yes. We run Google and Meta ads alongside SEO so you get traffic now and compounding organic growth over time.",
      },
    ],
  },
  {
    slug: "answer-engine-optimization-dubai",
    navLabel: "AEO",
    icon: ScanSearch,
    metaTitle: "Answer Engine Optimization (AEO) in Dubai | Threshold Works",
    metaDescription:
      "AEO in Dubai: get your business quoted by Google AI Overviews, voice assistants, and featured snippets. Answer-first content, structured data, and FAQ schema. Book a free systems audit.",
    ogTitle: "Answer Engine Optimization (AEO) in Dubai",
    jsonLdName: "Answer Engine Optimization (AEO)",
    price: "from AED 2,500/month",
    eyebrow: "AEO · Dubai",
    h1Lead: "Be the answer customers hear,",
    h1Accent: "not the link they scroll past.",
    lede: "Answer Engine Optimization (AEO) in Dubai: we structure your content so Google's AI Overviews, voice assistants, and featured snippets quote you directly, the moment someone asks a question your business can answer.",
    bulletsHeading: "How we win the answer box",
    bullets: [
      {
        title: "Answer-first content",
        body: "We reshape your key pages to answer real questions clearly and concisely, the exact format answer engines lift word-for-word.",
      },
      {
        title: "Structured data & FAQ schema",
        body: "We mark up your pages so search engines can understand, trust, and surface your answers, not just crawl them.",
      },
      {
        title: "Topic & entity authority",
        body: "We build the depth and internal links that make your site the obvious source on the questions that matter to your buyers.",
      },
      {
        title: "Win 'position zero'",
        body: "We target the featured snippets and 'People Also Ask' boxes your competitors leave on the table.",
      },
    ],
    forWhoHeading: "Who this is for",
    forWho: [
      "Businesses losing clicks to Google's AI answer boxes",
      "Service providers people find by asking questions",
      "Owners who want to show up in voice search",
      "Anyone whose FAQs could be earning snippets",
    ],
    faqs: [
      {
        q: "What's the difference between SEO and AEO?",
        a: "SEO gets you ranked in the list of links. AEO gets you quoted as the answer above them, in featured snippets, voice results, and Google's AI Overviews. They work best together.",
      },
      {
        q: "How is AEO different from GEO?",
        a: "AEO targets search answer features (snippets, voice, AI Overviews). GEO targets generative chatbots like ChatGPT and Perplexity. We often run both.",
      },
      {
        q: "Do I need brand-new content for AEO?",
        a: "Usually not. We reshape what you already have into clear, structured answers and add schema, rather than starting from scratch.",
      },
      {
        q: "How do you measure AEO results?",
        a: "We track snippet and 'People Also Ask' wins, Search Console impressions, and where your answers appear, all in plain reporting.",
      },
    ],
  },
  {
    slug: "generative-engine-optimization-dubai",
    navLabel: "GEO",
    icon: Sparkles,
    metaTitle: "Generative Engine Optimization (GEO) in Dubai | Threshold Works",
    metaDescription:
      "GEO in Dubai: become the business ChatGPT, Gemini, and Perplexity recommend. We shape content, entities, and citations so AI engines surface and cite you. Book a free systems audit.",
    ogTitle: "Generative Engine Optimization (GEO) in Dubai",
    jsonLdName: "Generative Engine Optimization (GEO)",
    price: "from AED 3,000/month",
    eyebrow: "GEO · Dubai",
    h1Lead: "Get recommended by the AI tools",
    h1Accent: "your customers now ask first.",
    lede: "Generative Engine Optimization (GEO) in Dubai: more buyers now start with ChatGPT, Gemini, and Perplexity than a search box. We shape your content, entities, and citations so those engines surface, trust, and recommend your business by name.",
    bulletsHeading: "How we get you cited by AI",
    bullets: [
      {
        title: "Citation-worthy content",
        body: "We create the clear, factual, well-sourced content generative engines prefer to quote, with the specifics they need to recommend you.",
      },
      {
        title: "Entity & authority signals",
        body: "We strengthen how AI models understand who you are, what you do, and why you're credible, across the web, not just your own site.",
      },
      {
        title: "Presence where models read",
        body: "We get your business represented in the directories, profiles, and sources these engines actually draw their answers from.",
      },
      {
        title: "Prompt testing & monitoring",
        body: "We test the prompts your buyers really use and track when and how the major AI engines mention you.",
      },
    ],
    forWhoHeading: "Who this is for",
    forWho: [
      "Businesses whose buyers research with ChatGPT or Perplexity",
      "Owners who've noticed AI tools never mention them",
      "Brands that want to be the AI-recommended option",
      "Anyone future-proofing beyond traditional search",
    ],
    faqs: [
      {
        q: "Is GEO real, or just hype?",
        a: "It's early but real: a growing share of buyers ask AI tools for recommendations before they ever Google. GEO makes sure you're in those answers. We're honest that it's an emerging channel, not a magic switch.",
      },
      {
        q: "How is GEO different from SEO and AEO?",
        a: "SEO ranks you in search; AEO wins answer features; GEO gets you surfaced and cited inside generative chatbots like ChatGPT and Perplexity. They overlap and reinforce each other.",
      },
      {
        q: "Can you guarantee ChatGPT will recommend me?",
        a: "No one credible can guarantee what a model outputs. What we can do is meaningfully improve how often and how accurately the major engines surface you, and report on it.",
      },
      {
        q: "How do you measure GEO?",
        a: "We test real buyer prompts across the major AI engines and track mentions, accuracy, and citations over time.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}
