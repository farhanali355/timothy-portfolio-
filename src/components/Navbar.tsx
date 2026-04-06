'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar-wrap">
      <nav className="pill-navbar">
        <ul className="nav-links-pills">
          <li><Link href="#home" className="nav-link-item nav-link-active">Home</Link></li>
          <li><Link href="#about" className="nav-link-item">About</Link></li>
          <li><Link href="#portfolio" className="nav-link-item">Portfolio</Link></li>
        </ul>
        
        <div className="logo-center">
          <Link href="/">TIMOTHY T.</Link>
        </div>

        <ul className="nav-links-pills">
          <li><Link href="#resume" className="nav-link-item">Resume</Link></li>
          <li><Link href="#project" className="nav-link-item">Project</Link></li>
          <li><Link href="#contact" className="nav-link-item">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
