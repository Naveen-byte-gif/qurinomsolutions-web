'use client';

import React, { useEffect, useState, useRef } from 'react';
import { COMPLETE_WORKFLOW_FEATURES } from '@/lib/complete-workflow-data';
import '@/styles/complete-workflow.css';

/**
 * Complete Workflow Section Component
 * 
 * Professional workflow at a glance section showcasing 6 key features
 * Features:
 * - Responsive Bootstrap grid layout (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML and structured data
 * - Smooth animations on scroll
 * - Accessible markup with ARIA labels
 * - Performance optimized
 */

const CompleteWorkflow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Complete Workflow at a Glance',
    description:
      'Every aspect of apartment management, connected and streamlined. Manage residents, complaints, payments, notices, tasks, and reports all in one place.',
    itemListElement: COMPLETE_WORKFLOW_FEATURES.map((feature, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: feature.title,
      description: feature.subtitle,
    })),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section
        ref={sectionRef}
        className="complete-workflow-section"
        aria-label="Complete workflow at a glance section"
      >
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div className="col-12">
              <div className="complete-workflow-header text-center">
                <h2
                  className={`complete-workflow-title ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                >
                  Complete Workflow at a Glance
                </h2>
                <p
                  className={`complete-workflow-subtitle ${
                    isVisible ? 'animate-fade-in-up-delay-1' : ''
                  }`}
                >
                  Every aspect of apartment management, connected and streamlined.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Features Grid */}
          <div className="row g-4 g-md-3 g-lg-4">
            {COMPLETE_WORKFLOW_FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2"
              >
                <div
                  className={`complete-workflow-card ${
                    isVisible
                      ? `animate-fade-in-up-delay-${Math.min(index + 2, 7)}`
                      : ''
                  }`}
                >
                  {/* Icon */}
                  <div
                    className="complete-workflow-icon"
                    style={{
                      color: feature.iconColor,
                      backgroundColor: feature.iconBgColor,
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="complete-workflow-content">
                    <h3 className="complete-workflow-card-title">{feature.title}</h3>
                    <p className="complete-workflow-card-subtitle">{feature.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompleteWorkflow;

