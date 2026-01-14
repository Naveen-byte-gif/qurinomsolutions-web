'use client';

import React, { useEffect, useState, useRef } from 'react';
import '@/styles/why-communities-love.css';

/**
 * Why Communities Love ApartmentSync Section Component
 * 
 * Professional marketing section with:
 * - Responsive Bootstrap grid layout
 * - Smooth scroll animations
 * - SEO-friendly semantic HTML
 * - Accessible design
 * - Performance optimized
 * - Structured data for SEO
 */
const WhyCommunitiesLove: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ApartmentSync',
    description: 'Community management platform trusted by hundreds of communities',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.75',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      description: 'Community management software with 85% faster resolution, 60% less paperwork, and 95% satisfaction rate',
    },
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
    script.id = 'why-communities-structured-data';
    
    // Remove existing script if present
    const existingScript = document.getElementById('why-communities-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('why-communities-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  // Statistics data
  const statistics = [
    {
      id: 1,
      value: '85%',
      label: 'Faster Resolution',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      value: '60%',
      label: 'Less Paperwork',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      value: '95%',
      label: 'Satisfaction',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      value: '24/7',
      label: 'Support',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: 'Faster Issue Resolution',
      description: 'Resolve complaints 3x faster with automated tracking.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L6 10V16C6 20.4183 9.58172 24 14 24H18C22.4183 24 26 20.4183 26 16V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
          <path d="M13 2L3 8V14C3 18.4183 6.58172 22 11 22H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12L20 16L16 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Transparent Financials',
      description: 'Real-time visibility into all transactions and dues.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C12.6863 8 10 10.6863 10 14C10 17.3137 12.6863 20 16 20C19.3137 20 22 17.3137 22 14C22 10.6863 19.3137 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
          <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 18V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Reduced Manual Work',
      description: 'Automate repetitive tasks and save hours daily.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 22V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 16H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 16H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Better Communication',
      description: 'Instant notifications keep everyone in the loop.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6L6 10V16C6 20.4183 9.58172 24 14 24H16C16.5523 24 17 24.4477 17 25V27C17 27.5523 16.5523 28 16 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 10L16 6L26 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 10V16C26 20.4183 22.4183 24 18 24H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security that grows with you.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14V10C8 6.68629 10.6863 4 14 4H18C21.3137 4 24 6.68629 24 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 14H26C27.1046 14 28 14.8954 28 16V24C28 25.1046 27.1046 26 26 26H6C4.89543 26 4 25.1046 4 24V16C4 14.8954 4.89543 14 6 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
          <path d="M16 20C17.1046 20 18 19.1046 18 18C18 16.8954 17.1046 16 16 16C14.8954 16 14 16.8954 14 18C14 19.1046 14.8954 20 16 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="why-communities-section"
      aria-label="Why communities love ApartmentSync"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Left Section - Why Communities Love */}
          <div className="col-lg-6 col-md-12">
            <div
              className={`why-communities-card ${isVisible ? 'animate-fade-in-left' : ''}`}
              itemScope
              itemType="https://schema.org/Thing"
            >
              <h2 className="why-communities-title" itemProp="name">
                Why Communities Love ApartmentSync
              </h2>
              <p className="why-communities-description" itemProp="description">
                Join hundreds of communities who have transformed their management operations with our platform.
              </p>
              
              <div className="row g-3 g-md-4 statistics-grid">
                {statistics.map((stat, index) => (
                  <div
                    key={stat.id}
                    className="col-6"
                    style={{
                      '--stat-delay': `${index * 0.15}s`,
                    } as React.CSSProperties}
                  >
                    <div
                      className={`stat-card ${isVisible ? `animate-scale-in-delay-${index + 1}` : ''}`}
                      itemScope
                      itemType="https://schema.org/QuantitativeValue"
                    >
                      <div className="stat-icon" aria-hidden="true">
                        {stat.icon}
                      </div>
                      <div className="stat-content">
                        <div className="stat-value" itemProp="value">
                          {stat.value}
                        </div>
                        <div className="stat-label" itemProp="name">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Key Benefits */}
          <div className="col-lg-6 col-md-12">
            <div className={`benefits-section ${isVisible ? 'animate-fade-in-right' : ''}`}>
              <div className="benefits-header">
                <span className="benefits-label">Key Benefits</span>
                <h3 className="benefits-title">
                  Designed for <span className="benefits-title-highlight">Maximum Impact</span>
                </h3>
              </div>
              
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    className={`benefit-card ${isVisible ? `animate-slide-in-right-delay-${index + 1}` : ''}`}
                    style={{
                      '--benefit-delay': `${index * 0.1}s`,
                    } as React.CSSProperties}
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <div className="benefit-icon" aria-hidden="true">
                      {benefit.icon}
                    </div>
                    <div className="benefit-content">
                      <h4 className="benefit-title" itemProp="name">
                        {benefit.title}
                      </h4>
                      <p className="benefit-description" itemProp="description">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCommunitiesLove;

