export interface Experience {
  company: string;
  role: string;
  period: string;
  type?: string;
  description?: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  description: string;
  impact: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Masahisa Sekita",
    title: "Full-Stack Developer",
    subtitle: "AI Automation, Data Pipelines & Internal Tooling",
    availability: "Available for international & remote opportunities",
    email: "masahisasekita@gmail.com",
    linkedin: "https://www.linkedin.com/in/masahisa-sekita",
    github: "https://github.com/MasahisaSekita",
    summary:
      "Computer Science graduate from the University of Toronto who builds AI-driven automation, high-availability growth systems, and secure full-stack applications for ecommerce and B2B platforms. Proven experience designing Python ETL pipelines, multimodal LLM analytics engines, and internal GTM platforms that convert raw operational data into automated business outcomes. Fluent in TypeScript, Python, Next.js, and SQL, with production expertise spanning BigQuery data architecture, Supabase API integrations, automated fraud detection, and secure systems design.",
    headline:
      "Full-Stack Developer specializing in AI-driven automation, high-availability growth systems, and resilient data pipelines.",
  },

  experience: [
    {
      company: "YOBOLabs.ai",
      role: "Product & Business Intelligence Junior Engineer",
      type: "Full-Time",
      period: "Sep 2026 – Present",
      achievements: [
        "Engineered an automated fraud detection pipeline using BigQuery transaction telemetry and Claude API anomaly analysis, uncovering an active fraud scheme conducted by partner-firm personnel and halting ongoing financial and reputational exposure.",
        "Architected an end-to-end AI video intelligence pipeline using Apify and Gemini API with the Jev decision engine, automating pre-publishing QA to eliminate manual review bottlenecks and prevent Meta policy strikes and branding errors.",
        "Audited AR/AP financial workflows and remediated critical privilege escalation and authentication bypass vulnerabilities, enforcing RBAC, route protection, and rate limiting to secure sensitive financial records from unauthorized access.",
        "Built a high-availability social automation platform using TypeScript, Supabase, and Webhooks for Instagram and Threads, enabling automated keyword-triggered campaigns and saving the GTM team hours of manual daily outreach.",
        "Architected an event-driven serverless JavaScript automation pipeline on Google Cloud infrastructure to synchronize live operational data with real-time dashboards, automating lead scoring to eliminate 15+ hours of manual data triage weekly and accelerate partner handoffs to real time."
      ],
      technologies: [
        "BigQuery",
        "Claude API",
        "Gemini API",
        "Apify",
        "TypeScript",
        "Supabase",
        "Webhooks",
        "Google Cloud Platform",
        "RBAC",
        "ETL"
      ],
    },
    {
      company: "PT. Lajukarsa Global Industri",
      role: "Full Stack Web Developer Intern",
      type: "Internship",
      period: "Jun 2026 – Sep 2026",
      link: "https://thrillwheels.com/",
      achievements: [
        "Built AI-assisted business analytics that automatically summarized operational performance and generated executive insights from live company data.",
        "Architected Python ETL pipelines integrating ERP data through REST APIs and Apache Airflow to power executive dashboards, replacing manual collection of metrics from sales, production, inventory, and AR/AP and saving an estimated 2-3 hours per day of reporting effort.",
        "Developed and deployed a production full-stack web application for the company's Thrill Bicycles brand using React, Next.js, and TypeScript, delivering a responsive customer-facing platform for product catalogs, dealer information, and company news.",
        "Integrated REST APIs across multiple business applications to consolidate fragmented systems into a single unified database, establishing a centralized source of truth for enterprise reporting."
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "Apache Airflow",
        "REST APIs",
        "ERP Integration",
        "SQL"
      ],
    },
    {
      company: "Apache Superset (Open Source)",
      role: "Software Developer",
      type: "Open Source",
      period: "Sep 2025 – Dec 2025",
      link: "https://github.com/apache/superset/pull/35920",
      achievements: [
        "Co-developed a large-scale dependency migration by modernizing legacy Marshmallow implementations across 50+ files, leveraging framework documentation and extensive codebase analysis to ensure compatibility with newer versions.",
        "Navigated and modified Apache Superset's full-stack architecture (Python, Flask, TypeScript, SQL) to update production-critical functionality while maintaining system stability.",
        "Designed and implemented 50+ unit and integration tests using Jest and Python testing frameworks to validate migration correctness and prevent regressions.",
        "Collaborated within a large open-source development environment using GitHub, following code review, version control, and software engineering best practices to deliver non-breaking contributions."
      ],
      technologies: [
        "Python",
        "Flask",
        "TypeScript",
        "SQL",
        "Jest",
        "Marshmallow",
        "CI/CD",
        "GitHub"
      ],
    },
    {
      company: "YOBO",
      role: "Software Development Intern",
      type: "Internship",
      period: "May 2024 – Sep 2024",
      achievements: [
        "Designed and built a CRM platform that replaced manual Excel-based workflows, cutting sales documentation and admin overhead by ~90% and freeing the sales team to focus on customer acquisition.",
        "Engineered an automated onboarding and lead-management pipeline for prospective partners, and executed a zero-downtime blue-green migration of over 18,000 business records into a secure BigQuery database.",
        "Analyzed customer sales data to identify high-value market segments, producing performance reports and promotional campaigns that contributed to an increase in sales revenue of more than $2,000 per week."
      ],
      technologies: [
        "CRM Systems",
        "BigQuery",
        "SQL",
        "Blue-Green Migration",
        "Data Analytics",
        "ETL"
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "course-matrix",
      index: "01",
      title: "AI Academic Planner (Course Matrix)",
      subtitle: "Autonomous RAG Timetable Synthesis Agent",
      category: "AI & Full-Stack",
      period: "2025",
      description:
        "Customer-facing AI scheduling assistant utilizing Retrieval-Augmented Generation (RAG) and vector embeddings to evaluate complex degree requirements and generate personalized course schedules.",
      impact: "End-to-end live autonomous AI agent with constraint-solving backtracking engine",
      tags: ["RAG", "Vector Database", "LangChain", "OpenAI API", "PostgreSQL", "Supabase", "React", "Node.js"],
      githubUrl: "https://github.com/kevin-lann/course-matrix",
      highlights: [
        "Synthesized student academic history with degree catalog embeddings via semantic search.",
        "Built a backtracking constraint-satisfaction algorithm to generate conflict-free schedules in milliseconds.",
        "Delivered a production conversational interface with interactive calendar controls and lockable time slots."
      ],
    },
    {
      id: "apache-superset-migration",
      index: "02",
      title: "Apache Superset Dependency Modernization",
      subtitle: "Large-Scale Open-Source Architecture Refactor",
      category: "Open Source / Core Engineering",
      period: "2025",
      description:
        "Modernized legacy Marshmallow serialization logic across 50+ production files in Apache Superset, ensuring upstream security, version compatibility, and stability across the platform.",
      impact: "50+ core files refactored, 50+ unit/integration tests authored, merged upstream",
      tags: ["Python", "Flask", "TypeScript", "Jest", "SQL", "Open Source", "PR #35920"],
      githubUrl: "https://github.com/apache/superset/pull/35920",
      highlights: [
        "Analyzed complex schema inheritance patterns across Superset's enterprise data exploration codebase.",
        "Implemented comprehensive regression test suites in Jest and pytest.",
        "Navigated multi-stakeholder open-source review workflows to ensure zero breakage."
      ],
    },
    {
      id: "fraud-video-intelligence",
      index: "03",
      title: "Automated Fraud Detection & Video QA Engine",
      subtitle: "Operational Telemetry & Multimodal LLM Intelligence",
      category: "AI Automation & Security",
      period: "2026",
      description:
        "Dual telemetry pipeline at YOBOLabs: combines BigQuery transaction auditing with Claude API anomaly classification to catch fraudulent activities, alongside a Gemini-powered automated video QA engine.",
      impact: "Halted ongoing financial exposure; automated 100% of pre-publishing marketing review",
      tags: ["BigQuery", "Claude API", "Gemini API", "Apify", "Jev Engine", "RBAC", "TypeScript"],
      highlights: [
        "Uncovered fraudulent partner billing schemes in real-time by inspecting transaction anomalies with Claude API.",
        "Automated pre-publishing video validation against strict Meta compliance policies using multimodal Gemini APIs.",
        "Patched privilege escalation attack vectors across AR/AP financial routing."
      ],
    },
    {
      id: "thrill-bicycles-platform",
      index: "04",
      title: "Thrill Bicycles Customer & Dealer Platform",
      subtitle: "High-Availability Full-Stack Production Application",
      category: "Full-Stack Web",
      period: "2026",
      description:
        "Customer-facing web application delivering interactive product catalogs, authorized dealer locators, and real-time company announcements for Thrill Bicycles brand.",
      impact: "Consolidated fragmented multi-ERP databases into a single centralized source of truth",
      tags: ["Next.js", "React", "TypeScript", "Python ETL", "Apache Airflow", "REST APIs"],
      liveUrl: "https://thrillwheels.com/",
      highlights: [
        "Built responsive, mobile-first product exploration experiences with server-side rendering.",
        "Designed Airflow ETL pipelines consolidating multi-department metrics (sales, inventory, AR/AP).",
        "Saved 2-3 hours daily of executive manual reporting overhead."
      ],
    },
    {
      id: "cloud-testing-infra",
      index: "05",
      title: "Cloud Infrastructure & Load Testing Suite",
      subtitle: "Distributed Systems & Automated Testing Protocol",
      category: "Cloud & DevOps",
      period: "2024",
      description:
        "Automated integration and load-testing infrastructure using JUnit and Apache JMeter, paired with continuous Docker deployments on Google Cloud VMs.",
      impact: "Zero-downtime blue-green migration & rigorous performance profiling under peak concurrency",
      tags: ["Google Cloud Platform", "Docker", "JUnit", "JMeter", "CI/CD", "Java", "Firebase"],
      highlights: [
        "Simulated heavy concurrent user load profiles to identify bottleneck API endpoints.",
        "Implemented containerized CD deployment pipeline for store owner interfaces.",
        "Ensured strict reliability thresholds across Firebase and Java backends."
      ],
    },
  ] as Project[],

  education: {
    institution: "University of Toronto",
    degree: "Honors Bachelor of Science in Computer Science",
    period: "September 2021 – April 2026",
  },

  skills: [
    {
      category: "AI & Automation",
      skills: [
        "Retrieval-Augmented Generation (RAG)",
        "Vector Databases",
        "ETL / ELT Pipelines",
        "Gemini API",
        "Claude API",
        "Apache Airflow",
        "Multimodal LLMs",
        "Agentic Workflows"
      ],
    },
    {
      category: "Languages",
      skills: [
        "TypeScript",
        "JavaScript (ESNext)",
        "Python",
        "SQL",
        "Java",
        "Kotlin",
        "C",
        "C++",
        "C#",
        "Assembly"
      ],
    },
    {
      category: "Frameworks & Frontend",
      skills: [
        "React.js",
        "Next.js (App Router)",
        "Node.js",
        "TanStack",
        "Tailwind CSS",
        "Flask",
        "HTML5 / CSS3",
        "Vite"
      ],
    },
    {
      category: "Databases & Security",
      skills: [
        "PostgreSQL",
        "BigQuery",
        "Supabase",
        "Redis",
        "MongoDB",
        "Data Warehousing",
        "RBAC",
        "API Security",
        "Authentication / Authorization"
      ],
    },
    {
      category: "Cloud, DevOps & Testing",
      skills: [
        "Google Cloud Platform (GCP)",
        "Docker",
        "CI / CD Pipelines",
        "GitHub Actions",
        "Linux & Bash",
        "Jest",
        "JUnit",
        "JMeter"
      ],
    },
    {
      category: "Engineering Practices",
      skills: [
        "RESTful APIs",
        "GraphQL",
        "SOAP",
        "Object-Oriented Design",
        "SOLID Principles",
        "Agile / Scrum SDLC",
        "Blue-Green Migrations"
      ],
    },
  ] as SkillGroup[],
};
