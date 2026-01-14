'use client';

import React, { useEffect, useState, useRef } from 'react';

/**
 * Simple Process Section Component
 * 
 * Professional process section showcasing 4 easy steps
 * Features:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML and structured data
 * - Smooth animations on scroll
 * - Accessible markup with ARIA labels
 * - Performance optimized
 */

interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SimpleProcess: React.FC = () => {
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

  // Process steps data
  const steps: ProcessStep[] = [
    {
      stepNumber: '01',
      title: 'Register Your Community',
      description: 'Sign up and add your apartment complex or society details in minutes.',
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M32 16C36.4183 16 40 19.5817 40 24C40 28.4183 36.4183 32 32 32C27.5817 32 24 28.4183 24 24C24 19.5817 27.5817 16 32 16Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48 24H56"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52 20V28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 48C16 40.268 22.268 34 30 34H34C41.732 34 48 40.268 48 48"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      stepNumber: '02',
      title: 'Assign Roles',
      description: 'Set up residents, staff, and admin roles with custom permissions.',
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M32 16L48 24V32C48 42.4934 40.4934 50 30 50H34C23.5066 50 16 42.4934 16 32V24L32 16Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 16V28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 24L32 32L48 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="36" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      stepNumber: '03',
      title: 'Manage Operations',
      description: 'Handle complaints, payments, and notices all from one dashboard.',
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="16"
            y="20"
            width="32"
            height="44"
            rx="4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 32H40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 40H40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 48H32"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="44" cy="28" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      stepNumber: '04',
      title: 'Track & Grow',
      description: 'Analyze data, improve efficiency, and scale your operations.',
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20 48L28 36L36 44L44 32"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 32H52V40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="16"
            y="16"
            width="40"
            height="40"
            rx="2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Get Started with Community Management in 4 Easy Steps',
    description:
      'Learn how to get started with smart community management in just 4 simple steps: Register Your Community, Assign Roles, Manage Operations, and Track & Grow.',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
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
        className="simple-process-section"
        aria-label="Simple process section"
      >
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div className="col-12">
              <div className="simple-process-header text-center">
                <p
                  className={`simple-process-label ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                >
                  Simple Process
                </p>
                <h2
                  className={`simple-process-title ${
                    isVisible ? 'animate-fade-in-up-delay-1' : ''
                  }`}
                >
                  Get Started in{' '}
                  <span className="simple-process-title-highlight">4 Easy Steps</span>
                </h2>
                <p
                  className={`simple-process-subtitle ${
                    isVisible ? 'animate-fade-in-up-delay-2' : ''
                  }`}
                >
                  From registration to full operation in just a few simple steps.
                </p>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="row simple-process-steps-row g-4 g-lg-3">
            {steps.map((step, index) => (
              <div
                key={step.stepNumber}
                className="col-lg-3 col-md-6 col-sm-6 col-12 position-relative"
              >
                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div
                    className="simple-process-connector d-none d-lg-block"
                    aria-hidden="true"
                  >
                    <svg
                      width="100%"
                      height="2"
                      viewBox="0 0 40 2"
                      fill="none"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0"
                        y1="1"
                        x2="40"
                        y2="1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
                <div
                  className={`simple-process-card ${
                    isVisible
                      ? index === 0
                        ? 'animate-fade-in-up-delay-3'
                        : index === 1
                        ? 'animate-fade-in-up-delay-4'
                        : index === 2
                        ? 'animate-fade-in-up-delay-5'
                        : 'animate-fade-in-up-delay-6'
                      : ''
                  }`}
                >
                  {/* Step Label */}
                  <div className="simple-process-step-label">
                    Step {step.stepNumber}
                  </div>

                  {/* Icon */}
                  <div className="simple-process-icon-wrapper">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="simple-process-card-content">
                    <h3 className="simple-process-card-title">{step.title}</h3>
                    <p className="simple-process-card-description">
                      {step.description}
                    </p>
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

export default SimpleProcess;

