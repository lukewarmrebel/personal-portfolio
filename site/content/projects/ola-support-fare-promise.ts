// About the project: Why I'd replace Ola's support chatbot with a fare promise
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "ola-support-fare-promise",
  "group": "teardowns",
  "order": 2,
  "title": "Why I'd replace Ola's support chatbot with a fare promise",
  "oneLine": "Riders with a fare problem can only reach a bot. I'd promise the fare on screen is the fare you pay, let AI approve refunds within a day, and let only a person say no.",
  "tag": "Ola",
  "tags": [
    "Teardown",
    "Mobility",
    "AI support",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_KillDoc_OlaAI.pdf"
    }
  ],
  "card": {
    "thumb": "/work/img/ola-before-after.webp"
  },
  "tiles": [
    {
      "value": "2×+",
      "label": "more often than Uber riders, Ola riders say they can't reach support"
    },
    {
      "value": "14.5%",
      "label": "of Ola reviews are about fare shown vs fare charged (Uber: 6.6%)"
    },
    {
      "value": "238 of 277",
      "label": "“driver asked for more” reviews are 1 star"
    },
    {
      "value": "<24 h",
      "label": "refund target (est.)"
    }
  ],
  "label": "A teardown memo, not something I shipped. I don't work at Ola. Review numbers are from my own analysis; everything else marked est. is my estimate.",
  "glance": {
    "problem": "Ola riders with a fare problem can only reach a bot.",
    "users": "Ola riders who were charged more than the app showed.",
    "role": "Solo: review analysis of 3,000 reviews, options, recommendation and a test plan.",
    "outcome": "A 2-page memo: point the AI at the fare, not at FAQs. Practice exercise."
  },
  "judgment": {
    "used": "My review analysis and a weighted trade-off between four fixes. A teardown memo has to show the evidence and make one call.",
    "skipped": "User flows, journey maps, an emotional journey, RICE, HEART and acceptance criteria. Those come after Ola agrees on the fix, not before."
  },
  "solution": {
    "summary": "The bot isn't the villain; it's pointed at the wrong job. Riders don't have questions. They have ₹250 a driver took.",
    "decisions": [
      {
        "decision": "The fare on screen is the fare you pay",
        "why": "Accepting a trip means accepting that fare. A simple rule riders can repeat."
      },
      {
        "decision": "AI can approve; only a person can deny",
        "why": "Same rule I use in my claims work. A wrong yes costs little; a wrong no loses the rider."
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/ola-support-fare-promise/1-today.svg",
        "caption": "Before: the bot sends a fare policy"
      },
      {
        "src": "/projects/ola-support-fare-promise/2-trip.svg",
        "caption": "Fare locked, one button to report"
      }
    ],
    "caption": "Flat wireframes. Amounts echo a real Hyderabad review: ₹550 shown, ₹800 asked."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "research",
        "mode": "findings",
        "title": "Review analysis: 3,000 Play Store reviews (no interviews)",
        "methods": [
          {
            "method": "Review analysis",
            "who": "Recent Play Store reviews: Ola, Uber, Rapido",
            "howMany": "3,000",
            "how": "Tagged each review by theme and star rating, then compared apps"
          },
          {
            "method": "Keyword count",
            "who": "Ola fare complaints",
            "howMany": "1 pass",
            "how": "Counted fare complaints that also say they couldn't get help"
          }
        ],
        "findings": [
          {
            "group": "Fares are the problem",
            "insight": "Fare disputes are twice Uber's rate",
            "evidence": "Fare shown vs charged: 14.5% of Ola reviews, vs 6.6% on Uber."
          },
          {
            "group": "Fares are the problem",
            "insight": "“Asked for more” is the angriest theme",
            "evidence": "9.2% of Ola reviews; 238 of those 277 are 1 star."
          },
          {
            "group": "Support is a wall",
            "insight": "Riders can't reach anyone",
            "evidence": "Support unreachable: 6.3% on Ola, 2.4% on Uber, 2.8% on Rapido."
          }
        ],
        "note": "Numbers are from my own review analysis. The questions are interviews I'd run next, including Hindi and Telugu riders my sample missed."
      },
      {
        "kind": "tradeoff",
        "title": "Four options, weighted",
        "criteria": [
          {
            "name": "Fixes the rider's money",
            "weight": 3
          },
          {
            "name": "Support cost",
            "weight": 2
          },
          {
            "name": "Speed to build",
            "weight": 1
          },
          {
            "name": "Regulator risk",
            "weight": 2
          },
          {
            "name": "Driver supply",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Kill the bot",
            "scores": [
              3,
              1,
              4,
              3,
              4
            ]
          },
          {
            "name": "Narrow + talk to a person",
            "scores": [
              2,
              3,
              4,
              3,
              4
            ]
          },
          {
            "name": "Keep and tune FAQs",
            "scores": [
              1,
              5,
              5,
              1,
              5
            ]
          },
          {
            "name": "Kill and replace",
            "scores": [
              5,
              3,
              2,
              5,
              3
            ],
            "chosen": true
          }
        ],
        "note": "Scores 1 to 5 are my judgement from the memo, not measured. Higher is better on every column."
      }
    ]
  },
  "metrics": {
    "northStar": "Rides per rider in the 30 days after a fare dispute",
    "rows": [
      {
        "name": "Reviews: driver asked for more",
        "target": "9.2% → 4.6% (est.)",
        "how": "Same review tagging, monthly"
      },
      {
        "name": "Reviews: support unreachable",
        "target": "6.3% → under 3% (est.)",
        "how": "Same review tagging, monthly"
      }
    ],
    "tests": [],
    "note": "Every target is my estimate, not a benchmark."
  },
  "next": {
    "items": [
      "Check trip logs: how often is “asked for more” per 1,000 trips?"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/work/img/ola-before-after.webp",
        "alt": "Mock screens: today's help bot vs the proposed fare guarantee"
      }
    ],
    "stat": "Ola riders say they can't reach support over twice as often as Uber riders."
  }
};

export default project;
