import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
}

export const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  return (
    <motion.div
      className={cn("flex flex-col items-center gap-2", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <span className="text-xs text-muted-foreground tracking-widest uppercase">
        Scroll
      </span>
      <motion.div
        className="w-[1px] h-12 bg-border relative overflow-hidden"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.7, duration: 0.5, ease: "easeOut" }}
        style={{ originY: 0 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-1/3 bg-primary"
          animate={{ y: ["0%", "300%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
