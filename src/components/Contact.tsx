'use client';

import React, { useState } from 'react';
import { Mail, Star, ShieldCheck } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Simulate API call
    toast.success('Awesome! We will be in touch soon.', {
      icon: false,
      closeButton: false,
      style: {
        borderRadius: '12px',
        fontWeight: '500',
        color: '#1a1a1a'
      }
    });
    // Clear field
    setEmail('');
  };

  return (
    <section id="contact" className="discuss-section">
      <div className="discuss-container">
        <h2>I'm available for freelance work</h2>
        <h2>Let's Discuss</h2>

        <div className="discuss-input-wrapper">
          <div className="discuss-mail-icon-box">
            <Mail size={20} className="discuss-mail-icon" />
          </div>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="discuss-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="discuss-send-btn" onClick={handleSend}>Send</button>
        </div>

        <div className="discuss-badges">
          <div className="discuss-badge">
            <Star size={18} fill="#ffb800" color="#ffb800" />
            <span>5/5 Average Ratings</span>
          </div>
          <div className="discuss-badge">
            <ShieldCheck size={18} fill="#ffb800" color="white" />
            <span>Certified Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
