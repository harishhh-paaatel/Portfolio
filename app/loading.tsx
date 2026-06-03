export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050308] text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-20 w-20 rounded-full border border-orange-400/30 bg-gradient-to-br from-orange-500/20 to-transparent shadow-glow animate-pulseGlow" />
        <div className="text-sm uppercase tracking-[0.35em] text-orange-300/90">Initializing experience...</div>
      </div>
    </div>
  );
}
