// About the project: Why I'd make Paytm's home screen scan-first
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "paytm-scan-first-home",
  "group": "teardowns",
  "order": 3,
  "title": "Why I'd make Paytm's home screen scan-first",
  "oneLine": "Most people open Paytm to pay. I'd remove the ad on launch, the ad beside the scanner and the loan offers everyone sees, and put the scanner first.",
  "tag": "Paytm",
  "tags": [
    "Teardown",
    "Payments",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_KillDoc_PaytmHome.pdf"
    }
  ],
  "card": {
    "thumb": "/work/img/paytm-before-after.webp"
  },
  "tiles": [
    {
      "value": "3×",
      "label": "more reviews about slowness than about ads"
    }
  ],
  "glance": {
    "problem": "Most people open Paytm to pay, but ads and loan offers come first.",
    "users": "People who open Paytm to scan and pay.",
    "role": "Solo: teardown memo with a recommendation.",
    "outcome": "A 2-page memo. Practice exercise; I don't work at Paytm."
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
        "src": "/work/img/paytm-before-after.webp",
        "alt": "Mock layouts: today's Paytm home vs a scan-first home"
      }
    ],
    "stat": "Reviews complain about slowness over 3 times as often as about ads."
  }
};

export default project;
