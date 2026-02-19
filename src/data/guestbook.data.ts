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
    name: "Rizky Pratama",
    message:
      "Struktur folder dan clean code di project kamu rapi banget. Kebantu waktu belajar React architecture.",
    emoji: "💡",
    createdAt: "2026-02-05T09:50:00Z",
    location: "Yogyakarta, ID",
  },
  {
    id: "2",
    name: "Fajar Hidayat",
    message:
      "Implementasi REST API di project kamu clean, service layer-nya jelas. Jadi referensi buat tim kami.",
    emoji: "🚀",
    createdAt: "2026-02-02T15:30:00Z",
    location: "Bandung, ID",
  },
  {
    id: "3",
    name: "Siti Nurhaliza",
    message: "Portfolio kamu simple tapi informatif, menarik banget.",
    emoji: "✨",
    createdAt: "2026-01-25T13:05:00Z",
    location: "Surabaya, ID",
  },
  {
    id: "4",
    name: "Andi Saputra",
    message:
      "Mentoring intern sampai code review itu value banget. Jarang frontend yang share process-nya.",
    emoji: "🔥",
    createdAt: "2026-01-12T10:15:00Z",
    location: "Sleman, ID",
  },
];

export const availableEmojis = ["✨", "🔥", "💚", "🙏", "🎨", "👏", "💡", "🚀"];
