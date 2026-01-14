import React from 'react';
import type { Metadata } from 'next';
import PowerfulFeatures from '@/components/sections/PowerfulFeatures';
import ReadyToDigitize from '@/components/sections/ReadyToDigitize';

/**
 * Features Page Metadata
 * 
 * SEO-optimized metadata for the features page
 * Includes Open Graph and Twitter Card data
 */
export const metadata: Metadata = {
  title: "Powerful Features - Everything You Need to Manage Your Community | ApartmentSync",
  description:
    "From resident onboarding to financial reporting, ApartmentSync provides all the tools you need for seamless apartment management. Discover our powerful features including digital resident onboarding, admin approval system, secure role-based access, and profile management.",
  keywords: [
    "community management features",
    "apartment management tools",
    "resident management system",
    "property management software",
    "digital resident onboarding",
    "admin approval system",
    "role-based access control",
    "apartment profile management",
    "community management platform",
    "residential management features",
  ],
  openGraph: {
    title: "Powerful Features - Everything You Need to Manage Your Community | ApartmentSync",
    description:
      "From resident onboarding to financial reporting, ApartmentSync provides all the tools you need for seamless apartment management.",
    type: "website",
    url: "/features",
    images: [
      {
        url: "/og-features-image.jpg",
        width: 1200,
        height: 630,
        alt: "ApartmentSync - Powerful Features for Community Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerful Features - Everything You Need to Manage Your Community | ApartmentSync",
    description:
      "From resident onboarding to financial reporting, ApartmentSync provides all the tools you need for seamless apartment management.",
  },
  alternates: {
    canonical: "/features",
  },
};

/**
 * Features Page Component
 * 
 * Professional features page with responsive design
 * Optimized for all device sizes (mobile, tablet, laptop, desktop)
 * SEO-friendly with proper semantic HTML
 * Performance optimized with Next.js best practices
 */
export default function FeaturesPage(): React.JSX.Element {
  return (
    <>
      {/* Powerful Features Section */}
      <PowerfulFeatures />

      {/* Ready to Transform Your Community CTA Section */}
      <ReadyToDigitize />
    </>
  );
}

