'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Zap, Wrench, Camera, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Serwis instalacji elektrycznych',
    shortDesc: 'Diagnostyka, naprawa i konserwacja instalacji elektrycznych',
    fullDesc: [
      'Diagnostyka i naprawa awarii elektrycznych',
      'Konserwacja i przeglądy okresowe instalacji',
      'Modernizacja systemów zabezpieczeń (wyłączniki, zabezpieczenia)',
      'Pomiary instalacji elektrycznych',
      'Wydawanie protokołów i dokumentacji powykonawczej',
    ],
    color: '#00D9FF',
  },
  {
    icon: Wrench,
    title: 'Przebudowa i nowe instalacje',
    shortDesc: 'Kompletne instalacje od niskiego do wysokiego napięcia',
    fullDesc: [
      'Instalacje niskiego napięcia (nn): kompletne instalacje elektryczne w budynkach mieszkalnych, rozdzielnice elektryczne, instalacje oświetleniowe LED, instalacje fotowoltaiczne',
      'Instalacje wysokiego napięcia (WN): stacje transformatorowe, przyłącza energetyczne WN, rozdzielnie średniego napięcia (SN), modernizacja infrastruktury energetycznej',
    ],
    color: '#FF6B00',
  },
  {
    icon: Camera,
    title: 'Teletechnika na marketach budowlanych',
    shortDesc: 'Zaawansowane systemy teletechniczne dla obiektów handlowych',
    fullDesc: [
      'Systemy monitoringu CCTV (kamery IP, rejestratory)',
      'Kontrola dostępu (czytniki, szlabany, bramy)',
      'Systemy sygnalizacji pożarowej (SSP)',
      'Sieci strukturalne i okablowanie LAN',
      'Systemy nagłośnienia i DSO (dźwiękowe systemy ostrzegawcze)',
      'Integracja systemów BMS (Building Management System)',
      'Instalacje w obiektach handlowych dużego formatu',
    ],
    color: '#00D9FF',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6">Nasze usługi</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kompleksowe rozwiązania w zakresie instalacji elektrycznych i teletechnicznych
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expanded === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#2A2A2A] border border-[#2A2A2A] rounded-lg p-8 h-full cursor-pointer transition-all duration-300 hover:border-[#00D9FF]/50"
                  onClick={() => setExpanded(isExpanded ? null : index)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.color }} />
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.shortDesc}</p>

                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mt-4">
                      {service.fullDesc.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-[#00D9FF] mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
