// About the project: Centrico: find an interior designer
// Project page. Built from the site's bullets and the live prototype. How I approached it; illustrative numbers are sample data or est.
// Schema: src/lib/projectSchema.ts
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
  "glance": {
    "problem": "Homeowners find it hard to discover and compare interior designers.",
    "users": "Homeowners planning interiors, and the designers they hire.",
    "role": "Research, scoping and AI-assisted prototype.",
    "outcome": "A working prototype, built in 2 weeks."
  },
  "problem": {
    "persona": {
      "name": "Ananya, first-time home owner",
      "who": "Just bought a 2BHK flat and needs it done up (illustrative persona)",
      "context": "She finds designers through friends and Instagram. She can't tell who fits her budget or style until after several calls.",
      "needs": [
        "See styles and past work in one place",
        "Know prices before calling",
        "Compare a few designers side by side",
        "Book a first meeting easily"
      ],
      "frustrations": [
        "Hidden pricing",
        "Instagram pages with no real projects",
        "Calls that go nowhere",
        "Fear of a bad, costly choice"
      ]
    },
    "jtbd": "When I'm ready to do up my new home, I want to shortlist designers who fit my style and budget, so I only spend time meeting the right two or three."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "Framing the problem with CIRCLES",
        "steps": {
          "comprehend": "Finding and comparing interior designers is slow and based on word of mouth.",
          "identify": "Home owners doing a first fit-out; designers seeking good leads.",
          "report": "Clear prices, real portfolios, side-by-side compare, easy booking.",
          "cut": "Discovery is the core pain. Booking and portfolios support it.",
          "list": "Designer search and filters, portfolio pages, free consultation booking, designer dashboard.",
          "evaluate": "Full project management is bigger value but far more to build. Start with matching.",
          "summarise": "A marketplace that gets home owners to the right designer fast."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (interviews not done; desk research done)",
        "methods": [
          {
            "method": "Desk research",
            "who": "Market size and existing apps",
            "howMany": "Done",
            "how": "Sized the market and mapped players in the 2 weeks"
          },
          {
            "method": "Interviews",
            "who": "People who did interiors in the last year",
            "howMany": "8",
            "how": "How did you find and pick your designer?"
          },
          {
            "method": "Interviews",
            "who": "Independent designers",
            "howMany": "5",
            "how": "Where do your leads come from today?"
          },
          {
            "method": "Prototype test",
            "who": "Home owners",
            "howMany": "5",
            "how": "Shortlist and book with the prototype"
          }
        ],
        "findings": [
          {
            "insight": "Discovery is the biggest pain",
            "evidence": "What my persona and market work pointed to",
            "group": "Need"
          },
          {
            "insight": "Price is the first filter",
            "evidence": "Hypothesis to test in interviews",
            "group": "Choice"
          },
          {
            "insight": "Designers want better leads, not more",
            "evidence": "Hypothesis to test with designers",
            "group": "Supply"
          }
        ],
        "questions": [
          "How did you find your designer? How many did you talk to?",
          "When did you first learn the price?",
          "What made you trust the one you picked?",
          "(Designers) What makes a lead worth your time?"
        ],
        "note": "Interview findings are hypotheses until tested."
      },
      {
        "kind": "market",
        "title": "Where Centrico fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "Home interiors spend in India",
            "value": "est.",
            "assumption": "A large, fragmented market"
          },
          {
            "level": "SAM",
            "label": "Urban new-home buyers hiring a designer",
            "assumption": "Mostly metro apartments"
          },
          {
            "level": "SOM",
            "label": "Hyderabad and Bengaluru home owners, year 1",
            "assumption": "Start city by city to keep supply dense"
          }
        ],
        "positioning": {
          "x": [
            "Find anyone",
            "Matched to my budget and style"
          ],
          "y": [
            "Listings only",
            "Book and manage"
          ],
          "points": [
            {
              "name": "Social media",
              "x": 0.2,
              "y": 0.15
            },
            {
              "name": "Home services apps",
              "x": 0.35,
              "y": 0.6
            },
            {
              "name": "Full-service interior brands",
              "x": 0.55,
              "y": 0.9
            },
            {
              "name": "Centrico",
              "x": 0.85,
              "y": 0.65,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Prices up front",
            "Real portfolios",
            "Compare designers",
            "Book a meeting",
            "Choice of independents"
          ],
          "rows": [
            {
              "name": "Social media",
              "values": [
                "no",
                "partial",
                "no",
                "no",
                "yes"
              ]
            },
            {
              "name": "Home services apps",
              "values": [
                "partial",
                "partial",
                "partial",
                "yes",
                "partial"
              ]
            },
            {
              "name": "Full-service brands",
              "values": [
                "partial",
                "yes",
                "no",
                "yes",
                "no"
              ]
            },
            {
              "name": "Centrico",
              "values": [
                "yes",
                "yes",
                "yes",
                "yes",
                "yes"
              ],
              "me": true
            }
          ]
        },
        "trends": [
          {
            "value": "New homes",
            "label": "Steady flow of new city apartments needing fit-outs"
          },
          {
            "value": "Online first",
            "label": "People research designers online before calling"
          },
          {
            "value": "Independents",
            "label": "Many designers work solo and need leads"
          }
        ],
        "note": "Categories, not named companies. Sizes are directional (est.)."
      },
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
        "kind": "journey",
        "title": "Finding a designer today",
        "stages": [
          {
            "stage": "Search",
            "doing": "Asks friends, scrolls Instagram",
            "feeling": "okay",
            "pain": "Scattered, hard to judge",
            "opportunity": "One place with filters"
          },
          {
            "stage": "Shortlist",
            "doing": "Calls 5 to 6 designers",
            "feeling": "bad",
            "pain": "Prices only revealed on calls",
            "opportunity": "Prices on the profile"
          },
          {
            "stage": "Compare",
            "doing": "Notes quotes on paper",
            "feeling": "bad",
            "pain": "Apples to oranges",
            "opportunity": "Side-by-side compare"
          },
          {
            "stage": "Meet",
            "doing": "Books site visits",
            "feeling": "okay",
            "pain": "Back-and-forth on timing",
            "opportunity": "Book a slot online"
          },
          {
            "stage": "Decide",
            "doing": "Picks one",
            "feeling": "good",
            "pain": "Still unsure",
            "opportunity": "Reviews from past clients"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How Ananya feels choosing a designer",
        "steps": [
          {
            "step": "Starts search",
            "feeling": 1,
            "note": "Excited"
          },
          {
            "step": "Too many options",
            "feeling": -1,
            "note": "Overwhelmed"
          },
          {
            "step": "Filters by budget",
            "feeling": 1,
            "note": "Manageable"
          },
          {
            "step": "Compares 2",
            "feeling": 1,
            "note": "Clearer"
          },
          {
            "step": "Books a call",
            "feeling": 2,
            "note": "Real progress"
          }
        ],
        "note": "The dip is choice overload. Budget and style filters fix it early."
      },
      {
        "kind": "rice",
        "title": "What to build first (sample scores, est.)",
        "rows": [
          {
            "item": "Designer search with filters",
            "reach": 10,
            "impact": 3,
            "confidence": 0.8,
            "effort": 3
          },
          {
            "item": "Portfolio pages",
            "reach": 9,
            "impact": 2,
            "confidence": 0.8,
            "effort": 2
          },
          {
            "item": "Consultation booking",
            "reach": 6,
            "impact": 3,
            "confidence": 0.6,
            "effort": 2
          },
          {
            "item": "Compare view",
            "reach": 6,
            "impact": 2,
            "confidence": 0.6,
            "effort": 1
          },
          {
            "item": "Designer dashboard",
            "reach": 4,
            "impact": 2,
            "confidence": 0.5,
            "effort": 3
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in days. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "Scope for the 2-week MVP",
        "must": [
          "Search by style and budget",
          "Portfolio pages",
          "Book a free consultation"
        ],
        "should": [
          "Compare designers",
          "Designer sign-up"
        ],
        "could": [
          "Reviews",
          "Designer dashboard"
        ],
        "wont": [
          "Payments and project tracking",
          "Material shopping"
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
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria",
        "stories": [
          {
            "story": "Filter designers",
            "given": "designers listed in my city",
            "when": "I set style and budget",
            "then": "only designers matching both are shown, with starting prices"
          },
          {
            "story": "See real work",
            "given": "a designer's profile",
            "when": "I open it",
            "then": "I see past projects with budget and timeline"
          },
          {
            "story": "Book",
            "given": "a designer with open slots",
            "when": "I pick a time and add home details",
            "then": "the booking is confirmed and both sides get the details"
          },
          {
            "story": "Compare",
            "given": "two shortlisted designers",
            "when": "I tap compare",
            "then": "I see price, style, timeline and rating side by side"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "Metric tree (targets are est.)",
        "northStar": {
          "name": "Consultations that turn into projects",
          "detail": "Per month",
          "target": "est. 25%"
        },
        "inputs": [
          {
            "name": "Search to shortlist",
            "detail": "2+ designers saved",
            "target": "est. 40%"
          },
          {
            "name": "Shortlist to booking",
            "detail": "Free consultation booked",
            "target": "est. 30%"
          },
          {
            "name": "Designer response time",
            "detail": "Confirms a booking",
            "target": "est. < 24 h"
          },
          {
            "name": "Active designers",
            "detail": "With open slots",
            "target": "est. 50 per city"
          }
        ],
        "guardrails": [
          {
            "name": "No-show rate",
            "target": "est. < 15%"
          },
          {
            "name": "Complaints per project",
            "target": "est. < 5%"
          }
        ],
        "note": "Targets are est. The prototype has no real users."
      },
      {
        "kind": "heart",
        "title": "HEART for Centrico (illustrative)",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Owners feel confident in their pick",
            "signal": "Rating after consultation",
            "metric": "Average rating out of 5"
          },
          {
            "dimension": "Engagement",
            "goal": "People explore before booking",
            "signal": "Profiles viewed",
            "metric": "Profiles viewed per session"
          },
          {
            "dimension": "Adoption",
            "goal": "First booking",
            "signal": "Consultation booked",
            "metric": "% of sign-ups booking within 7 days"
          },
          {
            "dimension": "Retention",
            "goal": "Designers stay active",
            "signal": "Slots updated",
            "metric": "% designers active monthly"
          },
          {
            "dimension": "Task success",
            "goal": "Right match, fast",
            "signal": "Project signed",
            "metric": "% consultations turning into projects"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "Too few designers in a city",
            "likelihood": "high",
            "impact": "high",
            "mitigation": "Launch one city at a time; sign up designers by hand"
          },
          {
            "risk": "Owner and designer go off-platform",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Charge designers per qualified lead, not per project"
          },
          {
            "risk": "Fake or inflated portfolios",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Verify projects with client contact before showing"
          },
          {
            "risk": "Prices shown don't match quotes",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Show ranges and update from real quotes"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Now, next, later",
        "now": [
          "Search and filters",
          "Portfolio pages",
          "Consultation booking"
        ],
        "next": [
          "Compare view",
          "Reviews",
          "Designer dashboard"
        ],
        "later": [
          "Payments and milestones",
          "Material suggestions",
          "Second city"
        ]
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
      },
      {
        "src": "/projects/centrico/4-designer.svg",
        "caption": "Designer's view of new leads"
      }
    ],
    "caption": "My wireframes of the 3 key flows plus the designer side. Names and prices are sample data."
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
      "Concierge test: match 10 real owners with designers by hand",
      "Designer test: will 10 designers list prices publicly?"
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
  "label": "How I approached it. A 2-week prototype; designers, prices and numbers on this page are sample data or est.",
  "extra": {
    "highlights": [
      "Ran market sizing and persona research to identify designer discovery as the core pain point",
      "Designed 3 key flows: designer discovery, consultation booking, and portfolio showcase",
      "Built working MVP using AI-assisted rapid prototyping"
    ],
    "skills": [
      "Market Research",
      "User Research",
      "Wireframing",
      "GTM Strategy",
      "AI Prototyping",
      "Customer Journey Map"
    ],
    "paragraphs": [
      "I took an interior design marketplace from 0 to 1. It connects homeowners with designers. I led the market research, mapped the customer journey, scoped the MVP and built quick prototypes with AI code editors. I tested the full GTM hypothesis in 2 weeks."
    ]
  }
};

export default project;
