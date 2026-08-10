import { Metadata } from 'next';
import CampaignImageManager from '@/components/campaigns/campaign-image-manager';

export const metadata: Metadata = {
  title: 'Campaign Management | Media Mantra',
  description: 'Manage campaign images and content for Media Mantra clients',
};

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <CampaignImageManager />
          </div>
        </div>
      </div>
    </div>
  );
}