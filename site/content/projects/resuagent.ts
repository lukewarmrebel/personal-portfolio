// About the project: ResuAgent: tailor your resume to a job
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Product spec layout (`spec`): personas, current process, future process with how each step is run, metrics,
// prioritisation and trade-offs, guardrails and risks, acceptance criteria last.
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
    "used": "Personas and jobs to be done, a current and future process map, a north star with guardrail metrics, MoSCoW, a weighted trade-off matrix, a risk matrix and acceptance criteria.",
    "list": [
      {
        "name": "User personas and jobs to be done",
        "why": "to understand who tailors resumes, and what they will not let the AI do."
      },
      {
        "name": "Current and future process map",
        "why": "to show where the hours go today, and to mark which steps the AI runs, which it drafts, and which the person checks."
      },
      {
        "name": "North star and guardrail metrics",
        "why": "one number for resumes people trust enough to send, plus the lines that must never move, like zero made-up facts."
      },
      {
        "name": "MoSCoW",
        "why": "to keep version 1 to the steps that make a rewrite safe to send."
      },
      {
        "name": "Weighted trade-off matrix",
        "why": "to decide where the API key lives."
      },
      {
        "name": "Risk matrix",
        "why": "to rank what can go wrong, from fake skills to broken PDFs."
      },
      {
        "name": "Acceptance criteria",
        "why": "to define done for each step in a way I can test."
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
      },
      {
        "src": "/resumeagent/01_upload.png",
        "caption": "The live app: the upload screen"
      }
    ],
    "caption": "My wireframes of the steps, plus a screenshot of the live app. Names, roles and counts are sample data."
  },
  "spec": {
    "personas": {
      "intro": "Both people want a tailored resume fast. They differ in how far the rewrite needs to stretch.",
      "items": [
        {
          "name": "Neha, applying to many roles",
          "who": "Mid-career, sending tailored applications to several similar roles.",
          "personality": "Honest and a little anxious. She hates bragging and wants to sound like herself.",
          "jobs": [
            "When I find a job I like, reword my bullets to its language, so I get past the first screen.",
            "When the AI suggests a change, show me before and after, so nothing goes out that isn't true.",
            "When I apply to similar roles, save my role notes, so the next one is faster."
          ],
          "pains": [
            "Tailoring a resume to every job takes hours.",
            "General AI chats add skills she doesn't have.",
            "Many tools want her resume on their servers, or a paid plan."
          ],
          "goals": [
            "A tailored resume for each job, fast.",
            "Keep her own voice and facts.",
            "Keep her resume private."
          ],
          "nonGoals": [
            "She does not want the AI to invent experience.",
            "She does not want a new template or design.",
            "She does not want to make an account."
          ]
        },
        {
          "name": "Karan, switching careers",
          "who": "An engineer applying for his first product roles.",
          "personality": "Keen to stand out, but unsure how to describe old work in new words.",
          "jobs": [
            "When I apply outside my field, put my past work in the new role's words, so a recruiter sees the fit.",
            "When a rewrite stretches too far, undo it, so I can defend every line in an interview."
          ],
          "pains": [
            "He doesn't know the new field's key words.",
            "He worries a rewrite will claim things he can't back up."
          ],
          "goals": [
            "Show his transferable skills honestly.",
            "Learn the language of the new role."
          ],
          "nonGoals": [
            "Cover letters.",
            "Inflated titles or skills."
          ]
        }
      ]
    },
    "current": {
      "intro": "How people tailor a resume today.",
      "steps": [
        {
          "step": "Read the job description",
          "detail": "Pick out the skills and words the job asks for, by eye.",
          "pain": "Easy to miss what the job really stresses."
        },
        {
          "step": "Copy the resume into a new file",
          "detail": "One copy per application.",
          "pain": "Versions pile up and get mixed up."
        },
        {
          "step": "Rewrite bullets one by one",
          "detail": "Reword each bullet to match the job.",
          "pain": "Hours per job."
        },
        {
          "step": "Paste into a general AI chat",
          "detail": "Ask an AI to make it sound better.",
          "pain": "It adds skills she doesn't have and loses her voice. Her resume sits in yet another tool."
        },
        {
          "step": "Fix the layout and export",
          "detail": "Clean up the format and save a PDF.",
          "pain": "The layout breaks after the edits."
        },
        {
          "step": "Start again for the next job",
          "detail": "Repeat the whole thing.",
          "pain": "Nothing is saved between applications."
        }
      ]
    },
    "future": {
      "intro": "Four steps in the app: upload, verify, tailor, export. The AI drafts. The person checks at two points.",
      "steps": [
        {
          "step": "Read the resume",
          "detail": "The app reads roles, dates and bullets from the PDF.",
          "mode": "ai",
          "why": "Parsing is mechanical, and the next step lets the person fix anything it got wrong."
        },
        {
          "step": "Verify the details",
          "detail": "The person checks and fixes the fields the app read.",
          "mode": "human",
          "why": "A misread date or title ruins every rewrite after it."
        },
        {
          "step": "Pull the job's key words",
          "detail": "The AI reads the job description and picks the skills and words it asks for.",
          "mode": "ai",
          "why": "It only reads the job post. Nothing about the person changes here."
        },
        {
          "step": "Rewrite each bullet",
          "detail": "Gemini rewrites bullets to the job's language and keeps the person's voice. No new facts.",
          "mode": "assisted",
          "why": "The AI writes the draft, but every change is shown to the person."
        },
        {
          "step": "Review before and after",
          "detail": "The person keeps a rewrite or taps undo to get the original back.",
          "mode": "human",
          "why": "Only the person knows what is true about their work."
        },
        {
          "step": "Preview and export",
          "detail": "A clean PDF, built from the reviewed resume.",
          "mode": "ai",
          "why": "Layout and export are mechanical, and the person sees the preview first."
        },
        {
          "step": "Save role notes",
          "detail": "Notes about the role go into the Knowledge Base for next time.",
          "mode": "assisted",
          "why": "The app saves the notes. The person can edit or delete them."
        }
      ]
    },
    "metrics": {
      "northStar": {
        "name": "Tailored resumes exported per week",
        "detail": "An export means the person trusted the rewrite enough to send it."
      },
      "inputs": [
        {
          "name": "Rewrites kept",
          "target": "est. 70%",
          "how": "Share of AI bullets not undone."
        },
        {
          "name": "Upload to export",
          "target": "est. 60%",
          "how": "Funnel from step 1 to step 4."
        },
        {
          "name": "Time to tailor one resume",
          "target": "under 10 minutes",
          "how": "Usability test on a real job."
        }
      ],
      "guardrails": [
        {
          "name": "New facts added by the AI",
          "target": "zero",
          "how": "Spot-check a sample of rewrites against the original resume."
        },
        {
          "name": "Resumes or keys stored on my server",
          "target": "none",
          "how": "The key and the resume stay in the person's browser."
        }
      ],
      "tests": [
        "Usability test: tailor a resume to a real job in under 10 minutes."
      ],
      "note": "The app is live but usage isn't tracked, so these are targets (est.)."
    },
    "priorities": {
      "intro": "Version 1 is the smallest app that makes a rewrite safe to send.",
      "items": [
        {
          "item": "Verify step before any AI",
          "call": "Must",
          "why": "A wrong parse ruins every rewrite after it."
        },
        {
          "item": "Before and after for every bullet, with undo",
          "call": "Must",
          "why": "Nothing goes out that the person hasn't seen."
        },
        {
          "item": "No new facts rule in the prompt",
          "call": "Must",
          "why": "A fake skill can cost someone the job."
        },
        {
          "item": "API key kept in the person's browser",
          "call": "Must",
          "why": "Privacy, and no cost to me for a free tool."
        },
        {
          "item": "Clean PDF export",
          "call": "Should",
          "why": "The point of the app, but a copy and paste works on day one."
        },
        {
          "item": "One-screen guide to get a free API key",
          "call": "Should",
          "why": "Most people don't have a key yet."
        },
        {
          "item": "Keyword match score before and after",
          "call": "Could",
          "why": "Nice proof, not needed to tailor."
        },
        {
          "item": "One-shot rewrite of the whole resume",
          "call": "Won't",
          "why": "Hard to review, and easier for the AI to overreach."
        }
      ],
      "matrix": {
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
    },
    "guardrails": {
      "rules": [
        "The AI never adds a skill, title, date or number that isn't in the original resume.",
        "Every rewritten bullet shows before and after, and can be undone.",
        "No rewrite starts until the person has verified the details.",
        "The API key and the resume stay in the person's browser. My server stores neither.",
        "Rewrite only to the job's needs, and keep the person's own verbs."
      ],
      "risks": [
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
    "acceptance": [
      {
        "story": "Upload",
        "given": "a text-based PDF resume",
        "when": "I upload it with a job description",
        "then": "my roles, dates and bullets show up in editable fields"
      },
      {
        "story": "Fix a bad read",
        "given": "a field the app read wrong",
        "when": "I edit it in the verify step",
        "then": "the rewrite uses my corrected value"
      },
      {
        "story": "Tailor",
        "given": "verified details",
        "when": "I tap tailor",
        "then": "each bullet shows a before and after, and no new facts are added"
      },
      {
        "story": "No made-up numbers",
        "given": "a bullet with no number in it",
        "when": "I tap tailor",
        "then": "the rewrite adds no number or metric"
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
  }
};

export default project;
