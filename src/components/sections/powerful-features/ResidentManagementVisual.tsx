'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Resident Management Visual Component
 * 
 * Displays the resident management image from public folder
 * Shows a visual representation of community management features
 */
interface ResidentManagementVisualProps {
  isVisible: boolean;
}

const ResidentManagementVisual: React.FC<ResidentManagementVisualProps> = ({ isVisible }) => {
  return (
    <div className={`visual-placeholder ${isVisible ? 'animate-fade-in-right' : ''}`}>
      <div className="visual-placeholder-inner">
        {/* Resident Management Image from Public Folder */}
        <div className="resident-visual-container">
          <div className="resident-visual-image-wrapper">
            <Image
              src="/resident_management.png"
              alt="Resident Management - Digital onboarding, admin approval, role-based access, and profile management features"
              width={800}
              height={600}
              className="resident-visual-image"
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

export default ResidentManagementVisual;

