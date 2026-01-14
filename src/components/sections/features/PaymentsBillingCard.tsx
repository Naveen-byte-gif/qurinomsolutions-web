'use client';

import React from 'react';
import '@/styles/features/payments-billing.css';

/**
 * Online Payments & Billing Feature Card Component
 * 
 * Displays payments and billing feature with Bootstrap classes
 */
interface PaymentsBillingCardProps {
  isVisible: boolean;
  delay: number;
}

const PaymentsBillingCard: React.FC<PaymentsBillingCardProps> = ({ isVisible, delay }) => {
  return (
    <div
      className={`col-lg-4 col-md-6 col-sm-12 mb-4 feature-item-wrapper`}
      itemScope
      itemType="https://schema.org/ListItem"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content="3" />
      <div
        className={`feature-card feature-card-payments ${isVisible ? `animate-fade-in-up-delay-${delay}` : ''}`}
        style={{
          '--card-delay': `${(delay - 2) * 0.2}s`,
          '--icon-delay': `${(delay - 2) * 0.3}s`,
        } as React.CSSProperties}
        itemScope
        itemType="https://schema.org/Thing"
      >
        <div className="feature-card-icon">
          <div className="icon-wrapper icon-payments" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 10H6C4.89543 10 4 10.8954 4 12V24C4 25.1046 4.89543 26 6 26H26C27.1046 26 28 25.1046 28 24V12C28 10.8954 27.1046 10 26 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="feature-card-content">
          <h3 className="feature-card-title" itemProp="name">
            Online Payments & Billing
          </h3>
          <p className="feature-card-description" itemProp="description">
            Secure payment gateway for maintenance fees, utilities, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentsBillingCard;

