// About the project: InsurAgents: AI that handles 7 insurance tasks
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Product spec layout (`spec`): personas, current process, future process with how each step is run, metrics,
// prioritisation and trade-offs, guardrails and risks, acceptance criteria last.
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
    "used": "Personas and jobs to be done, a current and future process map, a north star with guardrail metrics, MoSCoW, a weighted trade-off matrix, a risk matrix and acceptance criteria.",
    "list": [
      {
        "name": "User personas and jobs to be done",
        "why": "to separate the people who use the agents every day from the person who owns them."
      },
      {
        "name": "Current and future process map",
        "why": "to find the work that repeats all day, and to decide which steps the AI runs, which it helps with, and which stay with a person."
      },
      {
        "name": "North star and guardrail metrics",
        "why": "one number for claims done right the first time, plus the lines that must never be crossed, like a wrong denial."
      },
      {
        "name": "MoSCoW",
        "why": "to pick which of the 7 tasks a first pilot needs."
      },
      {
        "name": "Weighted trade-off matrix",
        "why": "to choose between one big agent and one agent per task."
      },
      {
        "name": "Risk matrix",
        "why": "to rank what can go wrong with real claims and customer data."
      },
      {
        "name": "Acceptance criteria",
        "why": "to define done for each agent in steps a tester can run."
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
  "spec": {
    "personas": {
      "intro": "Two people matter here. One uses the agents all day. The other owns them and the AI vendors behind them.",
      "items": [
        {
          "name": "Sunita, claims handler",
          "who": "Works a daily queue of claims in an insurance operations team.",
          "personality": "Practical and quick. She wants a clear answer and the reason for it. She doesn't care which AI model runs underneath.",
          "jobs": [
            "When a claim arrives, sort it as approve, deny or escalate with a reason, so I start with the right claims.",
            "When something looks off, give me a fraud score with the warning signs, so I send only real suspects to the fraud team.",
            "When a customer asks about cover, summarise the policy so I can answer fast."
          ],
          "pains": [
            "The same tasks repeat all day: sorting claims, checking fraud, summarising policies.",
            "Long policies take time to read.",
            "Fraud signs are spotted late, or clean claims get sent to the fraud team.",
            "Compliance checks are done by hand."
          ],
          "goals": [
            "Clear the queue with less rework.",
            "Know why each decision was suggested.",
            "Send the fraud team only real suspects."
          ],
          "nonGoals": [
            "She does not want the AI to deny claims on its own.",
            "She does not want to write prompts or pick models."
          ]
        },
        {
          "name": "Arjun, AI lead at the insurer",
          "who": "Owns the AI tools the operations team uses, and the vendor contracts behind them.",
          "personality": "Pragmatic and wary of lock-in. He wants proof before any change goes live.",
          "jobs": [
            "When our AI provider changes, switch with one setting so nothing downstream breaks.",
            "When a new model comes out, run the test suite so I know if quality holds.",
            "When one task goes wrong, fix that agent without touching the others."
          ],
          "pains": [
            "Code written for one vendor is hard to move.",
            "There is no shared way to measure output quality.",
            "One big prompt is hard to debug."
          ],
          "goals": [
            "Swap providers with no code change.",
            "The same quality bar for every provider.",
            "Keep customer data safe."
          ],
          "nonGoals": [
            "Training our own model.",
            "A chatbot for customers."
          ]
        }
      ]
    },
    "current": {
      "intro": "How a claim moves today, with no agents.",
      "steps": [
        {
          "step": "A claim lands in the queue",
          "detail": "Handlers open claims in the order they arrive.",
          "pain": "Urgent or suspicious claims wait behind simple ones."
        },
        {
          "step": "The handler reads the claim and the policy",
          "detail": "She checks what is covered and what is not.",
          "pain": "Long policies take time to read."
        },
        {
          "step": "The handler looks for fraud signs",
          "detail": "She checks by eye and sends anything odd to the fraud team.",
          "pain": "Different handlers flag different things."
        },
        {
          "step": "The handler checks compliance",
          "detail": "She runs through the rules by hand.",
          "pain": "Slow, and easy to skip a rule on a busy day."
        },
        {
          "step": "The handler decides and writes the note",
          "detail": "She approves, denies or escalates, then writes the letter or note.",
          "pain": "The same writing, every day."
        },
        {
          "step": "Any AI tool is tied to one vendor",
          "detail": "Each experiment is built for one AI provider and judged by feel.",
          "pain": "Switching vendors means rewriting it, with no way to compare quality."
        }
      ]
    },
    "future": {
      "intro": "Seven small agents share one provider switch and one test suite. The AI does the reading. People keep every decision that can hurt a customer.",
      "steps": [
        {
          "step": "Mask personal data",
          "detail": "Names and IDs are masked before any call to an AI provider.",
          "mode": "ai",
          "why": "A fixed rule that runs before every call. No judgement needed."
        },
        {
          "step": "Triage the claim",
          "detail": "The triage agent returns APPROVE, DENY or ESCALATE with at least one reason.",
          "mode": "assisted",
          "why": "The AI suggests the route. The handler can always change it."
        },
        {
          "step": "Score fraud risk",
          "detail": "The fraud agent returns LOW, MEDIUM or HIGH and the warning signs behind it.",
          "mode": "assisted",
          "why": "The score sorts the work. Only the fraud team decides if it is fraud."
        },
        {
          "step": "Summarise the policy",
          "detail": "The summary agent turns a long policy into a short brief.",
          "mode": "ai",
          "why": "A summary is a reading aid. The full policy is one click away."
        },
        {
          "step": "Check compliance",
          "detail": "The compliance agent checks the claim against the rules and lists any gaps.",
          "mode": "assisted",
          "why": "The AI lists the gaps. The handler confirms them."
        },
        {
          "step": "Check the output format",
          "detail": "If an answer is not in the expected format, the agent retries once, then shows an error. Every result is logged for the test suite.",
          "mode": "ai",
          "why": "It is a pass or fail check, so no person is needed."
        },
        {
          "step": "Confirm every deny or escalate",
          "detail": "Any DENY or ESCALATE goes to a person before anything reaches the customer.",
          "mode": "human",
          "why": "A wrong denial hurts a real customer. The AI never denies alone."
        },
        {
          "step": "Switch provider after the test suite",
          "detail": "The suite runs on Claude, GPT-4o and Gemini. A person compares the scores before a switch.",
          "mode": "human",
          "why": "Providers give different answers. A person signs off the switch."
        }
      ]
    },
    "metrics": {
      "northStar": {
        "name": "Claims handled with no rework",
        "detail": "A claim only counts if nobody had to redo the AI's work."
      },
      "inputs": [
        {
          "name": "Triage accuracy",
          "target": "est. 90%",
          "how": "Matches on the labelled claim set."
        },
        {
          "name": "Text quality",
          "target": "est. BERTScore 0.85+",
          "how": "Summaries and letters compared with reference text."
        }
      ],
      "guardrails": [
        {
          "name": "Denials sent without a person",
          "target": "zero",
          "how": "Every DENY has a person's confirmation on record."
        },
        {
          "name": "Quality after a provider switch",
          "target": "no drop on the test set",
          "how": "Run the full suite on the new provider before switching."
        },
        {
          "name": "Personal data sent to a provider",
          "target": "zero",
          "how": "Check masked fields in the call logs."
        }
      ],
      "tests": [
        "Run the 15-claim suite on all three providers.",
        "Grow the test set to 100+ labelled claims before any pilot."
      ],
      "note": "The suite exists in the repo. Numbers here are targets, not results."
    },
    "priorities": {
      "intro": "A first pilot needs the tasks that sort the queue, plus the switch and the tests that make any provider safe to use.",
      "items": [
        {
          "item": "Claim triage with reasons",
          "call": "Must",
          "why": "It decides what handlers open first."
        },
        {
          "item": "Fraud score with warning signs",
          "call": "Must",
          "why": "It keeps the fraud team on real suspects."
        },
        {
          "item": "One provider switch and a test suite per provider",
          "call": "Must",
          "why": "Without them, a vendor change is a rewrite and a guess."
        },
        {
          "item": "Mask names and IDs before any call",
          "call": "Must",
          "why": "Needed before any real customer data goes in."
        },
        {
          "item": "Policy summaries and compliance checks",
          "call": "Should",
          "why": "Save reading time, but the queue can move without them."
        },
        {
          "item": "The other tasks, like risk assessment",
          "call": "Could",
          "why": "Built, but not needed for the first pilot."
        },
        {
          "item": "A fine-tuned model of our own",
          "call": "Won't",
          "why": "Slow to build, and it ties us to one setup."
        },
        {
          "item": "The AI denies claims alone",
          "call": "Won't",
          "why": "The cost of a wrong denial is too high."
        }
      ],
      "matrix": {
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
        "note": "Scores 1 to 5 are my judgement. Small agents win because each one can be tested and fixed on its own."
      }
    },
    "guardrails": {
      "rules": [
        "The AI never denies a claim alone. Every deny goes to a person.",
        "Every decision comes with at least one stated reason.",
        "Names and IDs are masked before any call to an AI provider.",
        "No provider switch until the test suite passes on it.",
        "An answer in the wrong format is retried once, then shown as an error. It is never guessed."
      ],
      "risks": [
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
    "acceptance": [
      {
        "story": "Triage a claim",
        "given": "a claim with its details",
        "when": "I run claim triage",
        "then": "I get APPROVE, DENY or ESCALATE with at least one stated reason"
      },
      {
        "story": "Route a denial to a person",
        "given": "a claim the AI marks DENY",
        "when": "triage finishes",
        "then": "it lands in a person's queue and nothing goes to the customer"
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
        "story": "Handle bad output",
        "given": "an answer in the wrong format",
        "when": "the agent runs",
        "then": "it retries once, then shows an error"
      },
      {
        "story": "Prove it works",
        "given": "the 15-claim test set",
        "when": "I run the test suite",
        "then": "I see triage accuracy and text scores for each provider"
      }
    ]
  }
};

export default project;
