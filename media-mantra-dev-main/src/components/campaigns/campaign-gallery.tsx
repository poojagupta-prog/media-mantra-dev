'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Campaign, CampaignImage } from '@/types/campaign';

interface CampaignGalleryProps {
  campaign: Campaign;
  className?: string;
  showTitle?: boolean;
  layout?: 'grid' | 'masonry' | 'carousel';
}

export function CampaignGallery({ 
  campaign, 
  className = '', 
  showTitle = true,
  layout = 'grid' 
}: CampaignGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<CampaignImage | null>(null);

  if (!campaign.images.length) {
    return (
      <div className={`campaign-gallery ${className}`}>
        {showTitle && (
          <h3 className="text-2xl font-bold mb-4">{campaign.title}</h3>
        )}
        <div className="text-center py-8 text-gray-500">
          <p>No campaign images available yet.</p>
          <p className="text-sm mt-2">
            Add images to <code>public/campaigns/{campaign.id}/</code>
          </p>
        </div>
      </div>
    );
  }

  const gridClasses = {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    masonry: 'columns-1 md:columns-2 lg:columns-3 gap-4',
    carousel: 'flex overflow-x-auto gap-4 pb-4'
  };

  return (
    <div className={`campaign-gallery ${className}`}>
      {showTitle && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{campaign.title}</h3>
          {campaign.description && (
            <p className="text-gray-600">{campaign.description}</p>
          )}
        </div>
      )}

      <div className={gridClasses[layout]}>
        {campaign.images.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.dimensions?.width || 400}
              height={image.dimensions?.height || 300}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <p className="text-sm font-medium">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.dimensions?.width || 800}
              height={selectedImage.dimensions?.height || 600}
              className="max-w-full max-h-full object-contain"
            />
            {selectedImage.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h4 className="text-lg font-medium">{selectedImage.title}</h4>
                {selectedImage.description && (
                  <p className="text-sm mt-1">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CampaignGallery;