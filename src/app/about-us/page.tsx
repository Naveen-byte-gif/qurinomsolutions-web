import React from 'react';
import type { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import WhoWeAre from '@/components/sections/about/WhoWeAre';
import MissionVision from '@/components/sections/about/MissionVision';
import CoreValues from '@/components/sections/about/CoreValues';
import AboutFeatures from '@/components/sections/about/AboutFeatures';
import ReadyToDigitize from '@/components/sections/ReadyToDigitize';

/**
 * About Us Page Metadata
 * 
 * SEO-optimized metadata for the about us page
 * Includes Open Graph and Twitter Card data
 */
export const metadata: Metadata = {
  title: "About Us - Building Smarter Communities Together | ApartmentSync",
  description:
    "ApartmentSync is on a mission to transform apartment living by making community management effortless, transparent, and connected. Learn about our team and vision.",
  keywords: [
    "about homeplus",
    "apartment management company",
    "community management team",
    "residential management solutions",
    "apartment technology",
    "smart community platform",
  ],
  openGraph: {
    title: "About Us - Building Smarter Communities Together | ApartmentSync",
    description:
      "ApartmentSync is on a mission to transform apartment living by making community management effortless, transparent, and connected.",
    type: "website",
    url: "/about-us",
    images: [
      {
        url: "/Who_We_Are.png",
        width: 1200,
        height: 630,
        alt: "ApartmentSync - Who We Are",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Building Smarter Communities Together | ApartmentSync",
    description:
      "ApartmentSync is on a mission to transform apartment living by making community management effortless, transparent, and connected.",
  },
  alternates: {
    canonical: "/about-us",
  },
};

/**
 * About Us Page Component
 * 
 * Professional about page with responsive design
 * Optimized for all device sizes (mobile, tablet, laptop, desktop)
 * SEO-friendly with proper semantic HTML
 * Performance optimized with Next.js best practices
 */
export default function AboutUsPage(): React.JSX.Element {
  return (
    <>
      {/* About Hero Section */}
      <AboutHero />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Core Values Section */}
      <CoreValues />

      {/* About Features Section */}
      <AboutFeatures />

      {/* Ready to Digitize Your Community CTA Section */}
      <ReadyToDigitize />
    </>
  );
}

