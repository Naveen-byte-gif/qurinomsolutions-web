'use client';

import React, { useEffect, useState, FormEvent } from 'react';

/**
 * Contact Form Section Component
 * 
 * Professional contact form section with:
 * - Responsive design (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Form on left, company info on right
 * - Performance optimized
 * - Smooth animations
 */
const ContactForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    apartmentName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your inquiry! We will respond promptly.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        apartmentName: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section className="contact-form-section" aria-label="Contact form section">
      <div className="container">
        <div className="row g-4">
          {/* Left Column - Contact Form */}
          <div className="col-lg-7 col-md-12 order-lg-1 order-2">
            <div className={`contact-form-wrapper ${isVisible ? 'animate-fade-in-up' : ''}`}>
              {/* Form Header */}
              <div className="contact-form-header">
                <div className="contact-form-header-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="contact-form-title">Send a Message</h2>
                  <p className="contact-form-subtitle">
                    Fill out the form and we'll respond promptly.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="fullName" className="contact-form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-control contact-form-input"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="email" className="contact-form-label">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control contact-form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="phone" className="contact-form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control contact-form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="apartmentName" className="contact-form-label">
                      Apartment/Society Name
                    </label>
                    <input
                      type="text"
                      id="apartmentName"
                      name="apartmentName"
                      className="form-control contact-form-input"
                      placeholder="Green Valley Apartments"
                      value={formData.apartmentName}
                      onChange={handleInputChange}
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="col-12 mb-4">
                    <label htmlFor="message" className="contact-form-label">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control contact-form-textarea"
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn contact-form-submit-btn"
                      disabled={isSubmitting}
                      suppressHydrationWarning
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="contact-form-submit-icon"
                      >
                        <path
                          d="M2.5 10L17.5 10M17.5 10L12.5 5M17.5 10L12.5 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Company Info & Map */}
          <div className="col-lg-5 col-md-12 order-lg-2 order-1">
            <div className={`contact-info-wrapper ${isVisible ? 'animate-fade-in' : ''}`}>
              {/* Map Placeholder */}
              <div className="contact-map-placeholder">
                <div className="contact-map-icon">
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
                </div>
              </div>

              {/* Company Details */}
              <div className="contact-company-info">
                <div className="contact-company-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 21H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 21V7L12 3L19 7V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 9V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 9V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="contact-company-details">
                  <h3 className="contact-company-name">ApartmentSync Technologies</h3>
                  <p className="contact-company-address">
                    Vizag, Dhuvvada<br />
                    India
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-directions-btn"
                aria-label="Get directions to ApartmentSync Technologies"
              >
                Get Directions
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4.16667 10H15.8333M15.8333 10L11.6667 5.83333M15.8333 10L11.6667 14.1667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Online Status */}
              <div className="contact-online-status">
                <div className="contact-online-indicator">
                  <span className="contact-online-dot"></span>
                  <span className="contact-online-text">We're Online</span>
                </div>
                <p className="contact-online-response">24/7 available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

