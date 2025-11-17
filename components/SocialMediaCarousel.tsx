"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
];

export function SocialMediaCarousel() {
  // Duplicamos los iconos varias veces para asegurar que siempre haya contenido visible
  const duplicatedIcons = [
    ...socialMediaIcons,
    ...socialMediaIcons,
    ...socialMediaIcons,
    ...socialMediaIcons,
  ];

  // Calcular el ancho total de un set completo de iconos (3 iconos + gaps)
  const containerHeight = 80; // h-20 = 80px en md
  const gap = 64; // gap-16 = 64px en md
  const singleSetWidth = socialMediaIcons.reduce((total, icon) => {
    const aspectRatio = icon.width / icon.height;
    const calculatedWidth = containerHeight * aspectRatio;
    return total + calculatedWidth + gap;
  }, 0);

  return (
    <div className="relative w-full bg-black border-t border-white/10 overflow-hidden py-8 md:py-12">
      {/* Línea horizontal decorativa */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-16 items-center"
          style={{ width: "max-content" }}
          initial={{ x: 0 }}
          animate={{
            x: -singleSetWidth,
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedIcons.map((icon, index) => {
            // Calcular el ancho basado en el aspect ratio para mantener proporción
            const aspectRatio = icon.width / icon.height;
            const calculatedWidth = containerHeight * aspectRatio;
            
            return (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${calculatedWidth}px`, minWidth: `${calculatedWidth}px` }}
              >
                <div className="relative w-full h-16 md:h-20 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 brightness-150 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    fill
                    className="object-contain"
                    priority={index < 3}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

