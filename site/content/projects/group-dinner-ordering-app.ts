// About the project: Group dinner ordering app (prototype)
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
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
  "label": "How I would build it. Not shipped. People, places, prices and targets are sample data or my estimates.",
  "glance": {
    "problem": "Picking a place for a group dinner means long chats about diets, budgets and who pays.",
    "users": "Groups of friends ordering or eating out together, in India and the US.",
    "role": "Solo: product idea, flows, prototype and write-up.",
    "outcome": "A clickable prototype with sample data. Not shipped."
  },
  "judgment": {
    "used": "Jobs to be done, the group order journey today, one trade-off on who picks the restaurant, and key stories. The whole app hangs on making that choice fair and fast, and the stories cover the hard nights: allergies, private budgets, splitting the bill.",
    "skipped": "RICE, HEART and a market size. It's a prototype with sample data, and none of those would change the flow."
  },
  "solution": {
    "summary": "The cart was never the hard part. Choosing the restaurant is, so I collect everyone's limits before anyone picks a place.",
    "decisions": [
      {
        "decision": "Allergy is a filter, not a score",
        "why": "A place that can't label peanut dishes is gone, even if five people would love it."
      },
      {
        "decision": "When nothing fits, name the compromise",
        "why": "“No results” sends everyone back to the chat. The closest match keeps it moving.",
        "rejected": "Show “no places found”"
      }
    ]
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
      }
    ],
    "caption": "Flat wireframes with sample data. The clickable prototype has the full flow, with an India / US switch."
  },
  "frameworks": {
    "blocks": [
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
      }
    ],
    "tests": [],
    "note": "Every target is my estimate for a first launch, not a benchmark."
  },
  "next": {
    "items": [
      "Run 5 real group dinners through the prototype and time them against the chat"
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
  }
};

export default project;
