import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { AnimatedLetters } from "@/components/atoms/AnimatedText";
import { FadeIn } from "@/components/atoms/FadeIn";
import { ScrollIndicator } from "@/components/atoms/ScrollIndicator";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile.data";
import { siteConfig } from "@/data/site.config";

const HomePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const dynamicTexts = profileData.hero.dynamicTexts;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dynamicTexts.length]);

  return (
    <MainLayout>
      <PageTransition>
        {/* Hero Section */}
        <section
          ref={containerRef}
          className="relative pt-16 md:pt-0 min-h-[102svh] md:min-h-[100svh] flex md:items-center justify-center overflow-hidden"
        >
          {/* Background elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y }}
          >
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/30 blur-3xl" />
          </motion.div>

          <motion.div
            className="content-wrapper relative z-10 text-center"
            style={{ opacity }}
          >
            {/* Greeting */}
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                {profileData.hero.greeting}
              </p>
            </FadeIn>

            {/* Name */}
            <h1 className="font-serif px-11 text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6">
              <AnimatedLetters text={profileData.name} delay={0.4} />
            </h1>

            {/* Role with dynamic text */}
            <FadeIn delay={0.8}>
              <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
                <span className="text-foreground">{profileData.role}</span>
                <span className="mx-3 text-border">—</span>
                <div className="block md:hidden"></div>
                <motion.span
                  key={currentTextIndex}
                  className="text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {dynamicTexts[currentTextIndex]}
                </motion.span>
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                {profileData.hero.description}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={1.2}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">About Me</Link>
                </Button>
              </div>
            </FadeIn>
          </motion.div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <ScrollIndicator />
          </div>
        </section>

        {/* Quick intro section */}
        <section className="section-spacing bg-card/50">
          <div className="content-wrapper">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="right">
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                  I believe great software should feel{" "}
                  <span className="text-primary">interactive</span> — intuitive,
                  fast, and delightful.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With nearly 3 years of experience in frontend development, I
                    have worked on freelance projects, software house
                    applications, and healthcare systems, focusing on building
                    scalable and maintainable web interfaces.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I specialize in React.js, Next.js, and Vue.js, integrating
                    REST APIs, implementing responsive design, and applying
                    clean component based architecture to ensure performance and
                    long term reliability.
                  </p>

                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    Learn more about me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing">
          <div className="content-wrapper text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Let's build something together
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Whether you have a project in mind or just want to chat about
                frontend development, I'd love to hear from you.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default HomePage;
