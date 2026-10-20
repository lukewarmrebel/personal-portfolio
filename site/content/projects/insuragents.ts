// About the project: InsurAgents: AI that handles 7 insurance tasks
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "insuragents",
  "group": "earlier",
  "order": 3,
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
    "todo": true
  },
  "frameworks": {
    "todo": true
  },
  "flow": {
    "todo": true
  },
  "wireframes": {
    "todo": true
  },
  "solution": {
    "todo": true
  },
  "metrics": {
    "todo": true
  },
  "next": {
    "todo": true
  },
  "extra": {
    "highlights": [
      "7 workflows: claim triage (APPROVE/DENY/ESCALATE), fraud scoring (LOW/MEDIUM/HIGH), policy summary, customer comms, risk assessment, compliance check, policy comparison",
      "Multi-provider LLM factory: Anthropic Claude, OpenAI GPT-4o, Google Gemini — swappable via single config",
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
      "Built a full-stack AI agent system automating 7 insurance operational workflows — claim triage, fraud detection, policy summaries, risk assessment, compliance verification, and more. Provider-agnostic: swap Claude, GPT-4o, or Gemini without touching downstream code. Ships with ROUGE/BLEU/BERTScore eval benchmarks and a 15-claim accuracy suite."
    ]
  }
};

export default project;
