// About the project: The Graveyard: 10 Indian tech products that died, and what I'd have done
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "the-graveyard",
  "group": "side",
  "order": 1,
  "title": "The Graveyard: 10 Indian tech products that died, and what I'd have done",
  "oneLine": "A cemetery of Indian apps and AI features that were shut down, each with why it died and what I would have tried instead.",
  "tag": "Website · India",
  "tags": [
    "Website",
    "Side project",
    "India",
    "Post-mortems"
  ],
  "links": [
    {
      "label": "Visit the Graveyard",
      "href": "https://pranav-graveyard.sites.tab.bot/"
    }
  ],
  "tiles": [
    {
      "value": "10",
      "label": "products that died"
    },
    {
      "value": "4",
      "label": "AI products among them"
    },
    {
      "value": "2",
      "label": "narrowed, not dead"
    },
    {
      "value": "3",
      "label": "live features on my watchlist"
    }
  ],
  "label": "A portfolio exercise. The opinions are mine; I don't work at these companies.",
  "glance": {
    "problem": "Products die all the time, and the lessons get lost.",
    "users": "Anyone curious about why Indian tech products failed, including recruiters.",
    "role": "Solo: research, writing and the site.",
    "outcome": "A live one-page site with 10 tombstones, filters and a watchlist."
  },
  "judgment": {
    "used": "My desk research and the rules for what goes in. A curated site is only as good as its rules.",
    "skipped": "Personas, journey maps, acceptance criteria and HEART. It's a small side project, and those would be heavier than the site."
  },
  "solution": {
    "summary": "A one-page cemetery that reads in two minutes: a grid of tombstones, filters by category, and a corner for live features I'd cut.",
    "decisions": [
      {
        "decision": "One line each for cause and fix",
        "why": "A visitor gets the point in a glance; the memos hold the detail."
      },
      {
        "decision": "Narrowed is its own status",
        "why": "Calling a pivot a death would be unfair and wrong."
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/the-graveyard/1-top.svg",
        "caption": "Filters with counts, then the graves"
      },
      {
        "src": "/projects/the-graveyard/2-card.svg",
        "caption": "Every tombstone has the same 4 parts"
      }
    ],
    "caption": "Flat mocks of the live page."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "research",
        "mode": "findings",
        "title": "Desk research: what the 10 deaths have in common",
        "methods": [
          {
            "method": "Shortlist",
            "who": "Indian apps and features shut 2023 to 2026",
            "howMany": "10",
            "how": "AI first, then fintech, food and mobility"
          },
          {
            "method": "Fact check",
            "who": "One dated news report per death",
            "howMany": "10",
            "how": "Only verifiable deaths. Cut back but alive is marked Narrowed"
          }
        ],
        "findings": [
          {
            "group": "Too much, too soon",
            "insight": "Broad before useful",
            "evidence": "Kruti launched with 13 languages and many jobs, and got under 500,000 downloads."
          },
          {
            "group": "Too much, too soon",
            "insight": "Fixed cost before demand",
            "evidence": "Zomato Instant, Quick and Legends never found dense enough demand."
          },
          {
            "group": "Trust broke",
            "insight": "The pitch outran the product",
            "evidence": "Builder.ai sold AI-built apps the tech didn't match."
          }
        ],
        "note": "Desk research from public reporting, not user research."
      },
      {
        "kind": "moscow",
        "title": "Rules for what goes in",
        "must": [
          "A real, verifiable death or cut",
          "A dated news report behind it",
          "An alternative, not just hindsight"
        ],
        "should": [
          "AI products up front",
          "Indian products or founders"
        ],
        "could": [
          "A memo link where I wrote one",
          "A watchlist of live features"
        ],
        "wont": [
          "Rumours or leaks",
          "Calling a pivot a death",
          "Mocking the people who built it"
        ]
      }
    ]
  },
  "flow": {
    "title": "How a product gets a tombstone",
    "nodes": [
      {
        "label": "Spot a product that was shut or pulled",
        "kind": "start"
      },
      {
        "label": "Is there a dated news report?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Leave it out. No rumours."
        }
      },
      {
        "label": "Is it gone, or only cut back?",
        "kind": "decision",
        "side": {
          "label": "Cut back",
          "text": "Mark it Narrowed, not Dead."
        }
      },
      {
        "label": "Write cause of death in one sentence",
        "kind": "step"
      },
      {
        "label": "Write what I'd have done in one sentence",
        "kind": "step"
      },
      {
        "label": "Add an epitaph, dates and a category",
        "kind": "end"
      }
    ],
    "caption": "Facts first, opinion second, and the opinion always offers an alternative."
  },
  "metrics": {
    "rows": [
      {
        "name": "Tombstones with a dated report",
        "target": "10 of 10",
        "how": "Checked before publishing"
      },
      {
        "name": "Pages that fit a 390px phone",
        "target": "No overflow",
        "how": "Rendered and checked on a phone width"
      }
    ],
    "tests": [
      "Every news link checked before publishing"
    ]
  },
  "next": {
    "items": [
      "Add new deaths as they're reported",
      "Write a full memo for one AI grave, starting with Kruti"
    ]
  },
  "extra": {
    "paragraphs": [
      "Ten Indian tech products and features that were shut down or pulled, from AI assistants to 10-minute food delivery. Each one gets a short epitaph, the cause of death in one line, and what I would have done differently.",
      "You can filter by AI, fintech, food and mobility. A small corner at the end lists features that are still alive but on my watchlist, linked to my teardowns."
    ]
  }
};

export default project;
