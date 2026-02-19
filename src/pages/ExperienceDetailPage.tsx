import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/ui/button";
import { experienceData } from "@/data/experience.data";

const ExperienceDetailPage = () => {
  const { slug } = useParams();
  const experience = experienceData.find((e) => e.id === slug);

  if (!experience) {
    return (
      <MainLayout>
        <PageTransition>
          <section className="section-spacing">
            <div className="content-wrapper text-center">
              <h1 className="font-serif text-3xl text-foreground mb-4">
                Experience not found
              </h1>
              <Button asChild variant="outline">
                <Link to="/experience">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Experience
                </Link>
              </Button>
            </div>
          </section>
        </PageTransition>
      </MainLayout>
    );
  }

  const formatDate = (date: string) => {
    if (date === "Present") return date;
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <MainLayout>
      <PageTransition>
        <article className="section-spacing">
          <div className="content-wrapper max-w-3xl">
            {/* Back link */}
            <FadeIn>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Experience
              </Link>
            </FadeIn>

            {/* Header */}
            <FadeIn delay={0.1}>
              <header className="mb-12">
                <Badge variant={experience.endDate === "Present" ? "primary" : "outline"} className="mb-4">
                  {experience.type}
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
                  {experience.title}
                </h1>
                <div className="flex items-center gap-2 text-xl text-primary mb-6">
                  {experience.companyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-2"
                    >
                      {experience.company}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    experience.company
                  )}
                </div>
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(experience.startDate)} — {formatDate(experience.endDate)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </span>
                </div>
              </header>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.2}>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </FadeIn>

            {/* Highlights */}
            <FadeIn delay={0.3}>
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Key Highlights
                </h2>
                <ul className="space-y-4">
                  {experience.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Technologies */}
            <FadeIn delay={0.4}>
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="muted">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Navigation */}
            <FadeIn delay={0.5}>
              <div className="pt-8 border-t border-border">
                <Button asChild variant="outline">
                  <Link to="/experience">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    View All Experience
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </article>
      </PageTransition>
    </MainLayout>
  );
};

export default ExperienceDetailPage;
