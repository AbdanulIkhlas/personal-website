export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  year: string;
  role: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: "web-app" | "landing-page" | "open-source" | "experiment";
}

export const projectsData: Project[] = [
  {
    id: "teh-idaman",
    title: "Teh Idaman Attendance System",
    tagline: "Web-based employee attendance system for retail outlets",
    description:
      "Built a responsive web attendance system for managing employee check-in, check-out, and daily attendance records across outlets.",
    longDescription:
      "Developed a web-based attendance application for Teh Idaman outlet employees. Implemented features for check-in/check-out, attendance history, and status tracking with a clear and user-friendly interface. Focused on responsive layout for tablet and mobile usage in operational environments, ensured smooth form handling, and maintained stable frontend flow. Integrated REST APIs for attendance data processing and applied clean component structure for maintainability.",
    year: "2025",
    role: "Frontend Developer",
    technologies: ["Next JS", "Express JS", "MySQL", "REST API", "JWT"],
    liveUrl: "https://tehidaman.my.id/",
    featured: true,
    category: "web-app",
  },
  {
    id: "stepup-web-profile",
    title: "Stepup Project Web Profile",
    tagline: "Company profile website for a software house",
    description:
      "Developed a responsive company profile website with smooth UI flow and bug-free interactions.",
    longDescription:
      "Built the official web profile for Stepup Project using React.js. Focused on translating UI/UX designs into responsive components, ensuring consistent layout across devices, and optimizing performance. Maintained clean component structure and handled frontend flow to deliver a stable and user-friendly experience.",
    year: "2025",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
    liveUrl: "https://www.stepupproject.id/",
    // githubUrl: "-",
    featured: true,
    category: "landing-page",
  },
  {
    id: "co2-labs",
    title: "CO2 Labs Company Profile",
    tagline: "Modern company profile website for a software solution provider",
    description:
      "Developed a responsive company profile website with structured layout, smooth navigation, and consistent UI across devices.",
    longDescription:
      "Built a company profile website for CO2 Labs focusing on clean visual hierarchy and responsive component structure. Translated design into reusable React components, implemented smooth scrolling navigation, and ensured cross-device compatibility. Optimized layout and asset loading for better performance while maintaining a clear content flow to highlight services, vision, and business offerings.",
    year: "2025",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
    liveUrl: "https://co2labs-clone-snowy.vercel.app/",
    featured: false,
    category: "landing-page",
  },
  {
    id: "agrofaster",
    title: "Agrofaster",
    tagline: "Agriculture platform for GEMASTIK competition",
    description:
      "Responsive frontend implementation based on design requirements for an agriculture innovation platform.",
    longDescription:
      "Developed the frontend interface for Agrofaster, a GEMASTIK competition project. Implemented responsive layouts, ensured UI consistency with the provided designs, and maintained smooth navigation and interaction flow across devices.",
    year: "2024",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
    liveUrl: "https://agrofaster.netlify.app/",
    // githubUrl: "-",
    featured: false,
    category: "web-app",
  },
  {
    id: "edutanimas",
    title: "Edutanimas",
    tagline: "Educational agriculture information platform",
    description:
      "Interactive web platform introducing the Tani Mas program and youth agriculture awareness.",
    longDescription:
      "Built a responsive educational website to present information about the Tani Mas program, including data visualization, program flow, and agricultural insights. Focused on structured content layout, readability, and cross-device compatibility.",
    year: "2024",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://edutanimas.vercel.app/",
    featured: false,
    category: "landing-page",
  },
  {
    id: "girlshub-landing",
    title: "Girlshub",
    tagline: "Landing page for influencer–UMKM collaboration platform",
    description:
      "Attractive and responsive landing page built during freelance work.",
    longDescription:
      "Developed a modern landing page for Girlshub, a platform connecting UMKM with influencers. Ensured smooth animations, responsive layout, and visually engaging sections while maintaining performance and clean structure.",
    year: "2024",
    role: "Frontend Developer",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://girlshub.netlify.app/",
    featured: true,
    category: "landing-page",
  },
  {
    id: "swanbag-landing",
    title: "SwanBag",
    tagline: "Eco-friendly product landing page",
    description:
      "Landing page promoting sustainable shopping bags with cultural branding.",
    longDescription:
      "Built a responsive landing page using Next.js to promote SwanBag, an eco-friendly product combining sustainability and local batik culture. Focused on performance, SEO basics, and clean visual hierarchy.",
    year: "2024",
    role: "Frontend Developer",
    technologies: ["Next.js", "React", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://swanbag.vercel.app/",
    featured: true,
    category: "landing-page",
  },
  {
    id: "bucketbyatiq",
    title: "BucketByAtiq",
    tagline: "Product landing page for bucket flower business",
    description: "Responsive product showcase website built with Next.js.",
    longDescription:
      "Developed a clean and responsive landing page for a flower bucket business. Implemented reusable components, optimized layout for mobile devices, and ensured fast loading performance.",
    year: "2024",
    role: "Frontend Developer",
    technologies: ["Next.js", "React", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://buketbyatiq.online/",
    featured: false,
    category: "landing-page",
  },
  {
    id: "one-home-elearning",
    title: "One Home E-Learning",
    tagline: "E-learning platform for high school students",
    description:
      "Frontend development for a PHP-based e-learning system with responsive UI.",
    longDescription:
      "Worked on the user interface of an e-learning platform for a high school. Implemented responsive layouts based on client-approved designs and ensured consistent user experience across devices while integrating with backend functionality.",
    year: "2023",
    role: "Frontend Developer",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://onehome.web.id/",
    featured: false,
    category: "web-app",
  },
];

export const projectCategories = {
  "web-app": { label: "Web Applications", color: "primary" },
  "landing-page": { label: "Landing Page", color: "secondary" },
  "open-source": { label: "Open Source", color: "accent" },
  experiment: { label: "Experiments", color: "muted" },
};
