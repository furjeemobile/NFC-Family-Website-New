import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { QrCode, RotateCw } from "lucide-react";
import type { DemoProfile } from "@/content/demoProfiles";

type Props = {
  profile: DemoProfile;
  selected?: boolean;
  onSelect?: () => void;
};

export function FlipCard({ profile, selected, onSelect }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        if (document.activeElement?.closest('[data-flip-card]')) {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flipped]);

  return (
    <div
      className={`group relative h-72 [perspective:1200px] transition-transform ${
        selected ? "scale-[1.02]" : "hover:-translate-y-1"
      }`}
      data-flip-card
    >
      <motion.div
        className={`relative h-full w-full rounded-3xl [transform-style:preserve-3d] cursor-pointer`}
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Front */}
        <motion.button
          type="button"
          onClick={() => {
            onSelect?.();
            setFlipped(true);
          }}
          className={`absolute inset-0 flex flex-col items-start justify-between rounded-3xl p-5 text-left [backface-visibility:hidden] glass-strong ${
            selected ? "ring-2 ring-primary/40" : ""
          }`}
          initial={{ opacity: 1 }}
          animate={{
            opacity: isHovered && !flipped ? 0.9 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex w-full items-center justify-between">
            <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-primary">
              {profile.type}
            </span>
            <QrCode className="h-4 w-4 text-primary/60" />
          </div>
          <div>
            <p className="text-lg font-medium leading-tight">{profile.name}</p>
            <p className="text-xs text-muted-foreground">{profile.age}</p>
            <p className="mt-3 line-clamp-3 text-sm text-foreground/75">{profile.scenario}</p>
          </div>
          <motion.span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-primary-foreground"
            style={{ background: "var(--gradient-cta)" }}
            initial={{ opacity: 1 }}
            animate={{
              opacity: isHovered && !flipped ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            Reveal QR <RotateCw className="h-3 w-3" />
          </motion.span>
        </motion.button>

        {/* Back */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-between rounded-3xl bg-white p-4 text-center [backface-visibility:hidden] shadow-[var(--shadow-float)]"
          style={{ transform: "rotateY(180deg)" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: flipped ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Scan this demo · {profile.name}
          </p>
          <motion.img
            src={profile.qr}
            alt={`Demo QR code for ${profile.name}`}
            className="my-1 h-40 w-40 object-contain"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <div className="flex w-full items-center gap-2">
            <motion.button
              type="button"
              onClick={() => {
                onSelect?.();
                setFlipped(false);
              }}
              className="flex-1 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium hover:bg-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Flip back
            </motion.button>
            <motion.button
              type="button"
              onClick={() => onSelect?.()}
              className="flex-1 rounded-full px-3 py-2 text-xs font-medium text-primary-foreground"
              style={{ background: "var(--gradient-cta)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View card
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
