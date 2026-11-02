import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { personalInfo, navLinks } from '../data/content';
import { GitHubIcon, LinkedInIcon } from './common/BrandIcons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/10 dark:border-white/5 py-12 overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Monogram & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-cyan p-[2px]">
              <div className="w-full h-full bg-dark-bg rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-sm text-gradient">
                  {personalInfo.monogram}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">
                &copy; {new Date().getFullYear()} {personalInfo.name}
              </p>
              <p className="text-xs text-slate-400">
                Built with React, Vite, Tailwind CSS & Framer Motion
              </p>
            </div>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kavya's GitHub profile"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-brand-cyan/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kavya's LinkedIn profile"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email to Kavya Sri Dadi"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-brand-violet hover:border-brand-violet/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white hover:border-brand-cyan/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan group"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-cyan group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
