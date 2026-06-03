'use client';

import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050308] px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300/90">K G Harish Patel</p>
          <p className="mt-3 max-w-xl text-sm text-slate-400">
            3rd-year CSE student focused on AIML and cloud-ready academic applications.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <a href="mailto:kgharishpatel@gmail.com" aria-label="Email" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-orange-300/40 hover:text-orange-300">
            <Mail size={18} />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1VopNEhix9aKBLX_ivwW9ra0W17r5fdVT"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">© 2026 K G Harish Patel. AIML intern portfolio.</div>
    </footer>
  );
}
