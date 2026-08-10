/**
 * Animation Engine Types
 * Defines interfaces for animation management and configuration
 */

export type AnimationType = 'counter' | 'globe' | 'fade' | 'slide' | 'scale' | 'rotate';
export type AnimationTrigger = 'viewport' | 'load' | 'interaction' | 'manual';
export type EasingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'bounce' | 'elastic';

export interface AnimationConfig {
  type: AnimationType;
  duration: number;
  easing: EasingFunction;
  trigger: AnimationTrigger;
  delay?: number;
  repeat?: number | 'infinite';
  yoyo?: boolean;
}

export interface MetricsAnimation extends AnimationConfig {
  startValue: number;
  endValue: number;
  format: 'number' | 'percentage' | 'currency';
  suffix?: string;
  prefix?: string;
}

export interface ViewportTriggerOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface AnimationState {
  /** GSAP-driven instances registered in the engine (not the DOM `Animation` API). */
  activeAnimations: Map<string, AnimationInstance>;
  queuedAnimations: AnimationConfig[];
  performanceMetrics: {
    fps: number;
    memoryUsage: number;
    activeElements: number;
  };
  preferences: {
    reducedMotion: boolean;
    highPerformance: boolean;
  };
}

export interface AnimationInstance {
  id: string;
  element: HTMLElement;
  config: AnimationConfig;
  status: 'idle' | 'running' | 'paused' | 'completed' | 'cancelled';
  progress: number;
  startTime?: number;
  endTime?: number;
}

export interface AnimationEngineOptions {
  respectReducedMotion?: boolean;
  performanceMonitoring?: boolean;
  maxConcurrentAnimations?: number;
}