// About the project: Sentinel: an AI helper for cyber insurance underwriters
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
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
