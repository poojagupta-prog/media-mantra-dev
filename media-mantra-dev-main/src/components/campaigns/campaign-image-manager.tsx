'use client';

import { useState } from 'react';
import { CampaignImage } from '@/types/campaign';
import CampaignGallery from './campaign-gallery';
import { amirahDevelopmentsCampaign } from '@/data/campaigns';

interface CampaignImageManagerProps {
  className?: string;
}

export function CampaignImageManager({ className = '' }: CampaignImageManagerProps) {
  const [campaign, setCampaign] = useState(amirahDevelopmentsCampaign);

  const handleAddImage = () => {
    // This would typically integrate with a file upload system
    // For now, we'll show instructions for manual addition
    alert(`To add images:
1. Place your images in: public/campaigns/amirah-developments/
2. Update the images array in: src/data/campaigns.ts
3. Follow the format shown in the comments

Example:
{
  id: 'your-image-id',
  src: '/campaigns/amirah-developments/your-image.jpg',
  alt: 'Description of your image',
  title: 'Image Title',
  category: 'gallery',
  dimensions: { width: 800, height: 600 }
}`);
  };

  return (
    <div className={`campaign-image-manager ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Amirah Developments Campaign</h2>
        <button
          onClick={handleAddImage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Images
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-800 mb-2">Quick Setup Instructions:</h3>
        <ol className="text-blue-700 text-sm space-y-1">
          <li>1. Add your campaign images to <code className="bg-blue-100 px-1 rounded">public/campaigns/amirah-developments/</code></li>
          <li>2. Update the images array in <code className="bg-blue-100 px-1 rounded">src/data/campaigns.ts</code></li>
          <li>3. Follow the commented format for each image entry</li>
          <li>4. Refresh this page to see your images</li>
        </ol>
      </div>

      <CampaignGallery 
        campaign={campaign}
        showTitle={false}
        layout="grid"
      />

      {campaign.images.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📸</div>
          <h3 className="text-xl font-semibold mb-2">No Campaign Images Yet</h3>
          <p className="text-gray-600 mb-4">
            Follow the instructions above to add your Amirah Developments campaign pictures.
          </p>
          <button
            onClick={handleAddImage}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}

export default CampaignImageManager;