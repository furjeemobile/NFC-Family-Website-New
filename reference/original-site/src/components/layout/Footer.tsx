import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="absolute inset-0 -z-10 opacity-70 ambient-bg" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Peace of mind for the moments you cannot predict. NFC Family helps
              families keep important information accessible through secure
              emergency profiles, QR codes, and NFC technology.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Proudly South African - Built by parents, for families
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-foreground/70">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link></li>
              <li><Link to="/use-cases" className="text-muted-foreground hover:text-primary">Use Cases</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-foreground/70">
              Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/faqs" className="text-muted-foreground hover:text-primary">Safety Center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-foreground/70">
              Get the app
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              <a href="#" className="glass rounded-xl px-4 py-3 text-sm text-foreground/80 hover:text-primary transition">
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Coming soon</span>
                <span className="font-medium">App Store</span>
              </a>
              <a href="#" className="glass rounded-xl px-4 py-3 text-sm text-foreground/80 hover:text-primary transition">
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Coming soon</span>
                <span className="font-medium">Google Play</span>
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass text-foreground/70 hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>Copyright {new Date().getFullYear()} NFC Family. All rights reserved.</p>
          <p>Made with care in South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
