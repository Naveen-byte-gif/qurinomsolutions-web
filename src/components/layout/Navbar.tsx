'use client';

import React, { useState, useEffect, useRef, startTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

/**
 * ApartmentSync Navbar Component
 * Professional responsive navbar matching the design specification
 * 
 * Features:
 * - Fully responsive (mobile, tablet, laptop, desktop)
 * - SEO-friendly semantic HTML
 * - Accessible navigation
 * - Smooth transitions and hover effects
 * - Bootstrap integration
 */
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef<string>(pathname);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes (using startTransition to avoid cascading renders)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      // Use startTransition to mark this as a non-urgent update (React 19 best practice)
      startTransition(() => {
        setIsMobileMenuOpen(false);
      });
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handler to close mobile menu on link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = NAV_LINKS;

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href) ?? false;
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white fixed-top ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      style={{
        transition: 'box-shadow 0.3s ease',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="navbar-container">
          {/* Logo/Brand - Left Side */}
          <Link 
            href="/" 
            className="navbar-brand"
            aria-label="ApartmentSync Home"
            onClick={handleLinkClick}
          >
            <Image
              src="/logoapartment.png"
              alt="ApartmentSync Logo"
              width={150}
              height={40}
              className="navbar-logo"
              priority
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar-toggler d-lg-none ${isMobileMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="navbarNav"
            aria-label="Toggle navigation menu"
          >
            <div className={`navbar-toggler-icon ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Navigation Menu - Centered on Desktop */}
          <div
            className={`navbar-collapse ${isMobileMenuOpen ? 'show' : 'collapse'}`}
            id="navbarNav"
          >
            {/* Center Navigation Links */}
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <Link
                    href={link.href}
                    className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Side Actions - Request Demo and Get Started */}
            <div className="navbar-actions">
              <Link
                href="/contact"
                className="nav-link"
                aria-label="Request a demo"
                onClick={handleLinkClick}
              >
                Request Demo
              </Link>
              <Link
                href="/contact"
                className="btn btn-homeplus-gradient"
                aria-label="Get started with ApartmentSync"
                onClick={handleLinkClick}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

