'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Complaint & Maintenance Visual Component
 * 
 * Displays the complaint & maintenance system image from public folder
 * Shows a visual representation of complaint management features
 */
interface ComplaintMaintenanceVisualProps {
  isVisible: boolean;
}

const ComplaintMaintenanceVisual: React.FC<ComplaintMaintenanceVisualProps> = ({ isVisible }) => {
  return (
    <div className={`complaint-visual-placeholder ${isVisible ? 'animate-fade-in-left' : ''}`}>
      <div className="complaint-visual-placeholder-inner">
        {/* Complaint & Maintenance System Image from Public Folder */}
        <div className="complaint-visual-container">
          <div className="complaint-visual-image-wrapper">
            <Image
              src="/Complaint_Maintenance_System.png"
              alt="Complaint & Maintenance System - Track, prioritize, and resolve maintenance issues with complete transparency"
              width={800}
              height={600}
              className="complaint-visual-image"
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

export default ComplaintMaintenanceVisual;

