import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import BentoCard from './common/BentoCard';
import { experience } from '../data/content';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge="Work & Internships"
          title="Industry Experience"
          subtitle="Real-world engineering practice through hands-on virtual corporate internships and applied AI tools."
        />

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-brand-violet via-brand-cyan before:to-transparent">
            {experience.map((exp, index) => (
              <div key={exp.role} className="relative mb-12 last:mb-0">
                {/* Glowing Pulse Node */}
                <div className="absolute -left-[30px] sm:-left-[38px] top-4 w-5 h-5 rounded-full bg-dark-bg border-2 border-brand-cyan shadow-glow-cyan flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                </div>

                <BentoCard className="p-6 sm:p-8" glow glowColor="violet">
                  {/* Top Bar: Title, Org, Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 border-b border-white/10 pb-5">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-violet/20 text-brand-cyan border border-brand-violet/30 mb-2">
                        <Sparkles className="w-3 h-3 text-brand-cyan" />
                        {exp.type}
                      </div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-brand-cyan mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-brand-violet" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-300 dark:text-dark-muted mb-6 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Key Achievements / Bullets */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Responsibilities & Outcomes
                    </h4>
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 mr-2">
                      Technologies:
                    </span>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-brand-violet/10 text-slate-200 border border-brand-violet/25 hover:border-brand-cyan/40 transition-colors"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </BentoCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
