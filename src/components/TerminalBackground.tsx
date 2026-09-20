import React, { useEffect, useState } from 'react';

export const TerminalBackground: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dark Ambient Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-500/05 rounded-full blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Animated Subtle Floating Kernel Tech Elements */}
      {!reducedMotion && (
        <div className="absolute inset-0 opacity-25">
          {/* Flowing binary stream background lines */}
          <div className="absolute top-12 left-[10%] font-mono text-[10px] text-emerald-500/40 animate-pulse-slow">
            [ 0.000000] Linux version 5.15.x-VoidKernel (heySaish@build-host)
          </div>
          <div className="absolute top-1/4 right-[8%] font-mono text-[10px] text-cyan-500/30 animate-pulse-slow">
            susfs_init: selective unmount filesystem initialized v1.5.5
          </div>
          <div className="absolute bottom-1/3 left-[5%] font-mono text-[10px] text-zinc-600/40">
            mglru: 4 generations enabled, zstd compression pool online
          </div>
          <div className="absolute bottom-12 right-[12%] font-mono text-[10px] text-emerald-500/30">
            voidsu: sys_call_table hook registered [OK]
          </div>
        </div>
      )}

      {/* Scanline Texture Effect */}
      <div className="absolute inset-0 scanline opacity-3" />
    </div>
  );
};
