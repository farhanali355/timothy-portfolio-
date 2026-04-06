'use client';

import React from 'react';
import { Mail, Star, ShieldCheck } from 'lucide-react';

const Contact = () => {
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
          />
          <button className="discuss-send-btn">Send</button>
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
