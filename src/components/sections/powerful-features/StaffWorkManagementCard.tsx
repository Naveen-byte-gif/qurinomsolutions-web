'use client';

import React from 'react';

/**
 * Staff & Work Management Card Component
 * 
 * Displays the right column with Staff & Work Management features
 */
interface StaffFeature {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface StaffWorkManagementCardProps {
  isVisible: boolean;
}

const StaffWorkManagementCard: React.FC<StaffWorkManagementCardProps> = ({ isVisible }) => {
  // Staff & Work Management Features
  const staffFeatures: StaffFeature[] = [
    {
      id: 1,
      title: 'Task assignment dashboard',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Availability & workload tracking',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Completion photos & comments',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Performance metrics',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 10H16V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className={`staff-work-management-card ${isVisible ? 'animate-fade-in-right' : ''}`}>
      {/* Main Icon */}
      <div className="staff-work-management-icon" aria-hidden="true">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="currentColor"/>
          <circle cx="32" cy="24" r="8" fill="white"/>
          <path d="M16 48C16 42 20 38 26 38H38C44 38 48 42 48 48" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="40" cy="20" r="3" fill="white"/>
          <path d="M40 20L44 16L48 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Heading */}
      <h2 className="staff-work-management-heading">Staff & Work Management</h2>

      {/* Description */}
      <p className="staff-work-management-description">
        Assign tasks, track progress, and measure performance of your maintenance team.
      </p>

      {/* Feature Boxes Grid */}
      <div className="staff-features-grid">
        {staffFeatures.map((feature, index) => (
          <div
            key={feature.id}
            className={`staff-feature-box ${isVisible ? `animate-fade-in-up-delay-${Math.min(index + 3, 6)}` : ''}`}
            itemScope
            itemType="https://schema.org/SoftwareFeature"
            style={{
              '--feature-delay': `${index * 0.15}s`,
            } as React.CSSProperties}
          >
            <div className="staff-feature-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <span className="staff-feature-text" itemProp="name">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffWorkManagementCard;

