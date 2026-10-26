// About the project: PM interview practice bot
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Product spec layout (`spec`): personas, current process, future process with how each step is run, metrics,
// prioritisation and trade-offs, guardrails and risks, acceptance criteria last.
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
    "used": "Personas and jobs to be done, a current and future process map, a north star with guardrail metrics, MoSCoW, a weighted trade-off matrix, a risk matrix and acceptance criteria.",
    "list": [
      {
        "name": "User personas and jobs to be done",
        "why": "to understand who practises alone, and what each needs from a mock."
      },
      {
        "name": "Current and future process map",
        "why": "to show why solo practice falls short, and to mark which steps the agents run, which they assist, and where a person stays in charge."
      },
      {
        "name": "North star and guardrail metrics",
        "why": "one number for practice that sticks, plus the lines that must hold, like short sessions and no stored resumes."
      },
      {
        "name": "MoSCoW",
        "why": "to fit a 2-day build: what the first version must do, and what waits."
      },
      {
        "name": "Weighted trade-off matrix",
        "why": "to choose between one prompt and several agents."
      },
      {
        "name": "Risk matrix",
        "why": "to rank what can go wrong, from generic feedback to agents that loop."
      },
      {
        "name": "Acceptance criteria",
        "why": "to define good feedback in steps a tester can check."
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
    "caption": "My wireframes of the main screens. Scores are sample data."
  },
  "spec": {
    "personas": {
      "intro": "Two people preparing for PM interviews, with different gaps.",
      "items": [
        {
          "name": "Aditi, MBA student",
          "who": "Preparing for product manager interviews during placements.",
          "personality": "Driven and self-critical. She practises alone, late at night, and wants honest feedback, not praise.",
          "jobs": [
            "When I have an interview next week, ask questions based on my resume and the job, so I practise what they'll actually ask.",
            "When my answer is weak, push on it with a follow-up, so I find the gap before the interviewer does.",
            "When the mock ends, give me two or three clear fixes, so I know what to work on tonight."
          ],
          "pains": [
            "Practising alone gives no follow-up questions or feedback.",
            "Free question banks are generic.",
            "Mocks with friends are hard to schedule."
          ],
          "goals": [
            "Practise questions tied to her resume and the job.",
            "Find weak spots early.",
            "Short sessions she can fit in any day."
          ],
          "nonGoals": [
            "A script to memorise.",
            "A long course."
          ]
        },
        {
          "name": "Vikas, engineer moving into product",
          "who": "Applying for his first PM role after years in engineering.",
          "personality": "Analytical and a bit nervous about open questions. He prefers a gentle tone at first.",
          "jobs": [
            "When I talk about my engineering work, push me to talk about users and impact, so I sound like a PM.",
            "When feedback comes, tell me why, so I learn how a PM thinks."
          ],
          "pains": [
            "His answers drift into technical detail.",
            "He doesn't know what a good PM answer looks like."
          ],
          "goals": [
            "Frame answers around users and metrics.",
            "Build confidence before the real thing."
          ],
          "nonGoals": [
            "Coding or system design interview prep."
          ]
        }
      ]
    },
    "current": {
      "intro": "How most people practise PM interviews today.",
      "steps": [
        {
          "step": "Find common PM questions online",
          "detail": "Pick a list of popular questions.",
          "pain": "Generic, and not tied to their background or the role."
        },
        {
          "step": "Answer alone",
          "detail": "Say answers out loud or write them down.",
          "pain": "Nobody pushes back on a weak answer."
        },
        {
          "step": "Ask a friend for a mock",
          "detail": "Book time with a friend or a senior.",
          "pain": "Hard to schedule, and friends are often too kind or not PMs."
        },
        {
          "step": "Guess what went wrong",
          "detail": "Replay the answers in their head.",
          "pain": "No clear feedback, so the same mistakes repeat."
        }
      ]
    },
    "future": {
      "intro": "A manager agent runs three helpers: one asks, one probes, one gives feedback. A full mock takes under 5 minutes.",
      "steps": [
        {
          "step": "Set up the mock",
          "detail": "Upload a resume, paste the job and pick a style.",
          "mode": "human",
          "why": "Only the person knows the job they want and the tone that helps them."
        },
        {
          "step": "Read the resume and the job",
          "detail": "RAG reads both and pulls out key points.",
          "mode": "ai",
          "why": "It only shapes the questions. Nothing is judged here."
        },
        {
          "step": "Ask the next question",
          "detail": "The manager asks the question agent for a question tied to the person's background.",
          "mode": "ai",
          "why": "A practice question is low risk, and the manager keeps it tied to the resume and job."
        },
        {
          "step": "Probe a thin answer",
          "detail": "If an answer has no user or metric, the probing agent asks one follow-up.",
          "mode": "ai",
          "why": "One follow-up per answer and a cap per mock, so it can't loop."
        },
        {
          "step": "Score and give feedback",
          "detail": "The feedback agent gives a score per skill and no more than 3 fixes.",
          "mode": "assisted",
          "why": "Feedback must quote the person's answer, and they rate it, so bad feedback shows up fast."
        },
        {
          "step": "Pick what to practise next",
          "detail": "The bot suggests the weakest questions to retry.",
          "mode": "assisted",
          "why": "The bot suggests. The person chooses what to retry."
        },
        {
          "step": "Check feedback quality",
          "detail": "Working PMs grade a sample of feedback reports.",
          "mode": "human",
          "why": "The AI can't judge its own advice."
        }
      ]
    },
    "metrics": {
      "northStar": {
        "name": "Completed mocks per user per week",
        "detail": "A finished mock means practice plus feedback. Coming back each week means it helped."
      },
      "inputs": [
        {
          "name": "Mocks finished",
          "target": "est. 75%",
          "how": "Share of started mocks that reach feedback."
        },
        {
          "name": "Feedback rated helpful",
          "target": "est. 80%",
          "how": "Thumbs up or down on each report."
        }
      ],
      "guardrails": [
        {
          "name": "Length of a full mock",
          "target": "under 5 minutes",
          "how": "Time from first question to feedback."
        },
        {
          "name": "Feedback that quotes the answer",
          "target": "every report",
          "how": "Check a sample of reports."
        },
        {
          "name": "Resumes kept after the session",
          "target": "none",
          "how": "Nothing is stored once the mock ends."
        }
      ],
      "tests": [
        "Expert review: 3 working PMs grade 10 feedback reports."
      ],
      "note": "The bot was a 2-day build shown in a demo video. These targets are est."
    },
    "priorities": {
      "intro": "With 2 days to build, the first version had to ask good questions, push on weak answers and give feedback.",
      "items": [
        {
          "item": "Questions from the resume and the job",
          "call": "Must",
          "why": "Generic questions are already free online."
        },
        {
          "item": "One follow-up on weak answers",
          "call": "Must",
          "why": "This is what solo practice is missing."
        },
        {
          "item": "A score per skill and no more than 3 fixes",
          "call": "Must",
          "why": "Clear enough to act on tonight."
        },
        {
          "item": "A cap on questions and follow-ups",
          "call": "Must",
          "why": "Keeps the mock under 5 minutes and stops loops."
        },
        {
          "item": "Tone set by the personality input",
          "call": "Should",
          "why": "Helps nervous people stay with it."
        },
        {
          "item": "Voice answers",
          "call": "Could",
          "why": "Closer to the real thing, but more to build."
        },
        {
          "item": "Retry only the weak questions",
          "call": "Could",
          "why": "Useful once people do more than one mock."
        },
        {
          "item": "A fixed question script",
          "call": "Won't",
          "why": "It can't follow up on what the person said."
        }
      ],
      "matrix": {
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
      }
    },
    "guardrails": {
      "rules": [
        "Feedback must quote the person's answer. No generic advice.",
        "One follow-up per weak answer, and a cap on questions per mock.",
        "Every follow-up says why it is being asked.",
        "The tone follows the personality input.",
        "Resumes are not stored after the session."
      ],
      "risks": [
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
    },
    "acceptance": [
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
        "story": "Stop at the cap",
        "given": "a mock that reaches the question cap",
        "when": "I answer the last question",
        "then": "the manager wraps up and moves to feedback"
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
  }
};

export default project;
