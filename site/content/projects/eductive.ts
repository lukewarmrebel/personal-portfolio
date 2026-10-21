// About the project: Eductive: student mental health platform
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "eductive",
  "group": "strategy",
  "order": 1,
  "title": "Eductive: student mental health platform",
  "oneLine": "A plan for schools and colleges to spot students who are struggling early and get them the right level of help.",
  "tag": "Business plan · EdTech",
  "tags": [
    "Business plan",
    "EdTech",
    "India"
  ],
  "links": [
    {
      "label": "See the prize-winning pitch",
      "href": "/projects/tata-imagination-challenge"
    }
  ],
  "card": {
    "thumb": "/eductive/00_hero.png"
  },
  "tiles": [
    {
      "value": "1st",
      "label": "prize, Tata Imagination Challenge"
    },
    {
      "value": "4",
      "label": "levels of support"
    },
    {
      "value": "265M",
      "label": "students in the market sized"
    }
  ],
  "label": "A business plan and product design, not built. Figures marked \"plan\" come from my plan; the rest are sample data or est.",
  "glance": {
    "problem": "Many students face serious stress, and most never seek help.",
    "users": "Schools and colleges, and their students.",
    "role": "Product and business plan: research, flows, model and roadmap.",
    "outcome": "Won first prize at the Tata Imagination Challenge, a case study competition. Not built."
  },
  "judgment": {
    "used": "Where Eductive fits, the jobs students hire it for, who pays, and my phased plan. A business plan has to answer the market and the money first, and the jobs keep it tied to what a student actually needs.",
    "skipped": "Acceptance criteria, RICE, HEART and an emotional journey. Nothing is built yet, so build specs and usage metrics would be early."
  },
  "solution": {
    "summary": "I designed Eductive as a business plan and product: students track how they feel in private, the app spots when things get worse, and offers help at one of four levels. Institutes pay and see only group trends.",
    "decisions": [
      {
        "decision": "Institutes pay, students stay private",
        "why": "Reach through institutes, trust through privacy",
        "rejected": "Selling only to students"
      },
      {
        "decision": "Four levels of support",
        "why": "Most students need a small step, not therapy",
        "rejected": "Counsellor-only model"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/eductive/1-checkin.svg",
        "caption": "Daily private check-in"
      },
      {
        "src": "/projects/eductive/2-week.svg",
        "caption": "Weekly mood trend"
      }
    ],
    "caption": "My wireframes for the plan. All numbers are sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "market",
        "title": "Where Eductive fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "Students in India",
            "value": "265M (plan)",
            "assumption": "All school and college students"
          },
          {
            "level": "SAM",
            "label": "Private institutes that could buy",
            "value": "421K (plan)",
            "assumption": "Private schools and colleges with budgets"
          },
          {
            "level": "SOM",
            "label": "Pilot institutes in 2 cities, year 1",
            "value": "est.",
            "assumption": "Sold one campus at a time"
          }
        ],
        "positioning": {
          "x": [
            "Individual students",
            "Whole institute"
          ],
          "y": [
            "Self-help only",
            "Matched human support"
          ],
          "points": [
            {
              "name": "Meditation apps",
              "x": 0.15,
              "y": 0.15
            },
            {
              "name": "Online therapy",
              "x": 0.2,
              "y": 0.85
            },
            {
              "name": "Campus counsellor",
              "x": 0.7,
              "y": 0.7
            },
            {
              "name": "Eductive",
              "x": 0.85,
              "y": 0.85,
              "me": true
            }
          ]
        },
        "trends": [
          {
            "value": "16.3%",
            "label": "Growth of the wellness app sector (from my plan)"
          },
          {
            "value": "SEL",
            "label": "Schools adding social and emotional learning"
          },
          {
            "value": "Online care",
            "label": "Therapy online is now normal"
          }
        ],
        "note": "265M, 421K and 16.3% are figures from my plan. SOM is est."
      },
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "I feel low but don't want to tell anyone",
            "want": "a private check-in",
            "so": "I can see if it's getting worse"
          },
          {
            "when": "it does get worse",
            "want": "help that matches how bad it is",
            "so": "I'm not jumping straight to therapy"
          },
          {
            "when": "I run student welfare (institute)",
            "want": "early warning by group, without names",
            "so": "we act before it becomes a crisis"
          }
        ]
      },
      {
        "kind": "tradeoff",
        "title": "Who pays?",
        "criteria": [
          {
            "name": "Reach",
            "weight": 5
          },
          {
            "name": "Student trust",
            "weight": 5
          },
          {
            "name": "Revenue",
            "weight": 3
          },
          {
            "name": "Sales effort",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Students pay (B2C)",
            "scores": [
              2,
              4,
              2,
              4
            ]
          },
          {
            "name": "Institutes pay, students private (B2B2C)",
            "scores": [
              5,
              4,
              4,
              2
            ],
            "chosen": true
          },
          {
            "name": "Institutes pay, full data access",
            "scores": [
              5,
              1,
              5,
              3
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. The plan uses ₹999 a year B2C plus institute bundles."
      },
      {
        "kind": "roadmap",
        "title": "Now, next, later (my 4-phase plan)",
        "now": [
          "MVP: wireframes and institute portal"
        ],
        "next": [
          "Pilot testing with one institute"
        ],
        "later": [
          "Social media sentiment signals",
          "Career guidance"
        ]
      }
    ]
  },
  "flow": {
    "title": "From a check-in to the right help",
    "nodes": [
      {
        "label": "Student does a daily check-in",
        "kind": "start"
      },
      {
        "label": "Mood, stress and journal saved privately"
      },
      {
        "label": "Crisis words or very high stress?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Helpline now; counsellor alerted (level 4)"
        }
      },
      {
        "label": "Weekly report finds the trend"
      },
      {
        "label": "Getting worse for 2+ weeks?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Stay on self-help (level 1)"
        }
      },
      {
        "label": "Offer a mentor or plan (levels 2-3)"
      },
      {
        "label": "Institute sees group trends, no names",
        "kind": "end"
      }
    ],
    "caption": "Data flow from my plan: check-ins and scores become weekly reports and matched support."
  },
  "metrics": {
    "northStar": "Students who got help before a crisis",
    "rows": [
      {
        "name": "Weekly check-ins",
        "target": "est. 50%",
        "how": "Share of enrolled students checking in each week"
      },
      {
        "name": "Support uptake",
        "target": "est. 40%",
        "how": "Share who accept the level they're offered"
      }
    ],
    "tests": [],
    "note": "Not built. Revenue is my plan's projection; other targets are est."
  },
  "next": {
    "items": [
      "Run a one-term pilot with one college"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/eductive/00_hero.png",
        "alt": "Eductive: student mental health platform: screen 1"
      },
      {
        "src": "/eductive/03_emotional_tracker.png",
        "alt": "Eductive: student mental health platform: screen 2"
      },
      {
        "src": "/eductive/07_ai_chatbot.png",
        "alt": "Eductive: student mental health platform: screen 3"
      },
      {
        "src": "/eductive/09_portal.png",
        "alt": "Eductive: student mental health platform: screen 4"
      },
      {
        "src": "/eductive/08_data_flow.png",
        "alt": "Eductive: student mental health platform: screen 5"
      },
      {
        "src": "/eductive/02_solution.png",
        "alt": "Eductive: student mental health platform: screen 6"
      }
    ],
    "paragraphs": [
      "I designed and pitched a B2B2C digital wellness platform for India's student mental health crisis. Over 40% of students face severe depression or stress, and over 80% never seek support. Eductive gives institutions AI-driven non-cognitive behavioural insights (SEL). They can spot, track and act on student mental health before it gets worse."
    ]
  }
};

export default project;
