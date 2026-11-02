import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text selection:bg-brand-violet selection:text-white relative transition-colors duration-300">
        {/* Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Cursor Glow Spotlight (Desktop only) */}
        <CursorGlow />

        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" tabIndex="-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
