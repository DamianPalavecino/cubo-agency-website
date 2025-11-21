"use client";

import dynamic from "next/dynamic";

// Lazy load below-the-fold components (client-side only for better code splitting)
const SocialMediaCarousel = dynamic(
  () => import("@/components/SocialMediaCarousel").then((mod) => ({ default: mod.SocialMediaCarousel })),
  { ssr: false }
);

const Services = dynamic(() => import("@/components/Services"), {
  ssr: false,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});

const Clientes = dynamic(() => import("@/components/Clientes"), {
  ssr: false,
});

export function LazyLoadedSections() {
  return (
    <>
      <SocialMediaCarousel />
      <Services />
      <Testimonials />
      <Clientes />
    </>
  );
}

