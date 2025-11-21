import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";

// Lazy load below-the-fold components
const SocialMediaCarousel = dynamic(
  () => import("@/components/SocialMediaCarousel").then((mod) => ({ default: mod.SocialMediaCarousel })),
  { ssr: true }
);

const Services = dynamic(() => import("@/components/Services"), {
  ssr: true,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: true,
});

const Clientes = dynamic(() => import("@/components/Clientes"), {
  ssr: true,
});

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <SocialMediaCarousel />
      <Services />
      <Testimonials />
      <Clientes />
    </div>
  );
}
