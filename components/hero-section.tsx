"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const GeometricShape = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.3, 0.6, 0.3] }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={className}
  />
);

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div
      id="hero"
      className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center pt-32 pb-12"
    >
      {/* Premium geometric background - Isometric design system */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-right cyan accent */}
        <GeometricShape
          className="absolute top-10 right-20 w-96 h-96 bg-[#27C7E0] rounded-full mix-blend-screen blur-3xl opacity-5"
          delay={0}
        />
        {/* Bottom-left red accent */}
        <GeometricShape
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#FF2C24] rounded-full mix-blend-multiply blur-3xl opacity-5"
          delay={1}
        />
        {/* Center yellow accent */}
        <GeometricShape
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#FFD74A] rounded-full mix-blend-screen blur-3xl opacity-5"
          delay={2}
        />

        {/* Isometric grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="isometric-grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 0 L 50 28.8 L 100 0 M 50 28.8 L 50 86.4 M 0 57.6 L 50 86.4 L 100 57.6"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#isometric-grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 md:gap-7 text-center lg:text-left justify-center h-full"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight"
            >
              <span className="text-white">Transformamos tu</span>
              <br />
              <motion.span
                className="inline-block relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C24] via-[#FFD74A] to-[#27C7E0]">
                  Presencia Digital
                </span>
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg lg:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
            >
              Campañas de marketing estratégicas, diseño web impresionante e
              historias de marca poderosas que generan resultados medibles.
              Elevemos tu negocio juntos.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 50px rgba(255, 44, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contacto")}
                className="px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative z-10">Comienza Hoy</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Video Frame - Perfectly Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-sm">
              {/* Floating animation container */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full"
              >
                {/* Glowing border effect - layered */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#FF2C24] via-[#27C7E0] to-[#FFD74A] rounded-[2rem] blur-2xl opacity-0"
                  animate={{
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Solid gradient border */}
                <div className="relative bg-black rounded-[2rem] p-0.5 border border-white/5 overflow-hidden">
                  {/* Inner glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-[#FF2C24]/10 via-transparent to-[#27C7E0]/10 pointer-events-none"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Video container */}
                  <div className="relative bg-black rounded-[1.875rem] overflow-hidden aspect-[9/16]">
                    {/* Video iframe */}
                    <iframe
                      src={`https://player.vimeo.com/video/1135201308?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=${isVideoPlaying ? 1 : 0}&muted=0&player_id=0&app_id=58479`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full"
                      title="Cubo Marketing Digital"
                    />
                    
                    {/* Custom thumbnail overlay */}
                    {!isVideoPlaying && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 cursor-pointer group"
                        onClick={handleVideoClick}
                      >
                        {/* Thumbnail image */}
                        <div className="relative w-full h-full">
                          <Image
                            src="/video-thumbnail.png"
                            alt="Cubo Marketing Digital Video"
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                        
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors"
                          >
                            <Play className="w-8 h-8 text-black ml-1" fill="black" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
      >
        <span className="text-xs text-gray-400 font-medium">
          Desplázate para explorar
        </span>
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
}
