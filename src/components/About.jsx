import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, CheckCircle2, GraduationCap, MapPin, ShieldCheck, Sparkles, User } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import BentoCard from './common/BentoCard';
import AnimatedCounter from './common/AnimatedCounter';
import { personalInfo, stats, education, beyondCode, profile } from '../data/content';

const About = () => {
  const [aboutImgError, setAboutImgError] = useState(false);
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge="Profile & Journey"
          title="About Me"
          subtitle="Combining solid computer science fundamentals with modern full-stack development to build meaningful software."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Bio & Vision with Profile Photo (7 cols) */}
          <BentoCard className="lg:col-span-7 flex flex-col justify-between" glow glowColor="violet">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6">
                {/* Profile Photo as rounded-2xl rectangle (aspect ratio 1:1), with gradient border and hover zoom */}
                <div className="relative group shrink-0">
                  {/* Soft glow behind the photo */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#7C3AED]/30 to-[#22D3EE]/30 dark:from-[#7C3AED]/45 dark:to-[#22D3EE]/45 blur-xl opacity-60 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />

                  <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 aspect-square rounded-2xl p-[3px] bg-gradient-to-tr from-[#7C3AED] via-purple-500 to-[#22D3EE] shadow-glow-violet/30 transition-all duration-300 group-hover:shadow-glow-cyan/40">
                    <div className="w-full h-full rounded-[13px] overflow-hidden bg-dark-card border-2 border-white dark:border-[#0B1020] relative flex items-center justify-center">
                      {!aboutImgError ? (
                        <picture>
                          <source srcSet={profile.imageWebp} type="image/webp" />
                          <img
                            src={profile.image}
                            alt={profile.alt}
                            width={profile.width}
                            height={profile.height}
                            loading="lazy"
                            decoding="async"
                            onError={() => setAboutImgError(true)}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                            style={{ objectPosition: '65% 30%' }}
                          />
                        </picture>
                      ) : (
                        <div className="w-full h-full rounded-[13px] bg-gradient-to-tr from-[#7C3AED] via-purple-600 to-[#22D3EE] flex items-center justify-center text-white font-heading font-extrabold text-2xl sm:text-3xl select-none">
                          <span>{profile.initials}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Info Header & Bio Text */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-cyan font-medium">
                        {personalInfo.title}
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium glass-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-3">
                    {personalInfo.bio}
                  </p>

                  <div className="mt-3 sm:hidden flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Full Stack Application Engineering</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>AI Code Analysis & AST Parsing</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Clean Architecture & RESTful APIs</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Disciplined Leadership & Team Drills</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Bento Card 2: 4 Animated Stats Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <BentoCard
                key={stat.label}
                className="flex flex-col justify-between p-5 text-center sm:text-left"
                glow
                glowColor={idx % 2 === 0 ? 'cyan' : 'violet'}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Stat #{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand-cyan/60" />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white text-gradient-cyan mb-1">
                    <AnimatedCounter
                      target={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {stat.description}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>

          {/* Bento Card 3: Education Timeline (7 cols) */}
          <BentoCard className="lg:col-span-7" glow glowColor="violet">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center text-brand-violet">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Academic Timeline
                </h3>
                <p className="text-xs text-slate-400">
                  Consistently high academic track record & engineering foundations
                </p>
              </div>
            </div>

            <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-brand-violet before:via-brand-cyan before:to-slate-700">
              {education.map((item, index) => (
                <div key={item.degree} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-brand-cyan group-hover:scale-125 group-hover:border-white transition-all duration-200" />
                  
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-heading font-semibold text-base text-slate-100">
                        {item.degree}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-violet/20 text-brand-cyan border border-brand-violet/30">
                          {item.score}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-300">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Bento Card 4: Beyond Code & Leadership (5 cols) */}
          <BentoCard className="lg:col-span-5 flex flex-col justify-between" glow glowColor="cyan">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {beyondCode.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Discipline, specialized workshops, and initiative
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {beyondCode.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-heading font-semibold text-sm text-slate-100">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Regimented Leadership
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-violet" />
                Continuous Growth
              </span>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default About;
