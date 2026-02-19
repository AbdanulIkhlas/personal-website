import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { experienceData } from "@/data/experience.data";

const ExperiencePage = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="section-spacing">
          <div className="content-wrapper">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <SectionHeading
                title="Experience"
                subtitle="My professional journey and the roles that shaped me"
              />
            </div>

            {/* Timeline */}
            <div className="max-w-3xl">
              {experienceData.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                  isLast={index === experienceData.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default ExperiencePage;
