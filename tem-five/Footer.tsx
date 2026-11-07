"use client";

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        <div className="footer-grid grid grid-cols-5">
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Get in touch</h4>
            <ul className="footer-links">
              <li><a href="tel:+971568152689">+971 56 815 2689</a></li>
              <li><a href="tel:+971558325749">+971 55 832 5749</a></li>
              <li><a href="https://wa.me/971558325749" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li>
                <a
                  className="footer-social-link"
                  href="https://www.instagram.com/we4youfzellc/?utm_source=qr&mdxt=ZmR3bDE1bGVicnY3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WE4YOU UAE on Instagram"
                >
                  <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Our promise</h4>
            <p className="footer-text">
              Quality products<br />
              Trusted service<br />
              Customer focused
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Our services</h4>
            <p className="footer-text">
              Printing solutions<br />
              Trading &amp; import/export<br />
              Digital solutions
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">WE4YOU UAE</h4>
            <p className="footer-text">
              Your trusted partner for<br />
              trading, printing &amp;<br />
              digital solutions.<br /><br />
              United Arab Emirates
            </p>
            <div className="footer-legal mt-4">
              <p>&copy; {new Date().getFullYear()} WE4YOU UAE</p>
              <p><a href="#">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-brand-wrapper">
        <img className="footer-logo" src="/assets/we4you-uae-logo.webp" alt="WE4YOU UAE" />
      </div>
    </footer>
  );
};

export default Footer;
