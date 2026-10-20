// About the project: Eductive: student mental health platform
// Earlier project. Built from the site's bullets, screenshots and business plan. How I approached it; plan figures are projections, other numbers are sample data or est.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "eductive",
  "group": "earlier",
  "order": 8,
  "title": "Eductive: student mental health platform",
  "oneLine": "A plan for schools and colleges to spot students who are struggling early and get them the right level of help.",
  "tag": "Business plan · EdTech",
  "tags": [
    "Business plan",
    "EdTech",
    "India"
  ],
  "links": [],
  "card": {
    "thumb": "/eductive/00_hero.png"
  },
  "tiles": [
    {
      "value": "4",
      "label": "levels of support"
    },
    {
      "value": "265M",
      "label": "students in the market sized"
    }
  ],
  "glance": {
    "problem": "Many students face serious stress, and most never seek help.",
    "users": "Schools and colleges, and their students.",
    "role": "Product and business plan: research, flows, model and roadmap.",
    "outcome": "A business plan and product design. Not built."
  },
  "problem": {
    "persona": {
      "name": "Aditya, second-year engineering student",
      "who": "Lives in a hostel, far from home (illustrative persona)",
      "context": "Exams, a new city and money worries pile up. He feels low most weeks but won't walk into the counsellor's office.",
      "needs": [
        "A private way to say how he feels",
        "Help that doesn't feel like a big step",
        "Someone to talk to when it gets bad",
        "No one at college judging him"
      ],
      "frustrations": [
        "Stigma around asking for help",
        "Counsellors seem only for crises",
        "Generic wellness apps",
        "Help that comes too late"
      ]
    },
    "jtbd": "When I'm struggling and don't want anyone to know yet, I want a private way to track how I feel and get help that matches how bad it is, so I can get better before it affects my studies."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "Framing the problem with CIRCLES",
        "steps": {
          "comprehend": "Many students face serious stress, and most never seek help.",
          "identify": "Students (users) and their schools and colleges (buyers).",
          "report": "Private tracking, early warning, the right level of help, no stigma.",
          "cut": "Early detection plus matched support. Crisis care already exists.",
          "list": "Mood check-ins, wellbeing scores, 4 levels of support, a chatbot, an institute portal.",
          "evaluate": "Selling to students alone is hard; selling to institutes gives reach but raises privacy worries.",
          "summarise": "A B2B2C platform: institutes pay, students get private, matched support."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (desk research done; interviews planned)",
        "methods": [
          {
            "method": "Desk research",
            "who": "Studies and market reports",
            "howMany": "Done",
            "how": "Sized the market and the problem for the plan"
          },
          {
            "method": "Survey",
            "who": "College students",
            "howMany": "200",
            "how": "Anonymous: stress levels and help-seeking"
          },
          {
            "method": "Interviews",
            "who": "Counsellors and deans",
            "howMany": "8",
            "how": "How do you spot a struggling student today?"
          },
          {
            "method": "Pilot",
            "who": "One college",
            "howMany": "1 term",
            "how": "Check-in rates and support requests"
          }
        ],
        "findings": [
          {
            "insight": "Over 40% of students face severe stress or depression",
            "evidence": "Figure from my plan's desk research",
            "group": "Need"
          },
          {
            "insight": "Over 80% never seek support",
            "evidence": "Figure from my plan's desk research",
            "group": "Gap"
          },
          {
            "insight": "Stigma stops students asking",
            "evidence": "Hypothesis to test in the survey",
            "group": "Barrier"
          }
        ],
        "questions": [
          "(Students) When you felt low, who did you tell, if anyone?",
          "(Students) What would make you use a wellbeing app at college?",
          "(Counsellors) How do you find out a student is struggling?",
          "(Deans) What would you need to see to pay for this?"
        ],
        "note": "The two figures are from my plan's desk research. Survey and interviews are planned, not done."
      },
      {
        "kind": "market",
        "title": "Where Eductive fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "Students in India",
            "value": "265M (plan)",
            "assumption": "All school and college students"
          },
          {
            "level": "SAM",
            "label": "Private institutes that could buy",
            "value": "421K (plan)",
            "assumption": "Private schools and colleges with budgets"
          },
          {
            "level": "SOM",
            "label": "Pilot institutes in 2 cities, year 1",
            "value": "est.",
            "assumption": "Sold one campus at a time"
          }
        ],
        "positioning": {
          "x": [
            "Individual students",
            "Whole institute"
          ],
          "y": [
            "Self-help only",
            "Matched human support"
          ],
          "points": [
            {
              "name": "Meditation apps",
              "x": 0.15,
              "y": 0.15
            },
            {
              "name": "Online therapy",
              "x": 0.2,
              "y": 0.85
            },
            {
              "name": "Campus counsellor",
              "x": 0.7,
              "y": 0.7
            },
            {
              "name": "Eductive",
              "x": 0.85,
              "y": 0.85,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Private mood tracking",
            "Early warning",
            "Levels of support",
            "Institute view",
            "Therapy access"
          ],
          "rows": [
            {
              "name": "Meditation apps",
              "values": [
                "partial",
                "no",
                "no",
                "no",
                "no"
              ]
            },
            {
              "name": "Online therapy",
              "values": [
                "partial",
                "no",
                "partial",
                "no",
                "yes"
              ]
            },
            {
              "name": "Campus counsellor",
              "values": [
                "no",
                "partial",
                "partial",
                "partial",
                "partial"
              ]
            },
            {
              "name": "Eductive",
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
            "value": "16.3%",
            "label": "Growth of the wellness app sector (from my plan)"
          },
          {
            "value": "SEL",
            "label": "Schools adding social and emotional learning"
          },
          {
            "value": "Online care",
            "label": "Therapy online is now normal"
          }
        ],
        "note": "265M, 421K and 16.3% are figures from my plan. SOM is est."
      },
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "I feel low but don't want to tell anyone",
            "want": "a private check-in",
            "so": "I can see if it's getting worse"
          },
          {
            "when": "it does get worse",
            "want": "help that matches how bad it is",
            "so": "I'm not jumping straight to therapy"
          },
          {
            "when": "I run student welfare (institute)",
            "want": "early warning by group, without names",
            "so": "we act before it becomes a crisis"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "A struggling student's path today",
        "stages": [
          {
            "stage": "Stress builds",
            "doing": "Exams, money, loneliness",
            "feeling": "bad",
            "pain": "No one notices",
            "opportunity": "Daily private check-in"
          },
          {
            "stage": "Copes alone",
            "doing": "Scrolls, skips class",
            "feeling": "bad",
            "pain": "Gets worse quietly",
            "opportunity": "Weekly report spots the trend"
          },
          {
            "stage": "Thinks about help",
            "doing": "Searches online",
            "feeling": "okay",
            "pain": "Stigma, cost",
            "opportunity": "Self-help and chatbot first"
          },
          {
            "stage": "Gets help",
            "doing": "Talks to someone",
            "feeling": "okay",
            "pain": "Often too late",
            "opportunity": "Mentor at level 2"
          },
          {
            "stage": "Recovers",
            "doing": "Back to routine",
            "feeling": "good",
            "pain": "No follow-up",
            "opportunity": "Keep tracking, step down levels"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How Aditya feels using Eductive",
        "steps": [
          {
            "step": "First check-in",
            "feeling": -1,
            "note": "Feels low, unsure"
          },
          {
            "step": "Sees his week",
            "feeling": 0,
            "note": "Oh, it's exams"
          },
          {
            "step": "Tries self-help",
            "feeling": 1,
            "note": "Small relief"
          },
          {
            "step": "Bad week",
            "feeling": -2,
            "note": "Stress at 9"
          },
          {
            "step": "Mentor checks in",
            "feeling": 1,
            "note": "Someone noticed"
          },
          {
            "step": "Steady again",
            "feeling": 2,
            "note": "Back on track"
          }
        ],
        "note": "The bad week is where most help fails today. The level change is the key moment."
      },
      {
        "kind": "rice",
        "title": "What to build first (sample scores, est.)",
        "rows": [
          {
            "item": "Mood check-in and journal",
            "reach": 10,
            "impact": 2,
            "confidence": 0.8,
            "effort": 2
          },
          {
            "item": "Weekly wellbeing report",
            "reach": 8,
            "impact": 2,
            "confidence": 0.7,
            "effort": 2
          },
          {
            "item": "Institute portal",
            "reach": 4,
            "impact": 3,
            "confidence": 0.7,
            "effort": 3
          },
          {
            "item": "Support chatbot",
            "reach": 7,
            "impact": 2,
            "confidence": 0.5,
            "effort": 3
          },
          {
            "item": "Psychologist booking",
            "reach": 2,
            "impact": 3,
            "confidence": 0.7,
            "effort": 3
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "Scope for the MVP",
        "must": [
          "Private mood check-in",
          "4 levels of support",
          "Institute portal with group trends",
          "Helpline link on every screen"
        ],
        "should": [
          "Weekly wellbeing report",
          "Mentor booking"
        ],
        "could": [
          "Support chatbot",
          "Academic tracking"
        ],
        "wont": [
          "Diagnosis by AI",
          "Sharing names without consent"
        ]
      },
      {
        "kind": "tradeoff",
        "title": "Who pays?",
        "criteria": [
          {
            "name": "Reach",
            "weight": 5
          },
          {
            "name": "Student trust",
            "weight": 5
          },
          {
            "name": "Revenue",
            "weight": 3
          },
          {
            "name": "Sales effort",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Students pay (B2C)",
            "scores": [
              2,
              4,
              2,
              4
            ]
          },
          {
            "name": "Institutes pay, students private (B2B2C)",
            "scores": [
              5,
              4,
              4,
              2
            ],
            "chosen": true
          },
          {
            "name": "Institutes pay, full data access",
            "scores": [
              5,
              1,
              5,
              3
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. The plan uses ₹999 a year B2C plus institute bundles."
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria",
        "stories": [
          {
            "story": "Private check-in",
            "given": "a student is logged in",
            "when": "they save a check-in",
            "then": "it's visible only to them; the institute sees group totals only"
          },
          {
            "story": "Match the level",
            "given": "stress at 8+ for 3 check-ins in a row",
            "when": "the next check-in is saved",
            "then": "the app offers a mentor (level 2) and shows the helpline"
          },
          {
            "story": "Crisis",
            "given": "a check-in mentions self-harm",
            "when": "it is saved",
            "then": "the helpline shows at once and a counsellor is alerted under the consent rules"
          },
          {
            "story": "Institute report",
            "given": "a group of 20+ students",
            "when": "the week ends",
            "then": "the portal shows group trends with no names"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "Metric tree (targets are est.)",
        "northStar": {
          "name": "Students who got help before a crisis",
          "detail": "Moved up a level and improved within 4 weeks",
          "target": "est. 60%"
        },
        "inputs": [
          {
            "name": "Weekly check-in rate",
            "detail": "Students checking in",
            "target": "est. 50%"
          },
          {
            "name": "Early flags",
            "detail": "Rising stress spotted",
            "target": "est. 2 weeks earlier"
          },
          {
            "name": "Support uptake",
            "detail": "Accepted the offered level",
            "target": "est. 40%"
          },
          {
            "name": "Institute renewals",
            "detail": "Yearly",
            "target": "est. 80%"
          }
        ],
        "guardrails": [
          {
            "name": "Privacy complaints",
            "target": "0"
          },
          {
            "name": "Missed crisis alerts",
            "target": "0"
          }
        ],
        "note": "Targets are est. The plan projects ₹2.04 Cr revenue in year 2."
      },
      {
        "kind": "heart",
        "title": "HEART for Eductive (illustrative)",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Students feel supported",
            "signal": "Rating after support",
            "metric": "Average rating out of 5"
          },
          {
            "dimension": "Engagement",
            "goal": "Check-ins become a habit",
            "signal": "Check-ins",
            "metric": "Check-ins per student per week"
          },
          {
            "dimension": "Adoption",
            "goal": "Students join after launch",
            "signal": "First check-in",
            "metric": "% of enrolled students active in month 1"
          },
          {
            "dimension": "Retention",
            "goal": "Use through the year",
            "signal": "Monthly use",
            "metric": "% still checking in after 3 months"
          },
          {
            "dimension": "Task success",
            "goal": "Right help at the right time",
            "signal": "Level change then recovery",
            "metric": "% improving within 4 weeks of support"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "A crisis is missed",
            "likelihood": "low",
            "impact": "high",
            "mitigation": "Helpline on every screen; trained staff review crisis words"
          },
          {
            "risk": "Students fear the college will see",
            "likelihood": "high",
            "impact": "high",
            "mitigation": "Names hidden by default; clear privacy promise"
          },
          {
            "risk": "Institutes see it as a cost, not a need",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Pilot data on early flags and retention"
          },
          {
            "risk": "Not enough mentors and psychologists",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Partner networks; self-help covers level 1"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Now, next, later (my 4-phase plan)",
        "now": [
          "MVP: wireframes and institute portal"
        ],
        "next": [
          "Pilot testing with one institute"
        ],
        "later": [
          "Social media sentiment signals",
          "Career guidance"
        ]
      }
    ]
  },
  "flow": {
    "title": "From a check-in to the right help",
    "nodes": [
      {
        "label": "Student does a daily check-in",
        "kind": "start"
      },
      {
        "label": "Mood, stress and journal saved privately"
      },
      {
        "label": "Crisis words or very high stress?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Helpline now; counsellor alerted (level 4)"
        }
      },
      {
        "label": "Weekly report finds the trend"
      },
      {
        "label": "Getting worse for 2+ weeks?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Stay on self-help (level 1)"
        }
      },
      {
        "label": "Offer a mentor or plan (levels 2-3)"
      },
      {
        "label": "Institute sees group trends, no names",
        "kind": "end"
      }
    ],
    "caption": "Data flow from my plan: check-ins and scores become weekly reports and matched support."
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/eductive/1-checkin.svg",
        "caption": "Daily private check-in"
      },
      {
        "src": "/projects/eductive/2-week.svg",
        "caption": "Weekly mood trend"
      },
      {
        "src": "/projects/eductive/3-support.svg",
        "caption": "4 levels of support"
      },
      {
        "src": "/projects/eductive/4-portal.svg",
        "caption": "Institute portal, no names"
      }
    ],
    "caption": "My wireframes for the plan. All numbers are sample data."
  },
  "solution": {
    "summary": "I designed Eductive as a business plan and product: students track how they feel in private, the app spots when things get worse, and offers help at one of four levels. Institutes pay and see only group trends.",
    "steps": [
      "Collect: mood journals, wellbeing scores (SUDS, PWB, M3) and academic tracking",
      "Report: a weekly wellbeing report for each student",
      "Match: 4 levels of support, from self-help to a psychologist (CBT, DBT, ACT)",
      "Sell: ₹999 a year for students, bundles for institutes",
      "Grow: a 4-phase roadmap from MVP to career guidance"
    ],
    "decisions": [
      {
        "decision": "Institutes pay, students stay private",
        "why": "Reach through institutes, trust through privacy",
        "rejected": "Selling only to students"
      },
      {
        "decision": "Four levels of support",
        "why": "Most students need a small step, not therapy",
        "rejected": "Counsellor-only model"
      },
      {
        "decision": "No AI diagnosis",
        "why": "AI spots trends; trained people decide",
        "rejected": "Chatbot as therapist"
      }
    ]
  },
  "metrics": {
    "northStar": "Students who got help before a crisis",
    "rows": [
      {
        "name": "Weekly check-ins",
        "target": "est. 50%",
        "how": "Share of enrolled students checking in each week"
      },
      {
        "name": "Support uptake",
        "target": "est. 40%",
        "how": "Share who accept the level they're offered"
      },
      {
        "name": "Year 2 revenue",
        "target": "₹2.04 Cr (plan)",
        "how": "Projection from my business plan"
      }
    ],
    "tests": [
      "Pilot with one college for a term",
      "Anonymous survey before and after the pilot",
      "Privacy review with students before launch"
    ],
    "note": "Not built. Revenue is my plan's projection; other targets are est."
  },
  "next": {
    "items": [
      "Run a one-term pilot with one college",
      "Test the privacy promise with students first",
      "Add career guidance (phase 4 of my plan)"
    ]
  },
  "label": "A business plan and product design, not built. Figures marked \"plan\" come from my plan; the rest are sample data or est.",
  "extra": {
    "images": [
      {
        "src": "/eductive/00_hero.png",
        "alt": "Eductive: student mental health platform: screen 1"
      },
      {
        "src": "/eductive/03_emotional_tracker.png",
        "alt": "Eductive: student mental health platform: screen 2"
      },
      {
        "src": "/eductive/07_ai_chatbot.png",
        "alt": "Eductive: student mental health platform: screen 3"
      },
      {
        "src": "/eductive/09_portal.png",
        "alt": "Eductive: student mental health platform: screen 4"
      },
      {
        "src": "/eductive/08_data_flow.png",
        "alt": "Eductive: student mental health platform: screen 5"
      },
      {
        "src": "/eductive/02_solution.png",
        "alt": "Eductive: student mental health platform: screen 6"
      }
    ],
    "highlights": [
      "Designed 4-tier intervention framework: self-directed (low) → mentor-guided (average) → CBT/DBT/ACT via psychologist (severe)",
      "Mapped full non-cognitive data pipeline: mood journals, SUDS/PWB/M3 metrics, academic tracking → weekly diagnostic reports",
      "Built B2B2C model: ₹999/yr freemium (B2C) + bundle subscriptions for institutions (B2B); projected ₹2.04Cr revenue in Year 2",
      "Sized market: 265M students, 421K private institutes, 16.3% wellness app sector growth",
      "Defined 4-phase product roadmap: MVP (wireframes + institute portal) → pilot testing → social media sentiment → career guidance"
    ],
    "skills": [
      "User Research",
      "Personas",
      "User Flow",
      "Wireframing",
      "AI Product Design",
      "EdTech",
      "Business Model Design",
      "Market Sizing",
      "Product Roadmap",
      "Financial Modelling"
    ],
    "paragraphs": [
      "I designed and pitched a B2B2C digital wellness platform for India's student mental health crisis. Over 40% of students face severe depression or stress, and over 80% never seek support. Eductive gives institutions AI-driven non-cognitive behavioural insights (SEL). They can spot, track and act on student mental health before it gets worse."
    ]
  }
};

export default project;
