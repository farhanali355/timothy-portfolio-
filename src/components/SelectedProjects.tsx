'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const filters = ['Website Design', 'Video Animation', 'Logo Design', 'Mobile Apps', 'Brand Identity'];

const projects = [
  {
    id: 1,
    title: 'Food Box',
    image: '/tim-project-images/image-1.jpg',
    category: 'Website Design'
  },
  {
    id: 2,
    title: 'Basket',
    image: '/tim-project-images/image-2.jpg',
    category: 'Mobile Apps'
  }
];

const SelectedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('Website Design');

  return (
    <section id="project" className="selected-projects-section">
      {/* Header: Title Left + See All Right */}
      <div className="projects-header-wrap">
        <div className="projects-title-left">
          <h3 className="projects-subtitle">Lets have a look at my</h3>
          <h2 className="projects-title">My Project</h2>
        </div>
        <button className="see-all-btn">See All</button>
      </div>

      {/* Filter Pills */}
      <div className="projects-filter-row">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-pill ${activeFilter === filter ? 'filter-pill-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 2-Column Project Grid */}
      <div className="projects-grid-2col">
        {projects.map((project) => (
          <div key={project.id} className="project-card-full">
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="project-card-img"
            />

            {/* Subtle gradient for text readability */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 30%)',
              zIndex: 2
            }} />

            {/* Title at Bottom-Left */}
            <div className="project-card-title-overlay">
              {project.title}
            </div>

            {/* Arrow Button at Top-Right */}
            <div className="project-card-arrow-top">
              <ArrowRight size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots" style={{ marginTop: '50px' }}>
        <div className="p-dot active" style={{ background: '#ad53ff', width: '30px', borderRadius: '10px' }}></div>
        <div className="p-dot" style={{ background: '#E2E8F0', borderRadius: '50%' }}></div>
        <div className="p-dot" style={{ background: '#E2E8F0', borderRadius: '50%' }}></div>
        <div className="p-dot" style={{ background: '#E2E8F0', borderRadius: '50%' }}></div>
      </div>
    </section>
  );
};

export default SelectedProjects;
