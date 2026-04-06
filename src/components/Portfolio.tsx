'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Mobile App Development',
    image: '/tim-portfolio-images/image1.jpg'
  },
  {
    title: 'Web Application',
    image: '/tim-portfolio-images/image2.png'
  },
  {
    title: 'API Design & Integration',
    image: '/tim-portfolio-images/image3.jpg'
  }
];

const Portfolio = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-card-custom', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="portfolio-section" ref={scrollRef}>
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
              <div className="folder-image-box">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="project-image-full"
                />
                
                {/* Circular Arrow Button (Bottom-Right) */}
                <div className="arrow-circle-btn">
                  <ArrowUpRight size={28} />
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
