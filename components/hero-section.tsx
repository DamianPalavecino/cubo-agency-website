"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { useState, useRef, memo } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useVideoPlayer } from "@/hooks/use-video-player";

// Memoized geometric shape to prevent unnecessary re-renders
const GeometricShape = memo(
  ({ className, delay = 0 }: { className: string; delay?: number }) => (
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
  )
);

GeometricShape.displayName = "GeometricShape";

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
      className="relative w-full min-h-[85vh] md:min-h-screen bg-black overflow-hidden flex items-center justify-center pt-20 md:pt-32 pb-0 md:pb-16"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left justify-center order-2 lg:order-1 lg:pl-8"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] md:leading-[1.3] tracking-tight flex flex-col md:gap-1"
            >
              <span className="text-white font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl block">
                Transformamos tu
              </span>
              <motion.span
                className="inline-block relative font-black"
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
              className="text-base md:text-lg lg:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
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

          {/* Right: Video Frame - Hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center w-full order-1 lg:order-2 lg:ml-8"
          >
            <div className="relative w-full max-w-[340px]">
              {/* Video container */}
              <div className="w-full relative">
                {/* Multi-color glow effect - adjusted for new size */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-[#FF2C24]/40 from-30% via-[#FFD74A]/40 via-75% to-[#27C7E0]/40 rounded-[4rem] blur-3xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Phone Frame Structure */}
                <div className="relative z-10 bg-[#0a0a0a] rounded-[3.5rem] p-2 shadow-2xl ring-2 ring-[#1a1a1a]/50 border-[4px] border-[#0f0f0f]">
                  {/* Side Buttons */}
                  <div className="absolute -right-[10px] top-24 w-[6px] h-16 bg-[#1a1a1a]/60 rounded-r-md shadow-md" />{" "}
                  {/* Volume */}
                  <div className="absolute -right-[10px] top-48 w-[6px] h-24 bg-[#1a1a1a]/60 rounded-r-md shadow-md" />{" "}
                  {/* Power */}
                  <div className="absolute -left-[10px] top-24 w-[6px] h-10 bg-[#1a1a1a]/60 rounded-l-md shadow-md" />{" "}
                  {/* Silent Switch */}
                  {/* Inner Bezel */}
                  <div className="bg-black rounded-[3rem] p-[10px] ring-1 ring-white/5">
                    {/* Screen */}
                    <div className="relative bg-black rounded-[2.5rem] overflow-hidden shadow-inner">
                      <VideoPlayer
                        src="https://pub-896a92390fc4493cac65a1af57b4a664.r2.dev/presentacion.mp4"
                        title="Cubo Marketing Digital"
                        thumbnail="/video-thumbnail.png"
                        containerClassName="rounded-[2.5rem]"
                        showControls={false}
                        muted={false}
                        loop={false}
                        preload="none"
                        overlayContent={
                          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center group">
                            <p className="text-white/90 font-medium text-lg leading-relaxed max-w-[200px] mb-8">
                              Hace click para conocer más sobre nosotros
                            </p>
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                              <Play
                                className="w-8 h-8 text-white ml-1"
                                fill="white"
                              />
                            </div>
                            <div className="relative w-56 h-28 mt-6">
                              <Image
                                src="/cubo-logo-small.png"
                                alt="Cubo Marketing Digital"
                                fill
                                className="object-contain"
                                priority
                              />
                            </div>
                          </div>
                        }
                      />

                      {/* Screen Gloss/Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-50 rounded-[2.5rem]" />
                    </div>

                    {/* Dynamic Island */}
                    <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[28%] h-7 bg-black rounded-full z-20 flex items-center justify-center ring-1 ring-white/5 shadow-lg">
                      {/* Camera/Sensor visual hints */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#111] ring-1 ring-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#051d3b] opacity-60" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                thumbnail="/video-thumbnail.png"
                showControls={false}
                muted={false}
                loop={false}
                autoplay={isModalOpen}
                preload={isModalOpen ? "auto" : "none"}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
