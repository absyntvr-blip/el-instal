'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-spacing relative w-full">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header (Linear-style) */}
          <div className="section-header mb-32">
            <div className="sub-header">SKONTAKTUJ SIĘ</div>
            <h2 className="text-white">Kontakt</h2>
            <p className="section-subtitle">
              Skontaktuj się z nami, aby uzyskać bezpłatną wycenę projektu
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="space-y-5"
            >
              {/* Phone */}
              <motion.div
                whileHover={{ y: -2 }}
                className="glass-card flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 text-base">Telefon</h3>
                  <a
                    href="tel:+48123456789"
                    className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm block"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ y: -2 }}
                className="glass-card flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 text-base">Email</h3>
                  <a
                    href="mailto:kontakt@el-instal.pl"
                    className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm block break-all"
                  >
                    kontakt@el-instal.pl
                  </a>
                </div>
              </motion.div>

              {/* Person card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass-card"
              >
                <h3 className="text-white font-semibold mb-2 text-lg">Jakub [Nazwisko]</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Specjalista ds. instalacji elektrycznych i teletechnicznych
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="glass-card space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Imię i nazwisko <span className="text-[#00D9FF]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00D9FF]/50 focus:bg-white/[0.04] transition-all duration-300 text-sm"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email <span className="text-[#00D9FF]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00D9FF]/50 focus:bg-white/[0.04] transition-all duration-300 text-sm"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Telefon <span className="text-[#00D9FF]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00D9FF]/50 focus:bg-white/[0.04] transition-all duration-300 text-sm"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Zakres prac <span className="text-[#00D9FF]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00D9FF]/50 focus:bg-white/[0.04] transition-all duration-300 resize-none text-sm"
                  placeholder="Opisz zakres prac..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="cta-button w-full py-5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin"></div>
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Wyślij wiadomość
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="p-5 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Wiadomość została wysłana! Skontaktujemy się wkrótce.</span>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="p-5 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="font-medium">Wystąpił błąd. Spróbuj ponownie.</span>
                  </div>
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
