import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Lock, MessageCircle } from "lucide-react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogData } from "@/data/blog.data";
import { whitelistData } from "@/data/whitelist.data";
import { useToast } from "@/hooks/use-toast";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const post = blogData.find((p) => p.slug === slug);
  
  const [email, setEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  if (!post) {
    return (
      <MainLayout>
        <PageTransition>
          <section className="section-spacing">
            <div className="content-wrapper text-center">
              <h1 className="font-serif text-3xl text-foreground mb-4">
                Post not found
              </h1>
              <Button asChild variant="outline">
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </section>
        </PageTransition>
      </MainLayout>
    );
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (whitelistData.isWhitelisted(email)) {
      setIsUnlocked(true);
      toast({
        title: "Access granted!",
        description: "Welcome back. Enjoy the read.",
      });
    } else {
      toast({
        title: "Access denied",
        description: "This email is not on the whitelist. You can request access below.",
        variant: "destructive",
      });
    }
    
    setIsChecking(false);
  };

  const handleRequestAccess = () => {
    const message = encodeURIComponent(
      `${whitelistData.whatsappMessage}\n\nEmail: ${email}\nPost: ${post.title}`
    );
    window.open(`https://wa.me/${whitelistData.whatsappContact}?text=${message}`, "_blank");
  };

  const isPrivateAndLocked = post.isPrivate && !isUnlocked;

  return (
    <MainLayout>
      <PageTransition>
        <article className="section-spacing">
          <div className="content-wrapper max-w-3xl">
            {/* Back link */}
            <FadeIn>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </FadeIn>

            {/* Header */}
            <FadeIn delay={0.1}>
              <header className="mb-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="muted" size="sm">
                      {tag}
                    </Badge>
                  ))}
                  {post.isPrivate && (
                    <Badge variant="outline" size="sm">
                      <Lock className="h-3 w-3 mr-1" />
                      Private
                    </Badge>
                  )}
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} min read
                  </span>
                </div>
              </header>
            </FadeIn>

            {/* Content or Lock */}
            <AnimatePresence mode="wait">
              {isPrivateAndLocked ? (
                <motion.div
                  key="locked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 px-8 rounded-2xl border border-border bg-card text-center"
                >
                  <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-6" />
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                    This post is private
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Enter your email to check if you have access. If not, you can request access via WhatsApp.
                  </p>
                  
                  <form onSubmit={handleUnlock} className="max-w-sm mx-auto mb-6">
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button type="submit" disabled={isChecking}>
                        {isChecking ? "Checking..." : "Unlock"}
                      </Button>
                    </div>
                  </form>

                  <button
                    onClick={handleRequestAccess}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Request access via WhatsApp
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FadeIn delay={0.2}>
                    <div className="prose prose-lg max-w-none">
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {post.content}
                      </div>
                    </div>
                  </FadeIn>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <FadeIn delay={0.5}>
              <div className="pt-12 mt-12 border-t border-border">
                <Button asChild variant="outline">
                  <Link to="/blog">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
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

export default BlogDetailPage;
