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
  resumeUrl: "https://drive.google.com/file/d/1_yBKsxzEJtJ3VA-E_NVZ2-rIqi5LUk-R/view?usp=sharing",
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
      "Assisted in data management activities, including data import/export, data quality checks, and duplicate record management using Salesforce Data Loader and standard CRM tools.",
      "Created page layouts, custom fields, list views, and Lightning record pages to improve user experience while following Salesforce best practices and security standards."
    ],
    stack: ["Salesforce", "Apex", "Flow", "Process Builder"],
  },
  {
    company: "IoT ESSENSE",
    role: "Vice President",
    period: "Nov 2023 — Nov 2024",
    location: "Hyderabad, India",
    bullets: [
      'Lead "IoT Essense" as Vice President, driving strategic initiatives and fostering collaboration to advance understanding and application of IoT technologies within the community',
      'Spearhead innovative projects and facilitate knowledge exchange among members to explore and implement IoT solutions for addressing real-world challenges',
      'Ensure "IoT Essense" maintains a leading position in IoT developments through effective leadership, engagement, and contribution to technological progress and societal impact'
    ],
    stack: ['IoT', 'Leadership', 'Strategic Planning', 'Project Management'],
  },
  {
    company: "Vinsense Technologies",
    role: "Java Developer — Virtual Intern",
    period: "Nov 2023 - April 2024",
    location: "Remote",
    bullets: [
      "Developed CloudAuth, a secure user management web application using Java and SQL, implementing user registration, authentication, and role-based access control.",
      "Designed and integrated a relational SQL database to securely store and manage user credentials while ensuring data integrity and efficient retrieval.",
      "Implemented core backend functionalities, including CRUD operations, session handling, input validation, and exception handling following Java best practices.",
      "Collaborated in the complete development lifecycle, including application design, development, testing, debugging, and documentation to deliver a functional and secure web application."
    ],
    stack: ['Java', 'SQL', 'Cloud Auth', 'User Management', 'Security'],
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
  status: "Production" | "Beta" | "R&D" | "Completed";
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
    github: "https://github.com/mahankalibhanubabu/CollegePath-AI---Your-Personalized-AI-Career-Coach",
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
  {
    slug: "industrialexpo",
    name: "IndustrialExpo",
    tagline: "Industrial online tender and procurement management platform.",
    problem:
      "Industrial organizations often rely on manual tender submission and procurement processes, causing delays and inefficiencies.",
    solution:
      "Built a centralized web platform for managing tenders, supplier participation, evaluation, and procurement workflows.",
    architecture: [
      "Responsive frontend using HTML, CSS and JavaScript",
      "Tender submission and management modules",
      "Procurement workflow and evaluation interface"
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Designing a simple procurement workflow",
      "Creating an intuitive UI for tender management"
    ],
    roadmap: [
      "Role-based authentication",
      "Tender analytics dashboard"
    ],
    github: "https://github.com/mahankalibhanubabu/IndustrialExpo",
    status: "Completed"
  },

  {
    slug: "movieflix",
    name: "MovieFlix",
    tagline: "Real-time movie discovery platform.",
    problem:
      "Users need a fast and intuitive way to search, filter, and discover movies.",
    solution:
      "Developed a MERN-based movie search application with responsive UI, filtering, and personalized recommendations.",
    architecture: [
      "React frontend",
      "Node.js & Express REST API",
      "MongoDB database"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    challenges: [
      "Optimizing search performance",
      "Managing API responses efficiently"
    ],
    roadmap: [
      "Watchlist",
      "User reviews",
      "AI recommendations"
    ],
    github: "https://github.com/mahankalibhanubabu/movieflix-react-",
    status: "Completed"
  },

  {
    slug: "shopvibe",
    name: "ShopVibe",
    tagline: "Modern MERN-based e-commerce platform.",
    problem:
      "Small businesses require scalable online shopping platforms with secure transactions.",
    solution:
      "Built a complete MERN e-commerce application supporting authentication, payments, shopping cart, order management, and admin dashboard.",
    architecture: [
      "React frontend",
      "Express & Node backend",
      "MongoDB database",
      "Payment gateway integration"
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS"
    ],
    challenges: [
      "Secure authentication",
      "Order workflow management",
      "Payment integration"
    ],
    roadmap: [
      "Inventory analytics",
      "AI product recommendations"
    ],
    github: "https://github.com/mahankalibhanubabu/shopvibe",
    demo: "https://preview--shopvibe.lovable.app/",
    status: "Production"
  },

  {
    slug: "advanced-weather-forecast",
    name: "Advanced Weather Forecast",
    tagline: "Hyper-local weather forecasting platform.",
    problem:
      "Users require accurate real-time weather updates and forecasting from a single dashboard.",
    solution:
      "Created a weather application consuming external APIs to display forecasts, alerts, maps, and historical weather insights.",
    architecture: [
      "React frontend",
      "Node.js backend",
      "REST Weather APIs"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    challenges: [
      "Handling API limits",
      "Real-time weather updates"
    ],
    roadmap: [
      "Radar maps",
      "Location prediction"
    ],
    github: "https://github.com/mahankalibhanubabu/weather-forcasting-",
    status: "Completed"
  },

  {
    slug: "student-dashboard",
    name: "Student Dashboard",
    tagline: "Interactive e-learning management platform.",
    problem: "Students need a centralized platform to manage courses, assignments, attendance, and learning progress while educators require tools to monitor student performance efficiently.",
    solution: "Developed a full-stack student dashboard that enables personalized learning paths, real-time progress tracking, assignment management, and course administration through an intuitive interface.",
    architecture: [
      "React frontend with responsive UI",
      "Node.js & Express REST API",
      "MongoDB for student, course, and assignment data",
      "JWT-based authentication and role management"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/mahankalibhanubabu/student-dashboard",
    challenges: [
      "Implementing role-based access for students and administrators",
      "Synchronizing real-time progress across multiple courses"
    ],
    roadmap: [
      "AI-powered study recommendations",
      "Live classroom integration",
      "Attendance analytics dashboard"
    ],
    status: "Production"
  },

  {
    slug: "eventflow",
    name: "EventFlow",
    tagline: "Smart online event management platform.",
    problem: "Traditional event management involves multiple disconnected tools for registration, ticketing, attendee management, and analytics, making the process inefficient.",
    solution: "Built a scalable MERN-based platform that allows organizers to create events, manage registrations, issue tickets, monitor attendees, and analyze event performance from a single dashboard.",
    architecture: [
      "React frontend with Tailwind CSS",
      "Node.js & Express REST API",
      "MongoDB database",
      "Authentication with secure user sessions",
      "Organizer and attendee dashboards"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://eventflow-react-app.vercel.app/",
    status: "Completed",
    challenges: [
      "Managing ticket availability in real time",
      "Designing separate dashboards for organizers and attendees",
      "Maintaining responsive performance across devices"
    ],
    roadmap: [
      "QR code ticket verification",
      "Payment gateway integration",
      "AI-powered attendee insights"
    ]
  },

  {
    slug: "search-agent",
    name: "Search Agent",
    tagline: "AI-powered research automation.",
    problem: "Professionals spend significant time manually researching information from multiple websites and compiling reports into documents.",
    solution: "Built an AI automation that accepts user queries, performs intelligent web research, extracts relevant information, and automatically generates structured Google Docs reports.",
    architecture: [
      "AI workflow orchestration",
      "Google Search API integration",
      "Information extraction pipeline",
      "Google Docs API for automated report generation"
    ],
    stack: ["AI Automation", "Google Search API", "Google Docs API", "LLM"],
    status: "Production",
    challenges: [
      "Filtering irrelevant search results",
      "Generating well-structured reports automatically",
      "Handling different content sources consistently"
    ],
    roadmap: [
      "PDF and Word export",
      "Citation generation",
      "Multi-language research support"
    ]
  },

  {
    slug: "claude-ai-bot",
    name: "AI Bot",
    tagline: "Conversational AI assistant powered by Claude.",
    problem: "Users require fast, natural language interactions to obtain accurate answers without navigating multiple information sources.",
    solution: "Developed an AI chatbot powered by Claude AI that understands user intent, answers questions, and delivers intelligent conversational responses in real time.",
    architecture: [
      "Claude AI API integration",
      "Prompt engineering layer",
      "Conversation state management",
      "Responsive chat interface"
    ],
    stack: ["Claude AI", "AI Automation", "LLM", "Prompt Engineering"],
    status: "Production",
    challenges: [
      "Reducing response latency",
      "Maintaining conversational context",
      "Improving answer accuracy through prompt engineering"
    ],
    roadmap: [
      "Voice conversations",
      "Multi-model AI support",
      "Knowledge base integration"
    ]
  },

  {
    slug: "brand-monitoring",
    name: "Brand Monitoring Automation",
    tagline: "AI-powered online reputation monitoring.",
    problem: "Tracking online brand mentions across multiple websites manually is time-consuming and often misses important insights.",
    solution: "Created an AI-powered automation that searches the web for brand mentions, analyzes online presence, and generates comprehensive monitoring reports automatically.",
    architecture: [
      "Google Search integration",
      "AI-powered content analysis",
      "Report generation using Google Docs",
      "Automated workflow execution"
    ],
    stack: ["AI Automation", "Google Search API", "Google Docs API", "LLM"],
    status: "Production",
    challenges: [
      "Collecting relevant brand mentions",
      "Summarizing large volumes of information",
      "Generating meaningful business insights"
    ],
    roadmap: [
      "Sentiment analysis",
      "Competitor comparison",
      "Scheduled monitoring reports"
    ]
  },

  {
    slug: "content-summarizer",
    name: "Content Summarizer Agent",
    tagline: "Summarize YouTube videos and web pages using AI.",
    problem: "Reading lengthy articles and watching long videos consumes significant time when users only need the key insights.",
    solution: "Developed an AI agent that processes YouTube videos and website URLs, extracts important information, and generates concise, easy-to-read summaries.",
    architecture: [
      "Content extraction pipeline",
      "NLP-based summarization",
      "LLM-powered text generation",
      "URL processing workflow"
    ],
    stack: ["AI Automation", "NLP", "LLM", "Content Processing"],
    status: "Production",
    challenges: [
      "Handling long-form content efficiently",
      "Preserving important context while summarizing",
      "Supporting different website formats"
    ],
    roadmap: [
      "Multi-language summaries",
      "Audio summaries",
      "Key insights with mind maps"
    ]
  }

];

export const skills = [
  { group: "Workload Automation", score: 92, items: ["AutoSys", "Automic UC4", "SLA Monitoring", "Incident Mgmt", "RCA"] },
  { group: "Linux & Scripting", score: 85, items: ["Linux", "Shell", "Cron", "Log Analysis"] },
  { group: "DevOps & Cloud", score: 80, items: ["Docker", "Jenkins", "GitHub Actions", "AWS", "Nginx", "Ansible", "Kubernetes"] },
  { group: "Backend & Data", score: 72, items: ["SQL", "REST APIs", "MongoDB", "Node.js", "Express"] },
  { group: "Frontend", score: 70, items: ["React", "Next.js", "nest.js", "TypeScript", "Tailwind CSS"] },
  { group: "Observability", score: 75, items: ["Grafana", "ServiceNow", "Alerting", "ITSM"] },
  {
    group: "AI Concepts",
    score: 84,
    items: [
      "Prompt Engineering",
      "Large Language Models (LLMs)",
      "AI Agents",
      "AI Workflows",
      "AI Automation",
      "Retrieval-Augmented Generation (RAG)",
      "Model Context Protocol (MCP)"
    ]
  },
  {
    group: "Tools",
    score: 90,
    items: [
      "Cursor",
      "VS Code",
      "Git",
      "GitHub",
      "GitHub Copilot",
      "Claude",
      "ChatGPT",
      "Gemini",
      "Lindy AI",
      "Lovable",
      "Bolt.new",
      "v0",
      "Trae",
      "Zapier",
      "Postman",
      "Docker",
      "Jenkins",
      "Figma"
    ]
  },
] as const;

export const timeline = [
  { year: "2026", title: "Shipped Automic UC4 Self-Healing Framework", kind: "ship" as const },
  { year: "2025", title: "Workload Automation Engineer @ Miraki Technologies", kind: "work" as const },
  { year: "2025", title: "B.Sc. Computer Science, MREC — GPA 8.40", kind: "edu" as const },
  { year: "2024", title: "Salesforce Admin & Developer Virtual Internship", kind: "work" as const },
  { year: "2024", title: "Vice President @IoT essENSE", kind: "work" as const },
  { year: "2024", title: "Cloudauth: Secure User Management System Internship", kind: "work" as const },
];

export const stats = [
  { label: "Jobs monitored / day", value: "10k+" },
  { label: "SLA compliance", value: "99.9%" },
  { label: "MTTR reduction", value: "40%" },
  { label: "On-call incidents handled", value: "500+" },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  skills: string[];
};

export const certifications: Certification[] = [
  // src/data/profile.ts
  {
    name: "Salesforce Administrator & Developer",
    issuer: "Salesforce",
    date: "2024",
    url: "https://drive.google.com/file/d/1qPz3oFh4oFawDlTa18KYbU7MJWnPCQx-/view",
    skills: [
      "Salesforce CRM",
      "Apex",
      "Flow",
      "Process Builder",
      "Validation Rules",
      "Lightning",
      "Security",
      "Reports & Dashboards"
    ],
  },

  {
    name: "Linux Operating Systems (CS401)",
    issuer: "Saylor Academy",
    date: "2026", // Replace with your actual completion year/month
    url: "https://drive.google.com/file/d/1BDlIQHKBMWj3fWl9kJ0S6SjtwXkXVU1d/view?usp=sharing",
    skills: [
      "Linux",
      "Linux CLI",
      "File System Management",
      "Process Management",
      "Permissions",
      "Shell Commands",
      "Networking Basics",
      "System Administration",
      "System Troubleshooting",
      "Automation"
    ],
  },

  {
    name: "Azure Fundamentals",
    issuer: "Microsoft Azure",
    date: "2024",
    url: "https://drive.google.com/file/d/1bMEJakpgo7mARR6miePnRcXQsSkufdTg/view",
    skills: [
      "Microsoft Azure",
      "Cloud Computing",
      "Virtual Machines",
      "Storage",
      "Networking",
      "Azure Services"
    ],
  },

  {
    name: "Accenture Developer Job Simulation",
    issuer: "Accenture (Forage)",
    date: "2024",
    url: "https://drive.google.com/file/d/1vt0ksA57TH6jgBHREUh5OxY2cCg8R3v0/view",
    skills: [
      "Software Development",
      "Problem Solving",
      "SDLC",
      "Business Analysis",
      "Professional Communication"
    ],
  },

  {
    name: "Generative AI and ChatGPT",
    issuer: "GeeksforGeeks",
    date: "2024",
    url: "https://drive.google.com/file/d/1xrENgqky1eg4N6SKzIQSdNUgBaxqj73-/view",
    skills: [
      "Generative AI",
      "ChatGPT",
      "Prompt Engineering",
      "LLMs",
      "AI Applications"
    ],
  },

  {
    name: "Data Science and Analytics",
    issuer: "HP LIFE",
    date: "2024",
    url: "https://drive.google.com/file/d/1jnn8AnS6oz2A1wuRaeGSYQaVSJvsW02b/view",
    skills: [
      "Data Science",
      "Data Analytics",
      "Data Visualization",
      "Statistics",
      "Business Intelligence"
    ],
  },

  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2024",
    url: "https://drive.google.com/file/d/1-Yf6miG7aFIx69n7HHg9eB77Kbx6AacW/view",
    skills: [
      "Algorithms",
      "Problem Solving",
      "Logical Thinking",
      "Programming"
    ],
  },

  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "2024",
    url: "https://drive.google.com/file/d/1MYZrUgh6-n1TJX6LHEjRYukZAmXyl4BQ/view",
    skills: [
      "Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "Core Java"
    ],
  },

  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "2024",
    url: "https://drive.google.com/file/d/1SK0TjQ1pv08_1CO-LRKBp6cQLwn6uY1s/view",
    skills: [
      "JavaScript",
      "ES6",
      "DOM",
      "Functions",
      "Programming Fundamentals"
    ],
  },

  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    url: "https://drive.google.com/file/d/1K6Sm4xqfgu8IvlFN90tNzGUsOCm6_3zL/view",
    skills: [
      "SQL",
      "Joins",
      "Subqueries",
      "Database Design",
      "Query Optimization"
    ],
  },

  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "2024",
    url: "https://drive.google.com/file/d/1oxNGIpbQfX5xYAwjMkbGZPAH7bzaxh0F/view",
    skills: [
      "Python",
      "Functions",
      "Data Structures",
      "Programming Fundamentals"
    ],
  },

  {
    name: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "2024",
    url: "https://drive.google.com/file/d/15oXXs3tYeCxRubgn73Swehc3amGJ5Rr0/view",
    skills: [
      "Software Engineering",
      "Debugging",
      "Problem Solving",
      "Coding",
      "Programming"
    ],
  },

  {
    name: "Software Engineer",
    issuer: "HackerRank",
    date: "2024",
    url: "https://drive.google.com/file/d/1Jr-TSP_BVX1ORA2LFGCijD4MxgWoKcYv/view",
    skills: [
      "Software Engineering",
      "Data Structures",
      "Algorithms",
      "Programming",
      "System Design Fundamentals"
    ],
  }

];
