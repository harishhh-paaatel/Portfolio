'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 pb-24 pt-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-start">
          <div>
            <p className="section-heading">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s connect for internships or project work.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              I&apos;m available for AIML internship opportunities, project collaborations, and practical development work.
            </p>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-300/80">Email</p>
              <a href="mailto:kgharishpatel@gmail.com" className="mt-4 block text-lg font-semibold text-white hover:text-orange-300">
                kgharishpatel@gmail.com
              </a>
              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.28em] text-orange-300/80">Phone</p>
                <p className="mt-4 text-lg font-semibold text-white">8088079617</p>
              </div>
            </div>
          </div>

          <form className="space-y-5 rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-panel backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input type="text" placeholder="Your name" suppressHydrationWarning />
              <Input type="email" placeholder="Your email" suppressHydrationWarning />
            </div>
            <Input type="text" placeholder="Subject" suppressHydrationWarning />
            <Textarea placeholder="Tell me about your project..." suppressHydrationWarning />
            <Button type="submit" className="w-full justify-center" suppressHydrationWarning>
              <Mail size={18} className="mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
