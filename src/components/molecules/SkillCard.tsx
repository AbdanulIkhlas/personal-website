import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Skill } from "@/data/skills.data";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const proficiencyColors = {
    expert: "bg-primary/20 text-primary",
    proficient: "bg-secondary text-secondary-foreground",
    learning: "bg-muted text-muted-foreground",
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative p-6 rounded-xl border border-border bg-card cursor-pointer transition-all duration-300",
        isExpanded && "bg-muted/30"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ y: -2, borderColor: "hsl(var(--primary) / 0.3)" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        </div>
        <span
          className={cn(
            "px-2.5 py-1 rounded-full text-xs font-medium shrink-0",
            proficiencyColors[skill.proficiency]
          )}
        >
          {skill.proficiency}
        </span>
      </div>

      {/* Expand indicator */}
      <motion.div
        className="absolute bottom-2 right-2 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 0 : 1 }}
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
          click to expand
        </span>
      </motion.div>
    </motion.div>
  );
};
