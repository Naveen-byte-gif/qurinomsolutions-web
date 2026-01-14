'use client';

import React from 'react';
import '@/styles/features/digital-logbook.css';

/**
 * Digital Log Book Feature Card Component
 * 
 * Displays digital log book feature with Bootstrap classes
 */
interface DigitalLogBookCardProps {
  isVisible: boolean;
  delay: number;
}

const DigitalLogBookCard: React.FC<DigitalLogBookCardProps> = ({ isVisible, delay }) => {
  return (
    <div
      className={`col-lg-4 col-md-6 col-sm-12 mb-4 feature-item-wrapper`}
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content="4" />
      <div
        className={`feature-card feature-card-logbook ${isVisible ? `animate-fade-in-up-delay-${delay}` : ''}`}
        style={{
          '--card-delay': `${(delay - 2) * 0.2}s`,
          '--icon-delay': `${(delay - 2) * 0.3}s`,
        } as React.CSSProperties}
        itemScope
        itemType="https://schema.org/Thing"
      >
        <div className="feature-card-icon">
          <div className="icon-wrapper icon-logbook" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6C7.44772 6 7 6.44772 7 7V25C7 25.5523 7.44772 26 8 26H24C24.5523 26 25 25.5523 25 25V7C25 6.44772 24.5523 6 24 6H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 18H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="feature-card-content">
          <h3 className="feature-card-title" itemProp="name">
            Digital Log Book
          </h3>
          <p className="feature-card-description" itemProp="description">
            Maintain visitor records, delivery logs, and staff attendance digitally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalLogBookCard;

