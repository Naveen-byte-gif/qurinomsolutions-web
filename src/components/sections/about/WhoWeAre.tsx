'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Who We Are Section Component
 * 
 * Professional who we are section with:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Image optimization with Next.js Image component
 * - Performance optimized
 * - Smooth animations
 */
const WhoWeAre: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="who-we-are-section" aria-label="Who We Are section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-lg-6 col-md-12 order-lg-1 order-2">
            <div className={`who-we-are-content ${isVisible ? 'animate-fade-in-up' : ''}`}>
              {/* Section Heading */}
              <h2 className={`who-we-are-heading ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}>
                Who We Are
              </h2>

              {/* First Paragraph */}
              <p className={`who-we-are-text ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}>
                ApartmentSync is built by a team of technologists, designers, and community management experts who understand the unique challenges of running residential communities in India.
              </p>

              {/* Second Paragraph */}
              <p className={`who-we-are-text ${isVisible ? 'animate-fade-in-up-delay-3' : ''}`}>
                We've experienced firsthand the chaos of managing apartments with spreadsheets, WhatsApp groups, and paper registers. That's why we built ApartmentSync—a unified platform that brings order, transparency, and efficiency to community operations.
              </p>

              {/* Features List */}
              <ul className={`who-we-are-features ${isVisible ? 'animate-fade-in-up-delay-4' : ''}`}>
                <li className="who-we-are-feature-item">
                  <span className="who-we-are-feature-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Designed specifically for Indian apartments</span>
                </li>
                <li className="who-we-are-feature-item">
                  <span className="who-we-are-feature-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Easy to use for all age groups</span>
                </li>
                <li className="who-we-are-feature-item">
                  <span className="who-we-are-feature-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Reliable 24/7 customer support</span>
                </li>
                <li className="who-we-are-feature-item">
                  <span className="who-we-are-feature-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>Constantly evolving based on user feedback</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 col-md-12 order-lg-2 order-1">
            <div className={`who-we-are-image-wrapper ${isVisible ? 'animate-fade-in' : ''}`}>
              <Image
                src="/Who_We_Are.png"
                alt="ApartmentSync Team - Who We Are"
                width={600}
                height={600}
                className="who-we-are-image img-fluid"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

