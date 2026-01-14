'use client';

import React from 'react';

/**
 * Powerful Features Header Component
 * 
 * Displays the badge, heading, and description at the top
 */
interface PowerfulFeaturesHeaderProps {
  isVisible: boolean;
}

const PowerfulFeaturesHeader: React.FC<PowerfulFeaturesHeaderProps> = ({ isVisible }) => {
  return (
    <div className="text-center mt-12">
      {/* Powerful Features Badge */}
      <div className={`powerful-features-badge ${isVisible ? 'animate-fade-in-up' : ''}`}>
        <span itemProp="applicationCategory">Powerful Features</span>
      </div>

      {/* Main Heading */}
      <h1 
        className={`powerful-features-heading ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}
        itemProp="name"
      >
        Everything You Need to Manage Your Community
      </h1>

      {/* Description */}
      <p 
        className={`powerful-features-description ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}
        itemProp="description"
      >
        From resident onboarding to financial reporting, ApartmentSync provides all the tools you need for seamless apartment management.
      </p>
    </div>
  );
};

export default PowerfulFeaturesHeader;

