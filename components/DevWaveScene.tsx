'use client';

export default function DevWaveScene() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2.6rem] border border-white/10 bg-black/40 p-4 shadow-panel backdrop-blur-xl md:h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,138,31,0.14),_transparent_22%)]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6">
        <div className="relative h-56 w-56 rounded-[2.8rem] border border-orange-300/20 bg-gradient-to-br from-orange-500/15 to-transparent shadow-[0_0_120px_rgba(255,138,31,0.22)]">
          <div className="absolute inset-0 animate-[pulseGlow_4s_ease-in-out_infinite] rounded-[2.8rem] bg-gradient-to-br from-orange-400/20 via-transparent to-orange-500/5" />
          <div className="absolute left-4 top-4 h-14 w-14 rounded-3xl border border-white/10 bg-white/5 blur-sm" />
          <div className="absolute right-4 bottom-4 h-16 w-16 rounded-[1.8rem] border border-orange-300/10 bg-orange-500/5" />
        </div>
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300/80">Live Prototype</p>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">Autonomous DevOps Interface</h3>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            A subtle premium 3D-inspired glass interface with floating motion, glowing accents and rich cinematic depth.
          </p>
        </div>
      </div>

      <div className="absolute left-8 top-16 h-20 w-20 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-12 bottom-20 h-24 w-24 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-8 right-24 h-16 w-16 rounded-full bg-white/5 blur-2xl" />
    </div>
  );
}
