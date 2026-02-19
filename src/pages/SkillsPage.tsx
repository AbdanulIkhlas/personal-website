import { useState } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { FadeIn } from "@/components/atoms/FadeIn";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SkillCard } from "@/components/molecules/SkillCard";
import { skillsData, skillCategories } from "@/data/skills.data";
import { cn } from "@/lib/utils";

type CategoryKey = "core" | "tools" | "concepts";

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const categories: { key: CategoryKey | "all"; label: string }[] = [
    { key: "all", label: "All Skills" },
    { key: "core", label: skillCategories.core.label },
    { key: "tools", label: skillCategories.tools.label },
    { key: "concepts", label: skillCategories.concepts.label },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="section-spacing">
          <div className="content-wrapper">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <SectionHeading
                title="Skills & Expertise"
                subtitle="The tools, technologies, and practices I work with daily"
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

            {/* Skills grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            {/* Note */}
            <FadeIn delay={0.4}>
              <p className="mt-12 text-center text-sm text-muted-foreground">
                Click on any skill to learn more about my experience with it.
              </p>
            </FadeIn>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default SkillsPage;
