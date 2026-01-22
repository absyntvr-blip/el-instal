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
    <section className="py-24 relative w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Section Header - ZAWSZE wycentrowany */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-[#00D9FF] mb-4 font-semibold">
            NASI PARTNERZY
          </p>
          <h2 className="text-white mb-6">Technologie</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Współpracujemy z wiodącymi producentami sprzętu elektrycznego i teletechnicznego
          </p>
        </motion.div>

        {/* Technologies Grid - logo w grid-cols-3 md:grid-cols-6 */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="glass-card text-center min-h-[120px] flex items-center justify-center group"
            >
              <div className="text-base font-semibold text-white/90 group-hover:text-[#00D9FF] transition-colors">
                {tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
