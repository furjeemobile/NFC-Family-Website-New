import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const primary = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/pricing", label: "Plans" },
  { to: "/faqs", label: "Safety Center" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 transition-all duration-500 ${scrolled ? "glass-strong h-16" : "h-20 bg-transparent border border-transparent"}`}>
          <Logo />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {primary.map((item) => {
              const active = path === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to as never}
                  className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                    active ? "text-primary" : "text-foreground/75 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-teal" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden md:inline-flex items-center rounded-full px-3 py-2 text-sm text-foreground/75 hover:text-primary"
            >
              Log in
            </a>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:brightness-110 hover:shadow-[var(--shadow-float)]"
              style={{ background: "var(--gradient-cta)" }}
            >
              Get Started
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full glass"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col" aria-label="Mobile">
              {primary.map((item) => (
                <Link
                  key={item.to}
                  to={item.to as never}
                  className={`block rounded-xl px-3 py-3 text-base ${path === item.to ? "bg-accent text-primary" : "text-foreground/85"}`}
                >
                  {item.label}
                </Link>
              ))}
              <a href="#" className="block rounded-xl px-3 py-3 text-base text-foreground/85">Log in</a>
              <Link to="/contact" className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
