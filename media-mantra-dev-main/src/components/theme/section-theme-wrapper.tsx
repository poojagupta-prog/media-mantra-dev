"use client";

import React, { useMemo } from 'react';
import { useColorTheme } from './color-theme-provider';
import { ColorThemeConfig } from '@/types/theme';
import { cn } from '@/lib/utils';

interface SectionThemeWrapperProps {
  children: React.ReactNode;
  sectionId: string;
  className?: string;
  customTheme?: ColorThemeConfig;
  as?: React.ElementType;
}

export function SectionThemeWrapper({
  children,
  sectionId,
  className,
  customTheme,
  as: Component = 'section',
}: SectionThemeWrapperProps) {
  const { getSectionTheme, getThemeClasses } = useColorTheme();
  const Tag = Component;

  const theme = useMemo(() => {
    return customTheme || getSectionTheme(sectionId);
  }, [customTheme, getSectionTheme, sectionId]);

  const themeClasses = useMemo(() => {
    return getThemeClasses(theme);
  }, [getThemeClasses, theme]);

  const combinedClassName = useMemo(() => {
    return cn(
      // Base section styling
      'relative',
      // Theme classes
      ...themeClasses,
      // Custom classes
      className
    );
  }, [themeClasses, className]);

  return (
    <Tag
      className={combinedClassName}
      data-section-id={sectionId}
      data-theme-background={theme.background}
      data-theme-headline={theme.headlineColor}
    >
      {children}
    </Tag>
  );
}

// Convenience wrapper for common section types
export function WhiteSection({ children, sectionId, className }: Omit<SectionThemeWrapperProps, 'customTheme'>) {
  return (
    <SectionThemeWrapper
      sectionId={sectionId}
      className={className}
      customTheme={{
        background: 'white',
        headlineColor: 'blue',
        textColor: 'graphite',
      }}
    >
      {children}
    </SectionThemeWrapper>
  );
}

export function GraphiteSection({ children, sectionId, className }: Omit<SectionThemeWrapperProps, 'customTheme'>) {
  return (
    <SectionThemeWrapper
      sectionId={sectionId}
      className={className}
      customTheme={{
        background: 'graphite',
        headlineColor: 'white',
        textColor: 'cream',
      }}
    >
      {children}
    </SectionThemeWrapper>
  );
}

export function CreamSection({ children, sectionId, className }: Omit<SectionThemeWrapperProps, 'customTheme'>) {
  return (
    <SectionThemeWrapper
      sectionId={sectionId}
      className={className}
      customTheme={{
        background: 'cream',
        headlineColor: 'blue',
        textColor: 'graphite',
      }}
    >
      {children}
    </SectionThemeWrapper>
  );
}