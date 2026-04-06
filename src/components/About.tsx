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
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Left Column - Aligned to right of space but text is left-aligned inside */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'flex-end', paddingTop: '10px' }}>
            <div className="service-item" style={{ textAlign: 'left', minWidth: '280px'  }}>
              Custom Web & Mobile App Development
            </div>
            <div className="service-item" style={{ textAlign: 'left', minWidth: '280px', marginTop: '15px' }}>
              Secure & Scalable Database Management
            </div>
          </div>

          {/* Center Column - Single Combined Graphic */}
          <div style={{ width: '80px', display: 'flex', justifyContent: 'center'}}>
            <div className="dot-icon-wrap" style={{ height: '350px', display: 'flex', alignItems: 'center',marginTop: '-60px' }}>
              <Image src="/tim-about-images/dot.png" alt="dots" width={60} height={200} style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Right Column - Naturally left aligned */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '95px', textAlign: 'left', paddingTop: '20px' }}>
            <div className="service-item">
              API Design & Integration
            </div>
            <div className="service-item" style={{ marginTop: '25px' }}>
              Modern UI/UX Design
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="service-bottom" style={{ textAlign: 'center', margin: '40px auto 0', marginTop: '-25px' }}>
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
