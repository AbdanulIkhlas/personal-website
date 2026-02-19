import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PageTransition } from "@/components/atoms/PageTransition";
import { FadeIn } from "@/components/atoms/FadeIn";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { GuestbookMessage } from "@/components/molecules/GuestbookMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { guestbookData, availableEmojis, GuestbookEntry } from "@/data/guestbook.data";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const GuestbookPage = () => {
  const { toast } = useToast();
  const [entries, setEntries] = useState<GuestbookEntry[]>(guestbookData);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(availableEmojis[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name and message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      emoji: selectedEmoji,
      createdAt: new Date().toISOString(),
    };
    
    setEntries([newEntry, ...entries]);
    setName("");
    setMessage("");
    setSelectedEmoji(availableEmojis[0]);
    setIsSubmitting(false);
    
    toast({
      title: "Message added!",
      description: "Thanks for signing the guestbook.",
    });
  };

  return (
    <MainLayout>
      <PageTransition>
        <section className="section-spacing">
          <div className="content-wrapper max-w-2xl">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <SectionHeading
                title="Guestbook"
                subtitle="Leave a message, say hello, or just drop an emoji. I'd love to hear from you!"
              />
            </div>

            {/* Form */}
            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="mb-12 p-6 rounded-xl border border-border bg-card">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="What should I call you?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={50}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Say something nice... or don't. It's up to you."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      maxLength={280}
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground mt-1 text-right">
                      {message.length}/280
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pick an Emoji
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableEmojis.map((emoji) => (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() => setSelectedEmoji(emoji)}
                          className={cn(
                            "w-10 h-10 rounded-lg text-xl flex items-center justify-center transition-all",
                            selectedEmoji === emoji
                              ? "bg-primary/10 ring-2 ring-primary"
                              : "bg-muted hover:bg-muted/80"
                          )}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Signing..."
                    ) : (
                      <>
                        Sign Guestbook
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </FadeIn>

            {/* Messages */}
            <div className="space-y-4">
              {entries.map((entry, index) => (
                <GuestbookMessage key={entry.id} entry={entry} index={index} />
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default GuestbookPage;
