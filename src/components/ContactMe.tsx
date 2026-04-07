'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    toast.success('Message received. We will be in touch soon.', {
      icon: false,
      closeButton: false,
      style: {
        borderRadius: '12px',
        fontWeight: '500',
        color: '#1a1a1a'
      }
    });

    // Clear form
    setFormData({ lastName: '', email: '', message: '' });
  };

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

          <form className="real-contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Last Name" 
              className="contact-field" 
              required 
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="contact-field" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea 
              placeholder="Message" 
              rows={5} 
              className="contact-field" 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            
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
