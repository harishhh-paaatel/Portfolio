'use client';

import { skills } from '@/lib/data';
import { formatNumber } from '@/lib/utils';

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 pb-24 pt-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-heading">Skills</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Interactive expertise for modern product delivery.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Categories designed for premium development workflows, AI systems, cloud scaling and automation architecture.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group glass-card overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-300/80">{skill.title}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{skill.progress}% mastery</h3>
                </div>
                <div className="rounded-3xl border border-orange-300/20 bg-orange-500/10 px-3 py-2 text-sm text-orange-200">Premium</div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-transparent transition-all duration-700" style={{ width: `${skill.progress}%` }} />
              </div>

              <div className="mt-8 grid gap-3">
                {skill.items.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition group-hover:-translate-y-1 group-hover:bg-white/10">
                    <p className="text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
