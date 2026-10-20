// About the project: Why I'd replace Ola's support chatbot with a fare promise
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "ola-support-fare-promise",
  "group": "teardowns",
  "order": 2,
  "title": "Why I'd replace Ola's support chatbot with a fare promise",
  "oneLine": "Riders with a fare problem can only reach a bot. I'd promise the fare on screen is the fare you pay, let AI approve refunds within a day, and let only a person say no.",
  "tag": "Ola",
  "tags": [
    "Teardown",
    "Mobility",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_KillDoc_OlaAI.pdf"
    }
  ],
  "card": {
    "thumb": "/work/img/ola-before-after.webp"
  },
  "tiles": [
    {
      "value": "2×+",
      "label": "more often than Uber riders, Ola riders say they can't reach support"
    }
  ],
  "glance": {
    "problem": "Ola riders with a fare problem can only reach a bot.",
    "users": "Ola riders who were charged more than the app showed.",
    "role": "Solo: teardown memo with a recommendation.",
    "outcome": "A 2-page memo. Practice exercise; I don't work at Ola."
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
        "src": "/work/img/ola-before-after.webp",
        "alt": "Mock screens: today's help bot vs the proposed fare guarantee"
      }
    ],
    "stat": "Ola riders say they can't reach support over twice as often as Uber riders."
  }
};

export default project;
