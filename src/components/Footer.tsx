import React from 'react';
import { Terminal, Github, Shield, FileText, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040407] border-t border-zinc-900 text-zinc-400 py-16 overflow-hidden">
      {/* Glow Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-emerald-500/40 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-mono font-bold text-base text-zinc-100 tracking-wider">
                VOID<span className="text-emerald-400">KERNEL</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              An open-source custom Android/Linux kernel project focused on performance, efficiency, customization, and native root integration.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Ecosystem
              </span>
            </div>
          </div>

          {/* Void Kernel Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Void Kernel
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-emerald-400 transition-colors">
                  Kernel Features
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-emerald-400 transition-colors">
                  System Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('devices')} className="hover:text-emerald-400 transition-colors">
                  Supported Devices (gram/miatoll)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('downloads')} className="hover:text-emerald-400 transition-colors">
                  Downloads & Releases
                </button>
              </li>
            </ul>
          </div>

          {/* VoidSU Ecosystem */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              VoidSU Root
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('voidsu')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>VoidSU Overview</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('docs')} className="hover:text-emerald-400 transition-colors">
                  VoidSU Setup Guide
                </button>
              </li>
              <li>
                <a href="https://github.com/heySaish/VoidSU" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  VoidSU GitHub Source
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('changelog')} className="hover:text-emerald-400 transition-colors">
                  Ecosystem Changelog
                </button>
              </li>
            </ul>
          </div>

          {/* Open Source & Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Developer Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://github.com/heySaish" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub (@heySaish)</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/heySaish/Void_Kernel" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Kernel Source Tree</span>
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">
                  Project Philosophy & About
                </button>
              </li>
              <li className="pt-1">
                <span className="font-mono text-[11px] text-zinc-500">
                  Licenses: GPL-2.0 (Kernel) / GPL-3.0 (VoidSU)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Void Kernel & VoidSU Ecosystem. Maintained by{' '}
            <a
              href="https://github.com/heySaish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-emerald-400 underline underline-offset-4"
            >
              heySaish
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React + Vite + Netlify Ready</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
