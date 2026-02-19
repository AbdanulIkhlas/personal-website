import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends HTMLMotionProps<"span"> {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className, delay = 0, ...props }: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <motion.span className={cn("inline-block", className)} {...props}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.1,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface AnimatedLettersProps extends HTMLMotionProps<"span"> {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedLetters = ({ text, className, delay = 0, ...props }: AnimatedLettersProps) => {
  const letters = text.split("");

  return (
    <motion.span className={cn("inline-block", className)} {...props}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.03,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
