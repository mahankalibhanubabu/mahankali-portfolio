export const profile = {
  name: "Mahankali Bhanu Babu",
  handle: "bhanu",
  title: "Workload Automation & DevOps Engineer",
  tagline: "Keeping enterprise batch workloads running while the world sleeps.",
  mission:
    "Engineer self-healing automation systems that detect, recover, and prevent failure before humans notice.",
  location: "Hyderabad, Telangana · IN",
  timezone: "Asia/Kolkata (UTC+5:30)",
  availability: "Open to opportunities",
  email: "mahankalibhanubabu232323@gmail.com",
  phone: "+91 9014325589",
  phoneDisplay: "+91 90143 25589",
  linkedin: "https://www.linkedin.com/in/mahankali-bhanubabu-devops-developer/",
  github: "https://github.com/mahankalibhanubabu",
  githubUser: "mahankalibhanubabu",
  resumeUrl: "public/bhanu-resume.pdf",
} as const;

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Miraki Technologies",
    role: "Workload Automation Engineer",
    period: "Aug 2025 — Present",
    location: "Hyderabad, India",
    bullets: [
      "Monitor & manage enterprise batch workloads on AutoSys and Automic UC4 across production — keeping SLAs green 24×7.",
      "Triage job failures through scheduler + Linux log analysis; perform recovery, reruns, and dependency validation by SOP.",
      "Partner with app, DB, and infra teams to resolve incidents and ship change requests across DEV / UAT / PROD.",
      "Support multiple enterprise clients with alert analysis, operational reporting, and continuous process improvements.",
    ],
    stack: ["AutoSys", "Automic UC4", "ITSM", "ServiceNow"],
  },
  {
    company: "Salesforce",
    role: "Salesforce Administrator & Developer — Virtual Intern",
    period: "Jan 2024 — Aug 2024",
    location: "Remote",
    bullets: [
      "Configured Salesforce CRM — users, profiles, permission sets, validation rules, workflows, custom objects, reports, dashboards.",
      "Worked with Flow, Process Builder, and Apex fundamentals across CRM admin, security, automation, customization, and deployment.",
    ],
    stack: ["Salesforce", "Apex", "Flow", "Process Builder", "CRM"],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  challenges: string[];
  roadmap: string[];
  github?: string;
  demo?: string;
  status: "Production" | "Beta" | "R&D";
};

export const projects: Project[] = [
  {
    slug: "automic-self-healing",
    name: "Automic UC4 Self-Healing Job Framework",
    tagline: "Detect, recover, notify — without a human in the loop.",
    problem:
      "Enterprise batch jobs fail unpredictably at 3 AM. On-call engineers spend hours re-running, validating dependencies, and writing the same incident notes.",
    solution:
      "A workflow layer that auto-detects failed jobs, classifies the failure mode, runs predefined recovery actions, and only escalates true unknowns.",
    architecture: [
      "Automic UC4 master orchestrates a recovery sub-workflow per critical job",
      "Linux shell agents perform health checks, log triage, and conditional restarts",
      "Email + ServiceNow hooks for escalation; full execution logging for RCA",
    ],
    stack: ["Automic UC4", "AutoSys", "Linux", "Shell", "Email", "ServiceNow"],
    challenges: [
      "Avoiding infinite restart loops on transient vs structural failures",
      "Making recovery idempotent across cross-system dependencies",
    ],
    roadmap: [
      "ML-based failure classification on historical log corpora",
      "Grafana panel for live recovery success rate",
    ],
    status: "Production",
  },
  {
    slug: "collegepath-ai",
    name: "CollegePath AI",
    tagline: "Personalized AI career roadmaps for students.",
    problem:
      "Students get generic career advice. They need a roadmap grounded in their actual skills, interests, and gaps.",
    solution:
      "Full-stack platform that analyzes resumes, generates personalized skill roadmaps, recommends learning paths, and simulates interviews.",
    architecture: [
      "Next.js + React frontend with streaming AI responses",
      "REST API backed by PostgreSQL via Prisma",
      "OpenAI for recommendation, parsing, and interview simulation",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "OpenAI"],
    challenges: [
      "Designing prompts that produce actionable, role-specific roadmaps",
      "Keeping latency low on multi-step AI flows",
    ],
    roadmap: [
      "Recruiter-side matching",
      "Skill verification via micro-assessments",
    ],
    github: "https://github.com/mahankalibhanu",
    status: "Beta",
  },
  {
    slug: "cicd-pipeline",
    name: "CI/CD Pipeline for CollegePath AI",
    tagline: "Push to main, ship to production — safely.",
    problem:
      "Manual deploys were error-prone and blocked release velocity. Frontend and backend needed independent, reproducible delivery.",
    solution:
      "End-to-end pipeline: Jenkins orchestrates Docker builds, GitHub Actions runs tests, Nginx fronts the production app on AWS.",
    architecture: [
      "Dockerized frontend + backend with multi-stage builds",
      "Jenkins pipelines on AWS EC2; artifacts versioned per commit",
      "Nginx reverse proxy with health checks and zero-downtime swap",
    ],
    stack: ["Jenkins", "Docker", "GitHub Actions", "Nginx", "AWS", "Linux"],
    challenges: [
      "Cache strategy for fast yet reproducible builds",
      "Secrets handling across Jenkins, GitHub, and AWS",
    ],
    roadmap: ["Blue/green deploys", "Auto-rollback on health failure"],
    status: "Production",
  },
];

export const skills = [
  { group: "Workload Automation", score: 92, items: ["AutoSys", "Automic UC4", "SLA Monitoring", "Incident Mgmt", "RCA", "Change Mgmt"] },
  { group: "Linux & Scripting", score: 85, items: ["Linux", "Shell", "Cron", "Log Analysis"] },
  { group: "DevOps & Cloud", score: 80, items: ["Docker", "Jenkins", "GitHub Actions", "AWS", "Nginx", "Ansible", "Kubernetes"] },
  { group: "Backend & Data", score: 72, items: ["SQL", "REST APIs", "MongoDB", "Node.js", "Express"] },
  { group: "Frontend", score: 70, items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { group: "Observability", score: 75, items: ["Grafana", "ServiceNow", "Alerting"] },
] as const;

export const timeline = [
  { year: "2025", title: "Workload Automation Engineer @ Miraki Technologies", kind: "work" as const },
  { year: "2025", title: "B.Sc. Computer Science, MREC — GPA 8.40", kind: "edu" as const },
  { year: "2025", title: "Shipped Automic UC4 Self-Healing Framework", kind: "ship" as const },
  { year: "2024", title: "Salesforce Admin & Developer Virtual Internship", kind: "work" as const },
  { year: "2024", title: "Built CollegePath AI + CI/CD pipeline", kind: "ship" as const },
];

export const stats = [
  { label: "Jobs monitored / day", value: "10k+" },
  { label: "SLA compliance", value: "99.9%" },
  { label: "MTTR reduction", value: "40%" },
  { label: "On-call incidents handled", value: "500+" },
];
