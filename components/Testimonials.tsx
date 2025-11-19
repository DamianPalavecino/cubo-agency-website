"use client";

import { useState, useEffect } from "react";
import { VideoPlayer } from "@/components/VideoPlayer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleVideoEnd = () => {
    if (api) {
      const currentIndex = api.selectedScrollSnap();
      const nextIndex = (currentIndex + 1) % testimonialVideos.length;
      api.scrollTo(nextIndex);
    }
  };

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
        <div className="flex flex-col items-center gap-6 md:hidden w-full">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialVideos.map((video) => (
                <CarouselItem key={video.id} className="pl-4 basis-[85%] sm:basis-[70%]">
                  <div className="relative bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl h-full">
                    <VideoPlayer
                      src={video.videoUrl}
                      title={video.title}
                      containerClassName="rounded-xl"
                      showControls={false}
                      muted={false}
                      loop={false}
                      darkOverlay={true}
                      onEnded={handleVideoEnd}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Dots Navigation */}
          <div className="flex justify-center gap-2 pt-2">
            {testimonialVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current
                    ? "bg-gradient-to-r from-[#FF2C24] to-[#27C7E0] w-6"
                    : "bg-white/20 w-2 hover:bg-white/40"
                }`}
                aria-label={`Ir al video ${index + 1}`}
              />
            ))}
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
                showControls={false}
                muted={false}
                loop={false}
                darkOverlay={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
