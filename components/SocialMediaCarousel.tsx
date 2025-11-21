"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const socialMediaIcons = [
  {
    name: "Facebook",
    src: "/new-icons/Facebook.svg",
    width: 239,
    height: 96,
  },
  {
    name: "Instagram",
    src: "/new-icons/instagram.svg",
    width: 239,
    height: 96,
  },
  {
    name: "TikTok",
    src: "/new-icons/TikTok.svg",
    width: 241,
    height: 110,
  },
  {
    name: "Meta",
    src: "/new-icons/MetaAds.svg",
    width: 200,
    height: 106,
  },
  {
    name: "Google Ads",
    src: "/new-icons/GoogleAdsColor.svg",
    width: 180,
    height: 80,
  },
];

export function SocialMediaCarousel() {
  // Duplicamos los iconos solo 2 veces para reducir el número de elementos renderizados
  const duplicatedIcons = [
    ...socialMediaIcons,
    ...socialMediaIcons,
  ];

  // Calcular el ancho total de un set completo de iconos (5 iconos + gaps)
  const containerHeight = 80; // h-20 = 80px en md
  const gap = 64; // gap-16 = 64px en md
  const singleSetWidth = socialMediaIcons.reduce((total, icon) => {
    const aspectRatio = icon.width / icon.height;
    const calculatedWidth = containerHeight * aspectRatio;
    return total + calculatedWidth + gap;
  }, 0);

  return (
    <ScrollReveal direction="up" delay={0.1} duration={0.7}>
      <div className="relative w-full bg-black border-t border-white/10 overflow-hidden py-6 md:py-6 mt-1 mb-12 md:mt-0 md:mb-0">
      {/* Línea horizontal decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {/* Línea horizontal decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-8 md:gap-16 items-center animate-social-scroll will-change-transform"
          style={{ 
            width: "max-content",
            "--social-scroll-width": `${singleSetWidth}px`,
          } as React.CSSProperties & { "--social-scroll-width": string }}
        >
          {duplicatedIcons.map((icon, index) => {
            // Calcular el ancho basado en el aspect ratio para mantener proporción
            const aspectRatio = icon.width / icon.height;
            const calculatedWidth = containerHeight * aspectRatio;

            return (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: `${calculatedWidth}px`,
                  minWidth: `${calculatedWidth}px`,
                }}
              >
                <div
                  className={`relative w-full h-16 md:h-20 opacity-60 hover:opacity-100 transition-all duration-300 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${
                    icon.name === "Google Ads"
                      ? "grayscale brightness-0 invert hover:grayscale-0 hover:brightness-100 hover:invert-0"
                      : "grayscale hover:grayscale-0 brightness-150"
                  }`}
                >
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    fill
                    className="object-contain"
                    priority={index < 5}
                    loading={index < 5 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </ScrollReveal>
  );
}
