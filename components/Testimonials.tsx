"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";

const R2_BASE_URL = "https://pub-896a92390fc4493cac65a1af57b4a664.r2.dev";

const testimonialVideos = [
  {
    id: 1,
    videoUrl: `${R2_BASE_URL}/cliente-cubo1.mp4`,
    title:
      "La satisfacción de ver al cliente feliz no tiene precio 🎉 muchas gracias por tus palabras Flo",
  },
  {
    id: 2,
    videoUrl: `${R2_BASE_URL}/cliente-cubo2.mp4`,
    title:
      "Muchas gracias Fabricio de @altiv.sport por tu confianza, un placer trabajar con ustedes 👊",
  },
  {
    id: 3,
    videoUrl: `${R2_BASE_URL}/cliente-cubo3.mp4`,
    title:
      "Muchas gracias Alejadro de @piscinas_alejandroo por la confianza de siempre 💙",
  },
  {
    id: 4,
    videoUrl: `${R2_BASE_URL}/cliente-cubo4.mp4`,
    title: "lv_0_20251027120103",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    // Resume autoplay after 5 seconds of user interaction
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    autoPlayTimeoutRef.current = setTimeout(() => {
      setAutoPlay(true);
    }, 5000);
  }, []);

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % testimonialVideos.length);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide(
      (currentIndex - 1 + testimonialVideos.length) % testimonialVideos.length
    );
  }, [currentIndex, goToSlide]);

  // Auto-advance carousel when video ends
  const handleVideoEnd = useCallback(() => {
    if (autoPlay) {
      goToNext();
    }
  }, [autoPlay, goToNext]);

  return (
    <section
      id="testimonios"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#27C7E0] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF2C24] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FFD74A] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonios en video de clientes que transformaron su negocio con
            Cubo
          </p>
        </div>

        {/* Mobile Carousel - Hidden on desktop */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          {/* Video Container */}
          <div className="relative w-full max-w-sm bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <VideoPlayer
              key={currentIndex}
              src={testimonialVideos[currentIndex].videoUrl}
              title={testimonialVideos[currentIndex].title}
              containerClassName="rounded-xl"
              showControls={true}
              muted={false}
              loop={false}
              onEnded={handleVideoEnd}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between w-full max-w-2xl gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/20 hover:border-cyan/60 group"
              aria-label="Video anterior"
            >
              <ChevronLeft
                size={24}
                className="group-hover:text-cyan transition-colors"
              />
            </button>

            {/* Dots Navigation */}
            <div className="flex gap-2">
              {testimonialVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#FF2C24] to-[#27C7E0] w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir al video ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/20 hover:border-cyan/60 group"
              aria-label="Video siguiente"
            >
              <ChevronRight
                size={24}
                className="group-hover:text-cyan transition-colors"
              />
            </button>
          </div>

          {/* Video counter */}
          <div className="text-center text-gray-400">
            <p className="text-sm">
              Video {currentIndex + 1} de {testimonialVideos.length}
            </p>
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialVideos.map((video) => (
            <div
              key={video.id}
              className="relative bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl hover:border-cyan/60 transition-all duration-300"
            >
              <VideoPlayer
                src={video.videoUrl}
                title={video.title}
                containerClassName="rounded-xl"
                showControls={true}
                muted={false}
                loop={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
