"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#27C7E0] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FF2C24] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FFD74A] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
          {/* Left side - Hero text content - Below video on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 sm:gap-6 order-2 lg:order-1"
          >
            {/* Main heading */}
            <div>
              <h1 className="text-white text-2xl sm:text-3xl lg:text-6xl font-bold leading-snug sm:leading-tight lg:leading-tight tracking-tight">
                Transformamos tu
                <span className="block bg-gradient-to-r from-[#27C7E0] via-[#FF2C24] to-[#FFD74A] bg-clip-text text-transparent mt-1 sm:mt-2">
                  Presencia Digital
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed font-light"
            >
              Estrategias de marketing innovadoras que llevan tu marca al siguiente nivel. Desde diseño digital hasta campañas de alto impacto.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <button className="btn-primary">
                Comenzar Ahora
              </button>
              <button className="btn-secondary">
                Saber Más
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Vimeo video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-[#27C7E0]/30 to-[#FF2C24]/20 p-px rounded-xl sm:rounded-2xl lg:rounded-3xl backdrop-blur-md border border-white/20 w-full max-w-xs">
              <div className="bg-black/80 aspect-[9/16] rounded-xl sm:rounded-2xl lg:rounded-3xl relative overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/1135201308?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&muted=1&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl"
                  title="Bienvenidos a Cubo Marketing Digital"
                  style={{ pointerEvents: 'auto' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hidden sm:block"
      >
        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  )
}
