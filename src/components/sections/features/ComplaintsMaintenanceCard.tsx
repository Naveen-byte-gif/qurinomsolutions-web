'use client';

import React from 'react';
import '@/styles/features/complaints-maintenance.css';

/**
 * Complaints & Maintenance Feature Card Component
 * 
 * Displays complaints and maintenance feature with Bootstrap classes
 */
interface ComplaintsMaintenanceCardProps {
  isVisible: boolean;
  delay: number;
}

const ComplaintsMaintenanceCard: React.FC<ComplaintsMaintenanceCardProps> = ({ isVisible, delay }) => {
  return (
    <div
      className={`col-lg-4 col-md-6 col-sm-12 mb-4 feature-item-wrapper`}
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content="2" />
      <div
        className={`feature-card feature-card-complaints ${isVisible ? `animate-fade-in-up-delay-${delay}` : ''}`}
        style={{
          '--card-delay': `${(delay - 2) * 0.2}s`,
          '--icon-delay': `${(delay - 2) * 0.3}s`,
        } as React.CSSProperties}
        itemScope
        itemType="https://schema.org/Thing"
      >
        <div className="feature-card-icon">
          <div className="icon-wrapper icon-complaints" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 10V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="feature-card-content">
          <h3 className="feature-card-title" itemProp="name">
            Complaints & Maintenance
          </h3>
          <p className="feature-card-description" itemProp="description">
            Track and resolve issues efficiently with real-time status updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsMaintenanceCard;

