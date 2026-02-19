import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects.data";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "default" | "featured";
}

export const ProjectCard = ({ project, index, variant = "default" }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const isFeatured = variant === "featured";

  return (
    <motion.article
      ref={ref}
      className={cn(
        "group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300",
        isFeatured ? "md:col-span-2" : ""
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.3)" }}
    >
      <div className={cn("p-6 md:p-8", isFeatured && "md:p-10")}>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{project.year}</p>
            <h3
              className={cn(
                "font-serif font-medium text-foreground group-hover:text-primary transition-colors",
                isFeatured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
              )}
            >
              {project.title}
            </h3>
          </div>
          <Badge variant="outline" size="sm">
            {project.category.replace("-", " ")}
          </Badge>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground mb-6">{project.tagline}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="muted" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
