/**
 * Color Theme System Types
 * Defines the theme configuration interfaces for the website redesign
 */

export type BackgroundColor = 'white' | 'graphite' | 'cream';
export type HeadlineColor = 'blue' | 'white' | 'gold';
export type TextColor = 'graphite' | 'cream' | 'light';
export type AccentColor = 'gold' | 'blue';

export interface ColorThemeConfig {
  background: BackgroundColor;
  headlineColor: HeadlineColor;
  textColor: TextColor;
  accentColor?: AccentColor;
}

export interface SectionTheme {
  sectionId: string;
  theme: ColorThemeConfig;
  customStyles?: Record<string, string>;
}

export interface ThemeConfiguration {
  sections: {
    [sectionId: string]: {
      background: BackgroundColor;
      headline: HeadlineColor;
      text: TextColor;
      borders?: 'gold' | 'graphite' | 'transparent';
    };
  };
  global: {
    primaryFont: string;
    headingFont: string;
    brandColors: {
      navy: string;
      gold: string;
      graphite: string;
      cream: string;
      white: string;
    };
  };
}

export interface ColorThemeContextType {
  currentTheme: ColorThemeConfig;
  setTheme: (theme: ColorThemeConfig) => void;
  getSectionTheme: (sectionId: string) => ColorThemeConfig;
  applyTheme: (sectionId: string, theme: ColorThemeConfig) => void;
  getThemeClasses: (theme: ColorThemeConfig) => string[];
  validateThemeConsistency: () => boolean;
}