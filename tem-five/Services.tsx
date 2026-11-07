"use client";
import React from 'react';
import './Services.css';

const projects = [
  {
    id: 1,
    name: 'Printing & Printing Solutions',
    area: 'Print',
    image: '/assets/service-printing.webp',
    description: 'Professional printing support for business materials, campaigns and everyday operations.',
    details: ['Printing services', 'Ink and printing materials', 'Printing equipment and instruments'],
    size: 'large'
  },
  {
    id: 2,
    name: 'Trading, Import & Export',
    area: 'Trade',
    image: '/assets/service-trading.webp',
    description: 'Reliable sourcing and movement of products across mobile, electronics and general trading categories.',
    details: ['Mobile phones trading', 'Import and export', 'General trading and spare parts'],
    size: 'medium'
  },
  {
    id: 3,
    name: 'Digital Solutions',
    area: 'Digital',
    image: '/assets/service-digital.webp',
    description: 'Digital services that help businesses present, sell and grow across modern online channels.',
    details: ['E-commerce', 'Multimedia development', 'Web design and digital content'],
    size: 'large'
  },
  {
    id: 4,
    name: 'Ink and Printing Material',
    area: 'Printing Supply',
    image: '/assets/service-ink-printing-material.png',
    description: 'Reliable sourcing of ink, toner, paper rolls and printing materials for business and production needs.',
    details: ['Ink and printing material', 'Toner and cartridge supply', 'Paper and printing consumables'],
    size: 'medium'
  },
  {
    id: 5,
    name: 'Electrical and Electronics Applications Spare Parts Trading',
    area: 'Electrical Supply',
    image: '/assets/service-electrical-spare-parts.png',
    description: 'Practical trading and sourcing support for electrical and electronics application spare parts.',
    details: ['Electrical components', 'Electronics application parts', 'Spare parts trading'],
    size: 'medium'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section py-section">
      <div className="container">
        <div className="services-header reveal-up">
          <h2 className="title-large">Our Solutions</h2>
          <p className="text-lead services-desc">
            One trusted partner for printing, trading and digital solutions that help your business move forward.
          </p>
        </div>

        <div className="masonry-grid mt-20">
          {projects.map((project, index) => (
            <div key={project.id} className={`masonry-item reveal-up delay-${(index % 4 + 1) * 100}`}>
              <div className={`project-card ${project.size}`}>
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="img-fluid pencil-sketch"
                  />
                </div>
                <div className="project-info">
                  <h4 className="project-name">{project.name}</h4>
                  <span className="project-area">{project.area}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-details">
                  {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
