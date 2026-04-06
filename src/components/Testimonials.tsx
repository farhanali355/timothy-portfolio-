'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah',
    role: 'CEO, TechFlow',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.',
    rating: '5.0',
    avatar: '/profile.png' // Or simple placeholder since no avatars given
  },
  {
    name: 'John Adam',
    role: 'CEO, Basket',
    text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.',
    rating: '5.0',
    avatar: '/profile.png'
  },
  {
    name: 'Paul',
    role: 'CEO, Food Box',
    text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.',
    rating: '5.0',
    avatar: '/profile.png'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testi-section">
      <div className="testi-wrapper">
        {/* Background Decorative Stars */}
        <div className="testi-star-left">
          <Image src="/tim-testimonial-images/star.png" alt="star" width={24} height={24} />
        </div>
        <div className="testi-star-right">
          <Image src="/tim-testimonial-images/star.png" alt="star" width={24} height={24} />
        </div>

        {/* Header content */}
        <div className="testi-header-center">
          <div className="testi-title-wrapper">
            <h2>Testimonials That</h2>
            <Image 
              src="/tim-testimonial-images/icon.png" 
              alt="icon" 
              width={30} 
              height={30} 
              className="testi-title-icon" 
            />
          </div>
          <h1>Speak to <span>My Results</span></h1>
          <p className="testi-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        {/* Marquee / Cards Track */}
        <div className="testi-marquee-container">
          <div className="testi-cards-track">
            {[...testimonials, ...testimonials].map((testi, index) => (
              <div key={index} className="testi-card">
                {/* Giant background quotes */}
                <div className="testi-quote-bg">”</div>

                {/* User Info */}
                <div className="testi-user-info">
                  <div className="testi-avatar">
                    {/* Using profile.png as placeholder if no specific avatar */}
                    <Image src="/profile.png" alt={testi.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="testi-user-text">
                    <h4>{testi.name}</h4>
                    <p>{testi.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="testi-rating">
                  <Image src="/tim-testimonial-images/rating.png" alt="5 stars" width={110} height={20} />
                </div>

                {/* Text */}
                <p className="testi-desc">
                  {testi.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
