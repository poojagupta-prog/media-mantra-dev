"use client";

import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { videoQualityManager } from '@/lib/video-quality-manager';
import { VideoConfig, VideoQuality, type VideoPreload } from '@/types/video';
import { cn } from '@/lib/utils';

interface OptimizedVideoPlayerProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'> {
  src: string;
  quality?: VideoQuality;
  poster?: string;
  className?: string;
  containerClassName?: string;
  showControls?: boolean;
  onQualityChange?: (quality: VideoQuality) => void;
  onPerformanceUpdate?: (metrics: any) => void;
}

export const OptimizedVideoPlayer = forwardRef<HTMLVideoElement, OptimizedVideoPlayerProps>(
  ({
    src,
    quality = 'auto',
    poster,
    className,
    containerClassName,
    showControls = false,
    onQualityChange,
    onPerformanceUpdate,
    ...props
  }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [currentQuality, setCurrentQuality] = useState<VideoQuality>(quality);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [showQualitySelector, setShowQualitySelector] = useState(false);

    // Combine refs
    const combinedRef = (element: HTMLVideoElement | null) => {
      if (videoRef) {
        videoRef.current = element;
      }
      if (ref) {
        if (typeof ref === 'function') {
          ref(element);
        } else {
          ref.current = element;
        }
      }
    };

    useEffect(() => {
      if (!videoRef.current) return;

      const video = videoRef.current;
      const videoId = src;

      const preloadAttr = props.preload;
      const preload: VideoPreload =
        preloadAttr === 'auto' || preloadAttr === 'metadata' || preloadAttr === 'none'
          ? preloadAttr
          : 'metadata';

      // Create optimized configuration
      const config: VideoConfig = {
        src,
        quality: currentQuality,
        muted: true, // Always start muted as per requirements
        autoplay: props.autoPlay || false,
        loop: props.loop || false,
        preload,
        poster,
        controls: showControls,
        playsInline: true,
      };

      // Apply optimization
      const optimizedConfig = videoQualityManager.optimizeForConnection(config);
      
      // Apply optimized settings
      video.muted = optimizedConfig.muted;
      video.autoplay = optimizedConfig.autoplay;
      video.loop = optimizedConfig.loop;
      video.preload = optimizedConfig.preload;
      video.playsInline = optimizedConfig.playsInline ?? true;
      video.controls = showControls;

      if (optimizedConfig.poster) {
        video.poster = optimizedConfig.poster;
      }

      // Generate and set sources
      const sources = videoQualityManager.handleQualityChange(videoId, optimizedConfig.quality);
      
      // Clear existing sources
      const existingSources = video.querySelectorAll('source');
      existingSources.forEach(source => source.remove());

      // Add optimized sources
      sources.forEach(source => {
        const sourceElement = document.createElement('source');
        sourceElement.src = source.src;
        sourceElement.type = source.type;
        video.appendChild(sourceElement);
      });

      // Set up performance monitoring
      const cleanup = videoQualityManager.monitorPerformance(video, videoId);

      // Event listeners
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => setIsLoading(false);
      const handleError = () => {
        setHasError(true);
        setIsLoading(false);
      };

      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      // Load the video
      video.load();

      return () => {
        cleanup();
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }, [src, currentQuality, showControls, poster, props.autoPlay, props.loop, props.preload]);

    const handleQualitySelect = (newQuality: VideoQuality) => {
      setCurrentQuality(newQuality);
      onQualityChange?.(newQuality);
      setShowQualitySelector(false);
    };

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
      }
    };

    const togglePlay = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };

    if (hasError) {
      return (
        <div className={cn(
          'flex items-center justify-center bg-mm-graphite text-mm-cream rounded-lg p-8',
          containerClassName
        )}>
          <div className="text-center">
            <div className="text-lg font-display mb-2">Video Unavailable</div>
            <div className="text-sm opacity-75">This video cannot be played.</div>
          </div>
        </div>
      );
    }

    return (
      <div className={cn('relative group', containerClassName)}>
        <video
          ref={combinedRef}
          className={cn(
            'w-full h-full object-cover',
            isLoading && 'opacity-50',
            className
          )}
          {...props}
        />

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-mm-graphite bg-opacity-50">
            <div className="w-8 h-8 border-2 border-mm-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Custom controls overlay */}
        {!showControls && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-4 bg-black bg-opacity-50 rounded-lg p-4">
              <button
                onClick={togglePlay}
                className="text-white hover:text-mm-gold transition-colors"
                aria-label="Toggle play/pause"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              
              <button
                onClick={toggleMute}
                className="text-white hover:text-mm-gold transition-colors"
                aria-label="Toggle mute"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowQualitySelector(!showQualitySelector)}
                  className="text-white hover:text-mm-gold transition-colors text-sm"
                  aria-label="Quality settings"
                >
                  {currentQuality.toUpperCase()}
                </button>
                
                {showQualitySelector && (
                  <div className="absolute bottom-full mb-2 left-0 bg-black bg-opacity-90 rounded-lg p-2 min-w-20">
                    {(['auto', 'high', 'medium', 'low'] as VideoQuality[]).map((q) => (
                      <button
                        key={q}
                        onClick={() => handleQualitySelect(q)}
                        className={cn(
                          'block w-full text-left px-3 py-1 text-sm rounded transition-colors',
                          currentQuality === q 
                            ? 'text-mm-gold bg-mm-gold bg-opacity-20' 
                            : 'text-white hover:text-mm-gold'
                        )}
                      >
                        {q.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

OptimizedVideoPlayer.displayName = 'OptimizedVideoPlayer';

// Hook for video optimization
export function useVideoOptimization(src: string, quality: VideoQuality = 'auto') {
  const [optimizedConfig, setOptimizedConfig] = useState<VideoConfig | null>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

  useEffect(() => {
    const config: VideoConfig = {
      src,
      quality,
      muted: true,
      autoplay: false,
      loop: false,
      preload: 'metadata',
    };

    const optimized = videoQualityManager.optimizeForConnection(config);
    setOptimizedConfig(optimized);

    // Get performance metrics periodically
    const interval = setInterval(() => {
      const metrics = videoQualityManager.getPerformanceMetrics(src);
      setPerformanceMetrics(metrics);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [src, quality]);

  return {
    optimizedConfig,
    performanceMetrics,
    changeQuality: (newQuality: VideoQuality) => {
      return videoQualityManager.handleQualityChange(src, newQuality);
    },
  };
}