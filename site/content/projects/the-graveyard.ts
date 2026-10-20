// About the project: The Graveyard: 10 Indian tech products that died, and what I'd have done
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "the-graveyard",
  "group": "side",
  "order": 1,
  "title": "The Graveyard: 10 Indian tech products that died, and what I'd have done",
  "oneLine": "A cemetery of Indian apps and AI features that were shut down, each with why it died and what I would have tried instead.",
  "tag": "Website · India",
  "tags": [
    "Website",
    "Side project",
    "India"
  ],
  "links": [
    {
      "label": "Visit the Graveyard",
      "href": "https://pranav-graveyard.sites.tab.bot/"
    }
  ],
  "tiles": [
    {
      "value": "10",
      "label": "products that died"
    },
    {
      "value": "4",
      "label": "AI products among them"
    }
  ],
  "glance": {
    "problem": "Products die all the time, and the lessons get lost.",
    "users": "Anyone curious about why Indian tech products failed, including recruiters.",
    "role": "Solo: research, writing and the site.",
    "outcome": "A live one-page site with 10 tombstones."
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
    "note": "A portfolio exercise. The opinions are mine; I don't work at these companies.",
    "paragraphs": [
      "Ten Indian tech products and features that were shut down or pulled, from AI assistants to 10-minute food delivery. Each one gets a short epitaph, the cause of death in one line, and what I would have done differently.",
      "You can filter by AI, fintech, food and mobility. A small corner at the end lists features that are still alive but on my watchlist, linked to my teardowns."
    ]
  }
};

export default project;
