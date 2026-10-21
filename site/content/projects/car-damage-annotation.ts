// About the project: Car damage labelling tool
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "car-damage-annotation",
  "group": "prototypes",
  "order": 4,
  "title": "Car damage labelling tool",
  "oneLine": "Mark damage on car photos by hand or with one AI click, then export the labelled photos to train a damage-detection model.",
  "tag": "Web app · Computer vision",
  "tags": [
    "Web app",
    "Computer vision",
    "Insurance"
  ],
  "links": [
    {
      "label": "Try the app",
      "href": "https://car-damage-detection-6b37.onrender.com/"
    }
  ],
  "card": {
    "thumb": "/cardamage/01_tool.png"
  },
  "tiles": [
    {
      "value": "6",
      "label": "labelling tools"
    },
    {
      "value": "1 click",
      "label": "AI damage detection"
    }
  ],
  "label": "How I approached it. A live app I built; counts and targets on this page are sample data or est.",
  "glance": {
    "problem": "Training a car damage model needs many labelled photos, and labelling by hand is slow.",
    "users": "Teams building damage-detection models for motor insurance.",
    "role": "Solo: designed and built the tool.",
    "outcome": "A live web app."
  },
  "judgment": {
    "used": "Jobs to be done and one trade-off on how AI labels are saved. The tool lives or dies on whether a labeller trusts the AI's first guess.",
    "skipped": "A market size, HEART, RICE and an emotional journey. It's a working tool for one job, and speed and label quality cover what matters."
  },
  "solution": {
    "summary": "I built a browser tool for marking damage on car photos. You can draw boxes by hand or let AI mark them first, then export everything as one ZIP to train a model.",
    "steps": [
      "Upload many photos at once",
      "Draw boxes, circles and text with colour and thickness controls",
      "AI analyse marks damage on one photo, or batch mode does all",
      "Move with keyboard shortcuts",
      "Export a ZIP of annotated photos"
    ],
    "decisions": [
      {
        "decision": "Run in the browser",
        "why": "Nothing to install for labellers",
        "rejected": "A desktop app"
      },
      {
        "decision": "AI suggests, person confirms",
        "why": "Keeps most of the speed and keeps labels clean",
        "rejected": "Saving AI boxes as final"
      },
      {
        "decision": "Simple ZIP export",
        "why": "Fastest path to a training run",
        "rejected": "Building model training into the tool"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/car-damage-annotation/1-upload.svg",
        "caption": "Upload a batch of photos"
      },
      {
        "src": "/projects/car-damage-annotation/2-label.svg",
        "caption": "Label with simple tools"
      },
      {
        "src": "/projects/car-damage-annotation/3-ai.svg",
        "caption": "AI first pass, person confirms"
      }
    ],
    "caption": "My wireframes of the main screens, drawn for a phone. The real tool runs in a desktop browser. Counts are sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "jtbd",
        "title": "Jobs to be done",
        "items": [
          {
            "when": "a new batch arrives",
            "want": "AI to mark likely damage first",
            "so": "I only fix what's wrong"
          },
          {
            "when": "I'm labelling hundreds of photos",
            "want": "keyboard keys to move and draw",
            "so": "I never touch the mouse more than I need to"
          },
          {
            "when": "the batch is done",
            "want": "one ZIP with every labelled photo",
            "so": "training starts right away"
          }
        ]
      },
      {
        "kind": "tradeoff",
        "title": "How should AI labels be saved?",
        "criteria": [
          {
            "name": "Label quality",
            "weight": 5
          },
          {
            "name": "Speed",
            "weight": 4
          },
          {
            "name": "Simple to use",
            "weight": 3
          }
        ],
        "options": [
          {
            "name": "Save AI boxes straight away",
            "scores": [
              2,
              5,
              5
            ]
          },
          {
            "name": "AI suggests, person accepts",
            "scores": [
              4,
              4,
              4
            ],
            "chosen": true
          },
          {
            "name": "Manual only",
            "scores": [
              5,
              1,
              4
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. A quick human check keeps most of the speed."
      }
    ]
  },
  "flow": {
    "title": "From photo upload to training data",
    "nodes": [
      {
        "label": "Upload a batch of car photos",
        "kind": "start"
      },
      {
        "label": "Run AI analyse on one or all photos"
      },
      {
        "label": "AI box looks right?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Move, redraw or delete it by hand"
        }
      },
      {
        "label": "Add manual boxes, circles or notes"
      },
      {
        "label": "All photos done?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Arrow key to the next photo"
        }
      },
      {
        "label": "Download one ZIP of labelled photos",
        "kind": "end"
      }
    ],
    "caption": "The AI does a first pass. A person confirms every photo before export."
  },
  "metrics": {
    "northStar": "Checked, labelled photos per hour",
    "rows": [
      {
        "name": "Seconds per photo",
        "target": "est. < 15 s",
        "how": "Time from opening a photo to saving it"
      },
      {
        "name": "AI boxes kept",
        "target": "est. 70%",
        "how": "Share of AI boxes accepted without edits"
      }
    ],
    "tests": [
      "Time study: 50 photos by hand vs with AI first"
    ],
    "note": "The tool is live; these targets are est. and untested."
  },
  "next": {
    "items": [
      "Add damage-type labels (dent, scratch, crack)",
      "Export in standard label formats"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/cardamage/01_tool.png",
        "alt": "Car damage labelling tool: screen 1"
      }
    ],
    "paragraphs": [
      "I built a browser-based canvas tool for marking vehicle damage. You can draw boxes, circles and text labels by hand, or tap AI Analyze to find damage regions automatically. Batch mode analyzes every uploaded image. You export the marked set as a ZIP to train ML models later."
    ]
  }
};

export default project;
