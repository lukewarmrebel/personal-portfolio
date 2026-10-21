// About the project: Centrico: find an interior designer
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "centrico",
  "group": "strategy",
  "order": 2,
  "title": "Centrico: find an interior designer",
  "oneLine": "A marketplace that helps homeowners find, compare and book interior designers. Researched, scoped and prototyped in 2 weeks.",
  "tag": "Prototype · Marketplace",
  "tags": [
    "Prototype",
    "Marketplace",
    "India"
  ],
  "links": [
    {
      "label": "Open the prototype",
      "href": "https://interio.combini.app"
    }
  ],
  "tiles": [
    {
      "value": "2 weeks",
      "label": "research to MVP"
    },
    {
      "value": "3",
      "label": "key flows designed"
    }
  ],
  "label": "How I approached it. A 2-week prototype; designers, prices and numbers on this page are sample data or est.",
  "glance": {
    "problem": "Homeowners find it hard to discover and compare interior designers.",
    "users": "Homeowners planning interiors, and the designers they hire.",
    "role": "Research, scoping and AI-assisted prototype.",
    "outcome": "A working prototype, built in 2 weeks."
  },
  "judgment": {
    "used": "Jobs to be done and one trade-off: which side of the marketplace to build for first. In a marketplace that call decides everything else.",
    "skipped": "HEART, an emotional journey, acceptance criteria and RICE. It's a 2-week prototype, not a build spec, and there were no users to measure."
  },
  "solution": {
    "summary": "In 2 weeks I sized the market, picked discovery as the core pain, and built a working prototype with three flows: find a designer, see their portfolio, and book a consultation.",
    "steps": [
      "Market sizing and personas to find the core pain",
      "Customer journey map to see where people drop",
      "MVP scope: 3 flows only",
      "Prototype built with AI code editors",
      "Next: test with real home owners and designers"
    ],
    "decisions": [
      {
        "decision": "Show prices up front",
        "why": "Price is the first filter for most home owners",
        "rejected": "Prices only after a call"
      },
      {
        "decision": "Start with the home owner side",
        "why": "That's where the pain is; supply can be seeded by hand",
        "rejected": "Designer tools first"
      },
      {
        "decision": "Free first consultation",
        "why": "Lowers the risk of trying a new designer",
        "rejected": "Paid consultations"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/centrico/1-search.svg",
        "caption": "Find designers by style and budget"
      },
      {
        "src": "/projects/centrico/2-portfolio.svg",
        "caption": "Designer portfolio"
      },
      {
        "src": "/projects/centrico/3-book.svg",
        "caption": "Book a free consultation"
      }
    ],
    "caption": "My wireframes of the 3 key flows plus the designer side. Names and prices are sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "I start looking for a designer",
            "want": "to filter by style and budget",
            "so": "I only see people I can afford and like"
          },
          {
            "when": "I have a shortlist",
            "want": "to compare portfolios and prices side by side",
            "so": "I pick who to meet"
          },
          {
            "when": "I'm a designer",
            "want": "leads that match my price range",
            "so": "my calls turn into projects"
          }
        ]
      },
      {
        "kind": "tradeoff",
        "title": "Which side to build for first?",
        "criteria": [
          {
            "name": "Fixes the core pain",
            "weight": 5
          },
          {
            "name": "Easy to seed supply",
            "weight": 4
          },
          {
            "name": "Revenue path",
            "weight": 3
          },
          {
            "name": "Build effort",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Home owner discovery first",
            "scores": [
              5,
              3,
              3,
              4
            ],
            "chosen": true
          },
          {
            "name": "Designer tools first",
            "scores": [
              2,
              5,
              4,
              3
            ]
          },
          {
            "name": "Full project management",
            "scores": [
              4,
              2,
              5,
              1
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. Discovery is where the pain is."
      }
    ]
  },
  "flow": {
    "title": "From search to a booked consultation",
    "nodes": [
      {
        "label": "Home owner opens Centrico",
        "kind": "start"
      },
      {
        "label": "Sets city, style and budget"
      },
      {
        "label": "Any designers match?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Widen budget or get notified"
        }
      },
      {
        "label": "Opens portfolios and shortlists 2 to 3"
      },
      {
        "label": "Compares side by side"
      },
      {
        "label": "Slot available?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Request a time; designer confirms"
        }
      },
      {
        "label": "Free consultation booked",
        "kind": "end"
      }
    ],
    "caption": "Budget and style filters come first, so every later step is a good fit."
  },
  "metrics": {
    "northStar": "Consultations that turn into projects",
    "rows": [
      {
        "name": "Shortlist to booking",
        "target": "est. 30%",
        "how": "Share of users with 2+ saved who book"
      },
      {
        "name": "Designer reply time",
        "target": "est. < 24 h",
        "how": "Booking request to confirmation"
      },
      {
        "name": "No-shows",
        "target": "est. < 15%",
        "how": "Consultations missed by either side"
      }
    ],
    "tests": [
      "Prototype test: 5 home owners shortlist and book, unaided",
      "Concierge test: match 10 real owners with designers by hand"
    ],
    "note": "A 2-week prototype; these targets are est."
  },
  "next": {
    "items": [
      "Run the 5-person prototype test",
      "Sign up 20 designers in one city by hand",
      "Test charging designers per qualified lead"
    ]
  },
  "extra": {
    "paragraphs": [
      "I took an interior design marketplace from 0 to 1. It connects homeowners with designers. I led the market research, mapped the customer journey, scoped the MVP and built quick prototypes with AI code editors. I tested the full GTM hypothesis in 2 weeks."
    ]
  }
};

export default project;
