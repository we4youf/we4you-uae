"use client";

import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const stats = [
  { value: "01", label: "Trusted partner" },
  { value: "03", label: "Solution areas" },
  { value: "UAE", label: "Business reach" }
];

const whyUsImages = [
  '/assets/why-we4you.webp',
  '/assets/service-printing.webp',
  '/assets/service-trading.webp',
  '/assets/service-digital.webp',
  '/assets/we4you-about.webp',
  '/assets/we4you-hero.webp',
];

const WhyChooseUs: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        galleryRef.current.style.transform = `rotate(${window.scrollY * 0.05}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="why-us" className="why-section theme-dark py-section">
      <div className="container">
        <div className="studio-gallery-container reveal-up">
          <div className="studio-gallery" ref={galleryRef}>
            {whyUsImages.map((image, index) => (
              <div key={image} className={`polaroid p-${index + 1}`}>
                <img src={image} alt="WE4YOU UAE service" />
              </div>
            ))}
          </div>
          <div className="gallery-center-text">
            <h2 className="title-large">Why WE4YOU?</h2>
          </div>
        </div>

        <div className="stats-grid mt-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`stat-item reveal-up delay-${(index + 1) * 100}`}>
              <div className="stat-value title-massive">{stat.value}</div>
              <div className="stat-label text-lead">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="client-trust mt-20 reveal-up">
          <h3 className="text-lead trust-headline">Quality products. Reliable service. Customer focused. Solutions that deliver.</h3>
          <div className="logos-cluster">
            <span className="logo-placeholder">Quality</span>
            <span className="logo-placeholder">Reliable</span>
            <span className="logo-placeholder">Focused</span>
            <span className="logo-placeholder">Delivering</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
