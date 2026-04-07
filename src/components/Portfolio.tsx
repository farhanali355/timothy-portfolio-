'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Premium Bakery',
    image: '/tim-portfolio-images/image1.png',
    // bgColor: '#E2E6EF', // Light Gray
    liveUrl: 'https://premium-bakery.vercel.app'
  },
  {
    title: 'GoCart',
    image: '/tim-portfolio-images/image23.png',
    // bgColor: '#C5FF41', // Lime Green
    liveUrl: 'https://gocart-gs.vercel.app/'
  },
  {
    title: 'Gemini Clone',
    image: '/tim-portfolio-images/image3.png',
    // bgColor: '#1A1A1A', // Dark Black
    liveUrl: 'https://gemini-clone-v0.netlify.app/'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Split Header: Title on Left, Summary on Right */}
        <div className="portfolio-header-split">
          <h2 className="portfolio-title-big">My Portfolio</h2>
          <p className="portfolio-summary-text">
            I specialize in crafting responsive websites, stunning graphics, and seamless CMS solutions that not only look great but also deliver results. With a keen eye for design and a strong command over development tools, I bridge the gap between creativity and technology to bring projects to life efficiently and innovatively.
          </p>
        </div>

        {/* 3-Column Custom Card Grid */}
        <div className="portfolio-grid-custom">
          {projects.map((project, index) => {
            const cardContent = (
              <div className="portfolio-card-custom">
                {/* Top Glass Category Section */}
                <div className="card-top-glass">
                  <h3 className="project-category-title">{project.title}</h3>
                </div>

                {/* Unique 'Folder-Style' Curved Image Box */}
                <div className="folder-wrapper">
                  <div className="folder-layers-group">
                    {/* Extra Sheets Removed */}

                    <div
                      className="folder-image-box"
                      style={{ backgroundColor: project.bgColor }}
                    >
                      <div className="image-inner-wrap" style={{ padding: 0 }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="project-image-full"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Circular Arrow Button (Positioned in Cutout Space) */}
                  <div className="arrow-circle-btn">
                    <ArrowUpRight size={24} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            );

            return (
              <a
                key={index}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item-link"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {cardContent}
              </a>
            );
          })}
        </div>

        {/* Pagination Dots at Bottom */}
        <div className="pagination-dots">
          <div className="p-dot active"></div>
          <div className="p-dot"></div>
          <div className="p-dot"></div>
          <div className="p-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
