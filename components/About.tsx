'use client';

import { Briefcase, CalendarDays, Sparkles } from 'lucide-react';
import { stats } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="relative px-6 pb-24 pt-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="section-heading">About Me</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">AI-focused engineering student building practical automation systems.</h2>
          <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            I am a 3rd-year Computer Science Engineering student passionate about AI. I have hands-on experience in Python, Linux, cloud fundamentals, automation, and model-building workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="glass-card relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl">
            <div className="absolute -right-24 top-8 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="flex items-center gap-5">
              <div className="h-24 w-24 rounded-[2.2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-transparent shadow-glow" />
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-orange-300/80">Professional Bio</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">K G Harish Patel</h3>
              </div>
            </div>
            <p className="mt-8 leading-8 text-slate-300">
              I build practical automation and AI-enabled web applications that solve real academic and operational problems while demonstrating strong technical fundamentals.
            </p>

            <div className="mt-8 grid gap-2 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Location:</span> Mysore Division, Karnataka, India
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span> kgharishpatel@gmail.com
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span> 8088079617
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="about-card rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card about-card rounded-[2.2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl">
              <div className="flex items-center gap-4 text-orange-300">
                <Briefcase size={22} />
                <h3 className="text-xl font-semibold text-white">Academic Journey</h3>
              </div>
              <div className="mt-6 space-y-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">2023 - Present</p>
                  <p className="mt-2 text-lg font-semibold text-white">B.E. Computer Science Engineering</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Studying at Maharaja Institute of Technology, Mysore with focus on DevOps, AI, automation, and cloud-based applications.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">2021 - 2023</p>
                  <p className="mt-2 text-lg font-semibold text-white">PUC (Science)</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Completed pre-university education at DR.TF PU College for Boys with 90.1%.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card about-card rounded-[2.2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl">
              <div className="flex items-center gap-4 text-orange-300">
                <CalendarDays size={22} />
                <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
              </div>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li>Python programming, automation, and model-building</li>
                <li>Front-end development with HTML, CSS, and responsive UI</li>
                <li>SQL, DBMS, ER modeling, and data integrity</li>
                <li>Linux, cloud fundamentals, and practical automation workflows</li>
              </ul>
              <div className="mt-8 flex items-center gap-3 rounded-3xl bg-white/5 p-4 text-orange-200 shadow-glow">
                <Sparkles size={18} />
                <p className="text-sm text-slate-200">I build reliable academic and internship-ready technical projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
