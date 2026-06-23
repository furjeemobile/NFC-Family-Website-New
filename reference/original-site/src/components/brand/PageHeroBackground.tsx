// Background image for the top hero section on non-home pages.
// Renders corebackground.png as a CSS background behind the page section content.

import pageHeroBgUrl from "@/assets/brand/corebackground.png?url";

export function PageHeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${pageHeroBgUrl})` }}
    />
  );
}
