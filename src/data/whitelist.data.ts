// Email whitelist for private blog posts
// In production, this would be hashed and stored securely
// This is a dummy implementation for demonstration

export const whitelistData = {
  // Simulated hashed emails (in reality, use bcrypt or similar)
  emails: [
    "abdanuliikhlas@gmail.com",
  ],
  
  // For demo purposes, a simple check
  isWhitelisted: (email: string): boolean => {
    return whitelistData.emails.includes(email.toLowerCase().trim());
  },
  
  // WhatsApp contact for access requests
  whatsappContact: "+6282271583369",
  whatsappMessage: "Hi! I'd like to request access to your private blog posts.",
};
