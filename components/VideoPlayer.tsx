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
  onPlay,
  onPause,
  onEnded,
  aspectRatio = "aspect-[9/16]",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { playVideo } = useVideoPlayer();

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

  return (
    <div className={`relative ${containerClassName} ${aspectRatio} overflow-hidden`}>
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
          className="absolute inset-0 cursor-pointer group bg-black/20 z-10"
          onClick={handlePlayClick}
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
              className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 border-2 border-white/20"
            >
              <Play className="w-8 h-8 text-black ml-1" fill="black" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

