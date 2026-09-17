import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Youtube, Github, Send, CheckCircle2, AlertCircle, MapPin, Sparkles, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Video Editing',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending time and handle form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Construct clean mailto link so the inquiry can be launched directly
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
      );
      // Optional direct mailto trigger:
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const socialLinks = [
    {
      name: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: <Mail className="w-4 h-4 text-amber-400" />,
      label: 'Direct Email',
    },
    {
      name: 'LinkedIn',
      value: 'Add Your LinkedIn Profile',
      href: PERSONAL_INFO.socials.linkedin,
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      label: 'Professional Network',
    },
    {
      name: 'Instagram',
      value: 'Add Your Instagram Profile',
      href: PERSONAL_INFO.socials.instagram,
      icon: <Instagram className="w-4 h-4 text-pink-400" />,
      label: 'Short-Form Reels',
    },
    {
      name: 'TikTok',
      value: 'Add Your TikTok Profile',
      href: PERSONAL_INFO.socials.tiktok,
      icon: <Smartphone className="w-4 h-4 text-cyan-400" />,
      label: 'Viral Content',
    },
    {
      name: 'YouTube',
      value: 'Add Your YouTube Channel',
      href: PERSONAL_INFO.socials.youtube,
      icon: <Youtube className="w-4 h-4 text-red-400" />,
      label: 'Long & Short-Form',
    },
    {
      name: 'GitHub',
      value: 'Add Your GitHub Profile',
      href: PERSONAL_INFO.socials.github,
      icon: <Github className="w-4 h-4 text-neutral-300" />,
      label: 'Code / Assets',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#090b12] relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest mb-3">
            Start a Collaboration
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Have a project in mind?
          </h2>
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-amber-300/90 mt-2">
            Let's create something people want to watch.
          </p>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-xl mx-auto">
            Whether you need weekly TikTok/Reel edits, YouTube channel management, or a complete digital campaign, send a note and let's get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e121b] border border-white/10 shadow-xl space-y-6">
              <h3 className="font-heading text-xl font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0 text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </span>
                    <span className="text-xs text-neutral-400 block">
                      Available for Remote Worldwide Work
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels List with Placeholders */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-3">
                  Online Channels & Profiles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {socialLinks.slice(1).map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-amber-400/30 transition-all text-xs text-neutral-200"
                    >
                      {s.icon}
                      <div className="flex flex-col truncate">
                        <span className="font-semibold text-white truncate">{s.name}</span>
                        <span className="text-[10px] text-neutral-400 truncate">{s.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Note about placeholders */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-neutral-400">
              <span className="font-semibold text-amber-400">Profile Links: </span>
              Replace placeholder social links in <code className="text-white font-mono">src/data/portfolioData.ts</code> under <code className="text-white font-mono">PERSONAL_INFO.socials</code>.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0e121c] border border-white/10 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your project details have been captured and prepared for direct email transmission to <strong className="text-amber-400">{PERSONAL_INFO.email}</strong>. I will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Video Editing',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs text-neutral-400 mb-6">
                      Fill in the details below to request a quote or discuss a project.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#090b10] border text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors ${
                        errors.name ? 'border-red-500/80 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#090b10] border text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors ${
                        errors.email ? 'border-red-500/80 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090b10] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors"
                    >
                      <option value="Video Editing">Video Editing (Reels, Shorts, YouTube)</option>
                      <option value="Content Creation">Content Creation & Visuals</option>
                      <option value="Social Media Management">Social Media Management & Strategy</option>
                      <option value="YouTube Production">YouTube Production & Thumbnails</option>
                      <option value="Complete Package">Complete Cross-Platform Package</option>
                      <option value="Other">Other / General Consultation</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your video goals, target platform, turnaround timeframe, or questions..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#090b10] border text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-colors resize-none ${
                        errors.message ? 'border-red-500/80 bg-red-950/10' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center font-mono">
                    Direct delivery configured to <span className="text-neutral-400">{PERSONAL_INFO.email}</span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
