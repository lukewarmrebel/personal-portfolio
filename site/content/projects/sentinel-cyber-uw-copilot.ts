// About the project: Sentinel: an AI helper for cyber insurance underwriters
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "sentinel-cyber-uw-copilot",
  "group": "agents",
  "order": 1,
  "title": "Sentinel: an AI helper for cyber insurance underwriters",
  "tag": "Live demo · Insurance",
  "tags": [
    "Live demo",
    "AI",
    "Insurance"
  ],
  "card": {
    "thumb": "/sentinel/01_hero.png"
  },
  "oneLine": "My own prototype of an AI tool for cyber insurance underwriters. It reads a company's documents, flags risks and conflicts with page links, and drafts a summary. The underwriter decides.",
  "links": [
    {
      "label": "Open the live demo",
      "href": "https://uwcopilot-cyberinsurance.vercel.app"
    },
    {
      "label": "How I'd test it",
      "href": "/projects/sentinel-ai-eval-teardown"
    }
  ],
  "proof": "I know where AI should help an insurance decision, and where a person must stay in charge.",
  "tiles": [
    {
      "value": "5",
      "label": "layers in the AI stack"
    },
    {
      "value": "4",
      "label": "tiers in my test plan"
    }
  ],
  "label": "My own prototype, shown as a walk-through demo. Not a deployed tool. Targets on this page are est.",
  "glance": {
    "problem": "Cyber insurance underwriters read piles of company documents before they can judge the risk. Conflicts between documents are easy to miss.",
    "users": "Underwriters pricing cyber insurance for mid-size companies.",
    "role": "Solo: mapped the AI stack, designed the test plan and made the walk-through demo site.",
    "outcome": "A live demo you can click through, plus a scorecard for how I'd judge the AI."
  },
  "solution": {
    "summary": "I mapped Sentinel as five layers: read the documents, add outside risk data, check against guidelines, rank the case, and draft a summary. I then designed how an underwriter would check each AI output.",
    "steps": [
      "Read: OCR and an AI model pull facts from forms and audits",
      "Enrich: outside scan data and past cases add context",
      "Check: rules match facts against underwriting guidelines",
      "Rank: cases sorted by risk in a work queue",
      "Draft: an AI summary with page links for the underwriter to edit"
    ],
    "decisions": [
      {
        "decision": "Every flag must cite a page or scan",
        "why": "Underwriters won't act on a claim they can't check",
        "rejected": "A single risk score with no reasons"
      },
      {
        "decision": "The human approves every decision",
        "why": "Keeps trust and keeps regulators comfortable",
        "rejected": "Auto-binding low-risk cases"
      },
      {
        "decision": "A 4-tier way to test the AI",
        "why": "Output quality alone misses whether people use it well",
        "rejected": "Accuracy as the only test"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/sentinel-cyber-uw-copilot/1-queue.svg",
        "caption": "Work queue ranked by risk"
      },
      {
        "src": "/projects/sentinel-cyber-uw-copilot/2-flags.svg",
        "caption": "Red flags, each with its page link"
      },
      {
        "src": "/projects/sentinel-cyber-uw-copilot/3-compare.svg",
        "caption": "Proposal form vs audit, side by side"
      },
      {
        "src": "/projects/sentinel-cyber-uw-copilot/4-summary.svg",
        "caption": "Drafted decision the underwriter edits"
      }
    ],
    "caption": "My wireframes of the core screens. Company names and numbers are sample data.",
    "title": "Core screens"
  },
  "judgment": {
    "used": "Jobs to be done, a trade-off on how much the AI should decide, and a flow with a human gate at each step. In underwriting, who makes the call is the product decision.",
    "skipped": "HEART, an emotional journey, RICE and a market size. Underwriters are paid to decide well, not to enjoy the tool, so the real outcome is the loss ratio, and that is in my test plan."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "a new submission arrives",
            "want": "it triaged and ranked by risk",
            "so": "I open the most urgent case first"
          },
          {
            "when": "two documents disagree",
            "want": "the conflict shown side by side",
            "so": "I ask the broker the right question"
          },
          {
            "when": "I'm ready to quote",
            "want": "a drafted summary with page links",
            "so": "I check, edit and send in minutes"
          }
        ]
      },
      {
        "kind": "tradeoff",
        "title": "How much should the AI decide?",
        "criteria": [
          {
            "name": "Time saved",
            "weight": 4
          },
          {
            "name": "Underwriter trust",
            "weight": 5
          },
          {
            "name": "Regulator comfort",
            "weight": 4
          },
          {
            "name": "Build effort",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "AI decides, human audits",
            "scores": [
              5,
              2,
              1,
              3
            ]
          },
          {
            "name": "AI flags and drafts, human decides",
            "scores": [
              4,
              5,
              5,
              3
            ],
            "chosen": true
          },
          {
            "name": "AI search only",
            "scores": [
              2,
              4,
              5,
              5
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. Keeping the human in charge wins on trust."
      }
    ]
  },
  "flow": {
    "title": "From submission to decision",
    "nodes": [
      {
        "label": "Broker sends a cyber submission",
        "kind": "start"
      },
      {
        "label": "AI reads forms, audit and external scan"
      },
      {
        "label": "Could every page be read?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Flag the page and ask for a clean copy"
        }
      },
      {
        "label": "Red flags and conflicts listed with page links"
      },
      {
        "label": "Case ranked in the work queue"
      },
      {
        "label": "Underwriter agrees with the flags?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Mark wrong with a reason; logged for tuning"
        }
      },
      {
        "label": "AI drafts the decision summary"
      },
      {
        "label": "Underwriter approves or overrides",
        "kind": "end"
      }
    ],
    "caption": "The AI reads and drafts. The underwriter decides at every gate."
  },
  "metrics": {
    "northStar": "Cases decided per underwriter per week, with loss ratio held steady",
    "rows": [
      {
        "name": "Output quality",
        "target": "est. 85% flags right",
        "how": "Underwriters mark a sample of flags right or wrong"
      },
      {
        "name": "Reasoning",
        "target": "est. 90% valid links",
        "how": "Check the cited page actually supports the flag"
      },
      {
        "name": "Human-AI teamwork",
        "target": "est. < 20% overrides",
        "how": "Overrides and their reasons, per underwriter"
      },
      {
        "name": "Portfolio outcome",
        "target": "no worse than today",
        "how": "Loss ratio of AI-assisted cases vs the rest, over 12 months"
      }
    ],
    "tests": [
      "Pilot on 50 past cases where the outcome is known",
      "Blind test: underwriters with and without Sentinel on the same cases",
      "Set confidence thresholds: below them, the flag says \"check me\""
    ],
    "note": "These are the four tiers of my test plan. No real results; targets are est."
  },
  "next": {
    "items": [
      "Decide confidence thresholds for when a flag is shown",
      "Benchmark more than one AI model on the same 50 cases",
      "Add a portfolio view for underwriting heads"
    ]
  }
};

export default project;
