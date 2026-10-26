// About the project: What 80,000 ride-hailing reviews complain about
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "ride-hailing-reviews-analysis",
  "group": "data",
  "order": 1,
  "title": "What 80,000 ride-hailing reviews complain about",
  "oneLine": "I pulled three months of English Play Store reviews (July to October 2026) and sorted the complaints by theme. The biggest one: paying more than the fare the app showed.",
  "tag": "Uber, Ola, Rapido · India",
  "tags": [
    "Data analysis",
    "Mobility",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_RideHailing_ReviewAnalysis.pdf"
    },
    {
      "label": "Open the spreadsheet",
      "href": "/work/sheets/Pranav_RideHailing_ReviewAnalysis.xlsx"
    },
    {
      "label": "See the code",
      "href": "/work/code/Pranav_RideHailing_ReviewAnalysis.py"
    }
  ],
  "card": {
    "thumb": "/work/img/ride-complaints-chart.webp"
  },
  "proof": "I can turn messy public data into one clear call on what to fix first.",
  "proofStat": {
    "value": "80,548",
    "label": "real Play Store reviews, 3 apps"
  },
  "tiles": [
    {
      "value": "80,548",
      "label": "Play Store reviews pulled"
    },
    {
      "value": "3",
      "label": "apps compared"
    },
    {
      "value": "1 in 7",
      "label": "Ola reviews about the fare not matching"
    }
  ],
  "label": "Real public reviews. The fare-guarantee feature is how I would build it; its targets are my estimates.",
  "glance": {
    "problem": "Ride-hailing apps get thousands of reviews a week, and it is hard to see which complaints matter most.",
    "users": "Product teams at Uber, Ola and Rapido in India.",
    "role": "Solo: collected the reviews, sorted complaints by theme, wrote it up.",
    "outcome": "The same complaint tops all three apps: the fare charged isn't the fare shown. On Ola it's 14.5% of reviews, about double the others. PDF, spreadsheet and code are all open."
  },
  "solution": {
    "summary": "The same complaint tops all three apps: the fare charged isn't the fare shown. On Ola it's double, so I'd fix that first with a fare guarantee.",
    "steps": [
      "Pull reviews",
      "Sample",
      "Tag themes",
      "Hand check",
      "Rank",
      "Design the fix"
    ],
    "decisions": [
      {
        "decision": "Read reviews, not a survey",
        "why": "I wanted riders' own words about what goes wrong."
      },
      {
        "decision": "One theme per review, fixed list",
        "why": "Keeps the counts comparable across apps.",
        "rejected": "Open-ended topics"
      },
      {
        "decision": "Fix Ola's fare first",
        "why": "14.5% vs ~7% elsewhere, and Ola controls the fare, the payment and the payout."
      },
      {
        "decision": "The button needs no AI",
        "why": "AI only helps with triage and repeat drivers. It can approve, never deny."
      }
    ]
  },
  "wireframes": {
    "title": "The chart, and the fix I'd build",
    "screens": [
      {
        "src": "/work/img/ride-complaints-chart.webp",
        "caption": "Complaint themes by app, from the real reviews."
      },
      {
        "src": "/projects/ride-hailing-reviews-analysis/1-trip.svg",
        "caption": "One button on the trip screen. The fare on the screen is the fare I pay."
      },
      {
        "src": "/projects/ride-hailing-reviews-analysis/3-refund.svg",
        "caption": "AI triage can say yes when the trip data backs it up. A no always comes from a person."
      }
    ],
    "caption": "The chart is real data. The two wireframes show the fix I recommend for Ola, with sample data."
  },
  "judgment": {
    "used": "A findings table with my method, RICE to rank the fixes, a trade-off on how to fix the top complaint, and one north star with guardrails. The data has to lead to one decision, and these show how I got there.",
    "skipped": "Personas, journey maps, user flows and acceptance criteria. This is an analysis, not a build spec, and inventing a persona would weaken real data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "research",
        "mode": "findings",
        "title": "What the reviews say (review analysis)",
        "methods": [
          {
            "method": "Review pull",
            "who": "English India Play Store reviews, 20 Jul to 19 Oct 2026",
            "howMany": "80,548",
            "how": "Every written review for Uber, Ola and Rapido"
          },
          {
            "method": "Theme tagging",
            "who": "Random sample per app",
            "howMany": "3,000 × 3",
            "how": "An LLM tagged each against 15 fixed themes"
          },
          {
            "method": "Hand check",
            "who": "Random tagged reviews",
            "howMany": "50",
            "how": "I labelled each myself first: 84% exact match, 96% same direction"
          }
        ],
        "findings": [
          {
            "insight": "The same problem tops all three apps",
            "evidence": "Fare shown vs fare charged: Uber 6.6%, Ola 14.5%, Rapido 7.0% of reviews",
            "group": "All apps"
          },
          {
            "insight": "On Ola it's a driver asking for more",
            "evidence": "277 of 3,000 Ola reviews (9.2%); 238 of those are 1 star",
            "group": "Ola"
          },
          {
            "insight": "Then nowhere to go",
            "evidence": "Ola's #2 complaint is support unreachable, 6.3%",
            "group": "Ola"
          },
          {
            "insight": "Writers are angrier than the star average",
            "evidence": "52% of Ola's written reviews are 1 star, vs 24% on Uber",
            "group": "Stars"
          }
        ],
        "note": "Real public reviews. Reviews over-represent bad days and miss Hindi and Telugu script."
      },
      {
        "kind": "rice",
        "title": "Which Ola fix first (sample scores, est.)",
        "rows": [
          {
            "item": "Fare guarantee button",
            "reach": 9,
            "impact": 3,
            "confidence": 0.8,
            "effort": 3
          },
          {
            "item": "Higher fee for cancel after a call",
            "reach": 6,
            "impact": 2,
            "confidence": 0.7,
            "effort": 1
          },
          {
            "item": "AI triage of reports",
            "reach": 7,
            "impact": 2,
            "confidence": 0.6,
            "effort": 3
          },
          {
            "item": "Repeat-driver flags",
            "reach": 5,
            "impact": 2,
            "confidence": 0.7,
            "effort": 2
          },
          {
            "item": "Reachable support line",
            "reach": 8,
            "impact": 2,
            "confidence": 0.5,
            "effort": 5
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "tradeoff",
        "title": "How to stop the fare squeeze",
        "criteria": [
          {
            "name": "Rider pays the app fare",
            "weight": 5
          },
          {
            "name": "Fair to drivers",
            "weight": 4
          },
          {
            "name": "Fast to ship",
            "weight": 3
          },
          {
            "name": "Hard to abuse",
            "weight": 3
          }
        ],
        "options": [
          {
            "name": "Just penalise drivers",
            "scores": [
              2,
              1,
              4,
              4
            ]
          },
          {
            "name": "Fare guarantee + payback",
            "scores": [
              5,
              3,
              3,
              3
            ],
            "chosen": true
          },
          {
            "name": "Raise short-trip fares only",
            "scores": [
              2,
              5,
              3,
              5
            ]
          },
          {
            "name": "Better support only",
            "scores": [
              2,
              3,
              2,
              4
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. I'd review short-trip fares alongside the guarantee."
      },
      {
        "kind": "northstar",
        "title": "North star and what drives it",
        "northStar": {
          "name": "Share of Ola reviews tagged “driver asked for more”",
          "detail": "Baseline 9.2%. Re-run this script monthly",
          "target": "4.6% (est.)"
        },
        "inputs": [
          {
            "name": "Reports per 1,000 trips",
            "detail": "Expect it to rise first as reporting gets easy"
          },
          {
            "name": "Cancels within 2 min of a call",
            "detail": "The squeeze move",
            "target": "Down 50% (est.)"
          },
          {
            "name": "Median time to refund",
            "detail": "Rider made whole",
            "target": "< 24 h (est.)"
          },
          {
            "name": "Repeat drivers coached",
            "detail": "The few causing most of it"
          }
        ],
        "guardrails": [
          {
            "name": "Driver acceptance rate",
            "target": "no drop"
          },
          {
            "name": "Driver churn",
            "target": "no rise"
          },
          {
            "name": "Refund cost per trip",
            "target": "within cap"
          },
          {
            "name": "Audited refunds that were false",
            "target": "< 5% (est.)"
          }
        ],
        "note": "Baseline 9.2% is from the review sample; the targets are my estimates."
      }
    ]
  },
  "flow": {
    "title": "How I ran the analysis",
    "nodes": [
      {
        "label": "Pull every English India review, 3 months, 3 apps",
        "kind": "start"
      },
      {
        "label": "Random sample: 3,000 per app",
        "kind": "step"
      },
      {
        "label": "LLM tags each with 1 of 15 fixed themes",
        "kind": "step"
      },
      {
        "label": "Does my hand check agree?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Fix the theme definitions and re-tag. Mine: 42 of 50 exact."
        }
      },
      {
        "label": "Rank themes per app, pick a real review for each",
        "kind": "step"
      },
      {
        "label": "Split fare complaints by what happened",
        "kind": "step"
      },
      {
        "label": "Pick one fixable problem and design the fix",
        "kind": "end"
      }
    ],
    "caption": "Good enough to rank themes, not to quote to one decimal."
  },
  "next": {
    "items": [
      "Add Hindi and Telugu script reviews to the analysis",
      "Re-run monthly to track the fare theme",
      "Talk to 10 Ola riders and 5 drivers about the squeeze"
    ]
  }
};

export default project;
