// About the project: How I'd judge an AI underwriting tool
// Schema: src/lib/projectSchema.ts. Facts come from the project's own files; illustrative numbers say "est." or "sample data".
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
  "glance": {
    "problem": "There is no standard way to judge whether an AI underwriting tool is doing a good job.",
    "users": "Insurers and product teams evaluating AI tools for cyber underwriting.",
    "role": "Solo: teardown and evaluation framework.",
    "outcome": "A PDF teardown with a 4-level scorecard."
  },
  "problem": {
    "persona": {
      "name": "Meera, 38, Mumbai",
      "who": "Senior cyber underwriter at a commercial insurer",
      "context": "A broker sends 60 pages: a SOC report, a questionnaire, an audit PDF. Sentinel flags 10 issues. She has to decide which to trust before quoting today.",
      "needs": [
        "Know why each flag was raised",
        "See how sure the AI is",
        "Override without a fight"
      ],
      "frustrations": [
        "Black-box risk scores",
        "No benchmark for cyber underwriting AI",
        "Hard to tell if the tool improves results"
      ]
    },
    "jtbd": "When an AI co-pilot flags risks in a cyber submission, I want to see its evidence, its confidence and its track record, so I can decide faster without handing over my judgement."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "How I framed it (CIRCLES)",
        "steps": {
          "comprehend": "Standard accuracy metrics break when an AI reads, cross-checks, scores and summarises.",
          "identify": "Underwriters using the tool, and the insurer deciding whether it works.",
          "report": "Right answers, shown evidence, calibrated trust, and better portfolio results.",
          "cut": "Start with tiers 1 to 3, which can be measured in weeks. Tier 4 takes a year.",
          "list": "Accuracy only, user surveys, A/B on decisions, or a 4-tier rubric.",
          "evaluate": "Accuracy alone misses trust and outcomes. Surveys miss correctness.",
          "summarise": "A 4-tier scorecard: output quality, reasoning, human-AI collaboration, portfolio outcomes."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (no interviews done yet)",
        "methods": [
          {
            "method": "Interviews",
            "who": "Cyber underwriters at insurers and MGAs",
            "howMany": "8",
            "how": "Walk through a recent submission and where they'd trust an AI flag"
          },
          {
            "method": "Shadow review",
            "who": "Underwriters using Sentinel next to their normal process",
            "howMany": "50 submissions",
            "how": "Log every flag, vote and override"
          },
          {
            "method": "Expert labelling",
            "who": "Two senior underwriters",
            "howMany": "100 submissions",
            "how": "Label true risks to measure precision and recall"
          }
        ],
        "questions": [
          "Which flags would you act on without checking the document?",
          "When did a tool's confidence score mislead you?",
          "What would make you override the AI?",
          "How would you know the tool made your book better?"
        ],
        "note": "A plan. Sentinel is my prototype; no underwriter study has been run."
      },
      {
        "kind": "market",
        "title": "Where AI underwriting tools sit",
        "funnel": [
          {
            "level": "TAM",
            "label": "Commercial insurers writing cyber cover worldwide",
            "value": "Hundreds (est.)",
            "assumption": "My rough read; not a counted number."
          },
          {
            "level": "SAM",
            "label": "Those piloting AI for submission review",
            "value": "1 in 4 (est.)",
            "assumption": "Assume a quarter are piloting by 2026."
          },
          {
            "level": "SOM",
            "label": "Mid-size cyber teams that need an eval scorecard first",
            "value": "20 teams (est.)",
            "assumption": "A first target list for a pilot."
          }
        ],
        "positioning": {
          "x": [
            "Black-box score",
            "Shows its evidence"
          ],
          "y": [
            "Judged on accuracy only",
            "Judged on trust and outcomes"
          ],
          "points": [
            {
              "name": "Generic risk scores",
              "x": 0.15,
              "y": 0.15
            },
            {
              "name": "Document AI tools",
              "x": 0.55,
              "y": 0.25
            },
            {
              "name": "Manual review",
              "x": 0.7,
              "y": 0.6
            },
            {
              "name": "Sentinel + scorecard",
              "x": 0.88,
              "y": 0.88,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Cites the page",
            "Shows confidence",
            "Override with reason",
            "Audit trail",
            "Outcome tracking"
          ],
          "rows": [
            {
              "name": "Generic risk scores",
              "values": [
                "no",
                "partial",
                "no",
                "unclear",
                "unclear"
              ]
            },
            {
              "name": "Document AI tools",
              "values": [
                "partial",
                "partial",
                "unclear",
                "unclear",
                "no"
              ]
            },
            {
              "name": "Manual review",
              "values": [
                "yes",
                "no",
                "yes",
                "partial",
                "partial"
              ]
            },
            {
              "name": "Sentinel + scorecard",
              "values": [
                "yes",
                "yes",
                "yes",
                "yes",
                "partial"
              ],
              "me": true
            }
          ]
        },
        "trends": [
          {
            "value": "0",
            "label": "industry benchmarks for cyber underwriting models I could find"
          },
          {
            "value": "5",
            "label": "layers in Sentinel: ingestion, risk intelligence, guidelines, triage, summaries"
          },
          {
            "value": "97%",
            "label": "confidence on the sample backup-conflict flag in the teardown"
          }
        ],
        "note": "Funnel levels and competitor positions are my estimates. “Partial” means it exists in some products."
      },
      {
        "kind": "jtbd",
        "title": "Jobs the scorecard is hired for",
        "items": [
          {
            "when": "the AI raises a flag",
            "want": "the page it came from and its confidence",
            "so": "I can check it in seconds"
          },
          {
            "when": "I disagree with a flag",
            "want": "to override with a reason",
            "so": "the model learns and the audit trail stays clean"
          },
          {
            "when": "leadership asks if the tool works",
            "want": "one scorecard across four tiers",
            "so": "the answer isn't “people like it”"
          },
          {
            "when": "the model keeps learning",
            "want": "a fixed benchmark to compare against",
            "so": "I can tell better from different"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "A submission with Sentinel, and what I'd measure at each step",
        "stages": [
          {
            "stage": "Ingest",
            "doing": "Emails, PDFs, scans become data",
            "feeling": "good",
            "pain": "Missing documents",
            "opportunity": "Completeness check (T1)"
          },
          {
            "stage": "Flags",
            "doing": "AI cross-examines documents",
            "feeling": "okay",
            "pain": "False positives waste time",
            "opportunity": "Precision@K, hallucination rate (T1)"
          },
          {
            "stage": "Review",
            "doing": "Underwriter reads the evidence",
            "feeling": "okay",
            "pain": "Can't see why",
            "opportunity": "Evidence chain, attribution (T2)"
          },
          {
            "stage": "Decide",
            "doing": "Confirms or overrides",
            "feeling": "good",
            "pain": "Over-trust over time",
            "opportunity": "Override rate, confidence delta (T3)"
          },
          {
            "stage": "Book",
            "doing": "Policy bound and renewed",
            "feeling": "okay",
            "pain": "Results show a year later",
            "opportunity": "Loss ratio, adverse selection (T4)"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How an underwriter's trust might move",
        "steps": [
          {
            "step": "First flags",
            "feeling": -1,
            "note": "Sceptical"
          },
          {
            "step": "Sees evidence",
            "feeling": 1,
            "note": "Can check it"
          },
          {
            "step": "Catches a conflict",
            "feeling": 2,
            "note": "Saved a bad quote"
          },
          {
            "step": "Months later",
            "feeling": 0,
            "note": "Risk of over-trust"
          },
          {
            "step": "Calibration review",
            "feeling": 1,
            "note": "Trust earned, checked"
          }
        ],
        "note": "My hypothesis, to test in shadow review."
      },
      {
        "kind": "rice",
        "title": "Which evals to build first (sample scores, est.)",
        "rows": [
          {
            "item": "Precision@K on flags",
            "reach": 10,
            "impact": 3,
            "confidence": 0.8,
            "effort": 2
          },
          {
            "item": "Hallucination on cross-refs",
            "reach": 10,
            "impact": 3,
            "confidence": 0.7,
            "effort": 3
          },
          {
            "item": "Override rate + reasons",
            "reach": 8,
            "impact": 2,
            "confidence": 0.9,
            "effort": 1
          },
          {
            "item": "Confidence calibration",
            "reach": 8,
            "impact": 2,
            "confidence": 0.6,
            "effort": 3
          },
          {
            "item": "Loss ratio vs manual",
            "reach": 5,
            "impact": 3,
            "confidence": 0.4,
            "effort": 8
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "What goes in the first scorecard",
        "must": [
          "Precision@K on flagged risks",
          "Hallucination rate on cross-references",
          "Evidence chain completeness",
          "Override rate with reasons"
        ],
        "should": [
          "Confidence calibration",
          "Time to decision"
        ],
        "could": [
          "Synthetic portfolio benchmark",
          "Adverse selection catch rate"
        ],
        "wont": [
          "Loss ratio claims before a year of data",
          "One overall “AI score”"
        ]
      },
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
      },
      {
        "kind": "acceptance",
        "title": "Design rules as stories",
        "stories": [
          {
            "story": "Evidence first",
            "given": "Sentinel raises a red flag",
            "when": "the underwriter opens it",
            "then": "it shows the document, page and section for each side"
          },
          {
            "story": "Calibrated confidence",
            "given": "a flag at 60% confidence",
            "when": "it is shown",
            "then": "it is marked “unsure” and asks for a document, not shown as a finding"
          },
          {
            "story": "Override by design",
            "given": "the underwriter overrides a flag",
            "when": "they save it",
            "then": "a reason is required and the flag's weight updates"
          },
          {
            "story": "Audit trail",
            "given": "any AI-assisted decision",
            "when": "it is made",
            "then": "model version, confidence and the human action are logged"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "North star and what drives it",
        "northStar": {
          "name": "Submissions decided with AI help and no material miss",
          "detail": "Faster, and nothing important slipped",
          "target": "90% (est.)"
        },
        "inputs": [
          {
            "name": "Precision@5 on flags",
            "detail": "T1 output quality",
            "target": "≥ 0.8 (est.)"
          },
          {
            "name": "Evidence chain complete",
            "detail": "T2 reasoning",
            "target": "≥ 95% (est.)"
          },
          {
            "name": "Time to decision",
            "detail": "T3 collaboration",
            "target": "-30% (est.)"
          },
          {
            "name": "Confidence calibration gap",
            "detail": "Shown vs real accuracy",
            "target": "≤ 5 pts (est.)"
          }
        ],
        "guardrails": [
          {
            "name": "Hallucination on cross-refs",
            "target": "< 2% (est.)"
          },
          {
            "name": "Override rate",
            "target": "10-30% (est.)"
          },
          {
            "name": "Loss ratio vs manual book",
            "target": "no worse"
          }
        ],
        "note": "An override rate near 0% is a warning too: it can mean over-trust. All targets are estimates."
      },
      {
        "kind": "heart",
        "title": "HEART for the co-pilot",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Underwriters trust the flags",
            "signal": "Trust score in a monthly pulse",
            "metric": "% agreeing “I can check any flag fast”"
          },
          {
            "dimension": "Engagement",
            "goal": "Flags get reviewed, not skipped",
            "signal": "Flags opened per submission",
            "metric": "% of flags opened"
          },
          {
            "dimension": "Adoption",
            "goal": "Teams use it on new business",
            "signal": "Submissions run through Sentinel",
            "metric": "% of submissions (target 70%, est.)"
          },
          {
            "dimension": "Retention",
            "goal": "It stays in the workflow",
            "signal": "Weekly active underwriters",
            "metric": "% active after 90 days"
          },
          {
            "dimension": "Task success",
            "goal": "Faster, sound decisions",
            "signal": "Time to quote",
            "metric": "Median time to decision vs manual"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "Underwriters over-trust scores",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Track override rate; seed known-bad flags to check attention"
          },
          {
            "risk": "No benchmark to compare against",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "A synthetic portfolio benchmark, fixed per quarter"
          },
          {
            "risk": "Model drifts with feedback",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Freeze a test set; compare each version on it"
          },
          {
            "risk": "Loss ratio takes a year",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Use tiers 1 to 3 as leading signals"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Roadmap",
        "now": [
          "Tier 1 and 2 metrics on a labelled set",
          "Override capture with reasons",
          "Audit trail"
        ],
        "next": [
          "Confidence calibration review",
          "Shadow review with underwriters",
          "Synthetic portfolio benchmark"
        ],
        "later": [
          "Loss ratio: AI-assisted vs manual",
          "Adverse selection tracking",
          "Accumulation risk view"
        ]
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
      },
      {
        "src": "/projects/sentinel-ai-eval-teardown/4-calibration.svg",
        "caption": "Open question 1, answered as a test: does 90% confidence mean right 90% of the time?"
      }
    ],
    "caption": "Wireframes of how the scorecard shows up in the product. Sample data."
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
      },
      {
        "decision": "Uncertainty as signal",
        "why": "When the AI is unsure it says so. Silence isn't certainty."
      },
      {
        "decision": "Propose a synthetic benchmark",
        "why": "There's no industry benchmark for cyber underwriting models, so a fixed test portfolio fills the gap."
      }
    ]
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
      },
      {
        "name": "Loss ratio: AI-assisted vs manual",
        "target": "no worse, then better",
        "how": "After a year of bound policies"
      }
    ],
    "tests": [
      "Calibration: flags at 90% confidence are right about 90% of the time",
      "Frozen test set to compare each model version",
      "Seeded known-bad flags to check underwriters still read the evidence",
      "Every decision logged with model version, confidence and action"
    ],
    "note": "Targets are my estimates. No real deployment data."
  },
  "next": {
    "items": [
      "Label 100 sample submissions to measure tier 1 and 2",
      "Run a shadow review with 2 or 3 underwriters",
      "Build the synthetic portfolio benchmark",
      "Answer the 4 open questions with tests, starting with confidence thresholds"
    ]
  },
  "extra": {
    "highlights": [
      "Output Quality tier: precision/recall on risk flag detection, hallucination rate on document summaries",
      "Reasoning tier: citation accuracy, evidence chain completeness, counterfactual consistency",
      "Human-AI tier: override rate, underwriter trust score, latency-to-decision delta",
      "Portfolio tier: loss ratio impact, adverse selection catch rate, renewal retention signal",
      "Surfaced critical gap: no industry benchmark for cyber UW model performance, so I proposed synthetic portfolio benchmark methodology"
    ],
    "skills": [
      "Eval Framework Design",
      "AI Product Analysis",
      "LLM Evaluation",
      "InsurTech",
      "RAG Architecture",
      "Benchmarking"
    ],
    "paragraphs": [
      "Structured teardown of how an AI-native underwriting platform should be evaluated end-to-end. Defines a 4-tier rubric: Output Quality, Reasoning Transparency, Human-AI Collaboration, and Portfolio Outcomes: with specific metrics, red flag thresholds, and open questions on confidence calibration."
    ]
  },
  "label": "A teardown of my own prototype, Sentinel. The scorecard is how I'd judge it; screen numbers are sample data."
};

export default project;


