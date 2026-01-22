'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileSearch, DraftingCompass, Wrench, FileCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Audyt i wycena',
    description: 'Dokładna analiza potrzeb i przygotowanie szczegółowej wyceny',
  },
  {
    number: '02',
    icon: DraftingCompass,
    title: 'Projektowanie',
    description: 'Tworzenie dokumentacji projektowej zgodnej z normami',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Realizacja',
    description: 'Profesjonalne wykonanie instalacji przez certyfikowany zespół',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Odbiór i dokumentacja',
    description: 'Kompletna dokumentacja powykonawcza i protokoły pomiarowe',
  },
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="section-spacing relative w-full">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24"
        >
          <div className="text-center mb-12">
            <div className="sub-header mb-3">JAK PRACUJEMY</div>
            <h2 className="text-white mb-8">Proces pracy</h2>
          </div>
          <p className="section-subtitle mx-auto max-w-[650px]">
            Od pierwszego kontaktu do finalnego odbioru - kompleksowa obsługa projektu
          </p>
        </motion.div>

        {/* Steps Grid - 12 column system */}
        <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="col-span-12 md:col-span-6 lg:col-span-3 relative group"
              >
                <div className="glass-card p-8 h-full flex flex-col text-left">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="stat-number text-3xl text-[#00D9FF] leading-none">
                      {step.number}
                    </div>
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#00D9FF]/10 to-[#00D9FF]/5">
                      <Icon className="w-6 h-6 text-[#00D9FF]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed flex-grow text-sm">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#00D9FF]/30 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
