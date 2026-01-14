'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Reports & Analytics Visual Component
 * 
 * Displays the reports & analytics image from public folder
 */
interface ReportsAnalyticsVisualProps {
  isVisible: boolean;
}

const ReportsAnalyticsVisual: React.FC<ReportsAnalyticsVisualProps> = ({ isVisible }) => {
  return (
    <div className={`reports-visual-placeholder ${isVisible ? 'animate-fade-in-left' : ''}`}>
      <div className="reports-visual-placeholder-inner">
        {/* Reports & Analytics Image from Public Folder */}
        <div className="reports-visual-container">
          <div className="reports-visual-image-wrapper">
            <Image
              src="/Reports_Analytics.png"
              alt="Reports & Analytics - Get actionable insights with comprehensive reports and data visualization"
              width={800}
              height={600}
              className="reports-visual-image"
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

export default ReportsAnalyticsVisual;

