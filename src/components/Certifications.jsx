import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import BentoCard from './common/BentoCard';
import { certifications, certificationCategories } from '../data/content';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCerts = selectedCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === selectedCategory);

  const getIssuerBadgeStyle = (category) => {
    switch (category) {
      case 'Infosys':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Google':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge="Credentials & Honors"
          title="Certifications & Training"
          subtitle="Industry-recognized certifications and intensive training completions validating technical fundamentals and hands-on skills."
        />

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {certificationCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan ${
                  isSelected
                    ? 'text-white shadow-glow-violet/40'
                    : 'text-slate-400 hover:text-white glass-card'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCertTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <BentoCard className="h-full flex flex-col justify-between p-6" glow glowColor="violet">
                  <div>
                    {/* Top Row: Icon & Issuer Tag */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center text-brand-cyan shrink-0">
                        {cert.category === 'Others' && cert.title.includes('NCC') ? (
                          <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        ) : cert.category === 'Google' ? (
                          <Sparkles className="w-5 h-5 text-amber-400" />
                        ) : (
                          <Award className="w-5 h-5 text-brand-cyan" />
                        )}
                      </div>

                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getIssuerBadgeStyle(cert.category)}`}>
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {/* Bottom Footer: Badge & Year */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-brand-cyan font-mono text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {cert.badge}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      {cert.date}
                    </span>
                  </div>
                </BentoCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
