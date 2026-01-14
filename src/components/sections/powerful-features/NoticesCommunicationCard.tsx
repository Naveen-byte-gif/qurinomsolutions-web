'use client';

import React from 'react';

/**
 * Notices & Communication Card Component
 * 
 * Displays the left column with Notices & Communication features
 */
interface NoticeFeature {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface NoticesCommunicationCardProps {
  isVisible: boolean;
}

const NoticesCommunicationCard: React.FC<NoticesCommunicationCardProps> = ({ isVisible }) => {
  // Notices & Communication Features
  const noticeFeatures: NoticeFeature[] = [
    {
      id: 1,
      title: 'Emergency alerts',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.29 3.86L1.82 18C1.64547 18.3024 1.55297 18.6453 1.552 19C1.55103 19.3547 1.64161 19.6981 1.81441 20.0015C1.98722 20.3049 2.23675 20.5581 2.53773 20.7359C2.83871 20.9137 3.18082 21.0099 3.53 21H20.47C20.8192 21.0099 21.1613 20.9137 21.4623 20.7359C21.7633 20.5581 22.0128 20.3049 22.1856 20.0015C22.3584 19.6981 22.449 19.3547 22.448 19C22.447 18.6453 22.3545 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15447C12.6817 2.98582 12.3438 2.89725 12 2.89725C11.6562 2.89725 11.3183 2.98582 11.0188 3.15447C10.7193 3.32312 10.4683 3.56611 10.29 3.86V3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Community announcements',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Read receipt tracking',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1004 1.7649 16.2038 2.24013C18.3072 2.71537 20.2007 3.85781 21.6017 5.49706" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Multi-channel notifications',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className={`notices-communication-card ${isVisible ? 'animate-fade-in-left' : ''}`}>
      {/* Main Icon */}
      <div className="notices-communication-icon" aria-hidden="true">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="currentColor"/>
          <path d="M24 24C24 20.6863 26.6863 18 30 18H34C37.3137 18 40 20.6863 40 24V28C40 30.2091 40.7909 32.2091 42.1213 33.5394L44.1213 35.5394C45.2929 36.7109 46 38.3095 46 40V42C46 43.1046 45.1046 44 44 44H20C18.8954 44 18 43.1046 18 42V40C18 38.3095 18.7071 36.7109 19.8787 35.5394L21.8787 33.5394C23.2091 32.2091 24 30.2091 24 28V24Z" fill="white"/>
          <path d="M28 48C28 49.1046 28.8954 50 30 50H34C35.1046 50 36 49.1046 36 48V46H28V48Z" fill="white"/>
        </svg>
      </div>

      {/* Heading */}
      <h2 className="notices-communication-heading">Notices & Communication</h2>

      {/* Description */}
      <p className="notices-communication-description">
        Keep everyone informed with instant alerts and community announcements.
      </p>

      {/* Feature Boxes Grid */}
      <div className="notices-features-grid">
        {noticeFeatures.map((feature, index) => (
          <div
            key={feature.id}
            className={`notices-feature-box ${isVisible ? `animate-fade-in-up-delay-${Math.min(index + 3, 6)}` : ''}`}
            itemScope
            itemType="https://schema.org/SoftwareFeature"
            style={{
              '--feature-delay': `${index * 0.15}s`,
            } as React.CSSProperties}
          >
            <div className="notices-feature-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <span className="notices-feature-text" itemProp="name">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesCommunicationCard;

