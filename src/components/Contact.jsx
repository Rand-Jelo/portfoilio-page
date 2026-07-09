import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Contact - Contact form with client-side validation and success state
 */
export default function Contact() {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'rand.jelo@example.com',
      href: 'mailto:rand.jelo@example.com',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Stockholm, Sweden',
      href: null,
    },
    {
      icon: '💼',
      label: 'Availability',
      value: 'Open to opportunities',
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

      {/* Background orbs */}
      <div
        className="orb w-96 h-96 bg-neon-purple animate-float-slow"
        style={{ top: '10%', right: '-5%' }}
      />
      <div
        className="orb w-72 h-72 bg-neon-cyan animate-float"
        style={{ bottom: '20%', left: '-3%' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="text-neon-cyan font-mono text-sm mb-2 tracking-widest uppercase">
            04. Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
            I'll get back to you as soon as I can!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info - left side */}
          <div ref={formRef} className="reveal-left md:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass rounded-2xl p-6 flex items-center gap-4 hover:glow-purple-hover transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-slate-300 hover:text-neon-cyan transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {[
                  { name: 'GitHub', href: '#', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                  { name: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:scale-110 hover:glow-cyan transition-all duration-300"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form - right side */}
          <div className="reveal-right md:col-span-3" ref={useScrollAnimation({ threshold: 0.1 })}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 space-y-6 glow-purple-hover transition-all duration-500"
              noValidate
            >
              {/* Success message */}
              {isSubmitted && (
                <div className="rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 p-4 flex items-center gap-3 animate-scale-in">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="text-neon-cyan font-semibold">Message sent!</p>
                    <p className="text-sm text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-surface/50 border transition-all duration-300 outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-slate-700 focus:border-neon-purple focus:ring-neon-purple/30'
                  } text-slate-200 placeholder-slate-500`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-surface/50 border transition-all duration-300 outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-slate-700 focus:border-neon-purple focus:ring-neon-purple/30'
                  } text-slate-200 placeholder-slate-500`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠</span> {errors.email}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  className={`w-full px-4 py-3 rounded-xl bg-dark-surface/50 border transition-all duration-300 outline-none focus:ring-2 resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-slate-700 focus:border-neon-purple focus:ring-neon-purple/30'
                  } text-slate-200 placeholder-slate-500`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠</span> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}