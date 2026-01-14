'use client';

import React from 'react';
import '@/styles/features/notices-announcements.css';

/**
 * Notices & Announcements Feature Card Component
 * 
 * Displays notices and announcements feature with Bootstrap classes
 */
interface NoticesAnnouncementsCardProps {
  isVisible: boolean;
  delay: number;
}

const NoticesAnnouncementsCard: React.FC<NoticesAnnouncementsCardProps> = ({ isVisible, delay }) => {
  return (
    <div
      className={`col-lg-4 col-md-6 col-sm-12 mb-4 feature-item-wrapper`}
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content="6" />
      <div
        className={`feature-card feature-card-notices ${isVisible ? `animate-fade-in-up-delay-${delay}` : ''}`}
        style={{
          '--card-delay': `${(delay - 2) * 0.2}s`,
          '--icon-delay': `${(delay - 2) * 0.3}s`,
        } as React.CSSProperties}
        itemScope
        itemType="https://schema.org/Thing"
      >
        <div className="feature-card-icon">
          <div className="icon-wrapper icon-notices" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6L6 10V16C6 20.4183 9.58172 24 14 24H16C16.5523 24 17 24.4477 17 25V27C17 27.5523 16.5523 28 16 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26 10L16 6L26 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26 10V16C26 20.4183 22.4183 24 18 24H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="feature-card-content">
          <h3 className="feature-card-title" itemProp="name">
            Notices & Announcements
          </h3>
          <p className="feature-card-description" itemProp="description">
            Broadcast important updates to residents instantly via push & email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticesAnnouncementsCard;

