'use client';

import React, { useEffect, useState, useRef } from 'react';
import BuildingResidentCard from './features/BuildingResidentCard';
import ComplaintsMaintenanceCard from './features/ComplaintsMaintenanceCard';
import PaymentsBillingCard from './features/PaymentsBillingCard';
import DigitalLogBookCard from './features/DigitalLogBookCard';
import StaffVendorCard from './features/StaffVendorCard';
import NoticesAnnouncementsCard from './features/NoticesAnnouncementsCard';
import '@/styles/features.css';

/**
 * Features Section Component
 * 
 * Professional features showcase with:
 * - Responsive Bootstrap grid layout
 * - Smooth scroll animations
 * - SEO-friendly semantic HTML
 * - Accessible design
 * - Performance optimized
 * - Structured data for SEO
 * - Separate component files for each feature
 */
const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ApartmentSync Features',
    description: 'Comprehensive suite of tools for community management',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Building & Resident Registration',
        description: 'Easily register buildings, units, and residents with complete profile management.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Complaints & Maintenance',
        description: 'Track and resolve issues efficiently with real-time status updates.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Online Payments & Billing',
        description: 'Secure payment gateway for maintenance fees, utilities, and more.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Digital Log Book',
        description: 'Maintain visitor records, delivery logs, and staff attendance digitally.',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Staff & Vendor Management',
        description: 'Manage security, housekeeping, and vendor contracts seamlessly.',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Notices & Announcements',
        description: 'Broadcast important updates to residents instantly via push & email.',
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
    script.id = 'features-structured-data';
    
    // Remove existing script if present
    const existingScript = document.getElementById('features-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('features-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="features-section"
      aria-label="Features section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className={`features-title ${isVisible ? 'animate-fade-in-up' : ''}`} itemProp="name">
              Everything You Need to Manage{' '}
              <span className="features-title-highlight">Smarter</span>
            </h2>
            <p className={`features-subtitle ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`} itemProp="description">
              A comprehensive suite of tools designed to streamline every aspect of community management.
            </p>
          </div>
        </div>
        <div className="row g-4">
          <BuildingResidentCard isVisible={isVisible} delay={2} />
          <ComplaintsMaintenanceCard isVisible={isVisible} delay={3} />
          <PaymentsBillingCard isVisible={isVisible} delay={4} />
          <DigitalLogBookCard isVisible={isVisible} delay={5} />
          <StaffVendorCard isVisible={isVisible} delay={6} />
          <NoticesAnnouncementsCard isVisible={isVisible} delay={7} />
        </div>
      </div>
    </section>
  );
};

export default Features;

