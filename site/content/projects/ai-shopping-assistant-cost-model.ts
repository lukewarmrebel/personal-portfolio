// About the project: What an AI shopping assistant costs per order
// Schema: src/lib/projectSchema.ts. Facts come from the project's own files; illustrative numbers say "est." or "sample data".
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
  "glance": {
    "problem": "Using the most expensive AI model for every grocery request makes each order cost too much.",
    "users": "A product team running an AI shopping assistant at grocery-delivery scale.",
    "role": "Solo: matched request types to models and built the cost model.",
    "outcome": "A cost spreadsheet and PDF. Built on published AI prices; figures are estimates."
  },
  "problem": {
    "persona": {
      "name": "Rohan, 30, Bengaluru",
      "who": "PM for an AI shopping assistant at a quick-commerce app",
      "context": "Leadership likes the demo. Finance asks: what does each assisted order cost in AI, and does it still make money at 3 million orders a month?",
      "needs": [
        "A cost per order that fits the margin",
        "Quality where it matters: allergies, meal plans, Telugu",
        "One number to watch every day"
      ],
      "frustrations": [
        "The demo runs everything on the biggest model",
        "Per-token prices don't say what an order costs",
        "Cheapest setup fails the hard requests"
      ]
    },
    "jtbd": "When I plan an AI shopping assistant, I want each request sent to the cheapest model that can handle it, so the feature stays under ₹1 an order without failing the requests that matter."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "How I framed it (CIRCLES)",
        "steps": {
          "comprehend": "About ₹4 of profit per order. AI can't eat more than a quarter of it.",
          "identify": "The PM and finance team running the assistant. Shoppers feel speed and quality.",
          "report": "Under ₹1 per order in India, $0.05 in the US, with no quality drop on hard requests.",
          "cut": "Model the 18 request types that make up an assisted order. Skip retries and eval traffic.",
          "list": "All on frontier, all on small, or route each request type to a tier.",
          "evaluate": "Frontier: ₹1.50, over budget. Small: ₹0.10 but unsafe. Routed: ₹0.49.",
          "summarise": "Route by request type, escalate when unsure, and watch the frontier share daily."
        }
      },
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
          },
          {
            "method": "Shopper sessions",
            "who": "Hindi and Telugu first shoppers",
            "howMany": "8",
            "how": "Watch them speak a list and fix the flagged items"
          }
        ],
        "questions": [
          "What share of requests are really “repeat my usual”?",
          "How often does the router send a request one tier up?",
          "Which request types fail on the small model?",
          "How long are voice notes in practice?"
        ],
        "note": "A plan. Traffic shares in the sheet are my assumptions until real logs replace them."
      },
      {
        "kind": "market",
        "title": "Scale and the cost picture",
        "funnel": [
          {
            "level": "TAM",
            "label": "Quick-commerce orders in India each month",
            "value": "Tens of millions (est.)",
            "assumption": "My rough read across the big three apps."
          },
          {
            "level": "SAM",
            "label": "Orders where a shopper uses the assistant",
            "value": "3M a month (est.)",
            "assumption": "The volume input I used in the sheet."
          },
          {
            "level": "SOM",
            "label": "Monthly AI bill for those orders, routed",
            "value": "~₹15 lakh (est.)",
            "assumption": "₹0.49 per order × 3M orders, default inputs."
          }
        ],
        "positioning": {
          "x": [
            "Low cost per order",
            "High cost per order"
          ],
          "y": [
            "Weak on hard requests",
            "Strong on hard requests"
          ],
          "points": [
            {
              "name": "All on small model",
              "x": 0.08,
              "y": 0.15
            },
            {
              "name": "All on mid model",
              "x": 0.4,
              "y": 0.55
            },
            {
              "name": "All on frontier",
              "x": 0.92,
              "y": 0.9
            },
            {
              "name": "Routed (my plan)",
              "x": 0.3,
              "y": 0.85,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Under ₹1 per order",
            "Safe for allergies",
            "Good at Telugu lists",
            "Fast for short lists",
            "Easy to explain"
          ],
          "rows": [
            {
              "name": "All on small model",
              "values": [
                "yes",
                "no",
                "no",
                "yes",
                "yes"
              ]
            },
            {
              "name": "All on mid model",
              "values": [
                "partial",
                "partial",
                "yes",
                "partial",
                "yes"
              ]
            },
            {
              "name": "All on frontier",
              "values": [
                "no",
                "yes",
                "yes",
                "no",
                "yes"
              ]
            },
            {
              "name": "Routed (my plan)",
              "values": [
                "yes",
                "yes",
                "yes",
                "yes",
                "partial"
              ],
              "me": true
            }
          ]
        },
        "trends": [
          {
            "value": "44%",
            "label": "of India requests need no LLM at all: rules or classic ML"
          },
          {
            "value": "2% → 45%",
            "label": "frontier requests vs their share of the routed bill"
          },
          {
            "value": "14%",
            "label": "of the routed bill is speech to text"
          }
        ],
        "note": "Funnel levels are estimates. Trend tiles come from the sheet's default assumptions."
      },
      {
        "kind": "jtbd",
        "title": "Jobs the cost model is hired for",
        "items": [
          {
            "when": "finance asks what an order costs in AI",
            "want": "one number per market",
            "so": "the feature gets funded"
          },
          {
            "when": "a shopper says “wahi bhejo”",
            "want": "no LLM to be called",
            "so": "the one-tap path is free and instant"
          },
          {
            "when": "someone asks about allergies",
            "want": "the best model plus a hard filter",
            "so": "quality never drops where it matters"
          },
          {
            "when": "prices or traffic change",
            "want": "the whole sheet to update from inputs",
            "so": "I can re-plan in minutes"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "An assisted order, request by request",
        "stages": [
          {
            "stage": "Opens app",
            "doing": "Taps “Your usual”",
            "feeling": "good",
            "pain": "An LLM here adds cost, no accuracy",
            "opportunity": "Classic ML reorder, no LLM"
          },
          {
            "stage": "Adds items",
            "doing": "Speaks “2 packet milk…”",
            "feeling": "okay",
            "pain": "Mis-parsed items",
            "opportunity": "Small model, flag unsure items"
          },
          {
            "stage": "Edits",
            "doing": "“bread hata do”",
            "feeling": "okay",
            "pain": "Silent removals",
            "opportunity": "Show every change"
          },
          {
            "stage": "Hard request",
            "doing": "Meal plan or allergy",
            "feeling": "bad",
            "pain": "Small model gets it wrong",
            "opportunity": "Frontier model plus allergen filter"
          },
          {
            "stage": "Checks out",
            "doing": "Reviews basket",
            "feeling": "good",
            "pain": "Voice read-back costs money",
            "opportunity": "Basket on screen only"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How the PM feels as the numbers come in",
        "steps": [
          {
            "step": "Demo",
            "feeling": 2,
            "note": "Looks great"
          },
          {
            "step": "All-frontier cost",
            "feeling": -2,
            "note": "₹1.50, 150% of budget"
          },
          {
            "step": "All-small cost",
            "feeling": 0,
            "note": "Cheap, unsafe"
          },
          {
            "step": "Routed",
            "feeling": 1,
            "note": "₹0.49"
          },
          {
            "step": "Daily dashboard",
            "feeling": 2,
            "note": "One number to watch"
          }
        ],
        "note": "My expected curve while building the model."
      },
      {
        "kind": "rice",
        "title": "Which cost levers first (sample scores, est.)",
        "rows": [
          {
            "item": "Route by request type",
            "reach": 10,
            "impact": 3,
            "confidence": 0.8,
            "effort": 3
          },
          {
            "item": "Classic ML for “repeat my usual”",
            "reach": 8,
            "impact": 2,
            "confidence": 0.9,
            "effort": 2
          },
          {
            "item": "Prompt caching",
            "reach": 9,
            "impact": 1,
            "confidence": 0.7,
            "effort": 1
          },
          {
            "item": "Screen-only basket (no text to speech)",
            "reach": 6,
            "impact": 1,
            "confidence": 0.9,
            "effort": 1
          },
          {
            "item": "Move Telugu lists to the small model",
            "reach": 2,
            "impact": 1,
            "confidence": 0.4,
            "effort": 3
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "What goes in the first version",
        "must": [
          "Router reads every free-form message",
          "Escalate one tier when unsure",
          "Hard allergen filter",
          "Daily frontier-share alert"
        ],
        "should": [
          "Prompt caching",
          "Classic ML reorder and substitutes"
        ],
        "could": [
          "Telugu on the small model once it passes",
          "Cache repeated parses"
        ],
        "wont": [
          "Read the basket aloud",
          "Let any model issue coupons or prices"
        ]
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
      },
      {
        "kind": "acceptance",
        "title": "Routing rules as stories",
        "stories": [
          {
            "story": "Reorder",
            "given": "a shopper taps “Your usual”",
            "when": "the basket is built",
            "then": "the classic reorder model fills it and no LLM is called"
          },
          {
            "story": "Unsure parse",
            "given": "the small model is unsure about one item",
            "when": "the basket shows",
            "then": "that item is flagged with 3 options; if the parse fails, it retries on the mid model"
          },
          {
            "story": "Allergy",
            "given": "a request mentions a peanut allergy",
            "when": "it is routed",
            "then": "it goes to the frontier model and then a hard allergen filter, whatever the model says"
          },
          {
            "story": "Budget alert",
            "given": "the frontier share passes 10% for a day",
            "when": "the dashboard updates",
            "then": "it alerts, because India is over ₹1 per order"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "North star and what drives it",
        "northStar": {
          "name": "AI cost per assisted order, within budget, at the quality bar",
          "detail": "Cheapest setup that still passes every golden set",
          "target": "≤ ₹1 India, ≤ $0.05 US"
        },
        "inputs": [
          {
            "name": "Frontier share of requests",
            "detail": "Biggest cost driver",
            "target": "≤ 2% (est.)"
          },
          {
            "name": "No-LLM share",
            "detail": "Rules and classic ML",
            "target": "≥ 40% (est.)"
          },
          {
            "name": "Escalation rate",
            "detail": "Requests moved one tier up",
            "target": "≤ 10% (est.)"
          },
          {
            "name": "Cache hit share",
            "detail": "Repeated prompt prefix",
            "target": "≥ 50% (est.)"
          }
        ],
        "guardrails": [
          {
            "name": "Golden-set pass rate per tier",
            "target": "≥ 95% (est.)"
          },
          {
            "name": "Allergen filter misses",
            "target": "0"
          },
          {
            "name": "Median reply time, short lists",
            "target": "< 2 s (est.)"
          }
        ],
        "note": "The budgets come from the case study; the rest are my estimates."
      },
      {
        "kind": "heart",
        "title": "HEART for the assistant",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Shoppers trust the basket",
            "signal": "Few edits after a parse",
            "metric": "Edits per assisted order"
          },
          {
            "dimension": "Engagement",
            "goal": "Shoppers speak or type lists",
            "signal": "Assistant requests per order",
            "metric": "Requests per assisted order"
          },
          {
            "dimension": "Adoption",
            "goal": "Shoppers try the assistant",
            "signal": "First assisted order",
            "metric": "% of orders assisted"
          },
          {
            "dimension": "Retention",
            "goal": "It becomes the default",
            "signal": "Assisted order again",
            "metric": "% assisting again in 30 days (target 50%, est.)"
          },
          {
            "dimension": "Task success",
            "goal": "Right basket, first time",
            "signal": "Checked out without changes",
            "metric": "% of baskets (target 80%, est.)"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "Frontier share creeps up",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Daily dashboard, alert at 10%, review what is escalating"
          },
          {
            "risk": "My traffic shares are wrong",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Replace with 30 days of real logs"
          },
          {
            "risk": "Small model fails a hard request",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Escalate when unsure; golden set per tier"
          },
          {
            "risk": "LLM prices change",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Prices are inputs; re-run the sheet each quarter"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Roadmap",
        "now": [
          "Router plus 4 tiers",
          "Hard allergen filter",
          "Daily cost dashboard"
        ],
        "next": [
          "Replace assumptions with real logs",
          "Prompt caching",
          "Golden sets per tier"
        ],
        "later": [
          "Telugu on the small model",
          "Cache repeated parses",
          "Negotiated rates at volume"
        ]
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
  "wireframes": {
    "screens": [
      {
        "src": "/projects/ai-shopping-assistant-cost-model/1-basket.svg",
        "caption": "The customer side: a short spoken list goes to a small model, and unsure items are flagged, not guessed."
      },
      {
        "src": "/projects/ai-shopping-assistant-cost-model/2-routing.svg",
        "caption": "Most grocery requests are easy. Only meal plans and allergy questions reach the frontier model."
      },
      {
        "src": "/projects/ai-shopping-assistant-cost-model/3-dashboard.svg",
        "caption": "The dashboard I would watch daily: cost per order against the ₹1 budget, and the frontier share."
      },
      {
        "src": "/projects/ai-shopping-assistant-cost-model/4-what-if.svg",
        "caption": "Change one input and the bill moves. If the frontier share creeps to 10%, India goes over budget."
      }
    ],
    "caption": "Flat wireframes. Costs are the sheet's default-assumption outputs (est.)."
  },
  "solution": {
    "summary": "I matched each type of grocery request to the cheapest model that can handle it, then checked the bill fits ₹1 an order.",
    "steps": [
      "List 18 request types",
      "Pick a tier each",
      "Model tokens",
      "Add speech",
      "Compare setups",
      "Watch daily"
    ],
    "decisions": [
      {
        "decision": "“Repeat my usual” uses no LLM",
        "why": "It's a prediction from purchase history. An LLM adds cost and delay, not accuracy."
      },
      {
        "decision": "Escalate when unsure",
        "why": "A wrong parse costs more than one step up a tier."
      },
      {
        "decision": "Allergen filter trusts no model",
        "why": "Allergy safety can't depend on a model being right."
      },
      {
        "decision": "Basket on screen, never read aloud",
        "why": "I pay for speech to text but not text to speech.",
        "rejected": "Voice read-back"
      },
      {
        "decision": "Not the cheapest setup",
        "why": "All-small is ₹0.10 but puts meal plans, allergies and Telugu on a model I wouldn't trust.",
        "rejected": "Everything on the small model"
      }
    ]
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
      },
      {
        "name": "Frontier share",
        "target": "≤ 2% (alert at 10%)",
        "how": "Router logs"
      },
      {
        "name": "Escalation rate",
        "target": "≤ 10% (est.)",
        "how": "Requests moved up a tier"
      }
    ],
    "tests": [
      "Each tier passes its golden set before traffic moves down to it",
      "Allergen filter misses: zero",
      "Re-run the sheet monthly with real logs and current prices",
      "Compare routed vs all-mid on 5% of traffic for quality"
    ],
    "note": "Budgets come from the case study; routed costs are the sheet's estimates at default inputs."
  },
  "next": {
    "items": [
      "Swap my assumptions for 30 days of real request logs",
      "Build golden sets for Hinglish, Telugu, meal plans and allergies",
      "Test moving Telugu lists to the small model",
      "Add retries, timeouts and eval traffic to the model"
    ]
  },
  "extra": {
    "note": "Built on published AI prices, not real company data."
  },
  "label": "How I'd plan it. Prices are published list prices; traffic shares and volumes are my assumptions (est.)."
};

export default project;
