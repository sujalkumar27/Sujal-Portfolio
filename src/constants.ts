export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  githubUrl?: string;
  technicalSpecs?: {
    software: string[];
    renderTime?: string;
    polygons?: string;
    stack?: string[];
  };
  process?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'weather-app-springboot',
    title: 'Weather App Spring Boot',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/weather-app/1200/800',
    description: 'A real-time weather tracking application built with Spring Boot. It integrates with external weather APIs to provide accurate forecasts and meteorological data.',
    githubUrl: 'https://github.com/sujalkumar27/WeatherAppSpringboot',
    technicalSpecs: {
      software: ['Java', 'Spring Boot', 'REST API', 'Thymeleaf'],
      stack: ['Spring Boot', 'OpenWeatherMap API', 'Thymeleaf']
    },
    process: [
      'Integration with OpenWeatherMap REST API',
      'Development of dynamic weather dashboards',
      'Implementation of location-based weather fetching',
      'Responsive UI design with Thymeleaf templates',
      'Caching and performance optimization for API calls'
    ]
  },
  {
    id: 'spending-tracker',
    title: 'Spending Tracker',
    category: 'Desktop Application',
    image: 'https://picsum.photos/seed/finance-tracker/1200/800',
    description: 'An intuitive desktop-based expense tracker with a graphical UI. It enables users to categorize expenditures, analyze spending patterns, and reduce overspending by up to 30%.',
    githubUrl: 'https://github.com/sujalkumar27/SpendingTracker',
    technicalSpecs: {
      software: ['Java', 'Java Swing', 'JDBC', 'MySQL'],
      stack: ['Java Swing', 'JDBC', 'MySQL']
    },
    process: [
      'UI/UX design using Java Swing components',
      'Database integration with JDBC for persistent storage',
      'Implementation of spending analysis algorithms',
      'Categorization and reporting features development',
      'Performance optimization for real-time tracking'
    ]
  },
  {
    id: 'doctor-appointment-system',
    title: 'Doctor Appointment Management System',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/healthcare-app/1200/800',
    description: 'A comprehensive web-based application designed to manage Admin, Doctor, and User entities. It streamlines the process of scheduling appointments and managing doctor availability.',
    technicalSpecs: {
      software: ['Java', 'Spring Boot', 'Hibernate/JPA', 'MySQL'],
      stack: ['Spring Boot', 'Hibernate', 'MySQL']
    },
    process: [
      'Requirement analysis for healthcare entities',
      'Database schema design using Hibernate/JPA',
      'Implementation of appointment scheduling logic',
      'Development of doctor availability modules',
      'Security and data management integration'
    ]
  }
];

export const SKILLS = [
  { name: 'Core Java', level: 'Expert', icon: 'Zap' },
  { name: 'Spring Boot', level: 'Advanced', icon: 'Cpu' },
  { name: 'Python', level: 'Intermediate', icon: 'Box' },
  { name: 'MySQL', level: 'Advanced', icon: 'Layers' },
  { name: 'Hibernate/JPA', level: 'Advanced', icon: 'Palette' },
  { name: 'Git/Github', level: 'Expert', icon: 'Sun' }
];
