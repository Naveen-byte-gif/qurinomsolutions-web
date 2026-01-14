'use client';

import React from 'react';

/**
 * Complaint & Maintenance System Card Component
 * 
 * Displays the right column with Complaint & Maintenance System features
 */
interface ComplaintFeature {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface ComplaintMaintenanceCardProps {
  isVisible: boolean;
}

const ComplaintMaintenanceCard: React.FC<ComplaintMaintenanceCardProps> = ({ isVisible }) => {
  // Complaint & Maintenance Features
  const complaintFeatures: ComplaintFeature[] = [
    {
      id: 1,
      title: 'Raise complaints with images/videos',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Auto-routing to staff',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8L14 10L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Priority-based escalation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6L16 10L12 14L8 10L12 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Status tracking & resolution timeline',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L12 16L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className={`complaint-maintenance-card ${isVisible ? 'animate-fade-in-right' : ''}`}>
      {/* Main Icon */}
      <div className="complaint-maintenance-icon" aria-hidden="true">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="currentColor"/>
          <path d="M20 24C20 22.8954 20.8954 22 22 22H42C43.1046 22 44 22.8954 44 24V36C44 37.1046 43.1046 38 42 38H22C20.8954 38 20 37.1046 20 36V24Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M28 30C28 29.4477 28.4477 29 29 29H35C35.5523 29 36 29.4477 36 30C36 30.5523 35.5523 31 35 31H29C28.4477 31 28 30.5523 28 30Z" fill="white"/>
          <path d="M32 34C32.5523 34 33 34.4477 33 35C33 35.5523 32.5523 36 32 36C31.4477 36 31 35.5523 31 35C31 34.4477 31.4477 34 32 34Z" fill="white"/>
          <path d="M32 20L32 24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Heading */}
      <h2 className="complaint-maintenance-heading">Complaint & Maintenance System</h2>

      {/* Description */}
      <p className="complaint-maintenance-description">
        Track, prioritize, and resolve maintenance issues with complete transparency.
      </p>

      {/* Feature Boxes Grid */}
      <div className="complaint-features-grid">
        {complaintFeatures.map((feature, index) => (
          <div
            key={feature.id}
            className={`complaint-feature-box ${isVisible ? `animate-fade-in-up-delay-${Math.min(index + 3, 6)}` : ''}`}
            itemScope
            itemType="https://schema.org/SoftwareFeature"
            style={{
              '--feature-delay': `${index * 0.15}s`,
            } as React.CSSProperties}
          >
            <div className="complaint-feature-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <span className="complaint-feature-text" itemProp="name">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintMaintenanceCard;

