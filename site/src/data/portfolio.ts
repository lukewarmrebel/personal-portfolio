export const personal = {
  name: "Pranav Thatavarti",
  title: "Product Manager",
  tagline: "Building scalable products that users love — from 0 to 1 and beyond.",
  location: "Hyderabad, India",
  email: "pranavtatavarthi@gmail.com",
  phone: "+91 8919053740",
  linkedin: "https://linkedin.com/in/pranav-thatavarthi",
  github: "https://github.com/lukewarmrebel",
  resumeUrl: "/resume.pdf",
  bio: "Product Manager with a strong foundation in software engineering and an MBA from IIM Ranchi. Drawing on 6+ years of experience in Data, Platform, and P&C Insurance, I drive product strategy, lead cross-functional teams, and deliver impactful solutions at the intersection of AI, analytics, and user experience.",
  bio2: "I help drive growth and efficiency for companies in dynamic environments by building scalable, data-driven products using design thinking and first principles.",
  featuredSkills: ["Product Strategy", "Cross-functional Leadership", "0 → 1 Products", "Data-driven Decisions", "User-centric Design", "P&C Insurance"],
  interests: [
    { label: "Hiking & Sunsets", emoji: "🌄" },
    { label: "Music & Ukulele", emoji: "🎵" },
    { label: "Weekend Rides", emoji: "🏍️" },
    { label: "Sports", emoji: "⚽" },
  ],
};

export const experience = [
  {
    company: "ICICI Lombard General Insurance",
    role: "Chief Manager — Business Strategy",
    location: "Hyderabad, India",
    period: "June 2023 – Present",
    color: "from-violet-500 to-indigo-600",
    bullets: [
      "Led fraud risk analytics for Motor P&C claims — operationalised 6 ML risk models with 20+ enriched data parameters; improved fraud detection precision by 20%, realising ₹3.5 Cr+ in annualised savings.",
      "Delivered AI-led vehicle inspection & OCR-based issuance automation — accelerated policy approval TAT by 83% and eliminated manual inspections in 60% of cases.",
      "Led 3+ parallel workstreams on the Motor Claims Platform — delivered 65% TAT improvement and 28% increase in mobile app adoption across 3 digital touchpoints.",
      "Aligned 5 cross-functional teams (eng, ops, legal, data science, compliance) on 12-month roadmap, resolving 8+ critical blockers to ship features on time.",
    ],
  },
  {
    company: "ICICI Lombard General Insurance",
    role: "Consultant (Internship)",
    location: "Mumbai, India",
    period: "Apr 2022 – Jun 2022",
    color: "from-pink-500 to-rose-500",
    bullets: [
      "Conducted risk parameter analysis and competitive benchmarking across 15+ P&C products.",
      "Enhanced pricing model by incorporating agent performance and weather-based risk signals.",
      "Recognised as Top 10 intern — presented findings directly to CEO and senior leadership.",
    ],
  },
  {
    company: "Galaxeye",
    role: "Product Manager",
    location: "Chennai, India",
    period: "Jan 2022 – Mar 2022",
    color: "from-amber-500 to-orange-500",
    bullets: [
      "Built and executed PMF framework at 0→1 stage, validating 100+ applications across target segments.",
      "Conducted competitor landscape analysis across 12 global players, identifying 3 key white space opportunities.",
      "Created dashboards to track adoption and retention, enabling data-driven 0→1 market insights.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Analyst",
    location: "Bangalore, India",
    period: "Jan 2018 – Jul 2021",
    color: "from-teal-500 to-cyan-600",
    bullets: [
      "Led end-to-end delivery of 20+ financial reports and Power BI dashboards for enterprise clients.",
      "Built 10+ KPI dashboards; reduced data refresh time by 50% through SQL-based data model optimisation.",
      "Automated reporting workflows using Python scripts across regional business units.",
      "Awarded 'Star Employee' twice — 2019 and 2020.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  category: "Personal" | "Work" | "Academic" | "Analysis";
  summary: string;
  highlights?: string[];
  skills: string[];
  link?: string;
  duration?: string;
  color: string;
  emoji: string;
  stats?: { label: string; value: string }[];
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    title: "Sentinel — Cyber UW Co-Pilot",
    subtitle: "Product Teardown & AI Eval Framework",
    category: "Analysis",
    summary:
      "Deep teardown of Sentinel's AI-powered cyber underwriting platform. Explored its 5-layer intelligence stack, Red Flags Engine for document conflict detection, and proposed a 4-tier AI eval rubric — questioning how AI augments underwriting judgment without replacing it.",
    highlights: [
      "Mapped 5-layer stack: OCR+LLM ingestion → RAG risk intel → ML guideline alignment → smart triage → LLM summaries",
      "Designed 4-tier eval framework: Output Quality, Reasoning, Human-AI Collaboration, Portfolio Outcomes",
      "Identified critical open questions around confidence thresholds and model benchmarking",
    ],
    skills: ["AI Product Analysis", "Eval Framework Design", "InsurTech", "RAG Architecture", "System Design"],
    link: "https://uwcopilot-cyberinsurance.vercel.app",
    color: "from-cyan-500 to-blue-600",
    emoji: "🛡️",
    stats: [
      { label: "Faster Triage", value: "68%" },
      { label: "More Flags", value: "12x" },
      { label: "AI Decision", value: "<3min" },
    ],
  },
  {
    title: "CareVault",
    subtitle: "Family Health Management App — Flutter & Supabase",
    category: "Personal",
    summary:
      "Built a full-stack mobile app for families to collaboratively manage medicines, vitals, documents, and appointments for all household members — including proxy profiles for dependents. Offline-first with a fake-data mode; backend powered by Supabase with real-time push notifications.",
    highlights: [
      "Medicine tracking with low-stock alerts, reminder times, per-member dose schedules, and stock progress bars",
      "Vitals monitoring (BP, heart rate, temperature, glucose) with timestamped history per member",
      "Document vault with masonry grid, category filter chips, and full-screen preview",
      "Family invite system with 6-character room codes and QR share — invite-only private care rooms",
      "Offline-first architecture: compile-time USE_FAKES flag switches all repositories from in-memory fakes to live Supabase with zero code changes",
    ],
    skills: ["Flutter", "Dart", "Supabase", "Riverpod", "Firebase FCM", "go_router", "Material 3", "0→1 Build"],
    duration: "3 weeks",
    color: "from-emerald-500 to-teal-600",
    emoji: "🏥",
    stats: [
      { label: "App Screens", value: "21" },
      { label: "Features", value: "8" },
      { label: "Build Mode", value: "Offline-first" },
    ],
    screenshots: [
      "/carevault/06_room_home.png",
      "/carevault/07_members.png",
      "/carevault/13_medicine_list.png",
      "/carevault/17_vitals.png",
      "/carevault/08_documents.png",
      "/carevault/09_appointments.png",
      "/carevault/11_member_hub.png",
      "/carevault/14_medicine_detail.png",
      "/carevault/20_audit_timeline.png",
      "/carevault/01_signup.png",
      "/carevault/03_family_create.png",
      "/carevault/05_family_invite.png",
    ],
  },
  {
    title: "Motor Claims Fraud Detection Platform",
    subtitle: "AI Risk Engine — ICICI Lombard",
    category: "Work",
    summary:
      "Defined fraud detection strategy and led cross-functional delivery of an automated risk engine for Motor P&C claims. Coordinated data science, risk, and engineering to operationalise 6 ML-based models at intake stage, reducing fraudulent exposure at scale.",
    highlights: [
      "Built automated risk engine with 20+ rule checks and 6 ML fraud models integrated at intake",
      "Improved fraud detection precision by 20% while maintaining claim approval rate",
      "Governed weekly model performance reviews with data science and compliance teams",
    ],
    skills: ["Fraud Analytics", "ML Product", "Platform Strategy", "Data Science Coordination", "P&C Insurance"],
    color: "from-violet-500 to-purple-600",
    emoji: "🔍",
    stats: [
      { label: "Annual Savings", value: "₹3.5 Cr+" },
      { label: "Fraud Precision", value: "+20%" },
      { label: "ML Models", value: "6" },
    ],
  },
  {
    title: "AI Vehicle Inspection System",
    subtitle: "Computer Vision Automation — ICICI Lombard",
    category: "Work",
    summary:
      "Scoped, governed, and shipped an AI-led vehicle damage detection and OCR-based issuance automation system. Eliminated the need for manual inspections in the majority of cases, dramatically cutting policy approval time.",
    highlights: [
      "Defined functional requirements and governed sprint execution across engineering and data science",
      "Integrated AI damage detection model eliminating manual inspections for 60% of cases",
      "Led stakeholder sign-off across ops, legal, compliance, and data science",
    ],
    skills: ["Computer Vision", "Process Automation", "OCR", "Stakeholder Management", "Sprint Governance"],
    color: "from-orange-500 to-amber-500",
    emoji: "🚗",
    stats: [
      { label: "TAT Reduction", value: "83%" },
      { label: "Manual Cases Eliminated", value: "60%" },
    ],
  },
  {
    title: "PM Interview Prep Bot",
    subtitle: "Multi-Agent Workflow Automation",
    category: "Personal",
    summary:
      "Designed and launched a personalised PM interview simulation tool using RAG and multi-agent orchestration. A Manager Agent coordinates subagents to generate questions, probe weak answers, and compile structured feedback — all context-aware from resume, JD, and MBTI inputs.",
    highlights: [
      "Manager Agent (ReAct-style) orchestrates Question Generator, Probing, and Feedback subagents",
      "RAG pipeline ingests resume + JD for context-aware, personalised question generation",
      "Delivers structured mock interview with actionable feedback in under 5 minutes",
    ],
    skills: ["Multi-Agent Systems", "RAG Architecture", "Workflow Automation", "Product Sense", "AI Product Design"],
    link: "https://www.youtube.com/watch?v=-N2fSuk80dM",
    duration: "2 days",
    color: "from-indigo-500 to-violet-600",
    emoji: "🤖",
  },
  {
    title: "Centrico",
    subtitle: "Interior Design Marketplace — 0 to MVP",
    category: "Personal",
    summary:
      "End-to-end 0→1 build of an interior design marketplace connecting homeowners with designers. Led market research, customer journey mapping, MVP scoping, and rapid prototyping using AI code editors — validating the full GTM hypothesis in 2 weeks.",
    highlights: [
      "Ran market sizing and persona research to identify designer discovery as the core pain point",
      "Designed 3 key flows: designer discovery, consultation booking, and portfolio showcase",
      "Built working MVP using AI-assisted rapid prototyping",
    ],
    skills: ["Market Research", "User Research", "Wireframing", "GTM Strategy", "AI Prototyping", "Customer Journey Map"],
    link: "https://interio.combini.app",
    duration: "2 weeks",
    color: "from-pink-500 to-rose-500",
    emoji: "🏠",
  },
  {
    title: "Tata Imagination Challenge",
    subtitle: "National Winner — D2C Strategy, IIM Ranchi",
    category: "Academic",
    summary:
      "Ranked #1 nationally (D2C track) at Tata's flagship business competition during MBA at IIM Ranchi. Developed a full D2C strategy for a Tata brand — covering consumer segmentation, digital channel architecture, pricing model, and go-to-market sequencing.",
    highlights: [
      "Achieved D2C Rank 1 out of national MBA cohort",
      "Delivered consumer segmentation, channel strategy, and P&L model for a Tata brand",
      "Presented to Tata Group senior executives",
    ],
    skills: ["Business Strategy", "D2C", "Market Analysis", "Competitive Strategy", "Storytelling"],
    color: "from-amber-500 to-yellow-500",
    emoji: "🏆",
  },
  {
    title: "Eductive",
    subtitle: "EdTech Mental Health Platform — AI & SEL",
    category: "Academic",
    summary:
      "Designed a digital wellness platform enabling institutions to monitor and improve student mental health using AI-based non-cognitive behavioural insights (SEL). Focused on embedding mental health signals into academic workflows without stigma.",
    highlights: [
      "Researched SEL frameworks and mapped non-cognitive indicators to measurable platform signals",
      "Designed end-to-end user flows for students, counsellors, and institutional admins",
      "Developed pitch deck presented to academic reviewers",
    ],
    skills: ["User Research", "Personas", "User Flow", "Wireframing", "AI Product Design", "EdTech"],
    color: "from-teal-500 to-green-500",
    emoji: "🧠",
  },
];

export const skills = {
  "Product Management": [
    "Product Strategy", "Roadmap Planning", "PRD Documentation", "A/B Testing",
    "Backlog Management", "User Stories", "Feature Prioritization", "Product Analytics",
  ],
  "Design & Research": [
    "User Research", "Market Research", "UX Design", "Wireframing",
    "User Personas", "Journey Mapping", "Stakeholder Management", "Design Thinking",
  ],
  "Data & Technical": [
    "SQL", "MySQL", "Python", "Power BI", "Tableau",
    "Data Analytics", "Statistical Analysis", "ML Model Operationalisation",
  ],
  "Process & Leadership": [
    "Agile / Sprint", "SDLC", "Team Management", "Leadership",
    "Cross-functional Alignment", "Fraud Analytics", "Risk Governance",
  ],
  "Tools": [
    "Figma", "Jira", "Miro", "MixPanel", "Notion",
    "Postman", "Git", "Typeform", "Balsamiq",
  ],
};

export const education = [
  {
    degree: "Master of Business Administration",
    field: "IT Strategy",
    institution: "Indian Institute of Management, Ranchi",
    location: "India",
    period: "2021 – 2023",
    url: "https://www.iimranchi.ac.in/",
    achievement: "D2C Rank 1 · National Winner — Tata Imagination Challenge",
    color: "from-violet-500 to-indigo-600",
  },
  {
    degree: "Bachelor of Technology",
    field: "Mechanical Engineering",
    institution: "Gayatri Vidya Parishad College of Engineering",
    location: "India",
    period: "2013 – 2017",
    url: "https://www.gvpce.ac.in/",
    achievement: "",
    color: "from-orange-400 to-amber-500",
  },
];
