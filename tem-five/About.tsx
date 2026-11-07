"use client";
import React, { useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  // Simple scroll reveal logic could also be extracted to a hook, doing it inline for now
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section py-section">
      <div className="container">
        <h2 className="title-massive text-center reveal-up about-headline">
          Complete<br/>
          Business<br/>
          Solutions
        </h2>
        
        <div className="about-grid mt-20">
          <div className="about-block reveal-up delay-100">
            <p className="text-lead">
              WE4YOU FZE LLC UAE brings quality products and dependable service together under one roof for businesses and customers across the UAE.
            </p>
          </div>
          
          <div className="about-block reveal-up delay-200">
            <p className="text-lead">
              From sourcing and printing to digital execution, our team keeps every solution practical, responsive and customer focused.
            </p>
          </div>
          
          <div className="about-block reveal-up delay-300">
            <ul className="about-list text-lead">
              <li>Printing &amp; printing solutions</li>
              <li>Trading, import &amp; export</li>
              <li>Digital solutions &amp; e-commerce</li>
              <li>Reliable business support</li>
            </ul>
          </div>
        </div>

        <div className="about-image-wrapper mt-20 reveal-up">
          <img 
            src="/assets/we4you-about.webp"
            alt="WE4YOU UAE business solutions"
            className="img-fluid about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
