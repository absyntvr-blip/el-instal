'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileSearch, DraftingCompass, Wrench, FileCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Audyt i wycena',
    description: 'Analiza potrzeb i przygotowanie szczegółowej wyceny projektu',
  },
  {
    number: '02',
    icon: DraftingCompass,
    title: 'Projektowanie',
    description: 'Tworzenie dokumentacji projektowej zgodnej z obowiązującymi normami',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Realizacja',
    description: 'Profesjonalne wykonanie instalacji przez certyfikowany zespół specjalistów',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Odbiór i dokumentacja',
    description: 'Kompletna dokumentacja powykonawcza oraz protokoły pomiarowe',
  },
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-24 relative w-full">
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
            JAK PRACUJEMY
          </p>
          <h2 className="text-white mb-6">Proces pracy</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Od pierwszego kontaktu do finalnego odbioru — kompleksowa obsługa projektu
          </p>
        </motion.div>

        {/* Steps Grid - Desktop: 2x2 grid, Tablet: 2 kolumny, Mobile: 1 kolumna */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card h-full flex flex-col text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="stat-number text-4xl lg:text-5xl text-[#00D9FF] leading-none">
                    {step.number}
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.06] border border-white/[0.08]">
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-[#00D9FF]" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-base lg:text-lg text-white/60 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
