import React from 'react';
import type { Metadata } from 'next';
import GetStartedProcess from '@/components/sections/get-started-process';
import WorkflowGlance from '@/components/sections/workflow-glance';
import MobileReady from '@/components/sections/mobile-ready';
import ReadyToDigitize from '@/components/sections/ReadyToDigitize';

/**
 * How It Works Page Metadata
 * 
 * SEO-optimized metadata for the how-it-works page
 * Includes Open Graph and Twitter Card data
 */
export const metadata: Metadata = {
  title: "How It Works - Get Started in 4 Easy Steps | ApartmentSync",
  description:
    "Learn how to get started with ApartmentSync in just 4 simple steps: Register Your Community, Onboard Residents & Staff, Daily Operations, and Payments & Reporting. Digitize your apartment management workflow effortlessly.",
  keywords: [
    "how it works",
    "get started",
    "apartment management setup",
    "community management process",
    "register community",
    "onboard residents",
    "daily operations",
    "payments and reporting",
    "apartment management workflow",
    "community digitization",
  ],
  openGraph: {
    title: "How It Works - Get Started in 4 Easy Steps | ApartmentSync",
    description:
      "Learn how to get started with ApartmentSync in just 4 simple steps. Digitize your apartment management workflow effortlessly.",
    type: "website",
    url: "/how-it-works",
    images: [
      {
        url: "/og-how-it-works-image.jpg",
        width: 1200,
        height: 630,
        alt: "ApartmentSync - How It Works: Get Started in 4 Easy Steps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works - Get Started in 4 Easy Steps | ApartmentSync",
    description:
      "Learn how to get started with ApartmentSync in just 4 simple steps. Digitize your apartment management workflow effortlessly.",
  },
  alternates: {
    canonical: "/how-it-works",
  },
};

/**
 * How It Works Page Component
 * 
 * Professional how-it-works page with responsive design
 * Optimized for all device sizes (mobile, tablet, laptop, desktop)
 * SEO-friendly with proper semantic HTML
 * Performance optimized with Next.js best practices
 */
export default function HowItWorksPage(): React.JSX.Element {
  return (
    <>
      {/* Get Started Process Section - 4 Easy Steps */}
      <GetStartedProcess />

      {/* Complete Workflow at a Glance Section */}
      <WorkflowGlance />

      {/* Mobile Ready Section */}
      <MobileReady />

      {/* Ready to Transform Your Community CTA Section */}
      <ReadyToDigitize />
    </>
  );
}

