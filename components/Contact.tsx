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
    <section id="contact" className="section-spacing relative w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center max-w-[800px] mx-auto mb-32">
            <div className="sub-header">SKONTAKTUJ SIĘ</div>
            <h2 className="text-white">Kontakt</h2>
            <p className="section-subtitle">
              Skontaktuj się z nami, aby uzyskać bezpłatną wycenę projektu
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 bg-[#2A2A2A] rounded-xl border border-[#2A2A2A] hover:border-[#00D9FF]/30 transition-all duration-300 group"
              >
                <div className="p-4 rounded-xl bg-[#00D9FF]/10 group-hover:bg-[#00D9FF]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[#00D9FF] group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 text-lg">Telefon</h3>
                  <a 
                    href="tel:+48123456789" 
                    className="text-gray-300 hover:text-[#00D9FF] transition-colors text-base font-medium block"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-6 bg-[#2A2A2A] rounded-xl border border-[#2A2A2A] hover:border-[#00D9FF]/30 transition-all duration-300 group"
              >
                <div className="p-4 rounded-xl bg-[#00D9FF]/10 group-hover:bg-[#00D9FF]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#00D9FF] group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 text-lg">Email</h3>
                  <a 
                    href="mailto:kontakt@el-instal.pl" 
                    className="text-gray-300 hover:text-[#00D9FF] transition-colors text-base font-medium block break-all"
                  >
                    kontakt@el-instal.pl
                  </a>
                </div>
              </motion.div>

              {/* Person card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 p-8 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-xl border border-[#00D9FF]/20 hover:border-[#00D9FF]/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D9FF]/5 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-white font-bold mb-2 text-xl">Jakub [Nazwisko]</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Specjalista ds. instalacji elektrycznych i teletechnicznych
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-6 p-6 md:p-8 bg-gradient-to-br from-[#2A2A2A]/50 to-[#1A1A1A]/50 rounded-xl border border-[#2A2A2A] backdrop-blur-sm"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                  Imię i nazwisko <span className="text-[#00D9FF]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] focus:bg-[#1F1F1F] transition-all duration-300"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email <span className="text-[#00D9FF]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] focus:bg-[#1F1F1F] transition-all duration-300"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                  Telefon <span className="text-[#00D9FF]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] focus:bg-[#1F1F1F] transition-all duration-300"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Zakres prac <span className="text-[#00D9FF]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] focus:bg-[#1F1F1F] transition-all duration-300 resize-none"
                  placeholder="Opisz zakres prac..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-5 bg-[#00D9FF] text-[#0A0A0A] font-bold rounded-xl neon-glow-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base shadow-lg shadow-[#00D9FF]/20"
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
