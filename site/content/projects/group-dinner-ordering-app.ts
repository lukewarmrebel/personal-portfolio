// About the project: Group dinner ordering app (prototype)
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "group-dinner-ordering-app",
  "group": "prototypes",
  "order": 2,
  "title": "Group dinner ordering app (prototype)",
  "oneLine": "Friends tap what they can eat and spend. The app suggests places that suit everyone and splits the bill into UPI payment links.",
  "tag": "Food delivery · India and US",
  "tags": [
    "Prototype",
    "Food delivery",
    "India + US"
  ],
  "links": [
    {
      "label": "About the project",
      "href": "https://pranav-dinnerfor6.sites.tab.bot/"
    },
    {
      "label": "Try the prototype",
      "href": "https://pranav-dinnerfor6.sites.tab.bot/prototype/"
    }
  ],
  "card": {
    "thumb": "/work/img/dinner-hardnight.webp"
  },
  "tiles": [
    {
      "value": "6",
      "label": "friends in the sample group"
    },
    {
      "value": "1 tap",
      "label": "to split the bill into UPI links"
    }
  ],
  "glance": {
    "problem": "Picking a place for a group dinner means long chats about diets, budgets and who pays.",
    "users": "Groups of friends ordering or eating out together, in India and the US.",
    "role": "Solo: product idea, flows, prototype and write-up.",
    "outcome": "A clickable prototype with sample data. Not shipped."
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
        "src": "/work/img/dinner-hardnight.webp",
        "alt": "Prototype screen: hard night, nothing fits everyone"
      },
      {
        "src": "/work/img/dinner-split.webp",
        "alt": "Prototype screen: the bill split"
      }
    ]
  }
};

export default project;
