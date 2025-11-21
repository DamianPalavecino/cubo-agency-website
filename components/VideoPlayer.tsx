"use client";

import { useRef, useEffect, useState, forwardRef, useCallback } from "react";
import { Play, Pause } from "lucide-react";
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
    const [showPauseButton, setShowPauseButton] = useState(false);
    const pauseButtonTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const hasAutoplayedRef = useRef(false);
    const userPausedRef = useRef(false);
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

    // Handle autoplay - only run once when autoplay becomes true and user hasn't paused
    useEffect(() => {
      if (autoplay && internalVideoRef.current && !hasAutoplayedRef.current && !userPausedRef.current) {
        hasAutoplayedRef.current = true;
        playVideo(internalVideoRef);
      }
      // Reset when autoplay becomes false (modal closes)
      if (!autoplay) {
        hasAutoplayedRef.current = false;
        userPausedRef.current = false;
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
        // Prevent autoplay from restarting when video pauses
        hasAutoplayedRef.current = true;
        // Don't hide pause button here - let the timeout handle it
        // This allows the pause button to show briefly even after pause
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
      const video = internalVideoRef.current;
      if (!video) return;
      
      // Mark that user manually paused
      userPausedRef.current = true;
      // Force pause
      video.pause();
      setIsPlaying(false);
      // Prevent autoplay from restarting
      hasAutoplayedRef.current = true;
    };

    const handleVideoClick = (e: React.MouseEvent | React.TouchEvent) => {
      // Don't toggle if clicking on the button itself
      if ((e.target as HTMLElement).closest(".video-control-button")) {
        return;
      }

      // Stop propagation to prevent double handling
      e.stopPropagation();

      const video = internalVideoRef.current;
      if (!video) return;

      // Check actual video state, not just React state
      const videoIsPlaying = !video.paused && !video.ended;

      if (videoIsPlaying) {
        // Show pause button immediately when clicking on playing video
        setShowPauseButton(true);
        // Clear any existing timeout
        if (pauseButtonTimeoutRef.current) {
          clearTimeout(pauseButtonTimeoutRef.current);
        }
        // Pause the video - use the handler to ensure consistency
        handlePauseClick();
        // Hide pause button after 1.5 seconds (gives visual feedback)
        pauseButtonTimeoutRef.current = setTimeout(() => {
          setShowPauseButton(false);
        }, 1500);
      } else {
        // Hide pause button overlay when playing
        setShowPauseButton(false);
        // User wants to play, so clear the paused flag
        userPausedRef.current = false;
        // Play if paused
        handlePlayClick();
      }
    };

    // Cleanup timeout on unmount
    useEffect(() => {
      return () => {
        if (pauseButtonTimeoutRef.current) {
          clearTimeout(pauseButtonTimeoutRef.current);
        }
      };
    }, []);

    return (
      <div
        className={`relative ${containerClassName} ${aspectRatio} overflow-hidden cursor-pointer bg-black`}
        onClick={handleVideoClick}
        onTouchEnd={handleVideoClick}
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
          onClick={(e) => {
            e.stopPropagation();
            handleVideoClick(e);
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
            handleVideoClick(e);
          }}
          // Prevent default video controls from interfering
          onContextMenu={(e) => e.preventDefault()}
        />

        {/* Play button overlay - shows when video is not playing (but not when showing pause feedback) */}
        {!isPlaying && !showPauseButton && (
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

        {/* Pause button overlay - shows when video is clicked (briefly, even after pause) */}
        {showPauseButton && (
          <div
            className="absolute inset-0 cursor-pointer group z-20 transition-opacity duration-200 bg-black/20 pointer-events-none"
          >
            {/* Pause button - centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="video-control-button w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-200 border-2 border-white/30"
                style={{ transformOrigin: "center" }}
              >
                <Pause className="w-8 h-8 text-white" fill="white" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
