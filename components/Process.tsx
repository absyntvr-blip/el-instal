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
      <div className="container mx-auto">
        {/* Section Header (Linear-style) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="sub-header">JAK PRACUJEMY</div>
          <h2 className="text-white">Proces pracy</h2>
          <p className="section-subtitle">
            Od pierwszego kontaktu do finalnego odbioru — kompleksowa obsługa projektu
          </p>
        </motion.div>

        {/* Steps Grid (Linear-style) */}
        <div className="content-width">
          <div className="grid grid-cols-12 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="col-span-12 md:col-span-6 lg:col-span-3 relative group"
                >
                  <div className="glass-card h-full flex flex-col text-left">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="stat-number text-3xl text-[#00D9FF] leading-none">
                        {step.number}
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.06] border border-white/[0.08]">
                        <Icon className="w-6 h-6 text-[#00D9FF]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 leading-tight">{step.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed flex-grow">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#00D9FF]/20 to-transparent" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
