import React from 'react';
import { Github, ExternalLink, Shield, Terminal, Heart, Code2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#040407] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span>Open Source Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            About Void Kernel Ecosystem
          </h2>
        </div>

        <div className="max-w-4xl mx-auto terminal-card rounded-2xl p-8 lg:p-10 border border-zinc-800 space-y-8">
          
          <div className="space-y-4 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-white font-mono">Void Kernel</strong> is an independent, open-source Android/Linux kernel project built for experimentation, customization, performance tuning, battery efficiency, and technical learning.
            </p>
            <p>
              Unlike generic pre-packaged kernels, Void Kernel focuses on clean architecture, stripping unnecessary legacy tracing overhead while introducing essential modern features like <strong className="text-emerald-400 font-mono">MGLRU</strong>, <strong className="text-cyan-400 font-mono">BBRplus TCP</strong>, <strong className="text-purple-400 font-mono">SUSFS file unmounting</strong>, and native <strong className="text-cyan-400 font-mono">VoidSU root hooks</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="font-mono text-xs font-bold text-white">Independent Project</h4>
              <p className="text-[11px] text-zinc-400">
                Driven by passion for custom Android OS development and hardware performance exploration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <h4 className="font-mono text-xs font-bold text-white">VoidSU Ecosystem</h4>
              <p className="text-[11px] text-zinc-400">
                Designed hand-in-hand with VoidSU for seamless, stealth root elevation without userspace bloat.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-purple-400" />
              </div>
              <h4 className="font-mono text-xs font-bold text-white">100% Open Source</h4>
              <p className="text-[11px] text-zinc-400">
                Licensed under GPL-2.0 and GPL-3.0. Contributions, forks, and patches are warmly welcomed.
              </p>
            </div>
          </div>

          {/* GitHub Links Callout */}
          <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-zinc-400" />
              <span className="font-mono text-xs text-zinc-300">
                Organization Maintainer: <strong className="text-emerald-400">heySaish</strong>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/heySaish/Void_Kernel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 transition-all"
              >
                <span>Void Kernel GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href="https://github.com/heySaish/VoidSU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 transition-all"
              >
                <span>VoidSU GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
