'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import '@/styles/ready-to-digitize.css';

/**
 * Ready to Digitize Your Community CTA Section Component
 * 
 * Professional call-to-action section with:
 * - Responsive Bootstrap layout
 * - Smooth scroll animations
 * - SEO-friendly semantic HTML
 * - Accessible design
 * - Performance optimized
 * - Structured data for SEO
 */
const ReadyToDigitize: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ApartmentSync',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: '14-day free trial, no credit card required',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  };

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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
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

  // Inject structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'ready-to-digitize-structured-data';
    
    // Remove existing script if present
    const existingScript = document.getElementById('ready-to-digitize-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('ready-to-digitize-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="ready-to-digitize-section"
      aria-label="Ready to digitize your community"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div
              className={`ready-to-digitize-card ${isVisible ? 'animate-fade-in-up' : ''}`}
              itemScope
              itemType="https://schema.org/Offer"
            >

              {/* Main Heading */}
              <h2
                className={`ready-to-digitize-heading ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}
                itemProp="name"
              >
                Ready to Transform Your Community?
              </h2>

              {/* Subheading */}
              <p
                className={`ready-to-digitize-subheading ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}
                itemProp="description"
              >
                Join hundreds of apartment communities already using <strong>ApartmentSync</strong> to streamline their operations.
              </p>

              {/* CTA Buttons */}
              <div
                className={`ready-to-digitize-cta ${isVisible ? 'animate-fade-in-up-delay-3' : ''}`}
              >
                <Link
                  href="/request-demo"
                  className="btn-cta-primary"
                  aria-label="Request a demo with ApartmentSync"
                  itemProp="url"
                >
                  Request a Demo
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="btn-arrow-icon"
                    aria-hidden="true"
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
                  href="/pricing"
                  className="btn-cta-secondary"
                  aria-label="View pricing for ApartmentSync"
                >
                  View Pricing
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToDigitize;

