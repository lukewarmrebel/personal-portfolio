// About the project: CareVault. Gold-standard example for an earlier project: every section filled.
// Built only from what the site already said about the app. Framed as how I approached it; no invented outcomes.
// Schema: src/lib/projectSchema.ts
import type { ProjectFile } from "../../src/lib/projectSchema";

const W = "/projects/carevault";

const project: ProjectFile = {
  slug: "carevault",
  group: "earlier",
  order: 2,
  title: "CareVault: a family health app",
  oneLine: "One app for a family to track medicines, vitals, documents and doctor visits for everyone at home, including parents and kids.",
  tag: "Mobile app · Flutter",
  tags: ["Mobile app", "Health", "0 to 1 build", "Flutter + Supabase"],
  links: [],
  card: { thumb: "/carevault/06_room_home.png" },
  tiles: [
    { value: "21", label: "app screens" },
    { value: "8", label: "features" },
    { value: "3 weeks", label: "to build" },
    { value: "6", label: "character room code to join" },
  ],
  label: "How I approached it. Personas and targets below are illustrative; the app and its features are real.",
  glance: {
    problem: "Families juggle medicines, readings, reports and appointments for several people across chats and paper.",
    users: "The family member who looks after everyone's health, plus parents and kids they manage.",
    role: "Solo: product scope, flows and the full build in Flutter and Supabase.",
    outcome: "A working app with 21 screens and an offline mode with sample data.",
  },
  problem: {
    persona: {
      name: "Riya, the family's caregiver",
      who: "Looks after her parents' medicines and her child's check-ups (illustrative persona)",
      context: "Doses, refills, BP readings and lab reports live in WhatsApp, a notebook and three apps.",
      needs: ["One place for the whole family", "A nudge before a medicine runs out", "Share the load with a sibling"],
      frustrations: ["Missed refills", "Readings with no history", "Reports lost in chats"],
    },
    jtbd: "When I manage health for several family members, I want everything in one shared place, so nothing is missed and others can help.",
  },
  frameworks: {
    blocks: [
      {
        kind: "circles",
        title: "How I approached it",
        steps: {
          comprehend: "Family health admin is spread across chats, notebooks and several apps.",
          identify: "The caregiver; parents and kids who are cared for; siblings who help.",
          report: "One shared place, reminders, refill alerts, history for the doctor.",
          cut: "Medicines and the shared room first. Documents and visits next.",
          list: "A shared notes app, a reminder app, or one family health room.",
          evaluate: "Notes have no reminders; reminder apps are single-user.",
          summarise: "A private family room with medicines, vitals, documents and visits.",
        },
      },
      {
        kind: "emotion",
        title: "Riya's week, with CareVault (illustrative)",
        steps: [
          { step: "Sets up room", feeling: 0 },
          { step: "Invites brother", feeling: 1, note: "shared load" },
          { step: "Dose reminder", feeling: 1 },
          { step: "Low stock alert", feeling: 0, note: "refill in time" },
          { step: "Doctor visit", feeling: 2, note: "history ready" },
        ],
      },
      {
        kind: "journey",
        title: "Caring for a parent's health, today",
        stages: [
          { stage: "Daily doses", doing: "Calls to check if Nanna took his tablets", feeling: "bad", pain: "No record of doses", opportunity: "Reminders and a dose log" },
          { stage: "Refills", doing: "Notices the strip is empty", feeling: "bad", pain: "Refill is late", opportunity: "Stock bars and low-stock alerts" },
          { stage: "Readings", doing: "Writes BP in a notebook", feeling: "okay", pain: "No history to show", opportunity: "Vitals history per member" },
          { stage: "Doctor visit", doing: "Searches chats for old reports", feeling: "bad", pain: "Reports lost", opportunity: "Document vault with filters" },
        ],
      },
      {
        kind: "research",
        mode: "plan",
        title: "Research plan (no interviews done yet)",
        methods: [
          { method: "Interviews", who: "People who manage a parent's or child's medicines", howMany: "8", how: "Walk through last week: doses, refills, readings" },
          { method: "Diary study", who: "Caregiver families using the app", howMany: "5", how: "Two weeks, one short check-in a day" },
          { method: "Usability test", who: "Siblings joining a room for the first time", howMany: "5", how: "Join with a code and add a reading, unaided" },
        ],
        questions: [
          "When did you last miss a dose or a refill? What happened?",
          "Where do you keep readings and reports today?",
          "Who else helps, and how do you split the work?",
          "What would make you stop using a health app?",
        ],
        note: "A plan, not findings. Sample sizes are what I'd start with.",
      },
      {
        kind: "market",
        title: "Where CareVault fits",
        funnel: [
          { level: "TAM", label: "Households managing medicines for more than one person" },
          { level: "SAM", label: "Families where one person coordinates care for others" },
          { level: "SOM", label: "Smartphone caregivers in Indian cities, year 1" },
        ],
        positioning: {
          x: ["One person", "Whole family"],
          y: ["Single task", "All health admin"],
          points: [
            { name: "Pill reminder apps", x: 0.15, y: 0.15 },
            { name: "Notes and WhatsApp", x: 0.8, y: 0.3 },
            { name: "Personal health records", x: 0.2, y: 0.75 },
            { name: "CareVault", x: 0.85, y: 0.85, me: true },
          ],
        },
        features: {
          columns: ["Shared family room", "Dose reminders", "Low-stock alerts", "Vitals history", "Documents"],
          rows: [
            { name: "Pill reminder apps", values: ["no", "yes", "partial", "no", "no"] },
            { name: "Notes and WhatsApp", values: ["yes", "no", "no", "partial", "partial"] },
            { name: "Personal health records", values: ["no", "partial", "no", "yes", "yes"] },
            { name: "CareVault", values: ["yes", "yes", "yes", "yes", "yes"], me: true },
          ],
        },
        note: "Categories, not named apps; positions are my judgement. Market sizes not estimated.",
      },
      {
        kind: "jtbd",
        title: "Jobs the app is hired for",
        items: [
          { when: "a medicine is due", want: "a reminder for the right person", so: "no dose is missed" },
          { when: "stock runs low", want: "an alert before it runs out", so: "refills happen on time" },
          { when: "a doctor asks for history", want: "readings and reports in one place", so: "I can show them in seconds" },
          { when: "a sibling offers to help", want: "to invite them into a private room", so: "we share the work" },
        ],
      },
      {
        kind: "kano",
        title: "How I sorted the features",
        basic: ["Medicine list with dose times", "Reminders", "Private, invite-only room"],
        performance: ["Low-stock alerts with stock bars", "Vitals history per member", "Document vault with filters"],
        delight: ["Profiles run on behalf of parents and kids", "Join with a 6-character code or QR", "Works offline with sample data"],
      },
      {
        kind: "moscow",
        title: "Scope for the 3-week build",
        must: ["Family room and invites", "Medicines with reminders and stock", "Vitals: BP, heart rate, temperature, sugar"],
        should: ["Document vault", "Appointments", "Push notifications"],
        could: ["Activity timeline", "Member hub per person"],
        wont: ["Medical advice", "Doctor-side tools"],
      },
      {
        kind: "rice",
        title: "What to build first (sample scores, est.)",
        rows: [
          { item: "Medicines with reminders", reach: 10, impact: 3, confidence: 0.9, effort: 3 },
          { item: "Family room and invites", reach: 10, impact: 2, confidence: 0.8, effort: 2 },
          { item: "Low-stock alerts", reach: 7, impact: 2, confidence: 0.8, effort: 1 },
          { item: "Vitals history", reach: 6, impact: 2, confidence: 0.7, effort: 2 },
          { item: "Document vault", reach: 5, impact: 1, confidence: 0.7, effort: 2 },
        ],
        note: "Reach out of 10, impact 1 to 3, effort in weeks. Sample scores to show the method.",
      },
      {
        kind: "tradeoff",
        title: "Backend choice for a 3-week build",
        criteria: [
          { name: "Speed to build", weight: 5 },
          { name: "Real-time updates", weight: 3 },
          { name: "Works offline", weight: 3 },
          { name: "Cost", weight: 2 },
        ],
        options: [
          { name: "Supabase + sample-data mode", scores: [5, 4, 4, 4], chosen: true },
          { name: "Custom server", scores: [2, 3, 3, 3] },
          { name: "Phone only, no backend", scores: [4, 1, 5, 5] },
        ],
        note: "Scores 1 to 5 are my judgement, showing why I picked the setup I built.",
      },
      {
        kind: "acceptance",
        title: "Key stories",
        stories: [
          { story: "Join a room", given: "a 6-character room code", when: "a family member enters it", then: "they join that private room and see its members" },
          { story: "Low stock", given: "a medicine with few tablets left", when: "stock drops below the alert level", then: "the people in the room get an alert" },
          { story: "Run a profile for a parent", given: "a parent without the app", when: "the caregiver adds a profile for them", then: "their medicines and readings can be tracked by the caregiver" },
        ],
      },
      {
        kind: "northstar",
        title: "Metric tree (targets not set: no real users yet)",
        northStar: { name: "Weekly active family rooms with 2+ members", detail: "A room where the family actually shares the work" },
        inputs: [
          { name: "Rooms created", detail: "Sign-ups that set up a room" },
          { name: "Second member joins", detail: "Invite accepted within 7 days" },
          { name: "Doses logged", detail: "Per member per week" },
          { name: "Alerts acted on", detail: "Refill before stock hits zero" },
        ],
        guardrails: [
          { name: "Missed reminders" },
          { name: "Data seen outside the room" },
        ],
      },
      {
        kind: "heart",
        title: "How I'd measure it (illustrative)",
        rows: [
          { dimension: "Adoption", goal: "Families set up a room", signal: "Room created and a second member joins", metric: "% of sign-ups with 2+ members" },
          { dimension: "Engagement", goal: "Doses are logged", signal: "Dose marked taken", metric: "Doses logged per member per week" },
          { dimension: "Task success", goal: "No refill is missed", signal: "Refill before stock hits zero", metric: "% of low-stock alerts acted on" },
          { dimension: "Retention", goal: "It becomes routine", signal: "Weekly active rooms", metric: "Rooms active in week 4" },
        ],
        note: "No real usage data. These are the metrics I'd set up at launch.",
      },
      {
        kind: "roadmap",
        title: "Roadmap",
        now: ["Test with 5 caregiver families", "Fix reminder timing issues found"],
        next: ["Printable summary for the doctor", "Hindi and Telugu for parents"],
        later: ["Share a read-only view with a doctor"],
      },
    ],
  },
  flow: {
    title: "From sign-up to a shared care room",
    nodes: [
      { label: "Sign up", kind: "start" },
      { label: "Create a family room", kind: "step" },
      { label: "Is everyone able to use a phone?", kind: "decision", side: { label: "No", text: "Add a profile you run for them" } },
      { label: "Invite with a 6-character code or QR", kind: "step" },
      { label: "Add medicines, readings, documents", kind: "step" },
      { label: "Stock running low?", kind: "decision", side: { label: "Yes", text: "Alert the people in the room" } },
      { label: "Everyone sees the same history", kind: "end" },
    ],
    caption: "The room is private: only people with the code can join.",
  },
  wireframes: {
    screens: [
      { src: `${W}/1-room.svg`, caption: "The family room" },
      { src: `${W}/2-medicines.svg`, caption: "Stock bars and low-stock alerts" },
      { src: `${W}/3-vitals.svg`, caption: "Readings with who and when" },
      { src: `${W}/4-invite.svg`, caption: "Invite-only, with run-on-behalf profiles" },
    ],
    caption: "Simplified wireframes with sample data. Real screenshots are below.",
  },
  solution: {
    summary: "A private room per family, with every member's medicines, vitals, documents and visits in one place.",
    steps: ["Create room", "Invite family", "Add members", "Track", "Get alerts"],
    decisions: [
      { decision: "Rooms are invite-only", why: "Health data stays inside the family. A 6-character code or QR to join." },
      { decision: "Profiles run on someone's behalf", why: "Parents and kids often won't use the app themselves." },
      { decision: "Offline-first with sample data", why: "One switch flips the whole app between sample data and the live backend, so I could build and demo without a server." },
      { decision: "Stock bars, not just reminders", why: "A missed refill is as bad as a missed dose." },
    ],
  },
  metrics: {
    northStar: "Weekly active family rooms with 2 or more members",
    rows: [
      { name: "Rooms with a second member", target: "Not set", how: "Invite accepted within 7 days of room creation" },
      { name: "Low-stock alerts acted on", target: "Not set", how: "Refill logged before stock reaches zero" },
      { name: "Doses logged", target: "Not set", how: "Per member per week" },
    ],
    tests: [
      "Usability test: can a new user create a room and invite a sibling in under 2 minutes?",
      "Reminder test: do reminders reach every member of the room on time?",
      "Offline test: every screen works in sample-data mode",
    ],
    note: "The app was a build exercise, so there are no real usage numbers.",
  },
  next: {
    items: [
      "Test with 5 caregiver families for two weeks",
      "Add a printable summary to take to the doctor",
      "Add language support for parents (Hindi, Telugu)",
    ],
  },
  extra: {
    images: [
      { src: "/carevault/06_room_home.png", alt: "CareVault: room home" },
      { src: "/carevault/07_members.png", alt: "CareVault: members" },
      { src: "/carevault/13_medicine_list.png", alt: "CareVault: medicine list" },
      { src: "/carevault/17_vitals.png", alt: "CareVault: vitals" },
      { src: "/carevault/08_documents.png", alt: "CareVault: documents" },
      { src: "/carevault/09_appointments.png", alt: "CareVault: appointments" },
    ],
    skills: ["Flutter", "Dart", "Supabase", "Riverpod", "Firebase FCM", "go_router", "Material 3", "0 to 1 build"],
  },
};

export default project;
