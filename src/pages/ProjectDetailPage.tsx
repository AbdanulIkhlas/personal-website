import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/ui/button";
import { projectsData, projectCategories } from "@/data/projects.data";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    return (
      <MainLayout>
        <PageTransition>
          <section className="section-spacing">
            <div className="content-wrapper text-center">
              <h1 className="font-serif text-3xl text-foreground mb-4">
                Project not found
              </h1>
              <Button asChild variant="outline">
                <Link to="/projects">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>
          </section>
        </PageTransition>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <PageTransition>
        <article className="section-spacing">
          <div className="content-wrapper max-w-3xl">
            {/* Back link */}
            <FadeIn>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </FadeIn>

            {/* Header */}
            <FadeIn delay={0.1}>
              <header className="mb-12">
                <Badge variant="outline" className="mb-4">
                  {projectCategories[project.category].label}
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-primary mb-6">{project.tagline}</p>
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {project.role}
                  </span>
                </div>
              </header>
            </FadeIn>

            {/* Links */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-12">
                {project.liveUrl && (
                  <Button asChild variant="hero">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                )}
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.3}>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </FadeIn>

            {/* Technologies */}
            <FadeIn delay={0.4}>
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Built With
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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
                  <Link to="/projects">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    View All Projects
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

export default ProjectDetailPage;
