// About the project: ResuAgent: tailor your resume to a job
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "resuagent",
  "group": "earlier",
  "order": 4,
  "title": "ResuAgent: tailor your resume to a job",
  "oneLine": "Upload your resume and a job description, and AI rewrites your bullet points to match the role without changing your voice.",
  "tag": "Web app · AI",
  "tags": [
    "Web app",
    "AI",
    "Careers"
  ],
  "links": [
    {
      "label": "Try the app",
      "href": "https://resume-tailoring-agent-965069012726.us-central1.run.app/"
    }
  ],
  "card": {
    "thumb": "/resumeagent/01_upload.png"
  },
  "tiles": [
    {
      "value": "4",
      "label": "steps from upload to export"
    }
  ],
  "glance": {
    "problem": "Tailoring a resume to every job takes hours.",
    "users": "Job seekers applying to many roles.",
    "role": "Solo: designed and built the app.",
    "outcome": "A live web app."
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
        "src": "/resumeagent/01_upload.png",
        "alt": "ResuAgent: tailor your resume to a job: screen 1"
      }
    ],
    "highlights": [
      "Step 1–4 pipeline: Upload → Verify & Edit parsed data → AI-tailor bullet points → Preview & Export",
      "Gemini-powered tailoring: rewrites resume bullets to align with JD without losing authenticity",
      "Knowledge Base module persists role preferences and context across sessions",
      "Client-side API key management — no server-side credential storage"
    ],
    "skills": [
      "AI Agent Design",
      "Google Gemini",
      "Python",
      "Streamlit",
      "PDF Parsing",
      "Prompt Engineering"
    ],
    "paragraphs": [
      "4-step AI agent pipeline for resume tailoring: upload PDF → parse and verify → AI-rewrite bullet points for target role → preview and export. Gemini rewrites resume points to match JD keywords while preserving the candidate's voice. Includes a Knowledge Base tab for storing role context across sessions."
    ]
  }
};

export default project;
