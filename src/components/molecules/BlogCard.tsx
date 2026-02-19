import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Calendar } from "lucide-react";
import { BlogPost } from "@/data/blog.data";
import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.article
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="block p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {formatDate(post.publishedAt)}
            <span className="text-border">•</span>
            <span>{post.readingTime} min read</span>
          </div>
          {post.isPrivate && (
            <Lock className="h-4 w-4 text-muted-foreground" />
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors mb-3">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="muted" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Read more */}
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.article>
  );
};
