// About the project: Should Zomato have shut its 10-minute food delivery? (2023)
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "zomato-instant-10-minute-delivery",
  "group": "teardowns",
  "order": 4,
  "title": "Should Zomato have shut its 10-minute food delivery? (2023)",
  "oneLine": "My call: don't shut it yet. Drop the 10-minute promise, run one 8-week test near offices and colleges, and close it if it misses the target.",
  "tag": "Zomato · written as of January 2023",
  "tags": [
    "Teardown",
    "Food delivery",
    "Decision memo",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_KillDoc_ZomatoInstant.pdf"
    }
  ],
  "tiles": [
    {
      "value": "8 weeks",
      "label": "one focused test before deciding"
    },
    {
      "value": "270–500",
      "label": "orders a day for a station to break even (est.)"
    },
    {
      "value": "3 of 3",
      "label": "kill criteria a station must pass at week 8"
    },
    {
      "value": "3%",
      "label": "core food GOV growth, QoQ, the quarter before"
    }
  ],
  "label": "A decision memo written as if it were January 2023, with a scorecard added in October 2026. I was not at Zomato. Numbers marked est. are my estimates.",
  "glance": {
    "problem": "Zomato's 10-minute food delivery was costly. Should it shut? (written as of January 2023)",
    "users": "Zomato's leadership, deciding whether to keep or close the service. And office and college eaters.",
    "role": "Solo: unit math, options, recommendation, kill criteria and comms plan.",
    "outcome": "A memo: don't shut it yet; run one 8-week test, then decide. Later scored against what happened."
  },
  "judgment": {
    "used": "A weighted trade-off between three options, pass or fail criteria for the 8-week test, a metric tree and a risk list. The call is keep or close, so the options, the kill bar and what could go wrong are what matter.",
    "skipped": "Journey maps, an emotional journey, HEART and a market size. They describe the product, and the memo is about one decision."
  },
  "solution": {
    "summary": "Speed is what you get when the menu is small enough to pre-stage, and that only works where demand is dense. So I'd stop promising minutes and test the one dense case.",
    "decisions": [
      {
        "decision": "Say “close and fast”, never a number",
        "why": "The clock is what people heard, and what partners kept missing."
      },
      {
        "decision": "Narrow, not kill",
        "why": "Two more months of stations (₹32–48 lakh, est.) buys a clear answer and keeps the kitchen learning.",
        "rejected": "Shut everything this month"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/zomato-instant-10-minute-delivery/1-before.svg",
        "caption": "Before: a minute count and a snack menu"
      },
      {
        "src": "/projects/zomato-instant-10-minute-delivery/2-menu.svg",
        "caption": "Test: weekday meals, no minute count"
      }
    ],
    "caption": "Flat wireframes with mock menus and sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "tradeoff",
        "title": "Three options, weighted",
        "criteria": [
          {
            "name": "Cash burn (low is good)",
            "weight": 3
          },
          {
            "name": "Learning kept",
            "weight": 2
          },
          {
            "name": "Chance of a real business",
            "weight": 3
          },
          {
            "name": "Brand and safety risk (low is good)",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Kill now",
            "scores": [
              5,
              1,
              1,
              3
            ]
          },
          {
            "name": "Narrow and test",
            "scores": [
              4,
              4,
              3,
              4
            ],
            "chosen": true
          },
          {
            "name": "Keep and scale",
            "scores": [
              1,
              4,
              2,
              1
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement from the memo, not measured."
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria for the test",
        "stories": [
          {
            "story": "No clock",
            "given": "I'm a customer in a test area",
            "when": "I see the menu or track an order",
            "then": "no minute count is shown, only “close by”"
          },
          {
            "story": "Weekday menu",
            "given": "it's a weekday, 7 am to 3 pm",
            "when": "I open the station menu",
            "then": "I see a fixed breakfast or lunch menu, priced for daily repeat"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "Metric tree",
        "northStar": {
          "name": "Weekday orders a day per station",
          "detail": "The fixed cost only works with volume",
          "target": "300+ (est.)"
        },
        "inputs": [
          {
            "name": "First-time buyers who reorder in 30 days",
            "detail": "Is it a habit or a novelty?",
            "target": "35%+ (est.)"
          },
          {
            "name": "Lunch-peak orders per office cluster",
            "detail": "Where demand is dense",
            "target": "sample data"
          },
          {
            "name": "Average order value",
            "detail": "Low on purpose, for daily repeat",
            "target": "₹80–100 (est.)"
          },
          {
            "name": "Station prep accuracy",
            "detail": "Forecast vs dishes sold",
            "target": "90%+ (est.)"
          }
        ],
        "guardrails": [
          {
            "name": "Contribution per order after rider cost",
            "target": "positive"
          },
          {
            "name": "Rider safety incidents",
            "target": "0 linked to speed"
          }
        ],
        "note": "Targets are my estimates. All three of the first ones must hold at week 8."
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "A cheap menu also doesn't scale",
            "likelihood": "high",
            "impact": "high",
            "mitigation": "Hard week-8 kill criteria, no extensions"
          },
          {
            "risk": "“Zomato gave up” headlines",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "New name, new menu, one holding line for press"
          },
          {
            "risk": "Partners lose money on stations",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Call each partner first; settle dues on a set date"
          },
          {
            "risk": "Demand exists outside offices",
            "likelihood": "low",
            "impact": "medium",
            "mitigation": "Check every micro-market's data before closing"
          }
        ]
      }
    ]
  },
  "flow": {
    "title": "How I'd make the call",
    "nodes": [
      {
        "label": "Ordering off; stations are a fixed cost",
        "kind": "start"
      },
      {
        "label": "Any micro-market near break-even outside offices?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Then I'd argue to keep Instant as it was. None was (est.)."
        }
      },
      {
        "label": "Drop the 10-minute brand",
        "kind": "step"
      },
      {
        "label": "8 weeks: weekday meals near offices and colleges",
        "kind": "step"
      },
      {
        "label": "Week 8: all 3 criteria hold?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Close the stations. Keep the forecasting."
        }
      },
      {
        "label": "Add one more office cluster, carefully",
        "kind": "end"
      }
    ],
    "caption": "The criteria are set before the test starts, so the answer can't be argued later."
  },
  "next": {
    "items": [
      "Scorecard: my call matched what Zomato did in 2023. I was right to drop the promise and wrong about the asset."
    ]
  },
  "extra": {
    "paragraphs": [
      "What actually happened (added October 2026): ordering stayed off, and in February 2023 Zomato launched Everyday in Gurugram, home-style meals from ₹89 in 10 to 15 minutes, from Instant's stations. It shut in May 2025 as a limited use case for office locations. That is my test failing, slowly.",
      "Where I was wrong: demand. Swiggy's Bolt used existing restaurants within 2 km and fast-prep items, no kitchens of its own, and grew fast. Zomato's own 15-minute tab, Quick, shut after about four months. Restaurant density, not stations, was the asset."
    ]
  }
};

export default project;
