'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRICING_PLANS, PRICING_HEADER, type PricingPlan } from '@/lib/pricing-data';

/**
 * Pricing Component
 * 
 * Professional pricing page component with:
 * - Monthly/Annual toggle
 * - Three pricing tiers (Basic, Standard, Enterprise)
 * - Fully responsive design (mobile, tablet, laptop, desktop)
 * - Bootstrap integration
 * - Accessible and SEO-friendly
 */

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const getIcon = (iconName: string): React.ReactNode => {
    switch (iconName) {
      case 'building':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pricing-icon"
          >
            <path
              d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'users':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pricing-icon"
          >
            <path
              d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'crown':
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pricing-icon"
          >
            <path
              d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM5 16C5 17.1046 5.89543 18 7 18H17C18.1046 18 19 17.1046 19 16M5 16H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
    const price = isAnnual ? plan.price.annual : plan.price.monthly;
    const isCustomPrice = price === 'Custom';
    const annualDiscount = isAnnual ? 20 : 0;

    return (
      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div
          className={`pricing-card h-100 ${plan.isPopular ? 'pricing-card-popular' : ''}`}
        >
          {plan.isPopular && (
            <div className="pricing-badge">
              <span>Most Popular</span>
            </div>
          )}

          <div className="pricing-card-header">
            <div className={`pricing-icon-wrapper pricing-icon-${plan.id}`}>
              {getIcon(plan.icon)}
            </div>
            <h3 className="pricing-plan-name">{plan.name}</h3>
            <p className="pricing-plan-subtitle">{plan.subtitle}</p>
          </div>

          <div className="pricing-card-body">
            <div className="pricing-price-section">
              {isCustomPrice ? (
                <div className="pricing-price-custom">
                  <span className="pricing-price-amount">Custom</span>
                  <span className="pricing-price-period">/contact sales</span>
                </div>
              ) : (
                <div className="pricing-price">
                  <span className="pricing-price-amount">{price}</span>
                  <span className="pricing-price-period">/per month</span>
                  {isAnnual && (
                    <span className="pricing-price-savings">
                      Save {annualDiscount}%
                    </span>
                  )}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`btn pricing-btn pricing-btn-${plan.buttonVariant} w-100`}
              aria-label={`${plan.buttonText} for ${plan.name} plan`}
            >
              {plan.buttonText}
            </Link>

            <div className="pricing-features">
              <ul className="pricing-features-list">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`pricing-feature-item ${
                      feature.included ? 'feature-included' : 'feature-excluded'
                    }`}
                  >
                    {feature.included ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="feature-icon feature-icon-check"
                        aria-hidden="true"
                      >
                        <path
                          d="M16.667 5L7.5 14.167 3.333 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="feature-icon feature-icon-cross"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 5L15 15M15 5L5 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="pricing-section" aria-labelledby="pricing-heading">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="pricing-header text-center">
              <span className="pricing-tag">{PRICING_HEADER.tag}</span>
              <h1 id="pricing-heading" className="pricing-title">
                {PRICING_HEADER.title}
              </h1>
              <p className="pricing-subtitle">{PRICING_HEADER.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Toggle Section */}
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="pricing-toggle-wrapper">
              <div className="pricing-toggle">
                <button
                  type="button"
                  className={`pricing-toggle-btn ${!isAnnual ? 'active' : ''}`}
                  onClick={() => setIsAnnual(false)}
                  aria-pressed={!isAnnual}
                  aria-label="Monthly pricing"
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className={`pricing-toggle-btn ${isAnnual ? 'active' : ''}`}
                  onClick={() => setIsAnnual(true)}
                  aria-pressed={isAnnual}
                  aria-label="Annual pricing - Save 20%"
                >
                  Annual <span className="pricing-toggle-savings">(Save 20%)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row pricing-cards-row">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

