// About the project: Sentinel: an AI helper for cyber insurance underwriters
// Earlier project. Built from the site's own bullets and the live demo. How I approached it; illustrative numbers are sample data or est.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "sentinel-cyber-uw-copilot",
  "group": "earlier",
  "order": 1,
  "title": "Sentinel: an AI helper for cyber insurance underwriters",
  "oneLine": "A walk-through of an AI tool that reads a company's documents, flags risks and conflicts, and drafts a summary for the underwriter.",
  "tag": "Live demo · Insurance",
  "tags": [
    "Live demo",
    "AI",
    "Insurance"
  ],
  "links": [
    {
      "label": "Open the live demo",
      "href": "https://uwcopilot-cyberinsurance.vercel.app"
    }
  ],
  "card": {
    "thumb": "/sentinel/01_hero.png"
  },
  "tiles": [
    {
      "value": "5",
      "label": "layers in the AI stack"
    }
  ],
  "glance": {
    "problem": "Cyber insurance underwriters read piles of company documents to spot risks.",
    "users": "Underwriters pricing cyber insurance.",
    "role": "Solo: product teardown and walk-through site.",
    "outcome": "A live demo site that walks through the tool."
  },
  "problem": {
    "persona": {
      "name": "Meera, cyber underwriter",
      "who": "Prices cyber insurance for mid-size companies (illustrative persona)",
      "context": "Each new submission comes with a proposal form, an audit report and scan results. She reads all of it before she can quote.",
      "needs": [
        "See the riskiest cases first",
        "Catch places where documents disagree",
        "A draft decision she can check and edit",
        "Know where every AI claim came from"
      ],
      "frustrations": [
        "Hours spent reading before any judgement",
        "Copy-pasted answers in proposal forms",
        "AI tools that give a score with no reason",
        "Brokers chasing her for a quote"
      ]
    },
    "jtbd": "When a new cyber submission lands, I want the risks and contradictions pulled out with proof, so I can spend my time on the decision instead of the reading."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "Framing the problem with CIRCLES",
        "steps": {
          "comprehend": "Underwriters spend most of a case reading documents, not judging risk.",
          "identify": "Cyber underwriters first; brokers and risk managers second.",
          "report": "Fast triage, conflicts flagged with proof, a draft decision they control.",
          "cut": "Start with red flags and document conflicts. They save the most reading time.",
          "list": "Risk score, red flags engine, document compare, co-pilot chat, renewal alerts.",
          "evaluate": "More automation saves time but risks trust. Every flag must cite its source.",
          "summarise": "An AI helper that reads and flags. The underwriter still decides."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (no interviews done yet)",
        "methods": [
          {
            "method": "Shadowing",
            "who": "Cyber underwriters at an insurer",
            "howMany": "5",
            "how": "Sit beside them through 2 real cases each"
          },
          {
            "method": "Interviews",
            "who": "Underwriting heads and brokers",
            "howMany": "6",
            "how": "Where do cases stall, and why?"
          },
          {
            "method": "Flag review",
            "who": "Underwriters checking AI flags",
            "howMany": "50 cases",
            "how": "Mark each flag right or wrong"
          }
        ],
        "findings": [
          {
            "insight": "Reading eats the day",
            "evidence": "Hypothesis to test in shadowing",
            "group": "Time"
          },
          {
            "insight": "Conflicts hide across documents",
            "evidence": "Hypothesis: proposal vs audit gaps are missed",
            "group": "Risk"
          },
          {
            "insight": "Trust needs a source",
            "evidence": "Hypothesis: flags without a page link get ignored",
            "group": "Trust"
          }
        ],
        "questions": [
          "Walk me through your last cyber case. Where did the time go?",
          "When did a document contradict another? How did you catch it?",
          "What would make you ignore an AI flag?",
          "Who signs off when you disagree with a score?"
        ],
        "note": "A plan with hypotheses, not findings."
      },
      {
        "kind": "market",
        "title": "Where Sentinel fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "Commercial cyber insurance written worldwide",
            "value": "est.",
            "assumption": "Fast-growing line; every policy needs underwriting"
          },
          {
            "level": "SAM",
            "label": "Mid-market cyber cases read by hand",
            "assumption": "Small cases are auto-rated; large ones are bespoke"
          },
          {
            "level": "SOM",
            "label": "Underwriting teams at 3 to 5 insurers, year 1",
            "assumption": "A pilot-led sale, one team at a time"
          }
        ],
        "positioning": {
          "x": [
            "Scores only",
            "Explains with proof"
          ],
          "y": [
            "One data source",
            "Reads everything"
          ],
          "points": [
            {
              "name": "External scan tools",
              "x": 0.2,
              "y": 0.2
            },
            {
              "name": "Rating engines",
              "x": 0.15,
              "y": 0.55
            },
            {
              "name": "Generic AI chat",
              "x": 0.55,
              "y": 0.7
            },
            {
              "name": "Sentinel",
              "x": 0.85,
              "y": 0.85,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Reads documents",
            "External scan",
            "Conflict check",
            "Cites source",
            "Feedback loop"
          ],
          "rows": [
            {
              "name": "External scan tools",
              "values": [
                "no",
                "yes",
                "no",
                "partial",
                "no"
              ]
            },
            {
              "name": "Rating engines",
              "values": [
                "partial",
                "partial",
                "no",
                "no",
                "no"
              ]
            },
            {
              "name": "Generic AI chat",
              "values": [
                "yes",
                "no",
                "partial",
                "unclear",
                "no"
              ]
            },
            {
              "name": "Sentinel",
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
            "value": "Ransomware",
            "label": "Claims push insurers to ask harder security questions"
          },
          {
            "value": "Long forms",
            "label": "Proposal forms and audits keep getting longer"
          },
          {
            "value": "AI + proof",
            "label": "Buyers want AI that shows its working"
          }
        ],
        "note": "Categories, not named products. Sizes are directional (est.)."
      },
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
            "want": "a drafted summary with sources",
            "so": "I check, edit and send in minutes"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "Underwriter journey today",
        "stages": [
          {
            "stage": "Receive",
            "doing": "Downloads forms and reports from the broker",
            "feeling": "okay",
            "pain": "Files in many formats",
            "opportunity": "Auto-read every file on arrival"
          },
          {
            "stage": "Read",
            "doing": "Reads 40+ pages per case",
            "feeling": "bad",
            "pain": "Slow, easy to miss a line",
            "opportunity": "Pull out key facts and flags"
          },
          {
            "stage": "Cross-check",
            "doing": "Compares form answers with the audit",
            "feeling": "bad",
            "pain": "Conflicts hide across files",
            "opportunity": "Side-by-side conflict view"
          },
          {
            "stage": "Decide",
            "doing": "Scores risk, sets terms",
            "feeling": "okay",
            "pain": "Judgement under time pressure",
            "opportunity": "Draft decision with reasons"
          },
          {
            "stage": "Bind",
            "doing": "Sends quote and conditions",
            "feeling": "good",
            "pain": "Rewriting the same notes",
            "opportunity": "One-click summary for the broker"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How the underwriter feels, with Sentinel",
        "steps": [
          {
            "step": "Case lands",
            "feeling": 0,
            "note": "Another long file"
          },
          {
            "step": "Triage ready",
            "feeling": 1,
            "note": "Knows where to look"
          },
          {
            "step": "Flag seems off",
            "feeling": -1,
            "note": "Doubts the AI"
          },
          {
            "step": "Checks the source",
            "feeling": 1,
            "note": "Page link shows it"
          },
          {
            "step": "Conflict found",
            "feeling": 2,
            "note": "Caught what she'd miss"
          },
          {
            "step": "Quote sent",
            "feeling": 2,
            "note": "Done in one sitting"
          }
        ],
        "note": "The dip is the moment of doubt. Showing the source is the fix."
      },
      {
        "kind": "rice",
        "title": "What to build first (sample scores, est.)",
        "rows": [
          {
            "item": "Red flags engine",
            "reach": 10,
            "impact": 3,
            "confidence": 0.8,
            "effort": 4
          },
          {
            "item": "Document conflict check",
            "reach": 8,
            "impact": 3,
            "confidence": 0.7,
            "effort": 3
          },
          {
            "item": "Risk-ranked work queue",
            "reach": 10,
            "impact": 2,
            "confidence": 0.8,
            "effort": 2
          },
          {
            "item": "Drafted decision summary",
            "reach": 9,
            "impact": 2,
            "confidence": 0.6,
            "effort": 3
          },
          {
            "item": "Co-pilot chat",
            "reach": 6,
            "impact": 1,
            "confidence": 0.5,
            "effort": 4
          },
          {
            "item": "Renewal alerts",
            "reach": 4,
            "impact": 2,
            "confidence": 0.5,
            "effort": 3
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "Scope for the first release",
        "must": [
          "Read forms and audit reports",
          "Red flags with page links",
          "Risk-ranked queue"
        ],
        "should": [
          "Document conflict check",
          "Right/wrong vote on each flag"
        ],
        "could": [
          "Co-pilot chat",
          "Renewal alerts"
        ],
        "wont": [
          "Auto-bind without a human",
          "Price setting by AI alone"
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
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria",
        "stories": [
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
      },
      {
        "kind": "northstar",
        "title": "Metric tree (targets are est.)",
        "northStar": {
          "name": "Cases decided per underwriter per week",
          "detail": "With quality held steady",
          "target": "est. +40%"
        },
        "inputs": [
          {
            "name": "Triage time",
            "detail": "Submission to ranked case",
            "target": "est. < 5 min"
          },
          {
            "name": "Flag precision",
            "detail": "Flags marked right",
            "target": "est. 85%+"
          },
          {
            "name": "Conflicts caught",
            "detail": "Per 100 cases",
            "target": "est. baseline +2x"
          },
          {
            "name": "Drafts approved",
            "detail": "With light edits",
            "target": "est. 60%"
          }
        ],
        "guardrails": [
          {
            "name": "Loss ratio on AI-assisted cases",
            "target": "no worse than today"
          },
          {
            "name": "Missed critical flags",
            "target": "est. < 2%"
          }
        ],
        "note": "Targets are est. and would be set after a baseline pilot."
      },
      {
        "kind": "heart",
        "title": "HEART for Sentinel (illustrative)",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Underwriters trust the flags",
            "signal": "Flags voted right",
            "metric": "% flags marked right"
          },
          {
            "dimension": "Engagement",
            "goal": "Flags get checked, not skipped",
            "signal": "Source opened",
            "metric": "% flags with source viewed"
          },
          {
            "dimension": "Adoption",
            "goal": "Teams use it on new cases",
            "signal": "Case opened in Sentinel",
            "metric": "% of new cases triaged by AI"
          },
          {
            "dimension": "Retention",
            "goal": "It stays part of the routine",
            "signal": "Weekly use",
            "metric": "Underwriters active 4 of 4 weeks"
          },
          {
            "dimension": "Task success",
            "goal": "Faster, sound decisions",
            "signal": "Case closed",
            "metric": "Median hours from submission to quote"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
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
      {
        "kind": "roadmap",
        "title": "Now, next, later",
        "now": [
          "Red flags with page links",
          "Risk-ranked queue",
          "Right/wrong vote"
        ],
        "next": [
          "Document conflict check",
          "Drafted decision summary"
        ],
        "later": [
          "Co-pilot chat",
          "Renewal alerts",
          "Portfolio view for underwriting heads"
        ]
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
        "label": "Red flags and conflicts listed with sources"
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
  "wireframes": {
    "screens": [
      {
        "src": "/projects/sentinel-cyber-uw-copilot/1-queue.svg",
        "caption": "Work queue ranked by risk"
      },
      {
        "src": "/projects/sentinel-cyber-uw-copilot/2-flags.svg",
        "caption": "Red flags, each with its source"
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
    "caption": "My wireframes of the core screens. Company names and numbers are sample data."
  },
  "solution": {
    "summary": "I mapped Sentinel as five layers: read the documents, add outside risk data, check against guidelines, rank the case, and draft a summary. I then designed how an underwriter would check each AI output.",
    "steps": [
      "Read: OCR and an AI model pull facts from forms and audits",
      "Enrich: outside scan data and past cases add context",
      "Check: rules match facts against underwriting guidelines",
      "Rank: cases sorted by risk in a work queue",
      "Draft: an AI summary with sources for the underwriter to edit"
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
        "target": "est. 90% with valid source",
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
  },
  "label": "How I approached it. A walk-through of the product, not a deployed tool. Numbers on this page are sample data or est.",
  "extra": {
    "images": [
      {
        "src": "/sentinel/01_hero.png",
        "alt": "Sentinel: an AI helper for cyber insurance underwriters: screen 1"
      },
      {
        "src": "/sentinel/02_dashboard.png",
        "alt": "Sentinel: an AI helper for cyber insurance underwriters: screen 2"
      },
      {
        "src": "/sentinel/05_app.png",
        "alt": "Sentinel: an AI helper for cyber insurance underwriters: screen 3"
      },
      {
        "src": "/sentinel/03_features.png",
        "alt": "Sentinel: an AI helper for cyber insurance underwriters: screen 4"
      },
      {
        "src": "/sentinel/04_workflow.png",
        "alt": "Sentinel: an AI helper for cyber insurance underwriters: screen 5"
      },
      {
        "src": "/sentinel/06_workflow2.png",
        "alt": "Sentinel: an AI helper for cyber insurance underwriters: screen 6"
      }
    ],
    "highlights": [
      "Mapped 5-layer stack: OCR+LLM ingestion → RAG risk intel → ML guideline alignment → smart triage → LLM summaries",
      "Designed 4-tier eval framework: Output Quality, Reasoning, Human-AI Collaboration, Portfolio Outcomes",
      "Identified critical open questions around confidence thresholds and model benchmarking"
    ],
    "skills": [
      "AI Product Analysis",
      "Eval Framework Design",
      "InsurTech",
      "RAG Architecture",
      "System Design"
    ],
    "paragraphs": [
      "Deep teardown of Sentinel's AI-powered cyber underwriting platform. Explored its 5-layer intelligence stack, Red Flags Engine for document conflict detection, and proposed a 4-tier AI eval rubric — questioning how AI augments underwriting judgment without replacing it."
    ]
  }
};

export default project;
