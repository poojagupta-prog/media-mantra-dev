"use client";

import React, { useState, useMemo } from 'react';
import { JobListing, JobFilters, Department, Location, JobType, ExperienceLevel } from '@/types/career';
import { JobListingsAccordion } from './job-listing-accordion';
import { cn } from '@/lib/utils';

interface CareerPortalProps {
  jobs: JobListing[];
  departments: Department[];
  locations: Location[];
  className?: string;
  showFilters?: boolean;
  showSearch?: boolean;
  groupBy?: 'department' | 'location' | 'none';
}

export function CareerPortal({
  jobs,
  departments,
  locations,
  className,
  showFilters = true,
  showSearch = true,
  groupBy = 'department',
}: CareerPortalProps) {
  const [filters, setFilters] = useState<JobFilters>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter jobs based on current filters and search
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // Status filter - only show open positions
      if (job.status !== 'open') return false;

      // Department filter
      if (filters.department && job.department !== filters.department) return false;

      // Location filter
      if (filters.location && job.location !== filters.location) return false;

      // Job type filter
      if (filters.type && job.type !== filters.type) return false;

      // Experience level filter
      if (filters.experienceLevel && job.experienceLevel !== filters.experienceLevel) return false;

      // Remote filter
      if (filters.remote !== undefined && job.remote !== filters.remote) return false;

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const searchableText = [
          job.title,
          job.department,
          job.location,
          job.description,
          ...job.requirements,
          ...job.responsibilities,
        ].join(' ').toLowerCase();
        
        if (!searchableText.includes(searchLower)) return false;
      }

      return true;
    });
  }, [jobs, filters, searchTerm]);

  // Group jobs if needed
  const groupedJobs = useMemo(() => {
    if (groupBy === 'none') {
      return { 'All Positions': filteredJobs };
    }

    const groups: Record<string, JobListing[]> = {};

    filteredJobs.forEach(job => {
      const groupKey = groupBy === 'department' ? job.department : job.location;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(job);
    });

    return groups;
  }, [filteredJobs, groupBy]);

  const updateFilter = (key: keyof JobFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value === prev[key] ? undefined : value,
    }));
  };

  const clearFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length + (searchTerm ? 1 : 0);

  return (
    <div className={cn('max-w-6xl mx-auto', className)}>
      {/* Search and Filter Header */}
      {(showSearch || showFilters) && (
        <div className="mb-8">
          {/* Search Bar */}
          {showSearch && (
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-mm-graphite border border-mm-light border-opacity-20 rounded-lg text-mm-cream placeholder-mm-light focus:outline-none focus:border-mm-gold focus:border-opacity-50 transition-colors"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-mm-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}

          {/* Filters */}
          {showFilters && (
            <div>
              {/* Mobile Filter Toggle */}
              <div className="md:hidden mb-4">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="flex items-center justify-between w-full px-4 py-3 bg-mm-graphite border border-mm-light border-opacity-20 rounded-lg text-mm-cream"
                >
                  <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
                  <svg
                    className={cn(
                      'w-5 h-5 transition-transform',
                      showMobileFilters && 'rotate-180'
                    )}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Filter Options */}
              <div className={cn(
                'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4',
                'md:block',
                showMobileFilters ? 'block' : 'hidden md:block'
              )}>
                {/* Department Filter */}
                <select
                  value={filters.department || ''}
                  onChange={(e) => updateFilter('department', e.target.value || undefined)}
                  className="px-4 py-2 bg-mm-graphite border border-mm-light border-opacity-20 rounded-lg text-mm-cream focus:outline-none focus:border-mm-gold focus:border-opacity-50"
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name} ({dept.jobCount})
                    </option>
                  ))}
                </select>

                {/* Location Filter */}
                <select
                  value={filters.location || ''}
                  onChange={(e) => updateFilter('location', e.target.value || undefined)}
                  className="px-4 py-2 bg-mm-graphite border border-mm-light border-opacity-20 rounded-lg text-mm-cream focus:outline-none focus:border-mm-gold focus:border-opacity-50"
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc.id} value={`${loc.city}, ${loc.country}`}>
                      {loc.city}, {loc.country} ({loc.jobCount})
                    </option>
                  ))}
                </select>

                {/* Job Type Filter */}
                <select
                  value={filters.type || ''}
                  onChange={(e) => updateFilter('type', e.target.value as JobType || undefined)}
                  className="px-4 py-2 bg-mm-graphite border border-mm-light border-opacity-20 rounded-lg text-mm-cream focus:outline-none focus:border-mm-gold focus:border-opacity-50"
                >
                  <option value="">All Types</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>

                {/* Experience Level Filter */}
                <select
                  value={filters.experienceLevel || ''}
                  onChange={(e) => updateFilter('experienceLevel', e.target.value as ExperienceLevel || undefined)}
                  className="px-4 py-2 bg-mm-graphite border border-mm-light border-opacity-20 rounded-lg text-mm-cream focus:outline-none focus:border-mm-gold focus:border-opacity-50"
                >
                  <option value="">All Levels</option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                  <option value="lead">Lead</option>
                  <option value="executive">Executive</option>
                </select>

                {/* Remote Filter */}
                <div className="flex items-center space-x-4">
                  <label className="flex items-center text-mm-cream">
                    <input
                      type="checkbox"
                      checked={filters.remote === true}
                      onChange={(e) => updateFilter('remote', e.target.checked ? true : undefined)}
                      className="mr-2 rounded border-mm-light border-opacity-20 bg-mm-graphite text-mm-gold focus:ring-mm-gold focus:ring-opacity-50"
                    />
                    Remote Only
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              {activeFilterCount > 0 && (
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-mm-light">
                    {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
                  </span>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-mm-gold hover:text-mm-cream transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Job Listings */}
      <div className="space-y-8">
        {Object.entries(groupedJobs).map(([groupName, groupJobs]) => (
          <div key={groupName}>
            {groupBy !== 'none' && (
              <div className="mb-6">
                <h2 className="text-2xl font-display font-semibold text-mm-cream mb-2">
                  {groupName}
                </h2>
                <div className="text-mm-light">
                  {groupJobs.length} position{groupJobs.length !== 1 ? 's' : ''}
                </div>
              </div>
            )}
            
            <JobListingsAccordion
              jobs={groupJobs}
              allowMultipleExpanded={false}
            />
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-mm-light text-lg mb-2">
              No positions match your criteria
            </div>
            <div className="text-mm-light opacity-60 text-sm mb-4">
              Try adjusting your filters or search terms
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-mm-gold text-mm-graphite rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Hook for managing career portal state
export function useCareerPortal(initialJobs: JobListing[]) {
  const [jobs, setJobs] = useState(initialJobs);
  const [loading, setLoading] = useState(false);

  const addJob = (job: JobListing) => {
    setJobs(prev => [...prev, job]);
  };

  const updateJob = (jobId: string, updates: Partial<JobListing>) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, ...updates } : job
    ));
  };

  const removeJob = (jobId: string) => {
    setJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const loadJobs = async (fetchFn: () => Promise<JobListing[]>) => {
    setLoading(true);
    try {
      const newJobs = await fetchFn();
      setJobs(newJobs);
    } catch (error) {
      console.error('Failed to load jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    jobs,
    loading,
    addJob,
    updateJob,
    removeJob,
    loadJobs,
  };
}