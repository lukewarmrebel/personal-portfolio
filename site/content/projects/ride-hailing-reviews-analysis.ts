// About the project: What 80,000 ride-hailing reviews complain about
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "ride-hailing-reviews-analysis",
  "group": "data",
  "order": 1,
  "title": "What 80,000 ride-hailing reviews complain about",
  "oneLine": "I pulled three months of English Play Store reviews (July to October 2026) and sorted the complaints by theme. The biggest one: paying more than the fare the app showed.",
  "tag": "Uber, Ola, Rapido · India",
  "tags": [
    "Data analysis",
    "Mobility",
    "India"
  ],
  "links": [
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_RideHailing_ReviewAnalysis.pdf"
    },
    {
      "label": "Open the spreadsheet",
      "href": "/work/sheets/Pranav_RideHailing_ReviewAnalysis.xlsx"
    },
    {
      "label": "See the code",
      "href": "/work/code/Pranav_RideHailing_ReviewAnalysis.py"
    }
  ],
  "card": {
    "thumb": "/work/img/ride-complaints-chart.webp"
  },
  "tiles": [
    {
      "value": "80,000",
      "label": "Play Store reviews"
    },
    {
      "value": "3",
      "label": "apps compared"
    },
    {
      "value": "1 in 7",
      "label": "Ola reviews about the fare not matching"
    }
  ],
  "glance": {
    "problem": "Ride-hailing apps get thousands of reviews a week, and it is hard to see which complaints matter most.",
    "users": "Product teams at Uber, Ola and Rapido in India.",
    "role": "Solo: collected the reviews, sorted complaints by theme, wrote it up.",
    "outcome": "A PDF, a spreadsheet and the code, all on real public reviews."
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
        "src": "/work/img/ride-complaints-chart.webp",
        "alt": "Chart: complaint themes by app"
      }
    ],
    "stat": "Ola: 1 in 7 reviews are about the fare not matching the app."
  }
};

export default project;
