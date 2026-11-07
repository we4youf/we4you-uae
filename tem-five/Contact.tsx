"use client";

import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { buildWhatsAppUrl, type ContactFormData } from "./contactWhatsApp";
import "./Contact.css";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((currentFormData) => ({ ...currentFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.assign(buildWhatsAppUrl(formData));
  };

  return (
    <section id="contact" className="contact-section py-section">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-intro reveal-up">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="title-large contact-title">Let&apos;s work together</h2>
            <p className="text-lead contact-description">
              Tell us what you need and we&apos;ll continue the conversation with you on WhatsApp.
            </p>
          </div>

          <form className="contact-form reveal-up delay-100" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  required
                />
              </div>
            </div>

            <button className="contact-submit" type="submit">
              Send via WhatsApp <span aria-hidden="true">↗</span>
            </button>
            <p className="contact-form-note">Your message will open directly in WhatsApp.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
