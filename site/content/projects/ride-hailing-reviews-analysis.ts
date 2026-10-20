// About the project: What 80,000 ride-hailing reviews complain about
// Schema: src/lib/projectSchema.ts. Facts come from the project's own files; illustrative numbers say "est." or "sample data".
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
    "persona": {
      "name": "Priya, 26, Hyderabad",
      "who": "Takes an Ola auto from the station most weeks",
      "context": "The app says ₹550. The driver turns up and wants ₹800, or cancel. She cancels and Ola charges a ₹50 cancel fee. Then she can't find anyone at Ola to complain to.",
      "needs": [
        "Pay the fare the app showed",
        "A quick way to report a driver",
        "Money back without a fight"
      ],
      "frustrations": [
        "Haggling after the booking is confirmed",
        "Cancel fee for the driver's demand",
        "Support she can't reach"
      ]
    },
    "jtbd": "When a driver asks for more than the app fare, I want to pay only the fare I was shown and report it in one tap, so I'm not haggling on the street or out of pocket."
  },
  "frameworks": {
    "blocks": [
      {
        "kind": "circles",
        "title": "How I framed it (CIRCLES)",
        "steps": {
          "comprehend": "Thousands of reviews a week. Which complaint matters most, and is it fixable?",
          "identify": "Riders on Uber, Ola and Rapido in India. Product teams who read the reviews.",
          "report": "Rank complaint themes per app with a real review for each, then pick one to fix.",
          "cut": "English reviews, 3 months, 3,000 random per app, one theme per review.",
          "list": "Fix fares, driver cancels, support access, app bugs, or availability.",
          "evaluate": "Ola's fare complaints are 14.5% vs ~7% elsewhere, and Ola controls fare and payout.",
          "summarise": "A fare guarantee on Ola: one button, the app fare holds, Ola pays back the rest."
        }
      },
      {
        "kind": "research",
        "mode": "findings",
        "title": "What the reviews say (review analysis)",
        "methods": [
          {
            "method": "Review pull",
            "who": "English India Play Store reviews, 20 Jul to 19 Oct 2026",
            "howMany": "80,548",
            "how": "Every written review for Uber, Ola and Rapido"
          },
          {
            "method": "Theme tagging",
            "who": "Random sample per app",
            "howMany": "3,000 × 3",
            "how": "An LLM tagged each against 15 fixed themes"
          },
          {
            "method": "Hand check",
            "who": "Random tagged reviews",
            "howMany": "50",
            "how": "I labelled each myself first: 84% exact match, 96% same direction"
          }
        ],
        "findings": [
          {
            "insight": "The same problem tops all three apps",
            "evidence": "Fare shown vs fare charged: Uber 6.6%, Ola 14.5%, Rapido 7.0% of reviews",
            "group": "All apps"
          },
          {
            "insight": "On Ola it's a driver asking for more",
            "evidence": "277 of 3,000 Ola reviews (9.2%); 238 of those are 1 star",
            "group": "Ola"
          },
          {
            "insight": "Then nowhere to go",
            "evidence": "Ola's #2 complaint is support unreachable, 6.3%",
            "group": "Ola"
          },
          {
            "insight": "Writers are angrier than the star average",
            "evidence": "52% of Ola's written reviews are 1 star, vs 24% on Uber",
            "group": "Stars"
          }
        ],
        "note": "Real public reviews. Reviews over-represent bad days and miss Hindi and Telugu script."
      },
      {
        "kind": "market",
        "title": "The three apps side by side",
        "funnel": [
          {
            "level": "TAM",
            "label": "Written reviews for the three apps in 3 months",
            "value": "80,548",
            "assumption": "English, India Play Store, 20 Jul to 19 Oct 2026."
          },
          {
            "level": "SAM",
            "label": "Reviews I tagged by theme",
            "value": "9,000",
            "assumption": "3,000 random per app."
          },
          {
            "level": "SOM",
            "label": "Ola reviews about a driver asking for more",
            "value": "277",
            "assumption": "Out of 3,000 Ola reviews sampled."
          }
        ],
        "positioning": {
          "x": [
            "Few fare complaints",
            "Many fare complaints"
          ],
          "y": [
            "Mostly happy writers",
            "Mostly angry writers"
          ],
          "points": [
            {
              "name": "Uber",
              "x": 0.41,
              "y": 0.24
            },
            {
              "name": "Rapido",
              "x": 0.44,
              "y": 0.3
            },
            {
              "name": "Ola",
              "x": 0.9,
              "y": 0.52,
              "me": true
            }
          ]
        },
        "features": {
          "columns": [
            "Fare is #1 complaint",
            "Support in top 3",
            "Driver cancels in top 3",
            "Over 40% 1 star"
          ],
          "rows": [
            {
              "name": "Uber",
              "values": [
                "yes",
                "no",
                "yes",
                "no"
              ]
            },
            {
              "name": "Ola",
              "values": [
                "yes",
                "yes",
                "yes",
                "yes"
              ],
              "me": true
            },
            {
              "name": "Rapido",
              "values": [
                "yes",
                "no",
                "yes",
                "no"
              ]
            }
          ]
        },
        "trends": [
          {
            "value": "1 in 7",
            "label": "Ola reviews about the fare not matching the app"
          },
          {
            "value": "41,073",
            "label": "Uber reviews in 3 months, vs 3,754 for Ola"
          },
          {
            "value": "84%",
            "label": "of my hand check matched the model's theme exactly"
          }
        ],
        "note": "Here the funnel is the analysis funnel, not a market size. The highlighted point is the app I'd fix first. Positions are from the review data: x = fare complaint share, y = share of 1-star written reviews."
      },
      {
        "kind": "jtbd",
        "title": "Jobs a fix has to do",
        "items": [
          {
            "when": "the driver asks for more after accepting",
            "want": "the app fare to hold",
            "so": "I don't haggle on the street"
          },
          {
            "when": "I paid extra anyway",
            "want": "the difference back within a day",
            "so": "I'm not out of pocket"
          },
          {
            "when": "something goes wrong",
            "want": "to report it in my language, by voice",
            "so": "I don't hunt for support"
          },
          {
            "when": "the same driver keeps doing it",
            "want": "Ola to act on him",
            "so": "it stops happening to the next rider"
          }
        ]
      },
      {
        "kind": "journey",
        "title": "A squeezed Ola ride today, and where the fix steps in",
        "stages": [
          {
            "stage": "Books",
            "doing": "Sees ₹550 in the app",
            "feeling": "good",
            "pain": "Fare isn't binding",
            "opportunity": "Fare locked on acceptance"
          },
          {
            "stage": "Driver calls",
            "doing": "“₹800 or cancel”",
            "feeling": "bad",
            "pain": "Haggling or stranded",
            "opportunity": "“Driver asked for more” button"
          },
          {
            "stage": "Cancels",
            "doing": "Pays a ₹50 cancel fee",
            "feeling": "bad",
            "pain": "Punished for the driver's demand",
            "opportunity": "Cancel after a call costs the driver"
          },
          {
            "stage": "Complains",
            "doing": "Looks for support",
            "feeling": "bad",
            "pain": "Support unreachable",
            "opportunity": "AI triage, refund in a day"
          },
          {
            "stage": "Next trip",
            "doing": "Opens Uber instead",
            "feeling": "okay",
            "pain": "Ola loses the rider",
            "opportunity": "Repeat drivers coached"
          }
        ]
      },
      {
        "kind": "emotion",
        "title": "How the rider feels, today and with the fare guarantee",
        "steps": [
          {
            "step": "Books",
            "feeling": 1,
            "note": "₹550, fine"
          },
          {
            "step": "Driver asks ₹800",
            "feeling": -2,
            "note": "Stuck"
          },
          {
            "step": "Taps the button",
            "feeling": 0,
            "note": "Fare holds"
          },
          {
            "step": "Trip done",
            "feeling": 1,
            "note": "Paid ₹550"
          },
          {
            "step": "Refund lands",
            "feeling": 2,
            "note": "If she paid extra"
          }
        ],
        "note": "My expected curve with the fix, to test with riders."
      },
      {
        "kind": "rice",
        "title": "Which Ola fix first (sample scores, est.)",
        "rows": [
          {
            "item": "Fare guarantee button",
            "reach": 9,
            "impact": 3,
            "confidence": 0.8,
            "effort": 3
          },
          {
            "item": "Higher fee for cancel after a call",
            "reach": 6,
            "impact": 2,
            "confidence": 0.7,
            "effort": 1
          },
          {
            "item": "AI triage of reports",
            "reach": 7,
            "impact": 2,
            "confidence": 0.6,
            "effort": 3
          },
          {
            "item": "Repeat-driver flags",
            "reach": 5,
            "impact": 2,
            "confidence": 0.7,
            "effort": 2
          },
          {
            "item": "Reachable support line",
            "reach": 8,
            "impact": 2,
            "confidence": 0.5,
            "effort": 5
          }
        ],
        "note": "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method."
      },
      {
        "kind": "moscow",
        "title": "What goes in version 1",
        "must": [
          "“Driver asked for more” button",
          "App fare holds; Ola pays back the rest",
          "Refund cap per trip and per month"
        ],
        "should": [
          "Cancel-after-call fee for drivers",
          "AI triage that can approve, not deny"
        ],
        "could": [
          "Repeat-driver flags for ops",
          "Voice reports in Hindi and Telugu"
        ],
        "wont": [
          "Recording or transcribing calls",
          "Auto-suspending drivers without review"
        ]
      },
      {
        "kind": "tradeoff",
        "title": "How to stop the fare squeeze",
        "criteria": [
          {
            "name": "Rider pays the app fare",
            "weight": 5
          },
          {
            "name": "Fair to drivers",
            "weight": 4
          },
          {
            "name": "Fast to ship",
            "weight": 3
          },
          {
            "name": "Hard to abuse",
            "weight": 3
          }
        ],
        "options": [
          {
            "name": "Just penalise drivers",
            "scores": [
              2,
              1,
              4,
              4
            ]
          },
          {
            "name": "Fare guarantee + payback",
            "scores": [
              5,
              3,
              3,
              3
            ],
            "chosen": true
          },
          {
            "name": "Raise short-trip fares only",
            "scores": [
              2,
              5,
              3,
              5
            ]
          },
          {
            "name": "Better support only",
            "scores": [
              2,
              3,
              2,
              4
            ]
          }
        ],
        "note": "Scores 1 to 5 are my judgement. I'd review short-trip fares alongside the guarantee."
      },
      {
        "kind": "acceptance",
        "title": "Key stories",
        "stories": [
          {
            "story": "Button shows",
            "given": "a driver has accepted my trip",
            "when": "I open the trip screen",
            "then": "“Driver asked for more” is there until 24 hours after the trip"
          },
          {
            "story": "Payback",
            "given": "I paid ₹800 on a ₹550 app fare",
            "when": "my report is approved",
            "then": "₹250 goes back to my UPI or Ola Money within a day, up to the cap"
          },
          {
            "story": "Only a person says no",
            "given": "the trip data doesn't back my report",
            "when": "triage runs",
            "then": "it goes to a person, never an automatic rejection"
          },
          {
            "story": "Cancel after call",
            "given": "a driver cancels within 2 minutes of calling me",
            "when": "the cancel is logged",
            "then": "he pays the higher cancel fee and I pay none"
          }
        ]
      },
      {
        "kind": "northstar",
        "title": "North star and what drives it",
        "northStar": {
          "name": "Share of Ola reviews tagged “driver asked for more”",
          "detail": "Baseline 9.2%. Re-run this script monthly",
          "target": "4.6% (est.)"
        },
        "inputs": [
          {
            "name": "Reports per 1,000 trips",
            "detail": "Expect it to rise first as reporting gets easy"
          },
          {
            "name": "Cancels within 2 min of a call",
            "detail": "The squeeze move",
            "target": "Down 50% (est.)"
          },
          {
            "name": "Median time to refund",
            "detail": "Rider made whole",
            "target": "< 24 h (est.)"
          },
          {
            "name": "Repeat drivers coached",
            "detail": "The few causing most of it"
          }
        ],
        "guardrails": [
          {
            "name": "Driver acceptance rate",
            "target": "no drop"
          },
          {
            "name": "Driver churn",
            "target": "no rise"
          },
          {
            "name": "Refund cost per trip",
            "target": "within cap"
          },
          {
            "name": "Audited refunds that were false",
            "target": "< 5% (est.)"
          }
        ],
        "note": "Baseline 9.2% is from the review sample; the targets are my estimates."
      },
      {
        "kind": "heart",
        "title": "HEART for the fare guarantee",
        "rows": [
          {
            "dimension": "Happiness",
            "goal": "Riders trust the fare",
            "signal": "Fare complaints in reviews",
            "metric": "Share of Ola reviews on fare (baseline 14.5%)"
          },
          {
            "dimension": "Engagement",
            "goal": "Riders use the button when squeezed",
            "signal": "Button taps",
            "metric": "Reports per 1,000 trips"
          },
          {
            "dimension": "Adoption",
            "goal": "Riders know it exists",
            "signal": "Button seen on trip screen",
            "metric": "% of trips where it was viewed"
          },
          {
            "dimension": "Retention",
            "goal": "Squeezed riders stay",
            "signal": "Rides after a report",
            "metric": "% riding again in 30 days (target 60%, est.)"
          },
          {
            "dimension": "Task success",
            "goal": "Refund lands fast",
            "signal": "Approved refunds",
            "metric": "Median time to refund (< 24 h, est.)"
          }
        ]
      },
      {
        "kind": "risks",
        "title": "Risks and how I'd handle them",
        "items": [
          {
            "risk": "The fare really is too low for drivers",
            "likelihood": "high",
            "impact": "high",
            "mitigation": "Review short-trip and auto fares at the same time"
          },
          {
            "risk": "Riders abuse refunds",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Cap per trip and per month; audit a sample"
          },
          {
            "risk": "City meter rules differ",
            "likelihood": "medium",
            "impact": "medium",
            "mitigation": "Legal signs off city by city"
          },
          {
            "risk": "Reviews aren't trip logs",
            "likelihood": "high",
            "impact": "medium",
            "mitigation": "Use the first 4 weeks of button data as the real baseline"
          }
        ]
      },
      {
        "kind": "roadmap",
        "title": "Roadmap",
        "now": [
          "Fare guarantee button",
          "Payback with caps",
          "Monthly re-run of this review script"
        ],
        "next": [
          "Cancel-after-call fee",
          "AI triage that approves clear cases",
          "Short-trip fare review"
        ],
        "later": [
          "Repeat-driver flags for ops",
          "Hindi and Telugu reviews in the analysis",
          "Same method for Uber and Rapido"
        ]
      }
    ]
  },
  "flow": {
    "title": "How I ran the analysis",
    "nodes": [
      {
        "label": "Pull every English India review, 3 months, 3 apps",
        "kind": "start"
      },
      {
        "label": "Random sample: 3,000 per app",
        "kind": "step"
      },
      {
        "label": "LLM tags each with 1 of 15 fixed themes",
        "kind": "step"
      },
      {
        "label": "Does my hand check agree?",
        "kind": "decision",
        "side": {
          "label": "No",
          "text": "Fix the theme definitions and re-tag. Mine: 42 of 50 exact."
        }
      },
      {
        "label": "Rank themes per app, pick a real review for each",
        "kind": "step"
      },
      {
        "label": "Split fare complaints by what happened",
        "kind": "step"
      },
      {
        "label": "Pick one fixable problem and design the fix",
        "kind": "end"
      }
    ],
    "caption": "Good enough to rank themes, not to quote to one decimal."
  },
  "wireframes": {
    "screens": [
      {
        "src": "/projects/ride-hailing-reviews-analysis/1-trip.svg",
        "caption": "One button on the trip screen. The fare on the screen is the fare I pay."
      },
      {
        "src": "/projects/ride-hailing-reviews-analysis/2-report.svg",
        "caption": "Reporting takes seconds, by text or voice note, in the rider’s own language."
      },
      {
        "src": "/projects/ride-hailing-reviews-analysis/3-refund.svg",
        "caption": "AI triage can say yes when the trip data backs it up. A no always comes from a person."
      },
      {
        "src": "/projects/ride-hailing-reviews-analysis/4-ops.svg",
        "caption": "A simple model flags the few repeat drivers, so ops can coach or suspend them."
      }
    ],
    "caption": "Wireframes of the fix I recommend for Ola. Sample data on the screens."
  },
  "solution": {
    "summary": "The same complaint tops all three apps: the fare charged isn't the fare shown. On Ola it's double, so I'd fix that first with a fare guarantee.",
    "steps": [
      "Pull reviews",
      "Sample",
      "Tag themes",
      "Hand check",
      "Rank",
      "Design the fix"
    ],
    "decisions": [
      {
        "decision": "Read reviews, not a survey",
        "why": "I wanted riders' own words about what goes wrong."
      },
      {
        "decision": "One theme per review, fixed list",
        "why": "Keeps the counts comparable across apps.",
        "rejected": "Open-ended topics"
      },
      {
        "decision": "Fix Ola's fare first",
        "why": "14.5% vs ~7% elsewhere, and Ola controls the fare, the payment and the payout."
      },
      {
        "decision": "The button needs no AI",
        "why": "AI only helps with triage and repeat drivers. It can approve, never deny."
      },
      {
        "decision": "No call recording",
        "why": "Trip data (call before pickup, cancel, cash switch) is enough.",
        "rejected": "Transcribing driver calls"
      }
    ]
  },
  "metrics": {
    "northStar": "Share of Ola reviews tagged “driver asked for more”",
    "rows": [
      {
        "name": "Reviews tagged “driver asked for more” (baseline 9.2%)",
        "target": "Half (est.)",
        "how": "Re-run this script monthly; two quarters"
      },
      {
        "name": "Reports per 1,000 trips",
        "target": "Up, then down",
        "how": "Button data. Rises first as reporting gets easy"
      },
      {
        "name": "Cancels within 2 min of a call",
        "target": "Down (est.)",
        "how": "Trip logs"
      },
      {
        "name": "Median time to refund",
        "target": "< 24 h (est.)",
        "how": "Refund logs"
      }
    ],
    "tests": [
      "Driver acceptance rate and churn: no worse than before",
      "Refund cost per trip within the cap",
      "Audit a sample of refunds for abuse",
      "4 weeks of button data to set the true per-trip baseline"
    ],
    "note": "Baselines are from the review sample. Targets are my estimates."
  },
  "next": {
    "items": [
      "Add Hindi and Telugu script reviews to the analysis",
      "Re-run monthly to track the fare theme",
      "Talk to 10 Ola riders and 5 drivers about the squeeze",
      "Check short-trip fares with drivers before the guarantee launches"
    ]
  },
  "extra": {
    "images": [
      {
        "src": "/work/img/ride-complaints-chart.webp",
        "alt": "Chart: complaint themes by app"
      }
    ],
    "stat": "Ola: 1 in 7 reviews are about the fare not matching the app."
  },
  "label": "Real public reviews. The fare-guarantee feature is how I would build it; its targets are my estimates."
};

export default project;



