export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "AI & Full-Stack" | "Product & BI" | "UI/UX & HCI";
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  focus: string;
  courses: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Masahisa Sekita",
    role: "Product & Business Intelligence Engineer",
    secondaryRole: "Full-Stack & AI Systems Builder",
    status: "Available for new opportunities & collaborations",
    location: "Jakarta, Indonesia & Toronto, Canada",
    summary:
      "Product & Business Intelligence Engineer with a computer science and software engineering foundation from the University of Toronto. Specializing in bridging data analytics, growth intelligence, and modern AI engineering to build intuitive, high-performance digital products.",
    bio: [
      "I operate at the intersection of product strategy, business intelligence, and full-stack software development. With hands-on experience building telemetry pipelines at YOBOLabs and engineering agent-driven applications, I turn complex data into actionable product velocity.",
      "My background blends analytical rigor with modern software engineering—from architecting PostgreSQL/Supabase data schemas and LangChain vector workflows to crafting polished, accessible React/Next.js interfaces."
    ],
    email: "masahisa.sekita@mail.utoronto.ca",
    linkedin: "https://www.linkedin.com/in/masahisa-sekita-57a7a8148/",
    github: "https://github.com/MasahisaSekita",
  },

  stats: [
    { label: "Engineering Domain", value: "Product + BI + AI" },
    { label: "Education Foundation", value: "Univ. of Toronto" },
    { label: "Core Focus", value: "Data Pipelines & Web Apps" },
    { label: "Status", value: "Open to Connect" },
  ],

  experiences: [
    {
      company: "YOBOLabs.ai",
      role: "Product & Business Intelligence Engineer",
      type: "Full-Time",
      location: "Jakarta, Indonesia",
      period: "2024 – Present",
      description:
        "Leading product intelligence, growth telemetry, and analytical infrastructure for an AI-native marketing and customer growth platform.",
      achievements: [
        "Architected automated BI reporting dashboards and data extraction pipelines, cutting manual reporting time by 75% for cross-functional growth teams.",
        "Engineered telemetry pipelines to track user journey drop-offs, conversion funnels, and retention cohorts, directly informing feature roadmaps.",
        "Collaborated with AI researchers and developers to integrate automated intelligence models into user-facing growth workflows.",
        "Partnered with executive leadership to establish north-star metrics and data governance practices across the organization."
      ],
      technologies: [
        "Business Intelligence",
        "Product Analytics",
        "SQL",
        "Python",
        "PostgreSQL",
        "Data Pipelines",
        "Growth Telemetry",
        "Next.js"
      ],
    },
  ] as Experience[],

  education: [
    {
      institution: "University of Toronto (UTSC)",
      degree: "Computer Science & Software Engineering Coursework",
      location: "Toronto, Ontario, Canada",
      period: "Alumni / Student Collaborator",
      focus: "Software Design, Human-Computer Interaction, and Intelligent Systems",
      courses: [
        "CSCC01: Software Engineering I",
        "CSCC10: Human-Computer Interaction",
        "Data Structures & Algorithm Design",
        "Database Management Systems",
        "Web Development & Distributed Systems"
      ],
    },
  ] as Education[],

  projects: [
    {
      id: "course-matrix",
      title: "Course Matrix",
      subtitle: "Intelligent Agentic Course Timetable Builder",
      description:
        "An AI-native timetable-building platform for university students. Features an autonomous conversational agent that understands natural language degree requirements, evaluates schedule preferences, and generates optimal conflict-free timetables using backtracking algorithms.",
      category: "AI & Full-Stack",
      tags: ["React", "Node.js (Express)", "PostgreSQL", "Supabase", "Pinecone", "LangChain", "OpenAI API", "Tailwind CSS"],
      metrics: "Instant automated conflict-free schedule synthesis",
      githubUrl: "https://github.com/UTSC-CSCC01-Software-Engineering-I/Course-Matrix",
      featured: true,
      highlights: [
        "Engineered an agentic workflow using LangChain and Pinecone vector store to query course catalogs semantically.",
        "Implemented a backtracking constraint-satisfaction algorithm to generate collision-free schedules in milliseconds.",
        "Built responsive, interactive calendar views enabling students to lock preferred slots and dynamically recalculate options."
      ],
    },
    {
      id: "bi-growth-telemetry",
      title: "BI & Growth Telemetry Pipeline",
      subtitle: "Multi-Source Analytics & Cohort Engine",
      description:
        "Data ingestion and visualization system built to monitor omnichannel acquisition channels, customer lifetime values, and retention cohorts with automated anomaly alerts.",
      category: "Product & BI",
      tags: ["Python", "SQL", "PostgreSQL", "Data Pipelines", "Metabase / Superset", "REST APIs"],
      metrics: "Real-time funnel conversion & cohort tracking",
      featured: true,
      highlights: [
        "Automated aggregation of multi-platform marketing and user engagement datasets into unified PostgreSQL schemas.",
        "Designed real-time metric dashboards tracking cost per acquisition, cohort retention, and platform usage velocity.",
        "Built automated alerting hooks notifying product teams of notable statistical shifts in funnel conversion rates."
      ],
    },
    {
      id: "yahoo-redesign",
      title: "Yahoo Homepage Redesign (HCI)",
      subtitle: "Modern UX, Accessibility & Information Architecture",
      description:
        "Academic Human-Computer Interaction study and interactive prototype addressing modern content consumption, readability, and WCAG accessibility standards for high-density portals.",
      category: "UI/UX & HCI",
      tags: ["TypeScript", "React", "Figma", "WCAG 2.1", "Tailwind CSS", "User Testing"],
      githubUrl: "https://github.com/MasahisaSekita",
      featured: true,
      highlights: [
        "Conducted heuristic evaluations and usability benchmarking to identify cognitive load bottlenecks in legacy portal layouts.",
        "Re-architected navigation hierarchies and keyboard traversal paths, achieving full WCAG 2.1 AA compliance.",
        "Implemented high-fidelity interactive prototype featuring adaptive reading modes and customizable widget panels."
      ],
    },
  ] as Project[],

  skills: [
    {
      title: "Product & Business Intelligence",
      skills: [
        { name: "Product Analytics" },
        { name: "Data Modeling" },
        { name: "Conversion Funnels" },
        { name: "Cohort Analysis" },
        { name: "KPI Dashboards" },
        { name: "Growth Telemetry" },
        { name: "A/B Testing" },
        { name: "Stakeholder Reporting" }
      ],
    },
    {
      title: "AI & Data Engineering",
      skills: [
        { name: "Python" },
        { name: "SQL (PostgreSQL)" },
        { name: "LangChain" },
        { name: "Pinecone (Vector DB)" },
        { name: "OpenAI API" },
        { name: "Vercel AI SDK" },
        { name: "Data Ingestion & ETL" },
        { name: "Prompt Engineering" }
      ],
    },
    {
      title: "Full-Stack Web Development",
      skills: [
        { name: "TypeScript" },
        { name: "JavaScript (ESNext)" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Node.js & Express" },
        { name: "Tailwind CSS" },
        { name: "Supabase" },
        { name: "REST APIs" }
      ],
    },
    {
      title: "Tools, Cloud & Workflow",
      skills: [
        { name: "Git & GitHub" },
        { name: "Vercel" },
        { name: "Microsoft Azure" },
        { name: "Postman" },
        { name: "Figma" },
        { name: "Docker" },
        { name: "VS Code" },
        { name: "CI/CD Workflows" }
      ],
    },
  ] as SkillCategory[],
};
