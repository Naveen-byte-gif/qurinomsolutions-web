'use client';

import React, { useEffect, useState, useRef } from 'react';
import { WORKFLOW_FEATURES, type WorkflowFeature } from '@/lib/workflow-features-data';
import '@/styles/workflow-glance.css';

/**
 * Icon Components for Workflow Features
 */
const WorkflowIcons: Record<string, React.ReactNode> = {
  residents: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12C27.3137 12 30 14.6863 30 18C30 21.3137 27.3137 24 24 24C20.6863 24 18 21.3137 18 18C18 14.6863 20.6863 12 24 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 36C12 30.4772 16.4772 26 22 26H26C31.5228 26 36 30.4772 36 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 12C36 15.3137 33.3137 18 30 18C26.6863 18 24 15.3137 24 12C24 8.68629 26.6863 6 30 6C33.3137 6 36 8.68629 36 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 36C42 30.4772 37.5228 26 32 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  complaints: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 16V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 32H24.02"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  payments: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="14"
        width="32"
        height="24"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 20H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 30H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="25" r="1.5" fill="currentColor" />
      <circle cx="32" cy="25" r="1.5" fill="currentColor" />
    </svg>
  ),
  notices: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8C20 6.89543 20.8954 6 22 6H26C27.1046 6 28 6.89543 28 8V10H20V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16H36V38C36 39.1046 35.1046 40 34 40H14C12.8954 40 12 39.1046 12 38V16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 24H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 30H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="20" r="2" fill="currentColor" />
    </svg>
  ),
  tasks: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8H36C37.1046 8 38 8.89543 38 10V38C38 39.1046 37.1046 40 36 40H12C10.8954 40 10 39.1046 10 38V10C10 8.89543 10.8954 8 12 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 20L20 24L32 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  reports: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 32V24L20 28L24 20L28 24L32 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 32H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/**
 * Complete Workflow at a Glance Section Component
 * 
 * Professional workflow overview section showcasing 6 key features
 * Features:
 * - Responsive Bootstrap grid layout (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML and structured data
 * - Smooth animations on scroll
 * - Accessible markup with ARIA labels
 * - Performance optimized
 */

const WorkflowGlance: React.FC = () => {
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
    name: 'Complete Workflow at a Glance - ApartmentSync Features',
    description:
      'Every aspect of apartment management, connected and streamlined. Features include Residents, Complaints, Payments, Notices, Tasks, and Reports.',
    itemListElement: WORKFLOW_FEATURES.map((feature, index) => ({
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
        className="workflow-glance-section"
        aria-label="Complete workflow at a glance section"
      >
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div className="col-12">
              <div className="workflow-glance-header text-center">
                <h2
                  className={`workflow-glance-title ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                >
                  Complete Workflow at a Glance
                </h2>
                <p
                  className={`workflow-glance-subtitle ${
                    isVisible ? 'animate-fade-in-up-delay-1' : ''
                  }`}
                >
                  Every aspect of apartment management, connected and streamlined.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Features Grid */}
          <div className="row g-3 g-md-4">
            {WORKFLOW_FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                className="col-6 col-md-4 col-lg-2"
              >
                <WorkflowFeatureCard
                  feature={feature}
                  index={index}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

interface WorkflowFeatureCardProps {
  feature: WorkflowFeature;
  index: number;
  isVisible: boolean;
}

const WorkflowFeatureCard: React.FC<WorkflowFeatureCardProps> = ({
  feature,
  index,
  isVisible,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isVisible]);

  const animationDelay = index * 0.1;
  const animationClass = cardVisible ? 'animate-fade-in' : '';

  return (
    <div
      ref={cardRef}
      className={`workflow-feature-card ${animationClass}`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Icon Circle */}
      <div
        className="workflow-feature-icon-wrapper"
        style={{
          backgroundColor: `${feature.iconColor}15`,
          borderColor: `${feature.iconColor}30`,
        }}
      >
        <div
          className="workflow-feature-icon"
          style={{ color: feature.iconColor }}
        >
          {WorkflowIcons[feature.iconName] || null}
        </div>
      </div>

      {/* Content */}
      <div className="workflow-feature-content">
        <h3 className="workflow-feature-title">{feature.title}</h3>
        <p className="workflow-feature-subtitle">{feature.subtitle}</p>
      </div>
    </div>
  );
};

export default WorkflowGlance;

