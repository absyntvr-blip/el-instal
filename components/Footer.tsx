'use client';

import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] py-12 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-[#00D9FF]" />
            <span className="text-xl font-bold text-white">EL INSTAL</span>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} El Instal. Wszystkie prawa zastrzeżone.</p>
            <p className="mt-1">Instalacje elektryczne i teletechniczne</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
