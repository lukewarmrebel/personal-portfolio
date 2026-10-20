// About the project: Tata Imagination Challenge: national winner
// Earlier project: a competition strategy, not a product. Built from the site's bullets. Storefront wireframes show how I'd bring the plan to life; numbers are sample data or est.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "tata-imagination-challenge",
  "group": "earlier",
  "order": 9,
  "title": "Tata Imagination Challenge: national winner",
  "oneLine": "Ranked first in the D2C track with a direct-to-customer plan for a Tata brand, presented to Tata Group leaders.",
  "tag": "Strategy · MBA, IIM Ranchi",
  "tags": [
    "Strategy",
    "MBA",
    "IIM Ranchi"
  ],
  "links": [],
  "tiles": [
    {
      "value": "#1",
      "label": "nationally, D2C track"
    }
  ],
  "glance": {
    "problem": "Plan how a Tata brand could sell direct to customers.",
    "users": "Tata Group leadership (competition judges).",
    "role": "Strategy work during my MBA at IIM Ranchi.",
    "outcome": "Ranked first nationally in the D2C track."
  },
  "problem": {
    "persona": {
      "name": "Priya, urban online shopper",
      "who": "28, buys household and lifestyle brands online (illustrative persona)",
      "context": "She already trusts the Tata name but buys its products through marketplaces and stores. She has no reason to visit the brand directly.",
      "needs": [
        "Genuine products, delivered fast",
        "Something she can't get elsewhere",
        "Easy repeat orders",
        "Rewards for staying loyal"
      ],
      "frustrations": [
        "Fakes and old stock on marketplaces",
        "Same price everywhere, so why switch",
        "Clunky brand websites",
        "No reward for buying again"
      ]
    },
    "jtbd": "When I buy a brand I already trust, I want a reason to buy direct, like exclusive bundles and rewards, so buying from the brand itself feels worth it."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "Framing the problem with CIRCLES",
        "steps": {
          "comprehend": "A trusted brand sells through middlemen and doesn't own the customer relationship.",
          "identify": "Urban online shoppers who already know the brand; the brand's leadership.",
          "report": "A reason to buy direct, easy repeat buying, and data the brand owns.",
          "cut": "Repeat buyers matter most. D2C only pays off if people come back.",
          "list": "Brand store, subscriptions, exclusive bundles, loyalty club, social channels.",
          "evaluate": "Going direct builds margin and data but risks clashing with retail partners.",
          "summarise": "A D2C plan built on exclusive value and loyalty, launched in stages."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research: what I did and would add",
        "methods": [
          {
            "method": "Desk research",
            "who": "The brand's market and rivals",
            "howMany": "Done",
            "how": "Consumer segmentation and channel mapping for the competition"
          },
          {
            "method": "Survey",
            "who": "Online shoppers who buy the brand",
            "howMany": "300",
            "how": "Why would you buy direct?"
          },
          {
            "method": "Pilot",
            "who": "Site visitors",
            "howMany": "8 weeks",
            "how": "Test bundles vs discounts"
          }
        ],
        "findings": [
          {
            "insight": "Trust in the name is the starting asset",
            "evidence": "From my segmentation work",
            "group": "Brand"
          },
          {
            "insight": "Price alone won't pull people direct",
            "evidence": "Hypothesis to test in the survey",
            "group": "Value"
          },
          {
            "insight": "Repeat buying makes or breaks D2C",
            "evidence": "Shown in my P&L model",
            "group": "Economics"
          }
        ],
        "questions": [
          "Where do you buy the brand today, and why there?",
          "What would make you buy from the brand's own store?",
          "Would you subscribe to items you buy every month?",
          "What rewards would you actually use?"
        ],
        "note": "Desk research was done for the competition. Survey and pilot are a plan."
      },
      {
        "kind": "market",
        "title": "Where a brand store fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "Online shoppers in the brand's category",
            "value": "est.",
            "assumption": "Category buyers who already shop online"
          },
          {
            "level": "SAM",
            "label": "Shoppers who know and trust the brand",
            "assumption": "A large share, given the Tata name"
          },
          {
            "level": "SOM",
            "label": "Repeat buyers in top metros, year 1",
            "assumption": "Launch in a few cities first"
          }
        ],
        "positioning": {
          "x": [
            "Generic shopping",
            "Brand experience"
          ],
          "y": [
            "One-time buys",
            "Repeat and loyalty"
          ],
          "points": [
            {
              "name": "Marketplaces",
              "x": 0.15,
              "y": 0.35
            },
            {
              "name": "Quick commerce",
              "x": 0.25,
              "y": 0.6
            },
            {
              "name": "Retail stores",
              "x": 0.55,
              "y": 0.2
            },
            {
              "name": "Brand store (plan)",
              "x": 0.85,
              "y": 0.85,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Genuine stock",
            "Exclusive bundles",
            "Subscriptions",
            "Loyalty rewards",
            "Brand owns data"
          ],
          "rows": [
            {
              "name": "Marketplaces",
              "values": [
                "partial",
                "no",
                "partial",
                "partial",
                "no"
              ]
            },
            {
              "name": "Quick commerce",
              "values": [
                "yes",
                "no",
                "no",
                "no",
                "no"
              ]
            },
            {
              "name": "Retail stores",
              "values": [
                "yes",
                "partial",
                "no",
                "partial",
                "no"
              ]
            },
            {
              "name": "Brand store (plan)",
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
            "value": "D2C",
            "label": "Big Indian brands are opening their own stores"
          },
          {
            "value": "UPI",
            "label": "Paying online is easy for almost everyone"
          },
          {
            "value": "Social",
            "label": "Shoppers find brands through creators"
          }
        ],
        "note": "Categories, not named companies. Sizes are directional (est.)."
      },
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "I run out of a product I use often",
            "want": "to reorder in one tap or subscribe",
            "so": "I never run out"
          },
          {
            "when": "I'm buying a gift",
            "want": "a brand bundle I can't get elsewhere",
            "so": "it feels special"
          },
          {
            "when": "I'm the brand",
            "want": "to know my repeat buyers",
            "so": "I can launch and price better"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "Buying the brand today vs direct",
        "stages": [
          {
            "stage": "Discover",
            "doing": "Sees an ad or a creator post",
            "feeling": "good",
            "pain": "Link goes to a marketplace",
            "opportunity": "Send to the brand store"
          },
          {
            "stage": "Compare",
            "doing": "Checks price on 3 apps",
            "feeling": "okay",
            "pain": "Same product everywhere",
            "opportunity": "Store-only bundles"
          },
          {
            "stage": "Buy",
            "doing": "Pays and waits",
            "feeling": "okay",
            "pain": "Unsure the stock is genuine",
            "opportunity": "Direct from the brand"
          },
          {
            "stage": "Use",
            "doing": "Uses the product",
            "feeling": "good",
            "pain": "Brand doesn't know her",
            "opportunity": "Welcome and tips by WhatsApp"
          },
          {
            "stage": "Rebuy",
            "doing": "Searches again",
            "feeling": "bad",
            "pain": "Starts from scratch",
            "opportunity": "Subscribe and rewards"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How Priya feels with the brand store",
        "steps": [
          {
            "step": "Sees offer",
            "feeling": 1,
            "note": "Interesting"
          },
          {
            "step": "Compares",
            "feeling": -1,
            "note": "Why pay here?"
          },
          {
            "step": "Finds bundle",
            "feeling": 1,
            "note": "Only here"
          },
          {
            "step": "Delivery",
            "feeling": 1,
            "note": "Fast, genuine"
          },
          {
            "step": "Rewards",
            "feeling": 2,
            "note": "Will come back"
          }
        ],
        "note": "The dip is the price check. Exclusive value has to answer it."
      },
      {
        "kind": "rice",
        "title": "Which go-to-market moves first (sample scores, est.)",
        "rows": [
          {
            "item": "Brand store with bundles",
            "reach": 8,
            "impact": 3,
            "confidence": 0.7,
            "effort": 4
          },
          {
            "item": "Subscriptions",
            "reach": 5,
            "impact": 3,
            "confidence": 0.6,
            "effort": 2
          },
          {
            "item": "Loyalty club",
            "reach": 6,
            "impact": 2,
            "confidence": 0.6,
            "effort": 2
          },
          {
            "item": "Creator campaigns",
            "reach": 9,
            "impact": 1,
            "confidence": 0.5,
            "effort": 2
          },
          {
            "item": "Own app",
            "reach": 3,
            "impact": 2,
            "confidence": 0.4,
            "effort": 6
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "Scope for launch",
        "must": [
          "Brand store with UPI and cash on delivery",
          "Exclusive bundles",
          "Repeat order in one tap"
        ],
        "should": [
          "Subscriptions",
          "Loyalty club"
        ],
        "could": [
          "Creator storefronts",
          "Gifting"
        ],
        "wont": [
          "Own app in year 1",
          "Undercutting retail partners on price"
        ]
      },
      {
        "kind": "tradeoff",
        "title": "How to sell direct",
        "criteria": [
          {
            "name": "Margin",
            "weight": 4
          },
          {
            "name": "Customer data",
            "weight": 5
          },
          {
            "name": "Partner conflict (less is better)",
            "weight": 3
          },
          {
            "name": "Speed to launch",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Own store + exclusive bundles",
            "scores": [
              4,
              5,
              4,
              3
            ],
            "chosen": true
          },
          {
            "name": "Own store, price cuts",
            "scores": [
              2,
              5,
              1,
              4
            ]
          },
          {
            "name": "Marketplace brand shop only",
            "scores": [
              3,
              1,
              5,
              5
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. Bundles give a reason to go direct without a price war."
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria (for the store)",
        "stories": [
          {
            "story": "Reorder",
            "given": "a past order",
            "when": "I tap reorder",
            "then": "the same items are in my cart with my saved address"
          },
          {
            "story": "Subscribe",
            "given": "a product I buy monthly",
            "when": "I pick subscribe",
            "then": "I see the saving and can pause or skip any month"
          },
          {
            "story": "Rewards",
            "given": "a completed order",
            "when": "it's delivered",
            "then": "points show in my rewards within a day"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "Metric tree (targets are est.)",
        "northStar": {
          "name": "Repeat buyers per month",
          "detail": "Customers on their 2nd+ direct order",
          "target": "est. 30% of buyers"
        },
        "inputs": [
          {
            "name": "Store visitors",
            "detail": "From ads and creators",
            "target": "est."
          },
          {
            "name": "Conversion",
            "detail": "Visit to order",
            "target": "est. 2.5%"
          },
          {
            "name": "Subscription share",
            "detail": "Orders on subscription",
            "target": "est. 15%"
          },
          {
            "name": "Rewards redeemed",
            "detail": "Members using points",
            "target": "est. 40%"
          }
        ],
        "guardrails": [
          {
            "name": "Retail partner sales",
            "target": "no drop"
          },
          {
            "name": "Cost to acquire a buyer",
            "target": "below first-year margin"
          }
        ],
        "note": "Targets are est. They would come from the P&L model and a pilot."
      },
      {
        "kind": "heart",
        "title": "HEART for the brand store (illustrative)",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Shoppers like buying direct",
            "signal": "Rating after delivery",
            "metric": "Average rating out of 5"
          },
          {
            "dimension": "Engagement",
            "goal": "People explore bundles",
            "signal": "Bundle views",
            "metric": "% sessions viewing a bundle"
          },
          {
            "dimension": "Adoption",
            "goal": "First direct order",
            "signal": "Order placed",
            "metric": "Visit-to-order conversion"
          },
          {
            "dimension": "Retention",
            "goal": "They come back",
            "signal": "Second order",
            "metric": "% buyers ordering again in 90 days"
          },
          {
            "dimension": "Task success",
            "goal": "Easy checkout",
            "signal": "Checkout finished",
            "metric": "% carts that complete"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "Retail partners push back",
            "likelihood": "high",
            "impact": "high",
            "mitigation": "Store-only bundles, not lower prices"
          },
          {
            "risk": "Buyers come once, never return",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Subscriptions and rewards from order one"
          },
          {
            "risk": "Delivery costs eat the margin",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Minimum order for free delivery"
          },
          {
            "risk": "Ads get expensive",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Lean on referrals and creators"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Go-to-market sequence",
        "now": [
          "Brand store in top metros",
          "Exclusive bundles",
          "UPI and cash on delivery"
        ],
        "next": [
          "Subscriptions",
          "Loyalty club",
          "Creator campaigns"
        ],
        "later": [
          "More cities",
          "Gifting",
          "Own app if repeat rates hold"
        ]
      }
    ]
  },
  "flow": {
    "title": "How I built the strategy",
    "nodes": [
      {
        "label": "Brief: take a Tata brand direct to customers",
        "kind": "start"
      },
      {
        "label": "Segment customers and pick who to win first"
      },
      {
        "label": "Map channels: own store, marketplaces, retail"
      },
      {
        "label": "Clashes with retail partners?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Use exclusive bundles, not price cuts"
        }
      },
      {
        "label": "Set pricing and build the P&L model"
      },
      {
        "label": "Does repeat buying make it profitable?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Add subscriptions and rewards, rerun"
        }
      },
      {
        "label": "Go-to-market sequence, pitched to Tata leaders",
        "kind": "end"
      }
    ],
    "caption": "The strategy flow: segment, channel, price, model, sequence."
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/tata-imagination-challenge/1-home.svg",
        "caption": "Brand store home"
      },
      {
        "src": "/projects/tata-imagination-challenge/2-product.svg",
        "caption": "Product with subscribe option"
      },
      {
        "src": "/projects/tata-imagination-challenge/3-checkout.svg",
        "caption": "Simple checkout"
      },
      {
        "src": "/projects/tata-imagination-challenge/4-rewards.svg",
        "caption": "Loyalty rewards"
      }
    ],
    "caption": "Illustrative screens of how the plan would look as a store. Products and prices are sample data."
  },
  "solution": {
    "summary": "For Tata's competition I built a direct-to-customer plan for a Tata brand: who to sell to, through which channels, at what price, with a P&L model and a launch sequence. It ranked first nationally in the D2C track.",
    "steps": [
      "Consumer segmentation to pick the first customers",
      "Digital channel plan: own store plus existing partners",
      "Pricing model with exclusive bundles",
      "P&L model to test when D2C pays off",
      "Go-to-market sequence, presented to Tata Group leaders"
    ],
    "decisions": [
      {
        "decision": "Win on exclusive value, not price",
        "why": "Avoids a fight with retail partners",
        "rejected": "Discounts on the brand store"
      },
      {
        "decision": "Repeat buyers as the goal",
        "why": "The P&L only works if people come back",
        "rejected": "Chasing first orders"
      },
      {
        "decision": "Launch in stages",
        "why": "Proves the model before scaling spend",
        "rejected": "National launch on day one"
      }
    ]
  },
  "metrics": {
    "northStar": "Repeat buyers per month",
    "rows": [
      {
        "name": "Repeat rate",
        "target": "est. 30%",
        "how": "Buyers ordering again within 90 days"
      },
      {
        "name": "Conversion",
        "target": "est. 2.5%",
        "how": "Store visits to orders"
      },
      {
        "name": "Competition result",
        "target": "#1",
        "how": "Ranked first nationally, D2C track"
      }
    ],
    "tests": [
      "8-week pilot: bundles vs discounts",
      "Survey 300 brand buyers on why they'd go direct",
      "Track retail partner sales during the pilot"
    ],
    "note": "The #1 rank is real. Everything else is a target (est.); the plan was not launched."
  },
  "next": {
    "items": [
      "Test the bundle idea with a real survey",
      "Model the P&L with real delivery costs",
      "Pilot in one city before scaling"
    ]
  },
  "label": "Competition strategy (ranked #1 nationally, D2C track). The storefront screens and numbers on this page are illustrative: sample data or est.",
  "extra": {
    "highlights": [
      "Achieved D2C Rank 1 out of national MBA cohort",
      "Delivered consumer segmentation, channel strategy, and P&L model for a Tata brand",
      "Presented to Tata Group senior executives"
    ],
    "skills": [
      "Business Strategy",
      "D2C",
      "Market Analysis",
      "Competitive Strategy",
      "Storytelling"
    ],
    "paragraphs": [
      "I ranked #1 nationally (D2C track) at Tata's flagship business competition during my MBA at IIM Ranchi. I built a full D2C strategy for a Tata brand. It covered consumer segmentation, digital channels, the pricing model and the go-to-market order."
    ]
  }
};

export default project;
