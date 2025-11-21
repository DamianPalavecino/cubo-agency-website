"use client";

import { useRef, useEffect, useState, forwardRef, useCallback } from "react";
import { Play } from "lucide-react";
import { useVideoPlayer } from "@/hooks/use-video-player";
import Image from "next/image";

interface VideoPlayerProps {
  src: string;
  title?: string;
  thumbnail?: string;
  className?: string;
  containerClassName?: string;
  showControls?: boolean;
  muted?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  darkOverlay?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  aspectRatio?: string;
  overlayContent?: React.ReactNode;
  preload?: "none" | "metadata" | "auto";
}

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  function VideoPlayer(
    {
      src,
      title,
      thumbnail,
      className = "",
      containerClassName = "",
      showControls = false,
      muted = false,
      loop = false,
      autoplay = false,
      darkOverlay = false,
      onPlay,
      onPause,
      onEnded,
      aspectRatio = "aspect-[9/16]",
      overlayContent,
      preload,
    },
    ref
  ) {
    const internalVideoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { playVideo, pauseVideo } = useVideoPlayer();

    // Use callback ref for better synchronization
    const setRefs = useCallback(
      (element: HTMLVideoElement | null) => {
        internalVideoRef.current = element;
        // Sync with parent ref if provided
        if (ref) {
          if (typeof ref === "function") {
            ref(element);
          } else if (ref && typeof ref === "object" && "current" in ref) {
            (ref as React.MutableRefObject<HTMLVideoElement | null>).current =
              element;
          }
        }
      },
      [ref]
    );

    // Handle autoplay
    useEffect(() => {
      if (autoplay && internalVideoRef.current) {
        playVideo(internalVideoRef);
      }
    }, [autoplay, playVideo]);

    // Handle video events
    useEffect(() => {
      const video = internalVideoRef.current;
      if (!video) return;

      const handlePlay = () => {
        setIsPlaying(true);
        onPlay?.();
      };

      const handlePause = () => {
        setIsPlaying(false);
        onPause?.();
      };

      const handleEnded = () => {
        setIsPlaying(false);
        onEnded?.();
      };

      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("ended", handleEnded);
      };
    }, [onPlay, onPause, onEnded]);

    const handlePlayClick = () => {
      if (internalVideoRef.current) {
        playVideo(internalVideoRef);
      }
    };

    const handlePauseClick = () => {
      if (internalVideoRef.current) {
        pauseVideo(internalVideoRef);
      }
    };

    const handleVideoClick = (e: React.MouseEvent) => {
      // Don't toggle if clicking on the button itself
      if ((e.target as HTMLElement).closest(".video-control-button")) {
        return;
      }

      if (isPlaying) {
        // Pause if playing
        handlePauseClick();
      } else {
        // Play if paused
        handlePlayClick();
      }
    };

    return (
      <div
        className={`relative ${containerClassName} ${aspectRatio} overflow-hidden cursor-pointer bg-black`}
        onClick={handleVideoClick}
      >
        {/* Thumbnail image if provided - show when video is not playing */}
        {!isPlaying && thumbnail && (
          <div className="absolute inset-0 z-10 bg-black">
            <Image
              src={thumbnail}
              alt={title || "Video thumbnail"}
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        )}

        <video
          ref={setRefs}
          src={src}
          className={`w-full h-full object-cover ${className} ${
            !isPlaying && thumbnail
              ? "absolute inset-0 opacity-0 pointer-events-none -z-10"
              : "relative z-0"
          }`}
          playsInline
          muted={muted}
          // Only show native controls when video is playing (to avoid duplicate play buttons)
          controls={showControls && isPlaying}
          loop={loop}
          preload={preload !== undefined ? preload : autoplay ? "auto" : "none"}
          title={title}
          poster={thumbnail}
        />

        {/* Play button overlay - shows when video is not playing */}
        {!isPlaying && (
          <>
            {/* Dark overlay when darkOverlay is true */}
            {darkOverlay && (
              <div className="absolute inset-0 bg-black/40 z-[15] pointer-events-none" />
            )}
            <div
              className={`absolute inset-0 cursor-pointer group z-20 transition-opacity duration-300 ${
                thumbnail
                  ? "bg-transparent"
                  : darkOverlay
                  ? "bg-black/40"
                  : overlayContent
                  ? "bg-black"
                  : "bg-black/20"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayClick();
              }}
            >
              {overlayContent ? (
                overlayContent
              ) : (
                <>
                  {/* Play button - centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="video-control-button w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:bg-white/50 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 border-2 border-white/30 active:scale-95"
                      style={{ transformOrigin: "center" }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
);
