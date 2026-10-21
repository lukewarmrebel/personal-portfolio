// About the project: ResuAgent: tailor your resume to a job
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "resuagent",
  "group": "agents",
  "order": 3,
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
  "label": "How I approached it. A live app I built; numbers on this page are sample data or est.",
  "glance": {
    "problem": "Tailoring a resume to every job takes hours.",
    "users": "Job seekers applying to many roles.",
    "role": "Solo: designed and built the app.",
    "outcome": "A live web app."
  },
  "judgment": {
    "used": "Jobs to be done and one trade-off: where the API key lives. Privacy and cost were the real decisions in this app.",
    "skipped": "A market size, RICE, HEART and an emotional journey. It's a small live app for one job, and they wouldn't change it."
  },
  "solution": {
    "summary": "I built a 4-step app: upload, verify, tailor, export. Gemini rewrites each bullet to match the job's words, and the person checks every change before it goes out.",
    "steps": [
      "Upload: resume PDF plus the job description",
      "Verify: fix anything the parser got wrong",
      "Tailor: Gemini rewrites bullets to the job's language, keeping the person's voice",
      "Preview and export: a clean PDF, plus role notes saved in the Knowledge Base"
    ],
    "decisions": [
      {
        "decision": "A verify step before any AI",
        "why": "A misread date or title ruins every rewrite after it",
        "rejected": "Rewriting straight from the parsed PDF"
      },
      {
        "decision": "Key kept in the user's browser",
        "why": "No server holds anyone's credentials or resume",
        "rejected": "A shared key on my server"
      },
      {
        "decision": "Rewrite bullets, not the whole resume",
        "why": "Easier to review, harder for the AI to overreach",
        "rejected": "One-shot full rewrite"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/resuagent/1-upload.svg",
        "caption": "Upload a resume and the job"
      },
      {
        "src": "/projects/resuagent/2-verify.svg",
        "caption": "Check what the app read"
      },
      {
        "src": "/projects/resuagent/3-tailor.svg",
        "caption": "Before and after, per bullet"
      }
    ],
    "caption": "My wireframes of the 4 steps. Names, roles and counts are sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "I find a job I like",
            "want": "my bullets reworded to its language",
            "so": "I get past the first screen"
          },
          {
            "when": "the AI suggests a change",
            "want": "to see before and after",
            "so": "nothing goes out that isn't true"
          },
          {
            "when": "I apply to similar roles",
            "want": "my role notes saved",
            "so": "the next one is faster"
          }
        ]
      },
      {
        "kind": "tradeoff",
        "title": "Where should the API key live?",
        "criteria": [
          {
            "name": "User privacy",
            "weight": 5
          },
          {
            "name": "Ease of setup",
            "weight": 3
          },
          {
            "name": "Cost to me",
            "weight": 3
          },
          {
            "name": "Build effort",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "User's key, kept in the browser",
            "scores": [
              5,
              2,
              5,
              4
            ],
            "chosen": true
          },
          {
            "name": "My key on a server",
            "scores": [
              3,
              5,
              1,
              3
            ]
          },
          {
            "name": "Login and paid plan",
            "scores": [
              3,
              3,
              4,
              1
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. Privacy and cost won for a free tool."
      }
    ]
  },
  "flow": {
    "title": "From upload to a tailored PDF",
    "nodes": [
      {
        "label": "Upload resume PDF and paste the job",
        "kind": "start"
      },
      {
        "label": "App reads roles, dates and bullets"
      },
      {
        "label": "Details look right?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "User edits fields in the verify step"
        }
      },
      {
        "label": "Gemini rewrites each bullet for the job"
      },
      {
        "label": "Keep each rewrite?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Undo to the original bullet"
        }
      },
      {
        "label": "Preview the tailored resume"
      },
      {
        "label": "Export PDF, save role notes",
        "kind": "end"
      }
    ],
    "caption": "Two checkpoints keep the person in control: verify and review."
  },
  "metrics": {
    "northStar": "Tailored resumes exported per week",
    "rows": [
      {
        "name": "Rewrites kept",
        "target": "est. 70%",
        "how": "Share of AI bullets not undone"
      },
      {
        "name": "Upload to export",
        "target": "est. 60%",
        "how": "Funnel from step 1 to step 4"
      }
    ],
    "tests": [
      "Usability test: tailor a resume to a real job in under 10 minutes"
    ],
    "note": "The app is live but usage isn't tracked, so these are targets (est.)."
  },
  "next": {
    "items": [
      "Show a keyword match score before and after",
      "Add per-bullet undo history"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/resumeagent/01_upload.png",
        "alt": "ResuAgent: tailor your resume to a job: screen 1"
      }
    ],
    "paragraphs": [
      "I built a 4-step AI agent pipeline that tailors a resume: upload PDF → parse and verify → AI-rewrite bullet points for the target role → preview and export. Gemini rewrites resume points to match JD keywords and keeps the candidate's voice. A Knowledge Base tab stores role context across sessions."
    ]
  }
};

export default project;
