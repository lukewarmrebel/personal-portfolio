// About the project: The Graveyard. A side project, so this page is lighter: method, categories, and what the pattern teaches.
// Facts come from the live site. No invented numbers.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const W = "/projects/the-graveyard";

const project: ProjectFile = {
  slug: "the-graveyard",
  group: "side",
  order: 1,
  title: "The Graveyard: 10 Indian tech products that died, and what I'd have done",
  oneLine: "A cemetery of Indian apps and AI features that were shut down, each with why it died and what I would have tried instead.",
  tag: "Website · India",
  tags: ["Website", "Side project", "India", "Post-mortems"],
  links: [{ label: "Visit the Graveyard", href: "https://pranav-graveyard.sites.tab.bot/" }],
  tiles: [
    { value: "10", label: "products that died" },
    { value: "4", label: "AI products among them" },
    { value: "2", label: "narrowed, not dead" },
    { value: "3", label: "live features on my watchlist" },
  ],
  label: "A portfolio exercise. The opinions are mine; I don't work at these companies.",
  glance: {
    problem: "Products die all the time, and the lessons get lost.",
    users: "Anyone curious about why Indian tech products failed, including recruiters.",
    role: "Solo: research, writing and the site.",
    outcome: "A live one-page site with 10 tombstones, filters and a watchlist.",
  },
  problem: {
    persona: {
      name: "A hiring manager, between interviews",
      who: "Screens AI PM candidates",
      context: "Has two minutes and wants to see how I think about failure, not another case study.",
      needs: ["Something readable in a glance", "Clear opinions, fairly argued", "Proof I check facts"],
      frustrations: ["Long decks", "Hindsight with no alternative", "Hot takes with no evidence"],
    },
    jtbd: "When I'm judging a PM's product sense, I want to see how they read real failures, so I can tell if they'd spot the next one before it ships.",
  },
  frameworks: {
    blocks: [
      {
        kind: "research",
        mode: "findings",
        title: "Desk research: what the 10 deaths have in common",
        methods: [
          { method: "Shortlist", who: "Indian apps and features shut 2023 to 2026", howMany: "10", how: "AI first, then fintech, food and mobility" },
          { method: "Fact check", who: "One dated news report per death", howMany: "10", how: "Only verifiable deaths. Cut back but alive is marked Narrowed" },
          { method: "Write-up", who: "Each tombstone", howMany: "4 parts", how: "Epitaph, cause of death, what I'd have done, dates" },
        ],
        findings: [
          { group: "Too much, too soon", insight: "Broad before useful", evidence: "Kruti launched with 13 languages and many jobs, and got under 500,000 downloads." },
          { group: "Too much, too soon", insight: "Fixed cost before demand", evidence: "Zomato Instant, Quick and Legends never found dense enough demand." },
          { group: "Trust broke", insight: "The pitch outran the product", evidence: "Builder.ai sold AI-built apps the tech didn't match." },
          { group: "Trust broke", insight: "Abuse or finances killed it", evidence: "UPI collect requests fell to fraud; BluSmart to its parent's finances." },
          { group: "Money and focus", insight: "Funding that never came", evidence: "subtl.ai planned on promised money; Astra split months after raising." },
          { group: "Money and focus", insight: "Strayed from the core", evidence: "PhonePe Pincode went back to serving shops." },
        ],
        note: "Desk research from public reporting, not user research.",
      },
      {
        kind: "moscow",
        title: "Rules for what goes in",
        must: ["A real, verifiable death or cut", "A dated news report behind it", "An alternative, not just hindsight"],
        should: ["AI products up front", "Indian products or founders"],
        could: ["A memo link where I wrote one", "A watchlist of live features"],
        wont: ["Rumours or leaks", "Calling a pivot a death", "Mocking the people who built it"],
      },
      {
        kind: "journey",
        title: "A visitor's two minutes",
        stages: [
          { stage: "Land", doing: "Reads the title and my one line", feeling: "good", pain: "Could feel like a gimmick", opportunity: "Tasteful, flat, no skulls" },
          { stage: "Filter", doing: "Taps AI", feeling: "good", pain: "Too many cards", opportunity: "4 chips with counts" },
          { stage: "Read", doing: "Reads 2 or 3 tombstones", feeling: "good", pain: "Wants the why fast", opportunity: "Cause and fix in one line each" },
          { stage: "Go deeper", doing: "Opens a memo", feeling: "good", pain: "Dead ends", opportunity: "Link to my full kill docs" },
        ],
      },
      {
        kind: "acceptance",
        title: "Acceptance criteria for the site",
        stories: [
          { story: "Filter", given: "I'm on the page", when: "I tap a category chip", then: "only that category's tombstones show, with the count on the chip" },
          { story: "Honest status", given: "a product was cut back but still runs", when: "I read its tombstone", then: "it says Narrowed, not Dead" },
          { story: "Phone first", given: "I'm on a 390px phone", when: "I scroll the graves", then: "they stack in one column with nothing cut off" },
        ],
      },
      {
        kind: "roadmap",
        title: "Roadmap",
        now: ["10 tombstones, filters, watchlist", "Memo links for my kill docs"],
        next: ["Add deaths as they happen", "A “narrowed” to “dead” update when it applies"],
        later: ["A global AI section", "Let visitors suggest a grave"],
      },
    ],
  },
  flow: {
    title: "How a product gets a tombstone",
    nodes: [
      { label: "Spot a product that was shut or pulled", kind: "start" },
      { label: "Is there a dated news report?", kind: "decision", side: { label: "No", text: "Leave it out. No rumours." } },
      { label: "Is it gone, or only cut back?", kind: "decision", side: { label: "Cut back", text: "Mark it Narrowed, not Dead." } },
      { label: "Write cause of death in one sentence", kind: "step" },
      { label: "Write what I'd have done in one sentence", kind: "step" },
      { label: "Add an epitaph, dates and a category", kind: "end" },
    ],
    caption: "Facts first, opinion second, and the opinion always offers an alternative.",
  },
  wireframes: {
    screens: [
      { src: `${W}/1-top.svg`, caption: "Filters with counts, then the graves" },
      { src: `${W}/2-card.svg`, caption: "Every tombstone has the same 4 parts" },
      { src: `${W}/3-watchlist.svg`, caption: "Still alive, on my watchlist" },
    ],
    caption: "Flat mocks of the live page.",
  },
  solution: {
    summary: "A one-page cemetery that reads in two minutes: a grid of tombstones, filters by category, and a corner for live features I'd cut.",
    steps: ["Shortlist", "Fact check", "Write 4 parts", "Build the page", "Check links"],
    decisions: [
      { decision: "One line each for cause and fix", why: "A visitor gets the point in a glance; the memos hold the detail." },
      { decision: "Narrowed is its own status", why: "Calling a pivot a death would be unfair and wrong." },
      { decision: "Witty but fair epitaphs", why: "Every product here had smart people behind it.", rejected: "Roast-style jokes" },
      { decision: "A flat stone look, no skulls", why: "Keeps it tasteful and in my site's palette." },
    ],
  },
  metrics: {
    rows: [
      { name: "Tombstones with a dated report", target: "10 of 10", how: "Checked before publishing" },
      { name: "Pages that fit a 390px phone", target: "No overflow", how: "Rendered and checked on a phone width" },
      { name: "Clicks through to my memos", target: "Sample data", how: "Would track once analytics is on" },
    ],
    tests: [
      "Every news link checked before publishing",
      "Filters show the right count for each category",
    ],
  },
  next: {
    items: [
      "Add new deaths as they're reported",
      "Write a full memo for one AI grave, starting with Kruti",
      "Revisit the Narrowed ones each quarter",
    ],
  },
  extra: {
    note: "A portfolio exercise. The opinions are mine; I don't work at these companies.",
    paragraphs: [
      "Ten Indian tech products and features that were shut down or pulled, from AI assistants to 10-minute food delivery. Each one gets a short epitaph, the cause of death in one line, and what I would have done differently.",
      "You can filter by AI, fintech, food and mobility. A small corner at the end lists features that are still alive but on my watchlist, linked to my teardowns.",
    ],
  },
};

export default project;



