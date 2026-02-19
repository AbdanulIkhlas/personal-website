export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "full-time" | "contract" | "freelance" | "founder";
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "programmer-farmagitechs",
    title: "Programmer",
    company: "PT Farma Global Teknologi",
    companyUrl: "https://farmagitechs.co.id",
    location: "Yogyakarta, Indonesia",
    type: "full-time",
    startDate: "2025-03",
    endDate: "Present",
    description:
      "Developing and maintaining electronic medical document systems for hospital and clinic management platforms using Vue.js and PHP.",
    highlights: [
      "Built dynamic and structured medical document interfaces aligned with hospital workflows",
      "Implemented frontend–backend integration for document processing and data flow",
      "Improved system reliability through bug fixing, performance tuning, and ongoing maintenance",
      "Mentored 4 interns through code reviews, technical guidance, and task planning",
    ],
    technologies: [
      "Vue.js",
      "JavaScript",
      "PHP",
      "REST API",
      "HTML",
      "CSS",
      "Git",
    ],
  },
  {
    id: "frontend-stepup",
    title: "Frontend Developer",
    company: "Stepup Project",
    location: "Sleman, Yogyakarta",
    type: "founder",
    startDate: "2024-01",
    endDate: "2024-12",
    description:
      "Developed high performance, responsive web applications using React.js for various client projects in a software house environment.",
    highlights: [
      "Led technical implementation by defining code structure and development standards",
      "Built reusable component based UI from UI/UX designs",
      "Integrated REST APIs and ensured scalable, maintainable code",
      "Applied SEO best practices and cross browser/mobile optimization",
    ],
    technologies: ["React", "JavaScript", "REST API", "HTML", "CSS", "Git"],
  },
  {
    id: "freelance-frontend",
    title: "Freelance Frontend Developer",
    company: "Freelance",
    location: "Remote",
    type: "freelance",
    startDate: "2023-03",
    endDate: "2024-04",
    description:
      "Handled end to end frontend development for multiple web projects, focusing on responsive UI and clean component architecture.",
    highlights: [
      "Delivered responsive interfaces using React.js and Next.js based on design requirements",
      "Ensured consistent UI flow and cross device compatibility",
      "Integrated frontend with backend services using REST APIs",
      "Built landing pages, management systems, and attendance web applications",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "Git",
    ],
  },
];
