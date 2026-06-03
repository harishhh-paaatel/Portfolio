'use client';

import { services } from '@/lib/data';
import { Cpu, Cloud, Code2, Layers, ShieldCheck } from 'lucide-react';

const icons = [ShieldCheck, Cpu, Cloud, Code2, Layers, ShieldCheck];

export default function Services() {
  return (
    <section id="services" className="relative px-6 pb-24 pt-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="section-heading">Certifications</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Technical programs and internships completed.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Achievements from job simulations, internship programs, cloud essentials, and technical courses relevant to AIML and software development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Cloud;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl"
              >
                <div className="absolute inset-x-8 top-0 h-24 rounded-b-[2.2rem] bg-gradient-to-b from-orange-500/15 to-transparent" />
                <div className="relative z-10 flex items-center gap-4 text-orange-300">
                  <Icon size={24} />
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
