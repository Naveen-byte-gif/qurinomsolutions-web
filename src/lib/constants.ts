/**
 * Application Constants
 * 
 * Centralized constants for the application
 */

export const SITE_CONFIG = {
  name: 'ApartmentSync',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://homeplus.com',
  description: 'Your Smart Home Management Solution',
  keywords: [
    'home management',
    'apartment management',
    'smart home',
    'property management',
  ],
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
] as const;

export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

