// About the project: What an AI shopping assistant costs per order
// Sections marked todo: true are hidden on the page. Fill one in and delete its todo flag to show it.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "ai-shopping-assistant-cost-model",
  "group": "ai-testing",
  "order": 2,
  "title": "What an AI shopping assistant costs per order",
  "oneLine": "I matched each type of grocery request to the cheapest AI model that can handle it. Simple requests go to small models. Only meal plans and allergy questions use the most expensive one.",
  "tag": "Spreadsheet · Grocery delivery",
  "tags": [
    "Spreadsheet",
    "AI cost",
    "Grocery delivery"
  ],
  "links": [
    {
      "label": "Open the spreadsheet",
      "href": "/work/sheets/Pranav_TheUsual_ModelRouting_CostModel.xlsx"
    },
    {
      "label": "Read (PDF)",
      "href": "/work/pdf/Pranav_TheUsual_ModelRouting_CostModel.pdf"
    },
    {
      "label": "Related case study",
      "href": "/case-studies/the-usual"
    }
  ],
  "card": {
    "bars": {
      "title": "AI cost per order in India (estimate)",
      "rows": [
        {
          "label": "Most expensive model for everything",
          "value": "₹1.50",
          "pct": 100,
          "muted": true
        },
        {
          "label": "Right-sized model per request",
          "value": "₹0.49",
          "pct": 33
        }
      ],
      "note": "About two-thirds cheaper, and under my budget of ₹1 per order."
    }
  },
  "tiles": [
    {
      "value": "₹1.50 → ₹0.49",
      "label": "AI cost per order (est.)"
    },
    {
      "value": "₹1",
      "label": "my budget per order"
    }
  ],
  "glance": {
    "problem": "Using the most expensive AI model for every grocery request makes each order cost too much.",
    "users": "A product team running an AI shopping assistant at grocery-delivery scale.",
    "role": "Solo: matched request types to models and built the cost model.",
    "outcome": "A cost spreadsheet and PDF. Built on published AI prices; figures are estimates."
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
    "note": "Built on published AI prices, not real company data."
  }
};

export default project;
