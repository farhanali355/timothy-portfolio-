'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Star, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animations for text and image
      gsap.from('.hello-pill, .hero-heading-center', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
      
      gsap.from('.lime-circle-bg', {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)',
        delay: 0.3
      });

      gsap.from('.hero-person-img', {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out'
      });

      gsap.from('.glass-floating-pill, .hero-side-left, .hero-side-right, .accent-scribble', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 1.2,
        stagger: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-centered" ref={heroRef}>
      <div className="hello-pill">Hello!</div>
      
      <h1 className="hero-heading-center">
        I'm <span style={{ color: '#9d5ae5', position: 'relative', display: 'inline-block' }}>
          Timothy T.
          <div className="accent-scribble top-icon" style={{ position: 'absolute', top: '-35px', right: '-25px', zIndex: 5 }}>
            <Image src="/tim-hero-images/top.png" alt="accent" width={35} height={35} />
          </div>
        </span>,<br />
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <div className="accent-scribble bottom-icon" style={{ position: 'absolute', bottom: '0px', top: '45px', left: '-55px', zIndex: 5 }}>
            <Image src="/tim-hero-images/bottom.png" alt="accent" width={65} height={65} />
          </div>
          Full
        </span> Stack Developer
      </h1>

      {/* Side Sections - Positioned relative to hero-centered for edge access */}
      <div className="hero-side-left">
        <div style={{ marginBottom: '20px' }}>
          <Image src="/tim-hero-images/quote-up.png" alt="quote" width={45} height={45} />
        </div>
        <p className="side-text-muted">
          I'm Timothy Senior Full-Stack and Mobile App Developer with 08+ years of experience delivering high-performance web, mobile, and AI-driven applications.
        </p>
      </div>

      <div className="hero-side-right">
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <Star size={24} fill="#fbbf24" color="#fbbf24" />
          <Star size={24} fill="#fbbf24" color="#fbbf24" />
          <Star size={24} fill="#fbbf24" color="#fbbf24" />
          <Star size={24} fill="#fbbf24" color="#fbbf24" />
          <Star size={24} fill="#fbbf24" color="#fbbf24" />
        </div>
        <div className="upwork-logo-box">
          <h2>UPWORK</h2>
          <span style={{ fontSize: '1rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#000033' }}>TOP RATED</span>
        </div>
      </div>

      <div className="hero-main-container">
        <div className="lime-circle-bg"></div>
        <Image 
          src="/tim-hero-images/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2.png" 
          alt="Timothy T." 
          width={450} 
          height={650} 
          className="hero-person-img"
          priority
        />

        <div className="glass-floating-pill">
          <button className="glass-btn-purple">
            Portfolio <ArrowUpRight size={20} />
          </button>
          <button className="glass-btn-transparent">Hire me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
