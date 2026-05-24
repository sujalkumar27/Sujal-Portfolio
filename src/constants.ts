export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  technicalSpecs?: {
    software: string[];
    renderTime?: string;
    polygons?: string;
    stack?: string[];
  };
  process?: string[];
}

// TODO: Replace every `picsum.photos` placeholder below with a real screenshot of the project.
// Drop the file in `public/` (e.g. `public/bfsi-copilot.png`) and change the image to `/bfsi-copilot.png`.
// Recruiters skip portfolios with stock images — real screenshots are the single biggest credibility win.
export const PROJECTS: Project[] = [
  {
    id: 'bfsi-copilot',
    title: 'BFSI Copilot — Intelligent Banking Assistant',
    category: 'AI Application',
    image: 'https://picsum.photos/seed/bfsi-copilot/1200/800',
    description:
      'A production-style Retrieval-Augmented Generation (RAG) pipeline that answers banking policy queries from PDF documents. Combines semantic search over a ChromaDB vector store with prompt-engineered LLM responses (Groq + Llama 3) to deliver accurate, context-grounded answers with reduced hallucination.',
    githubUrl: 'https://github.com/sujalkumar27/BFSI-Copilot',
    technicalSpecs: {
      software: ['Python', 'FastAPI', 'LangChain', 'Groq (Llama 3)', 'Sentence-Transformers', 'ChromaDB', 'Docker'],
      stack: ['FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'Docker']
    },
    process: [
      'Built a Retrieval-Augmented Generation (RAG) pipeline to answer banking policy queries from uploaded PDF documents',
      'Implemented an embedding pipeline using Sentence-Transformers and stored vectors in ChromaDB for fast semantic search',
      'Designed a prompt-engineered LLM system (Groq + Llama 3) to generate accurate, context-aware responses grounded in retrieved chunks',
      'Developed a Loan Advisory Assistant using structured prompts for eligibility insights and recommendations',
      'Exposed REST APIs with FastAPI for document upload, query handling, and response streaming',
      'Reduced hallucination by grounding every response in retrieved document context with source citations',
      'Containerized the application with Docker for a deployment-ready architecture'
    ]
  },
  {
    id: 'doctor-appointment-system',
    title: 'Doctor Appointment Management System',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/healthcare-app/1200/800',
    description:
      'A web-based application to manage Admin, Doctor, and User entities, streamlining appointment scheduling and doctor availability. Built with Spring Boot and Hibernate/JPA for secure, transactional data management.',
    technicalSpecs: {
      software: ['Java', 'Spring Boot', 'Hibernate/JPA', 'MySQL'],
      stack: ['Spring Boot', 'Hibernate', 'MySQL']
    },
    process: [
      'Modeled three core domains — Admin, Doctor, User — with Hibernate/JPA entities and relationships',
      'Implemented appointment scheduling logic with conflict detection and doctor-availability windows',
      'Built role-based access for Admin / Doctor / User dashboards',
      'Secured the data layer with parameterized queries and transactional service boundaries',
      'Designed REST endpoints for appointment lifecycle (book, reschedule, cancel)'
    ]
  },
  {
    id: 'spending-tracker',
    title: 'Spending Tracker',
    category: 'Desktop Application',
    image: 'https://picsum.photos/seed/finance-tracker/1200/800',
    description:
      'A desktop expense tracker with a Java Swing GUI and JDBC-backed persistence. Enables users to categorize expenditures, analyze monthly trends, and reduce overspending by up to 30% in user testing.',
    githubUrl: 'https://github.com/sujalkumar27/SpendingTracker',
    technicalSpecs: {
      software: ['Java', 'Java Swing', 'JDBC', 'MySQL'],
      stack: ['Java Swing', 'JDBC', 'MySQL']
    },
    process: [
      'Designed an intuitive Swing GUI following MVC principles',
      'Implemented JDBC persistence with parameterized queries to prevent SQL injection',
      'Built spending-analysis features — monthly trends, category breakdowns, and budget alerts',
      'Validated impact through user testing — observed up to 30% reduction in simulated overspending',
      'Modular OOP design to keep UI, data, and analytics concerns isolated'
    ]
  },
  {
    id: 'weather-app-springboot',
    title: 'Weather App — Spring Boot',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/weather-app/1200/800',
    description:
      'A real-time weather tracking application built with Spring Boot and Thymeleaf. Integrates with the OpenWeatherMap REST API to deliver location-based forecasts and meteorological data with cached responses for performance.',
    githubUrl: 'https://github.com/sujalkumar27/WeatherAppSpringboot',
    technicalSpecs: {
      software: ['Java', 'Spring Boot', 'REST API', 'Thymeleaf'],
      stack: ['Spring Boot', 'OpenWeatherMap API', 'Thymeleaf']
    },
    process: [
      'Integrated the OpenWeatherMap REST API with a typed client and error handling',
      'Built dynamic weather dashboards with Thymeleaf server-rendered templates',
      'Implemented location-based weather fetching (city + geolocation fallbacks)',
      'Designed a responsive UI usable on phone and desktop',
      'Added in-memory caching to reduce external API calls and improve latency'
    ]
  }
];

export const SKILLS = [
  { name: 'Core Java', level: 'Expert', icon: 'Zap' },
  { name: 'Spring Boot', level: 'Advanced', icon: 'Cpu' },
  { name: 'Python & FastAPI', level: 'Advanced', icon: 'Box' },
  { name: 'RAG / LangChain', level: 'Intermediate', icon: 'Layers' },
  { name: 'MySQL / Oracle 11g', level: 'Advanced', icon: 'Palette' },
  { name: 'Git · Docker · DSA', level: 'Expert', icon: 'Sun' }
];
