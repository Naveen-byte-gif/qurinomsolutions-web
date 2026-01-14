'use client';

import React, { useEffect, useState } from 'react';

/**
 * Mission & Vision Section Component
 * 
 * Professional mission and vision section with:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Two-card layout side by side
 * - Performance optimized
 * - Smooth animations
 */
const MissionVision: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="mission-vision-section" aria-label="Mission and Vision section">
      <div className="container">
        <div className="row g-4">
          {/* Mission Card */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className={`mission-vision-card mission-card ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <div className="mission-vision-icon-wrapper mission-icon-wrapper">
                <div className="mission-vision-icon mission-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                    <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
                    <circle cx="24" cy="24" r="4" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="mission-vision-title">Our Mission</h3>
              <p className="mission-vision-text">
                To create smarter, connected, and stress-free apartment communities by providing an all-in-one digital platform that simplifies every aspect of residential management.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className={`mission-vision-card vision-card ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}>
              <div className="mission-vision-icon-wrapper vision-icon-wrapper">
                <div className="mission-vision-icon vision-icon">
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
                </div>
              </div>
              <h3 className="mission-vision-title">Our Vision</h3>
              <p className="mission-vision-text">
                A future where every residential community operates with complete transparency, efficiency, and harmony—powered by technology that's accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

