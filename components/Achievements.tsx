'use client';

import { achievements } from '@/lib/data';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 pb-24 pt-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-heading">Certifications</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Completed programs, internships, and training.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Verified certifications and internship completions that support my AIML and software engineering profile.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="group glass-card overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl">
              <div className="flex items-center gap-3 text-orange-300">
                <Trophy size={22} />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
