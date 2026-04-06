'use client';

import React from 'react';
import Image from 'next/image';

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-me-section">
      <div className="contact-me-header">
        <h2>Contact Me</h2>
        <p>Reach out, and let's create a universe of possibilities together!</p>
      </div>

      <div className="contact-me-wrapper">
        <div className="contact-form-side">
          <h3>Let's connect constellations</h3>
          <p className="contact-form-sub">
            Let's align our constellations! Reach out and let the magic of collaboration.
          </p>

          <form className="real-contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Last Name" className="contact-field" required />
            <input type="email" placeholder="Email" className="contact-field" required />
            <textarea placeholder="Message" rows={5} className="contact-field" required></textarea>
            
            <button type="submit" className="contact-submit-btn">
              Submit Now
            </button>
          </form>
        </div>

        <div className="contact-image-side">
          <div className="contact-image-bg">
            <Image 
              src="/contact-image/image.jpg" 
              alt="developer illustration" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
