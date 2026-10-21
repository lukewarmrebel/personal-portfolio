// About the project: InsurAgents: AI that handles 7 insurance tasks
// Project page. Built from the site's bullets and the GitHub repo. How I approached it; illustrative numbers are sample data or est.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "insuragents",
  "group": "agents",
  "order": 2,
  "title": "InsurAgents: AI that handles 7 insurance tasks",
  "oneLine": "AI agents that sort claims, score fraud risk, summarise policies and check compliance, and can switch between three AI providers.",
  "tag": "Code · Insurance",
  "tags": [
    "Code",
    "AI agents",
    "Insurance"
  ],
  "links": [
    {
      "label": "See the code",
      "href": "https://github.com/lukewarmrebel/insuragents"
    }
  ],
  "tiles": [
    {
      "value": "7",
      "label": "insurance tasks"
    },
    {
      "value": "3",
      "label": "AI providers"
    },
    {
      "value": "15",
      "label": "claims in the test set"
    }
  ],
  "glance": {
    "problem": "Insurance teams repeat the same tasks: sorting claims, checking fraud, summarising policies.",
    "users": "Insurance operations teams.",
    "role": "Solo: designed and built the agents and the test suite.",
    "outcome": "Working code on GitHub."
  },
  "problem": {
    "persona": {
      "name": "Arjun, claims operations lead",
      "who": "Runs a team that handles motor and home claims (illustrative persona)",
      "context": "His team sorts claims, checks for fraud and writes the same letters every day. He wants AI help, but can't bet on one AI vendor.",
      "needs": [
        "Fast first sort of every claim",
        "A fraud signal with reasons",
        "Summaries and letters in plain English",
        "Freedom to switch AI provider"
      ],
      "frustrations": [
        "Same manual checks, claim after claim",
        "AI pilots that only work with one vendor",
        "No way to tell if the AI is getting worse",
        "Black-box decisions he can't explain to a customer"
      ]
    },
    "jtbd": "When a claim comes in, I want the routine checks done and explained, so my team spends its time on the claims that need judgement."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "Framing the problem with CIRCLES",
        "steps": {
          "comprehend": "Insurance ops repeat the same text-heavy tasks on every claim and policy.",
          "identify": "Claims handlers, fraud analysts and policy servicing teams.",
          "report": "Quick sorting, fraud signals with reasons, clear summaries, proof it works.",
          "cut": "Claim triage and fraud scoring first: highest volume, clearest right answer.",
          "list": "One agent per task, a provider switch, and a built-in test suite.",
          "evaluate": "One big agent is simpler; small agents are easier to test and trust.",
          "summarise": "Seven focused agents, any of three AI providers, measured on every run."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (no interviews done yet)",
        "methods": [
          {
            "method": "Job shadowing",
            "who": "Claims handlers",
            "howMany": "5",
            "how": "Log every task and time spent for a day"
          },
          {
            "method": "Interviews",
            "who": "Fraud and compliance analysts",
            "howMany": "6",
            "how": "What signals do you trust, and why?"
          },
          {
            "method": "Label review",
            "who": "Senior handlers",
            "howMany": "100 claims",
            "how": "Set the right triage answer for the test set"
          }
        ],
        "findings": [
          {
            "insight": "Triage is the biggest repeat task",
            "evidence": "Hypothesis from my insurance work",
            "group": "Volume"
          },
          {
            "insight": "Teams need a reason, not just a label",
            "evidence": "Hypothesis to test in interviews",
            "group": "Trust"
          },
          {
            "insight": "Vendor lock-in blocks AI pilots",
            "evidence": "Hypothesis to test with IT and procurement",
            "group": "Buying"
          }
        ],
        "questions": [
          "Which claim tasks feel the most repetitive?",
          "How do you decide a claim needs escalating?",
          "When would you trust an AI fraud score?",
          "What would make you switch AI vendors?"
        ],
        "note": "A plan with hypotheses, not findings."
      },
      {
        "kind": "market",
        "title": "Where InsurAgents fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "Insurers using AI for operations",
            "value": "est.",
            "assumption": "Most large insurers now run AI pilots"
          },
          {
            "level": "SAM",
            "label": "Claims and policy teams in mid-size insurers",
            "assumption": "Too small for custom builds, too complex for chatbots"
          },
          {
            "level": "SOM",
            "label": "2 to 3 pilot teams, year 1",
            "assumption": "A sale starts with one task, usually triage"
          }
        ],
        "positioning": {
          "x": [
            "One task",
            "Many tasks"
          ],
          "y": [
            "Locked to one AI",
            "Any AI provider"
          ],
          "points": [
            {
              "name": "Point AI tools",
              "x": 0.15,
              "y": 0.2
            },
            {
              "name": "Core insurance suites",
              "x": 0.75,
              "y": 0.2
            },
            {
              "name": "DIY prompts",
              "x": 0.3,
              "y": 0.75
            },
            {
              "name": "InsurAgents",
              "x": 0.85,
              "y": 0.85,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Claim triage",
            "Fraud score",
            "Summaries",
            "Switch provider",
            "Built-in tests"
          ],
          "rows": [
            {
              "name": "Point AI tools",
              "values": [
                "partial",
                "yes",
                "no",
                "no",
                "unclear"
              ]
            },
            {
              "name": "Core insurance suites",
              "values": [
                "yes",
                "partial",
                "partial",
                "no",
                "no"
              ]
            },
            {
              "name": "DIY prompts",
              "values": [
                "partial",
                "partial",
                "yes",
                "yes",
                "no"
              ]
            },
            {
              "name": "InsurAgents",
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
            "value": "Multi-model",
            "label": "Teams keep more than one AI provider"
          },
          {
            "value": "Evals",
            "label": "Testing AI output is now a must-have"
          },
          {
            "value": "Explain it",
            "label": "Rules push for reasons behind decisions"
          }
        ],
        "note": "Categories, not named products. Sizes are directional (est.)."
      },
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "a claim arrives",
            "want": "it sorted as approve, deny or escalate with a reason",
            "so": "handlers start with the right claims"
          },
          {
            "when": "something looks off",
            "want": "a fraud score with the warning signs",
            "so": "I send only real suspects to the fraud team"
          },
          {
            "when": "our AI provider changes",
            "want": "to switch with one setting",
            "so": "nothing downstream breaks"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "A claim's journey through the team",
        "stages": [
          {
            "stage": "Intake",
            "doing": "Claim and documents arrive",
            "feeling": "okay",
            "pain": "Messy, mixed formats",
            "opportunity": "Read and structure it on arrival"
          },
          {
            "stage": "Triage",
            "doing": "Handler decides the route",
            "feeling": "bad",
            "pain": "Same checks every time",
            "opportunity": "Triage agent with a reason"
          },
          {
            "stage": "Fraud check",
            "doing": "Analyst looks for warning signs",
            "feeling": "bad",
            "pain": "Too many false alarms",
            "opportunity": "Score with listed signs"
          },
          {
            "stage": "Decide",
            "doing": "Approve, deny or escalate",
            "feeling": "okay",
            "pain": "Hard to explain the call",
            "opportunity": "Reasons ready to share"
          },
          {
            "stage": "Tell the customer",
            "doing": "Writes the letter",
            "feeling": "okay",
            "pain": "Rewriting the same letter",
            "opportunity": "Drafted customer letter"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How a handler feels using it",
        "steps": [
          {
            "step": "Claim lands",
            "feeling": -1,
            "note": "Big queue"
          },
          {
            "step": "Triage ready",
            "feeling": 1,
            "note": "Route suggested"
          },
          {
            "step": "Reason unclear",
            "feeling": -1,
            "note": "Why escalate?"
          },
          {
            "step": "Signs listed",
            "feeling": 1,
            "note": "Now it makes sense"
          },
          {
            "step": "Letter drafted",
            "feeling": 2,
            "note": "Minutes, not an hour"
          }
        ],
        "note": "The dip comes when a decision has no reason. Every agent must explain itself."
      },
      {
        "kind": "rice",
        "title": "Which agent to build first (sample scores, est.)",
        "rows": [
          {
            "item": "Claim triage",
            "reach": 10,
            "impact": 3,
            "confidence": 0.8,
            "effort": 2
          },
          {
            "item": "Fraud score",
            "reach": 8,
            "impact": 3,
            "confidence": 0.6,
            "effort": 3
          },
          {
            "item": "Policy summary",
            "reach": 7,
            "impact": 2,
            "confidence": 0.8,
            "effort": 1
          },
          {
            "item": "Customer letter",
            "reach": 8,
            "impact": 1,
            "confidence": 0.9,
            "effort": 1
          },
          {
            "item": "Compliance check",
            "reach": 5,
            "impact": 2,
            "confidence": 0.5,
            "effort": 3
          },
          {
            "item": "Compare policies",
            "reach": 3,
            "impact": 1,
            "confidence": 0.7,
            "effort": 2
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "Scope",
        "must": [
          "Claim triage with reasons",
          "Fraud score with signs",
          "Provider switch in one setting",
          "Test suite on sample claims"
        ],
        "should": [
          "Policy summary",
          "Customer letter"
        ],
        "could": [
          "Compliance check",
          "Policy comparison",
          "Risk check"
        ],
        "wont": [
          "Paying or denying claims on its own",
          "Training a custom model"
        ]
      },
      {
        "kind": "tradeoff",
        "title": "One big agent or one agent per task?",
        "criteria": [
          {
            "name": "Easy to test",
            "weight": 5
          },
          {
            "name": "Output quality",
            "weight": 4
          },
          {
            "name": "Build speed",
            "weight": 3
          },
          {
            "name": "Cost per run",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "One agent per task",
            "scores": [
              5,
              4,
              3,
              4
            ],
            "chosen": true
          },
          {
            "name": "One general agent",
            "scores": [
              2,
              3,
              5,
              3
            ]
          },
          {
            "name": "Fine-tuned model",
            "scores": [
              3,
              4,
              1,
              2
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. Small agents are each testable on their own."
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria",
        "stories": [
          {
            "story": "Triage a claim",
            "given": "a claim with its details",
            "when": "I run claim triage",
            "then": "I get APPROVE, DENY or ESCALATE with at least one stated reason"
          },
          {
            "story": "Score fraud risk",
            "given": "the same claim",
            "when": "I run fraud scoring",
            "then": "I get LOW, MEDIUM or HIGH and the warning signs behind it"
          },
          {
            "story": "Switch provider",
            "given": "the app runs on one AI provider",
            "when": "I change the provider setting",
            "then": "all 7 tasks run on the new provider with no code change"
          },
          {
            "story": "Prove it works",
            "given": "the 15-claim test set",
            "when": "I run the test suite",
            "then": "I see triage accuracy and text scores for each provider"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "Metric tree (targets are est.)",
        "northStar": {
          "name": "Claims handled with no rework",
          "detail": "AI first pass accepted by a handler",
          "target": "est. 70%"
        },
        "inputs": [
          {
            "name": "Triage accuracy",
            "detail": "On the labelled test set",
            "target": "est. 90%"
          },
          {
            "name": "Fraud precision",
            "detail": "Flagged claims that were worth checking",
            "target": "est. 60%"
          },
          {
            "name": "Draft acceptance",
            "detail": "Letters sent with light edits",
            "target": "est. 75%"
          },
          {
            "name": "Time per claim",
            "detail": "Intake to decision",
            "target": "est. -30%"
          }
        ],
        "guardrails": [
          {
            "name": "Wrong denials",
            "target": "est. < 1%"
          },
          {
            "name": "Cost per claim",
            "target": "est. < ₹5"
          }
        ],
        "note": "Targets are est. They would be set after a baseline run on real claims."
      },
      {
        "kind": "heart",
        "title": "HEART for InsurAgents (illustrative)",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Handlers trust the suggestions",
            "signal": "Agree vs change",
            "metric": "% suggestions accepted"
          },
          {
            "dimension": "Engagement",
            "goal": "Agents used across tasks",
            "signal": "Runs per task",
            "metric": "Tasks used per handler per week"
          },
          {
            "dimension": "Adoption",
            "goal": "New teams try it",
            "signal": "First run",
            "metric": "% of team running 1+ agent in week 1"
          },
          {
            "dimension": "Retention",
            "goal": "It stays in the workflow",
            "signal": "Weekly runs",
            "metric": "Handlers active 4 weeks in a row"
          },
          {
            "dimension": "Task success",
            "goal": "Right call, first time",
            "signal": "Decision unchanged",
            "metric": "Triage accuracy vs senior handler"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "Wrong denial hurts a real customer",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "AI never denies alone; deny always goes to a person"
          },
          {
            "risk": "Providers give different answers",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Run the test suite on every provider before switching"
          },
          {
            "risk": "Test set is too small (15 claims)",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Grow to 100+ labelled claims before any pilot"
          },
          {
            "risk": "Customer data sent to an AI provider",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Mask names and IDs before any call"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Now, next, later",
        "now": [
          "7 agents with reasons",
          "Provider switch",
          "15-claim test suite"
        ],
        "next": [
          "Grow the test set to 100+ claims",
          "Mask personal data",
          "Handler feedback buttons"
        ],
        "later": [
          "Pilot with one claims team",
          "Cost and speed per provider",
          "Plug into a claims system"
        ]
      }
    ]
  },
  "flow": {
    "title": "How a request flows through InsurAgents",
    "nodes": [
      {
        "label": "User picks a task and a provider",
        "kind": "start"
      },
      {
        "label": "Provider factory loads Claude, GPT-4o or Gemini"
      },
      {
        "label": "Task agent reads the claim or policy"
      },
      {
        "label": "Output in the expected format?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Retry once, then show an error"
        }
      },
      {
        "label": "Decision or text shown with reasons"
      },
      {
        "label": "Is it a deny or escalate?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Route to a person to confirm"
        }
      },
      {
        "label": "Result logged for the test suite",
        "kind": "end"
      }
    ],
    "caption": "Every agent shares one provider switch and one way to be tested."
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/insuragents/1-pick.svg",
        "caption": "Pick a task and a provider"
      },
      {
        "src": "/projects/insuragents/2-triage.svg",
        "caption": "Triage result with reasons"
      },
      {
        "src": "/projects/insuragents/3-fraud.svg",
        "caption": "Fraud score with warning signs"
      },
      {
        "src": "/projects/insuragents/4-tests.svg",
        "caption": "Test results by provider"
      }
    ],
    "caption": "My wireframes of the main screens. Claims and scores are sample data."
  },
  "solution": {
    "summary": "I built seven small AI agents for common insurance tasks. They all share one switch for the AI provider and one test suite, so the team can change vendors and still know the quality.",
    "steps": [
      "Pick a task: triage, fraud, summary, letter, risk, compliance or comparison",
      "Pick a provider: Claude, GPT-4o or Gemini, set in one place",
      "The task agent returns a fixed format with reasons",
      "Text tasks are scored with ROUGE, BLEU and BERTScore",
      "Triage is checked against 15 sample claims (motor and home)"
    ],
    "decisions": [
      {
        "decision": "One agent per task",
        "why": "Each one can be tested and fixed on its own",
        "rejected": "One general agent for everything"
      },
      {
        "decision": "A provider factory",
        "why": "Teams can switch AI vendor without touching anything else",
        "rejected": "Code written for one vendor"
      },
      {
        "decision": "Tests ship with the code",
        "why": "You can't trust an AI change you can't measure",
        "rejected": "Checking outputs by eye"
      }
    ]
  },
  "metrics": {
    "northStar": "Claims handled with no rework",
    "rows": [
      {
        "name": "Triage accuracy",
        "target": "est. 90%",
        "how": "Matches on the labelled claim set"
      },
      {
        "name": "Text quality",
        "target": "est. BERTScore 0.85+",
        "how": "Summaries and letters vs reference text"
      },
      {
        "name": "Provider gap",
        "target": "est. < 5 pts",
        "how": "Accuracy difference between providers"
      }
    ],
    "tests": [
      "Run the 15-claim suite on all three providers",
      "Swap provider and confirm all 7 tasks still run",
      "Have a senior handler grade 20 outputs blind"
    ],
    "note": "The suite exists in the repo. Numbers here are targets, not results."
  },
  "next": {
    "items": [
      "Grow the test set to 100+ labelled claims",
      "Mask personal data before it reaches any AI provider",
      "Add cost and speed per provider to the test report"
    ]
  },
  "label": "How I approached it. Working code on GitHub; scores and targets on this page are sample data or est.",
  "extra": {
    "highlights": [
      "7 workflows: claim triage (APPROVE/DENY/ESCALATE), fraud scoring (LOW/MEDIUM/HIGH), policy summary, customer comms, risk assessment, compliance check, policy comparison",
      "Multi-provider LLM factory: Anthropic Claude, OpenAI GPT-4o, Google Gemini, swappable via a single config",
      "Built-in eval suite: ROUGE, BLEU, BERTScore + 15-claim benchmark measuring triage accuracy across auto and homeowner scenarios"
    ],
    "skills": [
      "Multi-Agent Systems",
      "Python",
      "Streamlit",
      "Anthropic Claude",
      "OpenAI",
      "Google Gemini",
      "LLM Eval",
      "InsurTech"
    ],
    "paragraphs": [
      "I built a full-stack AI agent system that automates 7 insurance workflows. They include claim triage, fraud detection, policy summaries, risk assessment and compliance checks. It works with any provider: you can swap Claude, GPT-4o or Gemini without touching the code after it. It ships with ROUGE/BLEU/BERTScore eval benchmarks and a 15-claim accuracy suite."
    ]
  }
};

export default project;
