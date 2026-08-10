/**
 * Career Portal Types
 * Defines interfaces for job listings and career portal functionality
 */

export type JobType = 'full-time' | 'part-time' | 'contract' | 'internship';
export type ExperienceLevel = 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
export type JobStatus = 'open' | 'closed' | 'draft';

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  experienceLevel: ExperienceLevel;
  status: JobStatus;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salaryRange?: {
    min: number;
    max: number;
    currency: string;
  };
  postedDate: string;
  applicationDeadline?: string;
  remote: boolean;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  jobCount: number;
}

export interface Location {
  id: string;
  city: string;
  country: string;
  jobCount: number;
}

export interface CareerPortalConfig {
  groupBy: 'department' | 'location' | 'type' | 'experience';
  expandable: boolean;
  searchable: boolean;
  filterOptions: string[];
  showSalaryRange: boolean;
  allowRemoteFilter: boolean;
}

export interface JobFilters {
  department?: string;
  location?: string;
  type?: JobType;
  experienceLevel?: ExperienceLevel;
  remote?: boolean;
  search?: string;
}

export interface CareerPageContent {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  culture: {
    title: string;
    description: string;
    images?: string[];
  };
}