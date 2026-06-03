'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/lib/data';

// Social icons intentionally removed per user request

export default function Header() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          const current = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (current?.target.id) {
            setActive(current.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.2 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 mx-auto max-w-7xl px-6 py-5 md:px-10">
      <div className="pointer-events-auto flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-panel backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/10 text-orange-300 shadow-glow">
            K
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-orange-300/80">K G Harish Patel</p>
            <p className="text-[0.82rem] text-slate-300">AIML Intern Portfolio</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`relative text-sm transition ${active === item.id ? 'text-orange-300' : 'text-slate-300 hover:text-white'}`}
            >
              {active === item.id ? <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-orange-400" /> : null}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3" />
      </div>
    </header>
  );
}
