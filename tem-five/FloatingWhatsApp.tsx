import React from 'react';
import './FloatingWhatsApp.css';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4Zm-8.4 18.2h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 0 1-1.5-5.3C2.2 6.4 6.6 2 12.1 2c2.6 0 5.1 1 6.9 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.7.7.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.2-.2-.4-.3-.7-.4Z" />
  </svg>
);

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      className="floating-whatsapp"
      href="https://wa.me/971558325749"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WE4YOU UAE on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default FloatingWhatsApp;
