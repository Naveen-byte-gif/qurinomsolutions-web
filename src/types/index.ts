/**
 * Common Type Definitions
 * 
 * Centralized type definitions for the application
 */

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

