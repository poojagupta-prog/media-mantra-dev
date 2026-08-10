/**
 * Video Quality Manager Types
 * Defines interfaces for video optimization and quality management
 */

export type VideoQuality = 'auto' | 'high' | 'medium' | 'low';
export type VideoPreload = 'auto' | 'metadata' | 'none';
export type ConnectionType = 'slow-2g' | '2g' | '3g' | '4g' | 'unknown';

export interface VideoConfig {
  src: string;
  quality: VideoQuality;
  muted: boolean;
  autoplay: boolean;
  loop: boolean;
  preload: VideoPreload;
  poster?: string;
  controls?: boolean;
  playsInline?: boolean;
}

export interface VideoSource {
  src: string;
  type: string;
  quality: VideoQuality;
  bitrate?: number;
  resolution?: string;
}

export interface VideoQualitySettings {
  high: {
    maxBitrate: number;
    resolution: string;
    codec: string;
  };
  medium: {
    maxBitrate: number;
    resolution: string;
    codec: string;
  };
  low: {
    maxBitrate: number;
    resolution: string;
    codec: string;
  };
}

export interface ConnectionInfo {
  effectiveType: ConnectionType;
  downlink: number;
  rtt: number;
  saveData: boolean;
}

export interface VideoPerformanceMetrics {
  loadTime: number;
  bufferingEvents: number;
  qualityChanges: number;
  totalPlayTime: number;
  errorCount: number;
}