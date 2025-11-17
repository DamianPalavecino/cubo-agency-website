"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsVideoPlaying(false);
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
          {/* Right: Video Frame - Hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center w-full order-1 lg:order-2"
          >
            <div className="relative w-full max-w-xs">
              {/* Video container */}
              <div className="w-full">
                {/* Multi-color glow effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#FF2C24] via-[#FFD74A] to-[#27C7E0] rounded-[2rem] blur-2xl"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Video container - proper 9:16 aspect ratio */}
                <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/16] w-full">
                  {/* Video iframe */}
                  <iframe
                    src={`https://player.vimeo.com/video/1135201308?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=${
                      isVideoPlaying ? 1 : 0
                    }&muted=0&player_id=0&app_id=58479`}
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
                      {/* Thumbnail image with enhanced visibility */}
                      <div className="relative w-full h-full bg-[#000000] flex items-center justify-center">
                        <div className="relative w-[85%] h-[85%]">
                          <Image
                            src="/video-thumbnail.png"
                            alt="Cubo Marketing Digital Video"
                            fill
                            className="object-contain brightness-110 contrast-105 saturate-110"
                            priority
                          />
                        </div>
                        {/* Subtle gradient overlay for better visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      </div>

                      {/* Play button overlay - lighter and more subtle */}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <motion.div
                          whileTap={{ scale: 0.95 }}
                          style={{ transformOrigin: "center" }}
                          className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 border-2 border-white/20 -mt-16"
                        >
                          <Play
                            className="w-8 h-8 text-black ml-1"
                            fill="black"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 md:gap-7 text-center lg:text-left justify-center h-full order-2 lg:order-1 px-4 lg:px-0"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight"
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
              className="text-base md:text-lg lg:text-lg text-white max-w-xl leading-relaxed font-light"
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

              {/* Play Video Button - Visible on mobile */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 50px rgba(39, 199, 224, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayButtonClick}
                className="px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-[#27C7E0] to-[#27C7E0] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex items-center justify-center gap-2 border border-[#27C7E0]/50 lg:hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Play className="relative z-10 w-5 h-5 fill-white" />
                <span className="relative z-10">Ver Video</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Video Modal for Mobile */}
        <Dialog
          open={isModalOpen}
          onOpenChange={(open) => {
            if (!open) {
              handleModalClose();
            } else {
              setIsModalOpen(true);
            }
          }}
        >
          <DialogContent className="max-w-[90vw] w-full p-0 bg-black border-none rounded-lg overflow-hidden [&>button]:text-white [&>button]:hover:text-gray-300 [&>button]:top-2 [&>button]:right-2">
            <VisuallyHidden>
              <DialogTitle>Cubo Marketing Digital Video</DialogTitle>
            </VisuallyHidden>
            <div className="relative w-full aspect-[9/16] bg-black">
              <iframe
                src={`https://player.vimeo.com/video/1135201308?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&muted=0&player_id=0&app_id=58479`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                title="Cubo Marketing Digital"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
