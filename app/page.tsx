import Contact from "@/components/Contact";
import { HeroSection } from "@/components/hero-section";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { SocialMediaCarousel } from "@/components/SocialMediaCarousel";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <SocialMediaCarousel />
      <Services />
      <Testimonials />
      {/* <Contact /> */}
    </div>
  );
}
