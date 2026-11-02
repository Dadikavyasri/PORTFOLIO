import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  glowColor = 'violet',
  onClick,
  ...props
}) => {
  const glowClasses = {
    violet: 'hover:shadow-glow-violet hover:border-brand-violet/40',
    cyan: 'hover:shadow-glow-cyan hover:border-brand-cyan/40',
    purple: 'hover:shadow-[0_0_25px_-5px_rgba(147,51,234,0.35)] hover:border-brand-purple/40',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
        hoverEffect ? 'glass-card-hover' : ''
      } ${glow ? glowClasses[glowColor] || glowClasses.violet : ''} ${className}`}
      {...props}
    >
      {/* Subtle top reflection line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default BentoCard;
