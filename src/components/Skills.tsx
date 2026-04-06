'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillData = [
  { name: 'Mobile App Development', level: 95 },
  { name: 'Web Application', level: 90 },
  { name: 'API Design & Integration', level: 85 }
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.p-bar-custom-fill', {
        width: 0,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="resume" className="resume-section" ref={sectionRef}>
      <div className="resume-card-wrapper">
        {/* Left Col: Circular Image */}
        <div className="resume-image-col">
          <div className="resume-circular-img-box">
            <div className="resume-main-img">
              <Image 
                src="/tim-resume-image/image.png" 
                alt="Timothy Profile" 
                fill
                style={{ objectFit: 'cover', borderRadius: '50%' }}
                className="skills-image"
              />
            </div>
          </div>
        </div>

        {/* Right Col: Content & Skills */}
        <div className="resume-content-col">
          <p className="resume-main-text">
           I specialize in end-to-end solutions including front-end design, back-end development, API integration, and secure database management. 
          </p>

          <div className="resume-skill-list">
            {skillData.map((skill, index) => (
              <div key={index} className="resume-skill-item">
                <span className="resume-skill-label">{skill.name}</span>
                <div className="p-bar-custom-bg">
                  <div 
                    className="p-bar-custom-fill" 
                    style={{ width: `${skill.level}%` }}
                  >
                    {/* The Dot Handle */}
                    <div className="p-bar-dot-thumb"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
