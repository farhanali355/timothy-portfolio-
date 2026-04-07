'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      
      <p className="about-subtitle">
        I specialize in end-to-end solutions including front-end design, back-end development, API integration, and secure database management.
      </p>

      <div className="services-layout">
        {/* Main Grid Wrapper */}
        <div className="about-grid-container">
          
          {/* Left Column */}
          <div className="about-col about-left-col">
            <div className="service-item">
              Custom Web & Mobile App Development
            </div>
            <div className="service-item service-item-align-secure">
              Secure & Scalable Database Management
            </div>
          </div>

          {/* Center Column - Responsive Dot Image */}
          <div className="about-col about-center-col">
            <div className="dot-image-wrapper">
              <Image 
                src="/tim-about-images/dot.png" 
                alt="dots" 
                fill 
                className="dot-main-img"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="about-col about-right-col">
            <div className="service-item">
              API Design & Integration
            </div>
            <div className="service-item service-item-align-bottom">
              Modern UI/UX Design
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="service-bottom">
          Deployment, Maintenance & <br /> Post-Launch Support
        </div>

        {/* CTA Button */}
        <div className="view-cv-wrap">
          <button className="view-cv-btn">
            View CV <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
