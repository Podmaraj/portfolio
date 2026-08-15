/* ─── PERSONAL DETAILS ─── */
export const personalInfo = {
  name: "Podmaraj Boruah",
  role: "Software Engineer & Full-Stack Developer",
  company: "Sanvya Health Pvt. Ltd.",
  location: "Dibrugarh, Assam, India 🇮🇳",
  bio: "Software Engineer with a passion for engineering scalable microservices, healthcare platforms, and AI-driven applications. Experienced in Next.js, Node.js, Python, and cloud-native system architectures.",
  shortBio: "Building high-performance software, enterprise microservices, and solving real-world healthcare and AI engineering problems.",
  email: "podmarajb@gmail.com",
  github: "https://github.com/Podmaraj",
  githubUsername: "Podmaraj",
  linkedin: "https://linkedin.com/in/podmaraj",
  twitter: "https://twitter.com/podmaraj",
  resumeUrl: "#",
}

/* ─── WORK EXPERIENCE ─── */
export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  description: string
  responsibilities: string[]
  technologies: string[]
  isCurrent?: boolean
}

export const workExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer',
    company: 'Sanvya Health Pvt. Ltd.',
    period: '2024 – Present',
    location: 'Assam, India',
    isCurrent: true,
    description: 'Leading full-stack engineering initiatives for enterprise healthcare applications, patient data pipelines, and microservice infrastructure.',
    responsibilities: [
      'Engineered Sanvya HMS, an end-to-end Healthcare Management System handling patient registration, bed management, OPD/IPD workflows, and billing.',
      'Architected the HIPAA-compliant Medical Records Service handling encrypted patient records, DICOM image metadata, and fast data retrieval.',
      'Designed and integrated the Gynecology Module with specialized clinical history tracking, OB/GYN metrics, and diagnostic report generation.',
      'Optimized backend API endpoints in Node.js and PostgreSQL, reducing query latency by 35% across high-volume patient data queries.',
      'Implemented role-based access control (RBAC) and secure JWT authentication across all clinical microservices.',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Tailwind CSS'],
  },
]

/* ─── FEATURED PROJECTS ─── */
export interface Project {
  id: string
  name: string
  tagline: string
  category: 'Enterprise / Backend' | 'Healthcare SaaS' | 'AI & ML' | 'Full-Stack SaaS' | 'Mobile & Web'
  description: string
  overview: string
  keyFeatures: string[]
  stack: string[]
  githubUrl: string
  demoUrl: string
  isFeatured: boolean
  badge?: string
}

export const projects: Project[] = [
  {
    id: 'edgecore',
    name: 'EdgeCore – Enterprise API Gateway',
    tagline: 'High-throughput API Gateway with dynamic rate limiting and analytics',
    category: 'Enterprise / Backend',
    isFeatured: true,
    badge: 'Enterprise',
    description: 'A resilient, high-performance API Gateway designed for microservices architectures. Features intelligent rate limiting, auth token verification, dynamic request routing, and real-time metrics visualizer.',
    overview: 'EdgeCore sits between clients and microservices to centralize authentication, enforce rate limits, handle dynamic routing, and collect request analytics across downstream services.',
    keyFeatures: [
      'Sliding window rate limiting backed by Redis',
      'JWT token validation & header sanitization',
      'Dynamic reverse-proxy routing to microservices',
      'Real-time metrics & response latency monitoring',
      'Built-in health check and automatic circuit breaking'
    ],
    stack: ['Node.js', 'TypeScript', 'Redis', 'Express', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/podmaraj/EdgeCore',
    demoUrl: '#',
  },
  {
    id: 'carbonx',
    name: 'CarbonX – Carbon Credit Trading Platform',
    tagline: 'SaaS platform for verified carbon credit minting and offset trading',
    category: 'Full-Stack SaaS',
    isFeatured: true,
    badge: 'Featured',
    description: 'A modern carbon credit marketplace allowing enterprises to buy, trade, and retire verified carbon offsets with real-time emissions analytics and audit trails.',
    overview: 'CarbonX simplifies ESG compliance for corporations by offering a transparent platform for tracking carbon footprints, acquiring verified offset tokens, and reviewing real-time carbon market price charts.',
    keyFeatures: [
      'Interactive carbon offset trading dashboard',
      'Corporate emissions calculator & target tracker',
      'Real-time price chart visualization with Recharts',
      'Automated ESG report PDF generation',
      'Multi-tenant enterprise access control'
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Recharts'],
    githubUrl: 'https://github.com/podmaraj/CarbonX',
    demoUrl: '#',
  },
  {
    id: 'sanvya-hms',
    name: 'Sanvya HMS – Healthcare Management Platform',
    tagline: 'Comprehensive hospital management system for clinics and medical centers',
    category: 'Healthcare SaaS',
    isFeatured: true,
    badge: 'Production',
    description: 'An integrated hospital management suite streamlining patient intake, bed allocation, pharmacy inventory, OPD/IPD scheduling, and medical billing.',
    overview: 'Sanvya HMS optimizes clinical workflows and hospital operations by providing doctors, nurses, and administrative staff with unified access to patient care pipelines and billing data.',
    keyFeatures: [
      'End-to-end patient registration & appointment queueing',
      'Live bed matrix allocation & ward status monitoring',
      'Automated medical billing & insurance claim generation',
      'Role-based dashboard for Doctors, Nurses, and Admins',
      'Real-time patient updates and prescription logs'
    ],
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Zustand'],
    githubUrl: 'https://github.com/podmaraj/Sanvya-HMS',
    demoUrl: '#',
  },
  {
    id: 'medical-records',
    name: 'Medical Records Service',
    tagline: 'Encrypted microservice for HIPAA-compliant patient health records',
    category: 'Healthcare SaaS',
    isFeatured: true,
    badge: 'Microservice',
    description: 'A secure backend microservice handling patient electronic health records (EHR/EMR), DICOM diagnostic image metadata, and audit-logged health history lookups.',
    overview: 'Designed to satisfy stringent healthcare data privacy requirements, this service encrypts sensitive patient health information at rest and in transit while maintaining sub-50ms query times.',
    keyFeatures: [
      'AES-256 encrypted payload storage at rest',
      'HIPAA audit logging for every record access request',
      'Fast DICOM metadata extraction and indexing',
      'RESTful API with granular field-level permissions',
      'Automated database backups & disaster recovery'
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'AWS S3'],
    githubUrl: 'https://github.com/podmaraj/Medical-Records-Service',
    demoUrl: '#',
  },
  {
    id: 'florique',
    name: 'Florique – E-Commerce & Event Management',
    tagline: 'Modern e-commerce platform for floral styling and event booking',
    category: 'Full-Stack SaaS',
    isFeatured: true,
    badge: 'E-Commerce',
    description: 'An elegant e-commerce application for boutique floral styling, wedding arrangements, and subscription deliveries with automated inventory sync.',
    overview: 'Florique delivers a smooth shopping experience with custom bouquet customizers, delivery date scheduling, instant payment processing, and administrative order management.',
    keyFeatures: [
      'Custom bouquet builder & package configurator',
      'Calendar-integrated event floral booking system',
      'Stripe checkout integration with webhooks',
      'Inventory stock sync & low-stock automated alerts',
      'Responsive, mobile-optimized UI with smooth animations'
    ],
    stack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Express', 'Stripe'],
    githubUrl: 'https://github.com/podmaraj/Florique',
    demoUrl: '#',
  },
  {
    id: 'gynecology-module',
    name: 'Gynecology Module',
    tagline: 'Specialized clinical workflow extension for Sanvya HMS',
    category: 'Healthcare SaaS',
    isFeatured: true,
    badge: 'Clinical',
    description: 'A clinical extension module for Sanvya HMS providing OB/GYN specialists with maternal health tracking, ultrasound image attachments, and trimester milestones.',
    overview: 'Created specifically for OB/GYN practitioners to eliminate generic form constraints and deliver tailored clinical intake, gestational progress charts, and birth record logs.',
    keyFeatures: [
      'Gestational age calculator & delivery date predictor',
      'Trimester milestone tracking & vital trends',
      'Ultrasound report document attachment viewer',
      'Customized OB/GYN prescription templates',
      'Integrated patient consent and historical pregnancy logs'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/podmaraj/Gynecology-Module',
    demoUrl: '#',
  },
  {
    id: 'spam-detection',
    name: 'Spam Detection Classifier & API',
    tagline: 'Machine learning NLP model for real-time spam message filtering',
    category: 'AI & ML',
    isFeatured: true,
    badge: 'Machine Learning',
    description: 'An intelligent Natural Language Processing (NLP) classification engine and REST API that detects spam text, phishing attempts, and unwanted messages with high accuracy.',
    overview: 'Built using TF-IDF feature extraction and Naive Bayes / Ensemble classifiers to protect messaging systems from spam and malicious links in real time.',
    keyFeatures: [
      'TF-IDF text vectorization and token pre-processing',
      'Multi-model comparison (Naive Bayes, SVM, Random Forest)',
      'Sub-20ms inference speed via FastAPI endpoint',
      'Interactive test interface for custom text input',
      'Confidence score output and spam category tagging'
    ],
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/podmaraj/Spam-Detection',
    demoUrl: '#',
  },

  {
    id: 'stayz',
    name: 'Stayz – Rental Ecosystem SaaS',
    tagline: 'End-to-end rental management platform for India',
    category: 'Full-Stack SaaS',
    isFeatured: false,
    description: 'Multi-tenancy rental management platform with landlord & tenant dashboards, real-time notifications, and online property listings.',
    overview: 'Full property ecosystem connecting tenants and landlords with digital leases and rent payment tracking.',
    keyFeatures: ['Multi-tenant landlord dashboard', 'Online payment collection', 'Automated rent reminders'],
    stack: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/podmaraj/Stayz',
    demoUrl: '#',
  },
  {
    id: 'dentalrag',
    name: 'DentalRAG – AI Appointment Chatbot',
    tagline: 'Retrieval-augmented generation chatbot grounded in clinic data',
    category: 'AI & ML',
    isFeatured: false,
    description: 'RAG chatbot answering patient inquiries regarding dental treatments and appointment slots using FAISS vector search.',
    overview: 'Combines vector retrieval with Groq LLM inference to deliver fast, clinic-accurate patient responses.',
    keyFeatures: ['FAISS vector database retrieval', 'Groq LLM fast inference', 'Streamlit frontend'],
    stack: ['Python', 'LangChain', 'Groq API', 'FAISS', 'FastAPI', 'Streamlit'],
    githubUrl: 'https://github.com/podmaraj/DentalRAG',
    demoUrl: '#',
  },
]

/* ─── SKILLS CATEGORIES ─── */
export interface SkillGroup {
  id: string
  title: string
  icon: string
  skills: { name: string; level: number; tags: string[] }[]
}

export const skillCategories: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'TypeScript', level: 90, tags: ['ESNext', 'Interfaces', 'Generics'] },
      { name: 'JavaScript', level: 95, tags: ['Node.js', 'Async/Await', 'ES6+'] },
      { name: 'Python', level: 88, tags: ['FastAPI', 'Pandas', 'ML Tools'] },
      { name: 'Java', level: 85, tags: ['Core Java', 'OOP', 'Collections'] },
      { name: 'SQL', level: 90, tags: ['PostgreSQL', 'Joins', 'Indexing'] },
      { name: 'C / C++', level: 75, tags: ['Data Structures', 'Pointers'] },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 92, tags: ['Hooks', 'Context', 'Performance'] },
      { name: 'Next.js', level: 90, tags: ['App Router', 'SSR', 'Server Actions'] },
      { name: 'Tailwind CSS', level: 95, tags: ['Design Tokens', 'Dark Mode'] },
      { name: 'Framer Motion', level: 85, tags: ['Page Transitions', 'Micro-animations'] },
      { name: 'HTML5 & CSS3', level: 95, tags: ['Flexbox', 'Grid', 'Accessibility'] },
      { name: 'Zustand / Redux', level: 85, tags: ['State Management', 'Immer'] },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 92, tags: ['Event Loop', 'Streams', 'Modules'] },
      { name: 'Express.js', level: 90, tags: ['REST APIs', 'Middleware', 'Auth'] },
      { name: 'NestJS', level: 82, tags: ['Modules', 'Decorators', 'Guards'] },
      { name: 'FastAPI', level: 88, tags: ['Pydantic', 'Async Python', 'OpenAPI'] },
      { name: 'REST & GraphQL', level: 90, tags: ['API Design', 'Swagger', 'Endpoints'] },
      { name: 'Microservices', level: 85, tags: ['API Gateways', 'Service Auth'] },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & ORM',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 90, tags: ['Relational DB', 'Queries', 'Indexing'] },
      { name: 'Prisma ORM', level: 92, tags: ['Migrations', 'Schema', 'Relations'] },
      { name: 'MongoDB', level: 85, tags: ['Aggregation', 'NoSQL', 'Document'] },
      { name: 'Redis', level: 88, tags: ['Caching', 'Pub/Sub', 'Rate Limiting'] },
      { name: 'Room DB', level: 80, tags: ['Android DB', 'LiveData', 'Entities'] },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: 'Cpu',
    skills: [
      { name: 'Docker', level: 85, tags: ['Containers', 'Compose', 'Dockerfile'] },
      { name: 'GitHub Actions', level: 85, tags: ['CI/CD Pipelines', 'Automated Tests'] },
      { name: 'Vercel / Cloud', level: 90, tags: ['Edge Functions', 'Deployments'] },
      { name: 'Git & GitHub', level: 95, tags: ['Branching', 'PR Review', 'CLI'] },
      { name: 'Linux & CLI', level: 88, tags: ['Bash Scripting', 'Nginx', 'SSH'] },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Python ML Tools', level: 85, tags: ['Scikit-learn', 'NumPy', 'Pandas'] },
      { name: 'LangChain & RAG', level: 82, tags: ['FAISS', 'Embeddings', 'Vector Search'] },
      { name: 'Groq & LLM APIs', level: 85, tags: ['Prompt Tuning', 'Fast Inference'] },
      { name: 'Supervised Learning', level: 80, tags: ['Classification', 'Regression'] },
      { name: 'NLP & Text Mining', level: 80, tags: ['TF-IDF', 'Tokenization'] },
    ],
  },
]

/* ─── CERTIFICATIONS & ACHIEVEMENTS ─── */
export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  credentialId?: string
  description: string
  skills: string[]
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Full-Stack Web Engineering',
    issuer: 'Meta & Coursera',
    year: '2024',
    description: 'Comprehensive certification covering modern React, Node.js backend systems, database management, and cloud application deployment.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'API Security'],
  },
  {
    id: 'cert-2',
    title: 'Applied Machine Learning & Data Science',
    issuer: 'DeepLearning.AI',
    year: '2023',
    description: 'Specialized training in supervised learning models, NLP techniques, model evaluations, and Python predictive analytics pipelines.',
    skills: ['Python', 'Scikit-learn', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    id: 'cert-3',
    title: 'Bachelor of Computer Applications (BCA)',
    issuer: 'Dibrugarh University',
    year: '2022 – 2025',
    description: 'Graduated with distinction focusing on software engineering principles, database administration, web technologies, and algorithms.',
    skills: ['Computer Science', 'Software Architecture', 'Data Structures', 'Database Systems'],
  },
]

/* ─── EDUCATION ─── */
export const education = [
  {
    year: '2022 – 2025',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dibrugarh University',
    location: 'Dibrugarh, Assam',
    detail: 'Deep dive into software engineering, relational databases, web development, object-oriented programming, and computer networks.',
  },
  {
    year: '2020 – 2022',
    degree: 'Higher Secondary (Science)',
    institution: 'RD Junior College',
    location: 'Digboi, Assam',
    detail: 'Focus on Mathematics and Computer Science — foundational logic and algorithmic problem solving.',
  },
  {
    year: '2008 – 2020',
    degree: 'Secondary School Education',
    institution: 'Montfort High School',
    location: 'Chabua, Assam',
    detail: 'Foundation years — built curiosity, discipline, and early passion for computing.',
  },
]

/* ─── GITHUB STATS & PINNED REPOS ─── */
export const githubData = {
  username: "Podmaraj",
  profileUrl: "https://github.com/Podmaraj",
  totalRepositories: 24,
  totalContributions: 480,
  pinnedRepos: [
    { name: 'EdgeCore', desc: 'Enterprise API Gateway with rate limiting & metrics', language: 'TypeScript', stars: 14, forks: 4 },
    { name: 'Sanvya-HMS', desc: 'Healthcare Management Suite for hospital workflows', language: 'TypeScript', stars: 22, forks: 6 },
    { name: 'CarbonX', desc: 'Carbon credit offset marketplace & analytics SaaS', language: 'TypeScript', stars: 18, forks: 5 },
    { name: 'Medical-Records-Service', desc: 'HIPAA-compliant encrypted health record microservice', language: 'Python', stars: 16, forks: 3 },
  ]
}

export type RoadStatus = 'active' | 'next' | 'horizon'
export interface RoadItem { status: RoadStatus; title: string; desc: string; items: string[]; progress?: number; fillClass?: string }
export const roadmap: RoadItem[] = [
  { status: 'active', title: 'Full-Stack Mastery', desc: 'Deepening Next.js + Prisma + PostgreSQL stack expertise.', items: ['Next.js App Router', 'Server Actions', 'Prisma Relations', 'SQL Optimization'], progress: 65 },
  { status: 'active', title: 'AI & Machine Learning', desc: 'Building RAG systems, recommendation engines, and exploring LLM integrations.', items: ['LangChain', 'Vector DBs', 'Fine-tuning', 'RAG Pipelines'], progress: 50, fillClass: 'cyan-fill' },
]

export const quotes = [
  'Small commits today create <em>massive systems</em> tomorrow.',
  'Learn deeply. Build publicly. <em>Grow endlessly.</em>',
]
