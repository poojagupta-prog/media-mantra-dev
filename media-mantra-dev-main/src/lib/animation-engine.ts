/**
 * Animation Engine
 * Coordinates all animated elements with performance optimization
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  AnimationConfig, 
  AnimationInstance, 
  AnimationState, 
  AnimationEngineOptions,
  ViewportTriggerOptions 
} from '@/types/animation';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export class AnimationEngine {
  private animations: Map<string, AnimationInstance> = new Map();
  private intersectionObserver?: IntersectionObserver;
  private performanceMonitor?: PerformanceObserver;
  private options: Required<AnimationEngineOptions>;

  constructor(options: AnimationEngineOptions = {}) {
    this.options = {
      respectReducedMotion: true,
      performanceMonitoring: true,
      maxConcurrentAnimations: 10,
      ...options,
    };

    this.initializePerformanceMonitoring();
    this.setupReducedMotionHandling();
  }

  /**
   * Register an animation with the engine
   */
  registerAnimation(id: string, element: HTMLElement, config: AnimationConfig): void {
    if (this.animations.has(id)) {
      console.warn(`Animation with id "${id}" already exists. Overwriting.`);
    }

    const instance: AnimationInstance = {
      id,
      element,
      config,
      status: 'idle',
      progress: 0,
    };

    this.animations.set(id, instance);

    // Set up trigger based on configuration
    this.setupAnimationTrigger(instance);
  }

  /**
   * Trigger an animation manually
   */
  async triggerAnimation(id: string): Promise<void> {
    const instance = this.animations.get(id);
    if (!instance) {
      throw new Error(`Animation with id "${id}" not found`);
    }

    if (instance.status === 'running') {
      console.warn(`Animation "${id}" is already running`);
      return;
    }

    // Check if reduced motion is preferred
    if (this.shouldRespectReducedMotion()) {
      this.applyReducedMotionFallback(instance);
      return;
    }

    // Check concurrent animation limit
    if (this.getActiveAnimationCount() >= this.options.maxConcurrentAnimations) {
      console.warn(`Maximum concurrent animations (${this.options.maxConcurrentAnimations}) reached`);
      return;
    }

    await this.executeAnimation(instance);
  }

  /**
   * Pause all animations
   */
  pauseAllAnimations(): void {
    this.animations.forEach((instance) => {
      if (instance.status === 'running') {
        gsap.getById(instance.id)?.pause();
        instance.status = 'paused';
      }
    });
  }

  /**
   * Resume paused animations
   */
  resumeAnimations(): void {
    this.animations.forEach((instance) => {
      if (instance.status === 'paused') {
        gsap.getById(instance.id)?.resume();
        instance.status = 'running';
      }
    });
  }

  /**
   * Stop and remove an animation
   */
  removeAnimation(id: string): void {
    const instance = this.animations.get(id);
    if (instance) {
      gsap.getById(id)?.kill();
      this.animations.delete(id);
    }
  }

  /**
   * Create viewport trigger for animations
   */
  createViewportTrigger(
    element: HTMLElement,
    callback: () => void,
    options: ViewportTriggerOptions = {}
  ): void {
    const {
      threshold = 0.1,
      rootMargin = '0px',
      triggerOnce = true,
    } = options;

    if (!this.intersectionObserver) {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const elementCallback = (entry.target as any).__animationCallback;
              if (elementCallback) {
                elementCallback();
                if (triggerOnce) {
                  this.intersectionObserver?.unobserve(entry.target);
                }
              }
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );
    }

    (element as any).__animationCallback = callback;
    this.intersectionObserver.observe(element);
  }

  /**
   * Get animation state and performance metrics
   */
  getState(): AnimationState {
    return {
      activeAnimations: new Map(this.animations),
      queuedAnimations: [],
      performanceMetrics: {
        fps: this.getCurrentFPS(),
        memoryUsage: this.getMemoryUsage(),
        activeElements: this.getActiveAnimationCount(),
      },
      preferences: {
        reducedMotion: this.shouldRespectReducedMotion(),
        highPerformance: this.options.performanceMonitoring,
      },
    };
  }

  /**
   * Execute an animation instance
   */
  private async executeAnimation(instance: AnimationInstance): Promise<void> {
    const { element, config } = instance;
    
    instance.status = 'running';
    instance.startTime = Date.now();

    return new Promise((resolve, reject) => {
      let animationProps: gsap.TweenVars = {
        duration: config.duration / 1000, // Convert to seconds for GSAP
        ease: this.convertEasing(config.easing),
        delay: (config.delay || 0) / 1000,
        onComplete: () => {
          instance.status = 'completed';
          instance.endTime = Date.now();
          instance.progress = 1;
          resolve();
        },
        onUpdate: () => {
          const tween = gsap.getById(instance.id);
          if (tween) {
            instance.progress = tween.progress();
          }
        },
        id: instance.id,
      };

      // Add repeat and yoyo if specified
      if (config.repeat) {
        animationProps.repeat = config.repeat === 'infinite' ? -1 : config.repeat;
      }
      if (config.yoyo) {
        animationProps.yoyo = true;
      }

      // Apply animation based on type
      switch (config.type) {
        case 'fade':
          animationProps.opacity = element.style.opacity === '0' ? 1 : 0;
          break;
        case 'slide':
          animationProps.x = 0;
          animationProps.y = 0;
          break;
        case 'scale':
          animationProps.scale = 1;
          break;
        case 'rotate':
          animationProps.rotation = 360;
          break;
        default:
          // Custom animation handling
          break;
      }

      try {
        gsap.to(element, animationProps);
      } catch (error) {
        instance.status = 'cancelled';
        reject(error);
      }
    });
  }

  /**
   * Set up animation trigger based on configuration
   */
  private setupAnimationTrigger(instance: AnimationInstance): void {
    const { config, element } = instance;

    switch (config.trigger) {
      case 'viewport':
        this.createViewportTrigger(element, () => {
          this.triggerAnimation(instance.id);
        });
        break;
      case 'load':
        if (document.readyState === 'complete') {
          this.triggerAnimation(instance.id);
        } else {
          window.addEventListener('load', () => {
            this.triggerAnimation(instance.id);
          });
        }
        break;
      case 'interaction':
        element.addEventListener('click', () => {
          this.triggerAnimation(instance.id);
        });
        break;
      case 'manual':
        // No automatic trigger
        break;
    }
  }

  /**
   * Convert easing function names to GSAP format
   */
  private convertEasing(easing: string): string {
    const easingMap: Record<string, string> = {
      'ease': 'power2.inOut',
      'ease-in': 'power2.in',
      'ease-out': 'power2.out',
      'ease-in-out': 'power2.inOut',
      'linear': 'none',
      'bounce': 'bounce.out',
      'elastic': 'elastic.out',
    };

    return easingMap[easing] || easing;
  }

  /**
   * Check if reduced motion should be respected
   */
  private shouldRespectReducedMotion(): boolean {
    if (!this.options.respectReducedMotion) return false;
    
    if (typeof window === 'undefined') return false;
    
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Apply reduced motion fallback
   */
  private applyReducedMotionFallback(instance: AnimationInstance): void {
    const { element, config } = instance;
    
    // Apply end state immediately without animation
    switch (config.type) {
      case 'fade':
        element.style.opacity = '1';
        break;
      case 'slide':
        element.style.transform = 'translate(0, 0)';
        break;
      case 'scale':
        element.style.transform = 'scale(1)';
        break;
      case 'rotate':
        element.style.transform = 'rotate(0deg)';
        break;
    }

    instance.status = 'completed';
    instance.progress = 1;
  }

  /**
   * Get count of currently active animations
   */
  private getActiveAnimationCount(): number {
    return Array.from(this.animations.values()).filter(
      instance => instance.status === 'running'
    ).length;
  }

  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {
    if (!this.options.performanceMonitoring || typeof window === 'undefined') return;

    try {
      this.performanceMonitor = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'measure' && entry.name.startsWith('animation-')) {
            console.debug(`Animation performance: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });

      this.performanceMonitor.observe({ entryTypes: ['measure'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }

  /**
   * Set up reduced motion preference handling
   */
  private setupReducedMotionHandling(): void {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        this.pauseAllAnimations();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
  }

  /**
   * Get current FPS (simplified estimation)
   */
  private getCurrentFPS(): number {
    // This is a simplified FPS estimation
    // In a real implementation, you'd use more sophisticated monitoring
    return 60; // Placeholder
  }

  /**
   * Get memory usage (if available)
   */
  private getMemoryUsage(): number {
    if (typeof window !== 'undefined' && 'performance' in window && 'memory' in performance) {
      return (performance as any).memory.usedJSHeapSize;
    }
    return 0;
  }

  /**
   * Cleanup resources
   */
  destroy(): void {
    this.animations.forEach((instance) => {
      gsap.getById(instance.id)?.kill();
    });
    this.animations.clear();

    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }

    if (this.performanceMonitor) {
      this.performanceMonitor.disconnect();
    }
  }
}

// Singleton instance
export const animationEngine = new AnimationEngine();