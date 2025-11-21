import { HeroSection } from "@/components/hero-section";
import { LazyLoadedSections } from "@/components/LazyLoadedSections";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <LazyLoadedSections />
    </div>
  );
}
