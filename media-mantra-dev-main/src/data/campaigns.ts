import { Campaign, CampaignCollection } from '@/types/campaign';
import { createCampaignImage } from '@/lib/campaign-utils';

/**
 * Campaign data for Amirah Developments
 * 
 * TO ADD YOUR IMAGES:
 * 1. Place image files in: public/campaigns/amirah-developments/
 * 2. Add entries to the images array below using createCampaignImage helper
 * 3. Use descriptive filenames (e.g., hero-main.jpg, project-gallery-1.png)
 */
export const amirahDevelopmentsCampaign: Campaign = {
  id: 'amirah-developments',
  clientName: 'Amirah Developers',
  title: 'Amirah Developments Campaign',
  description: 'Comprehensive marketing campaign showcasing luxury real estate developments and architectural excellence',
  images: [
    // EXAMPLE ENTRIES - Replace with your actual images
    // Uncomment and modify these examples when you add your images:
    
    // createCampaignImage(
    //   'hero-main',
    //   'hero-main.jpg',
    //   'Amirah Developments luxury residential complex',
    //   {
    //     title: 'Luxury Living Redefined',
    //     description: 'Main hero image showcasing the flagship development',
    //     category: 'hero',
    //     width: 1920,
    //     height: 1080
    //   }
    // ),
    
    // createCampaignImage(
    //   'exterior-view',
    //   'exterior-view.jpg',
    //   'Modern architectural exterior of Amirah development',
    //   {
    //     title: 'Contemporary Architecture',
    //     description: 'Stunning exterior view highlighting modern design elements',
    //     category: 'gallery',
    //     width: 1200,
    //     height: 800
    //   }
    // ),
    
    // createCampaignImage(
    //   'interior-luxury',
    //   'interior-luxury.jpg',
    //   'Luxurious interior design and furnishing',
    //   {
    //     title: 'Premium Interiors',
    //     description: 'High-end interior design with premium finishes',
    //     category: 'gallery',
    //     width: 1000,
    //     height: 750
    //   }
    // ),
    
    // createCampaignImage(
    //   'amenities-overview',
    //   'amenities.jpg',
    //   'Community amenities and facilities',
    //   {
    //     title: 'World-Class Amenities',
    //     description: 'Premium amenities including pool, gym, and recreational areas',
    //     category: 'gallery',
    //     width: 800,
    //     height: 600
    //   }
    // )
  ],
  tags: ['real-estate', 'luxury-development', 'architecture', 'residential', 'marketing-campaign'],
  year: 2024,
  status: 'active'
};

/**
 * All campaigns collection
 * Add new campaigns here as they are created
 */
export const campaigns: CampaignCollection = {
  'amirah-developments': amirahDevelopmentsCampaign,
  // Add other client campaigns here
};

/**
 * Get campaign by client name
 */
export function getCampaignByClient(clientName: string): Campaign | undefined {
  return Object.values(campaigns).find(
    campaign => campaign.clientName.toLowerCase() === clientName.toLowerCase()
  );
}

/**
 * Get all campaign images for a client
 */
export function getCampaignImages(clientId: string) {
  return campaigns[clientId]?.images || [];
}

/**
 * Get campaign images by category
 */
export function getCampaignImagesByCategory(clientId: string, category: string) {
  const campaign = campaigns[clientId];
  if (!campaign) return [];
  
  return campaign.images.filter(image => image.category === category);
}