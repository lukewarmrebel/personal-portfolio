// About the project: How I'd judge an AI underwriting tool
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "sentinel-ai-eval-teardown",
  "group": "ai-testing",
  "order": 3,
  "title": "How I'd judge an AI underwriting tool",
  "oneLine": "A four-level scorecard for an AI that helps insurers price cyber risk: are its answers right, can it explain them, do people trust it, and does it improve results.",
  "tag": "PDF · Cyber insurance",
  "tags": [
    "PDF",
    "AI testing",
    "Cyber insurance"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/sentinel_teardown.pdf"
    }
  ],
  "tiles": [
    {
      "value": "4",
      "label": "levels in the scorecard"
    },
    {
      "value": "12+",
      "label": "metrics defined"
    },
    {
      "value": "4",
      "label": "open questions"
    }
  ],
  "label": "A teardown of my own prototype, Sentinel. The scorecard is how I'd judge it; screen numbers are sample data.",
  "glance": {
    "problem": "There is no standard way to judge whether an AI underwriting tool is doing a good job.",
    "users": "Insurers and product teams evaluating AI tools for cyber underwriting.",
    "role": "Solo: teardown and evaluation framework.",
    "outcome": "A PDF teardown with a 4-level scorecard."
  },
  "judgment": {
    "used": "One trade-off on how to judge the co-pilot, then the scorecard itself. An eval needs clear tiers and targets, nothing more.",
    "skipped": "CIRCLES, journey maps, an emotional journey, RICE, HEART and a market size. The main Sentinel page covers the product; this page is only about testing it."
  },
  "solution": {
    "summary": "Building the co-pilot is half the job. The other half is proving it helps, so I wrote a 4-tier scorecard that goes from “is it right” to “is the book better”.",
    "steps": [
      "Output quality",
      "Reasoning",
      "Human-AI",
      "Portfolio"
    ],
    "decisions": [
      {
        "decision": "Four tiers, not one score",
        "why": "A single score hides whether the AI is wrong, unexplained, over-trusted or simply not helping.",
        "rejected": "One overall AI score"
      },
      {
        "decision": "Evidence first",
        "why": "Every flag cites document, page and section. Underwriters can check it in seconds."
      },
      {
        "decision": "Override is the mechanism",
        "why": "Underwriter judgement becomes the training signal. A 0% override rate is a warning."
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/sentinel-ai-eval-teardown/1-red-flag.svg",
        "caption": "Tier 2 in practice: the flag shows its evidence chain and its confidence."
      },
      {
        "src": "/projects/sentinel-ai-eval-teardown/2-override.svg",
        "caption": "Tier 3: every override is captured with a reason, so judgement becomes the training signal."
      },
      {
        "src": "/projects/sentinel-ai-eval-teardown/3-scorecard.svg",
        "caption": "The scorecard I would review monthly. Numbers are sample data to show the layout."
      }
    ],
    "caption": "Wireframes of how the scorecard shows up in the product. Sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "tradeoff",
        "title": "How to judge the co-pilot",
        "criteria": [
          {
            "name": "Catches wrong answers",
            "weight": 5
          },
          {
            "name": "Measures trust",
            "weight": 4
          },
          {
            "name": "Ties to business results",
            "weight": 4
          },
          {
            "name": "Fast to run",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Accuracy metrics only",
            "scores": [
              4,
              1,
              1,
              5
            ]
          },
          {
            "name": "Underwriter surveys",
            "scores": [
              1,
              4,
              1,
              4
            ]
          },
          {
            "name": "A/B on decisions",
            "scores": [
              2,
              2,
              4,
              1
            ]
          },
          {
            "name": "4-tier scorecard",
            "scores": [
              5,
              4,
              4,
              3
            ],
            "chosen": true
          }
        ],
        "note": "Scores 1 to 5 are my judgement."
      }
    ]
  },
  "flow": {
    "title": "How I'd evaluate the co-pilot",
    "nodes": [
      {
        "label": "Submission comes in",
        "kind": "start"
      },
      {
        "label": "T1: are the flags and summaries right?",
        "kind": "step"
      },
      {
        "label": "Does every flag cite its evidence?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Fails T2. No black-box conclusions reach the underwriter."
        }
      },
      {
        "label": "T3: underwriter confirms or overrides, with a reason",
        "kind": "step"
      },
      {
        "label": "Is shown confidence close to real accuracy?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Recalibrate before raising thresholds."
        }
      },
      {
        "label": "Votes update flag priority weights",
        "kind": "step"
      },
      {
        "label": "T4: compare loss ratio with the manual book after a year",
        "kind": "end"
      }
    ],
    "caption": "Tiers 1 to 3 give answers in weeks. Tier 4 is the one that matters most, and the slowest."
  },
  "metrics": {
    "northStar": "Submissions decided with AI help and no material miss",
    "rows": [
      {
        "name": "Precision@K on flagged risks",
        "target": "≥ 0.8 (est.)",
        "how": "Against expert-labelled submissions"
      },
      {
        "name": "Hallucination rate on cross-refs",
        "target": "< 2% (est.)",
        "how": "Sampled flags checked against the original pages"
      },
      {
        "name": "Override rate + confidence delta",
        "target": "10-30% (est.)",
        "how": "Override logs"
      }
    ],
    "tests": [
      "Calibration: flags at 90% confidence are right about 90% of the time",
      "Frozen test set to compare each model version"
    ],
    "note": "Targets are my estimates. No real deployment data."
  },
  "next": {
    "items": [
      "Label 100 sample submissions to measure tier 1 and 2",
      "Run a shadow review with 2 or 3 underwriters",
      "Build the synthetic portfolio benchmark"
    ]
  },
  "extra": {
    "paragraphs": [
      "This is my teardown of how an AI-native underwriting platform should be tested end to end. I set out a 4-tier rubric: Output Quality, Reasoning Transparency, Human-AI Collaboration and Portfolio Outcomes. Each tier has specific metrics and red flag thresholds. I also list open questions on confidence calibration."
    ]
  }
};

export default project;
