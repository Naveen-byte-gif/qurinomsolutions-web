'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/footer.css';

/**
 * Footer Component
 * 
 * Professional footer with:
 * - Responsive Bootstrap grid layout
 * - Smooth animations
 * - SEO-friendly semantic HTML
 * - Accessible design
 * - Performance optimized
 * - Structured data for SEO
 */

const Footer: React.FC = () => {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ApartmentSync',
    url: 'https://apartmentsync.app',
    logo: 'https://apartmentsync.app/logoapartment.png',
    description: 'Smart apartment management software for modern communities. Simplify operations, engage residents, and grow efficiently.',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-81066-51649',
        contactType: 'customer service',
        email: 'tunganavanaveenjob18@gmail.com',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vizag',
      addressRegion: 'Dhuvvada',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://facebook.com/apartmentsync',
      'https://twitter.com/apartmentsync',
      'https://linkedin.com/company/apartmentsync',
      'https://instagram.com/apartmentsync',
    ],
  };

  // Inject structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'footer-structured-data';
    
    // Remove existing script if present
    const existingScript = document.getElementById('footer-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('footer-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  // Footer links data
  const footerLinks = {
    navigation: [
      { href: '/', label: 'Home' },
      { href: '/features', label: 'Features' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/about-us', label: 'About Us' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/refund-policy', label: 'Refund Policy' },
      { href: '/sitemap', label: 'Sitemap' },
    ],
  };

  // Social media links
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/apartmentsync',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/apartmentsync',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28446C14.0247 3.61174 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/apartmentsync',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/apartmentsync',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61993 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47029 10.1584C8.84856 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.51546 14.8717 9.12229C15.4785 9.72912 15.8681 10.5151 15.994 11.364H15.994Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="footer"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container">
        {/* Main Footer Content */}
        <div className="row footer-main">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
            <div className="footer-brand">
              <Link href="/" className="footer-logo-link" aria-label="ApartmentSync Home">
                <div className="footer-logo">
                  <Image
                    src="/logoapartment.png"
                    alt="ApartmentSync Logo"
                    width={180}
                    height={50}
                    className="footer-logo-image"
                    priority
                  />
                </div>
              </Link>
              <p className="footer-description" itemProp="description">
                Smart apartment management software for modern communities. Simplify operations, engage residents, and grow efficiently.
              </p>
              
              {/* Contact Information */}
              <div className="footer-contact">
                <a
                  href="mailto:tunganavanaveenjob18@gmail.com"
                  className="footer-contact-item"
                  itemProp="email"
                  aria-label="Email us at tunganavanaveenjob18@gmail.com"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>tunganavanaveenjob18@gmail.com</span>
                </a>
                
                <a
                  href="tel:+918106651649"
                  className="footer-contact-item"
                  itemProp="telephone"
                  aria-label="Call us at +91 81066 51649"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3522 21.3999C21.1471 21.5872 20.905 21.7292 20.6416 21.8167C20.3781 21.9041 20.0992 21.9351 19.8222 21.9079C16.7428 21.4986 13.787 20.4114 11.19 18.7299C8.77382 17.1898 6.72533 15.1413 5.18518 12.7251C3.50497 10.1237 2.41726 7.16357 2.00818 4.07892C1.98095 3.80187 2.01195 3.52289 2.09941 3.25935C2.18687 2.99581 2.32889 2.75362 2.51623 2.54844C2.70357 2.34326 2.93215 2.17958 3.18713 2.06789C3.44211 1.9562 3.71787 1.89908 3.99618 1.8999H6.99618C7.72818 1.8999 8.39218 2.2999 8.73218 2.9199L10.4322 6.0099C10.7479 6.58589 10.8588 7.25019 10.7482 7.89689C10.6376 8.54359 10.3114 9.13419 9.82218 9.5699L8.09218 11.2999C9.51451 13.9854 11.7145 16.1854 14.4002 17.6079L16.1302 15.8779C16.5659 15.3887 17.1565 15.0625 17.8032 14.9519C18.4499 14.8413 19.1142 14.9522 19.6902 15.2679L22.7802 16.9679C23.4002 17.3079 23.8002 17.9719 23.8002 18.7039L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>+91 81066 51649</span>
                </a>
                
                <div
                  className="footer-contact-item"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>
                    <span itemProp="addressLocality">Vizag</span>,{' '}
                    <span itemProp="addressRegion">Dhuvvada</span>,{' '}
                    <span itemProp="addressCountry">India</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mb-lg-0">
            <nav className="footer-nav" aria-label="Main navigation">
              <h3 className="footer-nav-title">Navigation</h3>
              <ul className="footer-nav-list">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-nav-link"
                      itemProp="url"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Links Column */}
          <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mb-lg-0">
            <nav className="footer-nav" aria-label="Legal navigation">
              <h3 className="footer-nav-title">Legal</h3>
              <ul className="footer-nav-list">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-nav-link"
                      itemProp="url"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
              <p className="footer-copyright" itemProp="copyrightYear">
                © {new Date().getFullYear()} ApartmentSync. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    itemProp="sameAs"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

