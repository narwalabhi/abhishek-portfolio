const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

export const navigation = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const profile = {
  name: "Abhishek Narwal",
  initials: "AN",
  headline: "Full-Stack Software Engineer",
  summary:
    "I build distributed systems, payment infrastructure, and user-facing products with Java, Spring Boot, React, AWS, and Kafka.",
  location: "Waterloo, Ontario",
  email: "anarwal500@gmail.com",
  phone: "+1 (458) 384-9472",
  phoneHref: "tel:+14583849472",
  portrait: `${import.meta.env.BASE_URL}images/abhishek-narwal.jpg`,
  portraitAlt: "Portrait of Abhishek Narwal",
  availability: "Open to work",
  resumeUrl,
  heroTags: ["Java", "Spring Boot", "React", "AWS", "Kafka", "Kubernetes"],
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anarwal500/" },
  { label: "GitHub", href: "https://github.com/narwalabhi" },
  { label: "HackerRank", href: "https://www.hackerrank.com/anarwal500" },
] as const;

export const impactStats = [
  {
    value: "5+",
    label: "Years of experience",
    detail: "Across backend platforms and full-stack products",
  },
  {
    value: "10K+",
    label: "Users served",
    detail: "Through real-time AI voicemail experiences",
  },
  {
    value: "40%",
    label: "Faster deployments",
    detail: "Through reliable CI/CD and observability",
  },
  {
    value: "60%",
    label: "Faster detection",
    detail: "Through automated monitoring and alerting",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: readonly string[];
  technologies: readonly string[];
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoSurface: "light" | "dark";
};

export const experience: readonly Experience[] = [
  {
    company: "Ticketmaster / Live Nation Entertainment",
    role: "Senior Software Engineer",
    period: "May 2025 – June 2026",
    location: "Gurgaon, India",
    highlights: [
      "Architected a pluggable schema-validation library for Spring-based producers across Kafka and AWS SQS, reducing invalid messages and improving extensibility for 5+ downstream services.",
      "Built a card-present payment gateway for POS systems with Spring Boot, Kafka, Docker, and AWS for high-reliability in-venue payment processing.",
      "Engineered distributed services with fault tolerance, structured logging, Kubernetes, and CI/CD pipelines, reducing deployment cycle time by 40%.",
      "Partnered with global teams on service contracts, API standards, and broker configuration for mission-critical ticketing infrastructure.",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "AWS SQS", "Kubernetes", "Docker"],
    logo: `${import.meta.env.BASE_URL}images/companies/ticketmaster.svg`,
    logoAlt: "Ticketmaster logo",
    logoWidth: 351,
    logoHeight: 47,
    logoSurface: "light",
  },
  {
    company: "blackNgreen",
    role: "Software Engineer",
    period: "Nov 2021 – Apr 2025",
    location: "Gurgaon, India",
    highlights: [
      "Designed a transactions-per-second control framework for operator-specific ActiveMQ queues using Spring MVC, reducing message-processing failures by about 30%.",
      "Built an AI voicemail assistant with Azure STT/TTS, NLP summarization, and WhatsApp and Telegram delivery for 10,000+ users with sub-5-second latency.",
      "Developed a distributed monitoring and alarm platform with threshold-based anomaly detection and call, Telegram, and email alerts, reducing incident detection time by 60%.",
      "Improved subscription and billing reliability with idempotent processing, reducing payment latency by 25%.",
      "Built a campaign scheduling platform with Quartz, priority queues, failover recovery, and concurrency control for distributed execution.",
      "Delivered a football prediction IVR game across telecom operators with billing APIs and retry logic, sustaining 99.5% uptime during peak traffic.",
    ],
    technologies: ["Java", "Spring Boot", "ActiveMQ", "Azure", "Quartz", "REST APIs"],
    logo: `${import.meta.env.BASE_URL}images/companies/blackngreen.png`,
    logoAlt: "blackNgreen logo",
    logoWidth: 270,
    logoHeight: 113,
    logoSurface: "dark",
  },
  {
    company: "Capgemini",
    role: "Full-Stack Java Developer Intern",
    period: "Jan 2021 – Apr 2021",
    location: "Bengaluru, India",
    highlights: [
      "Designed a railway reservation system with Spring Boot microservices, Spring Cloud Gateway, and MongoDB for search, booking, seat visualization, and ticket generation.",
      "Built React admin and customer applications with JWT authentication for real-time train management and booking flows.",
      "Automated PDF ticket generation and email delivery with iText and SMTP.",
    ],
    technologies: ["Spring Boot", "Spring Cloud", "MongoDB", "React", "JWT", "iText"],
    logo: `${import.meta.env.BASE_URL}images/companies/capgemini.png`,
    logoAlt: "Capgemini logo",
    logoWidth: 181,
    logoHeight: 40,
    logoSurface: "light",
  },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  highlights: readonly string[];
  technologies: readonly string[];
  metric?: string;
  links?: readonly ProjectLink[];
};

export const featuredProjects: readonly Project[] = [
  {
    name: "AI Voicemail Assistant",
    category: "AI & Messaging",
    description:
      "A modular platform that converts voice messages into concise text and delivers summaries across messaging channels.",
    highlights: [
      "Spring Boot services for speech recognition and NLP summarization",
      "Sub-5-second end-to-end processing for 10,000+ subscribers",
    ],
    technologies: ["Java", "Spring Boot", "Azure STT/TTS", "NLP", "WhatsApp API"],
    metric: "10K+ users · sub-5s latency",
  },
  {
    name: "Smart Monitoring & Alarm System",
    category: "Reliability",
    description:
      "A distributed observability service that detects anomalies, evaluates thresholds, and routes actionable alerts.",
    highlights: [
      "Threshold-based anomaly detection across microservices",
      "Voice, Telegram, and email alert routing with incident history",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "Telegram API", "Email"],
    metric: "60% faster MTTD",
  },
  {
    name: "Campaign Scheduling System",
    category: "Distributed Systems",
    description:
      "A resilient job orchestration platform for executing prioritized campaigns across distributed nodes.",
    highlights: [
      "Priority queues with failover recovery and concurrency control",
      "Real-time dashboard for metrics and execution history",
    ],
    technologies: ["Quartz", "Spring Boot", "Distributed Queues", "Monitoring"],
  },
  {
    name: "Railway Reservation System",
    category: "Full-Stack",
    description:
      "A microservices-based booking platform with dedicated administration and customer experiences.",
    highlights: [
      "Train search, booking, seat visualization, and PDF ticket generation",
      "JWT-authenticated React portals backed by Spring Cloud services",
    ],
    technologies: ["Spring Boot", "Spring Cloud Gateway", "MongoDB", "React", "JWT"],
  },
  {
    name: "Developer Portfolio",
    category: "Frontend Engineering",
    description:
      "A fast, accessible single-page portfolio built with a modern component and content architecture.",
    highlights: [
      "Responsive dark interface with reduced-motion support",
      "Data-driven content, smoke tests, and automated GitHub Pages builds",
    ],
    technologies: ["React 19", "TypeScript", "Vite", "Vitest", "GitHub Actions"],
    metric: "Responsive · accessible · fast",
  },
];

export const earlierProjects: readonly Project[] = [
  {
    name: "Foliyoo",
    category: "Android",
    description:
      "A transport aggregation application that simplifies packing, shifting, and moving with vehicle selection and transparent ride fares.",
    highlights: ["Three-step booking flow", "Role-specific Android experience"],
    technologies: ["Android", "Java"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.teceads.foliyooDevbrat&hl=en",
      },
      { label: "Website", href: "https://www.foliyoo.com/" },
    ],
  },
  {
    name: "Foliyoo Driver",
    category: "Android",
    description:
      "A digital platform connecting customers, transporters, and drivers to coordinate goods movement from pickup to destination.",
    highlights: ["Driver dashboard", "Bookings and job tracking"],
    technologies: ["Android", "Java"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.foliyoo.driver&hl=en",
      },
    ],
  },
  {
    name: "PostApp",
    category: "Android",
    description:
      "A social blogging application with posts, likes, comments, and profile experiences powered by Firebase.",
    highlights: ["Realtime Firestore updates", "Profiles and social interactions"],
    technologies: ["Android", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/narwalabhi/PostApp" }],
  },
  {
    name: "WhatsApp Clone",
    category: "Android",
    description:
      "A real-time messaging application demonstrating authentication, conversations, and Firebase-backed updates.",
    highlights: ["Realtime messaging", "Firebase authentication"],
    technologies: ["Android", "Firebase"],
    links: [{ label: "GitHub", href: "https://github.com/narwalabhi/Whtssapp-clone" }],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "Shell"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Node.js", "Express"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Responsive UI", "Accessibility", "Vite"],
  },
  {
    title: "Messaging",
    skills: ["Apache Kafka", "AWS SQS", "ActiveMQ", "Event-Driven Design"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions"],
  },
  {
    title: "Data & Architecture",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Microservices", "Distributed Systems", "REST APIs"],
  },
] as const;

export const education = [
  {
    degree: "MEng, Systems Design Engineering (AI & ML)",
    institution: "University of Waterloo",
    location: "Waterloo, Ontario",
    period: "Sept 2026 – Expected Oct 2027",
    detail: "Focusing on systems design, artificial intelligence, and machine learning.",
    logo: `${import.meta.env.BASE_URL}images/education/university-of-waterloo.png`,
    logoAlt: "University of Waterloo logo",
    logoWidth: 1050,
    logoHeight: 421,
  },
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "India",
    period: "Aug 2017 – Jun 2021",
    detail: "CGPA: 7.12",
    logo: `${import.meta.env.BASE_URL}images/education/lovely-professional-university.svg`,
    logoAlt: "Lovely Professional University logo",
    logoWidth: 246,
    logoHeight: 151,
  },
] as const;

export const certifications = [
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/anarwal500",
  },
] as const;
