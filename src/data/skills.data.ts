export interface Skill {
  name: string;
  category: "core" | "tools" | "concepts";
  description: string;
  proficiency: "expert" | "proficient" | "learning";
  icon?: string;
}

export const skillsData: Skill[] = [
  {
    name: "React.js",
    category: "core",
    description:
      "Building component-based user interfaces with hooks, state management, and REST API integration.",
    proficiency: "expert",
  },
  {
    name: "Next.js",
    category: "core",
    description:
      "Developing performant and SEO-friendly React applications with routing and data fetching.",
    proficiency: "proficient",
  },
  {
    name: "Vue.js",
    category: "core",
    description:
      "Developing dynamic interfaces and structured document systems with reactive data handling.",
    proficiency: "proficient",
  },
  {
    name: "JavaScript",
    category: "core",
    description:
      "Modern ES6+ JavaScript for building interactive and scalable web applications.",
    proficiency: "expert",
  },
  {
    name: "HTML5 & CSS3",
    category: "core",
    description:
      "Semantic markup, responsive layouts, and cross-browser compatible styling.",
    proficiency: "expert",
  },
  {
    name: "PHP",
    category: "core",
    description:
      "Supporting frontend integration and dynamic data handling for web-based systems.",
    proficiency: "proficient",
  },
  {
    name: "Git",
    category: "tools",
    description:
      "Version control, branching workflows, and collaborative development using Git.",
    proficiency: "expert",
  },
  {
    name: "Vite / npm",
    category: "tools",
    description:
      "Project setup, dependency management, and modern frontend build tooling.",
    proficiency: "proficient",
  },
  {
    name: "Axios / Fetch API",
    category: "tools",
    description:
      "Handling REST API integration, data fetching, and asynchronous workflows.",
    proficiency: "proficient",
  },
  {
    name: "Figma",
    category: "tools",
    description:
      "Translating UI/UX designs into responsive and pixel-accurate interfaces.",
    proficiency: "proficient",
  },
  {
    name: "REST API Integration",
    category: "concepts",
    description:
      "Consuming and managing API data for dynamic and real-world web applications.",
    proficiency: "expert",
  },
  {
    name: "Responsive Web Design",
    category: "concepts",
    description:
      "Building mobile-first, cross-device compatible user interfaces.",
    proficiency: "expert",
  },
  {
    name: "Component Based Architecture",
    category: "concepts",
    description:
      "Structuring reusable UI components for scalability and maintainability.",
    proficiency: "expert",
  },
  {
    name: "Clean Code & Maintainability",
    category: "concepts",
    description:
      "Writing structured, readable, and scalable code for long-term projects.",
    proficiency: "expert",
  },
  {
    name: "Performance Optimization",
    category: "concepts",
    description:
      "Improving load performance, efficient rendering, and optimized data handling.",
    proficiency: "proficient",
  },
  {
    name: "Basic SEO Implementation",
    category: "concepts",
    description:
      "Applying SEO-friendly structure and metadata in frontend applications.",
    proficiency: "proficient",
  },
];

export const skillCategories = {
  core: {
    label: "Core Technologies",
    description: "Technologies I use to build frontend applications",
  },
  tools: {
    label: "Tools & Workflow",
    description: "Tools for development, collaboration, and delivery",
  },
  concepts: {
    label: "Concepts & Practices",
    description: "Principles I apply in building scalable systems",
  },
};
