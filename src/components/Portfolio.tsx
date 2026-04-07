'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Mobile App Development',
    image: '/tim-portfolio-images/image1.jpg',
    bgColor: '#E2E6EF' // Light Gray
  },
  {
    title: 'Web Application',
    image: '/tim-portfolio-images/image2.png',
    bgColor: '#C5FF41' // Lime Green
  },
  {
    title: 'API Design & Integration',
    image: '/tim-portfolio-images/image3.jpg',
    bgColor: '#1A1A1A' // Dark Black
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
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card-custom">
              {/* Top Glass Category Section */}
              <div className="card-top-glass">
                <h3 className="project-category-title">{project.title}</h3>
              </div>

              {/* Unique 'Folder-Style' Curved Image Box */}
              <div className="folder-wrapper">
                <div className="folder-layers-group">
                  {/* Secondary Layers Behind Folder For Stacked Look */}
                  <div className="folder-sheets-bg"></div>
                  
                  <div 
                    className="folder-image-box" 
                    style={{ backgroundColor: project.bgColor }}
                  >
                    <div className="image-inner-wrap">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="project-image-full"
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
          ))}
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
