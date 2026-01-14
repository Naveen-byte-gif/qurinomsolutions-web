'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Pricing CTA Component
 * 
 * Professional call-to-action section for pricing page with:
 * - "Still Have Questions?" heading
 * - Descriptive subtitle
 * - Two CTA buttons (Contact Sales & Schedule a Demo)
 * - Fully responsive design (mobile, tablet, laptop, desktop)
 * - Bootstrap integration
 * - Accessible and SEO-friendly
 */

const PricingCTA: React.FC = () => {
  return (
    <section className="pricing-cta-section" aria-labelledby="pricing-cta-heading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="pricing-cta-content text-center">
              {/* Heading */}
              <h2 id="pricing-cta-heading" className="pricing-cta-heading">
                Still Have Questions?
              </h2>

              {/* Subtitle */}
              <p className="pricing-cta-subtitle">
                Our team is here to help you choose the right plan for your community.
              </p>

              {/* CTA Buttons */}
              <div className="pricing-cta-buttons">
                <div className="row justify-content-center g-3">
                  <div className="col-12 col-sm-6 col-md-auto">
                    <Link
                      href="/contact"
                      className="btn pricing-cta-btn-primary"
                      aria-label="Contact sales team"
                    >
                      Contact Sales
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pricing-cta-btn-icon"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="col-12 col-sm-6 col-md-auto">
                    <Link
                      href="/contact"
                      className="btn pricing-cta-btn-secondary"
                      aria-label="Schedule a demo"
                    >
                      Schedule a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;

