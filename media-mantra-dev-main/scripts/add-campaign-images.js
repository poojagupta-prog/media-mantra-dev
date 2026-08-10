#!/usr/bin/env node

/**
 * Helper script to generate campaign image entries
 * Usage: node scripts/add-campaign-images.js
 */

const fs = require('fs');
const path = require('path');

const CAMPAIGNS_DIR = path.join(__dirname, '../public/campaigns/amirah-developments');
const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

function generateImageEntries() {
  if (!fs.existsSync(CAMPAIGNS_DIR)) {
    console.log('❌ Campaign directory not found:', CAMPAIGNS_DIR);
    console.log('Please create the directory first.');
    return;
  }

  const files = fs.readdirSync(CAMPAIGNS_DIR)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return VALID_EXTENSIONS.includes(ext);
    });

  if (files.length === 0) {
    console.log('📁 No image files found in:', CAMPAIGNS_DIR);
    console.log('Add your campaign images to this directory first.');
    return;
  }

  console.log('🖼️  Found', files.length, 'image files:');
  console.log('');

  const entries = files.map((file, index) => {
    const name = path.parse(file).name;
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    return `    createCampaignImage(
      '${id}',
      '${file}',
      'Amirah Developments ${name.replace(/-/g, ' ')}',
      {
        title: '${name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}',
        category: '${index === 0 ? 'hero' : 'gallery'}',
        width: ${index === 0 ? 1920 : 800},
        height: ${index === 0 ? 1080 : 600}
      }
    )`;
  });

  console.log('📋 Copy this code to src/data/campaigns.ts (replace the images array):');
  console.log('');
  console.log('  images: [');
  console.log(entries.join(',\n'));
  console.log('  ],');
  console.log('');
  console.log('✅ Don\'t forget to import createCampaignImage at the top of the file!');
}

generateImageEntries();