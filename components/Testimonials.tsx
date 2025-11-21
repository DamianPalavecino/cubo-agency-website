"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, memo, useCallback } from "react";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Star, Play } from "lucide-react";
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
    brandName: "Kelis cosmetología",
  },
  {
    id: 2,
    videoUrl: `${R2_BASE_URL}/cliente-cubo2.mp4`,
    title:
      "Muchas gracias Fabricio de @altiv.sport por tu confianza, un placer trabajar con ustedes 👊",
    brandName: "@autoescuelalecole",
  },
  {
    id: 3,
    videoUrl: `${R2_BASE_URL}/cliente-cubo3.mp4`,
    title:
      "Muchas gracias Alejadro de @piscinas_alejandroo por la confianza de siempre 💙",
    brandName: "altiv",
  },
  {
    id: 4,
    videoUrl: `${R2_BASE_URL}/cliente-cubo4.mp4`,
    title: "lv_0_20251027120103",
    brandName: "piscinas alejandro",
  },
];

// Custom thumbnail overlay component with stars and brand name
const ThumbnailOverlay = memo(({ brandName }: { brandName: string }) => {
  return (
    <>
      {/* Premium gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

      {/* Play button centered */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: "center" }}
          className="video-control-button relative"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/10 blur-md" />

          {/* Main button - clean circular outline like reference */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-transparent border-2 border-white/90 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:border-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300">
            <Play
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white ml-0.5 drop-shadow-md"
              fill="white"
            />
          </div>
        </motion.div>
      </div>

      {/* Stars and brand name positioned at bottom left */}
      <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-5 md:px-6 pb-6 sm:pb-5 md:pb-6">
        <div className="flex flex-col items-start gap-3 sm:gap-4">
          {/* Stars */}
          <div className="flex gap-2 sm:gap-2 items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <Star
                  className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-[#FFD74A] text-[#FFD74A] drop-shadow-[0_0_8px_rgba(255,215,74,0.8)]"
                  strokeWidth={1.5}
                />
              </div>
            ))}
          </div>

          {/* Brand name - below stars */}
          <div className="text-left max-w-none">
            {/* Main brand name - large and bold */}
            {brandName.toLowerCase().includes("kelis") ? (
              <div className="flex flex-col gap-2 sm:gap-2 max-w-fit">
                <img
                  src="/brands/kelis-logo.png"
                  alt="Kelis"
                  className="h-20 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                  style={{ aspectRatio: "auto" }}
                />
                <p className="text-white font-light text-sm sm:text-xs tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  @keliscosmetologia
                </p>
              </div>
            ) : brandName.toLowerCase().includes("autoescuela") ? (
              <div className="flex flex-col gap-2 sm:gap-2 max-w-fit">
                <img
                  src="/brands/autoescuela-logo-alt.png"
                  alt="Autoescuela L'École"
                  className="h-20 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                  style={{ aspectRatio: "auto" }}
                />
                <p className="text-white font-light text-sm sm:text-xs tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  @autoescuelalecole
                </p>
              </div>
            ) : brandName.toLowerCase().includes("altiv") ? (
              <div className="flex flex-col gap-2 sm:gap-2 max-w-fit">
                <img
                  src="/brands/altiv-logo.png"
                  alt="Altiv"
                  className="h-20 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                  style={{ aspectRatio: "auto" }}
                />
                <p className="text-white font-light text-sm sm:text-xs tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  @altiv.sport
                </p>
              </div>
            ) : brandName.toLowerCase().includes("piscinas") ? (
              <div className="flex flex-col gap-2 sm:gap-2 max-w-fit">
                <img
                  src="/brands/piscinas-logo.png"
                  alt="Piscinas Alejandro"
                  className="h-20 sm:h-12 md:h-14 lg:h-16 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                  style={{ aspectRatio: "auto" }}
                />
                <p className="text-white font-light text-sm sm:text-xs tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  @piscinas_alejandroo
                </p>
              </div>
            ) : (
              <h3 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-xl tracking-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                {brandName}
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

ThumbnailOverlay.displayName = "ThumbnailOverlay";

// Memoized video card component to prevent unnecessary re-renders
const TestimonialVideoCard = memo(
  ({
    video,
    index,
    onPlay,
    registerVideoRef,
  }: {
    video: (typeof testimonialVideos)[0];
    index: number;
    onPlay: () => void;
    registerVideoRef: (id: number, element: HTMLVideoElement | null) => void;
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
            ref={(el) => registerVideoRef(video.id, el)}
            src={video.videoUrl}
            title={video.title}
            containerClassName="rounded-xl"
            showControls={false}
            muted={false}
            loop={false}
            darkOverlay={true}
            overlayContent={<ThumbnailOverlay brandName={video.brandName} />}
            onPlay={onPlay}
            preload="metadata"
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
    onPlay,
    registerVideoRef,
  }: {
    video: (typeof testimonialVideos)[0];
    onEnded: () => void;
    index: number;
    onPlay: () => void;
    registerVideoRef: (id: number, element: HTMLVideoElement | null) => void;
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
            ref={(el) => registerVideoRef(video.id, el)}
            src={video.videoUrl}
            title={video.title}
            containerClassName="rounded-xl"
            showControls={false}
            muted={false}
            loop={false}
            darkOverlay={true}
            onEnded={onEnded}
            overlayContent={<ThumbnailOverlay brandName={video.brandName} />}
            onPlay={onPlay}
            preload="metadata"
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

  // Use Map for better performance and easier cleanup
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const currentlyPlayingId = useRef<number | null>(null);

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

  // Register/unregister video refs
  const registerVideoRef = useCallback(
    (id: number, element: HTMLVideoElement | null) => {
      if (element) {
        videoRefs.current.set(id, element);
      } else {
        videoRefs.current.delete(id);
        // Clear currently playing if this video was playing
        if (currentlyPlayingId.current === id) {
          currentlyPlayingId.current = null;
        }
      }
    },
    []
  );

  // Function to pause all videos except the one that's playing
  const pauseAllVideosExcept = useCallback((playingVideoId: number) => {
    videoRefs.current.forEach((videoElement, id) => {
      if (id !== playingVideoId && videoElement && !videoElement.paused) {
        videoElement.pause();
      }
    });
    currentlyPlayingId.current = playingVideoId;
  }, []);

  // Handler for when a video starts playing
  const handleVideoPlay = useCallback(
    (videoId: number) => {
      // Only pause others if a different video is playing
      if (currentlyPlayingId.current !== videoId) {
        pauseAllVideosExcept(videoId);
      }
    },
    [pauseAllVideosExcept]
  );

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
                  onPlay={() => handleVideoPlay(video.id)}
                  registerVideoRef={registerVideoRef}
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
            <TestimonialVideoCard
              key={video.id}
              video={video}
              index={index}
              onPlay={() => handleVideoPlay(video.id)}
              registerVideoRef={registerVideoRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
