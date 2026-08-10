/**
 * Theme Utility Functions
 * Helper functions for theme management and CSS class generation
 */

import { ColorThemeConfig, BackgroundColor, HeadlineColor, TextColor } from '@/types/theme';

/**
 * Generates Tailwind CSS classes based on theme configuration
 */
export function getThemeClasses(theme: ColorThemeConfig): string[] {
  const classes: string[] = [];

  // Background classes
  switch (theme.background) {
    case 'white':
      classes.push('bg-mm-white', 'text-mm-graphite');
      break;
    case 'graphite':
      classes.push('bg-mm-graphite', 'text-mm-cream');
      break;
    case 'cream':
      classes.push('bg-mm-cream', 'text-mm-graphite');
      break;
  }

  // Headline color classes
  switch (theme.headlineColor) {
    case 'blue':
      classes.push('[&_h1]:text-mm-brand-navy', '[&_h2]:text-mm-brand-navy', '[&_h3]:text-mm-brand-navy');
      break;
    case 'white':
      classes.push('[&_h1]:text-mm-white', '[&_h2]:text-mm-white', '[&_h3]:text-mm-white');
      break;
    case 'gold':
      classes.push('[&_h1]:text-mm-gold', '[&_h2]:text-mm-gold', '[&_h3]:text-mm-gold');
      break;
  }

  // Accent color classes
  if (theme.accentColor) {
    switch (theme.accentColor) {
      case 'gold':
        classes.push('[&_.accent]:text-mm-gold', '[&_.accent-bg]:bg-mm-gold');
        break;
      case 'blue':
        classes.push('[&_.accent]:text-mm-brand-navy', '[&_.accent-bg]:bg-mm-brand-navy');
        break;
    }
  }

  return classes;
}

/**
 * Validates theme configuration for consistency
 */
export function validateThemeConfig(theme: ColorThemeConfig): boolean {
  // Check for valid background and headline color combinations
  if (theme.background === 'white' && theme.headlineColor === 'white') {
    console.warn('White headlines on white background may have poor contrast');
    return false;
  }

  if (theme.background === 'graphite' && theme.headlineColor === 'blue') {
    // This is acceptable but may need contrast checking
    return true;
  }

  return true;
}

/**
 * Default theme configurations for different sections
 */
export const defaultThemes = {
  intro: {
    background: 'white' as BackgroundColor,
    headlineColor: 'blue' as HeadlineColor,
    textColor: 'graphite' as TextColor,
  },
  location: {
    background: 'white' as BackgroundColor,
    headlineColor: 'blue' as HeadlineColor,
    textColor: 'graphite' as TextColor,
  },
  clients: {
    background: 'white' as BackgroundColor,
    headlineColor: 'blue' as HeadlineColor,
    textColor: 'graphite' as TextColor,
  },
  metrics: {
    background: 'graphite' as BackgroundColor,
    headlineColor: 'white' as HeadlineColor,
    textColor: 'cream' as TextColor,
  },
  caseStudies: {
    background: 'white' as BackgroundColor,
    headlineColor: 'blue' as HeadlineColor,
    textColor: 'graphite' as TextColor,
  },
  about: {
    background: 'white' as BackgroundColor,
    headlineColor: 'white' as HeadlineColor,
    textColor: 'graphite' as TextColor,
  },
  founders: {
    background: 'graphite' as BackgroundColor,
    headlineColor: 'white' as HeadlineColor,
    textColor: 'cream' as TextColor,
  },
  framework: {
    background: 'cream' as BackgroundColor,
    headlineColor: 'blue' as HeadlineColor,
    textColor: 'graphite' as TextColor,
  },
  contact: {
    background: 'graphite' as BackgroundColor,
    headlineColor: 'white' as HeadlineColor,
    textColor: 'cream' as TextColor,
  },
} as const;

/**
 * Gets the appropriate theme for a section
 */
export function getSectionTheme(sectionId: string): ColorThemeConfig {
  return defaultThemes[sectionId as keyof typeof defaultThemes] || defaultThemes.intro;
}