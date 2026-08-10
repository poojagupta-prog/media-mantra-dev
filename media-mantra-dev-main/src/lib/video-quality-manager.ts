/**
 * Video Quality Manager
 * Handles video optimization, quality selection, and performance monitoring
 */

import { 
  VideoConfig, 
  VideoSource, 
  VideoQuality, 
  ConnectionInfo, 
  VideoQualitySettings,
  VideoPerformanceMetrics 
} from '@/types/video';

export class VideoQualityManager {
  private qualitySettings: VideoQualitySettings = {
    high: {
      maxBitrate: 5000000, // 5 Mbps
      resolution: '1920x1080',
      codec: 'video/mp4; codecs="avc1.42E01E"',
    },
    medium: {
      maxBitrate: 2500000, // 2.5 Mbps
      resolution: '1280x720',
      codec: 'video/mp4; codecs="avc1.42E01E"',
    },
    low: {
      maxBitrate: 1000000, // 1 Mbps
      resolution: '854x480',
      codec: 'video/mp4; codecs="avc1.42E01E"',
    },
  };

  private performanceMetrics: Map<string, VideoPerformanceMetrics> = new Map();

  /**
   * Optimize video configuration based on connection and device capabilities
   */
  optimizeForConnection(baseConfig: VideoConfig): VideoConfig {
    const connectionInfo = this.getConnectionInfo();
    const optimalQuality = this.determineOptimalQuality(connectionInfo);
    
    return {
      ...baseConfig,
      quality: baseConfig.quality === 'auto' ? optimalQuality : baseConfig.quality,
      preload: this.getOptimalPreload(connectionInfo),
      muted: true, // Always start muted as per requirements
    };
  }

  /**
   * Handle quality change based on performance
   */
  handleQualityChange(videoId: string, newQuality: VideoQuality): VideoSource[] {
    const sources = this.generateVideoSources(videoId, newQuality);
    this.updatePerformanceMetrics(videoId, 'qualityChange');
    return sources;
  }

  /**
   * Preload optimization based on connection
   */
  preloadOptimization(config: VideoConfig): VideoConfig {
    const connectionInfo = this.getConnectionInfo();
    
    if (connectionInfo.saveData || connectionInfo.effectiveType === 'slow-2g') {
      return {
        ...config,
        preload: 'none',
        autoplay: false,
      };
    }

    if (connectionInfo.effectiveType === '2g' || connectionInfo.effectiveType === '3g') {
      return {
        ...config,
        preload: 'metadata',
      };
    }

    return {
      ...config,
      preload: 'auto',
    };
  }

  /**
   * Get optimal bitrate based on connection
   */
  getOptimalBitrate(quality: VideoQuality = 'auto'): number {
    if (quality === 'auto') {
      const connectionInfo = this.getConnectionInfo();
      quality = this.determineOptimalQuality(connectionInfo);
    }

    return this.qualitySettings[quality as keyof VideoQualitySettings].maxBitrate;
  }

  /**
   * Create video element with optimized settings
   */
  createOptimizedVideo(config: VideoConfig): HTMLVideoElement {
    const video = document.createElement('video');
    const optimizedConfig = this.optimizeForConnection(config);

    // Apply basic attributes
    video.muted = optimizedConfig.muted;
    video.autoplay = optimizedConfig.autoplay;
    video.loop = optimizedConfig.loop;
    video.preload = optimizedConfig.preload;
    video.playsInline = optimizedConfig.playsInline ?? true;
    video.controls = optimizedConfig.controls ?? false;

    if (optimizedConfig.poster) {
      video.poster = optimizedConfig.poster;
    }

    // Add sources
    const sources = this.generateVideoSources(optimizedConfig.src, optimizedConfig.quality);
    sources.forEach(source => {
      const sourceElement = document.createElement('source');
      sourceElement.src = source.src;
      sourceElement.type = source.type;
      video.appendChild(sourceElement);
    });

    // Add event listeners for performance monitoring
    this.attachPerformanceListeners(video, optimizedConfig.src);

    return video;
  }

  /**
   * Monitor video performance and adjust quality
   */
  monitorPerformance(videoElement: HTMLVideoElement, videoId: string): () => void {
    let bufferingCount = 0;
    let loadStartTime = Date.now();

    const handleLoadStart = () => {
      loadStartTime = Date.now();
    };

    const handleCanPlay = () => {
      const loadTime = Date.now() - loadStartTime;
      this.updatePerformanceMetrics(videoId, 'loadTime', loadTime);
    };

    const handleWaiting = () => {
      bufferingCount++;
      this.updatePerformanceMetrics(videoId, 'buffering');
    };

    const handleError = () => {
      this.updatePerformanceMetrics(videoId, 'error');
      this.handleVideoError(videoElement, videoId);
    };

    videoElement.addEventListener('loadstart', handleLoadStart);
    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.addEventListener('waiting', handleWaiting);
    videoElement.addEventListener('error', handleError);

    // Cleanup function
    return () => {
      videoElement.removeEventListener('loadstart', handleLoadStart);
      videoElement.removeEventListener('canplay', handleCanPlay);
      videoElement.removeEventListener('waiting', handleWaiting);
      videoElement.removeEventListener('error', handleError);
    };
  }

  /**
   * Get connection information
   */
  private getConnectionInfo(): ConnectionInfo {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      return {
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0,
        saveData: connection.saveData || false,
      };
    }

    // Fallback for browsers without Network Information API
    return {
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0,
      saveData: false,
    };
  }

  /**
   * Determine optimal quality based on connection
   */
  private determineOptimalQuality(connectionInfo: ConnectionInfo): VideoQuality {
    if (connectionInfo.saveData) {
      return 'low';
    }

    switch (connectionInfo.effectiveType) {
      case 'slow-2g':
      case '2g':
        return 'low';
      case '3g':
        return 'medium';
      case '4g':
        return connectionInfo.downlink > 5 ? 'high' : 'medium';
      default:
        return 'medium';
    }
  }

  /**
   * Get optimal preload setting
   */
  private getOptimalPreload(connectionInfo: ConnectionInfo): 'auto' | 'metadata' | 'none' {
    if (connectionInfo.saveData || connectionInfo.effectiveType === 'slow-2g') {
      return 'none';
    }

    if (connectionInfo.effectiveType === '2g' || connectionInfo.effectiveType === '3g') {
      return 'metadata';
    }

    return 'auto';
  }

  /**
   * Generate video sources for different qualities
   */
  private generateVideoSources(baseSrc: string, quality: VideoQuality): VideoSource[] {
    const sources: VideoSource[] = [];
    
    // Extract file extension and base path
    const lastDotIndex = baseSrc.lastIndexOf('.');
    const basePath = baseSrc.substring(0, lastDotIndex);
    const extension = baseSrc.substring(lastDotIndex);

    if (quality === 'auto' || quality === 'high') {
      sources.push({
        src: `${basePath}-1080p${extension}`,
        type: 'video/mp4',
        quality: 'high',
        bitrate: this.qualitySettings.high.maxBitrate,
        resolution: this.qualitySettings.high.resolution,
      });
    }

    if (quality === 'auto' || quality === 'medium') {
      sources.push({
        src: `${basePath}-720p${extension}`,
        type: 'video/mp4',
        quality: 'medium',
        bitrate: this.qualitySettings.medium.maxBitrate,
        resolution: this.qualitySettings.medium.resolution,
      });
    }

    if (quality === 'auto' || quality === 'low') {
      sources.push({
        src: `${basePath}-480p${extension}`,
        type: 'video/mp4',
        quality: 'low',
        bitrate: this.qualitySettings.low.maxBitrate,
        resolution: this.qualitySettings.low.resolution,
      });
    }

    // Fallback to original source if no quality variants exist
    if (sources.length === 0) {
      sources.push({
        src: baseSrc,
        type: 'video/mp4',
        quality: 'medium',
      });
    }

    return sources;
  }

  /**
   * Attach performance monitoring listeners
   */
  private attachPerformanceListeners(video: HTMLVideoElement, videoId: string): void {
    const metrics: VideoPerformanceMetrics = {
      loadTime: 0,
      bufferingEvents: 0,
      qualityChanges: 0,
      totalPlayTime: 0,
      errorCount: 0,
    };

    this.performanceMetrics.set(videoId, metrics);

    let playStartTime = 0;

    video.addEventListener('loadstart', () => {
      metrics.loadTime = Date.now();
    });

    video.addEventListener('canplay', () => {
      metrics.loadTime = Date.now() - metrics.loadTime;
    });

    video.addEventListener('play', () => {
      playStartTime = Date.now();
    });

    video.addEventListener('pause', () => {
      if (playStartTime > 0) {
        metrics.totalPlayTime += Date.now() - playStartTime;
        playStartTime = 0;
      }
    });

    video.addEventListener('waiting', () => {
      metrics.bufferingEvents++;
    });

    video.addEventListener('error', () => {
      metrics.errorCount++;
    });
  }

  /**
   * Update performance metrics
   */
  private updatePerformanceMetrics(
    videoId: string, 
    metric: keyof VideoPerformanceMetrics | 'qualityChange' | 'buffering' | 'error',
    value?: number
  ): void {
    const metrics = this.performanceMetrics.get(videoId);
    if (!metrics) return;

    switch (metric) {
      case 'loadTime':
        if (value !== undefined) metrics.loadTime = value;
        break;
      case 'qualityChange':
        metrics.qualityChanges++;
        break;
      case 'buffering':
        metrics.bufferingEvents++;
        break;
      case 'error':
        metrics.errorCount++;
        break;
    }

    this.performanceMetrics.set(videoId, metrics);
  }

  /**
   * Handle video errors with fallback strategies
   */
  private handleVideoError(videoElement: HTMLVideoElement, videoId: string): void {
    const error = videoElement.error;
    if (!error) return;

    console.warn(`Video error for ${videoId}:`, error.message);

    switch (error.code) {
      case MediaError.MEDIA_ERR_NETWORK:
        // Retry with lower quality
        this.retryWithLowerQuality(videoElement, videoId);
        break;
      case MediaError.MEDIA_ERR_DECODE:
        // Try different codec or format
        this.tryAlternativeFormat(videoElement, videoId);
        break;
      case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
        // Show fallback content
        this.showFallbackContent(videoElement);
        break;
      default:
        this.showGenericError(videoElement);
    }
  }

  /**
   * Retry video with lower quality
   */
  private retryWithLowerQuality(videoElement: HTMLVideoElement, videoId: string): void {
    const currentSrc = videoElement.currentSrc;
    let newQuality: VideoQuality = 'low';

    if (currentSrc.includes('-1080p')) {
      newQuality = 'medium';
    } else if (currentSrc.includes('-720p')) {
      newQuality = 'low';
    }

    const newSources = this.generateVideoSources(videoId, newQuality);
    this.updateVideoSources(videoElement, newSources);
  }

  /**
   * Try alternative video format
   */
  private tryAlternativeFormat(videoElement: HTMLVideoElement, videoId: string): void {
    // Implementation would try WebM or other formats
    console.warn('Trying alternative format for video:', videoId);
  }

  /**
   * Show fallback content when video fails
   */
  private showFallbackContent(videoElement: HTMLVideoElement): void {
    const fallback = document.createElement('div');
    fallback.className = 'video-fallback bg-mm-graphite text-mm-cream p-8 rounded-lg text-center';
    fallback.innerHTML = `
      <div class="text-lg font-display mb-2">Video Unavailable</div>
      <div class="text-sm opacity-75">This video cannot be played in your browser.</div>
    `;
    
    videoElement.parentNode?.replaceChild(fallback, videoElement);
  }

  /**
   * Show generic error message
   */
  private showGenericError(videoElement: HTMLVideoElement): void {
    const error = document.createElement('div');
    error.className = 'video-error bg-red-900 text-white p-4 rounded text-center';
    error.textContent = 'An error occurred while loading the video.';
    
    videoElement.parentNode?.replaceChild(error, videoElement);
  }

  /**
   * Update video sources
   */
  private updateVideoSources(videoElement: HTMLVideoElement, sources: VideoSource[]): void {
    // Clear existing sources
    const existingSources = videoElement.querySelectorAll('source');
    existingSources.forEach(source => source.remove());

    // Add new sources
    sources.forEach(source => {
      const sourceElement = document.createElement('source');
      sourceElement.src = source.src;
      sourceElement.type = source.type;
      videoElement.appendChild(sourceElement);
    });

    // Reload video
    videoElement.load();
  }

  /**
   * Get performance metrics for a video
   */
  getPerformanceMetrics(videoId: string): VideoPerformanceMetrics | null {
    return this.performanceMetrics.get(videoId) || null;
  }

  /**
   * Clear performance metrics
   */
  clearMetrics(videoId?: string): void {
    if (videoId) {
      this.performanceMetrics.delete(videoId);
    } else {
      this.performanceMetrics.clear();
    }
  }
}

// Singleton instance
export const videoQualityManager = new VideoQualityManager();