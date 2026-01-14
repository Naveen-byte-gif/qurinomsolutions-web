'use client';

import React, { useEffect, useState, useRef } from 'react';
import PowerfulFeaturesHeader from './powerful-features/PowerfulFeaturesHeader';
import ResidentManagementCard from './powerful-features/ResidentManagementCard';
import ResidentManagementVisual from './powerful-features/ResidentManagementVisual';
import ComplaintMaintenanceCard from './powerful-features/ComplaintMaintenanceCard';
import ComplaintMaintenanceVisual from './powerful-features/ComplaintMaintenanceVisual';
import PaymentsInvoicingCard from './powerful-features/PaymentsInvoicingCard';
import PaymentsInvoicingVisual from './powerful-features/PaymentsInvoicingVisual';
import StaffWorkManagementCard from './powerful-features/StaffWorkManagementCard';
import StaffWorkManagementVisual from './powerful-features/StaffWorkManagementVisual';
import NoticesCommunicationCard from './powerful-features/NoticesCommunicationCard';
import NoticesCommunicationVisual from './powerful-features/NoticesCommunicationVisual';
import ReportsAnalyticsCard from './powerful-features/ReportsAnalyticsCard';
import ReportsAnalyticsVisual from './powerful-features/ReportsAnalyticsVisual';

/**
 * Powerful Features Section Component
 * 
 * Professional features showcase matching the design specification:
 * - Responsive Bootstrap grid layout
 * - Smooth scroll animations
 * - SEO-friendly semantic HTML
 * - Accessible design
 * - Performance optimized
 * - Structured data for SEO
 */
const PowerfulFeatures: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ApartmentSync - Community Management Features',
    applicationCategory: 'BusinessApplication',
    description: 'Comprehensive suite of tools for community and apartment management',
    featureList: [
      {
        '@type': 'SoftwareFeature',
        name: 'Digital Resident Onboarding',
        description: 'Streamline resident onboarding with digital processes',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Admin Approval System',
        description: 'Secure admin approval system for resident management',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Secure Role-Based Access',
        description: 'Role-based access control for secure community management',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Profile & Apartment Details Management',
        description: 'Comprehensive profile and apartment details management',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Raise Complaints with Images/Videos',
        description: 'Submit maintenance complaints with visual evidence',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Auto-Routing to Staff',
        description: 'Automatically route complaints to appropriate staff members',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Priority-Based Escalation',
        description: 'Escalate complaints based on priority levels',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Status Tracking & Resolution Timeline',
        description: 'Track complaint status and resolution timeline',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Monthly Maintenance Invoices',
        description: 'Automated monthly maintenance invoice generation',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'UPI / Card / Net Banking',
        description: 'Multiple payment channel support',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Auto Reminders & Receipts',
        description: 'Automated payment reminders and receipt generation',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Late Fee Automation',
        description: 'Automatic late fee calculation and application',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Task Assignment Dashboard',
        description: 'Centralized dashboard for task assignment and tracking',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Availability & Workload Tracking',
        description: 'Track staff availability and workload distribution',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Completion Photos & Comments',
        description: 'Document task completion with photos and comments',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Performance Metrics',
        description: 'Track and measure staff performance metrics',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Emergency Alerts',
        description: 'Send instant emergency alerts to all residents',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Community Announcements',
        description: 'Broadcast community announcements to all members',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Read Receipt Tracking',
        description: 'Track read receipts for important communications',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Multi-Channel Notifications',
        description: 'Send notifications across multiple channels',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Complaint Resolution Reports',
        description: 'Generate comprehensive complaint resolution reports',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Financial Summaries',
        description: 'Create detailed financial summaries and reports',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'User Engagement Insights',
        description: 'Analyze user engagement and activity insights',
      },
      {
        '@type': 'SoftwareFeature',
        name: 'Export to PDF/Excel',
        description: 'Export reports and data to PDF and Excel formats',
      },
    ],
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Inject structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'powerful-features-structured-data';
    
    // Remove existing script if present
    const existingScript = document.getElementById('powerful-features-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('powerful-features-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="powerful-features-section"
      aria-label="Powerful Features section"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Top Section - Badge, Heading, Description */}
            <PowerfulFeaturesHeader isVisible={isVisible} />
          </div>
        </div>

        {/* Bottom Section - Two Columns */}
        <div className="row g-4 align-items-center mb-0">
          {/* Left Column - Resident Management */}
          <div className="col-lg-6 col-md-12">
            <ResidentManagementCard isVisible={isVisible} />
          </div>

          {/* Right Column - Visual Placeholder */}
          <div className="col-lg-6 col-md-12">
            <ResidentManagementVisual isVisible={isVisible} />
          </div>
        </div>

        {/* Complaint & Maintenance System Section - Reversed Layout */}
        <div className="row g-4 align-items-center mt-0 pt-0">
          {/* Left Column - Image */}
          <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2">
            <ComplaintMaintenanceVisual isVisible={isVisible} />
          </div>

          {/* Right Column - Complaint & Maintenance Card */}
          <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1">
            <ComplaintMaintenanceCard isVisible={isVisible} />
          </div>
        </div>

        {/* Payments & Invoicing Section */}
        <div className="row g-4 align-items-center mt-0 pt-0">
          {/* Left Column - Payments & Invoicing Card */}
          <div className="col-lg-6 col-md-12">
            <PaymentsInvoicingCard isVisible={isVisible} />
          </div>

          {/* Right Column - Visual Placeholder */}
          <div className="col-lg-6 col-md-12">
            <PaymentsInvoicingVisual isVisible={isVisible} />
          </div>
        </div>

        {/* Staff & Work Management Section - Reversed Layout */}
        <div className="row g-4 align-items-center mt-0 pt-0">
          {/* Left Column - Image */}
          <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2">
            <StaffWorkManagementVisual isVisible={isVisible} />
          </div>

          {/* Right Column - Staff & Work Management Card */}
          <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1">
            <StaffWorkManagementCard isVisible={isVisible} />
          </div>
        </div>

        {/* Notices & Communication Section */}
        <div className="row g-4 align-items-center mt-0 pt-0">
          {/* Left Column - Notices & Communication Card */}
          <div className="col-lg-6 col-md-12">
            <NoticesCommunicationCard isVisible={isVisible} />
          </div>

          {/* Right Column - Visual Placeholder */}
          <div className="col-lg-6 col-md-12">
            <NoticesCommunicationVisual isVisible={isVisible} />
          </div>
        </div>

        {/* Reports & Analytics Section - Reversed Layout */}
        <div className="row g-4 align-items-center mt-0 pt-0">
          {/* Left Column - Image */}
          <div className="col-lg-6 col-md-12 order-lg-1 order-md-2 order-2">
            <ReportsAnalyticsVisual isVisible={isVisible} />
          </div>

          {/* Right Column - Reports & Analytics Card */}
          <div className="col-lg-6 col-md-12 order-lg-2 order-md-1 order-1">
            <ReportsAnalyticsCard isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;

