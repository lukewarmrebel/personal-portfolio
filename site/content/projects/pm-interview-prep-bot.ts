// About the project: PM interview practice bot
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "pm-interview-prep-bot",
  "group": "earlier",
  "order": 6,
  "title": "PM interview practice bot",
  "oneLine": "A mock product manager interview that reads your resume and the job, asks follow-up questions on weak answers and gives feedback.",
  "tag": "Demo video · AI",
  "tags": [
    "Demo video",
    "AI agents",
    "Careers"
  ],
  "links": [
    {
      "label": "Watch the demo",
      "href": "https://www.youtube.com/watch?v=-N2fSuk80dM"
    }
  ],
  "tiles": [
    {
      "value": "2 days",
      "label": "to build"
    },
    {
      "value": "< 5 min",
      "label": "for a mock interview with feedback"
    }
  ],
  "glance": {
    "problem": "Practising product manager interviews alone gives no follow-up questions or feedback.",
    "users": "People preparing for PM interviews.",
    "role": "Solo: designed and built it in 2 days.",
    "outcome": "A working bot, shown in a demo video."
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
      "Manager Agent (ReAct-style) orchestrates Question Generator, Probing, and Feedback subagents",
      "RAG pipeline ingests resume + JD for context-aware, personalised question generation",
      "Delivers structured mock interview with actionable feedback in under 5 minutes"
    ],
    "skills": [
      "Multi-Agent Systems",
      "RAG Architecture",
      "Workflow Automation",
      "Product Sense",
      "AI Product Design"
    ],
    "paragraphs": [
      "Designed and launched a personalised PM interview simulation tool using RAG and multi-agent orchestration. A Manager Agent coordinates subagents to generate questions, probe weak answers, and compile structured feedback — all context-aware from resume, JD, and MBTI inputs."
    ]
  }
};

export default project;
