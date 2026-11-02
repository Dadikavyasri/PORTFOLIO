import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Wrench,
  BookOpen,
  Sparkles,
  Terminal,
  Database,
  Cpu,
  Layers,
  Server,
  Atom,
  Palette,
  FileCode,
  FileCode2,
  Coffee,
  GitBranch,
  Send,
  BarChart3,
  Bot
} from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import BentoCard from './common/BentoCard';
import { skillCategories } from '../data/content';
import { GitHubIcon } from './common/BrandIcons';

// Icon resolver map
const iconMap = {
  Code: Code2,
  Layout: Layout,
  Wrench: Wrench,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  Coffee: Coffee,
  FileCode2: FileCode2,
  FileCode: FileCode,
  Palette: Palette,
  Atom: Atom,
  Server: Server,
  Layers: Layers,
  Database: Database,
  Terminal: Terminal,
  GitBranch: GitBranch,
  Github: GitHubIcon,
  Send: Send,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Bot: Bot,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge="Technical Toolkit"
          title="Skills & Technologies"
          subtitle="A solid foundation across modern full-stack development, algorithms, developer tools, and cutting-edge exploratory topics."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => {
            const CategoryIcon = iconMap[cat.icon] || Code2;
            const isWide = index === 1; // Web dev has 6 items, so give it span on lg if needed or equal grid
            
            return (
              <BentoCard
                key={cat.category}
                className={`flex flex-col justify-between ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
                glow
                glowColor={index % 2 === 0 ? 'violet' : 'cyan'}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-violet/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center text-brand-cyan">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Chips Grid */}
                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {cat.skills.map((skill) => {
                      const SkillIcon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="group/chip relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/8 hover:border-brand-cyan/40 hover:bg-white/[0.08] transition-all duration-200 transform hover:-translate-y-0.5 cursor-default"
                        >
                          <div className="text-brand-cyan group-hover/chip:text-brand-violet transition-colors">
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-xs sm:text-sm text-slate-200 group-hover/chip:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400 px-1.5 py-0.5 rounded bg-black/30 border border-white/5 hidden group-hover/chip:inline-block">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{cat.skills.length} Technologies</span>
                  <span className="text-brand-cyan/80">Proficiency verified</span>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
