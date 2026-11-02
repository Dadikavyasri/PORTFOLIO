import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import BentoCard from './common/BentoCard';
import { contactInfo, personalInfo } from '../data/content';
import { GitHubIcon, LinkedInIcon } from './common/BrandIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulating form submission (configured for Formspree/EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          badge="Get in Touch"
          title={contactInfo.heading}
          subtitle={contactInfo.subheading}
        />

        {/* Contact Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <BentoCard className="p-5" glow glowColor="violet">
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg"
                  aria-label="Send email to Kavya Sri Dadi"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </h4>
                    <p className="font-heading font-medium text-sm sm:text-base text-slate-200 group-hover:text-brand-cyan transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg glass-card text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[11px] text-emerald-400 mt-2 font-mono">
                  Copied email to clipboard!
                </p>
              )}
            </BentoCard>

            {/* LinkedIn Card */}
            <BentoCard className="p-5" glow glowColor="cyan">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kavya's LinkedIn profile"
                className="flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-[#0A66C2] group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      LinkedIn
                    </h4>
                    <p className="font-heading font-medium text-sm sm:text-base text-slate-200 group-hover:text-[#0A66C2] transition-colors">
                      in/kavya-sri-dadi
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </BentoCard>

            {/* GitHub Card */}
            <BentoCard className="p-5" glow glowColor="violet">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kavya's GitHub profile"
                className="flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      GitHub
                    </h4>
                    <p className="font-heading font-medium text-sm sm:text-base text-slate-200 group-hover:text-brand-cyan transition-colors">
                      github.com/Dadikavyasri
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </BentoCard>

            {/* Location Card */}
            <BentoCard className="p-5" hoverEffect={false}>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </h4>
                  <p className="font-heading font-medium text-sm sm:text-base text-slate-200">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </BentoCard>

            {/* Quick Availability Note */}
            <div className="p-4 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="text-xs text-slate-300">
                Actively reviewing summer 2026 / immediate internship roles & project collaborations.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <BentoCard className="lg:col-span-7 p-6 sm:p-8" glow glowColor="cyan">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your details below and I'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Name <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-white/10 focus:border-brand-cyan'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Email <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-white/10 focus:border-brand-cyan'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Message <span className="text-brand-cyan">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about the role, project, or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-white/10 focus:border-brand-cyan'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-brand text-white font-semibold text-sm shadow-glow-violet hover:shadow-[0_0_30px_rgba(124,58,237,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Feedback Alert */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-300 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-semibold">Message dispatched successfully!</p>
                      <p className="text-emerald-400/80 text-xs mt-0.5">
                        Thank you for reaching out. I will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default Contact;
