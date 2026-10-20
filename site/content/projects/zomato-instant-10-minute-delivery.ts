// About the project: Should Zomato have shut its 10-minute food delivery? (2023)
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "zomato-instant-10-minute-delivery",
  "group": "teardowns",
  "order": 4,
  "title": "Should Zomato have shut its 10-minute food delivery? (2023)",
  "oneLine": "My call: don't shut it yet. Drop the 10-minute promise, run one 8-week test near offices and colleges, and close it if it misses the target.",
  "tag": "Zomato · written as of January 2023",
  "tags": [
    "Teardown",
    "Food delivery",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_KillDoc_ZomatoInstant.pdf"
    }
  ],
  "tiles": [
    {
      "value": "8 weeks",
      "label": "one focused test before deciding"
    }
  ],
  "glance": {
    "problem": "Zomato's 10-minute food delivery was costly. Should it shut? (written as of January 2023)",
    "users": "Zomato's leadership, deciding whether to keep or close the service.",
    "role": "Solo: decision memo.",
    "outcome": "A memo: don't shut it yet; run one 8-week test, then decide."
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
  }
};

export default project;
