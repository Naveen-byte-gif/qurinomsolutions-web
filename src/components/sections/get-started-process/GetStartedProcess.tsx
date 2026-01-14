'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { GET_STARTED_PROCESS_STEPS, type ProcessStep } from '@/lib/get-started-process-data';
import '@/styles/get-started-process.css';

/**
 * Get Started Process Section Component
 * 
 * Professional process section showcasing 4 easy steps with two-column layout
 * Features:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML and structured data
 * - Smooth animations on scroll
 * - Accessible markup with ARIA labels
 * - Performance optimized with Next.js Image
 * - Two-column layout: left (text) and right (image)
 */

const GetStartedProcess: React.FC = () => {
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
    '@type': 'HowTo',
    name: 'Get Started with Community Management in 4 Easy Steps',
    description:
      'Learn how to get started with smart community management in just 4 simple steps: Register Your Community, Onboard Residents & Staff, Daily Operations, and Payments & Reporting.',
    step: GET_STARTED_PROCESS_STEPS.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      itemListElement: step.features.map((feature, featureIndex) => ({
        '@type': 'HowToTip',
        position: featureIndex + 1,
        text: feature.text,
      })),
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
        className="get-started-process-section"
        aria-label="Get started process section"
      >
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div className="col-12">
              <div className="get-started-process-header text-center">
                <p
                  className={`get-started-process-label ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                >
                  Simple Process
                </p>
                <h2
                  className={`get-started-process-title ${
                    isVisible ? 'animate-fade-in-up-delay-1' : ''
                  }`}
                >
                  Get Started in{' '}
                  <span className="get-started-process-title-highlight">4 Easy Steps</span>
                </h2>
                <p
                  className={`get-started-process-subtitle ${
                    isVisible ? 'animate-fade-in-up-delay-2' : ''
                  }`}
                >
                  From registration to full operations, ApartmentSync makes it simple to digitize your
                  entire apartment management workflow.
                </p>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="get-started-process-steps">
            {GET_STARTED_PROCESS_STEPS.map((step, index) => (
              <ProcessStepCard
                key={step.stepNumber}
                step={step}
                index={index}
                isVisible={isVisible}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
  isVisible: boolean;
  isEven: boolean;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, index, isVisible, isEven }) => {
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

  const animationDelay = index * 0.15;
  const animationClass = cardVisible ? 'animate-fade-in' : '';

  return (
    <div
      ref={cardRef}
      className={`get-started-process-step-row ${isEven ? 'step-even' : 'step-odd'}`}
    >
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Text Content Column */}
          <div
            className={`col-lg-6 ${
              isEven ? 'order-lg-2' : 'order-lg-1'
            } ${animationClass}`}
            style={{ animationDelay: `${animationDelay}s` }}
          >
            <div className="get-started-process-step-content">
              {/* Step Number & Icon */}
              <div className="get-started-process-step-header">
                <div
                  className="get-started-process-step-icon"
                  style={{
                    backgroundColor: step.iconColor,
                    background: step.iconGradient,
                  }}
                >
                  <span className="get-started-process-step-number">{step.stepNumber}</span>
                </div>
                <h3 className="get-started-process-step-title">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="get-started-process-step-description">{step.description}</p>

              {/* Features List */}
              <ul className="get-started-process-step-features">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="get-started-process-step-feature">
                    <svg
                      className="get-started-process-check-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`col-lg-6 ${
              isEven ? 'order-lg-1' : 'order-lg-2'
            } ${animationClass}`}
            style={{ animationDelay: `${animationDelay + 0.1}s` }}
          >
            <div className="get-started-process-step-visual">
              <div
                className="get-started-process-visual-placeholder"
                style={{
                  borderColor: step.iconColor,
                  background: `linear-gradient(135deg, ${step.iconColor}08 0%, ${step.iconColor}03 100%)`,
                }}
              >
                <div className="get-started-process-visual-image-wrapper">
                  <Image
                    src={step.imagePath}
                    alt={step.imageAlt}
                    width={800}
                    height={600}
                    className="get-started-process-visual-image"
                    priority={index < 2}
                    quality={95}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connecting Line (between steps, hidden on mobile) */}
      {index < GET_STARTED_PROCESS_STEPS.length - 1 && (
        <div className="get-started-process-connector d-none d-lg-block" aria-hidden="true">
          <svg
            width="2"
            height="60"
            viewBox="0 0 2 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="60"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default GetStartedProcess;

