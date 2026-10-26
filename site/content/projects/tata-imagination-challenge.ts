// About the project: Tata Imagination Challenge
// Schema: src/lib/projectSchema.ts. Real numbers only; illustrative ones say "est." or "sample data".
// Frameworks are chosen per project. The `judgment` note on the page says what I used and what I skipped, and why.
import type { ProjectFile } from "../../src/lib/projectSchema";

const project: ProjectFile = {
  "slug": "tata-imagination-challenge",
  "group": "strategy",
  "order": 3,
  "title": "Tata Imagination Challenge",
  "oneLine": "A case study competition. I pitched a mental health app for students and won first prize.",
  "tag": "Case competition · EdTech / Mental health",
  "tags": [
    "Case competition",
    "EdTech",
    "Mental health"
  ],
  "links": [
    {
      "label": "The full plan grew into Eductive",
      "href": "/projects/eductive"
    }
  ],
  "tiles": [
    {
      "value": "1st",
      "label": "prize"
    }
  ],
  "label": "A competition pitch, not a launched product. First prize is the real result. The frameworks and screens show how I frame the idea and are illustrative.",
  "glance": {
    "problem": "Students under stress rarely ask for help until things get bad.",
    "users": "Students.",
    "role": "I built and pitched the idea in a case study competition.",
    "outcome": "First prize."
  },
  "judgment": {
    "used": "The student's jobs to be done, CIRCLES and a research plan. A competition pitch is judged on how clearly I frame the problem, so CIRCLES and the jobs earn their place here.",
    "skipped": "RICE, HEART, metric trees and acceptance criteria. It was a pitch, not a product, so there was nothing to rank or measure."
  },
  "problem": {
    "persona": {
      "name": "Riya, college student",
      "who": "Away from home, juggling classes and exams (illustrative persona)",
      "context": "She feels low and anxious some weeks. She doesn't want to make a big deal of it, so she says nothing.",
      "needs": [
        "A private, low-effort way to check in",
        "Small things that help right away"
      ],
      "frustrations": [
        "Asking for help feels awkward",
        "Counselling seems only for a crisis"
      ]
    },
    "jtbd": "When I'm stressed and don't want to tell anyone, I want a quiet way to check in and get help that fits, so I can cope before it gets worse."
  },
  "solution": {
    "summary": "My pitch was a mental health app for students. It makes checking in private and easy, offers small steps for everyday stress, and points students to a real person when it gets serious. The full plan grew into Eductive.",
    "decisions": [
      {
        "decision": "Start with the check-in habit",
        "why": "Nothing else helps if students don't open the app",
        "rejected": "A big feature list on day one"
      },
      {
        "decision": "Private by default",
        "why": "Fear of being judged is what keeps students quiet",
        "rejected": "Sharing with the college by default"
      }
    ]
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/tata-imagination-challenge/1-checkin.svg",
        "caption": "Illustrative: a one-tap daily check-in"
      },
      {
        "src": "/projects/tata-imagination-challenge/2-next-step.svg",
        "caption": "Illustrative: a small next step that fits the mood"
      }
    ],
    "caption": "Illustrative screens of the student app idea. Not a built product. Any data shown is sample data."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "jtbd",
        "title": "The jobs a student hires the app for",
        "items": [
          {
            "when": "I feel off but can't say why",
            "want": "a quick, private check-in",
            "so": "I can name what's going on"
          },
          {
            "when": "exams or deadlines pile up",
            "want": "small steps I can do in a few minutes",
            "so": "I feel back in control"
          },
          {
            "when": "it's getting serious",
            "want": "an easy way to reach a real person",
            "so": "I don't have to struggle alone"
          }
        ]
      },
      {
        "kind": "circles",
        "title": "How I framed the pitch",
        "steps": {
          "comprehend": "Many students struggle with stress in silence and only seek help late.",
          "identify": "Students first. Their college counsellors come in when it's serious.",
          "report": "Privacy, very low effort, and help that matches how bad things are.",
          "cut": "Getting students to check in at all matters most. Nothing works without that habit.",
          "list": "Mood check-ins, short self-help, peer support, booking a counsellor.",
          "evaluate": "More features add value but also add friction for someone who already feels low.",
          "summarise": "A simple, private app: check in, get a small next step, and reach a person when needed."
        }
      },
      {
        "kind": "research",
        "mode": "plan",
        "title": "What I'd want to learn",
        "methods": [
          {
            "method": "Interviews",
            "who": "Students across years",
            "howMany": "est. 10 to 12",
            "how": "How they cope today and who they turn to"
          },
          {
            "method": "Survey",
            "who": "Students on campus",
            "howMany": "est. 100+",
            "how": "How often they feel stressed, and what stops them asking for help"
          }
        ],
        "note": "This is a plan. I have no research data for this pitch, and the counts are estimates."
      }
    ]
  },
  "metrics": {
    "rows": [
      {
        "name": "Competition result",
        "target": "First prize",
        "how": "Case study competition"
      }
    ],
    "tests": [],
    "note": "First prize is the only real result. The app was a pitch and was not built or launched."
  },
  "next": {
    "items": [
      "Run the research plan with real students"
    ]
  },
  "extra": {
    "paragraphs": [
      "The Tata Imagination Challenge was a case study competition. I pitched a mental health app for students and won first prize. The full plan grew into Eductive, which has its own page."
    ]
  }
};

export default project;
