import { ContentPage } from "@/components/content-page";
import { pages } from "@/lib/site-data";

export default function Page() {
  return <ContentPage page={pages.useCases} />;
}
