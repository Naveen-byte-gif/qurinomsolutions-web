'use client';

import React, { useEffect, useState } from 'react';

/**
 * About Hero Section Component
 * 
 * Professional about hero section with:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Accessible navigation and CTAs
 * - Performance optimized
 * - Smooth animations
 */
const AboutHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="about-hero-section" aria-label="About ApartmentSync hero section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className={`about-hero-content ${isVisible ? 'animate-fade-in-up' : ''}`}>
              {/* About ApartmentSync Button */}
              <div className={`about-hero-badge ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}>
                <span className="about-hero-badge-text">About ApartmentSync</span>
              </div>

              {/* Main Headline */}
              <h1 className={`about-hero-headline ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}>
                Building Smarter
                <br />
                Communities Together
              </h1>

              {/* Description */}
              <p className={`about-hero-description ${isVisible ? 'animate-fade-in-up-delay-3' : ''}`}>
                ApartmentSync is on a mission to transform apartment living by making community management effortless, transparent, and connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

