// About the project: Car damage labelling tool
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "car-damage-annotation",
  "group": "earlier",
  "order": 5,
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
      "Browser-based canvas annotation tool for vehicle damage assessment. Draw bounding boxes, circles, and text labels manually — or hit AI Analyze for automatic damage region detection. Batch mode auto-analyzes all uploaded images. Export annotated sets as ZIP for downstream ML training pipelines."
    ]
  }
};

export default project;
