'use client';

import React, { useEffect, useState, useRef } from 'react';

/**
 * Role-Based Permissions Section Component
 * 
 * Professional role-based access control showcase with:
 * - Responsive Bootstrap grid layout
 * - Smooth scroll animations
 * - SEO-friendly semantic HTML
 * - Accessible design
 * - Performance optimized
 * - Structured data for SEO
 */
const RoleBasedPermissions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Role-Based Permissions',
    description: 'Secure, customized access for every user type. Everyone sees only what they need.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Resident Permissions',
        description: 'For apartment owners and tenants - View & pay maintenance bills, Raise complaints & track status, Receive announcements, Book amenities, Access digital gate pass',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Maintenance Staff Permissions',
        description: 'For housekeeping and security - View assigned tasks, Update task status, Mark attendance, Receive work orders, Log visitor entries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Admin Permissions',
        description: 'For society management - Full system access, Manage residents & staff, Generate bills & reports, Broadcast announcements, Configure system settings',
      },
    ],
  };

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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
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

  // Inject structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'role-permissions-structured-data';
    
    // Remove existing script if present
    const existingScript = document.getElementById('role-permissions-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('role-permissions-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const roles = [
    {
      id: 1,
      title: 'Resident',
      subtitle: 'For apartment owners and tenants',
      color: 'green',
      gradientStart: '#20B2AA',
      gradientEnd: '#48D1CC',
      permissions: [
        'View & pay maintenance bills',
        'Raise complaints & track status',
        'Receive announcements',
        'Book amenities',
        'Access digital gate pass',
      ],
    },
    {
      id: 2,
      title: 'Maintenance Staff',
      subtitle: 'For housekeeping and security',
      color: 'purple',
      gradientStart: '#9B59B6',
      gradientEnd: '#BB8FCE',
      permissions: [
        'View assigned tasks',
        'Update task status',
        'Mark attendance',
        'Receive work orders',
        'Log visitor entries',
      ],
    },
    {
      id: 3,
      title: 'Admin',
      subtitle: 'For society management',
      color: 'orange',
      gradientStart: '#FF8C42',
      gradientEnd: '#FFB88C',
      permissions: [
        'Full system access',
        'Manage residents & staff',
        'Generate bills & reports',
        'Broadcast announcements',
        'Configure system settings',
      ],
    },
  ];

  // Checkmark SVG Icon Component
  const CheckmarkIcon: React.FC<{ color: string }> = ({ color }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill={color} />
      <path
        d="M6 10L9 13L14 7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section
      ref={sectionRef}
      className="role-permissions-section"
      aria-label="Role-Based Permissions section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <span
              className={`role-permissions-badge ${isVisible ? 'animate-fade-in-up' : ''}`}
              aria-label="Access Control"
            >
              Access Control
            </span>
            <h2
              className={`role-permissions-title ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}
              itemProp="name"
            >
              <span className="role-permissions-title-part">Role-Based</span>{' '}
              <span className="role-permissions-title-highlight">Permissions</span>
            </h2>
            <p
              className={`role-permissions-subtitle ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}
              itemProp="description"
            >
              Secure, customized access for every user type. Everyone sees only what they need.
            </p>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {roles.map((role, index) => (
            <div
              key={role.id}
              className="col-lg-4 col-md-6 col-sm-12"
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={role.id.toString()} />
              <div
                className={`role-card role-card-${role.color} ${
                  isVisible ? `animate-fade-in-up-delay-${Math.min(index + 3, 7)}` : ''
                }`}
                style={{
                  '--role-gradient-start': role.gradientStart,
                  '--role-gradient-end': role.gradientEnd,
                  '--card-delay': `${index * 0.15}s`,
                } as React.CSSProperties}
                itemScope
                itemType="https://schema.org/Thing"
              >
                <div
                  className="role-card-gradient-bar"
                  style={{
                    background: `linear-gradient(90deg, ${role.gradientStart} 0%, ${role.gradientEnd} 100%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="role-card-content">
                  <h3 className="role-card-title" itemProp="name">
                    {role.title}
                  </h3>
                  <p className="role-card-subtitle" itemProp="description">
                    {role.subtitle}
                  </p>
                  <ul className="role-card-permissions" aria-label={`${role.title} permissions`}>
                    {role.permissions.map((permission, permIndex) => (
                      <li
                        key={permIndex}
                        className="role-card-permission-item"
                        style={{
                          '--permission-delay': `${(index * 0.1) + (permIndex * 0.05)}s`,
                        } as React.CSSProperties}
                      >
                        <span className="role-card-checkmark" aria-hidden="true">
                          <CheckmarkIcon color={role.gradientStart} />
                        </span>
                        <span className="role-card-permission-text">{permission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleBasedPermissions;

