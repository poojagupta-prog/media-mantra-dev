import { CampaignImage } from '@/types/campaign';

/**
 * Generate image configuration for campaign images
 * Use this helper when adding new images to campaigns.ts
 */
export function createCampaignImage(
  id: string,
  filename: string,
  alt: string,
  options: {
    title?: string;
    description?: string;
    category?: 'hero' | 'gallery' | 'thumbnail' | 'banner' | 'detail';
    width?: number;
    height?: number;
    campaignId?: string;
  } = {}
): CampaignImage {
  const {
    title,
    description,
    category = 'gallery',
    width = 800,
    height = 600,
    campaignId = 'amirah-developments'
  } = options;

  return {
    id,
    src: `/campaigns/${campaignId}/${filename}`,
    alt,
    title,
    description,
    category,
    dimensions: { width, height }
  };
}

/**
 * Validate image file extensions
 */
export function isValidImageFile(filename: string): boolean {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return validExtensions.includes(extension);
}

/**
 * Generate optimized image sizes for different use cases
 */
export const imageSizes = {
  hero: { width: 1920, height: 1080 },
  gallery: { width: 800, height: 600 },
  thumbnail: { width: 400, height: 300 },
  banner: { width: 1200, height: 400 },
  detail: { width: 1000, height: 750 }
} as const;

/**
 * Example usage for adding images to campaigns.ts:
 * 
 * import { createCampaignImage } from '@/lib/campaign-utils';
 * 
 * const heroImage = createCampaignImage(
 *   'hero-main',
 *   'hero-image.jpg',
 *   'Amirah Developments Main Hero Image',
 *   {
 *     title: 'Luxury Living Redefined',
 *     category: 'hero',
 *     width: 1920,
 *     height: 1080
 *   }
 * );
 */