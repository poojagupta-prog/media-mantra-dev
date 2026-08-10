"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import { ColorThemeConfig, ColorThemeContextType, SectionTheme } from '@/types/theme';
import { getThemeClasses, validateThemeConfig, getSectionTheme } from '@/lib/theme-utils';

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

interface ColorThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ColorThemeConfig;
}

export function ColorThemeProvider({ children, initialTheme }: ColorThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ColorThemeConfig>(
    initialTheme || {
      background: 'graphite',
      headlineColor: 'white',
      textColor: 'cream',
    }
  );

  const [sectionThemes, setSectionThemes] = useState<Map<string, ColorThemeConfig>>(new Map());

  const setTheme = useCallback((theme: ColorThemeConfig) => {
    if (validateThemeConfig(theme)) {
      setCurrentTheme(theme);
    }
  }, []);

  const applyTheme = useCallback((sectionId: string, theme: ColorThemeConfig) => {
    if (validateThemeConfig(theme)) {
      setSectionThemes(prev => new Map(prev).set(sectionId, theme));
    }
  }, []);

  const getSectionThemeConfig = useCallback((sectionId: string): ColorThemeConfig => {
    return sectionThemes.get(sectionId) || getSectionTheme(sectionId);
  }, [sectionThemes]);

  const getThemeClassesForConfig = useCallback((theme: ColorThemeConfig): string[] => {
    return getThemeClasses(theme);
  }, []);

  const validateThemeConsistency = useCallback((): boolean => {
    let isValid = true;
    sectionThemes.forEach((theme, sectionId) => {
      if (!validateThemeConfig(theme)) {
        console.warn(`Invalid theme configuration for section: ${sectionId}`);
        isValid = false;
      }
    });
    return isValid;
  }, [sectionThemes]);

  const contextValue: ColorThemeContextType = {
    currentTheme,
    setTheme,
    getSectionTheme: getSectionThemeConfig,
    applyTheme,
    getThemeClasses: getThemeClassesForConfig,
    validateThemeConsistency,
  };

  return (
    <ColorThemeContext.Provider value={contextValue}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme(): ColorThemeContextType {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider');
  }
  return context;
}

export { ColorThemeContext };