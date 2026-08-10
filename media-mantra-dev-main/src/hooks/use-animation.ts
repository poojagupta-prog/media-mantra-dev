"use client";

import { useEffect, useRef, useCallback } from 'react';
import { animationEngine } from '@/lib/animation-engine';
import { AnimationConfig, ViewportTriggerOptions } from '@/types/animation';

interface UseAnimationOptions extends AnimationConfig {
  autoStart?: boolean;
  viewportOptions?: ViewportTriggerOptions;
}

interface UseAnimationReturn {
  ref: React.RefObject<HTMLElement | null>;
  start: () => Promise<void>;
  pause: () => void;
  resume: () => void;
  remove: () => void;
}

export function useAnimation(
  animationId: string,
  options: UseAnimationOptions
): UseAnimationReturn {
  const ref = useRef<HTMLElement>(null);
  const { autoStart = true, viewportOptions, ...config } = options;

  const start = useCallback(async () => {
    if (ref.current) {
      await animationEngine.triggerAnimation(animationId);
    }
  }, [animationId]);

  const pause = useCallback(() => {
    animationEngine.pauseAllAnimations();
  }, []);

  const resume = useCallback(() => {
    animationEngine.resumeAnimations();
  }, []);

  const remove = useCallback(() => {
    animationEngine.removeAnimation(animationId);
  }, [animationId]);

  useEffect(() => {
    if (ref.current) {
      animationEngine.registerAnimation(animationId, ref.current, config);

      if (autoStart && config.trigger === 'manual') {
        start();
      }
    }

    return () => {
      remove();
    };
  }, [animationId, config, autoStart, start, remove]);

  return {
    ref,
    start,
    pause,
    resume,
    remove,
  };
}

// Hook for viewport-triggered animations
export function useViewportAnimation(
  animationId: string,
  config: Omit<AnimationConfig, 'trigger'>,
  viewportOptions?: ViewportTriggerOptions
): UseAnimationReturn {
  return useAnimation(animationId, {
    ...config,
    trigger: 'viewport',
    viewportOptions,
  });
}

// Hook for scroll-triggered animations using GSAP ScrollTrigger
export function useScrollAnimation(
  animationId: string,
  config: Omit<AnimationConfig, 'trigger'>
): UseAnimationReturn {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && typeof window !== 'undefined') {
      const { ScrollTrigger } = require('gsap/ScrollTrigger');
      const { gsap } = require('gsap');

      const element = ref.current;
      
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          animationEngine.triggerAnimation(animationId);
        },
        markers: false, // Set to true for debugging
      });

      animationEngine.registerAnimation(animationId, element, {
        ...config,
        trigger: 'manual',
      });
    }

    return () => {
      animationEngine.removeAnimation(animationId);
    };
  }, [animationId, config]);

  const start = useCallback(async () => {
    await animationEngine.triggerAnimation(animationId);
  }, [animationId]);

  const pause = useCallback(() => {
    animationEngine.pauseAllAnimations();
  }, []);

  const resume = useCallback(() => {
    animationEngine.resumeAnimations();
  }, []);

  const remove = useCallback(() => {
    animationEngine.removeAnimation(animationId);
  }, [animationId]);

  return {
    ref,
    start,
    pause,
    resume,
    remove,
  };
}