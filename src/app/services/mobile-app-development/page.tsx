'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Zap, Code, Shield, Globe, Cpu, ArrowUpRight, ArrowRight, Check, Activity, Database, Lock, Bell, MessageSquare, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MobileAppElitePolish = () => {
    const mainRef = useRef(null);
    const cardRefs = useRef<any[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // General Reveal
            gsap.utils.toArray('.reveal-up').forEach((el: any) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 92%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Hero Main Image Parallax
            gsap.to(".hero-image-main", {
                y: -60,
                scrollTrigger: {
                    trigger: ".hero-elite-v4",
                    start: "top top",
                    scrub: 1
                }
            });

            // Floating Micro Bubbles
            gsap.to(".float-bubble", { y: -20, stagger: 0.3, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });

            // Stats Counter Animation
            gsap.utils.toArray('.stat-num').forEach((el: any) => {
                const target = parseInt(el.getAttribute('data-target'));
                gsap.fromTo(el, { innerText: 0 }, {
                    innerText: target,
                    duration: 2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                    snap: { innerText: 1 },
                    onUpdate: function() {
                        el.innerText = Math.floor(this.targets()[0].innerText) + (el.id === 'stat-percent' ? '%' : '+');
                    }
                });
            });

            // Tilt Effect for Folder Cards
            cardRefs.current.forEach((card) => {
                if (!card) return;
                card.addEventListener('mousemove', (e: MouseEvent) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;

                    gsap.to(card, {
                        rotateX: rotateX,
                        rotateY: rotateY,
                        scale: 1.02,
                        duration: 0.5,
                        ease: "power2.out",
                        perspective: 1000
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        rotateX: 0,
                        rotateY: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    const services = [
        { title: 'iOS Engineering', icon: <Smartphone />, bgColor: '#C5FF41', img: '/tim-portfolio-images/image1.jpg' },
        { title: 'Android Solutions', icon: <Zap />, bgColor: '#E2E6EF', img: '/tim-portfolio-images/image2.png' },
        { title: 'Cloud & API', icon: <Database />, bgColor: '#1A1A1A', img: '/tim-portfolio-images/image3.jpg', textColor: '#fff' },
        { title: 'Hybrid Apps', icon: <Globe />, bgColor: '#C5FF41', img: '/tim-portfolio-images/image1.jpg' }
    ];

    return (
        <main className="elite-polish-main" ref={mainRef}>
            <Navbar />

            {/* --- SECTION 01: HERO (SPLIT LAYOUT) --- */}
            <section className="hero-elite-v4">
                <div className="hero-bg-accent" />
                <div className="container-elite">
                    <div className="hero-split-grid">
                        <div className="hero-text-side">
                            <div className="hello-pill reveal-up">Mobile 4.0</div>
                            <h1 className="h1-elite reveal-up">
                                Engineering <br />
                                <span className="purple-lite">Mobile Future</span>
                            </h1>
                            <p className="p-elite-sub reveal-up">
                                Crafting high-performance digital products with scalable native architectures 
                                and immersive user experiences.
                            </p>
                            <div className="hero-actions reveal-up">
                                <Link href="#contact" className="elite-btn-primary">Start Project</Link>
                                <Link href="/portfolio" className="elite-btn-secondary">View Work</Link>
                            </div>
                        </div>

                        <div className="hero-visual-side">
                            <div className="hero-scene">
                                {/* Floating Micro-UI Elements */}
                                <div className="float-bubble fb-1"><Bell size={20} /></div>
                                <div className="float-bubble fb-2"><MessageSquare size={20} /></div>
                                <div className="float-bubble fb-3"><Heart size={20} /></div>
                                
                                <div className="hero-image-main reveal-up">
                                    <Image 
                                        src="/mobile-app-page/mobile-application-development.png" 
                                        width={600} 
                                        height={600} 
                                        alt="Mobile App Development" 
                                        className="hero-img-fluid"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 02: PHILOSOPHY DIVIDER --- */}
            <section className="divider-sec">
                <div className="container-elite text-center">
                    <div className="elite-line reveal-up" />
                    <h2 className="philo-h2 reveal-up">
                        "The best way to predict the future <br />
                        <span className="philo-bold">is to create it."</span>
                    </h2>
                    <div className="elite-line reveal-up" />
                </div>
            </section>

            {/* --- SECTION 03: BALANCED FOLDER GRID (WITH TILT) --- */}
            <section className="platform-tilt-sec">
                <div className="container-elite">
                    <div className="sec-tag reveal-up">Core Platforms</div>
                    <h2 className="sec-h2 reveal-up">Native Mastery</h2>
                    
                    <div className="asymm-tilt-grid">
                        {services.map((item, i) => (
                            <div 
                                key={i} 
                                ref={(el: any) => cardRefs.current[i] = el}
                                className="portfolio-card-custom reveal-up"
                            >
                                <div className="card-top-glass">
                                    <h3 className="project-category-title" style={{color: item.textColor || '#000033'}}>{item.title}</h3>
                                </div>
                                <div className="folder-wrapper">
                                    <div className="folder-layers-group" style={{ height: '320px' }}>
                                        <div className="folder-sheets-bg"></div>
                                        <div className="folder-image-box" style={{ backgroundColor: item.bgColor }}>
                                            <div className="image-inner-wrap">
                                                <Image src={item.img} alt={item.title} fill className="project-image-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrow-circle-btn">
                                        <ArrowUpRight size={24} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 04: PERFORMANCE STATS (COUNTERS) --- */}
            <section className="stats-sec">
                <div className="container-elite">
                    <div className="stats-grid">
                        {[
                            { label: 'Uptime', target: 99, id: 'stat-percent' },
                            { label: 'Active Users', target: 500, id: 'stat-users' },
                            { label: 'Projects', target: 120, id: 'stat-pro' }
                        ].map((s, i) => (
                            <div key={i} className="stat-item reveal-up">
                                <h3 className="stat-num" data-target={s.target} id={s.id}>0</h3>
                                <p className="stat-label">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 05: THE TECH MARQUEE (REFINED) --- */}
            <section className="pro-marquee-sec">
                <div className="container-elite mb-60 reveal-up">
                    <p className="marquee-head">Modern Tech-Stack</p>
                </div>
                <div className="marquee-elite-wrap">
                    <div className="marquee-elite-track">
                        {[
                            { name: "SWIFT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
                            { name: "KOTLIN", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
                            { name: "REACT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                            { name: "FLUTTER", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
                            { name: "FIREBASE", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                            { name: "NODE.JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                            { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                            { name: "DOCKER", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                            { name: "GRAPHQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
                        ].map((t, i) => (
                            <div key={i} className="elite-tech-pill">
                                <Image src={t.img} alt={t.name} width={25} height={25} style={{ marginRight: '12px' }} />
                                <span>{t.name}</span>
                            </div>
                        ))}
                        {/* Duplicate for Infinite */}
                        {[
                            { name: "SWIFT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
                            { name: "KOTLIN", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
                            { name: "REACT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                            { name: "FLUTTER", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
                            { name: "FIREBASE", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                            { name: "NODE.JS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                            { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                            { name: "DOCKER", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                            { name: "GRAPHQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
                        ].map((t, i) => (
                            <div key={i+100} className="elite-tech-pill">
                                <Image src={t.img} alt={t.name} width={25} height={25} style={{ marginRight: '12px' }} />
                                <span>{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 06: PROCESS FLOW (TIMOTHY STYLE) --- */}
            <section className="pro-flow-sec">
                <div className="container-elite">
                    <div className="pro-flow-header reveal-up text-center">
                        <h2>Lifecycle of Innovation</h2>
                        <p>Bridging the gap from ideation to deployment.</p>
                    </div>
                    <div className="flow-path reveal-up">
                        {[
                            { n: '01', t: 'Audit', d: 'In-depth market/tech analysis.' },
                            { n: '02', t: 'Design', d: 'High-fidelity UI/UX systems.' },
                            { n: '03', t: 'Code', d: 'Native, scalable implementation.' },
                            { n: '04', t: 'Deploy', d: 'Seamless global market launch.' }
                        ].map((m, i) => (
                            <div key={i} className="flow-item">
                                <div className="flow-num">{m.n}</div>
                                <h4>{m.t}</h4>
                                <p>{m.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                .elite-polish-main { background: #fff; color: #000033; font-family: 'Urbanist', sans-serif; }
                .container-elite { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
                .text-center { text-align: center; }
                .purple-lite { color: #9d5ae5; }

                /* HERO V4 SPLIT */
                .hero-elite-v4 { padding: 180px 0 100px; background: white; overflow: hidden; position: relative; }
                .hero-bg-accent { position: absolute; top: 10%; right: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(173,83,255,0.05) 0%, rgba(255,255,255,0) 70%); z-index: 1; pointer-events: none; }
                .hero-split-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; position: relative; z-index: 5; }
                
                .hello-pill { border: 1.5px solid #00003315; padding: 4px 20px; border-radius: 40px; color: #000033; font-weight: 700; width: fit-content; margin-bottom: 20px; font-size: 0.85rem; }
                .h1-elite { font-size: 4.8rem; font-weight: 900; line-height: 0.95; margin-bottom: 20px; }
                .p-elite-sub { font-size: 1.25rem; color: #64748b; max-width: 540px; margin-bottom: 40px; line-height: 1.5; }
                
                .hero-actions { display: flex; gap: 20px; align-items: center; }
                .elite-btn-primary { background: #000033; color: #fff; padding: 18px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; text-decoration: none; transition: transform 0.3s; }
                .elite-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(0,0,32,0.15); }
                .elite-btn-secondary { color: #000033; font-weight: 800; text-decoration: none; border-bottom: 2px solid #00003310; padding-bottom: 4px; transition: border-color 0.3s; }
                .elite-btn-secondary:hover { border-color: #000033; }

                .hero-visual-side { position: relative; }
                .hero-scene { position: relative; width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; }
                .hero-image-main { position: relative; z-index: 10; width: 100%; display: flex; justify-content: center; }
                .hero-img-fluid { max-width: 100%; height: auto; object-fit: contain; }

                .float-bubble { position: absolute; background: #fff; padding: 14px; border-radius: 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); color: #ad53ff; z-index: 30; }
                .fb-1 { top: 10%; left: 0%; }
                .fb-2 { top: 40%; right: -5%; }
                .fb-3 { bottom: 15%; left: 10%; }

                /* DIVIDER */
                .divider-sec { padding: 80px 0; }
                .elite-line { width: 1px; height: 60px; background: #00003310; margin: 0 auto; }
                .philo-h2 { font-size: 3rem; font-weight: 200; color: #cbd5e1; margin: 40px 0; line-height: 1.2; }
                .philo-bold { font-weight: 800; color: #000033; }

                /* TILT GRID */
                .platform-tilt-sec { padding: 100px 0; background: #fff; }
                .sec-tag { color: #ad53ff; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
                .sec-h2 { font-size: 3.5rem; font-weight: 800; margin-bottom: 80px; }
                .asymm-tilt-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; perspective: 1000px; }
                
                .portfolio-card-custom { 
                    position: relative; 
                    border-radius: 40px; 
                    overflow: hidden; 
                    background: rgba(255, 255, 255, 0.45); 
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(0, 0, 51, 0.1); 
                    box-shadow: 0 20px 50px rgba(0,0,0,0.03); 
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
                    transform-style: preserve-3d; 
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                }
                .portfolio-card-custom:hover { 
                    background: rgba(255, 255, 255, 0.7);
                    box-shadow: 0 40px 80px rgba(0,0,0,0.08); 
                    border-color: rgba(173, 83, 255, 0.4);
                }
                .card-top-glass { 
                    padding: 45px 40px 35px; 
                    background: rgba(255, 255, 255, 0.2); 
                    border-bottom: 1px solid rgba(0, 0, 51, 0.1);
                    position: relative;
                }
                .project-category-title { font-size: 2.1rem; font-weight: 800; color: #000033; letter-spacing: -0.8px; }
                
                .folder-wrapper { 
                    position: relative; 
                    padding: 0px; 
                    flex-grow: 1;
                    height: 380px;
                    display: flex;
                    overflow: hidden;
                    background: #fbfbfb;
                }
                .folder-image-box { 
                    width: 100%;
                    height: 100%;
                    border-radius: 0; 
                    overflow: hidden; 
                    display: flex; 
                    position: relative;
                }
                .image-inner-wrap { 
                    position: relative; 
                    width: 100%; 
                    height: 100%; 
                }
                .project-image-full { 
                    object-fit: cover !important; 
                    width: 100% !important;
                    height: 100% !important;
                    transform: scale(1.15); 
                    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1); 
                }
                .portfolio-card-custom:hover .project-image-full { transform: scale(1.25) translateY(-5px); }
                
                .arrow-circle-btn { 
                    position: absolute; 
                    bottom: 30px; 
                    right: 30px; 
                    background: #000033; 
                    width: 60px; 
                    height: 60px; 
                    border-radius: 50%; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    box-shadow: 0 10px 25px rgba(0,0,32,0.2); 
                    color: #fff; 
                    z-index: 10; 
                    transition: all 0.3s ease; 
                }
                .arrow-circle-btn:hover { transform: scale(1.15) rotate(15deg); background: #ad53ff; box-shadow: 0 15px 35px rgba(173,83,255,0.4); }

                /* STATS COUNTERS */
                .stats-sec { padding: 100px 0; background: #fcfcfc; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; }
                .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); text-align: center; }
                .stat-num { font-size: 5rem; font-weight: 900; color: #000033; margin-bottom: 10px; }
                .stat-label { font-size: 1.2rem; color: #9d5ae5; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }

                /* MARQUEE ELITE */
                .pro-marquee-sec { padding: 80px 0; overflow: hidden; }
                .marquee-head { font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 40px; text-align: center; }
                .marquee-elite-wrap { background: #f8fafc; padding: 30px 0; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; overflow: hidden; }
                .marquee-elite-track { 
                    display: flex; 
                    gap: 60px; 
                    width: max-content; 
                    animation: marquee-scroll 25s linear infinite;
                }
                
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .elite-tech-pill { display: flex; align-items: center; gap: 12px; background: #fff; padding: 15px 40px; border-radius: 100px; border: 1px solid #00003305; font-weight: 800; font-size: 1.1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.03); }

                /* PROCESS FLOW */
                .pro-flow-sec { padding: 120px 0; }
                .pro-flow-header { margin-bottom: 80px; }
                .pro-flow-header h2 { font-size: 3.5rem; font-weight: 800; }
                .flow-path { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
                .flow-num { font-size: 3rem; font-weight: 900; color: #ad53ff; opacity: 0.1; }
                .flow-item h4 { font-size: 1.6rem; font-weight: 800; margin: 10px 0; }
                .flow-item p { color: #64748b; font-size: 1.1rem; }

                @media (max-width: 1000px) {
                    .h1-elite { font-size: 3.5rem; }
                    .asymm-tilt-grid, .stats-grid, .flow-path { grid-template-columns: 1fr; gap: 60px; }
                    .stat-num { font-size: 3.5rem; }
                    .hero-stack-center { transform: scale(0.65); }
                    .float-bubble { display: none; }
                }
            `}</style>
        </main>
    );
};

export default MobileAppElitePolish;
