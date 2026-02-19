import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Instagram } from "lucide-react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { FadeIn } from "@/components/atoms/FadeIn";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { siteConfig } from "@/data/site.config";

const ContactPage = () => {
  const contacts = [
    {
      label: "Email",
      value: siteConfig.links.email,
      href: `mailto:${siteConfig.links.email}`,
      icon: Mail,
      description: "For serious inquiries or just to say hello",
    },
    {
      label: "GitHub",
      value: "@abdanulikhlas",
      href: siteConfig.links.github,
      icon: Github,
      description: "Check out my code and open source work",
    },
    {
      label: "LinkedIn",
      value: "in/muhammad-abdanul-ikhlas",
      href: siteConfig.links.linkedin,
      icon: Linkedin,
      description: "Connect professionally",
    },
    {
      label: "Instagram",
      value: "@abdanulikhlas",
      href: siteConfig.links.instagram,
      icon: Instagram,
      description: "Follow for thoughts and updates",
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="section-spacing">
          <div className="content-wrapper max-w-3xl">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <SectionHeading
                title="Get in Touch"
                subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great"
              />
            </div>

            {/* Intro */}
            <FadeIn delay={0.1}>
              <div className="mb-16">
                <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
                  Whether you have a project in mind, a question about my work,
                  or just want to chat about frontend development - I'd love to
                  hear from you.
                </p>
                <p className="text-lg text-muted-foreground">
                  I typically respond within a day or two. No pressure, no sales
                  pitch, just genuine conversation.
                </p>
              </div>
            </FadeIn>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-16">
              {contacts.map((contact, index) => (
                <FadeIn key={contact.label} delay={0.2 + index * 0.1}>
                  <motion.a
                    href={contact.href}
                    target={contact.label !== "Email" ? "_blank" : undefined}
                    rel={
                      contact.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <contact.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1 ">
                          {contact.label}
                        </h3>
                        <p className="text-primary mb-2 text-sm">
                          {contact.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                </FadeIn>
              ))}
            </div>

            {/* Availability */}
            <FadeIn delay={0.6}>
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Currently available for new projects
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  Let's build something together
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  I'm open to freelance projects, consulting, and other
                  opportunities. Drop me a message and let's start the
                  conversation.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default ContactPage;
