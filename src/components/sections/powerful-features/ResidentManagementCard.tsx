'use client';

import React from 'react';

/**
 * Resident Management Card Component
 * 
 * Displays the left column with Resident Management features
 */
interface ResidentFeature {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface ResidentManagementCardProps {
  isVisible: boolean;
}

const ResidentManagementCard: React.FC<ResidentManagementCardProps> = ({ isVisible }) => {
  // Resident Management Features
  const residentFeatures: ResidentFeature[] = [
    {
      id: 1,
      title: 'Digital resident onboarding',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Admin approval system',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Secure role-based access',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 8V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Profile & apartment details management',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className={`resident-management-card ${isVisible ? 'animate-fade-in-left' : ''}`}>
      {/* Main Icon */}
      <div className="resident-management-icon" aria-hidden="true">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 16C36.4183 16 40 12.4183 40 8C40 3.58172 36.4183 0 32 0C27.5817 0 24 3.58172 24 8C24 12.4183 27.5817 16 32 16Z" fill="currentColor"/>
          <path d="M48 32C52.4183 32 56 28.4183 56 24C56 19.5817 52.4183 16 48 16C43.5817 16 40 19.5817 40 24C40 28.4183 43.5817 32 48 32Z" fill="currentColor"/>
          <path d="M16 32C20.4183 32 24 28.4183 24 24C24 19.5817 20.4183 16 16 16C11.5817 16 8 19.5817 8 24C8 28.4183 11.5817 32 16 32Z" fill="currentColor"/>
          <path d="M32 64C36.4183 64 40 60.4183 40 56C40 51.5817 36.4183 48 32 48C27.5817 48 24 51.5817 24 56C24 60.4183 27.5817 64 32 64Z" fill="currentColor"/>
          <path d="M16 48C20.4183 48 24 44.4183 24 40C24 35.5817 20.4183 32 16 32C11.5817 32 8 35.5817 8 40C8 44.4183 11.5817 48 16 48Z" fill="currentColor"/>
          <path d="M48 48C52.4183 48 56 44.4183 56 40C56 35.5817 52.4183 32 48 32C43.5817 32 40 35.5817 40 40C40 44.4183 43.5817 48 48 48Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Heading */}
      <h2 className="resident-management-heading">Resident Management</h2>

      {/* Description */}
      <p className="resident-management-description">
        Streamline resident onboarding and maintain accurate community records effortlessly.
      </p>

      {/* Feature Boxes Grid */}
      <div className="resident-features-grid">
        {residentFeatures.map((feature, index) => (
          <div
            key={feature.id}
            className={`resident-feature-box ${isVisible ? `animate-fade-in-up-delay-${Math.min(index + 3, 6)}` : ''}`}
            itemScope
            itemType="https://schema.org/SoftwareFeature"
            style={{
              '--feature-delay': `${index * 0.15}s`,
            } as React.CSSProperties}
          >
            <div className="resident-feature-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <span className="resident-feature-text" itemProp="name">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentManagementCard;

