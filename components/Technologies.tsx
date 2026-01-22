'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  'ABB',
  'Schneider Electric',
  'Siemens',
  'Hikvision',
  'Legrand',
  'Eaton',
  'Phoenix Contact',
];

export default function Technologies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-spacing relative w-full">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-white mb-6 md:mb-8">Technologie</h2>
          <p className="section-subtitle mx-auto">
            Współpracujemy z wiodącymi producentami sprzętu elektrycznego i teletechnicznego
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-[#2A2A2A] border border-[#2A2A2A]/50 rounded-xl p-8 text-center hover:border-[#00D9FF]/50 transition-all duration-300 min-h-[140px] flex items-center justify-center group"
            >
              <div className="text-lg md:text-xl font-semibold text-white leading-tight group-hover:text-[#00D9FF] transition-colors">
                {tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
