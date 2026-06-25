import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { navigation } from "@/lib/site-data";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-container site-header__inner">
          <Link href="/" className="site-logo" aria-label="NFC Family home">
            <Image src="/nfcfamily-logo.png" alt="NFC Family" width={118} height={38} priority />
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link href="/contact" className="button button--solid header-cta">
            Speak to us
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer theme theme--ink">
        <div className="site-container site-footer__inner">
          <div>
            <Link href="/" className="site-logo site-logo--footer" aria-label="NFC Family home">
              <Image src="/nfcfamily-logo.png" alt="NFC Family" width={111} height={35} />
            </Link>
            <p className="site-footer__copy">
              Built by parents, for families. NFC Family gives people a calmer way to reach the right details when it matters.
            </p>
          </div>
          <div className="site-footer__links">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
