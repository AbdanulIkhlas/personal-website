import { useState } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { FadeIn } from "@/components/atoms/FadeIn";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projectsData, projectCategories } from "@/data/projects.data";
import { cn } from "@/lib/utils";

type CategoryKey = keyof typeof projectCategories | "all";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "all", label: "All Projects" },
    ...Object.entries(projectCategories).map(([key, value]) => ({
      key: key as CategoryKey,
      label: value.label,
    })),
  ];

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <MainLayout>
      <PageTransition>
        <section className="section-spacing">
          <div className="content-wrapper">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <SectionHeading
                title="Projects"
                subtitle="A selection of work I'm proud of — from web application to experiments"
              />
            </div>

            {/* Category filter */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      activeCategory === category.key
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Featured projects */}
            {featuredProjects.length > 0 && (
              <div className="mb-12">
                <FadeIn delay={0.3}>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                    Featured
                  </h3>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      variant="featured"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Other projects */}
            {otherProjects.length > 0 && (
              <div>
                {featuredProjects.length > 0 && (
                  <FadeIn delay={0.4}>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                      More Projects
                    </h3>
                  </FadeIn>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {otherProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index + featuredProjects.length}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default ProjectsPage;
