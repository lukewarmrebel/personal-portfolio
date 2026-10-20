// About the project: How I'd judge an AI underwriting tool
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
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
      "value": "6",
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
      "Output Quality tier: precision/recall on risk flag detection, hallucination rate on document summaries",
      "Reasoning tier: citation accuracy, evidence chain completeness, counterfactual consistency",
      "Human-AI tier: override rate, underwriter trust score, latency-to-decision delta",
      "Portfolio tier: loss ratio impact, adverse selection catch rate, renewal retention signal",
      "Surfaced critical gap: no industry benchmark for cyber UW model performance — proposed synthetic portfolio benchmark methodology"
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
      "Structured teardown of how an AI-native underwriting platform should be evaluated end-to-end. Defines a 4-tier rubric — Output Quality, Reasoning Transparency, Human-AI Collaboration, and Portfolio Outcomes — with specific metrics, red flag thresholds, and open questions on confidence calibration."
    ]
  }
};

export default project;
