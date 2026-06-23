import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/brand/nfc-family-logo.png";

/**
 * NFC Family brand mark. Renders the official app logo PNG so the
 * marketing site and the product share one visual anchor. The outer
 * wrapper dimensions are preserved so header/footer spacing does not shift.
 */
export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link to="/" aria-label="NFC Family — home" className={`inline-flex items-center group ${className}`}>
      <img src={logoUrl} alt="NFC Family" className="h-12 md:h-14 w-auto object-contain" decoding="async" />
    </Link>
  );
}
