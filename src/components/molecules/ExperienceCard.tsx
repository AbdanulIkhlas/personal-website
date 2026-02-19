import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, MapPin, Calendar } from "lucide-react";
import { Experience } from "@/data/experience.data";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export const ExperienceCard = ({ experience, index, isLast }: ExperienceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const formatDate = (date: string) => {
    if (date === "Present") return date;
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <motion.article
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-12 bottom-0 w-[2px] bg-border">
        {!isLast && (
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
        )}
      </div>

      {/* Timeline dot */}
      <motion.div
        className={cn(
          "absolute left-0 top-6 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center",
          experience.endDate === "Present" && "bg-primary"
        )}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <Briefcase
          className={cn(
            "h-3 w-3",
            experience.endDate === "Present" ? "text-primary-foreground" : "text-primary"
          )}
        />
      </motion.div>

      {/* Content */}
      <div className="ml-12 pb-12">
        <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                {experience.title}
              </h3>
              <p className="text-primary font-medium mt-1">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {experience.company}
                  </a>
                ) : (
                  experience.company
                )}
              </p>
            </div>
            <Badge variant={experience.endDate === "Present" ? "primary" : "outline"}>
              {experience.type}
            </Badge>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(experience.startDate)} — {formatDate(experience.endDate)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4">{experience.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="muted" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Link */}
          <Link
            to={`/experience/${experience.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
