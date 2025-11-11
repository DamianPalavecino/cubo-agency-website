"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center pt-24 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      {/* Optimized background gradient orbs using CSS animations */}
      <div className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#27C7E0] rounded-full mix-blend-screen filter blur-3xl opacity-10 sm:opacity-15 animate-float-slow" />
      <div className="absolute bottom-0 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-[#FF2C24] rounded-full mix-blend-screen filter blur-3xl opacity-10 sm:opacity-15 animate-float-slower" />
      <div className="absolute top-1/2 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#FFD74A] rounded-full mix-blend-screen filter blur-3xl opacity-10 sm:opacity-15 animate-float-slowest" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 md:gap-8 lg:gap-16 items-center w-full">
          {/* Left side - Hero text content - Below video on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 sm:gap-4 md:gap-6 lg:gap-8 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Main heading with improved typography */}
            <div className="space-y-2 sm:space-y-0">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.3] sm:leading-tight tracking-tight">
                Transformamos tu
                <span className="block bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] bg-clip-text text-transparent mt-2 sm:mt-2 lg:mt-3 leading-[1.3] sm:leading-tight">
                  Presencia Digital
                </span>
              </h1>
            </div>

            {/* Subtitle with better styling */}
            <p className="text-gray-300 text-base sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0 font-light">
              Estrategias de marketing innovadoras que llevan tu marca al
              siguiente nivel. Desde diseño digital hasta campañas de alto
              impacto.
            </p>

            {/* CTA Buttons with improved styling */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start px-2 sm:px-0">
              <Button
                size="lg"
                className="btn-primary group text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-lg w-full sm:w-auto relative overflow-hidden"
                onClick={() => scrollToSection("contacto")}
              >
                <span className="relative z-10 flex items-center">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-secondary group text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-lg border-2 w-full sm:w-auto relative overflow-hidden"
                onClick={() => scrollToSection("servicios")}
              >
                <span className="relative z-10">Saber Más</span>
              </Button>
            </div>
          </motion.div>

          {/* Right side - Vimeo video with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2 mb-8 sm:mb-0"
          >
            <div className="relative group">
              {/* Glow effect - removed animate-pulse for performance */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#27C7E0] via-[#FF2C24] to-[#FFD74A] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-20 sm:opacity-30 group-hover:opacity-40 transition-opacity" />

              <div className="relative bg-gradient-to-br from-[#27C7E0]/30 via-[#FF2C24]/20 to-[#FFD74A]/20 p-[2px] rounded-lg sm:rounded-xl lg:rounded-2xl backdrop-blur-md border border-white/20 w-full max-w-[280px] sm:max-w-xs lg:max-w-sm mx-auto">
                <div className="bg-black/90 aspect-[9/16] rounded-lg sm:rounded-xl lg:rounded-2xl relative overflow-hidden shadow-2xl">
                  <iframe
                    src="https://player.vimeo.com/video/1135201308?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&muted=1&player_id=0&app_id=58479&loop=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl"
                    title="Bienvenidos a Cubo Marketing Digital"
                    style={{ pointerEvents: "auto" }}
                  />
                  {/* Video overlay gradient for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
