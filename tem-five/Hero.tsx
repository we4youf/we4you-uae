"use client";
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simple parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-overlay"></div>
      
      <div className="container-fluid hero-container">
        <p className="hero-kicker reveal-up">WE4YOU UAE</p>
        <h1 className="hero-brand reveal-up delay-100">
          One Partner.<br />
          <span>Multiple Solutions.</span>
        </h1>
        <p className="hero-subtitle reveal-up delay-200">
          Your trusted partner for trading, printing &amp; digital solutions.
        </p>
        <div className="hero-actions reveal-up delay-300">
          <a className="hero-button hero-button-primary" href="#services">Explore Services</a>
          <a className="hero-button hero-button-secondary" href="#contact">Talk to Our Team</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
