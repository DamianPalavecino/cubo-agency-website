"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useVideoPlayer } from "@/hooks/use-video-player";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id="hero"
      className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden flex items-center justify-center pt-20 md:pt-32 pb-12 md:pb-16"
    >
      {/* Premium geometric background - Isometric design system */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bottom-left red accent */}
        <GeometricShape
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#FF2C24] rounded-full mix-blend-multiply blur-3xl opacity-5"
          delay={1}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
          {/* Right: Video Frame - Hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end items-center w-full order-1 lg:order-2 pr-4 lg:pr-8 xl:pr-10"
          >
            <div className="relative w-full max-w-xs">
              {/* Video container */}
              <div className="w-full">
                {/* Multi-color glow effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#FF2C24] from-30% via-[#FFD74A] via-75% to-[#27C7E0] rounded-[2rem] blur-2xl"
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
                <div className="relative bg-black rounded-[2rem] overflow-hidden">
                  <VideoPlayer
                    src="https://pub-896a92390fc4493cac65a1af57b4a664.r2.dev/presentacion.mp4"
                    title="Cubo Marketing Digital"
                    containerClassName="rounded-[2rem]"
                    showControls={false}
                    muted={false}
                    loop={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4 md:gap-6 lg:gap-7 text-center lg:text-left justify-center h-full order-2 lg:order-1 px-4 lg:px-0 lg:ml-4 xl:ml-8"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0]">
                  Presencia Digital
                </span>
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg lg:text-lg text-white max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
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
              className="flex flex-col sm:flex-row gap-4 pt-1 md:pt-2 justify-center lg:justify-start"
            >
              {/* Primary Button */}
              <motion.a
                href="https://wa.me/5493415958964"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  boxShadow: "0 20px 50px rgba(255, 44, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <RiWhatsappFill className="relative z-10 w-5 h-5" />
                <span className="relative z-10">Comienza Hoy</span>
              </motion.a>

              {/* Play Video Button - Visible on mobile */}
              <motion.button
                whileHover={{
                  boxShadow: "0 20px 50px rgba(39, 199, 224, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayButtonClick}
                className="px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-[#27C7E0] to-[#27C7E0] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex items-center justify-center gap-2 border border-[#27C7E0]/50 lg:hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Play className="relative z-10 w-5 h-5 fill-white" />
                <span className="relative z-10">Conoce más</span>
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
          <DialogContent className="max-w-[90vw] md:max-w-md w-full p-0 bg-black border-none rounded-lg overflow-hidden z-[110] [&>button]:text-white [&>button]:hover:text-white [&>button]:top-3 [&>button]:right-3 [&>button]:h-10 [&>button]:w-10 [&>button]:bg-black/70 [&>button]:hover:bg-black/90 [&>button]:rounded-full [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:border [&>button]:border-white/30 [&>button]:backdrop-blur-sm [&>button]:opacity-100 [&>button]:z-[120] [&>button_svg]:h-6 [&>button_svg]:w-6">
            <VisuallyHidden>
              <DialogTitle>Cubo Marketing Digital Video</DialogTitle>
            </VisuallyHidden>
            <div className="relative w-full aspect-[9/16] bg-black">
              <VideoPlayer
                key={isModalOpen ? "modal-open" : "modal-closed"}
                src="https://pub-896a92390fc4493cac65a1af57b4a664.r2.dev/presentacion.mp4"
                title="Cubo Marketing Digital"
                showControls={false}
                muted={false}
                loop={false}
                autoplay={isModalOpen}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
