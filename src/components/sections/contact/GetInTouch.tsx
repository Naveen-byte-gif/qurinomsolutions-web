'use client';

import React, { useEffect, useState } from 'react';

/**
 * Get In Touch Section Component
 * 
 * Professional get in touch section with:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Four contact method cards
 * - Performance optimized
 * - Smooth animations
 */
const GetInTouch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 12L24 20L40 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12V36C8 37.1046 8.89543 38 10 38H38C39.1046 38 40 37.1046 40 36V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12L24 20L40 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Email Us',
      details: 'Our team will respond within 24 hours',
      contact: 'tunganavanaveenjob18@gmail.com',
      href: 'mailto:tunganavanaveenjob18@gmail.com',
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 12L12 18V30C12 31.1046 12.8954 32 14 32H18V36H22V32H26C27.1046 32 28 31.1046 28 30V18L22 12H18Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Call Us',
      details: '24/7 available',
      contact: '+91 81066 51649',
      href: 'tel:+918106651649',
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M24 8C16.268 8 10 14.268 10 22C10 30 24 40 24 40C24 40 38 30 38 22C38 14.268 31.732 8 24 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'Visit Us',
      details: 'Our headquarters',
      contact: 'Vizag, Dhuvvada, India',
      href: '#',
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
          <path
            d="M24 12V24L32 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Office Hours',
      details: "When we're available",
      contact: '24/7 available',
      href: '#',
    },
  ];

  return (
    <section className="get-in-touch-section" aria-label="Get in Touch section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className={`get-in-touch-header text-center ${isVisible ? 'animate-fade-in-up' : ''}`}>
              {/* Get in Touch Badge */}
              <div className={`get-in-touch-badge ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}>
                <span className="get-in-touch-badge-text">Get in Touch</span>
              </div>

              {/* Main Heading */}
              <h1 className={`get-in-touch-headline ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}>
                We'd Love to Hear From You
              </h1>

              {/* Subheading */}
              <p className={`get-in-touch-subtitle ${isVisible ? 'animate-fade-in-up-delay-3' : ''}`}>
                Have questions about ApartmentSync? Want to schedule a demo? Our team is here to help.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="row g-4">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-6 col-12"
            >
              <a
                href={method.href}
                className={`get-in-touch-card d-block ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                aria-label={`${method.title}: ${method.contact}`}
              >
                <div className="get-in-touch-icon-wrapper">
                  <div className="get-in-touch-icon">{method.icon}</div>
                </div>
                <h3 className="get-in-touch-card-title">{method.title}</h3>
                <p className="get-in-touch-card-details">{method.details}</p>
                <p className="get-in-touch-card-contact">{method.contact}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

