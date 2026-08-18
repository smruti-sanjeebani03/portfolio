/**
 * Smruti Sanjeebani — Portfolio Data (Synced with Official Resume)
 * 
 * Centralized data file for personal info, education, skills, certifications, and timeline.
 */

export const personalInfo = {
  name: "Smruti Sanjeebani",
  title: "Aspiring Software Developer",
  descriptor: "Final-year MCA Student · Aspiring Software Developer",
  location: "Bhubaneswar, Odisha",
  phone: "+91 6370320917",
  email: "smrutisanjeebani.41173@gmail.com",
  
  heroHeadline: "I like making things.",
  heroSubline: "Sometimes with code. Sometimes with a pencil. ♡",
  heroIntro: "Final-year MCA student proficient in Java, object-oriented programming, Spring Boot, and problem solving, with hands-on experience through academic and personal projects.",
  
  professionalSummary: "Final-year MCA student with a strong interest in software development and backend technologies. Proficient in Java, object-oriented programming, and problem-solving, with hands-on experience through academic and personal projects. Passionate about building efficient software solutions while continuously improving technical skills.",
  
  aboutHeading: "A little about me ♡",
  aboutParagraphs: [
    "I'm Smruti, an MCA student and aspiring software developer based in Bhubaneswar, Odisha, with a strong passion for software engineering, Java, and backend systems.",
    "I focus on writing clean, structured code in Java and Spring Boot, designing database schemas with MySQL & MongoDB, and continuously practicing Data Structures and Algorithms.",
    "Outside of programming, I enjoy drawing, margin sketching, writing reflections, and learning new concepts with curiosity."
  ],

  // Personality / Live Status Strip
  currently: [
    { 
      icon: "💻", 
      label: "FOCUSING ON", 
      value: "Java + DSA",
      accent: "#EFB3C8" // pink
    },
    { 
      icon: "🌱", 
      label: "BUILDING WITH", 
      value: "Spring Boot & MongoDB",
      accent: "#C9B8DE" // lavender
    },
    { 
      icon: "🎓", 
      label: "EDUCATION", 
      value: "MCA @ ITER (8.33 CGPA)",
      accent: "#D98FA9" // rose
    },
    { 
      icon: "🎨", 
      label: "HOBBIES", 
      value: "Sketching & Doodles",
      accent: "#F8D7E2" // soft blush
    },
    { 
      icon: "🎯", 
      label: "CAREER GOAL", 
      value: "Software Developer Role",
      accent: "#EFB3C8" // pink
    }
  ],

  // Education Details from Official Resume
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "ITER, Siksha 'O' Anusandhan University, Bhubaneswar",
      period: "2025 – 2027",
      cgpa: "8.33",
      status: "Final-Year / Pursuing",
      description: "Dedicated focus on advanced software engineering, backend architecture, data structures, algorithms, and distributed databases."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "ITER, Siksha 'O' Anusandhan University, Bhubaneswar",
      period: "2022 – 2025",
      cgpa: "8.82",
      status: "Graduated with Distinction",
      description: "Core foundations in computer programming, database management systems, object-oriented concepts, and web fundamentals."
    }
  ],

  // Certifications from Official Resume
  certifications: [
    {
      title: "Java Programming and DSA",
      issuer: "Apna College",
      badge: "Core Technical 🌸",
      description: "In-depth training on Java programming, object-oriented principles, algorithmic complexity, and foundational data structures."
    },
    {
      title: "TCS iON Career Edge – Young Professional",
      issuer: "TCS iON",
      badge: "Professional Skills 🎀",
      description: "Comprehensive professional readiness certification covering communication, business etiquette, problem-solving, and foundational IT concepts."
    }
  ],

  // Social & Contact
  socialLinks: {
    email: "smrutisanjeebani.41173@gmail.com",
    phone: "+91 6370320917",
    location: "Bhubaneswar, Odisha",
    github: "https://github.com/smruti-sanjeebani03",
    linkedin: "https://www.linkedin.com/in/smruti-sanjeebani/",
    resumePdfUrl: "https://drive.google.com/file/d/1VBHZjnbeBei16qsVfsXuM6XtluwdbRe1/preview",
    googleDriveResumeUrl: "https://drive.google.com/file/d/1VBHZjnbeBei16qsVfsXuM6XtluwdbRe1/preview",
    resumeUrl: "#resume"
  }
};

/**
 * Technical Toolbox Data — Matched with Resume Categories
 */
export const skillsHierarchy = {
  heading: "My tech toolbox ♡",
  subheading: "Structured directly from my technical background, projects, and coursework.",
  tiers: [
    {
      tierId: "current-focus",
      title: "CORE & BACKEND",
      subtitle: "Primary programming languages & backend frameworks",
      icon: "Sparkles",
      badge: "Primary Focus 🎀",
      highlight: true,
      color: "#EFB3C8",
      bgColor: "#FFF1F5",
      borderColor: "#EFB3C8",
      items: [
        { name: "Java", note: "Core OOP, Collections & DSA" },
        { name: "Spring Boot", note: "REST APIs & backend architecture" },
        { name: "REST APIs", note: "Endpoint design & integration" },
        { name: "PHP", note: "Web backend & authentication" },
        { name: "Python (Basics)", note: "Scripting & fundamentals" }
      ]
    },
    {
      tierId: "databases-tools",
      title: "DATABASES & TOOLS",
      subtitle: "Relational & document databases and developer tools",
      icon: "Server",
      badge: "Applied in Projects 🌸",
      highlight: false,
      color: "#C9B8DE",
      bgColor: "#FAF5FF",
      borderColor: "#D8CEE8",
      items: [
        { name: "MySQL", note: "Relational database queries & schemas" },
        { name: "MongoDB", note: "Document store for CodeMate" },
        { name: "Git", note: "Version control & branching" },
        { name: "GitHub", note: "Repositories & project hosting" },
        { name: "Visual Studio Code", note: "Primary code editor" }
      ]
    },
    {
      tierId: "web-foundations",
      title: "WEB TECHNOLOGIES",
      subtitle: "Frontend markup, styling, and interactive UI components",
      icon: "Layers",
      badge: "Frontend & UI 🌷",
      highlight: false,
      color: "#D98FA9",
      bgColor: "#FFF9FA",
      borderColor: "#F0D3DE",
      items: [
        { name: "HTML", note: "Semantic structure" },
        { name: "CSS", note: "Layouts, Flexbox & styling" },
        { name: "JavaScript", note: "DOM manipulation & events" },
        { name: "Chart.js", note: "Visual analytics dashboards" }
      ]
    }
  ]
};

/**
 * Journey Timeline — Accurate Academic & Project Milestones
 */
export const journeyTimeline = [
  {
    step: "01",
    title: "BCA (CGPA: 8.82)",
    subtitle: "ITER, Siksha 'O' Anusandhan University",
    tag: "2022 – 2025",
    desc: "Graduated with 8.82 CGPA. Built strong foundations in computer programming, database theory, data structures, and software principles."
  },
  {
    step: "02",
    title: "HealthHub Project",
    subtitle: "Centralised Healthcare System",
    tag: "PHP & MySQL Build",
    desc: "Collaborated in developing a web platform enabling users to search and review hospitals with filters, implementing user authentication and database operations."
  },
  {
    step: "03",
    title: "MCA (CGPA: 8.33)",
    subtitle: "ITER, Siksha 'O' Anusandhan University",
    tag: "2025 – 2027",
    desc: "Currently in final year (8.33 CGPA). Advancing knowledge in backend architectures, system design, enterprise Java, and scalable databases."
  },
  {
    step: "04",
    title: "Java & DSA Mastery",
    subtitle: "Apna College Certification",
    tag: "Algorithmic Practice",
    desc: "Rigorous practice of data structures, problem-solving, and object-oriented paradigms in Java with Apna College certification."
  },
  {
    step: "05",
    title: "CodeMate Tracker",
    subtitle: "Smart Coding Companion",
    tag: "Java · Spring Boot · MongoDB",
    desc: "Developing a full-stack coding practice tracker with streak tracking, goal analytics, Chart.js visualizations, and a rule-based companion."
  },
  {
    step: "06",
    title: "TCS iON Career Edge",
    subtitle: "Young Professional Certification",
    tag: "Professional Skills 🎀",
    desc: "Completed industry-readiness training covering communication, workplace problem solving, and professional development."
  },
  {
    step: "07",
    title: "Software Developer Role",
    subtitle: "Entry-Level Opportunities",
    tag: "Active Goal 🎯",
    desc: "Actively seeking full-time software developer / backend roles where I can contribute Java, Spring Boot, and database skills."
  },
  {
    step: "✨",
    title: "Next chapter...",
    subtitle: "Continuous Growth",
    tag: "Always Curious ♡",
    desc: "Building impactful software, writing clean code with care, and collaborating with engineering teams."
  }
];
