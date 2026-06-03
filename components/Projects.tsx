'use client';

import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 pb-24 pt-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-heading">Projects</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Stunning case studies that feel alive.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Crafted for growth-stage brands, intelligent automation and immersive experiences with strong visual storytelling.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/40 p-6 shadow-panel backdrop-blur-xl ${
                index === 0 ? 'md:col-span-2 xl:col-span-1 xl:row-span-2' : index === 1 ? 'xl:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-300/80">{project.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons removed per user request */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
