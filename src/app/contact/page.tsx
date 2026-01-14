import React from 'react';
import type { Metadata } from 'next';
import GetInTouch from '@/components/sections/contact/GetInTouch';
import ContactForm from '@/components/sections/contact/ContactForm';

/**
 * Contact Page Metadata
 * 
 * SEO-optimized metadata for the contact page
 * Includes Open Graph and Twitter Card data
 */
export const metadata: Metadata = {
  title: "Contact Us - We'd Love to Hear From You | ApartmentSync",
  description:
    "Have questions about ApartmentSync? Want to schedule a demo? Our team is here to help. Get in touch via email, phone, or visit our office in Bangalore.",
  keywords: [
    "contact homeplus",
    "apartment management support",
    "community management contact",
    "homeplus customer service",
    "schedule demo",
    "apartment software support",
  ],
  openGraph: {
    title: "Contact Us - We'd Love to Hear From You | ApartmentSync",
    description:
      "Have questions about ApartmentSync? Want to schedule a demo? Our team is here to help.",
    type: "website",
    url: "/contact",
    images: [
      {
        url: "/og-contact-image.jpg",
        width: 1200,
        height: 630,
        alt: "ApartmentSync - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - We'd Love to Hear From You | ApartmentSync",
    description:
      "Have questions about ApartmentSync? Want to schedule a demo? Our team is here to help.",
  },
  alternates: {
    canonical: "/contact",
  },
};

/**
 * Contact Page Component
 * 
 * Professional contact page with responsive design
 * Optimized for all device sizes (mobile, tablet, laptop, desktop)
 * SEO-friendly with proper semantic HTML
 * Performance optimized with Next.js best practices
 */
export default function ContactPage(): React.JSX.Element {
  return (
    <>
      {/* Get in Touch Section */}
      <GetInTouch />

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}

