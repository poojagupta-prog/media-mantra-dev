/**
 * Content Integration System
 * Handles dynamic content loading, caching, and fallback mechanisms
 */

import { ContentSection, ContentCache, ContentModel } from '@/types/content';

export class ContentIntegrationSystem {
  private cache: ContentCache = {};
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

  /**
   * Load content from various sources
   */
  async loadContent(section: ContentSection): Promise<string> {
    const cacheKey = section.sectionId;
    
    // Check cache first
    if (section.cache && this.isCacheValid(cacheKey)) {
      return this.cache[cacheKey].content;
    }

    try {
      let content: string;

      switch (section.content.type) {
        case 'document':
          content = await this.loadFromDocument(section.content.source);
          break;
        case 'api':
          content = await this.loadFromAPI(section.content.source);
          break;
        case 'static':
          content = section.content.source;
          break;
        default:
          throw new Error(`Unsupported content type: ${section.content.type}`);
      }

      // Validate and format content
      const validatedContent = this.validateContent(content);
      
      // Cache if enabled
      if (section.cache) {
        this.cacheContent(cacheKey, validatedContent);
      }

      return validatedContent;
    } catch (error) {
      console.error(`Failed to load content for section ${section.sectionId}:`, error);
      return section.fallback || this.getDefaultContent(section.sectionId);
    }
  }

  /**
   * Update content for a specific section
   */
  updateContent(sectionId: string, content: string): void {
    if (this.validateContent(content)) {
      this.cacheContent(sectionId, content);
    } else {
      throw new Error(`Invalid content format for section: ${sectionId}`);
    }
  }

  /**
   * Validate content format and structure
   */
  validateContent(content: string): string {
    if (!content || typeof content !== 'string') {
      throw new Error('Content must be a non-empty string');
    }

    // Basic sanitization
    const sanitized = content.trim();
    
    if (sanitized.length === 0) {
      throw new Error('Content cannot be empty after sanitization');
    }

    return sanitized;
  }

  /**
   * Cache content with TTL
   */
  cacheContent(sectionId: string, content: string): void {
    this.cache[sectionId] = {
      content,
      timestamp: Date.now(),
      ttl: this.DEFAULT_TTL,
    };
  }

  /**
   * Check if cached content is still valid
   */
  private isCacheValid(sectionId: string): boolean {
    const cached = this.cache[sectionId];
    if (!cached) return false;

    const now = Date.now();
    return (now - cached.timestamp) < cached.ttl;
  }

  /**
   * Load content from document source (Google Docs, etc.)
   */
  private async loadFromDocument(source: string): Promise<string> {
    // For now, return placeholder content
    // In a real implementation, this would integrate with Google Docs API
    // or other document sources
    return this.getDocumentContent(source);
  }

  /**
   * Load content from API endpoint
   */
  private async loadFromAPI(source: string): Promise<string> {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    return await response.text();
  }

  /**
   * Get default content for sections
   */
  private getDefaultContent(sectionId: string): string {
    const defaultContent: Record<string, string> = {
      intro: 'Welcome to Media Mantra Global — Beyond Communications.',
      location: 'Our global presence spans across key markets.',
      clients: 'Trusted by leading brands worldwide.',
      metrics: 'Delivering measurable results across all campaigns.',
      about: 'We are an integrated communications agency.',
      framework: 'Our proven methodology drives success.',
      contact: 'Let\'s build influence together.',
    };

    return defaultContent[sectionId] || 'Content coming soon.';
  }

  /**
   * Get content from document sources (placeholder implementation)
   */
  private getDocumentContent(source: string): string {
    // This would integrate with actual document APIs
    // For now, return content based on the design specifications
    const documentContent: Record<string, string> = {
      'intro-content': `
        <h1>Our Trades and Sectors</h1>
        <p>Hopscotch combines 360° expertise with a profound understanding of audiences to develop strategies that enhance the relational capital of brands and organizations.</p>
        <p>Because every company faces its own challenges — transformation, reputation, visibility, acquisition, retention, engagement, growth — our trade and sectoral expertise adapt to each of your challenges to build lasting relationships with all your audiences.</p>
      `,
      'location-content': `
        <h2>Our Integrated International Network</h2>
        <p>Thanks to our integrated international network of 40 agencies, we combine a global vision of communications with a local understanding of our markets, with the same high standards of excellence and creativity.</p>
      `,
      'clients-content': `
        <h2>Brands That Trust Us</h2>
        <p>We work with leading brands across industries, delivering strategic communications that drive results and build lasting relationships.</p>
      `,
      'metrics-content': `
        <h2>Operating across the corridors that shape tomorrow's capital</h2>
        <div class="metrics">
          <div class="metric">
            <span class="value">420+</span>
            <span class="label">Global Enterprises</span>
          </div>
          <div class="metric">
            <span class="value">18</span>
            <span class="label">Sovereign Mandates</span>
          </div>
          <div class="metric">
            <span class="value">32%</span>
            <span class="label">Avg. Sentiment Lift</span>
          </div>
          <div class="metric">
            <span class="value">4B+</span>
            <span class="label">Capital Influenced (USD)</span>
          </div>
        </div>
      `,
      'about-content': `
        <h2>Everyone Claims to Be Integrated. Very Few Actually Are.</h2>
        <p>Hopscotch 2.0 is the first of the youngest independent founders who combine Agencies Soul and Creative that roll out through every experience. By pass-step Media Mantra Global operates as a fully integrated communications firm across India, UAE and Singapore. We combine state-of-the-art content strategy, 360-degree strategy, digital marketing and influencer marketing. It is an industry doing rapidly networking. As we evolve, influencer and the communications world is used by using technology faster, think smarter, and audiences that cut through clutter narrative before.</p>
        <h3>A house of storytellers.</h3>
        <p>We are an integrated communications agency built on insights without data are not. We work in research — cross-story and seamlessly consequent.</p>
      `,
    };

    return documentContent[source] || 'Content not found.';
  }

  /**
   * Clear cache for a specific section or all sections
   */
  clearCache(sectionId?: string): void {
    if (sectionId) {
      delete this.cache[sectionId];
    } else {
      this.cache = {};
    }
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { totalSections: number; validSections: number } {
    const totalSections = Object.keys(this.cache).length;
    const validSections = Object.keys(this.cache).filter(key => 
      this.isCacheValid(key)
    ).length;

    return { totalSections, validSections };
  }
}

// Singleton instance
export const contentSystem = new ContentIntegrationSystem();