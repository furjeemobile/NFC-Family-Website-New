/**
 * Ambient "connected threads" background. Pure SVG, no JS animation cost —
 * only CSS opacity pulses respecting prefers-reduced-motion.
 */
export function ThreadField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 ambient-bg opacity-90" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="thread-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--teal)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--teal)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="thread-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d="M -50 250 C 250 180, 500 360, 800 240 S 1300 280, 1300 200" stroke="url(#thread-a)" strokeWidth="1.2" fill="none" />
        <path d="M -50 480 C 300 540, 600 380, 900 520 S 1300 460, 1300 540" stroke="url(#thread-b)" strokeWidth="1" fill="none" />
        <path d="M -50 680 C 250 620, 600 740, 900 640 S 1300 700, 1300 660" stroke="url(#thread-a)" strokeWidth="0.8" fill="none" opacity="0.7" />

        {/* Soft nodes */}
        {[
          [180, 235], [560, 305], [820, 245], [320, 510], [880, 510], [620, 690],
        ].map(([cx, cy], i) => (
          <g key={i} className="animate-thread-pulse" style={{ animationDelay: `${i * 0.6}s` }}>
            <circle cx={cx} cy={cy} r="2.4" fill="var(--teal)" />
            <circle cx={cx} cy={cy} r="8" fill="none" stroke="var(--teal)" strokeOpacity="0.35" />
          </g>
        ))}
      </svg>
    </div>
  );
}
