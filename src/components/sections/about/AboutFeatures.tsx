'use client';

import React, { useEffect, useState } from 'react';

/**
 * About Features Section Component
 * 
 * Professional features section with:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Icon-based feature display
 * - Performance optimized
 * - Smooth animations
 */
const AboutFeatures: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
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
      title: 'Designed specifically for apartments',
      description: 'Built with Indian apartment communities in mind',
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
      title: 'Easy to use for all age groups',
      description: 'Intuitive interface that everyone can navigate',
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
            d="M24 24V32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 32H28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 36H28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 40V44"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Reliable 24/7 customer support',
      description: 'Always here to help when you need us',
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
            d="M16 20L24 28L32 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 16C8 12.6863 10.6863 10 14 10H34C37.3137 10 40 12.6863 40 16V32C40 35.3137 37.3137 38 34 38H14C10.6863 38 8 35.3137 8 32V16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 28V36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 32L24 36L28 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Constantly evolving based on user feedback',
      description: 'We listen and improve continuously',
    },
  ];

  return (
    <section className="about-features-section" aria-label="About features section">
      <div className="container">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-6 col-12"
            >
              <div
                className={`about-feature-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="about-feature-icon-wrapper">
                  <div className="about-feature-icon">{feature.icon}</div>
                </div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;

