import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Mail, Sparkles } from 'lucide-react';
import { personalInfo, profile } from '../data/content';
import { GitHubIcon, LinkedInIcon } from './common/BrandIcons';

const Hero = () => {
  const [heroImgError, setHeroImgError] = useState(false);
  // Typing animation for cycling titles
  const titles = personalInfo.heroTyping;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[380px] h-[380px] rounded-full bg-brand-violet/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-[340px] h-[340px] rounded-full bg-brand-cyan/15 blur-[130px] animate-float" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-purple-600/10 blur-[140px]" />
        
        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) - Appears 2nd on mobile, 1st on desktop */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-card border border-brand-violet/30 text-slate-700 dark:text-slate-200 mb-6 shadow-glow-violet/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-base sm:text-lg font-medium text-brand-cyan tracking-wide mb-2">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Cycling Title with Typing Caret */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-1 mb-6"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient">
                {displayedText}
              </span>
              <span className="w-1 h-6 sm:h-7 bg-brand-cyan animate-pulse inline-block" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="px-6 py-3 rounded-xl bg-gradient-brand text-white font-semibold text-sm shadow-glow-violet hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <FolderGit2 className="w-4 h-4" />
                View Projects
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Kavya_Sri_Dadi_Resume.pdf"
                className="px-6 py-3 rounded-xl glass-card text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-300 dark:border-white/15 hover:border-brand-cyan/50 hover:text-brand-cyan transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="px-6 py-3 rounded-xl glass-card text-slate-700 dark:text-slate-300 font-medium text-sm hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/15 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-2">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kavya's GitHub profile"
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:text-brand-cyan hover:border-brand-cyan/40 transition-all duration-200 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kavya's LinkedIn profile"
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all duration-200 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send email to Kavya Sri Dadi"
                className="p-2.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:text-brand-violet hover:border-brand-violet/40 transition-all duration-200 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Stylized Floating Avatar (5 cols) - Appears 1st on mobile, 2nd on desktop */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 mb-4 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Soft glow behind it (adjusted for dark and light themes) */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-brand-violet/30 via-purple-500/20 to-brand-cyan/30 dark:from-brand-violet/50 dark:via-purple-500/30 dark:to-brand-cyan/50 blur-2xl opacity-60 dark:opacity-90 pointer-events-none animate-pulse-glow"
              />

              {/* Floating avatar container */}
              <div className="animate-float relative">
                {/* Circular crop, gradient border: violet #7C3AED to cyan #22D3EE */}
                {/* Responsive sizes: ~180px on mobile (360px), ~220px on tablet, ~320px on desktop (never exceeding 320px) */}
                <div
                  className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[220px] md:h-[220px] lg:w-[320px] lg:h-[320px] rounded-full p-[3.5px] bg-gradient-to-tr from-[#7C3AED] via-purple-500 to-[#22D3EE] shadow-glow-violet/40 dark:shadow-glow-violet/50 transition-shadow duration-300 hover:shadow-glow-cyan/50"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark-card border-[3px] border-white dark:border-[#0B1020] relative flex items-center justify-center">
                    {!heroImgError ? (
                      <picture>
                        <source srcSet={profile.imageWebp} type="image/webp" />
                        <img
                          src={profile.image}
                          alt={profile.alt}
                          width={profile.width}
                          height={profile.height}
                          loading="eager"
                          fetchPriority="high"
                          decoding="async"
                          onError={() => setHeroImgError(true)}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          style={{ objectPosition: '65% 30%' }}
                        />
                      </picture>
                    ) : (
                      /* Graceful fallback: gradient circle with initials "KS" */
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-violet via-purple-600 to-brand-cyan flex items-center justify-center text-white font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl select-none">
                        <span>{profile.initials}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating tech badge 1: React & Node */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 -right-3 sm:top-1 sm:-right-2 lg:top-4 lg:right-0 glass-card px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-brand-cyan/30 shadow-glow-cyan/20 dark:shadow-glow-cyan/30 flex items-center gap-1.5 sm:gap-2 pointer-events-none select-none"
                >
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-cyan animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200">React + Node.js</span>
                </motion.div>

                {/* Floating tech badge 2: AI & Python */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-2 -left-3 sm:bottom-1 sm:-left-2 lg:bottom-4 lg:left-0 glass-card px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-brand-violet/30 shadow-glow-violet/20 dark:shadow-glow-violet/30 flex items-center gap-1.5 sm:gap-2 pointer-events-none select-none"
                >
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet" />
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-800 dark:text-slate-200">AI & Python AST</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-brand-cyan transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1"
            aria-label="Scroll down to About section"
          >
            <span>Scroll Down</span>
            <div className="w-6 h-9 rounded-full border-2 border-slate-500 group-hover:border-brand-cyan flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-brand-cyan"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
