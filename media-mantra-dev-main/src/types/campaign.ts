export interface CampaignImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: 'hero' | 'gallery' | 'thumbnail' | 'banner' | 'detail';
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface Campaign {
  id: string;
  clientName: string;
  title: string;
  description?: string;
  images: CampaignImage[];
  tags?: string[];
  year?: number;
  status?: 'active' | 'completed' | 'upcoming';
}

export interface CampaignCollection {
  [clientId: string]: Campaign;
}