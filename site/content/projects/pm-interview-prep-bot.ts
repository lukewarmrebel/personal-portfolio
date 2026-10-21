// About the project: PM interview practice bot
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "pm-interview-prep-bot",
  "group": "agents",
  "order": 4,
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
  "label": "How I approached it. A working bot shown in a demo video. Scores and targets on this page are sample data or est.",
  "glance": {
    "problem": "Practising product manager interviews alone gives no follow-up questions or feedback.",
    "users": "People preparing for PM interviews.",
    "role": "Solo: designed and built it in 2 days.",
    "outcome": "A working bot, shown in a demo video."
  },
  "judgment": {
    "used": "Jobs to be done, one trade-off on one prompt or several agents, acceptance criteria and a risk list. The agent design was the main call in a 2-day build, and the criteria and risks say what good feedback has to look like.",
    "skipped": "A market size, RICE, HEART and an emotional journey. It's a 2-day build shown in a demo video, with no users to measure."
  },
  "solution": {
    "summary": "I built a mock PM interview in 2 days. A manager agent runs three helpers: one writes questions from your resume and the job, one probes weak answers, and one gives feedback.",
    "steps": [
      "Read the resume and job description (RAG)",
      "Manager agent picks the next move after each answer",
      "Question agent writes questions tied to the user's background",
      "Probing agent follows up when an answer is thin",
      "Feedback agent scores and lists fixes, all in under 5 minutes"
    ],
    "decisions": [
      {
        "decision": "A manager agent in charge",
        "why": "It decides when to probe and when to move on",
        "rejected": "A fixed question script"
      },
      {
        "decision": "Use the resume and the job",
        "why": "Generic questions are already free online",
        "rejected": "A general question bank"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/pm-interview-prep-bot/1-setup.svg",
        "caption": "Set up with resume and job"
      },
      {
        "src": "/projects/pm-interview-prep-bot/2-mock.svg",
        "caption": "A follow-up on a weak answer"
      }
    ],
    "caption": "My wireframes of the main screens, plus the agent setup. Scores are sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "I have an interview next week",
            "want": "questions based on my resume and the job",
            "so": "I practise what they'll actually ask"
          },
          {
            "when": "my answer is weak",
            "want": "a follow-up that pushes on it",
            "so": "I find the gap before the interviewer does"
          },
          {
            "when": "the mock ends",
            "want": "two or three clear fixes",
            "so": "I know what to work on tonight"
          }
        ]
      },
      {
        "kind": "tradeoff",
        "title": "One prompt or several agents?",
        "criteria": [
          {
            "name": "Control of the flow",
            "weight": 5
          },
          {
            "name": "Feedback quality",
            "weight": 4
          },
          {
            "name": "Build speed",
            "weight": 3
          },
          {
            "name": "Cost per mock",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Manager + 3 agents",
            "scores": [
              5,
              4,
              3,
              3
            ],
            "chosen": true
          },
          {
            "name": "One long prompt",
            "scores": [
              2,
              3,
              5,
              4
            ]
          },
          {
            "name": "Fixed script",
            "scores": [
              4,
              2,
              4,
              5
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. The manager agent decides when to probe."
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria",
        "stories": [
          {
            "story": "Personal questions",
            "given": "my resume and a job description",
            "when": "the mock starts",
            "then": "the first question mentions something from my resume or the job"
          },
          {
            "story": "Probe weak answers",
            "given": "an answer with no user or metric",
            "when": "I submit it",
            "then": "the bot asks one follow-up on the missing part"
          },
          {
            "story": "Feedback",
            "given": "the mock is over",
            "when": "I open feedback",
            "then": "I see a score per skill and no more than 3 fixes"
          },
          {
            "story": "Short session",
            "given": "default settings",
            "when": "I finish a full mock",
            "then": "it takes under 5 minutes"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "Feedback is generic or wrong",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Feedback must quote the user's answer; expert review of samples"
          },
          {
            "risk": "Follow-ups feel harsh",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Tone set by the personality input; always explain why"
          },
          {
            "risk": "Resume data privacy",
            "likelihood": "low",
            "impact": "high",
            "mitigation": "Don't store resumes after the session"
          },
          {
            "risk": "Agents loop or ramble",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Manager caps questions and follow-ups per mock"
          }
        ]
      }
    ]
  },
  "flow": {
    "title": "How one mock interview runs",
    "nodes": [
      {
        "label": "Upload resume, paste the job, add style",
        "kind": "start"
      },
      {
        "label": "RAG reads both and pulls key points"
      },
      {
        "label": "Manager asks the question agent for a question"
      },
      {
        "label": "User answers"
      },
      {
        "label": "Answer strong enough?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Probing agent asks one follow-up"
        }
      },
      {
        "label": "More questions left?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Back to the question agent"
        }
      },
      {
        "label": "Feedback agent scores and lists fixes",
        "kind": "end"
      }
    ],
    "caption": "The manager agent decides each next step: ask, probe or wrap up."
  },
  "metrics": {
    "northStar": "Completed mocks per user per week",
    "rows": [
      {
        "name": "Mocks finished",
        "target": "est. 75%",
        "how": "Share of started mocks that reach feedback"
      },
      {
        "name": "Feedback rated helpful",
        "target": "est. 80%",
        "how": "Thumbs up or down on each report"
      }
    ],
    "tests": [
      "Expert review: 3 working PMs grade 10 feedback reports"
    ],
    "note": "The bot was a 2-day build shown in a demo video. These targets are est."
  },
  "next": {
    "items": [
      "Add voice answers",
      "Let people retry only the weak questions"
    ]
  },
  "extra": {
    "paragraphs": [
      "I designed and launched a personalised PM mock interview tool using RAG and several AI agents. A Manager Agent runs subagents that ask questions, probe weak answers and put together structured feedback. Everything is tailored to your resume, the JD and your MBTI."
    ]
  }
};

export default project;
