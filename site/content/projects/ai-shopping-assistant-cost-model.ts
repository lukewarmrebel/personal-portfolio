// About the project: What an AI shopping assistant costs per order
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "ai-shopping-assistant-cost-model",
  "group": "ai-testing",
  "order": 2,
  "title": "What an AI shopping assistant costs per order",
  "oneLine": "I matched each type of grocery request to the cheapest AI model that can handle it. Simple requests go to small models. Only meal plans and allergy questions use the most expensive one.",
  "tag": "Spreadsheet · Grocery delivery",
  "tags": [
    "Spreadsheet",
    "AI cost",
    "Grocery delivery"
  ],
  "links": [
    {
      "label": "Open the spreadsheet",
      "href": "/work/sheets/Pranav_TheUsual_ModelRouting_CostModel.xlsx"
    },
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_TheUsual_ModelRouting_CostModel.pdf"
    },
    {
      "label": "Related case study",
      "href": "/case-studies/the-usual"
    }
  ],
  "card": {
    "bars": {
      "title": "AI cost per order in India (estimate)",
      "rows": [
        {
          "label": "Most expensive model for everything",
          "value": "₹1.50",
          "pct": 100,
          "muted": true
        },
        {
          "label": "Right-sized model per request",
          "value": "₹0.49",
          "pct": 33
        }
      ],
      "note": "About two-thirds cheaper, and under my budget of ₹1 per order."
    }
  },
  "tiles": [
    {
      "value": "₹1.50 → ₹0.49",
      "label": "AI cost per order (est.)"
    },
    {
      "value": "₹1",
      "label": "my budget per order"
    }
  ],
  "label": "How I'd plan it. Prices are published list prices; traffic shares and volumes are my assumptions (est.).",
  "glance": {
    "problem": "Using the most expensive AI model for every grocery request makes each order cost too much.",
    "users": "A product team running an AI shopping assistant at grocery-delivery scale.",
    "role": "Solo: matched request types to models and built the cost model.",
    "outcome": "A cost spreadsheet and PDF. Built on published AI prices; figures are estimates."
  },
  "judgment": {
    "used": "A trade-off between setups, the routing flow, and the list of assumptions I'd replace first. In a cost model the assumptions are the work, so they stay in view.",
    "skipped": "Journey maps, an emotional journey, HEART, CIRCLES and RICE. Shoppers never see which model answers them, so their feelings don't change the routing."
  },
  "solution": {
    "summary": "I matched each type of grocery request to the cheapest model that can handle it, then checked the bill fits ₹1 an order.",
    "decisions": [
      {
        "decision": "“Repeat my usual” uses no LLM",
        "why": "It's a prediction from purchase history. An LLM adds cost and delay, not accuracy."
      },
      {
        "decision": "Escalate when unsure",
        "why": "A wrong parse costs more than one step up a tier."
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/ai-shopping-assistant-cost-model/1-basket.svg",
        "caption": "The customer side: a short spoken list goes to a small model, and unsure items are flagged, not guessed."
      },
      {
        "src": "/projects/ai-shopping-assistant-cost-model/2-routing.svg",
        "caption": "Most grocery requests are easy. Only meal plans and allergy questions reach the frontier model."
      }
    ],
    "caption": "Flat wireframes. Costs are the sheet's default-assumption outputs (est.)."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (assumptions to replace)",
        "methods": [
          {
            "method": "Log analysis",
            "who": "First 30 days of assistant requests",
            "howMany": "All traffic",
            "how": "Replace my traffic shares, tokens per call and voice share with real numbers"
          },
          {
            "method": "Golden sets",
            "who": "Hinglish and Telugu lists, meal plans, allergy requests",
            "howMany": "200 per tier",
            "how": "Check each tier meets the quality bar before moving traffic down"
          }
        ],
        "note": "A plan. Traffic shares in the sheet are my assumptions until real logs replace them."
      },
      {
        "kind": "tradeoff",
        "title": "Which setup to run",
        "criteria": [
          {
            "name": "Quality on hard requests",
            "weight": 5
          },
          {
            "name": "Cost per order",
            "weight": 4
          },
          {
            "name": "Speed",
            "weight": 3
          },
          {
            "name": "Simple to run",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "All on frontier",
            "scores": [
              5,
              1,
              2,
              5
            ]
          },
          {
            "name": "All on small",
            "scores": [
              1,
              5,
              5,
              5
            ]
          },
          {
            "name": "Routed by request type",
            "scores": [
              5,
              4,
              4,
              3
            ],
            "chosen": true
          }
        ],
        "note": "Scores 1 to 5 are my judgement. Routing costs some complexity and wins on everything else."
      }
    ]
  },
  "flow": {
    "title": "How a request finds its model",
    "nodes": [
      {
        "label": "Shopper taps, speaks or types",
        "kind": "start"
      },
      {
        "label": "Is it a tap (usual, nudge, substitute)?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Rules or classic ML. No LLM, free and instant."
        }
      },
      {
        "label": "Small router model reads the message and picks a tier",
        "kind": "step"
      },
      {
        "label": "Is the router sure?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Move one tier up."
        }
      },
      {
        "label": "Low, mid or frontier model answers",
        "kind": "step"
      },
      {
        "label": "Allergy request?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Hard allergen filter runs, whatever the model said."
        }
      },
      {
        "label": "Basket shown on screen to confirm",
        "kind": "end"
      }
    ],
    "caption": "Only meal plans and allergy requests reach the frontier model: 2% of India requests."
  },
  "metrics": {
    "northStar": "AI cost per assisted order, inside budget, at the quality bar",
    "rows": [
      {
        "name": "Cost per order, India",
        "target": "≤ ₹1 (routed est. ₹0.49)",
        "how": "Daily, from token and speech logs"
      },
      {
        "name": "Cost per order, US",
        "target": "≤ $0.05 (routed est. $0.027)",
        "how": "Same"
      }
    ],
    "tests": [
      "Each tier passes its golden set before traffic moves down to it"
    ],
    "note": "Budgets come from the case study; routed costs are the sheet's estimates at default inputs."
  },
  "next": {
    "items": [
      "Swap my assumptions for 30 days of real request logs",
      "Build golden sets for Hinglish, Telugu, meal plans and allergies"
    ]
  }
};

export default project;
