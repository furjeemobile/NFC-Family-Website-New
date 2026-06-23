type Props = { src: string; alt: string; className?: string };

export function PhoneFrame({ src, alt, className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] rounded-[2.4rem] bg-[#0b1220] p-2.5 shadow-[var(--shadow-float)] ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden />
      <div className="overflow-hidden rounded-[2rem] bg-white">
        <img src={src} alt={alt} className="block w-full" loading="lazy" />
      </div>
    </div>
  );
}

export function BrowserFrame({ src, alt, className = "" }: Props) {
  return (
    <div className={`rounded-2xl glass-strong p-2 ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
        <span className="ml-3 truncate rounded-full bg-background px-3 py-0.5 text-[10px] text-muted-foreground">
          app.nfcfamily.co.za
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
        <img src={src} alt={alt} className="block w-full" loading="lazy" />
      </div>
    </div>
  );
}
