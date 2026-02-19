import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline" | "muted";
  size?: "sm" | "md";
  className?: string;
}

export const Badge = ({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) => {
  const variants = {
    default: "bg-primary/10 text-primary",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border text-muted-foreground",
    muted: "bg-muted text-muted-foreground",
  };

  const sizes = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};
