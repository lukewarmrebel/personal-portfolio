// About the project: Sentinel: an AI helper for cyber insurance underwriters
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Product spec layout (`spec`): personas, current process, future process with how each step is run, metrics,
// prioritisation and trade-offs, guardrails and risks, acceptance criteria last.
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
    "used": "Personas and jobs to be done, a current and future process map, a north star with guardrail metrics, MoSCoW, a weighted trade-off matrix, a risk matrix and acceptance criteria.",
    "list": [
      {
        "name": "User personas and jobs to be done",
        "why": "to pin down who uses Sentinel, what each person is trying to get done, and what they do not want from it."
      },
      {
        "name": "Current and future process map",
        "why": "to show where the time goes today, and to decide which steps the AI runs, which it helps with, and which stay with a person."
      },
      {
        "name": "North star and guardrail metrics",
        "why": "one number that says it works, plus the numbers that must not get worse, like the loss ratio."
      },
      {
        "name": "MoSCoW",
        "why": "to cut version 1 down to what an underwriter needs on day one."
      },
      {
        "name": "Weighted trade-off matrix",
        "why": "to decide how much the AI should decide on its own."
      },
      {
        "name": "Risk matrix",
        "why": "to rank what can go wrong and say how I'd handle each one."
      },
      {
        "name": "Acceptance criteria",
        "why": "to define done in steps a tester can check."
      }
    ]
  },
  "spec": {
    "personas": {
      "intro": "Two people use Sentinel. One works the cases. The other owns the results of the whole team.",
      "items": [
        {
          "name": "Meera, cyber underwriter",
          "who": "Prices cyber insurance for mid-size companies. Works a queue of broker submissions.",
          "personality": "Careful and a bit sceptical. She trusts what she can check. She skims first and reads deep only when something looks off.",
          "jobs": [
            "When a new submission arrives, rank it by risk so I open the most urgent case first.",
            "When two documents disagree, show me the conflict side by side so I ask the broker the right question.",
            "When I'm ready to quote, give me a drafted summary with page links so I can check, edit and send it fast."
          ],
          "pains": [
            "She reads piles of forms, audits and scans before she can judge the risk.",
            "Conflicts between documents are easy to miss.",
            "She copies facts into notes and summaries by hand.",
            "Cases are worked in the order they arrive, not by risk."
          ],
          "goals": [
            "Decide faster without missing a red flag.",
            "Check every flag against the page it came from.",
            "Keep her own judgement on every decision."
          ],
          "nonGoals": [
            "She does not want the AI to set the price.",
            "She does not want one risk score with no reasons.",
            "She does not want to stop talking to brokers."
          ]
        },
        {
          "name": "Vikram, head of cyber underwriting",
          "who": "Runs a team of underwriters and owns the results of the cyber book.",
          "personality": "Numbers first and cautious. He thinks about the loss ratio and the regulator before speed.",
          "jobs": [
            "When the queue grows, sort cases by risk so my best people get the hardest ones.",
            "When an underwriter overrides the AI, log the reason so I can see where the tool is wrong.",
            "When audit or the regulator asks, show who decided what and why."
          ],
          "pains": [
            "He can't see how consistent decisions are across the team.",
            "New underwriters take a long time to learn what to look for.",
            "A black-box AI would be hard to defend to a regulator."
          ],
          "goals": [
            "More cases decided per underwriter per week.",
            "Loss ratio held steady or better.",
            "A full audit trail for every decision."
          ],
          "nonGoals": [
            "Auto-binding low-risk cases with no human.",
            "Faster decisions if they cost loss ratio."
          ]
        }
      ]
    },
    "current": {
      "intro": "How a cyber submission gets decided today, without Sentinel.",
      "steps": [
        {
          "step": "Broker sends a submission",
          "detail": "The proposal form, a security audit and other documents arrive as PDFs and scans.",
          "pain": "Nothing is ranked. Cases wait in the order they came in."
        },
        {
          "step": "Underwriter reads every document",
          "detail": "She reads each form and audit by hand to pull out the facts.",
          "pain": "Slow, and tired eyes miss things."
        },
        {
          "step": "Underwriter looks up outside data",
          "detail": "She checks external scans and past cases in separate tools.",
          "pain": "The context lives in different places."
        },
        {
          "step": "Underwriter compares the documents",
          "detail": "She checks the proposal form answers against the audit.",
          "pain": "Conflicts between documents are easy to miss."
        },
        {
          "step": "Underwriter checks the guidelines",
          "detail": "She matches the facts against underwriting guidelines from memory or the manual.",
          "pain": "Two underwriters can read the same rule differently."
        },
        {
          "step": "Underwriter writes the decision",
          "detail": "She writes a summary from scratch, decides and prices, then replies to the broker.",
          "pain": "Most of the writing is copying facts she already found."
        }
      ]
    },
    "future": {
      "intro": "The same journey with Sentinel. The AI reads and drafts. The underwriter decides at every gate.",
      "steps": [
        {
          "step": "Read the documents",
          "detail": "OCR and an AI model pull facts from forms and audits. Each fact keeps a link to its page.",
          "mode": "ai",
          "why": "Low risk. Every fact links to its page, and unreadable pages get flagged, not guessed."
        },
        {
          "step": "Add outside risk data",
          "detail": "External scan data and past cases are attached to the case.",
          "mode": "ai",
          "why": "It only adds context from trusted sources. Nothing is judged here."
        },
        {
          "step": "Rank the case in the work queue",
          "detail": "Cases are sorted by risk, with the top reason shown on each.",
          "mode": "ai",
          "why": "Order only changes what gets opened first. The underwriter can still pick any case."
        },
        {
          "step": "Flag risks and conflicts",
          "detail": "Rules check the facts against guidelines. Red flags and document conflicts appear with page links.",
          "mode": "assisted",
          "why": "The AI finds the flags. The underwriter confirms each one or marks it wrong."
        },
        {
          "step": "Review conflicts with the broker",
          "detail": "Both statements show side by side with a suggested question for the broker.",
          "mode": "assisted",
          "why": "The AI suggests the question. The underwriter chooses what to ask."
        },
        {
          "step": "Draft the decision summary",
          "detail": "The AI drafts a summary with page links. The underwriter edits it.",
          "mode": "assisted",
          "why": "The draft saves typing, but every line is checked before it counts."
        },
        {
          "step": "Decide and price",
          "detail": "The underwriter approves or overrides. Overrides keep a reason.",
          "mode": "human",
          "why": "This is the risk call and the price. A person owns it, and regulators expect that."
        },
        {
          "step": "Learn from mistakes",
          "detail": "Overrides and \"No, wrong\" marks are logged and reviewed.",
          "mode": "human",
          "why": "People review the errors before any rule or prompt changes."
        }
      ]
    },
    "metrics": {
      "northStar": {
        "name": "Cases decided per underwriter per week, with loss ratio held steady",
        "detail": "Speed only counts if the book stays healthy. So the north star pairs the two."
      },
      "inputs": [
        {
          "name": "Flag accuracy",
          "target": "est. 85% of flags right",
          "how": "Underwriters mark a sample of flags right or wrong."
        },
        {
          "name": "Valid page links",
          "target": "est. 90% of links valid",
          "how": "Check that the cited page really supports the flag."
        }
      ],
      "guardrails": [
        {
          "name": "Override rate",
          "target": "est. under 20%",
          "how": "Overrides and their reasons, per underwriter. Near zero is also a warning: it can mean people stopped checking."
        },
        {
          "name": "Loss ratio",
          "target": "no worse than today",
          "how": "Loss ratio of AI-assisted cases vs the rest, over 12 months."
        },
        {
          "name": "Decisions sent without approval",
          "target": "zero",
          "how": "Every decision sent to a broker has an underwriter's approval on record."
        }
      ],
      "tests": [
        "Pilot on 50 past cases where the outcome is known.",
        "Blind test: underwriters with and without Sentinel on the same cases.",
        "Confidence thresholds: below them, the flag says \"check me\"."
      ],
      "note": "Sentinel is a concept, so there are no real results. Targets are est."
    },
    "priorities": {
      "intro": "I kept version 1 to the steps that save the most reading and keep the underwriter in charge.",
      "items": [
        {
          "item": "Red flags with page links",
          "call": "Must",
          "why": "Underwriters won't act on a flag they can't check."
        },
        {
          "item": "Side-by-side conflict view",
          "call": "Must",
          "why": "This is where misses happen today."
        },
        {
          "item": "Approve or override, with a reason",
          "call": "Must",
          "why": "Keeps the human in charge and tells me where the AI is wrong."
        },
        {
          "item": "Risk-ranked work queue",
          "call": "Should",
          "why": "Saves time, but a team can start without it."
        },
        {
          "item": "Confidence thresholds and a \"check me\" label",
          "call": "Should",
          "why": "Shows the underwriter when the AI is unsure."
        },
        {
          "item": "Portfolio view for underwriting heads",
          "call": "Could",
          "why": "Useful for Vikram once there is enough data."
        },
        {
          "item": "Compare more than one AI model on the same 50 cases",
          "call": "Could",
          "why": "Worth it before a real pilot, not before the first demo."
        },
        {
          "item": "AI sets the price or binds the policy",
          "call": "Won't",
          "why": "Trust and regulators. The price stays with a person."
        }
      ],
      "matrix": {
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
        "note": "Scores 1 to 5 are my judgement. Keeping the human in charge wins on trust and regulator comfort."
      }
    },
    "guardrails": {
      "rules": [
        "No link, no flag. Every flag cites a page or a scan.",
        "The AI never sets the price.",
        "Nothing goes to the broker without the underwriter's approval.",
        "Reasons show first, the score second.",
        "Unreadable pages get a \"couldn't read\" warning. The AI never guesses them.",
        "Every override keeps its reason, and every decision keeps an audit trail."
      ],
      "risks": [
        {
          "risk": "AI invents a flag that isn't in the documents",
          "likelihood": "medium",
          "impact": "high",
          "mitigation": "Every flag must link to a page or scan; no link, no flag"
        },
        {
          "risk": "Underwriters over-trust the score",
          "likelihood": "medium",
          "impact": "high",
          "mitigation": "Show reasons first, score second; require a note on approval"
        },
        {
          "risk": "Bad scans break document reading",
          "likelihood": "high",
          "impact": "medium",
          "mitigation": "Show a \"couldn't read\" warning per page"
        },
        {
          "risk": "Regulator questions AI pricing",
          "likelihood": "low",
          "impact": "high",
          "mitigation": "AI never sets price; keep an audit trail"
        }
      ]
    },
    "acceptance": [
      {
        "story": "Work the riskiest case first",
        "given": "new submissions in the queue",
        "when": "AI triage finishes",
        "then": "cases are sorted by risk and each shows its top reason"
      },
      {
        "story": "See red flags with proof",
        "given": "a submission with an audit report",
        "when": "AI triage finishes",
        "then": "each flag shows its severity and the page or scan it came from"
      },
      {
        "story": "Spot document conflicts",
        "given": "the proposal form and audit disagree",
        "when": "I open the case",
        "then": "both statements appear side by side with a suggested question"
      },
      {
        "story": "Handle a bad scan",
        "given": "a page the AI can't read",
        "when": "triage runs",
        "then": "the page shows a \"couldn't read\" warning and no flag is made from it"
      },
      {
        "story": "Correct the AI",
        "given": "a flag I think is wrong",
        "when": "I tap \"No, wrong\" and add a reason",
        "then": "the flag is hidden for this case and logged for review"
      },
      {
        "story": "Keep the human in charge",
        "given": "a drafted decision",
        "when": "I approve or override it",
        "then": "nothing goes to the broker without my approval, and overrides keep my reason"
      }
    ]
  }
};

export default project;
