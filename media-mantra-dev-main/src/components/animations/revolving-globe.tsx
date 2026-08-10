"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlobeConfig {
  rotationSpeed: number; // degrees per second
  pauseOnHover: boolean;
  responsive: boolean;
  quality: 'low' | 'medium' | 'high';
  autoStart: boolean;
}

interface RevolvingGlobeProps {
  className?: string;
  config?: Partial<GlobeConfig>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'wireframe' | 'solid' | 'dotted';
}

const defaultConfig: GlobeConfig = {
  rotationSpeed: 5, // 5 degrees per second (72 seconds for full rotation)
  pauseOnHover: true,
  responsive: true,
  quality: 'medium',
  autoStart: true,
};

export function RevolvingGlobe({
  className,
  config: userConfig = {},
  size = 'md',
  variant = 'wireframe',
}: RevolvingGlobeProps) {
  const globeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const config = { ...defaultConfig, ...userConfig };

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  };

  const startRotation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Check if should pause on hover
      if (config.pauseOnHover && isHovered) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Calculate rotation increment
      const rotationIncrement = (config.rotationSpeed * deltaTime) / 1000;
      
      setRotation(prev => (prev + rotationIncrement) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const stopRotation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      setIsAnimating(false);
    }
  };

  const setSpeed = (speed: number) => {
    config.rotationSpeed = speed;
  };

  useEffect(() => {
    if (config.autoStart) {
      startRotation();
    }

    return () => {
      stopRotation();
    };
  }, [config.autoStart]);

  // Handle reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        stopRotation();
      } else if (config.autoStart) {
        startRotation();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // Check initial state
    if (mediaQuery.matches) {
      stopRotation();
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [config.autoStart]);

  const renderGlobeVariant = () => {
    const baseClasses = "absolute inset-0 rounded-full border-2 transition-all duration-300";
    
    switch (variant) {
      case 'wireframe':
        return (
          <div className="relative w-full h-full">
            {/* Outer ring */}
            <div 
              className={cn(baseClasses, "border-mm-gold opacity-60")}
              style={{ transform: `rotateY(${rotation}deg)` }}
            />
            {/* Inner rings */}
            <div 
              className={cn(baseClasses, "border-mm-gold opacity-40 scale-75")}
              style={{ transform: `rotateY(${rotation * 1.2}deg)` }}
            />
            <div 
              className={cn(baseClasses, "border-mm-gold opacity-20 scale-50")}
              style={{ transform: `rotateY(${rotation * 1.5}deg)` }}
            />
            {/* Meridian lines */}
            <div 
              className="absolute inset-0 border-l-2 border-r-2 border-mm-gold opacity-30 rounded-full"
              style={{ transform: `rotateY(${rotation}deg)` }}
            />
            <div 
              className="absolute inset-0 border-l-2 border-r-2 border-mm-gold opacity-20 rounded-full"
              style={{ transform: `rotateY(${rotation + 45}deg)` }}
            />
            <div 
              className="absolute inset-0 border-l-2 border-r-2 border-mm-gold opacity-20 rounded-full"
              style={{ transform: `rotateY(${rotation + 90}deg)` }}
            />
          </div>
        );
      
      case 'solid':
        return (
          <div className="relative w-full h-full">
            <div 
              className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-br from-mm-gold to-mm-graphite",
                "shadow-lg opacity-80"
              )}
              style={{ transform: `rotateY(${rotation}deg)` }}
            />
            {/* Highlight */}
            <div 
              className="absolute top-2 left-2 w-4 h-4 bg-mm-cream rounded-full opacity-60 blur-sm"
              style={{ transform: `rotateY(${rotation}deg)` }}
            />
          </div>
        );
      
      case 'dotted':
        return (
          <div className="relative w-full h-full">
            {/* Generate dots in a globe pattern */}
            {Array.from({ length: 24 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-mm-gold rounded-full opacity-60"
                style={{
                  top: `${20 + Math.sin((i * Math.PI) / 12) * 30}%`,
                  left: `${50 + Math.cos((i * Math.PI) / 12 + rotation * Math.PI / 180) * 30}%`,
                  transform: `scale(${0.5 + Math.cos((i * Math.PI) / 12 + rotation * Math.PI / 180) * 0.5})`,
                }}
              />
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div
      ref={globeRef}
      className={cn(
        'relative flex items-center justify-center',
        sizeClasses[size],
        'cursor-pointer select-none',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (isAnimating) {
          stopRotation();
        } else {
          startRotation();
        }
      }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {renderGlobeVariant()}
      
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full",
          "bg-mm-gold opacity-10 blur-md scale-110",
          "animate-pulse"
        )}
        style={{
          animationDuration: '3s',
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      />
    </div>
  );
}

// Globe with custom SVG for more detailed rendering
export function SVGRevolvingGlobe({
  className,
  config: userConfig = {},
  size = 'md',
}: Omit<RevolvingGlobeProps, 'variant'>) {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const config = { ...defaultConfig, ...userConfig };

  const sizeMap = {
    sm: 64,
    md: 96,
    lg: 128,
    xl: 192,
  };

  const svgSize = sizeMap[size];

  useEffect(() => {
    if (config.autoStart) {
      setIsAnimating(true);
      let lastTime = Date.now();

      const animate = () => {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        const rotationIncrement = (config.rotationSpeed * deltaTime) / 1000;
        setRotation(prev => (prev + rotationIncrement) % 360);
        
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [config.autoStart, config.rotationSpeed]);

  return (
    <div className={cn('relative', className)}>
      <svg
        ref={svgRef}
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="drop-shadow-lg"
      >
        <defs>
          <radialGradient id="globeGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#D2B450" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#4A4A4A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#191970" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        
        {/* Globe base */}
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={svgSize / 2 - 4}
          fill="url(#globeGradient)"
          stroke="#D2B450"
          strokeWidth="1"
          opacity="0.7"
        />
        
        {/* Meridian lines */}
        {Array.from({ length: 6 }, (_, i) => (
          <ellipse
            key={`meridian-${i}`}
            cx={svgSize / 2}
            cy={svgSize / 2}
            rx={Math.cos((i * 30 + rotation) * Math.PI / 180) * (svgSize / 2 - 4)}
            ry={svgSize / 2 - 4}
            fill="none"
            stroke="#D2B450"
            strokeWidth="0.5"
            opacity="0.4"
          />
        ))}
        
        {/* Latitude lines */}
        {Array.from({ length: 5 }, (_, i) => (
          <ellipse
            key={`latitude-${i}`}
            cx={svgSize / 2}
            cy={svgSize / 2}
            rx={svgSize / 2 - 4}
            ry={(svgSize / 2 - 4) * Math.sin(((i + 1) * 30) * Math.PI / 180)}
            fill="none"
            stroke="#D2B450"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
        
        {/* Rotating highlight */}
        <circle
          cx={svgSize / 2 + Math.cos(rotation * Math.PI / 180) * (svgSize / 4)}
          cy={svgSize / 2 + Math.sin(rotation * Math.PI / 180) * (svgSize / 8)}
          r="3"
          fill="#FFFFE3"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

// Hook for controlling globe animation
export function useGlobeAnimation(config: Partial<GlobeConfig> = {}) {
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  
  const finalConfig = { ...defaultConfig, ...config };

  const start = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      const rotationIncrement = (finalConfig.rotationSpeed * deltaTime) / 1000;
      setRotation(prev => (prev + rotationIncrement) % 360);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const stop = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      setIsAnimating(false);
    }
  };

  const setSpeed = (speed: number) => {
    finalConfig.rotationSpeed = speed;
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return {
    rotation,
    isAnimating,
    start,
    stop,
    setSpeed,
  };
}