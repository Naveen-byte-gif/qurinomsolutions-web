import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import SimpleProcess from '@/components/sections/SimpleProcess';
import RoleBasedPermissions from '@/components/sections/RoleBasedPermissions';
import WhyCommunitiesLove from '@/components/sections/WhyCommunitiesLove';
import ReadyToDigitize from '@/components/sections/ReadyToDigitize';

/**
 * Home Page Metadata
 * 
 * SEO-optimized metadata for the home page
 * Includes Open Graph and Twitter Card data
 */
export const metadata: Metadata = {
  title: "Smart Community Management Made Simple | ApartmentSync",
  description:
    "Manage apartments, complaints, payments, staff & notices from one powerful platform. Experience the future of community living with ApartmentSync.",
  keywords: [
    "community management",
    "apartment management",
    "property management software",
    "smart community",
    "residential management",
    "home management solution",
  ],
  openGraph: {
    title: "Smart Community Management Made Simple | ApartmentSync",
    description:
      "Manage apartments, complaints, payments, staff & notices from one powerful platform. Experience the future of community living.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ApartmentSync - Smart Community Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Community Management Made Simple | ApartmentSync",
    description:
      "Manage apartments, complaints, payments, staff & notices from one powerful platform.",
  },
  alternates: {
    canonical: "/",
  },
};

/**
 * Home Page Component
 * 
 * Professional landing page with responsive design
 * Optimized for all device sizes (mobile, tablet, laptop, desktop)
 * SEO-friendly with proper semantic HTML
 * Performance optimized with Next.js best practices
 */
export default function HomePage(): React.JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Simple Process Section */}
      <SimpleProcess />

      {/* Role-Based Permissions Section */}
      <RoleBasedPermissions />

      {/* Why Communities Love ApartmentSync Section */}
      <WhyCommunitiesLove />

      {/* Ready to Digitize Your Community CTA Section */}
      <ReadyToDigitize />
    </>
  );
}
