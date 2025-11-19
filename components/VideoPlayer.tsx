"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
}

export function VideoPlayer({
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
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { playVideo, pauseVideo } = useVideoPlayer();

  // Handle autoplay
  useEffect(() => {
    if (autoplay && videoRef.current) {
      playVideo(videoRef);
    }
  }, [autoplay, playVideo]);

  // Handle video events
  useEffect(() => {
    const video = videoRef.current;
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
    if (videoRef.current) {
      playVideo(videoRef);
    }
  };

  const handlePauseClick = () => {
    if (videoRef.current) {
      pauseVideo(videoRef);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    // Don't toggle if clicking on the button itself
    if ((e.target as HTMLElement).closest('.video-control-button')) {
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
      className={`relative ${containerClassName} ${aspectRatio} overflow-hidden cursor-pointer`}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover ${className}`}
        playsInline
        muted={muted}
        // Only show native controls when video is playing (to avoid duplicate play buttons)
        controls={showControls && isPlaying}
        loop={loop}
        preload="metadata"
        title={title}
      />

      {/* Play button overlay - shows when video is not playing */}
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 cursor-pointer group z-10 ${
            darkOverlay ? "bg-black/60" : "bg-black/20"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handlePlayClick();
          }}
        >
          {/* Thumbnail image if provided */}
          {thumbnail && (
            <div className="absolute inset-0">
              <Image
                src={thumbnail}
                alt={title || "Video thumbnail"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          )}

          {/* Play button - centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileTap={{ scale: 0.95 }}
              style={{ transformOrigin: "center" }}
              className="video-control-button w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:bg-white/50 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 border-2 border-white/30"
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </motion.div>
          </div>
        </motion.div>
      )}

    </div>
  );
}

