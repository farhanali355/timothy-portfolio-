'use client';

import React from 'react';
import Image from 'next/image';

const items = [
  'UX Design',
  'App Design',
  'Dashboard',
  'Wireframe',
  'User Research',
  'Brand Identity',
  'Mobile Apps'
];

const MarqueeBanner = () => {
  return (
    <section className="marquee-banner-section">
      {/* Background Purple Bar */}
      <div className="marquee-purple-bar"></div>

      {/* Foreground White Bar with Scrolling Text */}
      <div className="marquee-white-bar">
        <div className="marquee-track">
          {/* Duplicate the items for seamless infinite scroll */}
          {[...items, ...items].map((item, index) => (
            <React.Fragment key={index}>
              <span className="marquee-text">{item}</span>
              <Image 
                src="/marque-line/star.png" 
                alt="star" 
                width={30} 
                height={30} 
                className="marquee-star-icon"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeBanner;
