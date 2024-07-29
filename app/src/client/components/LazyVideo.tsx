import React, { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
  videoSrc: string;
  className?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ videoSrc, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setLoadVideo(true); // When video comes into view, set loadVideo to true
          } else {
            setLoadVideo(false); // When video goes out of view, set loadVideo to false
          }
        });
      },
      { threshold: 0.01 } // Slightly more responsive to visibility changes
    );

    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  useEffect(() => {
    if (loadVideo && videoRef.current) {
      videoRef.current.src = videoSrc; // Load the video by setting the src
    } else if (videoRef.current) {
      videoRef.current.src = ""; // Unload the video by clearing the src
      videoRef.current.load(); // Force reload of the video element to clear buffered data
    }
  }, [loadVideo, videoSrc]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default LazyVideo;
