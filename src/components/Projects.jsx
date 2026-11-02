import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, PlusCircle, CheckCircle2, Sparkles, Code2, Database } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import BentoCard from './common/BentoCard';
import { projects, projectCategories, personalInfo } from '../data/content';
import { GitHubIcon } from './common/BrandIcons';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge="Featured Work"
          title="Projects & Implementations"
          subtitle="Real-world full-stack web platforms and applied AI utilities built with modern frameworks and robust backends."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan ${
                  isSelected
                    ? 'text-white shadow-glow-violet/40'
                    : 'text-slate-400 hover:text-white glass-card'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <BentoCard className="h-full flex flex-col justify-between group p-6 sm:p-7 hover:border-brand-cyan/40" glow glowColor="cyan">
                  <div>
                    {/* Visual Card Image / Preview Placeholder with gradient */}
                    <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-slate-900 to-[#131A2E] border border-white/10 flex flex-col items-center justify-center p-6 text-center group-hover:border-brand-cyan/30 transition-all duration-300">
                      {/* Gradient glow ambient */}
                      <div className={`absolute inset-0 opacity-20 bg-gradient-to-tr ${project.accentColor}`} />
                      
                      {/* Icon & Label in center */}
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/15 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-glow-cyan/20">
                        {project.category === 'AI' ? (
                          <Sparkles className="w-8 h-8 text-brand-cyan" />
                        ) : (
                          <Code2 className="w-8 h-8 text-brand-violet" />
                        )}
                      </div>

                      <div className="relative z-10 text-xs font-mono font-medium text-slate-300 px-3 py-1 rounded-full bg-black/40 border border-white/10">
                        {project.category} Architecture
                      </div>

                      {/* Top Right Category Pill */}
                      <div className="absolute top-3.5 right-3.5 z-10">
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-dark-bg/80 text-brand-cyan border border-brand-cyan/30 backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="mb-4">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-brand-violet dark:text-purple-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/10 hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub Repository`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:border-brand-cyan/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    {/* Only render Live Demo button if liveDemo URL is non-empty */}
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-brand text-xs sm:text-sm font-semibold text-white shadow-glow-cyan/30 hover:shadow-glow-cyan transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500 italic">
                        Live deployment coming soon
                      </span>
                    )}
                  </div>
                </BentoCard>
              </motion.div>
            ))}

            {/* Project 3: "More projects coming soon" Card with dashed border */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <div className="h-full min-h-[380px] rounded-2xl border-2 border-dashed border-white/20 hover:border-brand-violet/50 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 p-8 flex flex-col items-center justify-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-brand-cyan group-hover:scale-110 transition-all duration-300 mb-5">
                  <PlusCircle className="w-8 h-8" />
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                  More Projects Coming Soon
                </h3>
                
                <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
                  Currently designing and prototyping new full-stack and machine learning applications. Follow ongoing commits on GitHub!
                </p>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See more on Kavya's GitHub"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-xs sm:text-sm font-semibold text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>See more on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
