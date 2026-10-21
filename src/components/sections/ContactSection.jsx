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
  Sparkles,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { fadeIn, staggerContainer, viewportOnce } from '../../utils/motion';

export const ContactSection = ({ revealStage = 5 }) => {
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
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-[#E7EEF6] via-[#EFF4F9] to-[#E2EAF4] border-t border-slate-300/80 relative transition-colors overflow-hidden w-full"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[350px] bg-crimson-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <Container className="relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={revealStage >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-mono text-slate-800">
              <span className="w-2 h-2 rounded-full bg-crimson-600 shadow-[0_0_8px_rgba(220,38,38,0.7)]" />
              <span className="font-semibold uppercase tracking-wider text-[11px]">
                {siteConfig.contact.badge}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            {siteConfig.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {siteConfig.contact.description}
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          {/* Left Column: Direct Inquiries Console (Revealed at Stage 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={revealStage >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0B0F19] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 shadow-2xl text-white relative overflow-hidden">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-crimson-500" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Direct Inquiries & Hire Us
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-crimson-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-crimson-600/20 border border-crimson-500/30 flex items-center justify-center text-crimson-400 shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Contact Email</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-semibold text-white hover:text-crimson-400 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Response SLA</div>
                    <div className="text-sm font-semibold text-white">
                      {siteConfig.contact.responseSla}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Availability</div>
                    <div className="text-sm font-semibold text-white">
                      {siteConfig.contact.availability}
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Box */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Shield className="w-4 h-4 text-crimson-400" />
                  <span>Confidentiality & Mutual NDA</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  We respect intellectual property and business privacy. Every discussion is handled
                  with strict confidentiality.
                </p>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="bg-[#0B0F19] p-4 rounded-xl border border-white/10 text-white flex items-center justify-between text-xs font-mono shadow-md">
              <span className="text-slate-300">BLK Solutions Availability:</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active & Accepting
              </span>
            </div>
          </motion.div>

          {/* Right Column: Form (Revealed at Stage 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={revealStage >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:col-span-7"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-300/80 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500/50 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Project Request Received
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>.
                        The team at BLK Software Solutions will review your requirements and get back
                        to you within 24 business hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs font-mono text-slate-600 text-left space-y-1">
                      <div>// Reference: BLK-REQ-{Math.floor(10000 + Math.random() * 90000)}</div>
                      <div>// Discipline: {formData.serviceOption}</div>
                      <div>// Contact: {formData.email}</div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-semibold transition-all shadow-md"
                      >
                        Submit Another Request
                      </button>
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
                        <label className="text-xs font-mono text-slate-800 uppercase font-bold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-crimson-600 focus:bg-white transition-colors text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-slate-800 uppercase font-bold">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-crimson-600 focus:bg-white transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-800 uppercase font-bold">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.serviceOption}
                        onChange={(e) => setFormData({ ...formData, serviceOption: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-crimson-600 focus:bg-white transition-colors text-sm"
                      >
                        {siteConfig.contact.serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Target Timeline */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-800 uppercase font-bold">
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
                                ? 'bg-crimson-600 border-crimson-600 text-white shadow-md font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-800 uppercase font-bold">
                        Project Scope & Goals
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the product you want to build, the technical challenges, or the team support required..."
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-crimson-600 focus:bg-white transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-mono font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting ? 'Transmitting Request...' : 'Send Project Inquiry / Hire Request'}
                      </span>
                    </button>
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
