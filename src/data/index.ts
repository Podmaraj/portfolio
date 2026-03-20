/* ─── PROJECTS ─── */
export interface Project {
  id: string; category: string; name: string; type: string
  description: string; stack: string[]
  archUrl: string; demoUrl: string
}
export const projects: Project[] = [
  {
    id: '01', category: 'SaaS Platform', name: 'Stayz', type: 'Full Rental Ecosystem SaaS',
    description: 'End-to-end rental management platform for India. Multi-tenancy, real-time notifications, landlord & tenant dashboards, payments, and property management. Built to scale.',
    stack: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Prisma', 'PostgreSQL', 'GitHub Actions'],
    archUrl: '#', demoUrl: '#',
  },
  {
    id: '02', category: 'AI / NLP', name: 'DentalRAG', type: 'Dental Appointment RAG Chatbot',
    description: 'Retrieval-augmented generation chatbot for dental clinics. Patients ask questions about appointments, treatments, and dental health — answers are grounded in clinic data using vector search.',
    stack: ['Python', 'LangChain', 'Groq API', 'FAISS', 'FastAPI', 'Streamlit'],
    archUrl: '#', demoUrl: '#',
  },
  {
    id: '03', category: 'AI / ML', name: 'AI Recommender', type: 'AI-Based Recommendation System',
    description: 'Intelligent recommendation engine using collaborative and content-based filtering. Serves personalized suggestions with real-time inference and A/B testing support.',
    stack: ['Python', 'Scikit-learn', 'TensorFlow', 'FastAPI', 'Redis', 'PostgreSQL'],
    archUrl: '#', demoUrl: '#',
  },
  {
    id: '04', category: 'Automation', name: 'PriceSpy', type: 'E-commerce Price Tracker',
    description: 'Automated web scraper that tracks product prices across major Indian e-commerce sites, sends alerts on price drops, and stores historical data with trend visualization.',
    stack: ['Node.js', 'Puppeteer', 'Cheerio', 'Express', 'MongoDB'],
    archUrl: '#', demoUrl: '#',
  },
  {
    id: '05', category: 'Android', name: 'NoteForge', type: 'Android Note-Taking App',
    description: 'A clean offline-first Android note-taking application built with Java, featuring rich text editing, categories, local Room database, and material design UI.',
    stack: ['Java', 'Android SDK', 'Room DB', 'LiveData', 'Jetpack'],
    archUrl: '#', demoUrl: '#',
  },
  {
    id: '06', category: 'Data Project', name: 'Retail Forecast', type: 'Sales Dashboard with Predictions',
    description: 'Data analysis and visualization dashboard for retail sales. Explores patterns, seasonal trends, and uses simple ML models to forecast demand.',
    stack: ['Python', 'Pandas', 'Plotly', 'Scikit-learn', 'FastAPI'],
    archUrl: '#', demoUrl: '#',
  },
  {
    id: '07', category: 'AI Health', name: 'DietCore', type: 'AI Health Assistant',
    description: 'API system for diet recommendation — Groq API, MedGemma-Ollama, diet scheduling, and doctor recommendation with fitness diet reminders. Built to practice system design concepts.',
    stack: ['Python', 'FastAPI', 'Groq API', 'Streamlit', 'Rate Limiting', 'Regional Diet DB'],
    archUrl: '#', demoUrl: '#',
  },
]

/* ─── SKILLS ─── */
export interface SkillCard { icon: string; cat: string; name: string; tags: string[] }
export const skillPanels: Record<string, SkillCard[]> = {
  current: [
    { icon: '⚛️', cat: 'Frontend', name: 'React & Next.js', tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript'] },
    { icon: '🎨', cat: 'Styling', name: 'Tailwind & Shadcn', tags: ['Tailwind CSS', 'Shadcn/ui', 'CSS3', 'Framer Motion'] },
    { icon: '🔍', cat: 'Scraping', name: 'Web Scraping', tags: ['Puppeteer', 'Cheerio', 'Playwright', 'BeautifulSoup'] },
    { icon: '☕', cat: 'Language', name: 'Java', tags: ['Java Core', 'OOP', 'Collections', 'Spring Boot'] },
  ],
  backend: [
    { icon: '🟢', cat: 'Runtime', name: 'Node & Express', tags: ['Node.js', 'Express.js', 'REST APIs', 'Middleware'] },
    { icon: '🏰', cat: 'Framework', name: 'NestJS', tags: ['NestJS', 'Decorators', 'Guards', 'Modules'] },
    { icon: '🐍', cat: 'Python', name: 'Python Backend', tags: ['Python', 'FastAPI', 'Scripts', 'Automation'] },
    { icon: '🔐', cat: 'Auth', name: 'Authentication', tags: ['JWT', 'NextAuth', 'Sessions', 'OAuth'] },
  ],
  database: [
    { icon: '🐘', cat: 'SQL', name: 'PostgreSQL', tags: ['PostgreSQL', 'SQL', 'Joins', 'Indexing'] },
    { icon: '🔷', cat: 'ORM', name: 'Prisma', tags: ['Prisma ORM', 'Schema Design', 'Migrations', 'Relations'] },
    { icon: '🍃', cat: 'NoSQL', name: 'MongoDB', tags: ['MongoDB', 'Mongoose', 'Aggregations'] },
    { icon: '⚡', cat: 'Cache', name: 'Redis', tags: ['Redis', 'Caching', 'Pub/Sub', 'Sessions'] },
  ],
  aiml: [
    { icon: '🤖', cat: 'AI/ML', name: 'Machine Learning', tags: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'] },
    { icon: '🧠', cat: 'NLP', name: 'LLM & RAG', tags: ['LangChain', 'Groq', 'FAISS', 'Embeddings'] },
    { icon: '📊', cat: 'Data', name: 'Data Science', tags: ['Pandas', 'Plotly', 'Matplotlib', 'Jupyter'] },
  ],
  mobile: [
    { icon: '📱', cat: 'Native Android', name: 'Android Dev', tags: ['Java', 'Android SDK', 'Activities', 'Intents', 'XML Layouts'] },
    { icon: '🎯', cat: 'Jetpack', name: 'Modern Android', tags: ['Jetpack', 'ViewModel', 'LiveData', 'Room DB'] },
    { icon: '📡', cat: 'Networking', name: 'API Integration', tags: ['Retrofit', 'OkHttp', 'REST', 'JSON'] },
  ],
  tools: [
    { icon: '🔄', cat: 'CI/CD', name: 'Pipeline', tags: ['GitHub Actions', 'Vercel', 'Auto Deploy', 'PR Checks'] },
    { icon: '🐳', cat: 'Containers', name: 'Docker', tags: ['Docker', 'Compose', 'Images', 'Volumes'] },
    { icon: '🐙', cat: 'Version Control', name: 'Git & GitHub', tags: ['Git', 'GitHub', 'Branching', 'PRs'] },
    { icon: '🖥️', cat: 'OS & Terminal', name: 'Linux / CLI', tags: ['Linux', 'Bash', 'SSH', 'Nginx'] },
  ],
}

/* ─── EDUCATION ─── */
export const education = [
  { year: '2008 – 2020', name: 'Montfort High School', location: 'Chabua, Assam', detail: 'Foundation years — built curiosity, discipline, and early love for mathematics and logical thinking.' },
  { year: '2020 – 2022', name: 'RD Junior College', location: 'Digboi, Assam', detail: 'Higher Secondary — Science stream laid the analytical foundation. First exposure to programming logic.' },
  { year: '2022 – 2025', name: 'BCA Graduate', location: 'Dibrugarh, Assam', detail: 'Bachelor of Computer Applications — deep dive into software engineering, databases, and web development.' },
]

/* ─── LEARNING ROADMAP ─── */
export type RoadStatus = 'active' | 'next' | 'horizon'
export interface RoadItem { status: RoadStatus; title: string; desc: string; items: string[]; progress?: number; fillClass?: string }
export const roadmap: RoadItem[] = [
  { status: 'active', title: 'Full-Stack Mastery', desc: 'Deepening Next.js + Prisma + PostgreSQL stack expertise.', items: ['Next.js App Router', 'Server Actions', 'Prisma Relations', 'SQL Optimization'], progress: 65 },
  { status: 'active', title: 'AI & Machine Learning', desc: 'Building RAG systems, recommendation engines, and exploring LLM integrations.', items: ['LangChain', 'Vector DBs', 'Fine-tuning', 'RAG Pipelines'], progress: 50, fillClass: 'cyan-fill' },
  { status: 'active', title: 'System Design', desc: 'Learning how large-scale systems work. Scaling, caching, load balancing.', items: ['Scalability', 'Caching Strategy', 'DB Sharding', 'Load Balancing'], progress: 40 },
  { status: 'next', title: 'DSA & Problem Solving', desc: 'Building the problem-solving foundation. Consistent daily practice.', items: ['Arrays & Trees', 'Graph Algorithms', 'Dynamic Programming'], progress: 20, fillClass: 'cyan-fill' },
  { status: 'next', title: 'Advanced Backend & DevOps', desc: 'Production-grade backend — message queues, observability, CI/CD.', items: ['NestJS', 'RabbitMQ', 'Prometheus', 'Kubernetes'], progress: 15 },
  { status: 'horizon', title: 'Open Source & Community', desc: 'Contributing to open source, mentoring developers, building the Northeast India tech ecosystem.', items: ['Open Source', 'Mentoring', 'Community', 'NE India Tech'] },
]

/* ─── QUOTES ─── */
export const quotes = [
  'Progress is not linear. But it <em>compounds.</em> Show up every day.',
  "I'm not the best engineer — yet. But I'm the most <em>consistently improving</em> one in the room.",
  'Good code is written by developers who <em>never stop learning.</em>',
  'Don\'t wait to be ready. Ship it, learn from it, <em>make it better.</em>',
  'From Dibrugarh. <em>Building everywhere.</em>',
]
