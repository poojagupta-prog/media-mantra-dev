"use client";

import { useState, useEffect, useCallback } from 'react';
import { contentSystem } from '@/lib/content-integration-system';
import { ContentSection } from '@/types/content';

interface UseContentOptions {
  fallback?: string;
  cache?: boolean;
  autoLoad?: boolean;
}

interface UseContentReturn {
  content: string | null;
  loading: boolean;
  error: string | null;
  loadContent: () => Promise<void>;
  updateContent: (newContent: string) => void;
}

export function useContent(
  sectionId: string,
  contentSource?: ContentSection['content'],
  options: UseContentOptions = {}
): UseContentReturn {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { fallback, cache = true, autoLoad = true } = options;

  const loadContent = useCallback(async () => {
    if (!contentSource) return;

    setLoading(true);
    setError(null);

    try {
      const section: ContentSection = {
        sectionId,
        content: contentSource,
        fallback,
        cache,
      };

      const loadedContent = await contentSystem.loadContent(section);
      setContent(loadedContent);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load content';
      setError(errorMessage);
      setContent(fallback || null);
    } finally {
      setLoading(false);
    }
  }, [sectionId, contentSource, fallback, cache]);

  const updateContent = useCallback((newContent: string) => {
    try {
      contentSystem.updateContent(sectionId, newContent);
      setContent(newContent);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update content';
      setError(errorMessage);
    }
  }, [sectionId]);

  useEffect(() => {
    if (autoLoad && contentSource) {
      loadContent();
    }
  }, [autoLoad, loadContent, contentSource]);

  return {
    content,
    loading,
    error,
    loadContent,
    updateContent,
  };
}

// Hook for static content with fallback
export function useStaticContent(
  sectionId: string,
  staticContent: string,
  options: Omit<UseContentOptions, 'autoLoad'> = {}
): UseContentReturn {
  return useContent(
    sectionId,
    {
      type: 'static',
      source: staticContent,
      format: 'html',
    },
    { ...options, autoLoad: true }
  );
}

// Hook for document-based content
export function useDocumentContent(
  sectionId: string,
  documentSource: string,
  options: UseContentOptions = {}
): UseContentReturn {
  return useContent(
    sectionId,
    {
      type: 'document',
      source: documentSource,
      format: 'html',
    },
    options
  );
}