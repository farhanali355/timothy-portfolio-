import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import SelectedProjects from '@/components/SelectedProjects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import ContactMe from '@/components/ContactMe';
import MarqueeBanner from '@/components/MarqueeBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="main-content">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <SelectedProjects />
      <Testimonials />
      <Contact />
      <ContactMe />
      <MarqueeBanner />
      <Footer />
    </main>
  );
}
