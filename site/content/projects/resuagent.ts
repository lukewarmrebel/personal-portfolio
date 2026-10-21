// About the project: ResuAgent: tailor your resume to a job
// Project page. Built from the site's bullets and the live app. How I approached it; illustrative numbers are sample data or est.
// Schema: src/lib/projectSchema.ts
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
  "glance": {
    "problem": "Tailoring a resume to every job takes hours.",
    "users": "Job seekers applying to many roles.",
    "role": "Solo: designed and built the app.",
    "outcome": "A live web app."
  },
  "problem": {
    "persona": {
      "name": "Kavya, job seeker",
      "who": "Mid-level analyst applying to 20+ product roles (illustrative persona)",
      "context": "Every job asks for slightly different things. She rewrites her resume for each one, late at night, and still isn't sure it matches.",
      "needs": [
        "Bullets that match the job's words",
        "Her own voice kept",
        "Control over every change",
        "A clean PDF to send"
      ],
      "frustrations": [
        "An hour per application",
        "AI tools that make things up",
        "Generic rewrites that sound like everyone else",
        "Pasting her data into random sites"
      ]
    },
    "jtbd": "When I find a job I want, I want my resume reworded to fit it in minutes, so I can apply while the role is still open without sounding fake."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "Framing the problem with CIRCLES",
        "steps": {
          "comprehend": "Tailoring a resume per job is slow, so people send one generic version.",
          "identify": "Active job seekers applying to many similar roles.",
          "report": "Match the job's words, keep my voice, let me approve each change.",
          "cut": "Bullet rewriting matters most. Formatting and cover letters can wait.",
          "list": "Upload and parse, verify step, AI rewrite per bullet, export, saved role notes.",
          "evaluate": "Full auto rewrite is fast but risky; per-bullet review is slower but trusted.",
          "summarise": "A 4-step flow where the AI suggests and the person approves."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (no interviews done yet)",
        "methods": [
          {
            "method": "Interviews",
            "who": "People who applied to 10+ jobs this year",
            "howMany": "8",
            "how": "Walk through your last application"
          },
          {
            "method": "Usability test",
            "who": "First-time users of the app",
            "howMany": "5",
            "how": "Tailor a resume to a real job, think aloud"
          },
          {
            "method": "Edit log review",
            "who": "App sessions",
            "howMany": "50",
            "how": "Which AI rewrites get kept or undone"
          }
        ],
        "findings": [
          {
            "insight": "People fear AI making things up",
            "evidence": "Hypothesis to test in interviews",
            "group": "Trust"
          },
          {
            "insight": "Parsing errors kill confidence early",
            "evidence": "Why I added a verify step",
            "group": "Quality"
          },
          {
            "insight": "Role notes get reused",
            "evidence": "Hypothesis behind the Knowledge Base tab",
            "group": "Reuse"
          }
        ],
        "questions": [
          "How long did your last application take?",
          "Have you used AI to rewrite your resume? What went wrong?",
          "Which change would you never let an AI make?",
          "Would you paste your resume into a website? Why or why not?"
        ],
        "note": "A plan with hypotheses, not findings."
      },
      {
        "kind": "market",
        "title": "Where ResuAgent fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "People applying for jobs online each year",
            "value": "est.",
            "assumption": "Most white-collar hiring starts online"
          },
          {
            "level": "SAM",
            "label": "Job seekers sending 10+ applications",
            "assumption": "They feel the tailoring pain most"
          },
          {
            "level": "SOM",
            "label": "Product and tech job seekers in India, year 1",
            "assumption": "Reached through PM and tech communities"
          }
        ],
        "positioning": {
          "x": [
            "Generic rewrite",
            "Fits one job"
          ],
          "y": [
            "AI decides",
            "I approve each change"
          ],
          "points": [
            {
              "name": "Resume templates",
              "x": 0.15,
              "y": 0.8
            },
            {
              "name": "General AI chat",
              "x": 0.45,
              "y": 0.2
            },
            {
              "name": "Keyword scanners",
              "x": 0.75,
              "y": 0.45
            },
            {
              "name": "ResuAgent",
              "x": 0.85,
              "y": 0.85,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Reads my PDF",
            "Matches a job",
            "Per-bullet review",
            "Keeps my voice",
            "Saved role notes"
          ],
          "rows": [
            {
              "name": "Resume templates",
              "values": [
                "no",
                "no",
                "yes",
                "yes",
                "no"
              ]
            },
            {
              "name": "General AI chat",
              "values": [
                "partial",
                "partial",
                "no",
                "partial",
                "no"
              ]
            },
            {
              "name": "Keyword scanners",
              "values": [
                "yes",
                "yes",
                "no",
                "unclear",
                "no"
              ]
            },
            {
              "name": "ResuAgent",
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
            "value": "AI screens",
            "label": "More companies filter resumes with software"
          },
          {
            "value": "Volume",
            "label": "People send more applications per job search"
          },
          {
            "value": "Privacy",
            "label": "Users want control over where their data goes"
          }
        ],
        "note": "Categories, not named products. Sizes are directional (est.)."
      },
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
        "kind": "journey",
        "title": "Applying to one job today",
        "stages": [
          {
            "stage": "Find a job",
            "doing": "Reads the job post",
            "feeling": "good",
            "pain": "Unsure what they really want",
            "opportunity": "Pull out key skills and words"
          },
          {
            "stage": "Rewrite",
            "doing": "Edits bullets by hand",
            "feeling": "bad",
            "pain": "Slow, second-guessing",
            "opportunity": "AI suggests each bullet"
          },
          {
            "stage": "Check",
            "doing": "Rereads for accuracy",
            "feeling": "okay",
            "pain": "Worried about overclaiming",
            "opportunity": "Before/after with undo"
          },
          {
            "stage": "Format",
            "doing": "Fixes layout, exports",
            "feeling": "bad",
            "pain": "Layout breaks",
            "opportunity": "Clean PDF export"
          },
          {
            "stage": "Apply",
            "doing": "Uploads and waits",
            "feeling": "okay",
            "pain": "No idea if it matched",
            "opportunity": "Show keywords matched"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How Kavya feels using ResuAgent",
        "steps": [
          {
            "step": "Upload",
            "feeling": 0,
            "note": "Will it read it right?"
          },
          {
            "step": "Verify",
            "feeling": 1,
            "note": "Fixed one wrong date"
          },
          {
            "step": "Rewrite",
            "feeling": -1,
            "note": "One bullet overclaims"
          },
          {
            "step": "Undo it",
            "feeling": 1,
            "note": "Still in control"
          },
          {
            "step": "Export",
            "feeling": 2,
            "note": "Applied in 10 minutes"
          }
        ],
        "note": "The dip is an overclaiming bullet. Per-bullet undo turns it around."
      },
      {
        "kind": "rice",
        "title": "What to build first (sample scores, est.)",
        "rows": [
          {
            "item": "AI bullet rewrite",
            "reach": 10,
            "impact": 3,
            "confidence": 0.8,
            "effort": 2
          },
          {
            "item": "Verify parsed details",
            "reach": 10,
            "impact": 2,
            "confidence": 0.8,
            "effort": 1
          },
          {
            "item": "PDF export",
            "reach": 9,
            "impact": 2,
            "confidence": 0.9,
            "effort": 2
          },
          {
            "item": "Knowledge Base",
            "reach": 5,
            "impact": 1,
            "confidence": 0.6,
            "effort": 2
          },
          {
            "item": "Cover letter",
            "reach": 6,
            "impact": 1,
            "confidence": 0.5,
            "effort": 2
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in days. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "Scope",
        "must": [
          "Upload PDF and job text",
          "Verify and edit parsed details",
          "AI rewrite per bullet",
          "Preview and export"
        ],
        "should": [
          "Before/after with undo",
          "Knowledge Base for roles"
        ],
        "could": [
          "Keyword match score",
          "Cover letter draft"
        ],
        "wont": [
          "Inventing new experience",
          "Storing API keys on a server"
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
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria",
        "stories": [
          {
            "story": "Upload",
            "given": "a text-based PDF resume",
            "when": "I upload it with a job description",
            "then": "my roles, dates and bullets show up in editable fields"
          },
          {
            "story": "Tailor",
            "given": "verified details",
            "when": "I tap tailor",
            "then": "each bullet shows a before and after, and no new facts are added"
          },
          {
            "story": "Stay in control",
            "given": "a rewritten bullet I don't like",
            "when": "I tap undo",
            "then": "the original bullet comes back"
          },
          {
            "story": "Export",
            "given": "my reviewed resume",
            "when": "I tap download",
            "then": "I get a clean PDF in under 10 seconds"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "Metric tree (targets are est.)",
        "northStar": {
          "name": "Tailored resumes exported per week",
          "detail": "Each one is a real application",
          "target": "est. 200"
        },
        "inputs": [
          {
            "name": "Upload to verify",
            "detail": "Parsing works",
            "target": "est. 85%"
          },
          {
            "name": "Rewrites kept",
            "detail": "Not undone",
            "target": "est. 70%"
          },
          {
            "name": "Verify to export",
            "detail": "Finish the flow",
            "target": "est. 60%"
          },
          {
            "name": "Return users",
            "detail": "Tailor a 2nd job in 14 days",
            "target": "est. 35%"
          }
        ],
        "guardrails": [
          {
            "name": "Rewrites flagged as untrue",
            "target": "est. < 2%"
          },
          {
            "name": "Time to export",
            "target": "est. < 10 min"
          }
        ],
        "note": "Targets are est. The app has no tracked usage yet."
      },
      {
        "kind": "heart",
        "title": "HEART for ResuAgent (illustrative)",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Users trust the rewrites",
            "signal": "Rewrites kept",
            "metric": "% of rewrites not undone"
          },
          {
            "dimension": "Engagement",
            "goal": "People review every bullet",
            "signal": "Bullets reviewed",
            "metric": "% bullets opened before export"
          },
          {
            "dimension": "Adoption",
            "goal": "First tailor works",
            "signal": "First export",
            "metric": "% of uploads that reach export"
          },
          {
            "dimension": "Retention",
            "goal": "Used for the whole job hunt",
            "signal": "Second job tailored",
            "metric": "% returning within 14 days"
          },
          {
            "dimension": "Task success",
            "goal": "Fast, accurate tailoring",
            "signal": "Export done",
            "metric": "Median minutes from upload to export"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "AI adds skills the person doesn't have",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Prompt forbids new facts; show before/after for every bullet"
          },
          {
            "risk": "PDF parsing fails on fancy layouts",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Verify step lets the user fix fields"
          },
          {
            "risk": "Users don't have an API key",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "One-screen guide to get a free key"
          },
          {
            "risk": "Every resume starts to sound the same",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Rewrite only to the job's needs, keep the user's verbs"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Now, next, later",
        "now": [
          "4-step tailor flow",
          "Gemini rewrite",
          "Knowledge Base",
          "Key stays in browser"
        ],
        "next": [
          "Keyword match score",
          "Undo per bullet",
          "Better PDF parsing"
        ],
        "later": [
          "Cover letter draft",
          "Track applications",
          "Interview prep from the same job"
        ]
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
      },
      {
        "src": "/projects/resuagent/4-export.svg",
        "caption": "Preview and export"
      }
    ],
    "caption": "My wireframes of the 4 steps. Names, roles and counts are sample data."
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
      },
      {
        "name": "Untrue rewrites",
        "target": "est. < 2%",
        "how": "User flags plus a weekly spot check"
      }
    ],
    "tests": [
      "Usability test: tailor a resume to a real job in under 10 minutes",
      "Accuracy check: 20 rewrites reviewed for any added facts",
      "Parsing test: 10 resume layouts, count fields read correctly"
    ],
    "note": "The app is live but usage isn't tracked, so these are targets (est.)."
  },
  "next": {
    "items": [
      "Show a keyword match score before and after",
      "Add per-bullet undo history",
      "Draft a matching cover letter from the same inputs"
    ]
  },
  "label": "How I approached it. A live app I built; numbers on this page are sample data or est.",
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
      "Client-side API key management, with no server-side credential storage"
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
      "I built a 4-step AI agent pipeline that tailors a resume: upload PDF → parse and verify → AI-rewrite bullet points for the target role → preview and export. Gemini rewrites resume points to match JD keywords and keeps the candidate's voice. A Knowledge Base tab stores role context across sessions."
    ]
  }
};

export default project;
