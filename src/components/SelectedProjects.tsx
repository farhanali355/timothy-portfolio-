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
    category: 'Website Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.'
  },
  {
    id: 2,
    title: 'Basket',
    image: '/tim-project-images/image-2.jpg',
    category: 'Mobile Apps',
    description: 'A comprehensive mobile solution featuring intuitive navigation and a clean, modern aesthetic for seamless user interaction and high conversion.'
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

            {/* Subtle gradient for text readability (Always visible at bottom) */}
            <div className="project-card-bottom-shadow" />

            {/* PREMIUM FLOATING GLASS PANE SYSTEM */}
            <div className="project-hover-overlay">
              <div className="overlay-content">
                <h4 className="overlay-title">{project.title}</h4>
                <p className="overlay-description">{project.description}</p>
              </div>
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
