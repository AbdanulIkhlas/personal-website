export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  emoji?: string;
  createdAt: string;
  location?: string;
}

export const guestbookData: GuestbookEntry[] = [
  {
    id: "1",
    name: "Klaz",
    message:
      "Sorry ya, masih dalam tahap pengembangan hehe",
    emoji: "💡",
    createdAt: "2026-02-03T09:50:00Z",
    location: "Yogyakarta, ID",
  }
];

export const availableEmojis = ["✨", "🔥", "💚", "🙏", "🎨", "👏", "💡", "🚀"];
