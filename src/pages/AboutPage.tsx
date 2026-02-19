import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { FadeIn } from "@/components/atoms/FadeIn";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ResumeDownload } from "@/components/molecules/ResumeDownload";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile.data";

const AboutPage = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <MainLayout>
      <PageTransition>
        <section className="section-spacing">
          <div className="content-wrapper">
            {/* Header */}
            <div className="mb-16 md:mb-24">
              <SectionHeading
                title="About Me"
                subtitle="A bit more about who I am and what drives me"
              />
            </div>

            {/* Main content */}
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Image column */}
              <motion.div
                ref={imageRef}
                className="lg:col-span-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isImageInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted group shadow-2xl shadow-primary/5">
                  <img
                    src="/profile.jpeg"
                    alt={profileData.name}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-60 mix-blend-overlay transition-opacity duration-500" />

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl opacity-60" />
                </div>
              </motion.div>

              {/* Text column */}
              <div className="lg:col-span-3 space-y-8">
                {/* Quick facts */}
                <FadeIn>
                  <div className="flex flex-wrap gap-6 pb-8 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {profileData.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      3+ years experience
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Heart className="h-4 w-4 text-primary" />
                      {profileData.about.currentFocus}
                    </div>
                  </div>
                </FadeIn>

                {/* Intro */}
                <FadeIn delay={0.1}>
                  <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                    {profileData.about.intro}
                  </p>
                </FadeIn>

                {/* Paragraphs */}
                {profileData.about.paragraphs.map((paragraph, i) => (
                  <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  </FadeIn>
                ))}

                {/* Current Focus */}
                <FadeIn delay={0.5}>
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                    <h3 className="font-medium text-foreground mb-2">
                      Currently focused on
                    </h3>
                    <p className="text-muted-foreground">
                      {profileData.about.currentFocus}
                    </p>
                  </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn delay={0.6}>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild variant="hero">
                      <Link to="/experience">
                        See My Experience
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <ResumeDownload variant="outline" />
                    <Button asChild variant="ghost">
                      <Link to="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default AboutPage;
