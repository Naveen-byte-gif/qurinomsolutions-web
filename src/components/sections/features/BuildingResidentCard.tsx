'use client';

import React from 'react';
import '@/styles/features/building-resident.css';

/**
 * Building & Resident Registration Feature Card Component
 * 
 * Displays building and resident registration feature with Bootstrap classes
 */
interface BuildingResidentCardProps {
  isVisible: boolean;
  delay: number;
}

const BuildingResidentCard: React.FC<BuildingResidentCardProps> = ({ isVisible, delay }) => {
  return (
    <div
      className={`col-lg-4 col-md-6 col-sm-12 mb-4 feature-item-wrapper`}
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content="1" />
      <div
        className={`feature-card feature-card-building ${isVisible ? `animate-fade-in-up-delay-${delay}` : ''}`}
        style={{
          '--card-delay': `${(delay - 2) * 0.2}s`,
          '--icon-delay': `${(delay - 2) * 0.3}s`,
        } as React.CSSProperties}
        itemScope
        itemType="https://schema.org/Thing"
      >
        <div className="feature-card-icon">
          <div className="icon-wrapper icon-building" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 28V12L16 6L26 12V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
              <path d="M6 12L16 18L26 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 20H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 24H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 24H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="feature-card-content">
          <h3 className="feature-card-title" itemProp="name">
            Building & Resident Registration
          </h3>
          <p className="feature-card-description" itemProp="description">
            Easily register buildings, units, and residents with complete profile management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildingResidentCard;

