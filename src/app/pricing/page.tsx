import React from 'react';
import type { Metadata } from 'next';
import Pricing from '@/components/sections/pricing';
import PricingCTA from '@/components/sections/pricing/PricingCTA';

/**
 * Pricing Page Metadata
 * 
 * SEO-optimized metadata for the pricing page
 * Includes Open Graph and Twitter Card data
 */
export const metadata: Metadata = {
  title: 'Pricing - Choose the Perfect Plan for Your Community | ApartmentSync',
  description:
    'Transparent pricing with no hidden fees. Choose from Basic, Standard, or Enterprise plans. Start free and scale as you grow. Perfect for small apartments to large communities.',
  keywords: [
    'pricing plans',
    'apartment management pricing',
    'community management cost',
    'property management software pricing',
    'residential management plans',
    'apartment sync pricing',
    'home management pricing',
    'community software pricing',
    'affordable apartment management',
    'pricing tiers',
  ],
  openGraph: {
    title: 'Pricing - Choose the Perfect Plan for Your Community | ApartmentSync',
    description:
      'Transparent pricing with no hidden fees. Choose from Basic, Standard, or Enterprise plans. Start free and scale as you grow.',
    type: 'website',
    url: '/pricing',
    images: [
      {
        url: '/og-pricing-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ApartmentSync - Pricing Plans for Community Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Choose the Perfect Plan for Your Community | ApartmentSync',
    description:
      'Transparent pricing with no hidden fees. Choose from Basic, Standard, or Enterprise plans. Start free and scale as you grow.',
  },
  alternates: {
    canonical: '/pricing',
  },
};

/**
 * Pricing Page Component
 * 
 * Professional pricing page with responsive design
 * Optimized for all device sizes (mobile, tablet, laptop, desktop)
 * SEO-friendly with proper semantic HTML
 * Performance optimized with Next.js best practices
 */
export default function PricingPage(): React.JSX.Element {
  return (
    <>
      {/* Pricing Section */}
      <Pricing />

      {/* Pricing CTA Section */}
      <PricingCTA />
    </>
  );
}

