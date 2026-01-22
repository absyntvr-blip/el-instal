'use client';

import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12 w-full bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#00D9FF]" />
            <span className="text-lg font-semibold text-white">PP EL-INSTAL</span>
          </div>
          <div className="text-white/50 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} PP EL-INSTAL Sp. z o.o. Wszystkie prawa zastrzeżone.</p>
            <p className="mt-1">ul. Beniowskiego 51, 80-355 Gdańsk</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
