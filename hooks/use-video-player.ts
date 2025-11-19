"use client";

import { useState, useEffect, useRef, RefObject } from "react";

export function useVideoPlayer() {
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Track user interaction globally (once per app)
  useEffect(() => {
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
    };

    // Listen for any user interaction
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });
    document.addEventListener("keydown", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  const playVideo = (videoRef: RefObject<HTMLVideoElement>) => {
    if (!videoRef.current) return;

    setHasUserInteracted(true);
    setIsPlaying(true);
    videoRef.current
      .play()
      .catch((error) => {
        console.error("Error playing video:", error);
        setIsPlaying(false);
      });
  };

  const pauseVideo = (videoRef: RefObject<HTMLVideoElement>) => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayClick = (videoRef: RefObject<HTMLVideoElement>) => {
    playVideo(videoRef);
  };

  return {
    hasUserInteracted,
    isPlaying,
    playVideo,
    pauseVideo,
    handlePlayClick,
    setHasUserInteracted,
    setIsPlaying,
  };
}

