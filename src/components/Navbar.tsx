'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The IDs of your sections on the page
      const sections = ['home', 'about', 'portfolio', 'resume', 'project', 'contact'];
      let currentSection = 'home';
      
      const scrollPosition = window.scrollY + 120; // Slight offset for navbar height

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });
      
      setActiveLink(`#${currentSection}`);
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial link based on default or starting scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <div className="navbar-wrap">
      {/* Desktop Navbar */}
      <nav className="pill-navbar desktop-nav">
        <ul className="nav-links-pills">
          <li><Link href="/#home" className={`nav-link-item ${activeLink === '#home' ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick('#home')}>Home</Link></li>
          <li><Link href="/#about" className={`nav-link-item ${activeLink === '#about' ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick('#about')}>About</Link></li>
          <li><Link href="/#portfolio" className={`nav-link-item ${activeLink === '#portfolio' ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick('#portfolio')}>Portfolio</Link></li>
        </ul>
        
        <div className="logo-center">
          <Link href="/">TIMOTHY T.</Link>
        </div>

        <ul className="nav-links-pills">
          <li><Link href="/#resume" className={`nav-link-item ${activeLink === '#resume' ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick('#resume')}>Resume</Link></li>
          <li><Link href="/#project" className={`nav-link-item ${activeLink === '#project' ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick('#project')}>Project</Link></li>
          <li><Link href="/#contact" className={`nav-link-item ${activeLink === '#contact' ? 'nav-link-active' : ''}`} onClick={() => handleLinkClick('#contact')}>Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="pill-navbar mobile-nav">
        <div className="mobile-nav-left">
          <Image 
            src="/tim-hero-images/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2.png" 
            alt="Profile" 
            width={45} 
            height={45} 
            className="mobile-avatar"
          />
        </div>
        
        <div className="logo-center">
          <Link href="/">TIMOTHY T.</Link>
        </div>

        <div className="mobile-nav-right">
          <button className="menu-toggle-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links-list">
          <li><Link href="/#home" className={`mobile-nav-link ${activeLink === '#home' ? 'active' : ''}`} onClick={() => handleLinkClick('#home')}>Home</Link></li>
          <li><Link href="/#about" className={`mobile-nav-link ${activeLink === '#about' ? 'active' : ''}`} onClick={() => handleLinkClick('#about')}>About</Link></li>
          <li><Link href="/#portfolio" className={`mobile-nav-link ${activeLink === '#portfolio' ? 'active' : ''}`} onClick={() => handleLinkClick('#portfolio')}>Portfolio</Link></li>
          <li><Link href="/#resume" className={`mobile-nav-link ${activeLink === '#resume' ? 'active' : ''}`} onClick={() => handleLinkClick('#resume')}>Resume</Link></li>
          <li><Link href="/#project" className={`mobile-nav-link ${activeLink === '#project' ? 'active' : ''}`} onClick={() => handleLinkClick('#project')}>Project</Link></li>
          <li><Link href="/#contact" className={`mobile-nav-link ${activeLink === '#contact' ? 'active' : ''}`} onClick={() => handleLinkClick('#contact')}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
