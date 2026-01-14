'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { MOBILE_READY_FEATURES } from '@/lib/mobile-ready-data';
import '@/styles/mobile-ready.css';

/**
 * Mobile Ready Section Component
 * 
 * Professional mobile-ready section showcasing responsive design capabilities
 * Features:
 * - Responsive Bootstrap grid layout (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML and structured data
 * - Smooth animations on scroll
 * - Accessible markup with ARIA labels
 * - Performance optimized with Next.js Image
 * - Two-column layout: left (text) and right (image)
 */

const MobileReady: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ApartmentSync Mobile Application',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: MOBILE_READY_FEATURES.map((feature) => feature.text),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section
        ref={sectionRef}
        className="mobile-ready-section"
        aria-label="Mobile ready section"
      >
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Text Content Column */}
            <div className="col-lg-6">
              <div
                className={`mobile-ready-content ${
                  isVisible ? 'animate-fade-in-left' : ''
                }`}
              >
                {/* Header Tag */}
                <div className="mobile-ready-tag">
                  <span>Mobile Ready</span>
                </div>

                {/* Main Title */}
                <h2 className="mobile-ready-title">Manage On-The-Go</h2>

                {/* Description */}
                <p className="mobile-ready-description">
                  Access ApartmentSync from any device. Our responsive design ensures seamless
                  experience whether you're on desktop, tablet, or mobile.
                </p>

                {/* Features List */}
                <ul className="mobile-ready-features">
                  {MOBILE_READY_FEATURES.map((feature, index) => (
                    <li
                      key={index}
                      className={`mobile-ready-feature ${
                        isVisible ? `animate-fade-in-up-delay-${index + 1}` : ''
                      }`}
                    >
                      <div className="mobile-ready-check-icon">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <circle cx="10" cy="10" r="10" fill="currentColor" />
                          <path
                            d="M6 10L9 13L14 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Column */}
            <div className="col-lg-6">
              <div
                className={`mobile-ready-visual ${
                  isVisible ? 'animate-fade-in-right' : ''
                }`}
              >
                <div className="mobile-ready-image-wrapper">
                  <Image
                    src="/Mobile_Ready.png"
                    alt="Mobile Ready - Access ApartmentSync from any device with responsive design for seamless experience on desktop, tablet, or mobile"
                    width={400}
                    height={600}
                    className="mobile-ready-image"
                    priority
                    quality={95}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileReady;

