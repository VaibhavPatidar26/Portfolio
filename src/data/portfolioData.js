export const personalInfo = {
  name: "Vaibhav Patidar",
  tagline: "Full-Stack Engineer & Distributed Systems Builder",
  title: "Building high-throughput real-time platforms & intelligent web applications.",
  bio: "Computer Science undergraduate (2023–2027) with deep experience engineering production-grade distributed architectures, high-frequency paper trading engines, real-time WebRTC/WebSocket communications, and scalable AI SaaS applications.",
  email: "vaibhavpatidar22012005@gmail.com",
  phone: "+91 7974357592",
  location: "Indore / Bhopal, India",
  status: "Open for Software Engineering Internships & Roles",
  github: "https://github.com/VaibhavPatidar26",
  linkedin: "https://www.linkedin.com/in/vaibhav-patidar-227338297/?isSelfProfile=true",
  leetcode: "https://leetcode.com/u/Vaibhav_patidar22/",
  resumePdf: "/resume.pdf",
  stats: [
    { label: "Algorithmic Focus", value: "DSA", subtext: "LeetCode & CodeChef" },
    { label: "Full-Stack & Systems Projects", value: "3+", subtext: "Production architectures" },
    { label: "Production Internships", value: "1", subtext: "TurfBooking.in (Frontend)" },
    { label: "Graduation Year", value: "2027", subtext: "UIT RGPV (CSE)" },
  ],
};

export const projects = [
  {
    id: "tradeforge",
    name: "TradeForge",
    badge: "Featured Systems Platform",
    tagline: "Real-Time Paper Trading & Asynchronous Execution Engine",
    description:
      "A high-concurrency simulated trading ecosystem engineered with low-latency Redis Pub/Sub market data pipelines, WebSocket streaming, and asynchronous order execution with background workers decoupled from the HTTP cycle. Completely containerized using Docker and deployed on AWS EC2.",
    highlights: [
      "Containerized the complete application stack using Docker & Docker Compose, deployed on AWS EC2 with Nginx as a reverse proxy.",
      "Asynchronous order execution via BullMQ processing Market, Limit, and GTT order pipelines decoupled from the HTTP request cycle.",
      "Real-time stock price pipeline using Redis Pub/Sub & WebSockets for low-latency, tick-level price broadcasts.",
      "Idempotent transactional balance and multi-asset holding updates to guarantee consistency.",
    ],
    stack: ["TypeScript", "Node.js", "Express.js", "MySQL", "Redis", "BullMQ", "React", "Docker", "AWS EC2", "Nginx"],
    architecture: {
      type: "Event-Driven & Worker Queues",
      latency: "< 25ms tick latency",
      concurrency: "Decoupled HTTP / Worker",
    },
    demoUrl: "https://trade-forge-kappa.vercel.app/",
    githubUrl: "https://github.com/VaibhavPatidar26",
    status: "Live & Deployed",
    category: "Distributed Systems & Fintech",
  },
  {
    id: "wechat",
    name: "WeChat",
    badge: "Real-Time Communication",
    tagline: "Scalable Chat Engine with WebRTC Audio/Video & Redis Cache",
    description:
      "Full-stack real-time collaboration engine supporting instant 1-on-1 and group messaging, WebRTC peer-to-peer voice/video calling, and Redis session & message caching.",
    highlights: [
      "Engineered real-time socket channels for immediate message delivery, typing indicators, and presence.",
      "Integrated WebRTC mesh peer-to-peer signaling for voice and HD video streams without intermediary media relays.",
      "Layered Redis caching in front of MongoDB to accelerate frequently fetched conversations and channel states.",
      "Protected REST APIs with strictly validated JWT token pipelines and cryptographic payload verification.",
    ],
    stack: ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB", "WebSockets", "WebRTC", "Redis", "JWT"],
    architecture: {
      type: "P2P WebRTC & Pub/Sub Socket Mesh",
      latency: "Sub-second sync",
      concurrency: "Multi-room group calls",
    },
    demoUrl: null,
    githubUrl: "https://github.com/VaibhavPatidar26/ChatApp.git",
    status: "Open Source Repository",
    category: "Real-Time & Networking",
  },
  {
    id: "imagify",
    name: "Imagify",
    badge: "AI SaaS Platform",
    tagline: "AI Generation SaaS with Cloudinary Pipeline & Razorpay Gateway",
    description:
      "Production-ready MERN AI SaaS integrating multiple generative models for background removal, text-to-image synthesis, and high-fidelity restoration with credit-tier monetization.",
    highlights: [
      "Integrated multi-provider AI APIs for custom image synthesis, instant background stripping, and upscaling.",
      "Built end-to-end Razorpay webhook-verified payment flows and transactional user credit ledger balances.",
      "Architected media storage with Cloudinary featuring on-the-fly transformations and signed uploads.",
      "Designed an interactive dynamic UI utilizing React, Tailwind CSS, and Framer Motion spring physics.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Razorpay", "Tailwind CSS", "Framer Motion"],
    architecture: {
      type: "Cloud Microservice & Webhook Ledger",
      latency: "Streaming async responses",
      concurrency: "Credit-gated rate limits",
    },
    demoUrl: "https://imagify-five-bice.vercel.app/",
    githubUrl: "https://github.com/VaibhavPatidar26",
    status: "Live Production SaaS",
    category: "AI & Full-Stack SaaS",
  },
];

export const experience = [
  {
    role: "Frontend Development Intern",
    company: "TurfBooking.in",
    duration: "Nov 2024 – Dec 2024",
    location: "Remote / Hybrid",
    type: "Internship",
    description:
      "Collaborated on building commercial booking interfaces, streamlining slot reservation states, and optimizing production bundles for fast user experience.",
    contributions: [
      "Engineered modular React.js UI systems utilizing reusable components, props validation, and strict state decoupling.",
      "Integrated dynamic RESTful booking APIs into interactive slot tables and calendars.",
      "Configured build pipelines, managed environment variables, and assisted with production deployment cycles.",
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "REST APIs", "Tailwind CSS", "Vite", "Git"],
  },
];

export const skillMatrix = [
  {
    category: "Languages & Core",
    icon: "code",
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
    accent: "text-blue-400",
    skills: [
      { name: "C++", level: "Advanced", desc: "DSA & low-level memory thinking" },
      { name: "Java", level: "Proficient", desc: "OOP principles & system design" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, event loops, V8" },
      { name: "TypeScript", level: "Advanced", desc: "Strict type models & generics" },
      { name: "Python", level: "Intermediate", desc: "Scripting & AI automation" },
      { name: "SQL", level: "Advanced", desc: "Complex joins, indexing, ACID" },
    ],
  },
  {
    category: "Backend & Systems",
    icon: "server",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    accent: "text-emerald-400",
    skills: [
      { name: "Node.js & Express", level: "Advanced", desc: "REST microservices & middleware" },
      { name: "Redis", level: "Advanced", desc: "Pub/Sub, in-memory cache, locks" },
      { name: "BullMQ", level: "Proficient", desc: "Job queues & decoupled workers" },
      { name: "WebSockets", level: "Advanced", desc: "Bidirectional streaming pipelines" },
      { name: "WebRTC", level: "Proficient", desc: "Peer-to-peer audio & video mesh" },
      { name: "Prisma ORM", level: "Proficient", desc: "Type-safe database abstraction" },
      { name: "REST APIs & JWT", level: "Advanced", desc: "Secured auth & state flows" },
    ],
  },
  {
    category: "Frontend & Interfaces",
    icon: "monitor",
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30",
    accent: "text-purple-400",
    skills: [
      { name: "React 19", level: "Advanced", desc: "Hooks, concurrent features, architecture" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Design systems & responsive layouts" },
      { name: "Framer Motion", level: "Advanced", desc: "Fluid spring animations & gestures" },
      { name: "Three.js / WebGL", level: "Intermediate", desc: "Interactive 3D geometry & shaders" },
      { name: "Modern Component UI", level: "Advanced", desc: "Accessible headless & Radix/shadcn patterns" },
    ],
  },
  {
    category: "Databases & Cloud Infrastructure",
    icon: "database",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    accent: "text-amber-400",
    skills: [
      { name: "MySQL", level: "Advanced", desc: "Relational modeling & transactions" },
      { name: "MongoDB", level: "Advanced", desc: "Document schemas & aggregation" },
      { name: "Docker & Compose", level: "Proficient", desc: "Containerized reproducible stacks" },
      { name: "AWS (EC2)", level: "Proficient", desc: "Cloud instances, security groups" },
      { name: "Nginx", level: "Proficient", desc: "Reverse proxying & SSL termination" },
      { name: "Vercel & Render", level: "Advanced", desc: "CI/CD & edge edge deployment" },
    ],
  },
  {
    category: "CS Foundations & Problem Solving",
    icon: "cpu",
    color: "from-rose-500/20 to-pink-500/10 border-rose-500/30",
    accent: "text-rose-400",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced", desc: "Arrays, Graphs, DP, Trees" },
      { name: "Object-Oriented Programming", level: "Strong", desc: "SOLID principles & patterns" },
      { name: "Database Management Systems", level: "Strong", desc: "Normalization, Concurrency control" },
      { name: "Operating Systems & Concurrency", level: "Solid", desc: "Processes, Threads, Mutexes" },
      { name: "Git & Version Control", level: "Advanced", desc: "Workflows, rebasing, bisect" },
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "University Institute of Technology, RGPV",
  duration: "2023 – Expected 2027",
  highlights: [
    "Core curriculum: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, OOP, Software Engineering.",
    "Active member of tech clubs, competitive coding communities, and open-source software building.",
  ],
  certifications: [
    {
      title: "MERN Stack Web Development",
      issuer: "Udemy",
      focus: "JavaScript, React.js, Node.js, Express.js, MongoDB",
    },
    {
      title: "SQL and Database Fundamentals",
      issuer: "Oracle",
      focus: "SQL, RDBMS, Database Design, Relational vs Non-Relational Architecture",
    },
  ],
};
