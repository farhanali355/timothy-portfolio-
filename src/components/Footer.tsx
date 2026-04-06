'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Send } from 'lucide-react';

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="footer-top-row">
        <h2 className="footer-let-connect">Lets Connect there</h2>
        <Link href="#contact" className="footer-hire-me-btn">
          Hire me <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-middle-row">
        <div className="footer-col-brand">
          <h3 className="footer-brand-title">Timothy</h3>
          <p className="footer-brand-desc">
            I specialize in crafting responsive websites, stunning graphics, and seamless CMS solutions that not only look great but also deliver results. With a keen eye for design and a strong command over development tools, I bridge the gap between creativity and technology to bring projects to life efficiently and innovatively.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon-box"><FacebookIcon /></a>
            <a href="#" className="social-icon-box"><InstagramIcon /></a>
            <a href="#" className="social-icon-box"><TwitterIcon /></a>
            <a href="#" className="social-icon-box"><LinkedinIcon /></a>
            <a href="#" className="social-icon-box"><GithubIcon /></a>
          </div>
        </div>

        <div className="footer-col-links">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#resume">Resume</Link>
          <Link href="#project">Project</Link>
        </div>

        <div className="footer-col-subscribe">
          <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" required />
            <button type="submit">
              <Send size={18} color="white" />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom-row">
        <p>Copyright© 2026 . All Rights Reserved.</p>
        <p>User Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
