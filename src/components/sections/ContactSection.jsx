import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Shield,
  Briefcase,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceOption: siteConfig.contact.serviceOptions[0],
    timeline: 'Within 30 Days',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      serviceOption: siteConfig.contact.serviceOptions[0],
      timeline: 'Within 30 Days',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 dark:bg-dark-950 border-t border-slate-200/80 dark:border-white/5 relative transition-colors overflow-hidden w-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[650px] h-[250px] sm:h-[350px] bg-crimson-600/10 dark:bg-crimson-800/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <motion.div variants={fadeIn('down', 0.1)} className="flex justify-center">
            <Badge variant="crimson" showDot={true} className="py-1 px-3.5 text-xs font-mono">
              {siteConfig.contact.badge}
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeIn('up', 0.2)}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            {siteConfig.contact.title}
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-base text-slate-600 dark:text-muted-400 font-normal leading-relaxed"
          >
            {siteConfig.contact.description}
          </motion.p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          {/* Left Column: Direct Inquiries */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-5 space-y-6"
          >
            <div className="bg-slate-900 dark:bg-dark-900 rounded-2xl p-6 sm:p-8 border border-slate-800 dark:border-white/10 space-y-6 shadow-xl text-white relative overflow-hidden">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-crimson-500" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Direct Inquiries & Hire Us
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-crimson-400 shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Contact Email</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-semibold text-white hover:text-crimson-400 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-crimson-400 shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Response SLA</div>
                    <div className="text-sm font-semibold text-white">
                      {siteConfig.contact.responseSla}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-crimson-400 shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Availability</div>
                    <div className="text-sm font-semibold text-white">
                      {siteConfig.contact.availability}
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Box */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Shield className="w-4 h-4 text-crimson-500" />
                  <span>Confidentiality & Mutual NDA</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We respect intellectual property and business privacy. Every discussion is handled
                  with complete confidentiality.
                </p>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="bg-slate-900 dark:bg-dark-900 p-4 rounded-xl border border-slate-800 text-white flex items-center justify-between text-xs font-mono shadow-md">
              <span className="text-slate-300">BLK Solutions Availability:</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active & Accepting
              </span>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-7"
          >
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200/90 dark:border-white/10 shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-crimson-50 dark:bg-crimson-950/60 border border-crimson-500/50 flex items-center justify-center text-crimson-600 mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Project Request Received
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-muted-400 max-w-md mx-auto">
                        Thank you, <span className="text-slate-900 dark:text-white font-semibold">{formData.name}</span>.
                        The team at BLK Software Solutions will review your requirements and get back
                        to you within 24 business hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-950 border border-slate-200 dark:border-white/5 max-w-sm mx-auto text-xs font-mono text-slate-600 dark:text-muted-400 text-left space-y-1">
                      <div>// Reference: BLK-REQ-{Math.floor(10000 + Math.random() * 90000)}</div>
                      <div>// Discipline: {formData.serviceOption}</div>
                      <div>// Contact: {formData.email}</div>
                    </div>

                    <div className="pt-4">
                      <Button variant="secondary" size="md" onClick={handleReset}>
                        Submit Another Request
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-slate-700 dark:text-muted-300 uppercase font-semibold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-dark-950 border border-slate-300 dark:border-dark-750 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-muted-500 focus:outline-none focus:border-crimson-600 transition-colors text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-slate-700 dark:text-muted-300 uppercase font-semibold">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-dark-950 border border-slate-300 dark:border-dark-750 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-muted-500 focus:outline-none focus:border-crimson-600 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 dark:text-muted-300 uppercase font-semibold">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.serviceOption}
                        onChange={(e) => setFormData({ ...formData, serviceOption: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-dark-950 border border-slate-300 dark:border-dark-750 text-slate-900 dark:text-white focus:outline-none focus:border-crimson-600 transition-colors text-sm"
                      >
                        {siteConfig.contact.serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white dark:bg-dark-900 text-slate-900 dark:text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Target Timeline */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 dark:text-muted-300 uppercase font-semibold">
                        Target Timeline
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Immediate', 'Within 30 Days', '1-3 Months', 'Flexible'].map((time) => (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setFormData({ ...formData, timeline: time })}
                            className={`px-3 py-2 rounded-lg text-xs font-medium border text-center transition-all ${
                              formData.timeline === time
                                ? 'bg-crimson-50 dark:bg-crimson-950/60 border-crimson-600 text-crimson-700 dark:text-white shadow-sm font-semibold'
                                : 'bg-slate-50 dark:bg-dark-950 border-slate-200 dark:border-dark-750 text-slate-600 dark:text-muted-400 hover:text-slate-900'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 dark:text-muted-300 uppercase font-semibold">
                        Project Scope & Goals
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the product you want to build, the technical challenges, or the team support required..."
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-dark-950 border border-slate-300 dark:border-dark-750 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-muted-500 focus:outline-none focus:border-crimson-600 transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Transmitting Request...' : 'Send Project Inquiry / Hire Request'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
