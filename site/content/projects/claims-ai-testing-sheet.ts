// About the project: How I'd test a claims AI before launch
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
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
  "tiles": [
    {
      "value": "50",
      "label": "tough test messages"
    },
    {
      "value": "62% → 90%",
      "label": "tests passed (sample data)"
    },
    {
      "value": "3",
      "label": "high-risk tests still failing"
    }
  ],
  "glance": {
    "problem": "A claims chatbot that promises a payout or mishandles an angry customer can do real harm.",
    "users": "The product and risk team deciding whether a claims AI is safe to launch.",
    "role": "Solo: wrote the 50 test cases, pass/fail rules and launch bar.",
    "outcome": "A testing spreadsheet and a short PDF. Results are sample data."
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
    "note": "Sample results I wrote to show the method, not a real AI run."
  }
};

export default project;
