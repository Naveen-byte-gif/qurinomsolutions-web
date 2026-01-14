'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Payments & Invoicing Visual Component
 * 
 * Displays the payments & invoicing image from public folder
 */
interface PaymentsInvoicingVisualProps {
  isVisible: boolean;
}

const PaymentsInvoicingVisual: React.FC<PaymentsInvoicingVisualProps> = ({ isVisible }) => {
  return (
    <div className={`payments-visual-placeholder ${isVisible ? 'animate-fade-in-right' : ''}`}>
      <div className="payments-visual-placeholder-inner">
        {/* Payments & Invoicing Image from Public Folder */}
        <div className="payments-visual-container">
          <div className="payments-visual-image-wrapper">
            <Image
              src="/Payments_Invoicing.png"
              alt="Payments & Invoicing - Automate billing cycles and accept payments through multiple channels"
              width={800}
              height={600}
              className="payments-visual-image"
              priority
              quality={95}
              style={{ 
                width: '100%', 
                height: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsInvoicingVisual;

