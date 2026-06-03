'use client';

import { experience } from '@/lib/data';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 pb-24 pt-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-heading">Education</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Academic timeline of learned skills and achievements.</h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-orange-200 shadow-glow">
            <Sparkles size={18} />
            <span>Foundations in AI, DevOps, and software systems</span>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl"
            >
              <span className="absolute right-6 top-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-200 ring-1 ring-orange-300/20">
                {item.year}
              </span>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{item.company}</p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="text-base leading-7 text-slate-300">{item.description}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-200">
                  <span>Contact for internship details</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
