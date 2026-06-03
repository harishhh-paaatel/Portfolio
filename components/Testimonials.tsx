'use client';

import { languages } from '@/lib/data';
import { Globe } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 pb-24 pt-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-heading">Languages</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Communicating across technical and regional contexts.</h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-orange-200 shadow-glow">
            <Globe size={18} />
            <span>Multilingual communication skills</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {languages.map((item) => (
            <div key={item.language} className="glass-card rounded-[2.2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-300/80">{item.language}</p>
              <p className="mt-4 text-lg font-semibold text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
