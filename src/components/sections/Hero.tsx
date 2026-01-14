'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Hero Section Component
 * 
 * Professional hero section with:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Accessible navigation and CTAs
 * - Performance optimized
 * - Structured data for SEO
 */
const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ApartmentSync',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    description: 'Smart Community Management platform for managing apartments, complaints, payments, staff & notices from one powerful platform.',
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="hero-section" aria-label="Hero section">
      <div className="container">
        {/* Main Hero Content */}
        <div className="row align-items-center hero-main-content">
          {/* Left Column - Text Content */}
          <div className="col-lg-6 col-md-12 hero-text-col">
            <div className={`hero-content ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <h1 className={`hero-headline ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}>
                Smart Community Management{' '}
                <span className="hero-headline-highlight">Made Simple</span>
              </h1>
              <p className={`hero-description ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}>
                <span>Manage apartments,</span>{' '}
                <span>complaints, payments,</span>{' '}
                <span>staff & notices</span>{' '}
                <span>from one powerful platform.</span>{' '}
                <span>Experience the future of community living.</span>
              </p>
              
              {/* CTA Buttons */}
              <div className={`hero-cta-buttons ${isVisible ? 'animate-fade-in-up-delay-3' : ''}`}>
                <Link
                  href="/contact"
                  className="btn btn-hero-primary"
                  aria-label="Get started with ApartmentSync for free"
                >
                  Get Started Free
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="btn-icon-arrow"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-hero-secondary"
                  aria-label="Watch demo video of ApartmentSync"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.33333 6.66667L13.3333 10L8.33333 13.3333V6.66667Z"
                      fill="currentColor"
                    />
                  </svg>
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile App Mockups */}
          <div className="col-lg-6 col-md-12 hero-image-col">
            <div className={`hero-image-wrapper ${isVisible ? 'animate-fade-in' : ''}`}>
              <div className="hero-mockup-container">
                {/* Mobile Mockup 1 */}
                <div className={`hero-mockup hero-mockup-1 ${isVisible ? 'animate-slide-in-left' : ''}`}>
                  <div className="mockup-phone">
                    <div className="mockup-screen">
                      <div className="mockup-header">
                        <div className="mockup-profile"></div>
                        <div className="mockup-search"></div>
                      </div>
                      <div className="mockup-cards">
                        <div className="mockup-card">Rent Out</div>
                        <div className="mockup-card">Property Documents</div>
                        <div className="mockup-card">Notices</div>
                        <div className="mockup-card">Ratings</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Mockup 2 */}
                <div className={`hero-mockup hero-mockup-2 ${isVisible ? 'animate-slide-in-up' : ''}`}>
                  <div className="mockup-phone">
                    <div className="mockup-screen">
                      <div className="mockup-header">
                        <div className="mockup-profile"></div>
                        <div className="mockup-search"></div>
                      </div>
                      <div className="mockup-cards">
                        <div className="mockup-card">Payments</div>
                        <div className="mockup-card">Maintenance</div>
                        <div className="mockup-card">Work Order</div>
                        <div className="mockup-card">Bookings</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Mockup 3 */}
                <div className={`hero-mockup hero-mockup-3 ${isVisible ? 'animate-slide-in-right' : ''}`}>
                  <div className="mockup-phone">
                    <div className="mockup-screen">
                      <div className="mockup-header">
                        <div className="mockup-profile"></div>
                        <div className="mockup-search"></div>
                      </div>
                      <div className="mockup-cards">
                        <div className="mockup-card">Amenities</div>
                        <div className="mockup-card">Visitor Management</div>
                        <div className="mockup-card">Emergency Contacts</div>
                        <div className="mockup-card">Help Desk</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        {/* <div className={`hero-stats ${isVisible ? 'animate-fade-in-up-delay-4' : ''}`}>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-4">
              <div className="stat-item animate-counter">
                <div className="stat-number">500+</div>
                <div className="stat-label">Communities</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <div className="stat-item animate-counter">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Residents</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <div className="stat-item animate-counter">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Features Banner */}
      <div className="hero-features-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="feature-banner-item">
                <div className="feature-banner-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 4L6 10V16C6 22.6274 10.3726 27 17 27C23.6274 27 28 22.6274 28 16V10L18 4L16 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-banner-content">
                  <h3 className="feature-banner-title">Secure Payments</h3>
                  <p className="feature-banner-description">Bank-grade encryption</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="feature-banner-item">
                <div className="feature-banner-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 24C8 20.6863 11.5817 18 16 18C20.4183 18 24 20.6863 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 16C25.1046 16 26 15.1046 26 14C26 12.8954 25.1046 12 24 12C22.8954 12 22 12.8954 22 14C22 15.1046 22.8954 16 24 16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-banner-content">
                  <h3 className="feature-banner-title">Role-Based Access</h3>
                  <p className="feature-banner-description">Custom permissions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="feature-banner-item">
                <div className="feature-banner-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M26 18C26 22.4183 22.4183 26 18 26C13.5817 26 10 22.4183 10 18C10 13.5817 13.5817 10 18 10C22.4183 10 26 13.5817 26 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 18L18 14L14 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-banner-content">
                  <h3 className="feature-banner-title">Cloud-Based</h3>
                  <p className="feature-banner-description">Access anywhere</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="feature-banner-item">
                <div className="feature-banner-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 8V16L20 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-banner-content">
                  <h3 className="feature-banner-title">24/7 Support</h3>
                  <p className="feature-banner-description">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;

