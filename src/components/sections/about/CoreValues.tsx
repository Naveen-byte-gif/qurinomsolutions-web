'use client';

import React, { useEffect, useState } from 'react';

/**
 * Core Values Section Component
 * 
 * Professional core values section with:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Four feature cards in a grid
 * - Performance optimized
 * - Smooth animations
 */
const CoreValues: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M24 8L8 16V28C8 34.6274 13.3726 40 20 40C26.6274 40 32 34.6274 32 28V16L24 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 8V16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 16L24 24L40 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Trust & Security',
      description: 'We protect your data with bank-grade encryption and never compromise on privacy.',
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 12L28 24L20 36L12 24L20 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 12L36 24L28 36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Efficiency',
      description: 'Every feature is designed to save time and reduce manual work for communities.',
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 36C12 30.6863 17.5817 26 24 26C30.4183 26 36 30.6863 36 36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 24C37.1046 24 38 23.1046 38 22C38 20.8954 37.1046 20 36 20C34.8954 20 34 20.8954 34 22C34 23.1046 34.8954 24 36 24Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 24C13.1046 24 14 23.1046 14 22C14 20.8954 13.1046 20 12 20C10.8954 20 10 20.8954 10 22C10 23.1046 10.8954 24 12 24Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Community-First',
      description: 'We build for real community needs, not just features. User feedback drives our roadmap.',
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="24" cy="24" rx="18" ry="12" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="6" fill="currentColor" />
          <path
            d="M12 16C12 16 16 20 24 20C32 20 36 16 36 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: 'Transparency',
      description: 'Clear pricing, open communication, and honest reporting for all stakeholders.',
    },
  ];

  return (
    <section className="core-values-section" aria-label="Core Values section">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className={`core-values-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <h2 className="core-values-title">Our Core Values</h2>
              <p className="core-values-subtitle">
                The principles that guide everything we do at ApartmentSync.
              </p>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="row g-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-6 col-12"
            >
              <div
                className={`core-value-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="core-value-icon-wrapper">
                  <div className="core-value-icon">{value.icon}</div>
                </div>
                <h3 className="core-value-title">{value.title}</h3>
                <p className="core-value-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

