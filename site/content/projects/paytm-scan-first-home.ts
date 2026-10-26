// About the project: Why I'd make Paytm's home screen scan-first
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "paytm-scan-first-home",
  "group": "teardowns",
  "order": 3,
  "title": "Why I'd make Paytm's home screen scan-first",
  "oneLine": "Most people open Paytm to pay. I'd remove the ad on launch, the ad beside the scanner and the loan offers everyone sees, and put the scanner first.",
  "tag": "Paytm",
  "tags": [
    "Teardown",
    "Payments",
    "Home screen",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_KillDoc_PaytmHome.pdf"
    }
  ],
  "card": {
    "thumb": "/work/img/paytm-before-after.webp"
  },
  "tiles": [
    {
      "value": "3×",
      "label": "more reviews about slowness than about ads"
    },
    {
      "value": "~100×",
      "label": "gap between monthly users and key credit customers (est.)"
    },
    {
      "value": "8.03%",
      "label": "Paytm's UPI volume share, August 2026"
    },
    {
      "value": "−30%",
      "label": "time-to-pay target (est.)"
    }
  ],
  "label": "A teardown memo, not something I shipped. I don't work at Paytm. Review numbers are from my own keyword pass; numbers marked est. are my estimates.",
  "glance": {
    "problem": "Most people open Paytm to pay, but ads and loan offers come first.",
    "users": "People who open Paytm to scan and pay at a shop counter.",
    "role": "Solo: review analysis, business read, options, recommendation and a test plan.",
    "outcome": "A 2-page memo: a scan-first home, with credit shown only after intent. Practice exercise."
  },
  "judgment": {
    "used": "CIRCLES to frame the problem, my review analysis, a weighted trade-off between four options, and a metric tree for the test. A teardown memo has to frame the problem, show the evidence, make one call and say how I'd measure it.",
    "skipped": "User flows, journey maps, an emotional journey, RICE, HEART and acceptance criteria. Those belong to the build, not to the memo that argues for it."
  },
  "solution": {
    "summary": "Showing a loan block to 8 Cr people a month to find a few lakh borrowers is the costliest way to find them. Intent is cheaper.",
    "decisions": [
      {
        "decision": "Scan fills the top third",
        "why": "Most opens are a payment. Nothing loads in front of it."
      },
      {
        "decision": "Credit only after a raised hand",
        "why": "Checking a score or opening Postpaid is intent. Everyone else gets speed.",
        "rejected": "The same credit block for everyone"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/paytm-scan-first-home/1-today.svg",
        "caption": "Before: launch ad, credit block, banner by Scan"
      },
      {
        "src": "/projects/paytm-scan-first-home/2-home.svg",
        "caption": "After: scan first, shortcuts ranked by use"
      }
    ],
    "caption": "Flat wireframes with made-up names."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "The problem, worked through step by step",
        "steps": {
          "comprehend": "Payments bring users in; credit makes the money. So home became the credit shelf, in front of the scanner.",
          "identify": "Daily scan-and-pay users; the few lakh who want credit; partners paying for placement.",
          "report": "Fast scan, no mis-taps, credit only when they want it.",
          "cut": "Time to pay first. Credit discovery second, but only for people who raise a hand.",
          "list": "Strip home to pay only, drop just the two ads, keep the Nov 2025 cleanup, or kill and replace.",
          "evaluate": "Stripping hurts the credit funnel. Dropping two ads still shows loans to everyone.",
          "summarise": "Scan-first home with ranked shortcuts; credit in a Money tab and on home only after intent."
        }
      },
      {
        "kind": "research",
        "mode": "findings",
        "title": "Review analysis and public results (no interviews)",
        "methods": [
          {
            "method": "Review keyword pass",
            "who": "Recent Play Store reviews, 8+ words",
            "howMany": "2,783",
            "how": "Counted mentions of slow, lag, crash, login vs ads, clutter, UI"
          },
          {
            "method": "Home teardown",
            "who": "Paytm, Google Pay, PhonePe home screens",
            "howMany": "3",
            "how": "Mapped what sits above and around the scanner"
          }
        ],
        "findings": [
          {
            "group": "Speed beats clutter",
            "insight": "Slowness is the loudest complaint",
            "evidence": "14% of reviews mention slow, lag, crash or login; 4% mention ads, clutter or UI."
          },
          {
            "group": "Speed beats clutter",
            "insight": "Top-voted this month is about speed",
            "evidence": "“It takes longer to load and scan than other apps” (2 stars, 45 likes)."
          },
          {
            "group": "Ads hurt the pay moment",
            "insight": "The banner sits where thumbs go",
            "evidence": "A 1-star review says the ad by the scanner gets touched by accident."
          }
        ],
        "note": "Fair to say: the app holds a 4.7 rating and clutter isn't the top complaint by count. The questions are the interviews I'd run next."
      },
      {
        "kind": "tradeoff",
        "title": "Four options, weighted",
        "criteria": [
          {
            "name": "Faster pay path",
            "weight": 3
          },
          {
            "name": "Credit revenue kept",
            "weight": 3
          },
          {
            "name": "User trust",
            "weight": 2
          },
          {
            "name": "Build cost (low is good)",
            "weight": 1
          },
          {
            "name": "Partner fallout (low is good)",
            "weight": 1
          }
        ],
        "options": [
          {
            "name": "Kill: pay only",
            "scores": [
              5,
              1,
              4,
              4,
              1
            ]
          },
          {
            "name": "Narrow: drop 2 ads",
            "scores": [
              3,
              5,
              3,
              5,
              4
            ]
          },
          {
            "name": "Keep Nov 2025 layout",
            "scores": [
              1,
              5,
              2,
              5,
              5
            ]
          },
          {
            "name": "Kill and replace",
            "scores": [
              5,
              4,
              5,
              2,
              3
            ],
            "chosen": true
          }
        ],
        "note": "Scores 1 to 5 are my judgement from the memo, not measured."
      },
      {
        "kind": "northstar",
        "title": "Metric tree",
        "northStar": {
          "name": "Scan-and-pay transactions per monthly user",
          "detail": "Share gains come from frequency",
          "target": "+3% (est.)"
        },
        "inputs": [
          {
            "name": "Median time from open to pay screen",
            "detail": "The habit lives or dies here",
            "target": "−30% (est.)"
          },
          {
            "name": "Promo tap, then back within 3 s",
            "detail": "Proxy for mis-taps on the banner",
            "target": "−80% (est.)"
          },
          {
            "name": "Credit offers shown to declined users",
            "detail": "Stops the trust leak",
            "target": "−50% (est.)"
          },
          {
            "name": "Likely-next slot used",
            "detail": "Taps vs hides",
            "target": "sample data"
          }
        ],
        "guardrails": [
          {
            "name": "Financial services revenue per user",
            "target": "within −5% (est.)"
          },
          {
            "name": "Payment success rate",
            "target": "no drop"
          },
          {
            "name": "Services used per user",
            "target": "no drop"
          }
        ],
        "note": "Targets are my estimates for an 8-week test."
      }
    ]
  },
  "metrics": {
    "northStar": "Scan-and-pay transactions per monthly user",
    "rows": [
      {
        "name": "Median open-to-pay time",
        "target": "−30% (est.)",
        "how": "Client timing from open to pay screen"
      },
      {
        "name": "Promo tap then back in 3 s",
        "target": "−80% (est.)",
        "how": "Event pairs on the banner slot"
      }
    ],
    "tests": [],
    "note": "Every target is my estimate, not a benchmark."
  },
  "next": {
    "items": [
      "Measure open-to-pay time on low-end phones before any layout change"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/work/img/paytm-before-after.webp",
        "alt": "Mock layouts: today's Paytm home vs a scan-first home"
      }
    ],
    "stat": "Reviews complain about slowness over 3 times as often as about ads."
  }
};

export default project;
