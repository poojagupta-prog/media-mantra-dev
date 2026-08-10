# Campaign Images Setup Guide

This guide explains how to add and manage campaign pictures for Amirah Developments and other clients.

## Quick Start

### 1. Add Your Images

Place your campaign images in the appropriate directory:
```
public/campaigns/amirah-developments/
├── hero-main.jpg
├── exterior-view.jpg
├── interior-luxury.jpg
├── amenities.jpg
└── ...
```

### 2. Update Campaign Data

Edit `src/data/campaigns.ts` and uncomment/modify the example entries:

```typescript
import { createCampaignImage } from '@/lib/campaign-utils';

export const amirahDevelopmentsCampaign: Campaign = {
  // ... other properties
  images: [
    createCampaignImage(
      'hero-main',
      'hero-main.jpg',
      'Amirah Developments luxury residential complex',
      {
        title: 'Luxury Living Redefined',
        category: 'hero',
        width: 1920,
        height: 1080
      }
    ),
    // Add more images...
  ]
};
```

### 3. View Your Campaign

Visit `/campaigns` to see your campaign images in action.

## Detailed Setup

### Image Guidelines

- **Formats**: JPG, PNG, WebP recommended
- **Hero Images**: 1920×1080px or larger
- **Gallery Images**: 800×600px minimum
- **File Size**: Optimize for web (< 500KB per image)
- **Naming**: Use descriptive, kebab-case names

### Image Categories

- `hero`: Main banner/hero images (1920×1080)
- `gallery`: General project images (800×600)
- `thumbnail`: Small preview images (400×300)
- `banner`: Wide banner images (1200×400)
- `detail`: Detailed view images (1000×750)

### Using the Helper Script

Generate image entries automatically:

```bash
# Add your images to public/campaigns/amirah-developments/
# Then run:
node scripts/add-campaign-images.js
```

This will generate the TypeScript code you need to copy into `campaigns.ts`.

### Manual Entry Format

```typescript
{
  id: 'unique-image-id',
  src: '/campaigns/amirah-developments/filename.jpg',
  alt: 'Descriptive alt text for accessibility',
  title: 'Display title (optional)',
  description: 'Longer description (optional)',
  category: 'hero' | 'gallery' | 'thumbnail' | 'banner' | 'detail',
  dimensions: { width: 1920, height: 1080 }
}
```

## Integration with Website

### Display in Components

```tsx
import { getCampaignByClient } from '@/data/campaigns';
import CampaignGallery from '@/components/campaigns/campaign-gallery';

const campaign = getCampaignByClient('Amirah Developers');

<CampaignGallery 
  campaign={campaign} 
  layout="grid"
  showTitle={true}
/>
```

### Get Specific Images

```tsx
import { getCampaignImages, getCampaignImagesByCategory } from '@/data/campaigns';

// All images
const allImages = getCampaignImages('amirah-developments');

// Hero images only
const heroImages = getCampaignImagesByCategory('amirah-developments', 'hero');
```

## Adding New Clients

### 1. Create Client Directory

```bash
mkdir public/campaigns/new-client-name
```

### 2. Add to Campaigns Data

```typescript
// In src/data/campaigns.ts
export const newClientCampaign: Campaign = {
  id: 'new-client-name',
  clientName: 'New Client Name',
  title: 'New Client Campaign',
  description: 'Campaign description',
  images: [
    // Add images using createCampaignImage helper
  ],
  tags: ['relevant', 'tags'],
  year: 2024,
  status: 'active'
};

// Add to campaigns collection
export const campaigns: CampaignCollection = {
  'amirah-developments': amirahDevelopmentsCampaign,
  'new-client-name': newClientCampaign,
};
```

## File Structure

```
src/
├── types/campaign.ts           # TypeScript interfaces
├── data/campaigns.ts           # Campaign data and configuration
├── lib/campaign-utils.ts       # Helper functions
└── components/campaigns/
    ├── campaign-gallery.tsx    # Main gallery component
    └── campaign-image-manager.tsx # Management interface

public/campaigns/
└── amirah-developments/
    ├── README.md              # Directory documentation
    └── [your-images]          # Campaign images

scripts/
└── add-campaign-images.js     # Helper script for batch processing
```

## Troubleshooting

### Images Not Showing

1. Check file paths in `campaigns.ts`
2. Ensure images are in `public/campaigns/[client]/`
3. Verify image file extensions are supported
4. Check browser console for 404 errors

### Performance Issues

1. Optimize image file sizes
2. Use WebP format when possible
3. Consider lazy loading for large galleries
4. Use appropriate dimensions for each category

### Adding Many Images

1. Use the helper script: `node scripts/add-campaign-images.js`
2. Copy generated code to `campaigns.ts`
3. Adjust titles and categories as needed

## Next Steps

- Add more campaign images to the gallery
- Integrate campaign images into case study pages
- Set up automated image optimization
- Add image upload functionality for content management