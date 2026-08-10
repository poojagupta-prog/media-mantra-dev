/**
 * Content Integration System Types
 * Defines interfaces for dynamic content management
 */

export type ContentSourceType = 'document' | 'api' | 'static';
export type ContentFormat = 'markdown' | 'json' | 'html' | 'text';

export interface ContentSource {
  type: ContentSourceType;
  source: string;
  format: ContentFormat;
}

export interface ContentSection {
  sectionId: string;
  content: ContentSource;
  fallback?: string;
  cache?: boolean;
}

export interface CallToAction {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface ClientLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
}

export interface MetricItem {
  value: number;
  label: string;
  format: 'number' | 'percentage' | 'currency';
  suffix?: string;
  animationDuration: number;
}

export interface FounderProfile {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  fullBio?: string;
}

export interface FrameworkDivision {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  phone?: string;
  email?: string;
}

export interface ContentModel {
  sections: {
    intro: {
      headline: string;
      body: string;
      cta?: CallToAction;
    };
    location: {
      title: string;
      content: string;
      globeEnabled: boolean;
    };
    clients: {
      title: string;
      headline: string;
      description: string;
      logos: ClientLogo[];
    };
    metrics: {
      title: string;
      headline: string;
      body: string;
      stats: MetricItem[];
    };
    about: {
      headline: string;
      content: string;
      founders: FounderProfile[];
    };
    framework: {
      divisions: FrameworkDivision[];
    };
    contact: {
      offices: OfficeLocation[];
      workLink: string;
    };
  };
}

export interface ContentCache {
  [sectionId: string]: {
    content: string;
    timestamp: number;
    ttl: number;
  };
}