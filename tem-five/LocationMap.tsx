import React from 'react';
import './LocationMap.css';

const locationLink = 'https://maps.app.goo.gl/DCuDWwrFmKypC3926?g_st=aw';
const mapEmbedUrl = 'https://www.google.com/maps?q=Amber+Gem+Tower,+Al+Rashidiya+3,+Ajman,+United+Arab+Emirates&output=embed';

const LocationMap: React.FC = () => {
  return (
    <section id="location-map" className="location-map-section py-section">
      <div className="container">
        <div className="location-map-header reveal-up">
          <div>
            <p className="eyebrow">Find us in the UAE</p>
            <h2 className="title-large">Visit Our Office</h2>
          </div>
          <div className="location-map-copy">
            <p className="text-lead">CWS-1V-226389, 26th FLOOR, AMBER GEM TOWER, AJMAN, UNITED ARAB EMIRATES</p>
            <p className="text-lead">WE4YOU FZE LLC UAE</p>
            <a className="location-map-link" href={locationLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="location-map-frame reveal-up delay-100">
          <iframe
            title="WE4YOU UAE location map"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
