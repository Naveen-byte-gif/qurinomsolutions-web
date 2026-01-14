'use client';

import React from 'react';

/**
 * Payments & Invoicing Card Component
 * 
 * Displays the left column with Payments & Invoicing features
 */
interface PaymentFeature {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface PaymentsInvoicingCardProps {
  isVisible: boolean;
}

const PaymentsInvoicingCard: React.FC<PaymentsInvoicingCardProps> = ({ isVisible }) => {
  // Payments & Invoicing Features
  const paymentFeatures: PaymentFeature[] = [
    {
      id: 1,
      title: 'Monthly maintenance invoices',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9C12 9.55228 12.4477 10 13 10C13.5523 10 14 9.55228 14 9C14 8.44772 13.5523 8 13 8C12.4477 8 12 8.44772 12 9Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'UPI / Card / Net Banking',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 10H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Auto reminders & receipts',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8A6 6 0 0 0 6 8C6 11 3 13 3 16V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V16C21 13 18 11 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Late fee automation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 2H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className={`payments-invoicing-card ${isVisible ? 'animate-fade-in-left' : ''}`}>
      {/* Main Icon */}
      <div className="payments-invoicing-icon" aria-hidden="true">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="currentColor"/>
          <rect x="16" y="20" width="32" height="24" rx="2" fill="white"/>
          <path d="M20 28H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 32H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 36H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Heading */}
      <h2 className="payments-invoicing-heading">Payments & Invoicing</h2>

      {/* Description */}
      <p className="payments-invoicing-description">
        Automate billing cycles and accept payments through multiple channels.
      </p>

      {/* Feature Boxes Grid */}
      <div className="payments-features-grid">
        {paymentFeatures.map((feature, index) => (
          <div
            key={feature.id}
            className={`payments-feature-box ${isVisible ? `animate-fade-in-up-delay-${Math.min(index + 3, 6)}` : ''}`}
            itemScope
            itemType="https://schema.org/SoftwareFeature"
            style={{
              '--feature-delay': `${index * 0.15}s`,
            } as React.CSSProperties}
          >
            <div className="payments-feature-icon" aria-hidden="true">
              {feature.icon}
            </div>
            <span className="payments-feature-text" itemProp="name">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsInvoicingCard;

