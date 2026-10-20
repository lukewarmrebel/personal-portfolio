// About the project: PM interview practice bot
// Earlier project. Built from the site's bullets and the demo video. How I approached it; illustrative numbers are sample data or est.
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
    "persona": {
      "name": "Sneha, aspiring PM",
      "who": "Analyst preparing for her first PM interviews (illustrative persona)",
      "context": "She practises alone with question lists. Nobody pushes back on a weak answer, so she doesn't know what to fix.",
      "needs": [
        "Questions that fit her resume and the job",
        "Follow-ups when an answer is thin",
        "Clear feedback she can act on",
        "Practice that fits in a short break"
      ],
      "frustrations": [
        "Generic question lists",
        "Friends don't know how PM interviews work",
        "Paid mock coaches cost a lot",
        "No idea which answers were weak"
      ]
    },
    "jtbd": "When I have a PM interview coming up, I want a mock that asks about my own experience and pushes on weak answers, so I walk in knowing what to fix."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "Framing the problem with CIRCLES",
        "steps": {
          "comprehend": "Solo PM practice has no follow-ups and no feedback.",
          "identify": "People switching into PM and PMs going for a new role.",
          "report": "Personal questions, probing follow-ups, short clear feedback.",
          "cut": "Probing weak answers is the gap. Question lists already exist.",
          "list": "Question agent, probing agent, feedback agent, run by a manager agent.",
          "evaluate": "One chat prompt is simpler; separate agents give better control of the flow.",
          "summarise": "A 5-minute mock that reads your resume and the job, probes, and coaches."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (no interviews done yet)",
        "methods": [
          {
            "method": "Interviews",
            "who": "People who did PM interviews this year",
            "howMany": "8",
            "how": "Which questions threw you, and why?"
          },
          {
            "method": "Usability test",
            "who": "First-time users",
            "howMany": "5",
            "how": "Do one mock, then rate the feedback"
          },
          {
            "method": "Expert review",
            "who": "Working PMs who interview",
            "howMany": "3",
            "how": "Grade 10 bot feedback reports"
          }
        ],
        "findings": [
          {
            "insight": "Follow-ups are what people fear",
            "evidence": "Hypothesis to test in interviews",
            "group": "Need"
          },
          {
            "insight": "Feedback must be specific to land",
            "evidence": "Hypothesis to test in usability tests",
            "group": "Value"
          },
          {
            "insight": "Short mocks get repeated",
            "evidence": "Hypothesis behind the 5-minute format",
            "group": "Habit"
          }
        ],
        "questions": [
          "How did you practise for your last PM interview?",
          "Which question went worst? What happened?",
          "What feedback actually changed how you answered?",
          "Would you practise with a bot? What would put you off?"
        ],
        "note": "A plan with hypotheses, not findings."
      },
      {
        "kind": "market",
        "title": "Where the bot fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "People preparing for job interviews online",
            "value": "est.",
            "assumption": "Interview prep is a large, repeat need"
          },
          {
            "level": "SAM",
            "label": "People preparing for PM interviews",
            "assumption": "PM interviews have a known, testable format"
          },
          {
            "level": "SOM",
            "label": "PM aspirants in Indian PM communities, year 1",
            "assumption": "Reached through PM groups and B-school clubs"
          }
        ],
        "positioning": {
          "x": [
            "Generic questions",
            "Fits my resume and job"
          ],
          "y": [
            "No pushback",
            "Probes and coaches"
          ],
          "points": [
            {
              "name": "Question lists and books",
              "x": 0.1,
              "y": 0.1
            },
            {
              "name": "Peer mocks",
              "x": 0.4,
              "y": 0.6
            },
            {
              "name": "Paid coaches",
              "x": 0.75,
              "y": 0.9
            },
            {
              "name": "General AI chat",
              "x": 0.45,
              "y": 0.3
            },
            {
              "name": "My bot",
              "x": 0.85,
              "y": 0.75,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Reads my resume",
            "Fits the job",
            "Follow-ups",
            "Scored feedback",
            "Any time"
          ],
          "rows": [
            {
              "name": "Question lists",
              "values": [
                "no",
                "no",
                "no",
                "no",
                "yes"
              ]
            },
            {
              "name": "Peer mocks",
              "values": [
                "partial",
                "partial",
                "yes",
                "partial",
                "no"
              ]
            },
            {
              "name": "Paid coaches",
              "values": [
                "yes",
                "yes",
                "yes",
                "yes",
                "no"
              ]
            },
            {
              "name": "My bot",
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
            "value": "More PM roles",
            "label": "AI PM roles are opening across Indian tech"
          },
          {
            "value": "Self-serve prep",
            "label": "People prep on their phones in short bursts"
          },
          {
            "value": "Agents",
            "label": "Multi-agent setups make guided chats easier"
          }
        ],
        "note": "Categories, not named products. Sizes are directional (est.)."
      },
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
        "kind": "journey",
        "title": "Preparing for a PM interview today",
        "stages": [
          {
            "stage": "Find questions",
            "doing": "Searches question lists",
            "feeling": "okay",
            "pain": "Generic and endless",
            "opportunity": "Questions from resume and job"
          },
          {
            "stage": "Practise",
            "doing": "Answers out loud alone",
            "feeling": "bad",
            "pain": "No pushback",
            "opportunity": "Probing follow-ups"
          },
          {
            "stage": "Get feedback",
            "doing": "Asks a friend",
            "feeling": "bad",
            "pain": "Vague or none",
            "opportunity": "Scored feedback with fixes"
          },
          {
            "stage": "Improve",
            "doing": "Rewrites answers",
            "feeling": "okay",
            "pain": "Unsure what to change",
            "opportunity": "Retry weak questions"
          },
          {
            "stage": "Interview",
            "doing": "Goes in",
            "feeling": "good",
            "pain": "Nerves",
            "opportunity": "Confidence from reps"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How Sneha feels during a mock",
        "steps": [
          {
            "step": "Setup",
            "feeling": 0,
            "note": "Curious"
          },
          {
            "step": "First question",
            "feeling": 1,
            "note": "It knows my resume"
          },
          {
            "step": "Follow-up",
            "feeling": -2,
            "note": "Caught out"
          },
          {
            "step": "Feedback",
            "feeling": 1,
            "note": "Now I see why"
          },
          {
            "step": "Retry",
            "feeling": 2,
            "note": "Nailed it"
          }
        ],
        "note": "The follow-up should sting a little. That's the point, as long as the feedback explains it."
      },
      {
        "kind": "rice",
        "title": "What to build first (sample scores, est.)",
        "rows": [
          {
            "item": "Probing follow-ups",
            "reach": 10,
            "impact": 3,
            "confidence": 0.7,
            "effort": 1
          },
          {
            "item": "Resume + job questions (RAG)",
            "reach": 10,
            "impact": 2,
            "confidence": 0.8,
            "effort": 1
          },
          {
            "item": "Scored feedback",
            "reach": 9,
            "impact": 3,
            "confidence": 0.6,
            "effort": 1
          },
          {
            "item": "Voice answers",
            "reach": 6,
            "impact": 2,
            "confidence": 0.5,
            "effort": 2
          },
          {
            "item": "Progress over mocks",
            "reach": 4,
            "impact": 2,
            "confidence": 0.5,
            "effort": 2
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in days (it was a 2-day build). Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "Scope for the 2-day build",
        "must": [
          "Read resume and job",
          "Ask 3 to 4 questions",
          "Probe weak answers",
          "Feedback at the end"
        ],
        "should": [
          "Personality input to shape tone",
          "Pick a focus area"
        ],
        "could": [
          "Voice answers",
          "Retry weak questions"
        ],
        "wont": [
          "Human coach marketplace",
          "Company-specific question banks"
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
        "kind": "northstar",
        "title": "Metric tree (targets are est.)",
        "northStar": {
          "name": "Completed mocks per user per week",
          "detail": "Reps that end with feedback",
          "target": "est. 3"
        },
        "inputs": [
          {
            "name": "Setup to first question",
            "detail": "Resume and job read",
            "target": "est. 90%"
          },
          {
            "name": "Mocks finished",
            "detail": "Reached feedback",
            "target": "est. 75%"
          },
          {
            "name": "Weak questions retried",
            "detail": "After feedback",
            "target": "est. 40%"
          },
          {
            "name": "Return in 7 days",
            "detail": "Second mock",
            "target": "est. 35%"
          }
        ],
        "guardrails": [
          {
            "name": "Feedback rated unhelpful",
            "target": "est. < 15%"
          },
          {
            "name": "Cost per mock",
            "target": "est. < ₹3"
          }
        ],
        "note": "Targets are est. The bot was shown in a demo, not launched to users."
      },
      {
        "kind": "heart",
        "title": "HEART for the bot (illustrative)",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Feedback feels useful",
            "signal": "Thumbs up on feedback",
            "metric": "% feedback rated helpful"
          },
          {
            "dimension": "Engagement",
            "goal": "People answer fully",
            "signal": "Answer length, follow-ups answered",
            "metric": "% follow-ups answered"
          },
          {
            "dimension": "Adoption",
            "goal": "First mock completed",
            "signal": "Feedback viewed",
            "metric": "% sign-ups finishing mock 1"
          },
          {
            "dimension": "Retention",
            "goal": "Practice becomes a habit",
            "signal": "Repeat mocks",
            "metric": "% doing 3+ mocks in 2 weeks"
          },
          {
            "dimension": "Task success",
            "goal": "Answers improve",
            "signal": "Score on retried questions",
            "metric": "Average score lift on retry"
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
      },
      {
        "kind": "roadmap",
        "title": "Now, next, later",
        "now": [
          "Manager + 3 agents",
          "Resume and job questions",
          "Feedback under 5 min"
        ],
        "next": [
          "Voice answers",
          "Retry weak questions",
          "Expert-graded feedback samples"
        ],
        "later": [
          "Progress over many mocks",
          "Company-style question sets",
          "Peer mock matching"
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
  "wireframes": {
    "screens": [
      {
        "src": "/projects/pm-interview-prep-bot/1-setup.svg",
        "caption": "Set up with resume and job"
      },
      {
        "src": "/projects/pm-interview-prep-bot/2-mock.svg",
        "caption": "A follow-up on a weak answer"
      },
      {
        "src": "/projects/pm-interview-prep-bot/3-feedback.svg",
        "caption": "Scores and top fixes"
      },
      {
        "src": "/projects/pm-interview-prep-bot/4-agents.svg",
        "caption": "How the agents fit together"
      }
    ],
    "caption": "My wireframes of the main screens, plus the agent setup. Scores are sample data."
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
      },
      {
        "decision": "Under 5 minutes",
        "why": "Short mocks fit a busy day and get repeated",
        "rejected": "A full 45-minute mock"
      }
    ]
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
      },
      {
        "name": "Score lift on retry",
        "target": "est. +1 point",
        "how": "Same question, before and after feedback"
      }
    ],
    "tests": [
      "Expert review: 3 working PMs grade 10 feedback reports",
      "Usability test: 5 people do a mock, then rate it",
      "Timing test: 20 mocks, check all finish under 5 minutes"
    ],
    "note": "The bot was a 2-day build shown in a demo video. These targets are est."
  },
  "next": {
    "items": [
      "Add voice answers",
      "Let people retry only the weak questions",
      "Track progress across mocks"
    ]
  },
  "label": "How I approached it. A working bot shown in a demo video. Scores and targets on this page are sample data or est.",
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
