"use client";

import React from 'react';
import './TradeLicense.css';

const licensedActivities = [
  'Printing services and equipment trading',
  'Mobile phones trading, import and export',
  'General trading and electrical spare parts',
  'E-commerce, web design and digital content services',
];

const TradeLicense: React.FC = () => {
  return (
    <section id="license" className="trade-license-section py-section">
      <div className="container trade-license-layout">
        <div className="trade-license-copy reveal-up">
          <p className="section-kicker">Official registration</p>
          <h2 className="title-large">Trade License</h2>
          <p className="text-lead">
            WE4YOU FZE LLC is registered as a Free Zone Entity in Ajman, United Arab Emirates.
            Our license covers trading, printing and digital business activities.
          </p>

          <div className="license-details">
            <div className="license-detail">
              <span>License number</span>
              <strong>2628214993888</strong>
            </div>
            <div className="license-detail">
              <span>Issued</span>
              <strong>14 May 2026</strong>
            </div>
            <div className="license-detail">
              <span>Valid until</span>
              <strong>13 May 2027</strong>
            </div>
            <div className="license-detail">
              <span>Registered in</span>
              <strong>Ajman, UAE</strong>
            </div>
          </div>

          <div className="license-actions">
            <a className="license-button license-button-primary" href="/we4you-trade-license.pdf" target="_blank" rel="noopener noreferrer">
              View Trade License
            </a>
            <a className="license-button license-button-secondary" href="/we4you-trade-license.pdf" download="WE4YOU-Trade-License.pdf">
              Download PDF
            </a>
          </div>
        </div>

        <div className="license-summary reveal-up delay-200">
          <div className="license-badge">WE4YOU<br /><span>UAE</span></div>
          <p className="license-summary-label">Licensed activities</p>
          <ul>
            {licensedActivities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
          <p className="license-address">
            CWS-1V-226389<br />
            26th Floor, Amber Gem Tower, Ajman
          </p>
        </div>
      </div>
    </section>
  );
};

export default TradeLicense;
