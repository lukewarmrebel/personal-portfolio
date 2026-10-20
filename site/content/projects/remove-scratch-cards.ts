// About the project: Why I'd remove scratch cards from payment apps
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "remove-scratch-cards",
  "group": "teardowns",
  "order": 1,
  "title": "Why I'd remove scratch cards from payment apps",
  "oneLine": "Random scratch cards mostly say “Better luck next time”. I'd replace them with a weekly choice of 3 real rewards from shops you already pay.",
  "tag": "GPay, Paytm, CRED",
  "tags": [
    "Teardown",
    "Payments",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_KillDoc_ScratchCards.pdf"
    }
  ],
  "card": {
    "thumb": "/work/img/scratch-before-after.webp"
  },
  "tiles": [
    {
      "value": "2 in 3",
      "label": "GPay reward reviews give 1 or 2 stars"
    }
  ],
  "glance": {
    "problem": "Random scratch cards in payment apps mostly say “Better luck next time” and annoy users.",
    "users": "People who pay with GPay, Paytm or CRED.",
    "role": "Solo: teardown memo with a recommendation.",
    "outcome": "A 2-page memo. Practice exercise; I don't work at these companies."
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
        "src": "/work/img/scratch-before-after.webp",
        "alt": "Wireframe: today's scratch card vs pick your reward"
      }
    ],
    "stat": "2 in 3 GPay reviews that mention rewards give 1 or 2 stars."
  }
};

export default project;
