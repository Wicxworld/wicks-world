import { AboutTeaser } from "@/components/home/AboutTeaser";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { JournalPreview } from "@/components/home/JournalPreview";
import { Pillars } from "@/components/home/Pillars";
import { ProcessTeaser } from "@/components/home/ProcessTeaser";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SolutionsOverview } from "@/components/home/SolutionsOverview";
import { Why } from "@/components/home/Why";
import { JsonLd } from "@/components/site/JsonLd";
import { serviceListJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceListJsonLd()} />
      <Hero />
      <Pillars />
      <ServicesOverview />
      <SolutionsOverview />
      <Why />
      <SelectedWork />
      <ProcessTeaser />
      <AboutTeaser />
      <JournalPreview />
      <FinalCta />
    </>
  );
}
