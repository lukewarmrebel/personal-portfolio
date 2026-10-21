// About the project: Tata Imagination Challenge
// A case study competition pitch: a mental health app for students. First prize is the only real result; everything else is illustrative.
// Schema: src/lib/projectSchema.ts
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
  "problem": {
    "persona": {
      "name": "Riya, college student",
      "who": "Away from home, juggling classes and exams (illustrative persona)",
      "context": "She feels low and anxious some weeks. She doesn't want to make a big deal of it, so she says nothing.",
      "needs": [
        "A private, low-effort way to check in",
        "Small things that help right away",
        "An easy path to a real person when it's serious"
      ],
      "frustrations": [
        "Asking for help feels awkward",
        "Counselling seems only for a crisis",
        "Generic wellness apps don't fit student life"
      ]
    },
    "jtbd": "When I'm stressed and don't want to tell anyone, I want a quiet way to check in and get help that fits, so I can cope before it gets worse."
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
          },
          {
            "method": "Expert chats",
            "who": "College counsellors",
            "howMany": "est. 3 to 4",
            "how": "When students reach them, and what they wish happened sooner"
          }
        ],
        "findings": [
          {
            "insight": "Students wait too long to ask for help",
            "evidence": "Hypothesis to test",
            "group": "Behaviour"
          },
          {
            "insight": "Privacy decides whether they try it",
            "evidence": "Hypothesis to test",
            "group": "Trust"
          },
          {
            "insight": "A daily check-in has to take under a minute",
            "evidence": "Hypothesis to test",
            "group": "Effort"
          }
        ],
        "questions": [
          "Think of a stressful week. What did you do about it?",
          "Who, if anyone, did you talk to?",
          "What would stop you from using an app like this?",
          "When would you want a real person instead of an app?"
        ],
        "note": "This is a plan. I have no research data for this pitch, and the counts are estimates."
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
      },
      {
        "src": "/projects/tata-imagination-challenge/3-talk.svg",
        "caption": "Illustrative: reach a real person when it's serious"
      }
    ],
    "caption": "Illustrative screens of the student app idea. Not a built product. Any data shown is sample data."
  },
  "solution": {
    "summary": "My pitch was a mental health app for students. It makes checking in private and easy, offers small steps for everyday stress, and points students to a real person when it gets serious. The full plan grew into Eductive.",
    "steps": [
      "Private daily check-in",
      "Small next step matched to the mood",
      "Simple progress over time",
      "Easy path to a counsellor"
    ],
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
      },
      {
        "decision": "Hand off to people for serious cases",
        "why": "An app should not handle a crisis alone",
        "rejected": "App-only support"
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
    "tests": [
      "Interview students to check the problem and the privacy worry",
      "Test whether a one-minute check-in sticks for two weeks",
      "Ask counsellors how a hand-off should work"
    ],
    "note": "First prize is the only real result. The app was a pitch and was not built or launched."
  },
  "next": {
    "items": [
      "Run the research plan with real students",
      "Prototype the check-in and test it with a small group",
      "Work out the counsellor hand-off with a college"
    ]
  },
  "extra": {
    "skills": [
      "Problem framing",
      "User empathy",
      "Product thinking",
      "Pitching",
      "Storytelling"
    ],
    "paragraphs": [
      "The Tata Imagination Challenge was a case study competition. I pitched a mental health app for students and won first prize. The full plan grew into Eductive, which has its own page."
    ]
  }
};

export default project;
