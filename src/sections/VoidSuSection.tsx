import React, { useState } from 'react';
import { VOIDSU_INFO } from '../data/voidsuData';
import { Shield, ShieldAlert, Fingerprint, Cpu, Terminal, FileCode, Gauge, Zap, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import { CopyButton } from '../components/CopyButton';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  Fingerprint,
  Cpu,
  Terminal,
  FileCode,
  Gauge,
  Zap
};

interface VoidSuSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const VoidSuSection: React.FC<VoidSuSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'susfs'>('architecture');

  const archCode = `// VoidSU In-Kernel Privilege Handler (Void Kernel Driver)
#include <linux/voidsu.h>
#include <linux/cred.h>

static long voidsu_syscall_hook(unsigned int cmd, unsigned long arg) {
    struct voidsu_request req;
    if (copy_from_user(&req, (void __user *)arg, sizeof(req)))
        return -EFAULT;
        
    /* Verify caller UID with VoidSU stored permission map */
    if (voidsu_validate_uid(current_uid().val, req.target_uid)) {
        commit_creds(prepare_kernel_cred(NULL)); // Elevated privileges granted
        return 0;
    }
    return -EPERM;
}`;

  const susfsCode = `// VoidSU + SUSFS Integration Driver
#include <linux/susfs.h>

void voidsu_hide_overlayfs_mounts(struct path *path) {
    if (susfs_is_blacklisted_uid(current_uid().val)) {
        /* Stealth unmount overlayfs mount points for target UID */
        susfs_unmount_stealth(path);
    }
}`;

  const currentCode = activeTab === 'architecture' ? archCode : susfsCode;

  return (
    <section id="voidsu" className="py-24 relative bg-[#040407] border-t border-zinc-900 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Companion Root Solution</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
            Void<span className="text-cyan-400">SU</span>
          </h2>

          <p className="text-lg sm:text-xl font-mono text-cyan-300 font-medium">
            &ldquo;{VOIDSU_INFO.tagline}&rdquo;
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            {VOIDSU_INFO.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('downloads')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Explore VoidSU Downloads</span>
            </button>
            <a
              href={VOIDSU_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 transition-all"
            >
              <span>GitHub Source</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VOIDSU_INFO.capabilities.map((cap, idx) => {
            const IconComponent = iconMap[cap.icon] || Shield;
            return (
              <div
                key={idx}
                className="terminal-card rounded-2xl p-6 border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-bold font-sans text-zinc-100 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>
                <span className="text-[11px] font-mono text-cyan-400/80 block mb-2">
                  {cap.subtitle}
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {cap.description}
                </p>

                <ul className="space-y-1.5 pt-3 border-t border-zinc-900">
                  {cap.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-[11px] font-mono text-zinc-300">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Architecture Comparison Panel */}
        <div className="terminal-card rounded-2xl p-6 lg:p-8 border border-cyan-500/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-xs">
                <span>Direct In-Kernel Hooks</span>
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">
                Why VoidSU for Void Kernel?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                Traditional userspace root solutions rely on injecting su binaries into the filesystem or running userspace daemon loops that can get killed under high memory pressure. VoidSU resides in kernel memory, communicating directly via custom syscall hooks.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <span className="text-[11px] font-mono text-zinc-400 block">Footprint</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">Zero System Binary</span>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <span className="text-[11px] font-mono text-zinc-400 block">Stealth</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">SUSFS Native</span>
                </div>
              </div>
            </div>

            {/* Right: Code snippet */}
            <div className="lg:col-span-6">
              <div className="bg-[#050508] p-4 rounded-xl border border-zinc-800 relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === 'architecture' ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      syscall_hook.c
                    </button>
                    <button
                      onClick={() => setActiveTab('susfs')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === 'susfs' ? 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      susfs_stealth.c
                    </button>
                  </div>
                  <CopyButton textToCopy={currentCode} />
                </div>
                <pre className="font-mono text-[11px] leading-relaxed text-zinc-300 overflow-x-auto min-h-[160px]">
                  <code>{currentCode}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
