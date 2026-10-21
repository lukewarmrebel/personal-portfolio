// About the project: InsurAgents: AI that handles 7 insurance tasks
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
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
  "label": "How I approached it. Working code on GitHub; scores and targets on this page are sample data or est.",
  "glance": {
    "problem": "Insurance teams repeat the same tasks: sorting claims, checking fraud, summarising policies.",
    "users": "Insurance operations teams.",
    "role": "Solo: designed and built the agents and the test suite.",
    "outcome": "Working code on GitHub."
  },
  "judgment": {
    "used": "Jobs to be done, one trade-off on one big agent versus one per task, acceptance criteria and a risk list. For AI agents in claims, the architecture, what each agent must return and what can go wrong are the decisions.",
    "skipped": "Journey maps, an emotional journey, HEART and a market size. It's working code for claims teams, not a consumer app."
  },
  "solution": {
    "summary": "I built seven small AI agents for common insurance tasks. They all share one switch for the AI provider and one test suite, so the team can change vendors and still know the quality.",
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
      }
    ]
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
      }
    ],
    "caption": "My wireframes of the main screens. Claims and scores are sample data."
  },
  "frameworks": {
    "blocks": [
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
      }
    ],
    "tests": [
      "Run the 15-claim suite on all three providers"
    ],
    "note": "The suite exists in the repo. Numbers here are targets, not results."
  },
  "next": {
    "items": [
      "Grow the test set to 100+ labelled claims",
      "Mask personal data before it reaches any AI provider"
    ]
  },
  "extra": {
    "paragraphs": [
      "I built a full-stack AI agent system that automates 7 insurance workflows. They include claim triage, fraud detection, policy summaries, risk assessment and compliance checks. It works with any provider: you can swap Claude, GPT-4o or Gemini without touching the code after it. It ships with ROUGE/BLEU/BERTScore eval benchmarks and a 15-claim accuracy suite."
    ]
  }
};

export default project;
