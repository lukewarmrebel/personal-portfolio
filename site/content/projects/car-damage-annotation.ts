// About the project: Car damage labelling tool
// Project page. Built from the site's bullets and the live app. How I approached it; illustrative numbers are sample data or est.
// Schema: src/lib/projectSchema.ts
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
  "glance": {
    "problem": "Training a car damage model needs many labelled photos, and labelling by hand is slow.",
    "users": "Teams building damage-detection models for motor insurance.",
    "role": "Solo: designed and built the tool.",
    "outcome": "A live web app."
  },
  "problem": {
    "persona": {
      "name": "Rahul, data lead for a motor AI model",
      "who": "Builds a car damage model for an insurer's claims team (illustrative persona)",
      "context": "His model needs thousands of car photos with damage marked. His team labels them by hand in clunky tools, and it's the slowest part of the project.",
      "needs": [
        "Mark damage quickly with simple tools",
        "Let AI do a first pass",
        "Move through hundreds of photos fast",
        "Export in one file for training"
      ],
      "frustrations": [
        "Hours of clicking per batch",
        "Heavy tools built for other jobs",
        "AI labels he can't check",
        "Messy exports that need cleanup"
      ]
    },
    "jtbd": "When I get a new batch of claim photos, I want damage marked fast and checked by a person, so my model trains on labels I can trust."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "Framing the problem with CIRCLES",
        "steps": {
          "comprehend": "A damage model is only as good as its labelled photos, and labelling is slow.",
          "identify": "Labellers and the data lead who owns the model.",
          "report": "Simple drawing tools, an AI first pass, fast navigation, clean export.",
          "cut": "Speed per photo matters most. AI pre-labels give the biggest jump.",
          "list": "Box, circle and text tools; AI analyse; batch mode; shortcuts; ZIP export.",
          "evaluate": "Full auto-labelling is fastest but noisy; AI plus a human check is the balance.",
          "summarise": "A browser tool where AI suggests and a person confirms, then exports."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "Research plan (no interviews done yet)",
        "methods": [
          {
            "method": "Time study",
            "who": "Labellers on a real batch",
            "howMany": "4",
            "how": "Time per photo, by hand vs with AI first"
          },
          {
            "method": "Interviews",
            "who": "Data leads on vision models",
            "howMany": "5",
            "how": "What makes a label set trustworthy?"
          },
          {
            "method": "Label audit",
            "who": "A senior reviewer",
            "howMany": "200 photos",
            "how": "Check AI-suggested boxes for errors"
          }
        ],
        "findings": [
          {
            "insight": "Labelling is the slowest step",
            "evidence": "From my work on AI vehicle inspection",
            "group": "Speed"
          },
          {
            "insight": "AI pre-labels cut time",
            "evidence": "Hypothesis to test in the time study",
            "group": "Speed"
          },
          {
            "insight": "Unchecked AI labels add noise",
            "evidence": "Hypothesis to test in the label audit",
            "group": "Quality"
          }
        ],
        "questions": [
          "How long does one photo take you today?",
          "Which damage types are hardest to mark?",
          "When would you accept an AI box without checking?",
          "What format does your training code need?"
        ],
        "note": "A plan with hypotheses, not findings."
      },
      {
        "kind": "market",
        "title": "Where the tool fits",
        "funnel": [
          {
            "level": "TAM",
            "label": "Teams labelling images for AI",
            "value": "est.",
            "assumption": "Every vision model needs labelled data"
          },
          {
            "level": "SAM",
            "label": "Motor insurers and garages building damage models",
            "assumption": "Damage inspection is a common insurance AI use"
          },
          {
            "level": "SOM",
            "label": "In-house claims AI teams in India, year 1",
            "assumption": "Reached through insurer innovation teams"
          }
        ],
        "positioning": {
          "x": [
            "General purpose",
            "Built for car damage"
          ],
          "y": [
            "Manual only",
            "AI first pass"
          ],
          "points": [
            {
              "name": "Free labeling tools",
              "x": 0.15,
              "y": 0.25
            },
            {
              "name": "Enterprise label platforms",
              "x": 0.25,
              "y": 0.75
            },
            {
              "name": "Spreadsheets and paint tools",
              "x": 0.4,
              "y": 0.1
            },
            {
              "name": "My tool",
              "x": 0.85,
              "y": 0.8,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Box and circle",
            "AI first pass",
            "Batch mode",
            "Keyboard keys",
            "One-file export"
          ],
          "rows": [
            {
              "name": "Free labeling tools",
              "values": [
                "yes",
                "partial",
                "yes",
                "yes",
                "yes"
              ]
            },
            {
              "name": "Enterprise label platforms",
              "values": [
                "yes",
                "yes",
                "yes",
                "yes",
                "yes"
              ]
            },
            {
              "name": "Paint tools",
              "values": [
                "partial",
                "no",
                "no",
                "no",
                "no"
              ]
            },
            {
              "name": "My tool",
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
            "value": "AI inspection",
            "label": "Insurers use photos to inspect cars remotely"
          },
          {
            "value": "Pre-labels",
            "label": "Models now label first, people check"
          },
          {
            "value": "Small data",
            "label": "Good labels beat more labels"
          }
        ],
        "note": "Categories, not named products. My edge is focus and speed, not features. Sizes are directional (est.)."
      },
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
        "kind": "journey",
        "title": "Labelling a batch today",
        "stages": [
          {
            "stage": "Collect",
            "doing": "Gathers claim photos",
            "feeling": "okay",
            "pain": "Files scattered across folders",
            "opportunity": "Drag in many at once"
          },
          {
            "stage": "Label",
            "doing": "Draws boxes photo by photo",
            "feeling": "bad",
            "pain": "Slow and repetitive",
            "opportunity": "AI first pass"
          },
          {
            "stage": "Check",
            "doing": "Reviews another's labels",
            "feeling": "bad",
            "pain": "Hard to spot errors",
            "opportunity": "Flag low-confidence boxes"
          },
          {
            "stage": "Export",
            "doing": "Converts to training format",
            "feeling": "okay",
            "pain": "Manual cleanup",
            "opportunity": "One-click ZIP"
          },
          {
            "stage": "Train",
            "doing": "Runs the model",
            "feeling": "good",
            "pain": "Bad labels show up late",
            "opportunity": "Show how many were checked"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How a labeller feels across a batch",
        "steps": [
          {
            "step": "Upload",
            "feeling": 0,
            "note": "Big pile"
          },
          {
            "step": "AI analyse",
            "feeling": 2,
            "note": "Half done already"
          },
          {
            "step": "Wrong box",
            "feeling": -1,
            "note": "AI missed a dent"
          },
          {
            "step": "Fix with keys",
            "feeling": 1,
            "note": "Two seconds"
          },
          {
            "step": "Export",
            "feeling": 2,
            "note": "Batch done"
          }
        ],
        "note": "A wrong AI box is the dip. Fast fixing keeps it small."
      },
      {
        "kind": "rice",
        "title": "What to build first (sample scores, est.)",
        "rows": [
          {
            "item": "Box and circle tools",
            "reach": 10,
            "impact": 2,
            "confidence": 0.9,
            "effort": 1
          },
          {
            "item": "AI analyse (one photo)",
            "reach": 9,
            "impact": 3,
            "confidence": 0.7,
            "effort": 3
          },
          {
            "item": "Batch AI analyse",
            "reach": 7,
            "impact": 3,
            "confidence": 0.6,
            "effort": 2
          },
          {
            "item": "Keyboard shortcuts",
            "reach": 8,
            "impact": 1,
            "confidence": 0.8,
            "effort": 1
          },
          {
            "item": "ZIP export",
            "reach": 10,
            "impact": 2,
            "confidence": 0.9,
            "effort": 1
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in days. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "Scope",
        "must": [
          "Box, circle and text tools",
          "AI analyse per photo",
          "ZIP export"
        ],
        "should": [
          "Batch AI analyse",
          "Keyboard shortcuts",
          "Colour and thickness"
        ],
        "could": [
          "Damage type list",
          "Confidence filter"
        ],
        "wont": [
          "Model training inside the tool",
          "Team accounts"
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
      },
      {
        "kind": "acceptance",
        "title": "Acceptance criteria",
        "stories": [
          {
            "story": "Draw a label",
            "given": "a photo is open",
            "when": "I press B and drag",
            "then": "a box appears with my chosen colour and thickness"
          },
          {
            "story": "AI first pass",
            "given": "a photo with visible damage",
            "when": "I tap AI analyse",
            "then": "damage areas appear as boxes I can keep, move or delete"
          },
          {
            "story": "Batch",
            "given": "24 uploaded photos",
            "when": "I run batch analyse",
            "then": "every photo gets AI boxes and a progress count"
          },
          {
            "story": "Export",
            "given": "a labelled batch",
            "when": "I tap download",
            "then": "I get one ZIP with every annotated photo"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "Metric tree (targets are est.)",
        "northStar": {
          "name": "Checked, labelled photos per hour",
          "detail": "Labels a person has confirmed",
          "target": "est. 3x manual"
        },
        "inputs": [
          {
            "name": "AI boxes kept",
            "detail": "Accepted without edits",
            "target": "est. 70%"
          },
          {
            "name": "Seconds per photo",
            "detail": "Open to save",
            "target": "est. < 15 s"
          },
          {
            "name": "Batch completion",
            "detail": "Batches exported",
            "target": "est. 90%"
          },
          {
            "name": "Shortcut use",
            "detail": "Actions by keyboard",
            "target": "est. 50%"
          }
        ],
        "guardrails": [
          {
            "name": "Label error rate in audit",
            "target": "est. < 5%"
          },
          {
            "name": "Missed damage",
            "target": "est. < 3%"
          }
        ],
        "note": "Targets are est. The live app doesn't track usage."
      },
      {
        "kind": "heart",
        "title": "HEART for the labelling tool (illustrative)",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Labellers find it quick",
            "signal": "Rating after a batch",
            "metric": "Average rating out of 5"
          },
          {
            "dimension": "Engagement",
            "goal": "AI help is used",
            "signal": "AI analyse clicks",
            "metric": "% photos with AI first pass"
          },
          {
            "dimension": "Adoption",
            "goal": "First batch done",
            "signal": "First export",
            "metric": "% of uploads that reach export"
          },
          {
            "dimension": "Retention",
            "goal": "Used for every batch",
            "signal": "Repeat batches",
            "metric": "Batches per team per month"
          },
          {
            "dimension": "Task success",
            "goal": "Accurate labels",
            "signal": "Audit result",
            "metric": "% of boxes correct in audit"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "AI boxes accepted without a look",
            "likelihood": "high",
            "impact": "high",
            "mitigation": "Low-confidence boxes need a click to accept"
          },
          {
            "risk": "Bad lighting confuses the AI",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Show confidence and allow quick delete"
          },
          {
            "risk": "Export format doesn't fit training code",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Add common label formats next"
          },
          {
            "risk": "Customer photos show number plates",
            "likelihood": "medium",
            "impact": "high",
            "mitigation": "Blur plates on export"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Now, next, later",
        "now": [
          "Drawing tools",
          "AI analyse and batch",
          "Keyboard shortcuts",
          "ZIP export"
        ],
        "next": [
          "Damage type labels",
          "Confidence filter",
          "Standard label formats"
        ],
        "later": [
          "Plate blurring",
          "Reviewer mode",
          "Model accuracy report per batch"
        ]
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
      },
      {
        "src": "/projects/car-damage-annotation/4-export.svg",
        "caption": "Export one ZIP"
      }
    ],
    "caption": "My wireframes of the main screens, drawn for a phone. The real tool runs in a desktop browser. Counts are sample data."
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
      },
      {
        "name": "Label accuracy",
        "target": "est. 95%",
        "how": "Audit of 200 photos by a senior reviewer"
      }
    ],
    "tests": [
      "Time study: 50 photos by hand vs with AI first",
      "Audit: 200 photos checked for wrong or missing boxes",
      "Export test: the ZIP loads in a training script with no cleanup"
    ],
    "note": "The tool is live; these targets are est. and untested."
  },
  "next": {
    "items": [
      "Add damage-type labels (dent, scratch, crack)",
      "Export in standard label formats",
      "Blur number plates before export"
    ]
  },
  "label": "How I approached it. A live app I built; counts and targets on this page are sample data or est.",
  "extra": {
    "images": [
      {
        "src": "/cardamage/01_tool.png",
        "alt": "Car damage labelling tool: screen 1"
      }
    ],
    "highlights": [
      "Canvas annotation: bounding box, circle, text tools with colour and thickness controls",
      "AI Analyze mode: one-click automatic damage region detection via backend inference",
      "Batch auto-analyze across all uploaded images with keyboard-shortcut navigation",
      "ZIP export with all annotated images for ML dataset creation"
    ],
    "skills": [
      "Computer Vision",
      "Canvas API",
      "Python",
      "AI Integration",
      "ML Data Pipeline",
      "Annotation Tooling"
    ],
    "paragraphs": [
      "I built a browser-based canvas tool for marking vehicle damage. You can draw boxes, circles and text labels by hand, or tap AI Analyze to find damage regions automatically. Batch mode analyzes every uploaded image. You export the marked set as a ZIP to train ML models later."
    ]
  }
};

export default project;
