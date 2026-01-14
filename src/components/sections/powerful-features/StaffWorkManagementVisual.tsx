'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Staff & Work Management Visual Component
 * 
 * Displays the staff & work management image from public folder
 */
interface StaffWorkManagementVisualProps {
  isVisible: boolean;
}

const StaffWorkManagementVisual: React.FC<StaffWorkManagementVisualProps> = ({ isVisible }) => {
  return (
    <div className={`staff-visual-placeholder ${isVisible ? 'animate-fade-in-left' : ''}`}>
      <div className="staff-visual-placeholder-inner">
        {/* Staff & Work Management Image from Public Folder */}
        <div className="staff-visual-container">
          <div className="staff-visual-image-wrapper">
            <Image
              src="/Staff-Work_Management.png"
              alt="Staff & Work Management - Assign tasks, track progress, and measure performance of your maintenance team"
              width={800}
              height={600}
              className="staff-visual-image"
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

export default StaffWorkManagementVisual;

