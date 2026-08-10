"use client";

import React, { useState } from 'react';
import { JobListing, JobType, ExperienceLevel } from '@/types/career';
import { cn } from '@/lib/utils';

interface JobListingAccordionProps {
  job: JobListing;
  isExpanded?: boolean;
  onToggle?: (jobId: string) => void;
  className?: string;
}

export function JobListingAccordion({
  job,
  isExpanded = false,
  onToggle,
  className,
}: JobListingAccordionProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle?.(job.id);
  };

  const formatJobType = (type: JobType): string => {
    const typeMap = {
      'full-time': 'Full Time',
      'part-time': 'Part Time',
      'contract': 'Contract',
      'internship': 'Internship',
    };
    return typeMap[type];
  };

  const formatExperienceLevel = (level: ExperienceLevel): string => {
    const levelMap = {
      'entry': 'Entry Level',
      'mid': 'Mid Level',
      'senior': 'Senior Level',
      'lead': 'Lead',
      'executive': 'Executive',
    };
    return levelMap[level];
  };

  const formatSalary = (salaryRange?: JobListing['salaryRange']): string => {
    if (!salaryRange) return '';
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: salaryRange.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return `${formatter.format(salaryRange.min)} - ${formatter.format(salaryRange.max)}`;
  };

  return (
    <div className={cn(
      'border border-mm-light border-opacity-20 rounded-lg overflow-hidden',
      'transition-all duration-300 ease-in-out',
      expanded && 'shadow-lg',
      className
    )}>
      {/* Job Header - Always Visible */}
      <button
        onClick={handleToggle}
        className={cn(
          'w-full p-6 text-left transition-colors duration-200',
          'hover:bg-mm-cream hover:bg-opacity-5',
          'focus:outline-none focus:bg-mm-cream focus:bg-opacity-10'
        )}
        aria-expanded={expanded}
        aria-controls={`job-details-${job.id}`}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-display font-semibold text-mm-cream mb-2">
              {job.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-mm-light">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                {job.department}
              </span>
              
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {job.location}
                {job.remote && <span className="ml-1 text-mm-gold">(Remote)</span>}
              </span>
              
              <span className="px-2 py-1 bg-mm-gold bg-opacity-20 text-mm-gold rounded text-xs font-medium">
                {formatJobType(job.type)}
              </span>
              
              <span className="text-mm-cream opacity-60">
                {formatExperienceLevel(job.experienceLevel)}
              </span>
            </div>

            {job.salaryRange && (
              <div className="mt-2 text-sm font-medium text-mm-gold">
                {formatSalary(job.salaryRange)}
              </div>
            )}
          </div>

          <div className="ml-4 flex-shrink-0">
            <svg
              className={cn(
                'w-5 h-5 text-mm-light transition-transform duration-200',
                expanded && 'rotate-180'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </button>

      {/* Job Details - Expandable */}
      <div
        id={`job-details-${job.id}`}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          expanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pb-6 border-t border-mm-light border-opacity-10">
          <div className="pt-6 space-y-6">
            {/* Job Description */}
            <div>
              <h4 className="text-lg font-display font-semibold text-mm-cream mb-3">
                About This Role
              </h4>
              <div className="text-mm-light leading-relaxed">
                {job.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            {job.responsibilities.length > 0 && (
              <div>
                <h4 className="text-lg font-display font-semibold text-mm-cream mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-mm-light">
                      <svg className="w-4 h-4 mt-0.5 mr-3 text-mm-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements.length > 0 && (
              <div>
                <h4 className="text-lg font-display font-semibold text-mm-cream mb-3">
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start text-mm-light">
                      <svg className="w-4 h-4 mt-0.5 mr-3 text-mm-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {job.benefits.length > 0 && (
              <div>
                <h4 className="text-lg font-display font-semibold text-mm-cream mb-3">
                  What We Offer
                </h4>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-mm-light">
                      <svg className="w-4 h-4 mt-0.5 mr-3 text-mm-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Application Info */}
            <div className="pt-4 border-t border-mm-light border-opacity-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-mm-light">
                  <p>Posted: {new Date(job.postedDate).toLocaleDateString()}</p>
                  {job.applicationDeadline && (
                    <p>Application Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}</p>
                  )}
                </div>
                
                <button className="px-6 py-3 bg-mm-gold text-mm-graphite font-display font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Multiple job listings with accordion behavior
interface JobListingsAccordionProps {
  jobs: JobListing[];
  allowMultipleExpanded?: boolean;
  className?: string;
}

export function JobListingsAccordion({
  jobs,
  allowMultipleExpanded = false,
  className,
}: JobListingsAccordionProps) {
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

  const handleJobToggle = (jobId: string) => {
    setExpandedJobs(prev => {
      const newExpanded = new Set(prev);
      
      if (newExpanded.has(jobId)) {
        newExpanded.delete(jobId);
      } else {
        if (!allowMultipleExpanded) {
          newExpanded.clear();
        }
        newExpanded.add(jobId);
      }
      
      return newExpanded;
    });
  };

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-mm-light text-lg mb-2">No positions available</div>
        <div className="text-mm-light opacity-60 text-sm">
          Check back soon for new opportunities
        </div>
      </div>
    );
  }

  return (
    <div className={cn('space-y-4', className)}>
      {jobs.map((job) => (
        <JobListingAccordion
          key={job.id}
          job={job}
          isExpanded={expandedJobs.has(job.id)}
          onToggle={handleJobToggle}
        />
      ))}
    </div>
  );
}