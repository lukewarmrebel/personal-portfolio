// About the project: CareVault: a family health app
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "carevault",
  "group": "prototypes",
  "order": 3,
  "title": "CareVault: a family health app",
  "oneLine": "One app for a family to track medicines, vitals, documents and doctor visits for everyone at home, including parents and kids.",
  "tag": "Mobile app · Flutter",
  "tags": [
    "Mobile app",
    "Health",
    "0 to 1 build",
    "Flutter + Supabase"
  ],
  "links": [],
  "card": {
    "thumb": "/carevault/06_room_home.png"
  },
  "tiles": [
    {
      "value": "21",
      "label": "app screens"
    },
    {
      "value": "8",
      "label": "features"
    },
    {
      "value": "3 weeks",
      "label": "to build"
    },
    {
      "value": "6",
      "label": "character room code to join"
    }
  ],
  "label": "How I approached it. Personas and targets below are illustrative; the app and its features are real.",
  "glance": {
    "problem": "Families juggle medicines, readings, reports and appointments for several people across chats and paper.",
    "users": "The family member who looks after everyone's health, plus parents and kids they manage.",
    "role": "Solo: product scope, flows and the full build in Flutter and Supabase.",
    "outcome": "A working app with 21 screens and an offline mode with sample data."
  },
  "judgment": {
    "used": "Jobs to be done, the caregiver's journey today, the backend trade-off for a 3-week build, and key stories. The journey showed where families lose track, and the stories are what the app had to do on day one.",
    "skipped": "RICE, Kano, HEART and an emotional journey. There are no live users yet, so usage numbers would be made up."
  },
  "solution": {
    "summary": "A private room per family, with every member's medicines, vitals, documents and visits in one place.",
    "steps": [
      "Create room",
      "Invite family",
      "Add members",
      "Track",
      "Get alerts"
    ],
    "decisions": [
      {
        "decision": "Rooms are invite-only",
        "why": "Health data stays inside the family. A 6-character code or QR to join."
      },
      {
        "decision": "Profiles run on someone's behalf",
        "why": "Parents and kids often won't use the app themselves."
      },
      {
        "decision": "Offline-first with sample data",
        "why": "One switch flips the whole app between sample data and the live backend, so I could build and demo without a server."
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/carevault/1-room.svg",
        "caption": "The family room"
      },
      {
        "src": "/projects/carevault/2-medicines.svg",
        "caption": "Stock bars and low-stock alerts"
      },
      {
        "src": "/projects/carevault/3-vitals.svg",
        "caption": "Readings with who and when"
      }
    ],
    "caption": "Simplified wireframes with sample data. Real screenshots are below."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "jtbd",
        "title": "Jobs the app is hired for",
        "items": [
          {
            "when": "a medicine is due",
            "want": "a reminder for the right person",
            "so": "no dose is missed"
          },
          {
            "when": "stock runs low",
            "want": "an alert before it runs out",
            "so": "refills happen on time"
          },
          {
            "when": "a doctor asks for history",
            "want": "readings and reports in one place",
            "so": "I can show them in seconds"
          },
          {
            "when": "a sibling offers to help",
            "want": "to invite them into a private room",
            "so": "we share the work"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "Caring for a parent's health, today",
        "stages": [
          {
            "stage": "Daily doses",
            "doing": "Calls to check if Nanna took his tablets",
            "feeling": "bad",
            "pain": "No record of doses",
            "opportunity": "Reminders and a dose log"
          },
          {
            "stage": "Refills",
            "doing": "Notices the strip is empty",
            "feeling": "bad",
            "pain": "Refill is late",
            "opportunity": "Stock bars and low-stock alerts"
          },
          {
            "stage": "Readings",
            "doing": "Writes BP in a notebook",
            "feeling": "okay",
            "pain": "No history to show",
            "opportunity": "Vitals history per member"
          },
          {
            "stage": "Doctor visit",
            "doing": "Searches chats for old reports",
            "feeling": "bad",
            "pain": "Reports lost",
            "opportunity": "Document vault with filters"
          }
        ]
      },
      {
        "kind": "tradeoff",
        "title": "Backend choice for a 3-week build",
        "criteria": [
          {
            "name": "Speed to build",
            "weight": 5
          },
          {
            "name": "Real-time updates",
            "weight": 3
          },
          {
            "name": "Works offline",
            "weight": 3
          },
          {
            "name": "Cost",
            "weight": 2
          }
        ],
        "options": [
          {
            "name": "Supabase + sample-data mode",
            "scores": [
              5,
              4,
              4,
              4
            ],
            "chosen": true
          },
          {
            "name": "Custom server",
            "scores": [
              2,
              3,
              3,
              3
            ]
          },
          {
            "name": "Phone only, no backend",
            "scores": [
              4,
              1,
              5,
              5
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement, showing why I picked the setup I built."
      },
      {
        "kind": "acceptance",
        "title": "Key stories",
        "stories": [
          {
            "story": "Join a room",
            "given": "a 6-character room code",
            "when": "a family member enters it",
            "then": "they join that private room and see its members"
          },
          {
            "story": "Low stock",
            "given": "a medicine with few tablets left",
            "when": "stock drops below the alert level",
            "then": "the people in the room get an alert"
          },
          {
            "story": "Run a profile for a parent",
            "given": "a parent without the app",
            "when": "the caregiver adds a profile for them",
            "then": "their medicines and readings can be tracked by the caregiver"
          }
        ]
      }
    ]
  },
  "flow": {
    "title": "From sign-up to a shared care room",
    "nodes": [
      {
        "label": "Sign up",
        "kind": "start"
      },
      {
        "label": "Create a family room",
        "kind": "step"
      },
      {
        "label": "Is everyone able to use a phone?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Add a profile you run for them"
        }
      },
      {
        "label": "Invite with a 6-character code or QR",
        "kind": "step"
      },
      {
        "label": "Add medicines, readings, documents",
        "kind": "step"
      },
      {
        "label": "Stock running low?",
        "kind": "decision",
        "side": {
          "label": "Yes",
          "text": "Alert the people in the room"
        }
      },
      {
        "label": "Everyone sees the same history",
        "kind": "end"
      }
    ],
    "caption": "The room is private: only people with the code can join."
  },
  "metrics": {
    "northStar": "Weekly active family rooms with 2 or more members",
    "rows": [
      {
        "name": "Rooms with a second member",
        "target": "Not set",
        "how": "Invite accepted within 7 days of room creation"
      },
      {
        "name": "Low-stock alerts acted on",
        "target": "Not set",
        "how": "Refill logged before stock reaches zero"
      },
      {
        "name": "Doses logged",
        "target": "Not set",
        "how": "Per member per week"
      }
    ],
    "tests": [
      "Usability test: can a new user create a room and invite a sibling in under 2 minutes?",
      "Reminder test: do reminders reach every member of the room on time?"
    ],
    "note": "The app was a build exercise, so there are no real usage numbers."
  },
  "next": {
    "items": [
      "Test with 5 caregiver families for two weeks",
      "Add a printable summary to take to the doctor",
      "Add language support for parents (Hindi, Telugu)"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/carevault/06_room_home.png",
        "alt": "CareVault: room home"
      },
      {
        "src": "/carevault/07_members.png",
        "alt": "CareVault: members"
      },
      {
        "src": "/carevault/13_medicine_list.png",
        "alt": "CareVault: medicine list"
      },
      {
        "src": "/carevault/17_vitals.png",
        "alt": "CareVault: vitals"
      },
      {
        "src": "/carevault/08_documents.png",
        "alt": "CareVault: documents"
      },
      {
        "src": "/carevault/09_appointments.png",
        "alt": "CareVault: appointments"
      }
    ]
  }
};

export default project;
