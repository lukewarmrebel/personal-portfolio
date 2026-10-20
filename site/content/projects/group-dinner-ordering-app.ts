// About the project: Group dinner ordering app (prototype)
// Schema: src/lib/projectSchema.ts. Facts come from the project's own files; illustrative numbers say "est." or "sample data".
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "group-dinner-ordering-app",
  "group": "prototypes",
  "order": 2,
  "title": "Group dinner ordering app (prototype)",
  "oneLine": "Friends tap what they can eat and spend. The app suggests places that suit everyone and splits the bill into UPI payment links.",
  "tag": "Food delivery · India and US",
  "tags": [
    "Prototype",
    "Food delivery",
    "India + US"
  ],
  "links": [
    {
      "label": "About the project",
      "href": "https://pranav-dinnerfor6.sites.tab.bot/"
    },
    {
      "label": "Try the prototype",
      "href": "https://pranav-dinnerfor6.sites.tab.bot/prototype/"
    }
  ],
  "card": {
    "thumb": "/work/img/dinner-hardnight.webp"
  },
  "tiles": [
    {
      "value": "6",
      "label": "friends in the sample group"
    },
    {
      "value": "1 tap",
      "label": "to split the bill into UPI links"
    }
  ],
  "glance": {
    "problem": "Picking a place for a group dinner means long chats about diets, budgets and who pays.",
    "users": "Groups of friends ordering or eating out together, in India and the US.",
    "role": "Solo: product idea, flows, prototype and write-up.",
    "outcome": "A clickable prototype with sample data. Not shipped."
  },
  "problem": {
    "persona": {
      "name": "Arjun, 27, Hyderabad",
      "who": "The flatmate who ends up ordering for everyone",
      "context": "8:02 pm, Flat 302 group: “dinner?”. By 8:24 there are 11 messages and no order. He types “ok I'll sort it”.",
      "needs": [
        "One place that works for veg, budget, a 9 pm call and an allergy",
        "Not to be the one who decides and pays",
        "Money back without chasing anyone"
      ],
      "frustrations": [
        "Shared carts only start after someone picks the place",
        "The allergy everyone half remembers",
        "Two days chasing ₹280 on WhatsApp"
      ]
    },
    "jtbd": "When my flat wants to order dinner together, I want a place everyone can actually eat from and a fair split, so I'm not the one deciding, paying and chasing."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "How I framed it (CIRCLES)",
        "steps": {
          "comprehend": "Group orders stall before the cart. Picking the place is the slow part.",
          "identify": "Flatmates and hostel groups in Indian metros. US roommates second.",
          "report": "Fit everyone's diet, budget, time and allergies. Split without chasing.",
          "cut": "v1: constraints, picks, vote, split. Skip office catering and big parties.",
          "list": "Shared cart, AI picks one place, constraints then vote, poll in the chat.",
          "evaluate": "AI picking alone is fast but nobody owns it. A vote keeps the group in charge.",
          "summarise": "Collect constraints first, show 2 or 3 picks with reasons, vote, split as UPI links."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (no interviews done yet)",
        "methods": [
          {
            "method": "Diary study",
            "who": "Flatmate groups in Hyderabad and Bengaluru",
            "howMany": "6 groups",
            "how": "Screenshot the group chat each time they order for 2 weeks"
          },
          {
            "method": "Interviews",
            "who": "The person who usually orders and pays",
            "howMany": "10",
            "how": "30-minute calls on their last group order"
          },
          {
            "method": "Prototype test",
            "who": "Real groups, on their own phones",
            "howMany": "5 groups",
            "how": "Run one real dinner through the prototype; time it"
          }
        ],
        "findings": [
          {
            "insight": "People already order together",
            "evidence": "Swiggy said 6% of orders on group ordering's first weekend went through it, at 3.7x the usual order value",
            "group": "Public launch data"
          },
          {
            "insight": "Everyone solved the cart, nobody solved deciding",
            "evidence": "Swiggy, Zomato, DoorDash and Uber Eats group orders all start after a restaurant is chosen",
            "group": "Desk research"
          },
          {
            "insight": "Paying is solved in the US, not in India",
            "evidence": "Uber Eats lets guests pay for themselves; Indian group carts leave the host paying",
            "group": "Desk research"
          }
        ],
        "questions": [
          "Walk me through the last time your flat ordered together. Who decided?",
          "How long did it take from “dinner?” to the order?",
          "How did the money get settled, and how long did it take?",
          "Has anyone ever ordered something they couldn't eat?"
        ],
        "note": "The interviews are a plan. The three findings come from public launch coverage and help pages I read, not from users."
      },
      {
        "kind": "market",
        "title": "The market and the gap",
        "funnel": [
          {
            "level": "TAM",
            "label": "Food delivery orders for 3 or more people, India and US",
            "value": "~15% of orders (est.)",
            "assumption": "My guess from flat and office ordering. Not a published number."
          },
          {
            "level": "SAM",
            "label": "Group orders in Indian metros that are already in a group cart",
            "value": "6% of orders",
            "assumption": "Swiggy's share on group ordering's launch weekend, Aug 2024."
          },
          {
            "level": "SOM",
            "label": "Flatmate and hostel groups in Hyderabad, Bengaluru, Pune, year 1",
            "value": "10,000 groups (est.)",
            "assumption": "Groups ordering 2 to 3 times a week; a launch-city pilot."
          }
        ],
        "positioning": {
          "x": [
            "Starts after the place is picked",
            "Helps pick the place"
          ],
          "y": [
            "Host pays",
            "Everyone pays their share"
          ],
          "points": [
            {
              "name": "Swiggy group order",
              "x": 0.15,
              "y": 0.2
            },
            {
              "name": "Zomato group order",
              "x": 0.22,
              "y": 0.12
            },
            {
              "name": "DoorDash Group Order",
              "x": 0.3,
              "y": 0.5
            },
            {
              "name": "Uber Eats group order",
              "x": 0.2,
              "y": 0.85
            },
            {
              "name": "Splitwise",
              "x": 0.06,
              "y": 0.68
            },
            {
              "name": "Dinner for 6",
              "x": 0.85,
              "y": 0.85,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Shared cart",
            "Diet and allergy",
            "Helps pick the place",
            "Per-person budget",
            "Each pays own share"
          ],
          "rows": [
            {
              "name": "Swiggy group order",
              "values": [
                "yes",
                "no",
                "no",
                "no",
                "no"
              ]
            },
            {
              "name": "Zomato group order",
              "values": [
                "yes",
                "no",
                "no",
                "no",
                "no"
              ]
            },
            {
              "name": "DoorDash Group Order",
              "values": [
                "yes",
                "no",
                "no",
                "partial",
                "partial"
              ]
            },
            {
              "name": "Uber Eats group order",
              "values": [
                "yes",
                "no",
                "no",
                "yes",
                "yes"
              ]
            },
            {
              "name": "Splitwise",
              "values": [
                "no",
                "no",
                "no",
                "no",
                "yes"
              ]
            },
            {
              "name": "Dinner for 6",
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
            "value": "3.7x",
            "label": "usual order value on Swiggy group orders, launch weekend"
          },
          {
            "value": "40",
            "label": "people a Swiggy group cart can hold at once"
          },
          {
            "value": "1 Oct 2025",
            "label": "UPI P2P collect requests ended, so splits need pay links"
          }
        ],
        "note": "TAM and SOM are my estimates. “Partial” means it exists only in the business product."
      },
      {
        "kind": "jtbd",
        "title": "Jobs the app is hired for",
        "items": [
          {
            "when": "someone types “dinner?” in the flat group",
            "want": "everyone's limits in one place in a minute",
            "so": "we stop going round in the chat"
          },
          {
            "when": "Riya has a peanut allergy",
            "want": "places that can't label peanuts to vanish",
            "so": "nobody has to remember for her"
          },
          {
            "when": "I'm broke at month end",
            "want": "my budget to count without saying it out loud",
            "so": "I'm not the cheap one"
          },
          {
            "when": "the order is placed",
            "want": "each person to get their exact amount",
            "so": "the host isn't the bank"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "A group order today, and where the app steps in",
        "stages": [
          {
            "stage": "Someone asks",
            "doing": "“dinner?” in the flat group",
            "feeling": "okay",
            "pain": "11 messages, no decision",
            "opportunity": "One link instead of a debate"
          },
          {
            "stage": "Constraints",
            "doing": "Veg, budget, a call at 9, an allergy",
            "feeling": "bad",
            "pain": "Said in passing, half remembered",
            "opportunity": "Four taps each, saved"
          },
          {
            "stage": "Picking",
            "doing": "Scrolling apps, sharing screenshots",
            "feeling": "bad",
            "pain": "Nobody wants to decide",
            "opportunity": "2 or 3 picks with reasons"
          },
          {
            "stage": "Ordering",
            "doing": "One phone, everyone shouting dishes",
            "feeling": "okay",
            "pain": "Host types for everyone",
            "opportunity": "Each adds from a filtered menu"
          },
          {
            "stage": "Settling up",
            "doing": "Chasing ₹280 for two days",
            "feeling": "bad",
            "pain": "Host fronts the money",
            "opportunity": "UPI pay links, one nudge"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How the host feels, before and with the app",
        "steps": [
          {
            "step": "“dinner?”",
            "feeling": 0,
            "note": "Hungry, hopeful"
          },
          {
            "step": "Chat spirals",
            "feeling": -2,
            "note": "11 messages, no order"
          },
          {
            "step": "Taps the link",
            "feeling": 0,
            "note": "20 seconds each"
          },
          {
            "step": "Sees 3 picks",
            "feeling": 1,
            "note": "Reasons name people"
          },
          {
            "step": "Vote done",
            "feeling": 1,
            "note": "The group owns it"
          },
          {
            "step": "Split sent",
            "feeling": 2,
            "note": "Not the bank this time"
          }
        ],
        "note": "My expected curve, to test in the prototype sessions."
      },
      {
        "kind": "rice",
        "title": "Which features first (sample scores, est.)",
        "rows": [
          {
            "item": "Constraints + hard filters",
            "reach": 10,
            "impact": 3,
            "confidence": 0.8,
            "effort": 3
          },
          {
            "item": "UPI pay-link split",
            "reach": 9,
            "impact": 3,
            "confidence": 0.8,
            "effort": 2
          },
          {
            "item": "Picks with reasons + vote",
            "reach": 9,
            "impact": 2,
            "confidence": 0.7,
            "effort": 3
          },
          {
            "item": "Hard-night compromise",
            "reach": 4,
            "impact": 2,
            "confidence": 0.6,
            "effort": 2
          },
          {
            "item": "“Same as last time?”",
            "reach": 6,
            "impact": 1,
            "confidence": 0.7,
            "effort": 1
          },
          {
            "item": "Pay before the order (v2)",
            "reach": 5,
            "impact": 2,
            "confidence": 0.5,
            "effort": 5
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "What goes in version 1",
        "must": [
          "Diet, budget, craving, allergy taps",
          "Allergy as a hard filter",
          "2 or 3 picks with a reason",
          "One-tap vote with a timer",
          "Split as UPI pay links"
        ],
        "should": [
          "Hard-night compromise line",
          "Private budgets",
          "India / US switch"
        ],
        "could": [
          "Remember last answers",
          "Free-text cravings to tags"
        ],
        "wont": [
          "AI picks one place on its own",
          "Office catering above 15 people",
          "Nagging friends more than once"
        ]
      },
      {
        "kind": "tradeoff",
        "title": "Who picks the restaurant",
        "criteria": [
          {
            "name": "Group owns the choice",
            "weight": 5
          },
          {
            "name": "Speed",
            "weight": 4
          },
          {
            "name": "Fits everyone",
            "weight": 4
          },
          {
            "name": "Simple to build",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "AI picks one place",
            "scores": [
              1,
              5,
              4,
              4
            ]
          },
          {
            "name": "Host picks, shared cart",
            "scores": [
              2,
              3,
              2,
              5
            ]
          },
          {
            "name": "AI shortlists 3, group votes",
            "scores": [
              5,
              4,
              4,
              3
            ],
            "chosen": true
          },
          {
            "name": "Poll in the chat",
            "scores": [
              4,
              2,
              2,
              5
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. The vote costs one tap and stops the pushback."
      },
      {
        "kind": "acceptance",
        "title": "Key stories",
        "stories": [
          {
            "story": "Allergy filter",
            "given": "Riya marks a peanut allergy",
            "when": "places are ranked",
            "then": "any place without peanut labels is removed, and her menu hides peanut dishes"
          },
          {
            "story": "Hard night",
            "given": "no place fits all six",
            "when": "the picks are built",
            "then": "the closest match shows with who compromises, and that person is asked privately first"
          },
          {
            "story": "Private budget",
            "given": "Kabir sets “under ₹250”",
            "when": "the group sees the picks",
            "then": "his budget is used for ranking but never shown to anyone"
          },
          {
            "story": "Split",
            "given": "the host places a ₹1,622 order",
            "when": "the order goes through",
            "then": "each friend gets a UPI link with their exact share filled in"
          },
          {
            "story": "Model is slow",
            "given": "the reason-writing model times out",
            "when": "the picks load",
            "then": "they still show, with a plain template reason"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "North star and what drives it",
        "northStar": {
          "name": "Group orders placed within 10 minutes of the link going out",
          "detail": "The chat stopped and the food got ordered",
          "target": "60% (est.)"
        },
        "inputs": [
          {
            "name": "Constraint completion",
            "detail": "Friends who finish the four taps",
            "target": "85% (est.)"
          },
          {
            "name": "Started orders placed",
            "detail": "Groups that reach checkout",
            "target": "65% (est.)"
          },
          {
            "name": "Orders at an AI pick",
            "detail": "Picks good enough to choose",
            "target": "70% (est.)"
          },
          {
            "name": "Pay links settled in 24 h",
            "detail": "Host stops being the bank",
            "target": "85% (est.)"
          }
        ],
        "guardrails": [
          {
            "name": "Allergy incidents on these orders",
            "target": "0"
          },
          {
            "name": "Refunds per group order vs normal group orders",
            "target": "no higher"
          },
          {
            "name": "Time to fill constraints, 90% of people",
            "target": "< 40 s (est.)"
          }
        ],
        "note": "All targets are my estimates for a first launch."
      },
      {
        "kind": "heart",
        "title": "HEART metrics",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "The host feels it was fair",
            "signal": "One-tap rating after the split",
            "metric": "% rating 4 or 5 (target 75%, est.)"
          },
          {
            "dimension": "Engagement",
            "goal": "Friends take part, not just the host",
            "signal": "Constraint taps per group",
            "metric": "Share of members who answer"
          },
          {
            "dimension": "Adoption",
            "goal": "Groups try it once",
            "signal": "First link shared in a chat",
            "metric": "New groups per week"
          },
          {
            "dimension": "Retention",
            "goal": "It becomes the flat's habit",
            "signal": "Second group order",
            "metric": "% of groups ordering again in 14 days (target 40%, est.)"
          },
          {
            "dimension": "Task success",
            "goal": "Dinner decided fast",
            "signal": "Link shared to order placed",
            "metric": "Median under 8 min (est.)"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "Wrong or missing allergen tags",
            "likelihood": "high",
            "impact": "high",
            "mitigation": "Only confirmed tags count; say “no peanuts listed”, never “safe”; note to the kitchen"
          },
          {
            "risk": "Compromise line feels like a call-out",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Ask the person privately first; budgets never shown"
          },
          {
            "risk": "Paid listings sneak into the picks",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Sponsored places labelled, and only if they fit everyone"
          },
          {
            "risk": "Four taps every time gets old",
            "likelihood": "medium",
            "impact": "low",
            "mitigation": "“Same as last time?” for regular groups"
          },
          {
            "risk": "Friends ignore pay links",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "One nudge the next morning, never more"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Roadmap",
        "now": [
          "Constraints, hard filters, picks, vote",
          "UPI pay-link split",
          "Pilot with flat groups in Hyderabad"
        ],
        "next": [
          "Hard-night compromise",
          "Remember last answers",
          "US mode with Venmo"
        ],
        "later": [
          "Each pays before the order",
          "Free-text cravings to tags",
          "Kitchen allergy notes"
        ]
      }
    ]
  },
  "flow": {
    "title": "From “dinner?” to the split",
    "nodes": [
      {
        "label": "Host shares one link in the group chat",
        "kind": "start"
      },
      {
        "label": "Each friend taps diet, budget, craving, allergy",
        "kind": "step"
      },
      {
        "label": "Filter: allergy, then time, diet, budget",
        "kind": "step"
      },
      {
        "label": "Does any place fit everyone?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Hard night: show the closest match and who compromises. Ask them privately."
        }
      },
      {
        "label": "2 or 3 picks, each with one line of reason",
        "kind": "step"
      },
      {
        "label": "One-tap vote, 3 minute timer",
        "kind": "step"
      },
      {
        "label": "Everyone adds a dish from a filtered menu",
        "kind": "step"
      },
      {
        "label": "Split sent as UPI pay links",
        "kind": "end"
      }
    ],
    "caption": "Filtering and ranking are rules. The AI only turns free text into tags and writes the reasons."
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/group-dinner-ordering-app/1-constraints.svg",
        "caption": "Each friend taps four things from the group link. No account, no typing."
      },
      {
        "src": "/projects/group-dinner-ordering-app/2-picks.svg",
        "caption": "The AI shows its working: how 42 places became 3, and why each one suits the group."
      },
      {
        "src": "/projects/group-dinner-ordering-app/3-hard-night.svg",
        "caption": "When nothing fits everyone, I name the compromise instead of showing “no results”."
      },
      {
        "src": "/projects/group-dinner-ordering-app/4-split.svg",
        "caption": "The split goes out as UPI pay links. The host sees who paid and nudges once."
      }
    ],
    "caption": "Flat wireframes with sample data. The clickable prototype has the full flow, with an India / US switch."
  },
  "solution": {
    "summary": "The cart was never the hard part. Choosing the restaurant is, so I collect everyone's limits before anyone picks a place.",
    "steps": [
      "Share link",
      "Four taps each",
      "Filter",
      "3 picks",
      "Vote",
      "Order",
      "UPI split"
    ],
    "decisions": [
      {
        "decision": "Allergy is a filter, not a score",
        "why": "A place that can't label peanut dishes is gone, even if five people would love it."
      },
      {
        "decision": "When nothing fits, name the compromise",
        "why": "“No results” sends everyone back to the chat. The closest match keeps it moving.",
        "rejected": "Show “no places found”"
      },
      {
        "decision": "The AI suggests, the group decides",
        "why": "People push back on a choice made for them. A vote is one tap.",
        "rejected": "AI picks one place"
      },
      {
        "decision": "UPI pay links, not collect requests",
        "why": "NPCI ended P2P collect requests on 1 Oct 2025. A link opens their own UPI app with the amount filled in."
      },
      {
        "decision": "Simple split rule",
        "why": "You pay for your food, tax follows it, fees and tip split evenly. It's what groups already do by hand."
      }
    ]
  },
  "metrics": {
    "northStar": "Group orders placed within 10 minutes of the link going into the chat",
    "rows": [
      {
        "name": "Link shared to order placed",
        "target": "< 8 min median (est.)",
        "how": "Timestamps on link and order. Today it's 20 to 30 minutes of chat, by my guess."
      },
      {
        "name": "Started group orders that get placed",
        "target": "65% (est.)",
        "how": "Drop-off by step, mainly at constraints"
      },
      {
        "name": "Orders at one of the AI's picks",
        "target": "70% (est.)",
        "how": "Low means the reasons or ranking are off"
      },
      {
        "name": "Pay links settled within 24 hours",
        "target": "85% (est.)",
        "how": "Paid links over links sent"
      }
    ],
    "tests": [
      "Allergy incidents on these orders: zero. Any single one pauses the feature",
      "Refunds and complaints per order no higher than normal group orders",
      "Constraint taps under 40 seconds for 90% of people (est.)",
      "A/B test the compromise wording with real groups before launch"
    ],
    "note": "Every target is my estimate for a first launch, not a benchmark."
  },
  "next": {
    "items": [
      "Run 5 real group dinners through the prototype and time them against the chat",
      "Check allergen-tag coverage for 200 restaurants in one Hyderabad area",
      "Test the hard-night wording with groups before anything else",
      "v2: each person pays their own share before the order, so the host never fronts money"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/work/img/dinner-hardnight.webp",
        "alt": "Prototype screen: hard night, nothing fits everyone"
      },
      {
        "src": "/work/img/dinner-split.webp",
        "alt": "Prototype screen: the bill split"
      }
    ]
  },
  "label": "How I would build it. Not shipped. People, places, prices and targets are sample data or my estimates."
};

export default project;

