import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * SEO Metadata Configuration
 * Comprehensive meta tags for optimal search engine optimization
 */
export const metadata: Metadata = {
  title: {
    default: "ApartmentSync - Your Smart Home Management Solution",
    template: "%s | ApartmentSync",
  },
  description:
    "ApartmentSync is the ultimate smart home management platform. Streamline your apartment living with features, pricing plans, and expert support. Get started today!",
  keywords: [
    "home management",
    "apartment management",
    "smart home",
    "property management",
    "home automation",
    "residential services",
    "home plus",
    "apartment services",
  ],
  authors: [{ name: "ApartmentSync Team" }],
  creator: "ApartmentSync",
  publisher: "ApartmentSync",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://homeplus.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "ApartmentSync",
    title: "ApartmentSync - Your Smart Home Management Solution",
    description:
      "ApartmentSync is the ultimate smart home management platform. Streamline your apartment living with features, pricing plans, and expert support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ApartmentSync - Smart Home Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ApartmentSync - Your Smart Home Management Solution",
    description:
      "Streamline your apartment living with ApartmentSync. Features, pricing, and expert support for modern home management.",
    images: ["/og-image.jpg"],
    creator: "@homeplus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  category: "Technology",
  classification: "Home Management Software",
  icons: {
    icon: [
      { url: '/logoapartment.png', sizes: 'any', type: 'image/png' },
      { url: '/logoapartment.png', sizes: '32x32', type: 'image/png' },
      { url: '/logoapartment.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logoapartment.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/logoapartment.png', type: 'image/png' },
    ],
  },
};

/**
 * Root Layout Component
 * 
 * Provides the base HTML structure for all pages
 * Includes:
 * - SEO meta tags
 * - Navigation component
 * - Global styles
 * - Font optimization
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#348C80" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ApartmentSync" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon Fallback */}
        <link rel="icon" type="image/png" href="/logoapartment.png" />
        <link rel="shortcut icon" type="image/png" href="/logoapartment.png" />
        <link rel="apple-touch-icon" href="/logoapartment.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main role="main" id="main-content">
          {children}
        </main>
        <Footer />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ApartmentSync",
              url: "https://homeplus.com",
              logo: "https://homeplus.com/logo.png",
              description:
                "ApartmentSync is the ultimate smart home management platform.",
              sameAs: [
                "https://facebook.com/homeplus",
                "https://twitter.com/homeplus",
                "https://linkedin.com/company/homeplus",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-HOMEPLUS",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
