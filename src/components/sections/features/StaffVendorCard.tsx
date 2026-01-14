'use client';

import React from 'react';
import '@/styles/features/staff-vendor.css';

/**
 * Staff & Vendor Management Feature Card Component
 * 
 * Displays staff and vendor management feature with Bootstrap classes
 */
interface StaffVendorCardProps {
  isVisible: boolean;
  delay: number;
}

const StaffVendorCard: React.FC<StaffVendorCardProps> = ({ isVisible, delay }) => {
  return (
    <div
      className={`col-lg-4 col-md-6 col-sm-12 mb-4 feature-item-wrapper`}
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content="5" />
      <div
        className={`feature-card feature-card-staff ${isVisible ? `animate-fade-in-up-delay-${delay}` : ''}`}
        style={{
          '--card-delay': `${(delay - 2) * 0.2}s`,
          '--icon-delay': `${(delay - 2) * 0.3}s`,
        } as React.CSSProperties}
        itemScope
        itemType="https://schema.org/Thing"
      >
        <div className="feature-card-icon">
          <div className="icon-wrapper icon-staff" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 24C8 20.6863 11.5817 18 16 18C20.4183 18 24 20.6863 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 16C25.1046 16 26 15.1046 26 14C26 12.8954 25.1046 12 24 12C22.8954 12 22 12.8954 22 14C22 15.1046 22.8954 16 24 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="feature-card-content">
          <h3 className="feature-card-title" itemProp="name">
            Staff & Vendor Management
          </h3>
          <p className="feature-card-description" itemProp="description">
            Manage security, housekeeping, and vendor contracts seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffVendorCard;

