// About the project: Blood test report explainer (prototype)
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "blood-test-report-explainer",
  "group": "prototypes",
  "order": 1,
  "title": "Blood test report explainer (prototype)",
  "oneLine": "Upload a parent's blood test report and every result is explained in plain English, Hindi or Telugu. A dangerous value shows “call a doctor today” instead of a summary.",
  "tag": "Prototype · Health · India and US",
  "tags": [
    "Prototype",
    "Consumer health",
    "AI safety",
    "India + US"
  ],
  "links": [
    {
      "label": "Try the prototype",
      "href": "https://pranav-labreport.sites.tab.bot/prototype/"
    },
    {
      "label": "Read the full write-up",
      "href": "https://pranav-labreport.sites.tab.bot/"
    }
  ],
  "card": {
    "thumb": "/work/img/labreport-urgent.webp"
  },
  "proof": "I can design a consumer AI product where the safety rule comes before the model.",
  "proofStat": {
    "value": "3",
    "label": "languages: English, Hindi, Telugu"
  },
  "tiles": [
    {
      "value": "3",
      "label": "languages: English, Hindi, Telugu"
    },
    {
      "value": "100%",
      "label": "urgent-value recall needed to ship"
    },
    {
      "value": "0",
      "label": "diagnoses, medicines or doses suggested"
    }
  ],
  "label": "How I would build it. Not something I shipped. The prototype runs on a mock report and scripted AI answers. Not medical advice.",
  "glance": {
    "problem": "A parent's report lands on the family WhatsApp at night. Nobody can tell if it can wait till the doctor visit.",
    "users": "The adult child, 25 to 40, often in another city, who is expected to “check properly”.",
    "role": "Solo: research plan, product design, safety rules, metrics and a clickable prototype.",
    "outcome": "A working prototype in English, Hindi and Telugu, and a full write-up. Self-initiated, not shipped."
  },
  "solution": {
    "summary": "The first question the app answers is “can this wait till Saturday?”, with a rule, not a model.",
    "steps": [
      "Upload",
      "Consent",
      "Urgent check",
      "Summary by group",
      "Doctor questions"
    ],
    "decisions": [
      {
        "decision": "The urgent list is a table, not AI",
        "why": "Recall has to be 100% and checkable. The AI can't talk anyone out of it."
      },
      {
        "decision": "Ranges only from the report",
        "why": "Labs differ. If no range is printed, I show the value and say so."
      },
      {
        "decision": "Questions, not advice",
        "why": "Diet and medicine tips are where explaining turns into treating.",
        "rejected": "“What you can do” tips per result"
      },
      {
        "decision": "No scores, no “health age”",
        "why": "A score is a diagnosis in disguise.",
        "rejected": "A single health score"
      }
    ]
  },
  "wireframes": {
    "title": "Screens",
    "screens": [
      {
        "src": "/work/img/labreport-urgent.webp",
        "caption": "From the prototype: potassium 6.6 means “contact a doctor today”, with no summary behind it."
      },
      {
        "src": "/work/img/labreport-telugu.webp",
        "caption": "From the prototype: the same report summarised in Telugu."
      },
      {
        "src": "/projects/blood-test-report-explainer/3-summary.svg",
        "caption": "Every range says which page it came from."
      },
      {
        "src": "/projects/blood-test-report-explainer/4-questions.svg",
        "caption": "Off-limits questions become doctor questions."
      }
    ],
    "caption": "Two screens from the clickable prototype (mock report) and two flat wireframes with sample data."
  },
  "judgment": {
    "used": "Jobs to be done, a trade-off on who decides what is urgent, a risk list and key stories. In health the worst failure is a missed urgent value, so the risks and the stories spell out exactly how the app behaves when a report is urgent, unclear or out of range.",
    "skipped": "RICE, CIRCLES, HEART, a market size and journey maps. There was no backlog to rank and no live users to measure, and none of them would change a screen."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "jtbd",
        "title": "Jobs the app is hired for",
        "items": [
          {
            "when": "a parent's report lands on the family group",
            "want": "to know if anything is urgent",
            "so": "I can act tonight or relax till Saturday"
          },
          {
            "when": "the doctor visit comes",
            "want": "a short list of questions",
            "so": "nothing important is forgotten"
          },
          {
            "when": "Amma asks “is it bad?”",
            "want": "a summary in Telugu I can forward",
            "so": "the family is calm and informed"
          }
        ]
      },
      {
        "kind": "tradeoff",
        "title": "How to decide what is urgent",
        "criteria": [
          {
            "name": "Never misses",
            "weight": 5
          },
          {
            "name": "Can be audited",
            "weight": 4
          },
          {
            "name": "Covers rare cases",
            "weight": 2
          },
          {
            "name": "Cost to run",
            "weight": 1
          }
        ],
        "options": [
          {
            "name": "Fixed list owned by doctors",
            "scores": [
              5,
              5,
              3,
              5
            ],
            "chosen": true
          },
          {
            "name": "AI decides",
            "scores": [
              3,
              1,
              4,
              3
            ]
          },
          {
            "name": "List plus AI second check",
            "scores": [
              5,
              4,
              4,
              3
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. The list wins because recall has to be 100% and checkable."
      },
      {
        "kind": "acceptance",
        "title": "Key stories",
        "stories": [
          {
            "story": "Urgent value",
            "given": "a report with potassium 6.6 mmol/L",
            "when": "it is uploaded",
            "then": "only the “contact a doctor today” screen shows, with no summary"
          },
          {
            "story": "Missing range",
            "given": "a value with no range printed",
            "when": "the summary is built",
            "then": "the value shows with “no range on the report”, and no range is filled in"
          },
          {
            "story": "Unreadable value",
            "given": "a smudged creatinine line",
            "when": "the report is read",
            "then": "it is listed as “couldn't read”, and the report is never called all clear"
          },
          {
            "story": "Medicine question",
            "given": "the user asks “should he start a medicine?”",
            "when": "the AI answers",
            "then": "it declines and adds the question to the doctor list"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "Misread value or made-up range",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Per-field confidence, page reference on every range, arithmetic not AI"
          },
          {
            "risk": "Missing an urgent value",
            "likelihood": "low",
            "impact": "high",
            "mitigation": "Fixed list, runs first; an unreadable urgent test blocks “all clear”"
          },
          {
            "risk": "Read as a diagnosis",
            "likelihood": "high",
            "impact": "high",
            "mitigation": "No scores, no advice, every path ends with a doctor"
          },
          {
            "risk": "Treated as a medical device",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Stay on the information side; regulatory advice before launch"
          },
          {
            "risk": "Labs give a version away free",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Compete on cross-lab and caregiver-first, or sell to insurers"
          }
        ]
      }
    ]
  },
  "flow": {
    "title": "From upload to the doctor visit",
    "nodes": [
      {
        "label": "Upload the report (PDF or photo)",
        "kind": "start"
      },
      {
        "label": "Whose report? Does the parent know?",
        "kind": "step"
      },
      {
        "label": "Any value on the urgent list?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Stop. “Contact a doctor today.” No summary."
        }
      },
      {
        "label": "Read every value, unit and printed range",
        "kind": "step"
      },
      {
        "label": "Can the value be read clearly?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Show “couldn't read”. Never guess."
        }
      },
      {
        "label": "Plain-words summary by group",
        "kind": "step"
      },
      {
        "label": "Questions for the doctor + family summary",
        "kind": "end"
      }
    ],
    "caption": "The urgent check is a rule, not AI. It runs before anything is explained."
  },
  "metrics": {
    "northStar": "Uploads that end with the doctor question list saved or shared",
    "rows": [
      {
        "name": "Question list saved or shared",
        "target": "45% (est.)",
        "how": "Share or save events per upload"
      },
      {
        "name": "Doctor contact within 7 days",
        "target": "30% (est.)",
        "how": "Share-to-doctor or booking taps, for reports with an out-of-range value"
      }
    ],
    "tests": [
      "Urgent-value recall: 100% on a labelled set of real-format reports, or it doesn't ship",
      "Ranges shown that aren't on the report: zero",
      "Medicine or dose suggestions on a red-team prompt set: zero",
      "Unclear fields shown as “couldn't read”: 100%"
    ],
    "note": "Every target is my estimate for a first launch, not a benchmark."
  },
  "next": {
    "items": [
      "Test the urgent list and the reading step on 200 real-format reports from 5 labs",
      "Get the urgent and refusal screens reviewed by doctors who speak Hindi and Telugu",
      "Run 10 sessions with adult children reading a parent's report"
    ]
  }
};

export default project;
