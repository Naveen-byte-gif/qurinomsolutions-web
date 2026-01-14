'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Notices & Communication Visual Component
 * 
 * Displays the notices & communication image from public folder
 */
interface NoticesCommunicationVisualProps {
  isVisible: boolean;
}

const NoticesCommunicationVisual: React.FC<NoticesCommunicationVisualProps> = ({ isVisible }) => {
  return (
    <div className={`notices-visual-placeholder ${isVisible ? 'animate-fade-in-right' : ''}`}>
      <div className="notices-visual-placeholder-inner">
        {/* Notices & Communication Image from Public Folder */}
        <div className="notices-visual-container">
          <div className="notices-visual-image-wrapper">
            <Image
              src="/Notices_Communication.png"
              alt="Notices & Communication - Keep everyone informed with instant alerts and community announcements"
              width={800}
              height={600}
              className="notices-visual-image"
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

export default NoticesCommunicationVisual;

