'use client';

import { ArrowRight, Mail, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-28 sm:px-10 md:pt-32">
      <div className="absolute inset-0 hero-mouse-layer" />
      <div className="noise-overlay" />
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-orange-100 shadow-glow border border-orange-400/10 backdrop-blur-xl">
            <Rocket size={18} className="text-orange-300" />
            <span>Building practical AI, automation, and web systems for academic growth.</span>
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[0.95] text-white md:text-7xl xl:text-8xl section-title">
            AIML Intern
          </h1>
          <h2 className="mt-4 text-4xl font-semibold text-orange-300 md:text-5xl xl:text-6xl">
            3rd-year Computer Science Engineering Student & AI Enthusiast
          </h2>

          <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg section-subtitle">
            I am a 3rd-year Computer Science Engineering student passionate about AI. I work with Python, Linux, cloud technologies, and automation to build useful internship-ready applications.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button className="w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} suppressHydrationWarning>
              View Projects
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <a
              href="mailto:kgharishpatel@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-orange-300/40 hover:text-orange-300 sm:w-auto"
            >
              <Mail size={16} className="mr-2" />
              Email Me
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="glass-card p-4 text-center">
              <p className="text-3xl font-bold text-white">6</p>
              <p className="mt-2 text-sm uppercase tracking-[0.26em] text-slate-400">Projects</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-3xl font-bold text-white">4+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.26em] text-slate-400">Skills</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-3xl font-bold text-white">3</p>
              <p className="mt-2 text-sm uppercase tracking-[0.26em] text-slate-400">Education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
