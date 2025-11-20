"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, memo } from "react";
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

// Memoized video card component to prevent unnecessary re-renders
const TestimonialVideoCard = memo(
  ({
    video,
    index,
  }: {
    video: (typeof testimonialVideos)[0];
    index: number;
  }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Unobserve after loading to save resources
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: "50px" }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl hover:border-cyan/60 transition-all duration-300"
      >
        {isInView ? (
          <VideoPlayer
            src={video.videoUrl}
            title={video.title}
            containerClassName="rounded-xl"
            showControls={false}
            muted={false}
            loop={false}
            darkOverlay={true}
          />
        ) : (
          <div className="aspect-[9/16] bg-black/50 rounded-xl flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-white/20 rounded-full animate-spin border-t-white/60" />
          </div>
        )}
      </motion.div>
    );
  }
);

TestimonialVideoCard.displayName = "TestimonialVideoCard";

// Memoized mobile video card with lazy loading
const MobileVideoCard = memo(
  ({
    video,
    onEnded,
    index,
  }: {
    video: (typeof testimonialVideos)[0];
    onEnded: () => void;
    index: number;
  }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: "100px" }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className="relative bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl h-full"
      >
        {isInView ? (
          <VideoPlayer
            src={video.videoUrl}
            title={video.title}
            containerClassName="rounded-xl"
            showControls={false}
            muted={false}
            loop={false}
            darkOverlay={true}
            onEnded={onEnded}
          />
        ) : (
          <div className="aspect-[9/16] bg-black/50 rounded-xl flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-white/20 rounded-full animate-spin border-t-white/60" />
          </div>
        )}
      </div>
    );
  }
);

MobileVideoCard.displayName = "MobileVideoCard";

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
      className="relative pt-12 md:pt-12 pb-20 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#27C7E0] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#FF2C24] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FFD74A] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto relative z-10 !px-2 sm:!px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonios en video de clientes que transformaron su negocio con
            Cubo
          </p>
        </motion.div>
      </div>

      {/* Mobile Carousel - Hidden on desktop, full width */}
      <div className="flex flex-col items-center gap-6 md:hidden w-full mb-6">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {testimonialVideos.map((video, index) => (
              <CarouselItem
                key={video.id}
                className="pl-4 pr-4 basis-[85%] sm:basis-[70%]"
              >
                <MobileVideoCard
                  video={video}
                  onEnded={handleVideoEnd}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Custom Dots Navigation */}
        <div className="container mx-auto !px-2 sm:!px-8">
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
      </div>

      {/* Desktop Grid - Hidden on mobile */}
      <div className="container mx-auto relative z-10 !px-2 sm:!px-8">
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialVideos.map((video, index) => (
            <TestimonialVideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
