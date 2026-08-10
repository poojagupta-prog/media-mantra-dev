# Amirah Developments Campaign Images

This directory contains campaign pictures for Amirah Developments.

## Image Guidelines

- **Format**: PNG or JPG preferred
- **Naming Convention**: Use descriptive names (e.g., `campaign-hero.jpg`, `project-overview.png`)
- **Sizes**: 
  - Hero images: 1920x1080px or larger
  - Thumbnail images: 400x300px
  - Gallery images: 800x600px minimum
- **Optimization**: Ensure images are optimized for web use

## Current Images

| File | Description |
|------|-------------|
| `campaign-01-hero.jpg` | Amirah Developments branded event backdrop (hero) |
| `campaign-02-event-stage.jpg` | Crown Palace architectural model unveiling |
| `campaign-03-brand.webp` | Brand visual |
| `campaign-04-habtoor-launch.jpg` | Al Habtoor City launch evening (500 guests) |

## Usage

Images can be referenced in components using:
```tsx
import Image from 'next/image'

<Image 
  src="/campaigns/amirah-developments/your-image.jpg" 
  alt="Description" 
  width={800} 
  height={600} 
/>
```