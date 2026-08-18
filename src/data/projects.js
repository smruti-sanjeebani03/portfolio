// ============================================================================
// PROJECTS DATA — SYNCHRONIZED WITH OFFICIAL RESUME
// ============================================================================

export const projectStatuses = {
  "completed": {
    label: "COMPLETED",
    badgeBg: "#E8F5E9",
    badgeBorder: "#A5D6A7",
    badgeText: "#2E7D32",
    dotColor: "#4CAF50",
    icon: "🟢"
  },
  "in-progress": {
    label: "IN PROGRESS ♡",
    badgeBg: "#FFF3E0",
    badgeBorder: "#FFCC80",
    badgeText: "#E65100",
    dotColor: "#FF9800",
    icon: "🟡"
  },
  "planned": {
    label: "PLANNED",
    badgeBg: "#E3F2FD",
    badgeBorder: "#90CAF9",
    badgeText: "#1565C0",
    dotColor: "#2196F3",
    icon: "🔵"
  }
};

export const projects = [
  {
    id: "codemate",
    title: "CodeMate – Smart Coding Practice Tracker",
    shortTitle: "CodeMate",
    category: "Full-Stack Coding Practice Tracker & Companion",
    status: "in-progress",
    featured: true,
    accent: "#EFB3C8", // Soft blush pink
    tagline: "Active Development 🌱",
    description: "Developing a full-stack coding practice tracker with user authentication, problem management, daily goals, streak tracking, and progress monitoring using Spring Boot and MongoDB. Building an interactive dashboard featuring coding analytics, visualisations, and a rule-based coding companion to encourage consistent learning.",
    role: "Full-Stack Development · Spring Boot & MongoDB Architecture",
    highlights: [
      "User authentication and secure problem tracking",
      "Daily goals, streak counters, and consistency monitoring",
      "Interactive dashboard with coding analytics and Chart.js visualizations",
      "Rule-based companion logic to encourage daily study habits"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js",
      "REST APIs"
    ],
    github: "https://github.com/smruti-sanjeebani03/codemate",
    demo: "http://dummy-project-preview.internal/codemate",
    demoNote: "Dummy Preview Link (In Development)",
    image: null
  },
  {
    id: "health-hub",
    title: "HealthHub – Centralised Healthcare Management System",
    shortTitle: "HealthHub",
    category: "Web-Based Healthcare Platform",
    status: "completed",
    featured: true,
    accent: "#D98FA9", // Dusty rose
    tagline: "Healthcare Portal 🏥",
    description: "Collaborated in developing a web-based healthcare platform that enables users to search, compare, and review hospitals using filters such as location, specialisation, and ratings. Contributed to backend development by implementing user authentication, database operations, and core application functionalities using PHP and MySQL.",
    role: "Backend Development & Database Schema Design",
    highlights: [
      "Hospital search and comparison filtered by location, specialization, and ratings",
      "Secure user authentication and session management",
      "Relational MySQL database schema design and optimized query execution",
      "Centralized administrative dashboard for hospital listings"
    ],
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github: "https://github.com/smruti-sanjeebani03/HealthHubProject-",
    demo: "http://dummy-project-preview.internal/healthhub",
    demoNote: "Dummy Preview Link (In Development)",
    image: null
  }
];
