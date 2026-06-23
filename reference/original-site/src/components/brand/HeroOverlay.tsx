// Homepage hero background. Renders corebackground.png as a CSS background
// behind the homepage hero/content. Other pages use PageHeroBackground.

import coreBgUrl from "@/assets/brand/corebackground.png?url";
import { useLocation } from "@tanstack/react-router";

export function HeroOverlay() {
  const location = useLocation();
  if (location.pathname !== "/") return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coreBgUrl})` }}
      />
    </div>
  );
}
