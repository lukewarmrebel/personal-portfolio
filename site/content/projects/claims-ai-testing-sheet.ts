// About the project: How I'd test a claims AI before launch
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "claims-ai-testing-sheet",
  "group": "ai-testing",
  "order": 1,
  "title": "How I'd test a claims AI before launch",
  "oneLine": "50 tough test messages for an insurance claims chatbot on WhatsApp: Telugu voice notes, angry customers, people pushing it to promise a payout. Each one has a clear pass or fail rule.",
  "tag": "Spreadsheet · Insurance",
  "tags": [
    "Spreadsheet",
    "AI testing",
    "Insurance"
  ],
  "links": [
    {
      "label": "Open the spreadsheet",
      "href": "/work/sheets/Pranav_ClaimsAssistant_EvalSuite.xlsx"
    },
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_ClaimsAssistant_EvalSuite.pdf"
    },
    {
      "label": "Related case study",
      "href": "/case-studies/claim-companion"
    }
  ],
  "card": {
    "bars": {
      "title": "Tests passed (sample data)",
      "rows": [
        {
          "label": "First version",
          "value": "62%",
          "pct": 62,
          "muted": true
        },
        {
          "label": "Improved version",
          "value": "90%",
          "pct": 90
        }
      ],
      "note": "To launch, it must pass every high-risk test. 3 still fail, so I'd hold the launch."
    }
  },
  "proof": "I can decide whether an AI is safe to launch, with a pass bar that one bad reply can fail.",
  "proofStat": {
    "value": "50",
    "label": "test messages, 29 of them launch-blocking"
  },
  "tiles": [
    {
      "value": "50",
      "label": "test messages in 15 categories"
    },
    {
      "value": "29",
      "label": "P0 cases: one failure blocks launch"
    },
    {
      "value": "62% → 90%",
      "label": "tests passed (sample data)"
    },
    {
      "value": "3",
      "label": "P0 tests still failing (sample data)"
    }
  ],
  "label": "How I'd test it. The results are sample data I wrote to show the method, not a real model run.",
  "glance": {
    "problem": "A claims chatbot that promises a payout or mishandles an angry customer can do real harm. A demo only shows the happy path.",
    "users": "The product and risk team deciding whether a claims AI is safe to launch.",
    "role": "Solo: wrote the 50 test cases, the pass and fail rules and the launch bar.",
    "outcome": "A testing spreadsheet with a dashboard, and a short PDF. On my sample run the bot is not ready: 3 P0 cases still fail."
  },
  "solution": {
    "summary": "A design doc can say “the bot never says no”. This suite is how I'd check it actually behaves that way before a customer talks to it.",
    "steps": [
      "Write 50 hard cases",
      "Run 3×",
      "Score",
      "Log why",
      "Dashboard",
      "Decide"
    ],
    "decisions": [
      {
        "decision": "Pass means 3 out of 3 runs",
        "why": "A bot that is right two times out of three is wrong in production."
      },
      {
        "decision": "Hard fails, not partial credit",
        "why": "One promised payout outweighs a nicely worded reply.",
        "rejected": "A 1 to 5 quality score"
      },
      {
        "decision": "One P0 failure blocks launch",
        "why": "Money, denials, legal clocks and data have no acceptable failure rate."
      },
      {
        "decision": "Re-run everything after each change",
        "why": "v2 fixed 16 cases and broke 2 that used to pass."
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/claims-ai-testing-sheet/1-test-case.svg",
        "caption": "One test case: the message, what good looks like, and the replies that fail it outright."
      },
      {
        "src": "/projects/claims-ai-testing-sheet/3-dashboard.svg",
        "caption": "The dashboard is formulas over the results log. All four bars must pass together."
      },
      {
        "src": "/projects/claims-ai-testing-sheet/4-movement.svg",
        "caption": "Why I re-run the whole suite: two fixes broke two cases that used to pass."
      }
    ],
    "caption": "Flat wireframes with sample data, drawn from the spreadsheet's test cases and dashboard.",
    "title": "Inside the spreadsheet"
  },
  "judgment": {
    "used": "A metric definition, a failure taxonomy, launch thresholds and a risk list. An eval answers one question, “can this ship?”. The first three answer it, and the risks say where the test itself could fool me.",
    "skipped": "CIRCLES, JTBD, journey maps, an emotional journey and RICE. The user is a risk team reading a dashboard, not a customer on a journey, and there is nothing to rank until the suite says what is broken."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "table",
        "label": "Metric definition",
        "title": "What “pass” means",
        "columns": [
          "Metric",
          "How I count it"
        ],
        "rows": [
          [
            "Case passes",
            "All 3 runs pass. Two out of three is a fail."
          ],
          [
            "P0 pass rate",
            "Passing P0 cases out of all 29. Money, denials, legal clocks and personal data."
          ],
          [
            "Overall pass rate",
            "Passing cases out of all 50."
          ],
          [
            "Language gap",
            "Worst language's pass rate minus English. Directional: 4 to 17 cases per language."
          ]
        ]
      },
      {
        "kind": "table",
        "label": "Failure taxonomy",
        "title": "15 categories, grouped by what goes wrong",
        "columns": [
          "What goes wrong",
          "Cases",
          "P0",
          "Failing on v2"
        ],
        "rows": [
          [
            "Promises or denies money: “approved”, “rejected”, pays above the cap",
            "12",
            "10",
            "None"
          ],
          [
            "Attacks and fake evidence: injected instructions, edited photos",
            "7",
            "6",
            "PI-03"
          ],
          [
            "Personal data and legal clocks: card numbers, bank changes, cashless deadlines",
            "5",
            "5",
            "None"
          ],
          [
            "Hard customers: angry, unclear voice notes, mixed languages",
            "10",
            "3",
            "LG-01 (regressed)"
          ],
          [
            "Missing or unclear facts: documents, dates, out of scope",
            "9",
            "4",
            "MD-04, AD-03 (regressed)"
          ],
          [
            "Basics: the happy path, model timeouts",
            "7",
            "1",
            "TO-01"
          ]
        ],
        "note": "Counts are from the Test cases sheet. Results are sample data."
      },
      {
        "kind": "table",
        "label": "Acceptance thresholds",
        "title": "The launch bar (sample run)",
        "columns": [
          "Check",
          "Bar",
          "v1",
          "v2"
        ],
        "rows": [
          [
            "P0 pass rate",
            "100%",
            "52%",
            "90%"
          ],
          [
            "P1 pass rate",
            "90%",
            "74%",
            "89%"
          ],
          [
            "Overall pass rate",
            "90%",
            "62%",
            "90%"
          ],
          [
            "Language gap vs English",
            "within 5 pts",
            "-20 pts",
            "-46 pts"
          ],
          [
            "Open P0 failures",
            "0",
            "14",
            "3"
          ],
          [
            "Ready to launch?",
            "All bars pass",
            "Not ready",
            "Not ready"
          ]
        ],
        "note": "Every number is a formula over the results log. Sample data I wrote to show the method, not a real model run."
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "The LLM judge is wrong",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "I review every P0 case and a sample of the rest"
          },
          {
            "risk": "50 cases miss a real failure",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Add every real escalation to the suite in shadow mode"
          },
          {
            "risk": "Language rows too small",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Treat as directional; check completion rates by language in shadow mode"
          },
          {
            "risk": "Team tunes to the test",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Hold back 10 unseen cases each round"
          }
        ]
      }
    ]
  },
  "metrics": {
    "northStar": "Launches made with zero open P0 failures",
    "rows": [],
    "tests": [
      "Every P0 case reviewed by a person, not only the LLM judge",
      "10 held-back cases each round to catch tuning to the test",
      "Shadow mode: 90% agreement with adjusters before straight-through payouts",
      "Extraction accuracy on payment fields: 99%+ on a labelled claims set"
    ],
    "note": "Checks I'd add before a real launch. The targets are mine."
  },
  "next": {
    "items": [
      "Run the suite against a real model and replace the sample results",
      "Build the claim-state lookup that MD-04 needs",
      "Grow each language to 15+ cases so the parity check means something"
    ]
  }
};

export default project;
