import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { MapPin } from "lucide-react";
import { GuestbookEntry } from "@/data/guestbook.data";

interface GuestbookMessageProps {
  entry: GuestbookEntry;
  index: number;
}

export const GuestbookMessage = ({ entry, index }: GuestbookMessageProps) => {
  return (
    <motion.div
      className="p-5 rounded-xl border border-border bg-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-start gap-4">
        {/* Emoji */}
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg shrink-0">
          {entry.emoji || "💬"}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-foreground">{entry.name}</span>
            {entry.location && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {entry.location}
              </span>
            )}
          </div>
          <p className="text-muted-foreground mb-2">{entry.message}</p>
          <p className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(entry.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
