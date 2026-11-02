/**
 * Single source of truth for portfolio content.
 * Edit this file to update any information, project links, or achievements.
 */

export const profile = {
  image: "/images/profile.jpg",
  imageWebp: "/images/profile.webp",
  alt: "Kavya Sri Dadi in NCC cadet uniform presenting at a laptop",
  initials: "KS",
  width: 400,
  height: 400
};

export const personalInfo = {
  name: "Kavya Sri Dadi",
  shortName: "Kavya",
  monogram: "KS",
  title: "Full Stack Developer | Computer Science Student",
  location: "Guntur, Andhra Pradesh, India",
  email: "dadikavyasri7@gmail.com",
  github: "https://github.com/Dadikavyasri",
  linkedin: "https://www.linkedin.com/in/kavya-sri-dadi-257849325/",
  resumeUrl: "/resume.pdf",
  avatarUrl: profile.image,
  avatarWebpUrl: profile.imageWebp,
  profile,
  bio: "Motivated Computer Science student with a strong interest in Full Stack Development and emerging technologies. I enjoy applying my technical skills to real-world projects and continuously growing as a developer through hands-on learning and collaboration.",
  tagline: "Building responsive, modern, and real-world web solutions that bridge creative ideas with solid engineering.",
  heroTyping: [
    "Full Stack Developer",
    "React & Node.js Builder",
    "AI Enthusiast",
    "Problem Solver"
  ],
  status: "Open to Full Stack Developer Internships & Roles",
  availableForWork: true
};

export const stats = [
  {
    label: "CGPA (B.Tech CSE)",
    value: 9.14,
    suffix: "",
    decimals: 2,
    description: "Academic excellence at Narasaraopeta Engineering College"
  },
  {
    label: "Certifications",
    value: 9,
    suffix: "+",
    decimals: 0,
    description: "Verified credentials from Infosys, Google Cloud, and more"
  },
  {
    label: "Industry Internship",
    value: 1,
    suffix: "",
    decimals: 0,
    description: "Infosys Springboard AI Virtual Internship 6.0"
  },
  {
    label: "Featured Projects",
    value: 2,
    suffix: "+",
    decimals: 0,
    description: "Production-ready full-stack and AI applications"
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Narasaraopeta Engineering College, Narasaraopet",
    duration: "2023 — 2027",
    score: "CGPA 9.14",
    status: "In Progress",
    description: "Core coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems, Web Technologies."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "NRI Junior College, Tenali",
    duration: "2021 — 2023",
    score: "97.4%",
    status: "Completed",
    description: "Focused on Mathematics, Physics, and Chemistry foundation."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Viveka Public School, Tenali",
    duration: "2021",
    score: "100%",
    status: "Completed",
    description: "Graduated with perfect academic score."
  }
];

export const beyondCode = {
  title: "Beyond Code & Leadership",
  items: [
    {
      title: "NCC Cadet ('B' Certificate)",
      badge: "National Cadet Corps",
      description: "Appeared for NCC 'B' Certificate exam. Rigorous drills, physical training, annual training camps, discipline, and team leadership."
    },
    {
      title: "Power BI Workshop",
      badge: "Data Analytics",
      description: "Hands-on data visualization, interactive business intelligence dashboards, and analytical reporting."
    },
    {
      title: "Cybersecurity Awareness Program",
      badge: "Security",
      description: "Trained in secure coding best practices, phishing mitigation, and network privacy fundamentals."
    }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    description: "Core languages for algorithmic logic and application backends",
    skills: [
      { name: "Java", level: "Intermediate", icon: "Coffee" },
      { name: "Python", level: "Advanced", icon: "FileCode2" }
    ]
  },
  {
    category: "Web Development",
    icon: "Layout",
    description: "Modern client-side interfaces and scalable server architectures",
    skills: [
      { name: "HTML5", level: "Expert", icon: "FileCode" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Node.js", level: "Intermediate", icon: "Server" },
      { name: "Express.js", level: "Intermediate", icon: "Layers" },
      { name: "MySQL", level: "Intermediate", icon: "Database" }
    ]
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    description: "Essential toolchain for version control and API debugging",
    skills: [
      { name: "VS Code", level: "Proficient", icon: "Terminal" },
      { name: "Git", level: "Proficient", icon: "GitBranch" },
      { name: "GitHub", level: "Proficient", icon: "Github" },
      { name: "Postman", level: "Intermediate", icon: "Send" }
    ]
  },
  {
    category: "CS Fundamentals",
    icon: "BookOpen",
    description: "Core computer science principles and problem-solving",
    skills: [
      { name: "Data Structures & Algorithms", level: "Strong", icon: "Cpu" }
    ]
  },
  {
    category: "Also Exploring",
    icon: "Sparkles",
    description: "Emerging domains and modern business intelligence",
    skills: [
      { name: "Power BI", level: "Learner", icon: "BarChart3" },
      { name: "Generative AI", level: "Learner", icon: "Bot" }
    ]
  }
];

export const experience = [
  {
    role: "Artificial Intelligence Intern",
    organization: "Infosys Springboard (Virtual Internship 6.0)",
    period: "Dec 2025 — Mar 2026",
    type: "Internship",
    location: "Virtual / Remote",
    summary: "Engineered intelligent code review systems applying Python AST to automate defect detection and software quality scoring.",
    bullets: [
      "Engineered an AI-driven Code Reviewer using Python's AST (Abstract Syntax Tree) to parse code structure, detect syntax/logical issues, calculate cyclomatic complexity, and generate quantitative quality scores.",
      "Built a modern Streamlit interface for interactive, real-time code review, syntax highlighting, and automated CSV report generation for audit trails."
    ],
    tech: ["Python", "AST", "Streamlit", "Code Quality Auditing"]
  }
];

export const projectCategories = ["All", "Full Stack", "AI"];

export const projects = [
  {
    id: "rural-road-monitoring",
    title: "Rural Road Infrastructure Monitoring Platform",
    category: "Full Stack",
    tagline: "Citizen-driven grievance reporting and road repair tracking portal",
    description: "A comprehensive full-stack web application designed for reporting and monitoring rural road infrastructure defects. Citizens can file geo-tagged grievances with photos, while authorities manage resolution statuses through an administrative dashboard.",
    highlights: [
      "Full-stack web platform for reporting and monitoring rural road infrastructure issues",
      "RESTful APIs (Express.js + Node.js) for issue reporting, status tracking, and structured data retrieval",
      "Responsive React.js frontend allowing users to submit, view, and monitor complaints in real time"
    ],
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "REST API"],
    github: "https://github.com/Dadikavyasri",
    liveDemo: "", // Empty string hides the Live Demo button automatically
    featured: true,
    accentColor: "from-violet-600 to-indigo-600"
  },
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer: Intelligent Code Review Assistant",
    category: "AI",
    tagline: "Automated Python code inspection and complexity auditor",
    description: "An intelligent developer utility that parses Python codebases using Abstract Syntax Trees (AST). Automatically identifies architectural anti-patterns, calculates cyclomatic complexity, assigns quality ratings, and generates exportable audit sheets.",
    highlights: [
      "Analyzes Python code using AST to detect anti-patterns, compute complexity, and produce quality scores",
      "Interactive Streamlit UI with automated CSV report export for continuous integration reviews"
    ],
    tags: ["Python", "AST", "Streamlit"],
    github: "https://github.com/Dadikavyasri",
    liveDemo: "", // Empty string hides the Live Demo button automatically
    featured: true,
    accentColor: "from-cyan-500 to-blue-600"
  }
];

export const certificationCategories = ["All", "Infosys", "Google", "Others"];

export const certifications = [
  {
    id: 1,
    title: "Infosys Springboard Virtual Internship 6.0: Intelligent Code Review Assistant",
    issuer: "Infosys Springboard",
    category: "Infosys",
    date: "2026",
    badge: "Virtual Internship",
    description: "Completion of intensive virtual internship designing AST-driven Python review tools."
  },
  {
    id: 2,
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    category: "Infosys",
    date: "2025",
    badge: "Foundation",
    description: "Core OOP concepts, exception handling, data structures, and multithreading in Java."
  },
  {
    id: 3,
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    category: "Infosys",
    date: "2025",
    badge: "Foundation",
    description: "Fundamental and intermediate Python programming, modules, and file operations."
  },
  {
    id: 4,
    title: "Programming Fundamentals using Python Part 1",
    issuer: "Infosys Springboard",
    category: "Infosys",
    date: "2025",
    badge: "Programming",
    description: "Algorithm formulation, control structures, and functional decomposition."
  },
  {
    id: 5,
    title: "Programming Fundamentals using Python Part 2",
    issuer: "Infosys Springboard",
    category: "Infosys",
    date: "2025",
    badge: "Programming",
    description: "Advanced data structures, recursive logic, and computational problem solving."
  },
  {
    id: 6,
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    category: "Infosys",
    date: "2024",
    badge: "Beginner",
    description: "Syntax, data types, strings, lists, dictionaries, and standard input/output."
  },
  {
    id: 7,
    title: "L4G: Google's GenAI Course Completion",
    issuer: "Google Cloud",
    category: "Google",
    date: "2025",
    badge: "GenAI",
    description: "Large Language Models, prompt engineering, generative architectures, and AI ethics."
  },
  {
    id: 8,
    title: "NCC 'B' Certificate",
    issuer: "National Cadet Corps",
    category: "Others",
    date: "2024 — 2025",
    badge: "Leadership & Drill",
    description: "Appeared for NCC 'B' exam, demonstrating regimented military training, camps, and leadership."
  },
  {
    id: 9,
    title: "Power BI Certification",
    issuer: "Power BI Workshop",
    category: "Others",
    date: "2025",
    badge: "Analytics",
    description: "Business intelligence modeling, DAX queries, and dashboard visualization design."
  }
];

export const contactInfo = {
  heading: "Let's Build Something Together",
  subheading: "Have an internship opportunity, a project idea, or just want to chat tech? Feel free to reach out directly through any of the channels below.",
  email: "dadikavyasri7@gmail.com",
  linkedin: "https://www.linkedin.com/in/kavya-sri-dadi-257849325/",
  github: "https://github.com/Dadikavyasri",
  location: "Guntur, Andhra Pradesh, India"
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
