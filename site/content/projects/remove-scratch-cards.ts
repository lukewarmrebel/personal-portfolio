// About the project: Why I'd remove scratch cards from payment apps
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "remove-scratch-cards",
  "group": "teardowns",
  "order": 1,
  "title": "Why I'd remove scratch cards from payment apps",
  "oneLine": "Random scratch cards mostly say “Better luck next time”. I'd replace them with a weekly choice of 3 real rewards from shops you already pay.",
  "tag": "GPay, Paytm, CRED",
  "tags": [
    "Teardown",
    "Payments",
    "Rewards",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_KillDoc_ScratchCards.pdf"
    }
  ],
  "card": {
    "thumb": "/work/img/scratch-before-after.webp"
  },
  "tiles": [
    {
      "value": "2 in 3",
      "label": "GPay reward reviews give 1 or 2 stars"
    },
    {
      "value": "89%",
      "label": "say rewards matter when picking a UPI app (published survey)"
    },
    {
      "value": "85%",
      "label": "drop in POP's UPI volume after it pulled cashback"
    },
    {
      "value": "40%+",
      "label": "reward redemption target at week 8 (est.)"
    }
  ],
  "label": "A teardown memo, not something I shipped. I don't work at these companies. “Our app” is a composite UPI app; internal numbers are my estimates.",
  "glance": {
    "problem": "Random scratch cards in payment apps mostly say “Better luck next time” and annoy users.",
    "users": "People who pay with GPay, Paytm or CRED, and the rewards team paying for it.",
    "role": "Solo: review analysis, options, recommendation, metrics and a test plan.",
    "outcome": "A 2-page memo: kill the scratch card, replace it with “pick 1 of 3”. Practice exercise."
  },
  "judgment": {
    "used": "CIRCLES to frame the problem, review analysis, a weighted trade-off between four options, and HEART. Rewards are about how people feel, so HEART is the right way to check the replacement before scaling it.",
    "skipped": "User flows, journey maps, an emotional journey, RICE and acceptance criteria. Those belong to the build, not to the memo that argues for it."
  },
  "solution": {
    "summary": "Fewer, bigger rewards, picked from places you already pay, judged by how many get used. Proven on a holdout before anything is switched off.",
    "decisions": [
      {
        "decision": "Once a week, not every payment",
        "why": "The habit is built. The budget should buy rewards people use, not surprise.",
        "rejected": "A card on every payment"
      },
      {
        "decision": "One option is always cash",
        "why": "Nobody is pushed into a voucher they don't want."
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/remove-scratch-cards/1-today.svg",
        "caption": "Before: a card every payment, mostly blanks"
      },
      {
        "src": "/projects/remove-scratch-cards/2-pick.svg",
        "caption": "After: pick 1 of 3, one is always cash"
      }
    ],
    "caption": "Flat wireframes with mock brands and sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "The problem, worked through step by step",
        "steps": {
          "comprehend": "Apps still spend crores on random scratch cards, but the payment habit is already built.",
          "identify": "Daily UPI payers; the rewards team; the brand partners who fund vouchers.",
          "report": "Rewards worth using, no blanks, clear expiry, and no feeling of being played.",
          "cut": "Usefulness of each reward first. Surprise and frequency last.",
          "list": "Kill outright, narrow to new users, keep as is, or kill and replace.",
          "evaluate": "Killing outright risks a POP-style drop. Keeping means rising spend that users dislike.",
          "summarise": "Kill and replace: a weekly pick 1 of 3 from shops you already pay, proven on a holdout first."
        }
      },
      {
        "kind": "research",
        "mode": "findings",
        "title": "Review analysis and published surveys (no interviews)",
        "methods": [
          {
            "method": "Review analysis",
            "who": "Newest Play Store reviews for GPay and CRED",
            "howMany": "8,000 each",
            "how": "Tagged reviews that mention rewards and compared their star ratings with all reviews"
          },
          {
            "method": "Published surveys",
            "who": "UPI users in India",
            "howMany": "3",
            "how": "Read what users say about rewards, switching and cashback that never came"
          }
        ],
        "findings": [
          {
            "group": "Rewards feel like a lottery",
            "insight": "Reward reviews are far angrier than average",
            "evidence": "GPay: 66% of reward reviews are 1 or 2 stars, vs 19% for all reviews. CRED: 72% vs 34%."
          },
          {
            "group": "Rewards feel like a lottery",
            "insight": "Unused cards pile up",
            "evidence": "One review: “Not even one out of 200 has been used!”"
          },
          {
            "group": "Rewards still matter",
            "insight": "People pick apps on rewards",
            "evidence": "89% say rewards matter when choosing a UPI app; 83% would switch for better ones."
          }
        ],
        "note": "The numbers are from my review analysis and published surveys. The questions are the interviews I'd run next."
      },
      {
        "kind": "tradeoff",
        "title": "Four options, weighted",
        "criteria": [
          {
            "name": "Cost saved",
            "weight": 3
          },
          {
            "name": "Keeps the habit",
            "weight": 3
          },
          {
            "name": "User trust",
            "weight": 2
          },
          {
            "name": "Merchant value",
            "weight": 2
          },
          {
            "name": "Low legal risk",
            "weight": 1
          }
        ],
        "options": [
          {
            "name": "Kill outright",
            "scores": [
              5,
              1,
              3,
              1,
              5
            ]
          },
          {
            "name": "Narrow to new users",
            "scores": [
              3,
              3,
              2,
              2,
              3
            ]
          },
          {
            "name": "Keep as is",
            "scores": [
              1,
              4,
              1,
              2,
              2
            ]
          },
          {
            "name": "Kill and replace",
            "scores": [
              3,
              4,
              4,
              4,
              4
            ],
            "chosen": true
          }
        ],
        "note": "Scores 1 to 5 are my judgement from the memo, not measured."
      },
      {
        "kind": "heart",
        "title": "HEART",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Rewards feel fair",
            "signal": "Fewer angry reward reviews",
            "metric": "1–2 star reward reviews under 40% (est.)"
          },
          {
            "dimension": "Engagement",
            "goal": "People pick each week",
            "signal": "Weekly claims",
            "metric": "Claims per active user a week"
          },
          {
            "dimension": "Adoption",
            "goal": "People trust the consent ask",
            "signal": "Says yes to personalisation",
            "metric": "Opt-in rate, 30%+ (est.)"
          },
          {
            "dimension": "Retention",
            "goal": "Paying habit holds",
            "signal": "Payments per month vs holdout",
            "metric": "Within 3% of holdout (est.)"
          },
          {
            "dimension": "Task success",
            "goal": "Rewards get used",
            "signal": "Redeemed before expiry",
            "metric": "Redemption 40%+ (est.)"
          }
        ]
      }
    ]
  },
  "metrics": {
    "northStar": "Share of issued rewards that get used",
    "rows": [
      {
        "name": "Redemption of rewards issued",
        "target": "40%+ (est.)",
        "how": "Redeemed before expiry ÷ issued"
      },
      {
        "name": "Reward cost per user kept at 90 days",
        "target": "25% lower (est.)",
        "how": "Cell C vs cell A"
      }
    ],
    "tests": [],
    "note": "Every target is my estimate, not a benchmark."
  },
  "next": {
    "items": [
      "Run the three-cell holdout and read B vs A first"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/work/img/scratch-before-after.webp",
        "alt": "Wireframe: today's scratch card vs pick your reward"
      }
    ],
    "stat": "2 in 3 GPay reviews that mention rewards give 1 or 2 stars."
  }
};

export default project;
